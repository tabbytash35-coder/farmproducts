import React from 'react'

const Footer = () => {
return (
<div>
<section class="row bg-dark p-4">
{/* <!-- child 1 --> */}
<div class="col-md-4">
<h2 class="text-center text-success">About us</h2>
<p class="text-white text-center">Prido Farm Products is a dedicated agribusiness committed to providing fresh, high-quality, and affordable farm produce to our customers. We take pride in delivering natural products that are carefully grown, harvested, and handled with a strong focus on quality, freshness, and customer satisfaction.
<h3 className='text-success'>Why Choose Us</h3>
Fresh and naturally grown farm products
Affordable and customer-friendly pricing
Commitment to quality and hygiene
Reliable and timely supply</p>

</div>
{/* <!-- child2 --> */}
<div class="col-md-4 text-center text-white">
<h2>Contact</h2>
<form action="">
<input type="email" placeholder="Enter your email" class="form-control"/><br/><br/>
<textarea name="" id="" class="form-control" placeholder="leave comment" w-100dp></textarea><br/>
<input type="submit" value="send message" class="btn btn-outline-primary "/>
</form>

</div>
{/* <!-- child 3 --> */}
<div class="col-md-4">
<h2 class="text-center text-white">Stay connected</h2>
<a href="https://facebook.com">
<img src="images/fb.png" alt="facebook"/><h2 className='text-primary'>Facebook</h2>
</a>
<a href="https://instagram.com"><img src="images/in.png" alt="instagram"/><h2 className='text-primary'>Instagram</h2>
</a> 
<a href="https://X.com">
<img src="images/x.png" alt="X"/><h2 className='text-primary'>Twitter</h2>
</a>
<p class="text-white">Find us online on Facebook, Instagram, and Twitter, or contact us directly for fresh farm products delivered to you.</p>

</div>


</section>
</div>
)
}

export default Footer