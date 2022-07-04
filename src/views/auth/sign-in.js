import Breadcrumb from "../layouts/breadcrumb";
import { useState} from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import httpService from "../../services/http-service";
import { useNavigate } from "react-router-dom";

const SignIn= () =>{

    let navigate = useNavigate();
    // const user = useContext(UserContext);
    const [User, setUser] = useState({ email: "", password: ""});
    const [Loading, setLoading] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value.replace(/\s/g, '')
        }))

    }

    const signin = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const response = await httpService.post({ endpoint: '/users/login', details: User })
            if (response.status) {
                setLoading(false);
                var user_token= response.data.token;
                localStorage.setItem('token', user_token);
                

                navigate('/dashboard')
            }
            else{
                throw response;
            }
        }
        catch (e) {
            setLoading(false)
            toast.error(e.response.data.message);
        }
    };

    return (
        <>
            
            {/* breadcrumb start */}
            <Breadcrumb title="customer's login" breadcrumbItem="Login" />
            {/* breadcrumb End */}


            {/* section star */}
            <section className="login-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Login</h3>
                            <div className="theme-card">
                                <form className="theme-form" onSubmit={signin}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" className="form-control" id="email" placeholder="Email" name="email" required onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="review">Password</label>
                                        <input type="password" className="form-control" id="review"
                                            placeholder="Enter your password" required name="password" onChange={handleInputChange}  />
                                    </div>
                                    <button type="submit"  className="btn btn-solid">
                                        {!Loading && 'Login'}
                                        {Loading && 'Loading...'}
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 right-login">
                            <h3>New Customer</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">Create A Account</h6>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be
                                    able to order from our shop. To start shopping click register.</p><Link to={'/sign-up'}
                                    className="btn btn-solid">Create an Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section end */}
        </>
    )
}

export default SignIn;