import logo from '../../assets/img/argentBankLogo.png'
import { Link } from 'react-router'

export default function Header () {
    return (
        <header>
            <nav className='main-nav'>
                <Link to="/" className='main-nav-logo'>
                    <img src={logo} alt="Argent Bank Logo" className='main-nav-logo-image' />
                </Link>
                <h1 className='sr-only'>Argent Bank</h1>
                <div>
                    <Link to="/sign-in" className='main-nav-item'><i className="fa fa-user-circle"></i> Sign In </Link>
                </div>
            </nav>
        </header>
        // Nécessité de faire une condition si le store contient des datas

        
    )
}


