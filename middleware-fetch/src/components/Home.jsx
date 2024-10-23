import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './action'

function Home() {

    const {data, loading, error} = useSelector((state) => state)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchData())
    },[dispatch])


    if(loading){
        return <div>Loading.....</div>
    }

    if(error){
        return <div>Error: {error}</div>
    }

  return (
    <div>
        <h2>Fetching Example</h2>
        <div>
            <ul>
                {data.slice(0,10).map((item) =>(
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Home
