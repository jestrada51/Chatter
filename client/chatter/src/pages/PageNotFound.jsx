//import '../css/App.css'
import { Link } from "react-router-dom"

function PageNotFound(){

    return (
        <>

            <h1>404 - Page not Found</h1>
            <Link to={'/'}>
                <button>Go Back Home</button>
            </Link>
        </>

    ) 

}

export default PageNotFound