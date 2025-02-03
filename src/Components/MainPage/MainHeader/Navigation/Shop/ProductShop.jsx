import { useSelector } from "react-redux";
import React from "react";

const ProductShop = () =>{
    const data = useSelector((state) => state.productShop.item)
    console.log(data)
    return(
        {data.map((item) => (
        <React.Fragment>
        <div className="img_food"><img src={item.url} alt={item.id} className="img_food"/></div>
                    <div className="text-food">
                        <div className="delivery">
                            <div className="food-header">{item.name}</div>
                            <div className="time">{item.time} мин</div>
                        </div>
                        <div className="desc">
                            <div className="desc-reyt">
                                <div className="icon-star"></div>
                                <div className="reyt">{item.grade}</div>
                            </div>
                            <div className="flex-food">
                                <span className="price">от {item.price} ₽</span>
                                <div className="point"></div>
                                <div className="food">Пицца</div>
                            </div>
                        </div>
                    </div>   
        </React.Fragment>))}
    )
}
export default ProductShop