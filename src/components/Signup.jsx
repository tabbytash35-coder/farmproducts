import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"
const Signup = () => {
    // declare our states here
    const [Username, setUsername] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Phone, setPhone] = useState("")
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    // function to handle submit 
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait...")

        //  create empty digital envelope to store user inputs 
        const formdata = new FormData()
        // append/add 
        formdata.append("username", Username)
        formdata.append("email", Email)
        formdata.append("password", Password)
        formdata.append("phone", Phone)

        try {
            const response = await axios.post("http://higgs.alwaysdata.net/api/signup", formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")

        }
    }
    return (
        <div className="row mt-4 justify-content-center">
            <div className="col-md-6 card shadow p-4 bg-dark">
                <h1 className="text-center text-white">Signup</h1>
                {/* bind the states  */}
                <h2 className="text-warning">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>
                <form action="" onSubmit={handlesubmit}>
                    <input type="text" className="form-control" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} /><br />
                    <input type="Email" className="form-control" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} /><br />
                    <input type="password" className="form-control" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} /><br />
                    <input type="number" className="form-control" placeholder="Enter phone" onChange={(e) => setPhone(e.target.value)} /><br />
                    <button type='submit' className="btn btn-primary w-100">Sign Up</button> <br /><br />
                    <p className="text-white">Already have an account? <Link to="/signin">Signin</Link></p>
                </form>
            </div>

        </div>
    )
}
export default Signup