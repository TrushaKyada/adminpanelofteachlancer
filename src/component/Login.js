import React from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function Login() {


    const [data, setData] = useState([{
        Email: "",
        Password: ""
    }])
    const handle = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
        console.log("dfnjb", data);
    }
    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/auth/adminLogin", {
            email: data.Email,
            password: data.Password
        }).then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.data)

            window.location = "/dashboard"
        }).catch((err) => {
            console.log(err.response.data);
            alert(err.response.data.message);
            window.location = "/"
        })


    }
    return (

        <>
            <div className="container login">
                <div className="row justify-content-center align-items-center mt-5">
                    <div className="col-lg-5 col-md-6 col-sm-8 col-8 p-5 bg-light-tomato rounded box">

                        <h3 className="text-center head pb-3 text-tomato">log in</h3>
                        <br/>
                        <div className="my-3"><h6 className='mb-3 mx-2 text-tomato'>Email</h6><input type="text" className="w-100 rounded-pill border-0 p-2 px-3" name="Email" value={data.email} onChange={(e) => handle(e)} placeholder="Enter your email address....."></input></div>
                        <br />
                        <div><h6 className='mb-3 mx-2 text-tomato'>Password</h6><input type="text" className="w-100 rounded-pill border-0 p-2 px-3" name="Password" value={data.password} onChange={(e) => handle(e)} placeholder="Enter password......."></input></div>
                        <br />
                        <div className='d-flex flex-sm-row flex-column justify-content-between align-items-center'>
                            <div className="mt-3"><button className="px-5 py-2 bg-tomato btns rounded-pill border-0 text-white" onClick={(e) => submit(e)}>Sign In</button></div>
                            
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
