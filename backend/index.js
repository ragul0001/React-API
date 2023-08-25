
const express = require('express');
const database = require('./Database/sql')
const bodyParser = require('body-parser');
const cors = require("cors");
const session = require('express-session');
const cookiePa = require('cookie-parser');
const multer=require("multer");
const path=require('path')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const jwt = require('jsonwebtoken');

ffmpeg.setFfmpegPath(ffmpegPath);

const app = express();


// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())
app.use(bodyParser.json())
app.use(cookiePa())
app.use(express.static('public'))
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    //    store: sessionStore,
    cookie: {
        secure: true,
        maxAge: 3600000
    }
}))
app.use('/images', express.static('public/images'));
app.use('/thumbnails', express.static('public/thumbnails'));


const secretKey = 'your-secret-key';
const corsOptions = {
    origin: "",
    credentials: true,
    optionSuccessStatus: 200,
    methods: ['POST', 'GET']
}
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
       cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
         cb(null,file.fieldname + "_" + Date.now()+path.extname(file.originalname));
    }
})
const Upload=multer({
    storage:storage
})
const storages=multer.diskStorage({
      destination:(req,file,db)=>{
        db(null,'public/images')
      },
      filename:(req,file,db)=>{
         db(null,Date.now() + '-' + file.originalname)
      }
})

const video=multer({
    storage:storages
})


app.use(cors(corsOptions))


app.get("/create", (req, res) => {
    let databaseName = "Registration"
    let query = `CREATE DATABASE IF NOT EXISTS ${databaseName}`;
    database.query(query, (err) => {
        if (err) throw err;
        console.log("Database Created Sucessfully");
        let useQuery = `USE ${databaseName}`;
        database.query(useQuery, (error) => {
            if (error) throw error;

            console.log("Using Database");

            return res.send(
                `Created and Using ${databaseName} Database`);
        })
    })
});

app.get("/table", (req, res) => {
    let table = "DetailStudent";
    let query = `CREATE TABLE IF NOT EXISTS ${table} (Id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,Name VARCHAR(255),LastName VARCHAR(255),Email VARCHAR(255),Contact INT(10) ,City VARCHAR(255),Gender VARCHAR(255))`;

    database.query(query, (err) => {
        if (err) throw err;
        console.log("TableCreate Sucessfully")
        return res.send("Table Created....")
    })
});
//Admin Table 
app.get("/table2", (req, res) => {
    let table = "AdminTable";
    let query = `CREATE TABLE IF NOT EXISTS ${table} (Id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,Email VARCHAR(255),Password VARCHAR(255))`;

    database.query(query, (err) => {
        if (err) throw err;
        console.log("TableCreate Sucessfully")
        return res.send("Table Created....")
    })
});
//Admin Panel Table 
app.post('/selectadm', (req, res) => {
    let query = 'SELECT * FROM AdminTable WHERE Email = ? AND Password = ?';
    database.query(query, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ Message: "error in server" });
        if (result.length > 0) {            
            req.session.password = result[0].password;
            return res.json({ Login: true })
            
        }
        else {
            console.log("It Values are not insert")
            return res.json({ Login: false })
        }

    })
})
//Insert
// app.post("/insert", (req, res) => {
//     //Method-1
//     // let fname = req.body.fname;
//     // let lname = req.body.lname;
//     // let Email = req.body.email;
//     // let contact = req.body.contact;
//     // let city = req.body.city;
//     // let gender = req.body.gender;
//     // const postquery = `INSERT INTO DetailStudent (Name,LastName,Email,Contact,City,Gender) VALUES (?,?,?,?,?,?)`;

//     //METHOD-2

//     let value = req.body;
//     const postquery = `INSERT INTO  DetailStudent (Name,LastName,Email,Contact,City,Gender) VALUES ( '${value.fname}','${value.lname}','${value.email}','${value.contact}','${value.city}','${value.gender}')`;

//     console.log(postquery);
//     database.query(postquery, (err, results) => {
//         if (err) throw err;
//         console.log("Data ")
//         res.send("Table inserted from server")

//     })
// });
//SELECT
app.get("/select", (req, res) => {
    let query = `SELECT * FROM DetailStudent`;
    database.query(query, (err, rows) => {
        if (err) throw err;
        console.log(JSON.parse(JSON.stringify(rows)));
        res.send(JSON.parse(JSON.stringify(rows)))
    })

})
//READ
app.get("/read/:id", (req, res) => {
    let query = `SELECT * FROM DetailStudent WHERE Id=?`;
    const id = req.params.id;
    database.query(query, [id], (err, rows) => {
        if (err) throw err;
        console.log(JSON.parse(JSON.stringify(rows)));
        res.send(JSON.parse(JSON.stringify(rows)))
    })
})
//Update
app.put("/update/:id", (req, res) => {
    const sql = 'UPDATE DetailStudent SET `Name`=?,`LastName`=? ,`Email`=?,`Contact`=?,`City`=?,`Gender`=? WHERE Id=?';
    const id = req.params.id;
    database.query(sql, [req.body.Name, req.body.LastName, req.body.Email, req.body.Contact, req.body.City, req.body.Gender, id], (err, result) => {
        if (err) throw err;
        console.log(JSON.parse(JSON.stringify(result)));
        res.send(JSON.parse(JSON.stringify(result)))
    })

})

//Delete
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM DetailStudent WHERE Id=?';

    database.query(sql, id, (err, result) => {
        if (err) throw err;
        console.log(JSON.parse(JSON.stringify(result)));
        res.send(JSON.parse(JSON.stringify(result)))
    })

})
// Conditions Checking
app.post("/insertCheck", (req, res) => {
    const { fname, lname, email, contact, city, gender } = req.body;
    const query = `SELECT * FROM DetailStudent WHERE Email=? AND Contact=?`;
    database.query(query,[email,contact], (err, result) => {
        if (result.length > 0) {
            console.log("Value Exists");
            res.send("Value Exists")
        }
        else {
            const { fname, lname, email, contact, city, gender } = req.body;
            const postquery = `INSERT INTO  DetailStudent (Name,LastName,Email,Contact,City,Gender) VALUES (?,?,?,?,?,?)`;
            console.log(postquery);
            database.query(postquery, [fname, lname, email, contact, city, gender], (err, results) => {
                if (err) throw err;
                console.log("Data ")
                res.send("Table inserted from server")

            })

        }
    })

})



//Image Create file
app.get('/imgfield',(req,res)=>{
    let tableName='userFile';
    let query=`CREATE TABLE ${tableName} (id INT(10) NOT NULL AUTO_INCREMENT, image TEXT, PRIMARY KEY(id))`
    database.query(query,(err)=>{
        if(err) throw err;
        console.log("ImageTable Created ");
        res.send("Image Table Uploaded");   
    })
})
//Image Upload File
app.post("/Upload",Upload.single('image'),(req,res)=>{
      if(!req.file){
         console.log("NO file Upload!")
      }
      else{
        console.log(req.file.filename);
       const image=req.file.filename;
       const sql=`INSERT INTO userFile (image) VALUES (?)`;       
       database.query(sql,[image],(err,result)=>{
          if(err)throw err;
          return res.send({Status:"Success"})
       })
    }
})
//Select image in 
app.get("/show",(req,res)=>{
    const sql=`SELECT * FROM userFile`;
    database.query(sql,(err,rows)=>{
          if(err)throw err;
          console.log("Image displayed")
          return res.json(rows)
    })
})


//Create Video file
app.get('/Vfield',(req,res)=>{
    let tableName='VideoFile';
    let query=`CREATE TABLE ${tableName} (id INT(10) NOT NULL AUTO_INCREMENT,videoPath VARCHAR(255),thumbnailPath VARCHAR(255) , PRIMARY KEY(id))`
    database.query(query,(err)=>{
        if(err) throw err;
        console.log("Video Table Created ");
        res.send("Video Table Uploaded");   
    })
})

// //Video upload
app.post("/Vupload",video.single('videos'),(req,res)=>{
const videoPath=req.file.path;
const thumbnailPath = `thumbnails/${req.file.filename}.png`;
ffmpeg(videoPath)
.screenshots({
  timestamps: ['00:00:02'],
  filename: `${req.file.filename}.png`,
  folder: 'public/thumbnails',
  size: '520x240',
})
.on('end', () => {
    const query = 'INSERT INTO VideoFile (videoPath, thumbnailPath) VALUES (?, ?)';
    database.query(query, [videoPath, thumbnailPath], (err, results) => {
      if (err) throw err;
      console.log('Video and thumbnail information saved in MySQL database');
      return res.send({thumbnailPath,videoPath,Status:"Success"})
    });
  });
})
// //selec Video
// app.get('/viewV',(req,res)=>{
//      const videoId=req.params.id;
//      database.query(`SELECT * FROM images WHERE id=?`,[videoId],(err,results)=>{
//         if (err) {
//             console.error(err);
//             res.status(500).json({ error: 'Internal Server Error' });
//           } else if (results.length === 0) {
//             res.status(404).json({ error: 'Video not found' });
//           }
//         else {
//             const filepath = results[0].filepath;
//             ffmpeg(filepath)
//               .on('end', () => {
//                 console.log('Thumbnail generated');
//                 res.sendFile(`${videoId}.png`, { root:  'public/thumbnails' });
//               })
//               .screenshots({
//                 count: 1,
//                 filename: `${videoId}.png`,
//                 folder: 'public/thumbnails',
//               });
//          }
//      })
// })
//Paginations
app.get("/api/data",(req,res)=>{
      const page=parseInt(req.query.page) || 1;
      const pageSize=5;
      const offSet=(page-1)*pageSize;

      const query=`SELECT * FROM DetailStudent  LIMIT ${pageSize} OFFSET ${offSet}`;
      database.query(query,(err,result)=>{
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Error executing MySQL query' });
          } else {
            res.json(result);
          }
      })
})

//TimeOut and Session
const verifyToken = (req, res, next) => {
    const token = req.session.token || req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Failed to authenticate token' });
      }
      req.email = decoded.email;
      next();
    });
  };
  
  // An example protected route
 


app.listen(8000, () => {
    console.log('Server is up and running on 8000');
});