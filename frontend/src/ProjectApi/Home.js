import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import image from '../Images/bgimg.jpg';

export default function Home() {
  const { id } = useParams();
  const [detail, setDetails] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/read/" + id)
      .then(res => {
        console.log(res)
        setDetails(res.data)
        console.log(res.data)
        console.log(detail.Name)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <div className='bg-cover bg-no-repeat bg-center bg-fixed h-screen' style={{ backgroundImage: `url(${image})` }} >
        <div className='w-full h-full flex  justify-center items-center backdrop-blur-sm'>
          <div className='max-w-6xl container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
            <div className='flex flex-wrap justify-center'>
              <div className='flex  bg-white rounded-lg  '>
                <div className='p-6'>
                  <div>
                    <h4 className='text-2xl font-bold relative'>Registration Data</h4>
                    <div className='absolute border-b-4 border-violet-800 outline-none w-10'></div>
                  </div>
                  <div className='text-xl font-bold'>
                    {detail.length > 0 ? (
                      detail.map((details) => (
                        <div className='p-4'>
                        <h2>ID:{details.Id}</h2>
                        <h2>Name:{details.Name}</h2>
                        <h2>LastName:{details.LastName}</h2>
                        <h2>Email:{details.Email}</h2>
                        <h2>Number:{details.Contact}</h2>
                        <h2>City:{details.City}</h2>
                        <h2>Gender:{details.Gender}</h2>
                        </div>
                      ))
                    ) : (
                      <h2>No user</h2>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
