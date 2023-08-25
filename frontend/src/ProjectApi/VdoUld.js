import React,{useEffect, useState} from 'react'
import axios from "axios";




function ImgVd() {
    const [file,setFile]=useState();
    const [video, setVideo] = useState(null);
    const [thumbnail, setThumbnail] = useState('');
    //
    const [pathName,setPathName]=useState('');   
    const handleFile=(e)=>{
          const selectedFile=e.target.files[0];
          setFile(selectedFile);
          //
          const url=URL.createObjectURL(selectedFile);
          setPathName(url);
          console.log(url);

    }
    // const handleUpload=()=>{
       
    //     const formdata=new FormData();
    //     formdata.append('videos',file)
    //     axios.post('http://localhost:8000/Vupload',formdata)
    //     .then(res =>{
    //         if(res.data.Status === "Success"){
              
    //             console.log("Image uploaded")
    //            alert("Video upload Sucessfully")
    //         }
    //         else{
    //             console.log("error")
    //            alert("NO image")
    //         }
    //     })
    //     .catch(err=>console.log(err))
    // }
      //Thumbnail

    const handleUpload=()=>{
       
        const formdata=new FormData();
        formdata.append('videos',file)
        axios.post('http://localhost:8000/Vupload',formdata)
        .then(res =>{
            const {thumbnailPath,Status}=res.data;
            const thumbnailsrc='http://localhost:8000/'+thumbnailPath;
            console.log(thumbnailPath)
            setThumbnail(thumbnailsrc);
            alert("Video Upload successfully");
        })
        .catch(err=>console.log(err))
    }

    //Correct method
  //   useEffect(()=>{
  //       fetchVideo();
  // },[])
  // const fetchVideo = async () => {
  //   try {
  //   const response = await axios.get('http://localhost:8000/viewV');
  //  setThumbnail(response.data)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const handleThumbnailClick = (videoId) => {
  //   axios(`http://localhost:8000/viewV/${videoId}`)
  //     .then((response) => {
  //       if (response.ok) {
  //         setThumbnail(`http://localhost:8000/viewV/${videoId}`);
  //       } else {
  //         console.error('Error:', response.statusText);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

    return (
        <div>
            <div className='flex  justify-center mt-10'>
                <div className='flex flex-col '>
                    <h1 className='text-2xl font-semibold text-blue-500'>Video Upload</h1>
                    <div className='mt-4'>
                        <form  action='/' encType='multipart/form-data'>
                            <input type='file'  name='videos' accept='video/*' onChange={handleFile}/>
                           
                        </form>
                        <button onClick={handleUpload} className='p-3 bg-yellow-500 mt-4 w-40  rounded-full' disabled={!file}>Submit</button>
                    </div>
                </div>
            </div>
                 <div className='flex justify-center mt-5 basis-44'>
                    
                   
        
                    {/* {thumbnail.map((video) => (
                            <div key={video.id}>
                            <img
                                src={video.thumbnailPath}
                                alt="Video Thumbnail"
                                style={{ width: '200px', height: 'auto', cursor: 'pointer' }}
                                onClick={() => window.open(video.videoPath, '_blank')}
                            />
                            </div>
                        ))
                        } */}
                          {/* {thumbnail && (
                              <div>
                                {file ? (
                                  <video controls po>
                                    <source src={URL.createObjectURL(file)} type='video/mp4' />
                                  </video>
                                ) : (
                                  <img
                                    src={thumbnail}
                                    alt='Thumbnail'
                                    style={{ width: '200px', height: 'auto', cursor: 'pointer' }}
                                    onClick={() => window.open(thumbnail, '_blank')}
                                  />
                                )}
                              </div>
                            )} */}

                            {thumbnail && (
                                <video controls poster={thumbnail} >
                                    <source src={pathName} type='video/mp4' />
                                </video>
                           )}      
                        
                        </div>  
        </div>
    )
}

export default ImgVd



