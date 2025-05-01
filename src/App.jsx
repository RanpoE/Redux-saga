import './App.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Processor from './components/Processor'

const App = () => {

  const dispatch = useDispatch()
  const { data } = useSelector(state => state.data)
  const [query, setQuery] = useState('');
  const { results, loading, error } = useSelector(state => state.search)

  useEffect(() => {
    dispatch({ type: 'FETCH_REQUEST' });
  }, [dispatch])

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    dispatch({ type: 'SEARCH_REQUEST', payload: value });
  };

  return (
    <Processor />
    // <div className="w-full mt-5 px-10">
    //   <h1 className='text-2xl font-bold'>Vite app</h1>
    //   <div>
    //     <input
    //       type="text"
    //       value={query}
    //       onChange={handleChange}
    //       placeholder="Search here..."
    //     />
    //     {loading && <p>Loading...</p>}
    //     {error && <p>Error: {error}</p>}
    //     {!results.length && !loading && query && <p>No results.</p>}
    //     {results.map(item => (
    //       <div key={item.id}>
    //         <h1 className='font-bold'>{item.title}</h1>
    //         <p>{item.body}</p>
    //       </div>
    //     ))}
    //   </div>
    //   {/* <div>
    //     {loading && <p>Loading...</p>}
    //     {error && <p>Error: {error}</p>}
    //     <ul>
    //       {data?.map(item => (
    //         <li key={item.id}>{item.title}</li>
    //       ))}
    //     </ul>
    //   </div> */}
    //   {
    //     !query &&
    //     <>
    //       {data?.map(item => (
    //         <div key={item.id}>
    //           <h1 className='font-bold'>{item.title}</h1>
    //           <p>{item.body}</p>
    //         </div>
    //       ))}
    //     </>
    //   }
    // </div>
  )
}

export default App
