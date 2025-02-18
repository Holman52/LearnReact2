
import React from "react";
import './ProductShop.scss' 
import ButtonBuy from "../../../../UI/Button/ButtonBuy";
import { useDispatch, useSelector } from "react-redux";
import { removeProductShop, removeProductCount, addProductCount} from "../../../../../store/redusers/reduser_1";

const ProductShop = (props) =>{
    const dispatch = useDispatch()
    const DataProductShopCount = useSelector((state)=> state.productShop.items)
    console.log(DataProductShopCount)
    // const product = DataProductShopCount.find(item => item.id === props.id)
    // const totalCount = DataProductShop.count
    // if (product){
    //     totalCount = DataProductShop.count
        
    // }
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
    const changeCountPlus = (item) => {
        dispatch(addProductCount({id: item.id}))
    }
    const changeCountMin = (item) => {
        dispatch(removeProductCount({id: item.id}))
    }
    
    return(
        <div className="shop_content">
       
        {DataProductShopCount.map((item) =>(
            <div className="card_shop-product">
            <div className="shop_img_shop"><img src={item.url} alt={item.id} className="shop_img_shop"/></div>
                    <div className="shop_text-food">
                        <div className="shop_delivery">
                            <div className="shop_flex-gradeName">
                                <div className="shop_desc-reyt">
                                    <div className="shop_icon-star"></div>
                                    <div className="shop_reyt">{item.grade}</div>
                                </div>
                                <div className="shop_food-header">{item.name}</div>
                            </div>
                            <div className="shop_time">{item.time} мин</div>
                        </div>
                        <div className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua.</div>
                        <div className="shop_desc">
                      
                           <div className="shop_flex-food">
                                <div>{item.count} {message}</div>
                                <div className="shop_price">{item.price*item.count} ₽</div>
                            </div>

                        </div>
                    </div>  
            <div>
                <div className='delete-product-shop'onClick={() => dispatch(removeProductShop({id: item.id}))}><img src={'/icon-delete.svg'} alt="icon-delete"></img></div>
                <div>
                    <ButtonBuy onClick={() => changeCountPlus(item, Math.max(1,item.count + 1))}>+</ButtonBuy>
                    <ButtonBuy onClick={() => changeCountMin(item, Math.max(1,item.count - 1))}>-</ButtonBuy>
                </div>
            </div>
            </div>
                        ))}
        </div> 

    )
}

export default ProductShop