
import { useEffect, useState } from "react"
import ClientCard from "./ClientCard";


const Clint = () => {
    const [product,setProduct] = useState([])
    useEffect(()=>{
      fetch('client.json')
       .then(res => res.json())
       .then(data =>setProduct(data));
    },[])
  return (
    <div className=" w-full h-fit md:px-20 px-5">
        <div className="title my-8">
            <h1 className=" my-12 text-4xl md:text-7xl capitalize ">clients reviews</h1>
        </div>
        <div className="detils">
            {
                product.map(abc => <ClientCard key={abc.id} abc={abc}></ClientCard>)
            }
        </div>

    </div>
  )
}

export default Clint