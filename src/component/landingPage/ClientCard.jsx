import { useState } from "react";

const ClientCard = ({abc}) => {
    const [open,setOpen] = useState(true);
    const {client_name,photo,comment,button,product} = abc;
  return (
    <div className={` grid md:grid-cols-4 grid-cols-3 border-t-[1px] justify-start justify-items-start  border-zinc-900 w-full ${open?"h-20":" h-80"}`}>
        
        <div className="product">
            <p>{product}</p>
        </div>
        <div className="sercive max-sm:hidden">

        </div>
        <div className="clinent w-full">
            <h1 className="mb-14">{client_name}</h1>
             <div className={open ? "opacity-0": "opacity-105"}>
              <img className=" w-24 h-24 object-cover rounded-2xl mb-6" src={photo} alt="" />
              <p>{comment}</p>
             </div>
        </div>
        <div className="but">
            <button className=" uppercase text-xl md:text-2xl font-medium rounded-full px-4 border-[1px] border-gray-900 " onClick={()=>setOpen(!open)}>{open?'read':'close'}</button>
        </div>

    </div>
  )
}

export default ClientCard