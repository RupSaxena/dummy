import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import CardInfo from "./CardInfo";

const Body=()=>{

const approuter=createBrowserRouter([{
    path:"/",
    element:<Login/>
},
{
    path:"/browse",
    element:<Browse/>},
// ,{
//     path:"/movievideos",
//     element:<Videocontainer/>
// }
{
   path:"/cardinfo/:id",
    element: <CardInfo/>,
  },
])

    return (
        <div>
            <RouterProvider router={approuter}/>
        </div>
    )
}
export default Body;