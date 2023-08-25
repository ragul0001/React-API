// import axios from 'axios'
// import React, { useEffect,useState,useRef } from 'react'
// import { Link } from 'react-router-dom';

//Paginations Method
// const Table = (props) => {
//     const [data, setData] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [loading, setLoading] = useState(false);
//     const [details, setDetails] = useState([]);
  
//         useEffect(()=>{
//              axios.get(`http://localhost:8000/select`)
//              .then(res=>setData(res.data))
//              .catch(err=>console.log(err))
//         },[])
   
//         const HandleDel=(Id)=>{
//             alert("Are You want to delete this ID:")
//             axios.delete(`http://localhost:8000/delete/${Id}`)
//             .then(res=>{
//                  window.location.reload();
//                 })
//             .catch(err=>console.log(err))

//           }
//           useEffect(() => {
//             fetchData(currentPage);
//           }, [currentPage]);

//           const fetchData = (page) => {
//             axios.get(`http://localhost:8000/api/data?page=${page}`)
//               .then((response) => {
//                 setData(response.data);             
               
//               })
//               .catch((error) => {
//                 console.error('Error fetching data:', error);
             
              
//               });
//           };

//           //Loading Effect


//   return (
//          <>
//          <div class="flex flex-col">
//     <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
//     <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
//       <div class="overflow-hidden">
//         <table class="min-w-full text-center text-sm font-light">
//           <thead
//             class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
//             <tr>
//              <th scope="col" class="px-6 py-4">Sl.no</th>
//               <th scope="col" class="px-6 py-4">FirstName</th>
//               <th scope="col" class="px-6 py-4">LastName</th>
//               <th scope="col" class="px-6 py-4">Email</th>
//               <th scope="col" class="px-6 py-4">Contact</th>
//               <th scope="col" class="px-6 py-4">City</th>
//               <th scope="col" class="px-6 py-4">Gender</th>
//               <th scope="col" class="px-6 py-4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//           {data.length > 0 ? (
//                    data.map((user) => (
//                 <tr className="border-b dark:border-neutral-500" key={user.id}>
//                   <td className="whitespace-nowrap px-6 py-4 ">{user.Id}</td>
//                     <td className="whitespace-nowrap px-6 py-4 ">{user.Name}</td>
//                     <td className="whitespace-nowrap px-6 py-4 ">{user.LastName}</td>
//                     <td className="whitespace-nowrap px-6 py-4">{user.Email}</td>
//                     <td className="whitespace-nowrap px-6 py-4">{user.Contact}</td>
//                     <td className="whitespace-nowrap px-6 py-4">{user.City}</td>
//                     <td className="whitespace-nowrap px-6 py-4">{user.Gender}</td>
//                     <td>
//                         <Link to={`/read/${user.Id}`}><button className="p-2  w-28 rounded-lg bg-yellow-500 text-white mx-2 font-extrabold"  >Read</button></Link>
//                         <Link to={`/update/${user.Id}`}> <button className="p-2  w-28 rounded-lg bg-green-500 text-white mx-2 font-extrabold"  >Edit</button></Link>
//                        <button className="p-2  w-28  rounded-lg bg-red-500 text-white font-extrabold" onClick={()=>HandleDel(user.Id)} >Delete</button>
//                     </td>
                   
//                 </tr>
//                 ))
//             ) : (
//                 <tr>
//                 <td colSpan={4}>No users</td> 
//                 </tr>
//             )}      
              
//           </tbody>        
//         </table>
    
//       </div>
//     </div>
//   </div>
//        </div>
//                   <div className='flex justify-center'>
//                   <span className='p-2' >Showing{currentPage} to 10 of Entries</span>
//                   </div>      
//                 <div className='flex justify-center'>            
//                 <a href="#" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} class="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                   <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
//                   Previous
//                 </a>
//                 <a href="#" onClick={() => setCurrentPage(currentPage + 1)} class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                   Next
//                   <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//                 </a>
//             </div>



//          </>
//   )
// }

//Loading Effect
import React, { useEffect, useState, useRef, useCallback, useReducer } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const initialState = {
  data: [],
  currentPage: 1,
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
      };
    case 'INCREMENT_PAGE':
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    default:
      return state;
  }
};

const Table = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, currentPage, loading } = state;
  const [details, setDetails] = useState([]);
  const tableRef = useRef(null);

  const fetchData = useCallback(async (page) => {
    dispatch({ type: 'FETCH_DATA' });
    try {
      const response = await axios.get(`http://localhost:8000/api/data?page=${page}`);
      dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
      dispatch({ type: 'FETCH_ERROR' });
    }
  }, []);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, fetchData]);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      dispatch({ type: 'INCREMENT_PAGE' });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });
    if (tableRef.current) {
      observer.observe(tableRef.current);
    }
    return () => observer.disconnect();
  }, [handleObserver]);

  const handleDel = (id) => {
    alert(`Are you sure you want to delete ID: ${id}`);
    axios
      .delete(`http://localhost:8000/delete/${id}`)
      .then((res) => {
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: data.filter((user) => user.id !== id),
        });
      })
      .catch((err) => console.log(err));
  };

  const handlePagination = () => {
    dispatch({ type: 'INCREMENT_PAGE' });
  };

  const limitedData = data.slice(5, currentPage * 5);

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 overflow-hidden" >
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light" ref={tableRef}>
                <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Sl.no
                    </th>
                    <th scope="col" className="px-6 py-4">
                      FirstName
                    </th>
                    <th scope="col" className="px-6 py-4">
                      LastName
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-4">
                      City
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Gender
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody >
                  {limitedData.length > 0 ? (
                    limitedData.map((user) => (
                      <tr className="border-b dark:border-neutral-500" key={user.id}>
                        <td className="whitespace-nowrap px-6 py-4">{user.Id}</td>
                        <td className="whitespace-nowrap px-6 py-4">{user.Name}</td>
                        <td className="whitespace-nowrap px-6 py-4">{user.LastName}</td>
                        <td className="whitespace-nowrap px-6 py-4">{user.Email}</td>
                        <td className="whitespace-nowrap px-6 py-4">{user.Contact}</td>
                        <td className="whitespace-nowrap px-6 py-4">{user.City}</td>
                        <td className="whitespace-nowrap px-6 py-4">{user.Gender}</td>
                        <td>
                          <Link to={`/read/${user.Id}`}>
                            <button className="p-2 w-28 rounded-lg bg-yellow-500 text-white mx-2 font-extrabold">
                              Read
                            </button>
                          </Link>
                          <Link to={`/update/${user.Id}`}>
                            <button className="p-2 w-28 rounded-lg bg-green-500 text-white mx-2 font-extrabold">
                              Edit
                            </button>
                          </Link>
                          <button
                            className="p-2 w-28 rounded-lg bg-red-500 text-white font-extrabold"
                            onClick={() => handleDel(user.Id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr >
                      <td colSpan={4} >No users</td>
                    </tr>
                  )}
                </tbody>
              </table>
              {loading && <div className='flex justify-center'>Loading...</div>}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <span className="p-2">Showing {limitedData.length} of {data.length} Entries</span>
      </div>
      {limitedData.length < data.length && !loading && (
        <div className="flex justify-center">
          <button
            className="p-2 rounded-lg bg-blue-500 text-white mx-2 font-extrabold"
            onClick={handlePagination}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};




export default Table;
// ;

// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import axios from 'axios';

// const Table = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const tableRef = useRef(null);

//   const fetchData = useCallback(async (page) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:8000/api/data?page=${page}`);
//       setData((prevData) => [...prevData, ...response.data]);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchData(currentPage);
//   }, [currentPage, fetchData]);

//   const handleObserver = useCallback((entries) => {
//     const target = entries[0];
//     if (target.isIntersecting) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(handleObserver, {
//       root: null,
//       rootMargin: '0px',
//       threshold: 1.0,
//     });
//     if (tableRef.current) {
//       observer.observe(tableRef.current);
//     }
//     return () => observer.disconnect();
//   }, [handleObserver]);

//   const handleDel = (id) => {
//     alert(`Are you sure you want to delete ID: ${id}`);
//     axios
//       .delete(`http://localhost:8000/delete/${id}`)
//       .then((res) => {
//         setData((prevData) => prevData.filter((user) => user.id !== id));
//       })
//       .catch((err) => console.log(err));
//   };

//   const limitedData = data.slice(0, currentPage * 10);

//   return (
//     <>
//       <div className="flex flex-col">
//         <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
//             <div className="overflow-hidden">
//               <table className="min-w-full text-center text-sm font-light" ref={tableRef}>
//                 <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
//                   <tr>
//                     <th scope="col" className="px-6 py-4">
//                       Sl.no
//                     </th>
//                     <th scope="col" className="px-6 py-4">
//                       FirstName
//                     </th>
//                     <th scope="col" className="px-6 py-4">
//                       LastName
//                     </th>
//                     <th scope="col" className="px-6 py-4">
//                       Email
//                     </th>
//                     <th scope="col" className="px-6 py-4">
//                       Contact
//                     </th>
//                     <th scope="col" className="px-6 py-4">
//                       City
//                     </th>
//                     <th scope="col" className="px-6 py-4">
//                       Gender
//                     </th>
//                     <th scope="col" className="px-6 py-4">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {limitedData.length > 0 ? (
//                     limitedData.map((user) => (
//                       <tr className="border-b dark:border-neutral-500" key={user.id}>
//                         <td className="whitespace-nowrap px-6 py-4">{user.Id}</td>
//                         <td className="whitespace-nowrap px-6 py-4">{user.Name}</td>
//                         <td className="whitespace-nowrap px-6 py-4">{user.LastName}</td>
//                         <td className="whitespace-nowrap px-6 py-4">{user.Email}</td>
//                         <td className="whitespace-nowrap px-6 py-4">{user.Contact}</td>
//                         <td className="whitespace-nowrap px-6 py-4">{user.City}</td>
//                         <td className="whitespace-nowrap px-6 py-4">{user.Gender}</td>
//                         <td>
//                           <Link to={`/read/${user.Id}`}>
//                             <button className="p-2 w-28 rounded-lg bg-yellow-500 text-white mx-2 font-extrabold">
//                               Read
//                             </button>
//                           </Link>
//                           <Link to={`/update/${user.Id}`}>
//                             <button className="p-2 w-28 rounded-lg bg-green-500 text-white mx-2 font-extrabold">
//                               Edit
//                             </button>
//                           </Link>
//                           <button
//                             className="p-2 w-28 rounded-lg bg-red-500 text-white font-extrabold"
//                             onClick={() => handleDel(user.Id)}
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan={4}>No users</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//               {loading && <div className='flex justify-center'>Loading...</div>}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <span className="p-2">Showing {limitedData.length} of {data.length} Entries</span>
//       </div>
//     </>
//   );
// };

// export default Table;






