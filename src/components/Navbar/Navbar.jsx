import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {


    const {user,logOut} = useContext(AuthContext)
    const navlink = <>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/job">Jobs</NavLink></li>
     <li><NavLink to="/login">Login</NavLink></li>
     <li><NavLink to="/register">Register</NavLink></li>
    </>


    const handleLogOut = () =>{
        logOut()
        .then(res => console.log(res.user))
        .catch(err => console.log(err))
    }







    return (
        <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navlink}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {navlink}
    </ul>
  </div>
  
  <div className="navbar-end">

    {
        user ? <div>
           <p>{user.email}</p>
           <button onClick={handleLogOut} className="btn">logout</button>
        </div>:
        <button  className="btn">Login</button>
    }
   
  </div>
</div>
            
        </div>
    );
};

export default Navbar;