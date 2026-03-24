import axios from "axios"
import React,{useState} from "react"
import { useNavigate,Link } from "react-router-dom";
const Signin=()=>{
    let navigate = useNavigate();
    // declare the two states here 
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    // three states for posting data 
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")

    // function to handle submit 
    const handlesubmit=async (e)=>{
        e.preventDefault()
        setLoading("Please wait...")
        // create empty digital envelope 
    const formdata=new FormData()
    // append/add 
    formdata.append("email",email)
    formdata.append("password",password)

    try{
        const response=await axios.post ("http://higgs.alwaysdata.net/api/signin",formdata)
        setSuccess(response.data.message)
        setLoading("")

     // if login/signin is successful we save user to local storage 
    // NB: redirect user to homepage(getproducts) 
    if(response.data.user){
            // login success 
            localStorage.setItem("user",JSON.stringify(response.data.user))
            // redirectthe user to homepage 
            navigate("/")

    }else{
         // login failed 
         setSuccess(response.data.message)
     }
        
    } catch(error){
    }   
    }
    return(
        <div className="row mt-4 justify-content-center ">
           <div className="col-md-6 card shadow p-4 bg-dark">
            <h1 className="text-center text-primary">Sign in</h1>
            {/* binding states  */}
           <h2 className="text-warning">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>
            <form action="" onSubmit={handlesubmit}>
                <input type="email" className="form-control" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} /><br />
                <input type="text" className="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} /><br />
                <button type="submit" className="btn btn-primary w-100" >Sign In</button><br /> <br />
                <p className="text-white">Dont have an account? <Link to="/signup">Sign Up</Link> </p>
            </form>
           </div>
        </div>
    )
}
export default Signin