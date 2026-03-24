import React from 'react'

const Carousel = () => {
  return (
      <section class="row">
            <div class="col-md-12">
                {/* <!-- a division containing carousel content  -->  */}
                <div class="carousel slide" id="mycarousel" data-bs-ride="carousel">
                    {/* <!-- division containing images    -->  */}
                    <div class="carousel-inner">
                        {/* <!-- div with image one  --> */}
                        <div class="carousel-item active">
                            <img src="images/jj.jpg" alt="slide1" 
                              style={{height:"400px",width:"1200px",objectFit:"cover"}}/>
                            </div>
                            {/* <!-- div with image two  -->  */}
                         <div class="carousel-item">
                            <img src="images/ta.webp" alt="slide2" 
                            style={{height:"400px",width:"1200px",objectFit:"cover"}}/>
                            </div>
                            {/* <!-- div with image 3  -->  */}
                         <div class="carousel-item">
                            <img src="images/tt.jpg" alt="slide3"
                              style={{height:"400px",width:"1200px",objectFit:"cover"}}/>
                            </div>
                            {/* <!-- div with image 4  -->  */}
                            <div class="carousel-item">
                            <img src="images/fr.webp" alt="slide4"
                              style={{height:"400px",width:"1200px",objectFit:"cover"}}/>
                        </div>
                    </div>
                    {/* <!-- previous control  -->  */}
                    <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bg-danger"></span>
                    </a>
                    {/* <!-- next control  --> */}
                    <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                        <span class="carousel-control-next-icon bg-danger"></span>
                    </a>
                </div>
            </div>
        </section>
  )
}

export default Carousel