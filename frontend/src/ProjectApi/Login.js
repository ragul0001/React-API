import React, { useState } from 'react'
import image from '../Images/bgimg.jpg';
import img from '../Images/image.jpg'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router';

function Login() {
  // const Login = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState({ email: '', password: '' });
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value })

  }
  //Main
  const handleSubmit = (e) => {
    e.preventDefault();
    //alert("hi")
    axios.post("http://localhost:8000/selectadm", login)
      .then((res) => {
          if(res.data.Login){
            alert("SignIn Sucessfully")
            navigate('/form')
            localStorage.setItem('auth', true)
          
          }
          else{
              alert("No record")
          }
       
          
      })
     
  }
  React.useEffect(() => {
    if (localStorage.getItem('auth'))
      navigate('/')
  }, [])
  // const handleSubmit = (event) => {
  //   if (login.email === 'admin' && login.password === 'admin') {
  //     navigate("/Form")
  //     localStorage.setItem('auth', true)
     
  //   }
  //   else {
  //     alert("Invalid Autentications")
  //   }
  // }
  return (
    <div>

      <div className='bg-cover bg-no-repeat bg-center bg-fixed h-screen' style={{ backgroundImage: `url(${image})` }}>
        <div className='w-full h-full flex  justify-center items-center backdrop-blur-sm'>
          <div className='max-w-6xl container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>

            <div className='flex flex-wrap justify-center relative md:relative lg:relative xl:relative 2xl:relative   '>
              <div className='flex justify-center absolute -top-14 md:absolute md:-top-14 lg:absolute lg:-top-14 xl:absolute xl:-top-14 2xl:absolute 2xl:-top-14 '>
                <img src={img} className="w-1/12 md:w-2/12 lg:w-1/12 xl:w-1/12 2xl:w-1/12 rounded-full" />
              </div>
              <div className='flex basis 1/2 bg-white rounded-lg'>
                <div className='p-6'>
                  <div>
                    <h4 className='text-2xl font-bold relative'>Sign In</h4>
                    <div className='absolute border-b-4 border-violet-800 outline-none w-10'></div>
                  </div>
                  <form autoComplete='on' className='mt-9' onSubmit={handleSubmit} >

                    <div className='mt-4 '>
                      <label htmlFor='email' className='font-bold'>Email:</label><br />
                      <input type="text" name='email' onChange={handleChange} className='border-b-2 border-black outline-none  w-96 p-1 mt-2 ' />
                    </div>
                    <div className='mt-4 '>
                      <label htmlFor='pwd' className='font-bold'>Password:</label><br />
                      <input type="text" name='password' onChange={handleChange} className='border-b-2 border-black outline-none  w-96 p-1 mt-2 ' />
                    </div>

                    <div className='text-center mt-6'>
                      <button className='border p-2 bg-violet-800 text-white  w-11/12 text-center rounded-full'  >Submit</button>
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


export default Login;



