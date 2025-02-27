
import React from "react";
import { useState, useEffect
 } from "react";
import './ProductShop.scss' 
import ButtonBuy from "../../../../UI/Button/ButtonBuy";
import { useDispatch, useSelector } from "react-redux";
import { removeProductShop, removeProductCount, addProductCount, loadCart} from "../../../../../store/redusers/reduser_1";

const ProductShop = (props) =>{
    // const [localHave, isLocalHave] = useState(false)
    const dispatch = useDispatch()
    const DataProductShopCount = useSelector((state)=> state.productShop.items)

    useEffect(() => {
        dispatch(loadCart());
    }, [dispatch]);

    const changeCountPlus = (item) => {
        dispatch(addProductCount({id: item.id}))
    }
    const changeCountMin = (item) => {
        dispatch(removeProductCount({id: item.id}))
    }
    const [inputCount, setInputCount] = useState('');
    const changeHandlerCount = (event) => {
    setInputCount(event.target.value)
  }
  const [input, setInput] = useState('');
  const changeHandler = (event) => {
    setInput(event.target.value)
  }
    return(
        <div className="shop_content">
       
        {DataProductShopCount.map((item) =>(
            <React.Fragment>
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
                            <form>
                            <div className="shop_flex-food">
                                    <input value={item.count} className="shop-count-card" onChange={changeHandlerCount} size={inputCount.length>1?input.length - 1:1}></input>
                                    {item.count%10===1 ? (
                                        <div>штука</div>
                                    ) : item.count%10>1 && item.count<5 ? (
                                        <div>штуки</div>
                                    ) : (
                                        <div>штук</div>
                                    )}
                                    <input className="shop_price" value={item.price*item.count} onChange={changeHandler} size={input.length>1?input.length - 1:1}></input><div>₽</div>
                                </div>
                            </form>
                            </div>
                        </div>  
                <div>
                    <div className='delete-product-shop'onClick={() => dispatch(removeProductShop({id: item.id}))}><img src={'/icon-delete.svg'} alt="icon-delete"></img></div>
                    <div>
                        <ButtonBuy className='btn-buy' onClick={() => changeCountPlus(item)}>+</ButtonBuy>
                        <ButtonBuy className='btn-buy' onClick={() => changeCountMin(item)}>-</ButtonBuy>
                    </div>
                </div>
                </div>
            </React.Fragment>))}
        </div> 

    
)}

export default ProductShop