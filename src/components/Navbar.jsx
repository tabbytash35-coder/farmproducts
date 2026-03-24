import React from 'react'

const Navbar = () => {
  return (
      <section class="row">
            <div class="col-md-12" >
                {/* <!-- a nav with navbar content  -->  */}
                <nav class="navbar navbar-expand-md bg-slight">
                    <a href="" class="navbar-brand text-primary
                    ">Prido Farm Products</a>
                    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- a division containing the links  --> */}
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                        <div class="navbar-nav">
                            <a href="/" class="nav-link active " className='text-warning'>Home</a> 
                            <a href="/addproduct" class="nav-link" className='text-primary'>Add Products</a>
                            <a href="/signin" class="nav-link" className='text-info'>Signin</a>
                            <a href="/signup" class="nav-link" className='text-primary'>Signup</a>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
  )
}

export default Navbar