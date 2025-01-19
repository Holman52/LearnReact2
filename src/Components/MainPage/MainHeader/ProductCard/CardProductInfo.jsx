import { useSelector } from "react-redux";
import Button from "../../../UI/Button/But";
import CardProduct from "../../../UI/Card/CardProduct";
import "./CardProductInfo.scss";
import ProductQuantity from "./ProductQuantity/ProductQuantity";

const CardProductInfo = (props) =>{
   return (<div className="card-product">
        <CardProduct>
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
                            <ProductQuantity id={props.id} count={props.count}/>
                            {/* <Button className="buy-btn" onClick="onClickButtonBuy">
                                В корзину
                            </Button>  */}
                        </div>
                    </div>
        </CardProduct>
    </div>
   )
}

export default CardProductInfo