import react, { Fragment, useEffect } from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { getProduct,clearErrors  } from '../../actions/productAction';
import Loader from '../layout/Loader/Loader';
import ProductCard from '../Product/ProductCard';
import { useAlert } from "react-alert";


const Products = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const { products, loading, error, productsCount } = useSelector((state) => state.products);
    console.log(products);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
          }
        dispatch(getProduct());
    }, [dispatch,error,alert ])
    return (<>
        <Fragment>
            {loading ? <Loader /> : <Fragment>
                <h2 className="productsHeading">Products</h2>
                <div className="products">
                    {products &&
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                </div>
            </Fragment>}
           
        </Fragment>

    </>)
}

export default Products;