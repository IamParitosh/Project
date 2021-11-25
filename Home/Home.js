import React, { Fragment, useEffect} from 'react';
import { CgMouse } from "react-icons/all";
import "./Home.css";
// import Product from "./Product"
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from 'react-redux';


const Home = () => {
    const dispatch = useDispatch();
    const { loading, error,products, productsCount } = useSelector(
        (state) => state.products
        );

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    return ( 
    <Fragment>
      <MetaData title="ECommerce" />
        <div className= "banner">
            <p> Welcome To Ecommerce</p>
            <h1>Find Your Loving Things </h1>

            <a href="#conatiner">
                <button>
                    Scroll <CgMouse />
                </button>
            </a>
        </div>

        <h2 className="homeHeading">Featured Products</h2>

        <div className="conatiner" id="container">
           {/* {products && products.map((products) => <Product product={product} />)} */}
           
        </div>
    </Fragment>
       
    );
};

export default Home
