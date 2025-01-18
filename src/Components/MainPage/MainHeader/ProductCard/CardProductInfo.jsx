import { useSelector } from "react-redux";
import Button from "../../../UI/Button/But";
import CardProduct from "../../../UI/Card/CardProduct";
import "./CardProductInfo.scss";
import ProductQuantity from "./ProductQuantity/ProductQuantity";

const CardProductInfo = () =>{
const DataProduct = useSelector((state) => state.products)
   return (<div className="card-product">
        <CardProduct>
            <div className="img_food"><img src={DataProduct.url} alt={DataProduct.id} className="img_food"/></div>
                    <div className="text-food">
                        <div className="delivery">
                            <div className="food-header">{DataProduct.name}</div>
                            <div className="time">{DataProduct.time} мин</div>
                        </div>
                        <div className="desc">
                            <div className="desc-reyt">
                                <div className="icon-star"></div>
                                <div className="reyt">{DataProduct.grade}</div>
                            </div>
                            <div className="flex-food">
                                <span className="price">от {DataProduct.price} ₽</span>
                                <div className="point"></div>
                                <div className="food">Пицца</div>
                            </div>
                            <ProductQuantity id={DataProduct.id}/>
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