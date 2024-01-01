import React from 'react'
import "./Auth.css"
import { Link } from 'react-router-dom';
const Registration = () => {
  return (
    <>
      <div className="w-100 min-h-100dvh bg-dark row align-items-center justify-content-center">
      <div className="col-md-3  min-vh-50 bg-light p-3 rounded-3">
        <form className="p-3 row justify-content-center" action="/register" method="post">
          <fieldset className="rounded-1">
            <h1 className="fw-normal fs-2 lh-lg">Welcome to Teachshala</h1>
          <div className="form-group">
            <label className="form-label text-capitalize" htmlFor="username">username</label>
            <input type="text" className="form-control rounded-3" name="username" id="username" placeholder="username"/>
          </div>
          <div className="form-group">
            <label className="form-label text-capitalize" htmlFor="email">email</label>
            <input type="text" className="form-control rounded-3" name="email" id="email" placeholder="email"/>
          </div>
          <div className="form-group">
            <label className="form-label text-capitalize" htmlFor="contact">contact</label>
            <input type="text" className="form-control rounded-3" name="contact" id="contact" placeholder="contact"/>
          </div>
          <div className="form-group">
            <label className="form-label text-capitalize" htmlFor="password">password</label>
            <input type="password" className="form-control rounded-3" name="password" id="password" placeholder="password"/>
          </div>
          </fieldset>
          <button className="btn btn-danger mt-3 mb-3 rounded-pill" type="submit">sign up</button>
        </form>
        <p className="text-center fw-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas omnis blanditiis officia aperiam, harum doloribus aliquam, nihil repudiandae cupiditate atque dolorem numquam quo cum commodi non magnam quam? Provident, quam.</p>
        <Link className="lh-base fs-6 text-secondary text-center" to="/login">Already have account ?</Link>
      </div>
    </div>
    </>
  )
}

export default Registration;
