import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const Login = () => {

const location = useLocation()
const Navigate = useNavigate()

const {login,user} = useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
       
        login(email,pass)
        .then(res =>{
            console.log(res.user)
            e.target.reset();
            Navigate(location.state ? location.state : '/')
           
        } )
        .catch(err => console.log(err))
    }






    return (
        <div>
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>

    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;