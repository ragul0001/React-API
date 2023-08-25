import React,{useEffect, useState} from 'react'
import axios from "axios";

function ImgVd() {
    const [file,setFile]=useState();
    const [img,setImg]=useState([]);
    const [formValues,setFormValues]=useState([{email:'',password:''}])

    const handleFile=(e)=>{
          setFile(e.target.files[0])
    }
    const handleUpload=()=>{
       
        const formdata=new FormData();
        formdata.append('image',file)
        axios.post('http://localhost:8000/Upload',formdata)
        .then(res =>{
            if(res.data.Status === "Success"){
                console.log("Image uploaded")
               alert("Image upload Sucessfully")
            }
            else{
                console.log("error")
               alert("NO image")
            }
        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
          axios.get('http://localhost:8000/show')
          .then(res=>{
             setImg(res.data)
          })
          .catch(err=>console.log(err))
    },[])
    const addFormField=()=>{
          setFormValues([...formValues,{email:"",password:""}])
    }
    const removeField=(i)=>{
           let newFormValues=[...formValues];
           newFormValues.splice(i,1);
           setFormValues(newFormValues); 
    }
    const handleChange=(i,e)=>{
         let newFormValues=[...formValues];
         newFormValues[i][e.target.name]=e.target.value;
         setFormValues(newFormValues)
           
    }
    const handleSubmit=(e)=>{
            e.preventDefault();
            alert(JSON.stringify(formValues));
    }
    return (
        <div>
            <div className='flex  justify-center mt-10'>
                <div className='flex flex-col '>
                    <h1 className='text-2xl font-semibold text-blue-500'>Image Upload</h1>
                    <div className='mt-4'>
                        <form  action='/' encType='multipart/form-data'>
                            <input type='file'  name='image' accept='image/*' onChange={handleFile}/>
                            
                        </form>
                        <button onClick={handleUpload} className='p-3 bg-yellow-500 mt-4 w-40  rounded-full'>Submit</button>
                    </div>
                </div>
            </div>
                 <div className='flex justify-center mt-5 basis-44'>
                    {/* <img src={`http://localhost:8000/images/`+img.image} alt='images' className='w-66 h-72'  /> */}
                    {
                        img.map((image)=>{                          
                             return(
                                <img  key={image.id} src={`http://localhost:8000/images/`+image.image} alt='images'  className='w-20 h-20'/>
                             );
                        })
                    }
                 </div>
                 <div class="flex justify-center">
                    <div class="w-full max-w-xs" >
                     {formValues.map((element,index)=>(
                                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32" key={index} onSubmit={handleSubmit} >
                                <div class="mb-4" >
                                <label class="block text-grey-darker text-sm font-bold mb-2" for="username">Email</label>
                                <input name="email" value={element.email || ''} onChange={(e)=>handleChange(index,e)} class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Username"/>
                                </div>
                                <div class="mb-6">
                                <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                                <input name='password'  value={element.password || ''} onChange={(e)=>handleChange(index,e)} class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                                <p class="text-red text-xs italic">Please choose a password.</p>
                                </div>
                                <div class="flex items-center justify-between">
                                <button  class="border bg-blue hover:bg-blue-dark text-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Sign In
                                </button>
                                <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" onClick={()=>removeField(index)} href="#">
                                    Remove
                                </a>
                                
                                </div>
                            </form>
                     ))}
                     <div>
                        <button className='border bg-blue-300 p-2 rounded-md' onClick={addFormField}>ADD+</button>
                     </div>
                    
                    </div>
                </div>
        </div>
           
    )
}

export default ImgVd