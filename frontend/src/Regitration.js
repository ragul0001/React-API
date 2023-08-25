import React, { Component, useState } from 'react'
import image from './Images/bgimg.jpg';
import img from './Images/image.jpg'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000'
})

export default function Regitration() {
    const initialState = { fname: '', lname: '', email: '', contact: '', city: '', gender: '' };
    const [details, setDetails] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value })
    
      }

    const submitButton = async (e) => {
        const response = await api.post('/insert', details)
        console.log(response)
    }
    const resetButton = () => {
        setDetails({
          fname: '',
          lname: '',
          email: '',
          contact: '',
          city: '',
          gender: ''
        })
      }
    return (
        <>
            <div className='bg-cover bg-no-repeat bg-center bg-fixed h-screen' style={{ backgroundImage: `url(${image})` }}>
                <div className='w-full h-full flex  justify-center items-center backdrop-blur-sm'>
                    <div className='max-w-6xl container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                        <div className='flex flex-wrap bg-white rounded-lg '>
                            <div className='flex  basis-6/12 overflow-x-hidden'>
                                <img src={img} className="w-fit" />
                            </div>
                            <div className='flex basis 1/2 items-center'>
                                <div className='p-6'>
                                    <div>
                                        <h4 className='text-2xl font-bold relative'>Registrations</h4>
                                        <div className='absolute border-b-4 border-violet-800 outline-none w-10'></div>
                                    </div>
                                    <form>


                                        <div className='flex flex-wrap'>
                                            <div className=''>
                                                <label htmlFor='fname' className='font-bold'>FirstName:</label><br />
                                                <input type="text" name='fname' onChange={handleChange} className='border border-black w-60 p-1 mt-2 rounded-md' />
                                            </div>
                                            <div className=' mx-3'>
                                                <label htmlFor='lname' className='font-bold'>LastName:</label><br />
                                                <input type="text" name='lname' onChange={handleChange} className='border border-black w-60 p-1 mt-2 rounded-md' />
                                            </div>
                                        </div>
                                        <div className='mt-4 '>
                                            <label htmlFor='email' className='font-bold'>Email:</label><br />
                                            <input type="email" name='email' onChange={handleChange} className='border-b-2 border-black outline-none  w-11/12 p-1 mt-2 ' />
                                        </div>
                                        <div className='flex flex-wrap mt-9'>
                                            <div className=''>
                                                <label htmlFor='number' className='font-bold'>Contact:</label><br />
                                                <input type="number" name='contact' onChange={handleChange} className='border border-black w-60 p-1 mt-2 rounded-md' />
                                            </div>
                                            <div className=' mx-3'>
                                                <label htmlFor='city' className='font-bold'>City:</label><br />
                                                <input type="text" name='city' onChange={handleChange} className='border border-black w-60 p-1 mt-2 rounded-md' />
                                            </div>
                                        </div>
                                        <div className='mt-4'>
                                            <h4 className='text-lg font-bold'>Gender</h4>
                                            <div class="flex mt-3">
                                                <div class="flex items-center mr-4">
                                                    <input id="inline-radio" type="radio" value="Male" onChange={handleChange} name="gender" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="inline-radio" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Male</label>
                                                </div>
                                                <div class="flex items-center mr-4">
                                                    <input id="inline-2-radio" type="radio" value="Female" onChange={handleChange} name="gender" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="inline-2-radio" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Female</label>
                                                </div>
                                                <div class="flex items-center mr-4">
                                                    <input checked id="inline-radio" type="radio" value="Others" onChange={handleChange} name="gender" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="inline-radio" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Others</label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* kfkg */}


                                        <div className="mb-3">
                                            <button type='submit' onClick={submitButton} className="btn btn-success">Submit</button>
                                            <button type='reset' onClick={resetButton} className="btn btn-danger">Cancel</button>
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </div >

        </>

        // <>
        //     <div className='bg-cover bg-no-repeat bg-center bg-fixed h-screen' style={{ backgroundImage: `url(${image})` }}>
        //         <div className='w-full h-full flex  justify-center items-center backdrop-blur-sm'>
        //             <div className='max-w-6xl container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
        //                 <div className='flex flex-wrap bg-white rounded-lg '>
        //                     <div className='flex  basis-6/12 overflow-x-hidden'>
        //                         <img src={img} className="w-fit" />
        //                     </div>
        //                     <div className='flex basis 1/2 items-center'>
        //                         <div className='p-6'>
        //                             <div>
        //                                 <h4 className='text-2xl font-bold relative'>Registrations</h4>
        //                                 <div className='absolute border-b-4 border-violet-800 outline-none w-10'></div>
        //                             </div>
        //                             <form autoComplete='on' className='mt-9'  >
        //                                 <div className='flex flex-wrap'>
        //                                     <div className=''>
        //                                         <label htmlFor='fname' className='font-bold'>FirstName:</label><br />
        //                                         <input type="text" name='fname' onChange={handleChange} className='border border-black w-60 p-1 mt-2 rounded-md' />
        //                                     </div>
        //                                     <div className=' mx-3'>
        //                                         <label htmlFor='lname' className='font-bold'>LastName:</label><br />
        //                                         <input type="text" name='lname' onChange={handleChange} className='border border-black w-60 p-1 mt-2 rounded-md' />
        //                                     </div>
        //                                 </div>
        //                                 <div className='mt-4 '>
        //                                     <label htmlFor='email' className='font-bold'>Email:</label><br />
        //                                     <input type="email" name='email' onChange={handleChange} className='border-b-2 border-black outline-none  w-11/12 p-1 mt-2 ' />
        //                                 </div>
        //                                 <div className='flex flex-wrap mt-9'>
        //                                     <div className=''>
        //                                         <label htmlFor='number' className='font-bold'>Contact:</label><br />
        //                                         <input type="number" name='contact' onChange={handleChange} className='border border-black w-60 p-1 mt-2 rounded-md' />
        //                                     </div>
        //                                     <div className=' mx-3'>
        //                                         <label htmlFor='city' className='font-bold'>City:</label><br />
        //                                         <input type="text" name='city' onChange={handleChange} className='border border-black w-60 p-1 mt-2 rounded-md' />
        //                                     </div>
        //                                 </div>
        //                                 <div className='mt-4'>
        //                                     <h4 className='text-lg font-bold'>Gender</h4>
        //                                     <div class="flex mt-3">
        //                                         <div class="flex items-center mr-4">
        //                                             <input id="inline-radio" type="radio" value="Male" onChange={handleChange} name="gender" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        //                                             <label for="inline-radio" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Male</label>
        //                                         </div>
        //                                         <div class="flex items-center mr-4">
        //                                             <input id="inline-2-radio" type="radio" value="Female" onChange={handleChange} name="gender" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        //                                             <label for="inline-2-radio" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Female</label>
        //                                         </div>
        //                                         <div class="flex items-center mr-4">
        //                                             <input checked id="inline-radio" type="radio" value="Others" onChange={handleChange} name="gender" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        //                                             <label for="inline-radio" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">Others</label>
        //                                         </div>
        //                                     </div>
        //                                 </div>

        //                             </form>
        //                             <div className='text-center mt-6'>
        //                                 <button onSubmit={handleSubmit} className='border p-2 bg-violet-800 text-white  w-11/12 text-center rounded-full'  >Submit</button>
        //                             </div>Ï
        //                         </div>
        //                     </div>

        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </>
    )
}
