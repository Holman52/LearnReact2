
import React from "react";
import './ProductShop.scss' 
const ProductShop = (props) =>{
    return(
        <div className="shop_content">
        <div className="shop_img_shop"><img src={props.url} alt={props.id} className="shop_img_shop"/></div>
                    <div className="shop_text-food">
                        <div className="shop_delivery">
                            <div className="shop_flex-gradeName">
                                <div className="shop_desc-reyt">
                                    <div className="shop_icon-star"></div>
                                    <div className="shop_reyt">{props.grade}</div>
                                </div>
                                <div className="shop_food-header">{props.name}</div>
                            </div>
                            <div className="shop_time">{props.time} мин</div>
                        </div>
                        <div className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua.</div>
                        <div className="shop_desc">
                            <div className="shop_flex-food">
                                <span className="shop_price">от {props.price} ₽</span>
                            </div>
                        </div>
                    </div>  
        </div> 

    )
}
export default ProductShop