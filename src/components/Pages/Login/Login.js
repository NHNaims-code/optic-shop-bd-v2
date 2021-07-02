import './Login.css';
import Google from '../../../assets/google.svg'
import Logo from '../../../assets/logo.png'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {

    const history = useHistory();
  
    const handleGoogleLogin = () => {
        history.push('/admin')
    }

    return (
        <div className="Login">
            <div className="header">
                <Link to="/">
                    <img height="100px" src={Logo} alt=""/>
                    </Link>
            </div>
            <div className="form mx-auto d-flex align-items-center justify-content-center">
                <div>
                <h3>Login With</h3>
                <div onClick={handleGoogleLogin} className="googleLogin d-flex align-items-center ">
                    <img height="35px" src={Google} alt=""/>
                    <h6 className="text-center w-100 h-100">Continue with Google</h6>
                </div>
                <p>Don't have an account? <a href="#">Create an account</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;