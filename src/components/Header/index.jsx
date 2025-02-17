import logo from '../../assets/img/argentBankLogo.png'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { authSlice } from '../Form/AuthSlice'

export default function Header () {

    const dispatch = useDispatch()   
    const connected = useSelector(state => state.auth.connected)
    const profile = useSelector(state => state.profilData.profile)

    return (
        <header>
            <nav className='main-nav'>
                <Link to="/" className='main-nav-logo'>
                    <img src={logo} alt="Argent Bank Logo" className='main-nav-logo-image' />
                </Link>
                <h1 className='sr-only'>Argent Bank</h1>
                <div>
                    {
                        connected ? 
                        <>
                            <Link to="/profil" className='main-nav-item'><i className="fa fa-user-circle"></i> 
                            { 
                                profile === undefined ? "Loading" : profile.firstName
                            }
                            </Link>
                            <Link to="/" className='main-nav-item' onClick={() => dispatch(authSlice.actions.disconnect())}><i className="fa fa-sign-out"></i> Sign out </Link>
                        </>
                        : 
                        <Link to="/login" className='main-nav-item'><i className="fa fa-user-circle"></i> Sign In </Link>
                    }
                </div>
            </nav>
        </header>     
    )
}


