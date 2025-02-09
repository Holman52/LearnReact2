
import React from "react";
import './ProductShop.scss' 
const ProductShop = (props) =>{
    let message = '';
    if (props.count%10===1) {
      message = <span>штука</span>;
    }
 
    else if (props.count%10>1 && props.count<5 ) {
      message = <span>штуки</span>;
    }
    else {
      message = <span>штук</span>;
    }
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
                                <div>{props.count} {message}</div>
                                <div className="shop_price">от {props.price} ₽</div>
                            </div>
                        </div>
                    </div>  
        </div> 

    )
}
export default ProductShop