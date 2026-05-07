import axios from "axios"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel";
import Footer from "./Footer";

const Getproduct = () => {
     let navigate = useNavigate();
    // declare our states here 
    const [loading, setLoading] = useState("")
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    const [search,setSearch] =useState("")
    const [visibleCount,setVisibleCount] =useState("")

    // logic search 
    const filtered_products=products.filter((item)=>
    item.product_name.toLowerCase().includes(search.toLowerCase())||
    item.product_description.toLowerCase().includes(search.toLocaleLowerCase())
);

    //function to get products
    const getproducts = async () => {
        setLoading("Please wait")
        try {
            const response = await axios.get("http://tashhiggs.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")
        }
        catch (error) {
            setError(error.message)
            setLoading("")
        }
    }
    // call the function 
    useEffect(() => {
        getproducts()
    }, [])

    console.log(products)
    const imagepath = "http://tashhiggs.alwaysdata.net/static/images/"


    return (
        <div className="getproducts-container">
        <div className="row">

            <div className="row justify-content-center mt-3 mb-3">
                <input
                className="form-control w-5"
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                />
            </div>

            {/* carousel goes here  */}
            <Carousel/>
            <h1 className="text-primary text-center">Available products</h1>
            {/* bind the states  */}
            <h2 className="text-warning">{loading}</h2>
            <h2 className="text-danger">{error}</h2>
            {/* map here  */}
            {filtered_products.slice(0,visibleCount).map((singleproduct) => (

                <div className="col-md-3 mb-4">
                    <div className="card shadow h-100 btn btn-dark bg-dark">

                        {/* image goes here  */}
                        <img src={imagepath + singleproduct.product_photo} alt="" style={{height:"200px",objectFit:"contain"}} />
                        <div className="card-body text-white">
                            <h2 className="text-success">{singleproduct.product_name}</h2>
                            <p>{singleproduct.product_description}</p>
                            <b className="text-warning">ksh {singleproduct.product_cost}</b><br /><br />
                            <button className="btn btn-primary w-100" onClick={()=>navigate("/makepayment",{state:{singleproduct}})}>Purchase now</button>
                        </div>
                    </div>
                </div>
            ))}
            {/* load more buttons goes here  */}
            {visibleCount<filtered_products.length&&(
              <div className="text-center mt-4">
                <button className="btn btn-primary"
                onClick={()=> setVisibleCount(visibleCount + 8)}>
                    Load More
                </button>
              </div>
            )
            }
            <Footer/>
        </div>
        </div>
    )
}
export default Getproduct