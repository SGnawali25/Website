import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import Product from './product/product'
import Loader from './layout/loader';
import {useAlert} from 'react-alert';

const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch()

    const {loading, error, products, productsCount} = useSelector(state => state.products)

    useEffect(() => {
        if (error){ 
            return alert.error(error)
        }
        dispatch(getProducts());

    }, [dispatch, error, alert])
    
  return (
      <Fragment>
          {loading ? <Loader/> : (
              <Fragment>
                  <MetaData title='All Products' />
                  <h1 id='products_heading'>Latest Products</h1>
                  <section id="products" className="container mt-5">
                      <div className="row">
                          {products && products.map(product => (
                              <Product key={product._id} product={product} />
                          ))}




                      </div>
                  </section>
              </Fragment>
          )}

      </Fragment>
  )
}

export default Home