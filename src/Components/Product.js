import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {ProductContext} from "../context"


function Product({title, id, img, price}) {
    const { handleDetail, addToCart, openModal} = useContext(ProductContext);
    return (
        <ProductWrapper className='col-8 mx-auto col-md-6 col-lg-3 my-3'>
        <div className="card">
            <div className="img-container p-2" onClick={()=>{handleDetail(id)}}>
                <Link to="/details">
                    <img src={img} alt='product' className="card-img-top img-fluid"/>
                </Link>
                    <button className="cart-btn" onClick={() => { addToCart(id); openModal(id);}}>
                        ADD TO CART <i className="fas fa-shopping-cart"></i>
                </button>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <p className="align-self-center mb-0">
                    {title}
                </p>
                <h5 className="mb-0">
                    <span className="mr-1">$</span>
                    {price}
                </h5>
            </div>
        </div>
        </ProductWrapper>
    )
}



const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear;
}
.card-footer{
    background:transparent;
    border-top: transparent;
    transition: all 1s linear;
}
&:hover{
    .card{
        border: 0.04rem solid rgba(150, 40, 27, .4);
        box-shadow: 2px 2px 5px 0px rgba(150, 40, 27, .4);
        -moz-box-shadow:    2px 2px 5px 0px rgba(150, 40, 27, .4);
        -webkit-box-shadow: 2px 2px 5px 0px rgba(150, 40, 27, .4);
    }
    p {
        text-decoration-color: rgba(207, 0, 15, 1);
        text-decoration-line: underline;
        text-decoration-style: double;
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
transition: all 1s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.cart-btn{
    position: absolute;
    bottom:5%;
    left:35%;
    padding:0.3rem 0.5rem;
    background: white;
    border:none;
    font-size:1rem;
    color: black;
    transform: translate(200%, 200%);
    transition: all 0.5s linear;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    -moz-box-shadow:    2px 2px 5px 0px rgba(0,0,0,0.2);
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    font-family: var(--pFont);
    font-weight: 400;
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
.cart-btn:hover {
    color: var(--medBlue);
    cursor:pointer;
}
.cart-btn:focus{
   outline: none;
}
`;
export default Product