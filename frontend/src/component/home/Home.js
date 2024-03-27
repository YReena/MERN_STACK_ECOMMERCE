import React, { useEffect , useState, useContext} from 'react';
import { Button, Container, Toolbar } from '@mui/material';
import { CgMouse } from "react-icons/cg";
import { Link } from 'react-router-dom';
import MetaData from '../layout/MetaData';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/productAction';
import { useAlert } from "react-alert";
import { useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './home.css';
import Loader from '../layout/Loader/Loader';
import ProductCard from '../Product/ProductCard';
import {SearchContext} from '../layout/Header2';

const Home = () => {
    console.log(SearchContext);
    const search = useContext(SearchContext);
    const alert = useAlert();
    const scrollef = useRef();
    const dispatch = useDispatch();
    const [prod, setProd] = useState({});
    const { products, error, isloading } = useSelector(state => state.products);
    console.log(search);
    function scroll() {
        scrollef.current.scrollIntoView({ behavior: 'smooth' });
    }
    useEffect(() => {
        if (error) {
            alert.error(error)
        }
        dispatch(getProduct());
    }, [dispatch], error)
    return (<>
        {isloading ? (<Loader />) : (<>
            <MetaData title="Ecommerce" />
            <div className='banner'>
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
                <Link >
                    <Button onClick={scroll}>Scroll<CgMouse /></Button>
                </Link>
            </div>
            <h1 className='homeHeading'>Featured Products</h1>

            <Container maxWidth='xl'>

                <div className='container' ref={scrollef} id="scrollableDiv">
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}

                </div>
            </Container>
        </>)
        }


    </>)

}

export default Home;