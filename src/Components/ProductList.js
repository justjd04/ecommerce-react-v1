import React, { useContext } from 'react'
import Product from "./Product"
import Title from './Title'
import { ProductContext} from "../context"
import Header from "./Header";
import Explore from "./Explore";
import Footer from "./Footer";
function ProductList() {
    const {products} = useContext(ProductContext);
    return (
        <React.Fragment>
        <Header/>
            <div className="py-5">
                <div className="container-fluid">
                    <Title name='WEAR YOUR' title='COOL' />
                    <div className="row">
                        {products.map(item => (
                            <Product
                                id={item.id}
                                title={item.title}
                                img={item.img}
                                inCart={item.inCart}
                                price={item.price}
                                key={item.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Explore/>
            <Footer/>
        </React.Fragment>

    )
}

export default ProductList