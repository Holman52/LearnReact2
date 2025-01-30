import { useDispatch } from "react-redux";
import Button from "../../../UI/Button/But";
import CardProduct from "../../../UI/Card/CardProduct";
import "./CardProductInfo.scss";
import ProductQuantity from "./ProductQuantity/ProductQuantity";
import { increment } from "../../../../store/store";

const CardProductInfo = (props) =>{
    const dispatch = useDispatch()
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
                            {
                                props.count===0 ?
                                     <Button className="buy-btn" onClick={() => dispatch(increment(props.id))}>
                                В корзину
                            </Button>:
                                <ProductQuantity id={props.id} count={props.count}/>

                            }
                        </div>
                    </div>              
        </CardProduct>
    </div>
   )
}

export default CardProductInfo