import { Outlet , useNavigate , Link } from "react-router-dom";


export function Profile() {
 
    const navigate = useNavigate()

     // to navigate to other routes

    const handleClick = () => {
        navigate(`/`)
    }
 


    return(
        <>
        <h1>hello Profile </h1>
        <button onClick={handleClick}>click</button>
        <Link to={"/"}>
        voltar
        </Link>
        <Outlet />  {/* renders the route component matching the current URL */}
        </>
    )
    
}
