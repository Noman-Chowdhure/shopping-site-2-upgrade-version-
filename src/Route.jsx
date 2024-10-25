import LocomotiveScroll from 'locomotive-scroll';
import { createBrowserRouter } from "react-router-dom";
import Admin from "./component/admin/Admin";
import ProductDetils from "./component/common/ProductDetils";
import Landing from "./component/landingPage/Landing";
import Man from "./component/manPage/Man";
import Women from "./component/womenPage/Women";
import Layout from "./layout/Layout";

const locomotiveScroll = new LocomotiveScroll();


const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
        {
          path:'/',
          element:<Landing></Landing>
        },
        {
          path:'/man',
          element:<Man></Man>
        },
        {
          path:'/women',
          element:<Women></Women>
        },
        {
          path:'/productDetils/:id',
          element:<ProductDetils></ProductDetils>,
          loader:({params})=>fetch(`http://localhost:3000/man/${params.id}`)
        },
       { path:'/admin',
            element:<Admin></Admin>
       }
       
      ]
    
    },
  ]);

  export default router