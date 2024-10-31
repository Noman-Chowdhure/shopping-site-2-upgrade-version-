import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
const UserProduct = () => {
  const userData = useLoaderData();
  const [total, setTotal] = useState([]);

  console.log(userData);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="items grid grid-cols-3 gap-10">
      <div className=" grid grid-cols-1 col-span-2 gap-3 ">
        {userData.map((abc) => (
          <Items key={abc._id} pro={abc}></Items>
        ))}
      </div>
      <div className="conform border-l-[1px] border-zinc-600  ps-10">
        <h1 className=" font-serif uppercase text-3xl  text-zinc-500">
          conform your order here..
        </h1>
        <form action="" className=" grid grid-cols-1 gap-y-6">
          <input className=" border-b-[1px] outline-none border-zinc-700 bg-transparent ps-4"
            {...register("firstName", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>
          )}
          <input className=" border-b-[1px] outline-none border-zinc-700 bg-transparent ps-4"
            {...register("lastName", { required: true })}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {errors.lastName?.type === "required" && (
            <p role="alert">last name is required</p>
          )}
          <p>total product:</p>
          <p>total price:</p>
          <input className=" border-b-[1px] outline-none border-zinc-700 bg-transparent ps-4"
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail && <p role="alert">{errors.mail?.message}</p>}

          <input className=" border-b-[1px] outline-none border-zinc-700 bg-transparent ps-4"
            {...register("location", {
              required: "locaion Address is required",
            })}
            aria-invalid={errors.location ? "true" : "false"}
          />
          {errors.mail && <p role="alert">{errors.location?.message}</p>}

          <input className=" border-b-[1px] outline-none border-zinc-700 bg-transparent ps-4"
            {...register("district", { required: "Email Address is required" })}
            aria-invalid={errors.district ? "true" : "false"}
          />
          {errors.district && <p role="alert">{errors.district?.message}</p>}

          <input className=" border-b-[1px] outline-none border-zinc-700 bg-transparent ps-4"
            {...register("number", { required: "Email Address is required" })}
            aria-invalid={errors.number ? "true" : "false"}
          />
          {errors.number && <p role="alert">{errors.number?.message}</p>}
          <input className=" border-b-[1px] outline-none border-zinc-700 bg-transparent ps-4"
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail && <p role="alert">{errors.mail?.message}</p>}
        </form>
      </div>
    </div>
  );
};

const Items = ({ pro }) => {
  const { name, price, color, _id, image } = pro;
  let pri = price;
  let sum = 0;
  for (let i = 0; i < pri.length; i++) {
    sum += pri;
  }
  console.log(sum);

  const handlDelet = (para) => {
    console.log(para);
    fetch(`http://localhost:3000/product/${para}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((delt) => {
        console.log(delt);
      });
  };
  return (
    <div className=" grid grid-cols-5 items-center justify-center justify-items-center">
      <img className=" w-20 mix-blend-darken" src={image} alt="" />
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{color}</p>
      <button onClick={() => handlDelet(_id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
};

export default UserProduct;
