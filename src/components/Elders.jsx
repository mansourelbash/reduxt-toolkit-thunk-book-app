import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
const Elders = () => {

  const obj1 = {
    name: 'mansor',
    getName: () =>{
      console.log(this.name);
    },
    getAname(){
      console.log(this.name);
    }
  }
  
  obj1.getName(); // Call the getName method to log "mansor"
  obj1.getAname(); // Call the getName method to log "mansor"

  const { isLoading, data, isError, error } = useQuery("books",()=>{
    return axios.get('https://jsonplaceholder.typicode.com/posts')
  })

  if(isLoading){
    return <h2> Loading ......</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
  return (
    <div>{data?.data.map((item)=>{
      return <div key={item.id}>{item.title}</div>
    })}</div>
  )
}

export default Elders