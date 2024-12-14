import CardProduct from "../../../UI/Card/CardProduct";
import "./CardProductInfo.scss";

const CardProductInfo = (props) =>{
   return (<section >
        <CardProduct>
            <div class="img_food"><img src={props.url} alt={props.key} className="img_food"/></div>
                    <div class="text-food">
                        <div class="delivery">
                            <div class="food-header">{props.name}</div>
                            <div class="time">{props.time} мин</div>
                        </div>
                        <div class="desc">
                            <div class="desc-reyt">
                                <div class="icon-star"></div>
                                <div class="reyt">{props.grade}</div>
                            </div>
                            <div class="flex-food">
                                <span class="price">от {props.price} ₽</span>
                                <div class="point"></div>
                                <div class="food">Пицца</div>
                            </div>
                        </div>
                    </div>
        </CardProduct>
    </section>
   )
}

export default CardProductInfo