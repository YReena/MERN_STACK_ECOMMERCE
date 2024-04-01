import React, { useEffect } from 'react';
import { Button, Container } from '@mui/material';
import { CgMouse } from "react-icons/cg";
import { Link } from 'react-router-dom';
import MetaData from '../layout/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/productAction';
import { useAlert } from "react-alert";
import { useRef } from 'react';
import './home.css';
import Loader from '../layout/Loader/Loader';
import ProductCard from '../Product/ProductCard';
import PropTypes from "prop-types";
import NoProduct from './NoProduct';

const Home = ({ text }) => {
    const alert = useAlert();
    const scrollef = useRef();
    const dispatch = useDispatch();
    var { products, error, isloading } = useSelector(state => state.products);

    function scroll() {
        scrollef.current.scrollIntoView({ behavior: 'smooth' });

    }
    const searchProduct = products && products.filter((ele) => {
        return text.toLowerCase() === ''
            ? ele
            : ele.name.toLowerCase().includes(text);
    })

    if (text) {
        products = searchProduct;
    }
    useEffect(() => {
        if (error) {
            alert.error(error)
        }
        dispatch(getProduct());

    }, []);
    return (<>
        {isloading ? (<Loader />) : (<>
            <MetaData title="Ecommerce" />
            {!text ? (<> <div className='banner'>
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
                <Link >
                    <Button onClick={scroll}>Scroll<CgMouse /></Button>
                </Link>
            </div></>) : (<><h1></h1>
            </>)}

            <h1 className='homeHeading'>Featured Products</h1>

            <Container maxWidth='xl'>
                {(searchProduct.length !== 0) ? (<> <div className='container' ref={scrollef} id="scrollableDiv">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div></>) : (<><NoProduct /></>)}

            </Container>
        </>)
        }
    </>)

}
Home.propTypes = {
    text: PropTypes.string.isRequired,

};


export default Home;