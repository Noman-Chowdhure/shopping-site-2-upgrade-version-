import { useLoaderData } from "react-router-dom"

const UserProduct = () => {
    const userData = useLoaderData();
    console.log(userData);
  return (
    <div>
       {
        userData.map(abc => <Items key={abc._id} pro={abc}></Items>)
       }
    </div>
  )
}

const Items = ({pro}) =>{
    const {name,price,color} = pro;
    return(
        <div>
            
           <h1>{name}</h1>
           <p>{price}</p>
           <p>{color}</p>
        </div>
    )
}

export default UserProduct