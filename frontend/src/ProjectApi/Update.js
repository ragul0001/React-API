import React, {useEffect,useState } from 'react'
import image from '../Images/bgimg.jpg';
import axios from "axios";
import { useParams } from 'react-router-dom';


export default function Update () {
    const {id}=useParams();;
  
      useEffect(() => {
        axios.get("http://localhost:8000/read/" + id)
          .then(res => {
            console.log(res)
            setValues({
              ...values, 
               Name : res.data[0].Name,
               LastName:res.data[0].LastName,
               Email:res.data[0].Email,
               Contact:res.data[0].Contact,
               City:res.data[0].City,
               Gender:res.data[0].Gender
              })
            
          })
          .catch(err => console.log(err))
      }, [])
        const [values,setValues]=useState({
              Name:'',
              LastName:'',
              Email:'',
              Contact:'',
              City:'',
              Gender:''
        });

      const handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/update/"+id,values)
          .then(res => {
            console.log(res)
            alert("Data Update Sucessfully")
            resetButton();
          })
          .catch(err => console.log(err))
            
    
      }
      
      const resetButton = () => {
        setValues({
          Name:'',
          LastName:'',
          Email:'',
          Contact:'',
          City:'',
          Gender:''
        })
      } 
  return (
    <div>
     <div className='bg-cover bg-no-repeat bg-center bg-fixed h-screen' style={{ backgroundImage: `url(${image})` }} >
        <div className='w-full h-full flex  justify-center items-center backdrop-blur-sm'>
          <div className='max-w-6xl container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
            <div className='flex flex-wrap justify-center'>  
              <div className='flex  bg-white rounded-lg  '>
                <div className='p-6'>
                  <div>
                    <h4 className='text-2xl font-bold relative'>Update Values</h4>
                    <div className='absolute border-b-4 border-violet-800 outline-none w-10'></div>
                  </div>
                  <form autoComplete='on' className='mt-9' onSubmit={handleSubmit} >
                    <div className='flex flex-wrap'>
                      <div className=''>
                        <label htmlFor='fname' className='font-bold'>FirstName:</label><br />
                        <input type="text" name='fname' value={values.Name} onChange={e=>setValues({...values,Name:e.target.value})} className='border border-black w-60 p-1 mt-2 rounded-md' />
                      </div>
                      <div className=' mx-3'>
                        <label htmlFor='lname' className='font-bold'>LastName:</label><br />
                        <input type="text" name='lname' value={values.LastName} onChange={e=>setValues({...values,LastName:e.target.value})} className='border border-black w-60 p-1 mt-2 rounded-md' />
                      </div>
                    </div>
                    <div className='mt-4 '>
                      <label htmlFor='email' className='font-bold'>Email:</label><br />
                      <input type="email" name='email' value={values.Email} onChange={e=>setValues({...values,Email:e.target.value})} className='border-b-2 border-black outline-none  w-11/12 p-1 mt-2 ' />
                    </div>
                    <div className='flex flex-wrap mt-9'>
                      <div className=''>
                        <label htmlFor='number' className='font-bold'>Contact:</label><br />
                        <input type="number" name='contact' value={values.Contact} onChange={e=>setValues({...values,Contact:e.target.value})} className='border border-black w-60 p-1 mt-2 rounded-md' />
                      </div>
                      <div className=' mx-3'>
                        <label htmlFor='city' className='font-bold'>City:</label><br />
                        <input type="text" name='city' value={values.City} onChange={e=>setValues({...values,City:e.target.value})} className='border border-black w-60 p-1 mt-2 rounded-md' />
                      </div>
                    </div>
                    <div className='mt-4'>
                      <h4 className='text-lg font-bold'>Gender</h4>
                      <div class="flex mt-3">
                        <div class="flex items-center mr-4">
                          <input id="inline-radio" type="radio" value={values.Gender} onChange={e=>setValues({...values,Gender:e.target.value})} name="gender" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="inline-radio" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Male</label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input id="inline-2-radio" type="radio" value={values.Gender} onChange={e=>setValues({...values,Gender:e.target.value})}  name="gender" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="inline-2-radio" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Female</label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input checked id="inline-radio" type="radio" value={values.Gender} onChange={e=>setValues({...values,Gender:e.target.value})} name="gender" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="inline-radio" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Others</label>
                        </div>
                      </div>
                    </div>
                    <div className='text-center mt-6'>
                      <button className='border p-2 bg-violet-800 text-white  w-11/12 text-center rounded-full'  >Update</button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
