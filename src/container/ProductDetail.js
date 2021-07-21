import React, {useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {selectedProduct} from '../redux/actions/productActions'


const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const {productId} = useParams();
    const dispatch = useDispatch;
    console.log(product);
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
            console.log("Err ", err)
        });
        dispatch(selectedProduct(response.data));
    };
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
    },[productId]);

    return(
        <div className ="ui grid container">
            <div className ="ui placeholder segment">

            </div>
        </div>)
}

export default ProductDetails