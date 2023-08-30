import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProdPage = () => {
    const {id}=useParams()
    // it return me a object
    console.log("x",id)
    const api =
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products";
    async function fetchData(){
        let res=await fetch(`${api}/${id}`)
        let data1=await res.json()
        console.log("data",data1.data)
    }
    fetchData()
  return (
    <div>
      <h1>SingleProductPage</h1>
    </div>
  )
}

export default SingleProdPage
