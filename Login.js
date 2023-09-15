import React from 'react'
import "./Login.css";
const Login=()=>{
return(
<div className="d-flex justify-content-center vh-100 align-itemscenter" id="b-img">
<div className="border border-3 border-danger p-3 bg-white">
<form>
<h4 className="text-center">LOGIN PAGE</h4>
<div className="mb-3">
<label htmlFor="Email">Email</label>
<input placeholder="Enter the email " type="email"
name="email" className="form-control"
/>
</div>
<div className="mb-3">
<label htmlFor="password">Password</label>
<input placeholder="Enter your password"
type="password" name="password" className="form-control"
/>
</div>
<div className="mb-3">
<input type="checkbox" className="mx-1"/>
<label htmlFor="checkbox">Forgot Password</label>
</div>
<div className="d-grid">
<button className="btn btn-danger" type="submit">
Login
</button>
</div>
</form>
</div>
</div>
)
}
export default Login;