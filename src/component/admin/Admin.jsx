import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import app from '../../firebase/firebase.config';
import Panel from './Panel';

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const auth = getAuth(app);
  
  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email, password);
    if(email == 'jyaffa1233@gmail.com' && password === 123 )
    {
      <Panel></Panel>
    }
    else{
      console.log('plz try again...')
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className='w-full h-fit grid grid-cols-1  justify-center  justify-items-center gap-10 md:gap-20'>
    
      <div className="form w-1/2">
        <form className='w-10/12 space-y-5' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='text-4xl md:text-7xl font-light capitalize'>welcome boss..</h1>
          
          <input
            className='w-full h-full mt-4 ps-5 bg-transparent border-b-[1px] outline-none border-zinc-300'
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="Email"
          />
          {errors.email && <p role="alert">{errors.email.message}</p>}
          
          <input
            className='w-full h-full mt-4 ps-5 bg-transparent border-b-[1px] outline-none border-zinc-300'
            {...register("password", { required: "Password is required" })}
            aria-invalid={errors.password ? "true" : "false"}
            placeholder="Password"
            type="password"
          />
          {errors.password && <p role="alert">{errors.password.message}</p>}
          
          <input
            className='p-2 text-center shadow-xl rounded-lg bg-slate-200 cursor-pointer'
            type="submit"
            value='Submit'
          />
        </form>
      </div>
    </div>
  );
};

export default Admin;
