import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [user,setUser]=useState(null);

    useEffect(()=>{
        const loggedUser=JSON.parse(localStorage.getItem("user"));
        setUser(loggedUser);
},[]);

    const logout=()=>{
        localStorage.removeItem("user");
        setUser(null);
    };
  return (
      <section class="row">
            <div class="col-md-12" >
                {/* <!-- a nav with navbar content  -->  */}
                <nav class="navbar navbar-expand-md bg-light">
                    <a href="/" class="navbar-brand text-primary
                    ">Prido Farm Products</a>
                     <marquee>Fresh Farm Products Available Now!</marquee>
                    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- a division containing the links  --> */}
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                        <div class="navbar-nav">
                            <a href="/" class="nav-link active " >Home</a> 
                            <a href="/addproduct" class="nav-link" >AddProducts</a> 

                            {user?(
                                <>
                                <span className='nav-link'>Welcome {user.username}</span>
                                <button onClick={logout} className='btn btn-danger'>🔓 Logout</button>
                                </>
                            
                            ):(
                                <>
                                <a href="/signin" class="nav-link">Signin</a>
                                 <a href="/signup" class="nav-link">Signup</a>
                                </>
                            )}
                        
                        </div>
                    </div>
                </nav>
            </div>
        </section>
  )
}

export default Navbar