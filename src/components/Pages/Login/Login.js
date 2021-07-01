import './Login.css';
import Google from '../../../assets/google.svg'
import Logo from '../../../assets/logo.jpg'
import { useHistory } from 'react-router';

const Login = () => {

    const history = useHistory();
    const handleLogin = () => {
        history.push('/admin')
    }
    return (
        <div className="login-root border rounded shadow-sm d-flex flex-column justify-content-around align-items-center">
            <img width="61%" src={Logo}/>
            
            <button onClick={handleLogin} className="btn btn-light shadow-sm"><img height="36px" src={Google} /> Login with Google</button>
        </div>
    );
};

export default Login;