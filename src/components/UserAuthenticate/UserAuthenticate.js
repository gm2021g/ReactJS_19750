import { useContext } from "react"
import { UserAuthContext } from "../../context/UserAuthContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import './userAuthenticate.css';

export const UserAuthenticate = () => {

    const { setIsAuthenticated } = useContext(UserAuthContext)

    const handleSubmit = () => {
        setIsAuthenticated(true);

    }

    return (
        <>
            <div className="Container">
                <h3> Loguearse para ingresar </h3>
                <hr />
                <div className="row">
                    < button className="boton" onClick={handleSubmit} >  Login </button>
                </div>
            </div>
        </>
    )
}