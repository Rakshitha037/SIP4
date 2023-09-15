import React from 'react'
import "./Signup.css";
const Signup=()=>{
return(
<div className="d-flex justify-content-center vh-100 align-itemscenter" id="b-img">
<div className="border border-3 border-danger p-3 bg-white">
<form>
<h4 className="text-center">SIGN UP PAGE</h4>
<div className="mb-3">
<label htmlFor="name">First name</label>
<input placeholder="Enter the First Name" type=" name"
name="name" className="form-control"
/>
</div>
<div className="mb-3">
<label htmlFor="name">Last name</label>
<input placeholder="Enter your last name" type="name"
name="name" className="form-control"
/>
</div>
<div className="mb-3">
<label htmlFor="name">Phone number</label>
<input placeholder="Enter your phone number"
type="name" name="name" className="form-control"
/>
</div>
<div className="d-grid">
<button className="btn btn-danger" type="submit">
sign up
</button>
</div>
</form>
</div>
</div>
)
}
export default Signup;
