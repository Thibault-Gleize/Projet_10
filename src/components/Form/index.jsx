import { useEffect, useState } from "react"
import { usePostLoginMutation } from "../../services/requestsAPI"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { authSlice } from "./AuthSlice"
// import { useSelector } from "react-redux"


export default function Form () {

    const [credentials, setCredentials] = useState({ email: "", password: ""})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [postLogin, {error, isSuccess}] = usePostLoginMutation()

    const handleLogin = async (e) => {
         e.preventDefault()
         await postLogin(credentials).unwrap()
            .then((payload) => dispatch(authSlice.actions.connect(payload.body.token)))
        }

    useEffect(() => {
        if (isSuccess) {
            navigate("/profil")
        }
    }, [isSuccess, navigate])
    
    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleLogin}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label><input name="email" type="text" id="username" onChange={(e) => setCredentials(() => ({...credentials, email: e.target.value}))}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label><input name="password" type="password" id="password" onChange={(e) => setCredentials(() => ({...credentials, password: e.target.value}))}/>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
                {
                    error && <p>{error.data.message}</p>
                }
                <button type="submit" className="sign-in-button">Sign In</button>
            </form>
        </section>
    )
}