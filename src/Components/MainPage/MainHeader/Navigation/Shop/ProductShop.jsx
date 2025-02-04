
import React from "react";

const ProductShop = (props) =>{
    return(
        <React.Fragment>
        <div className="img_food"><img src={props.url} alt={props.id} className="img_food"/></div>
                    <div className="text-food">
                        <div className="delivery">
                            <div className="food-header">{props.name}</div>
                            <div className="time">{props.time} мин</div>
                        </div>
                        <div className="desc">
                            <div className="desc-reyt">
                                <div className="icon-star"></div>
                                <div className="reyt">{props.grade}</div>
                            </div>
                            <div className="flex-food">
                                <span className="price">от {props.price} ₽</span>
                                <div className="point"></div>
                                <div className="food">Пицца</div>
                            </div>
                        </div>
                    </div>   
    </React.Fragment>
    )
}
export default ProductShop