import { useLoaderData } from "react-router-dom"

const UserProduct = () => {
    const userData = useLoaderData();
    console.log(userData);
  return (
    <div className=" grid grid-cols-1 gap-3 ">
       {
        userData.map(abc => <Items key={abc._id} pro={abc}></Items>)
       }
    </div>
  )
}

const Items = ({pro}) =>{
    const {name,price,color,_id} = pro;
    const handlDelet = (para) =>{
        console.log(para)
        fetch(`http://localhost:3000/product/${para}`,
          {
            method:'DELETE',
            headers:{
                "Content-Type":"application/json"
            }
          }
         )
         .then(res => res.json())
         .then(delt =>{
            console.log(delt)
         })
    }
    return(
        <div className=" grid grid-cols-5 ">

           <h1>{name}</h1>
           <p>{price}</p>
           <p>{color}</p>
           <button onClick={()=>handlDelet(_id)}>x</button>
        </div>
    )
}

export default UserProduct