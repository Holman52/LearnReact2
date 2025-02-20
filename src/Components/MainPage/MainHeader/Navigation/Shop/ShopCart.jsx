import Modal from "../../../../ModalWindow/ModalWindow"
import ButtonShop from "../../../../UI/Button/ButtonShop"
import './ShopCart.scss'
import ProductShop from "./ProductShop"
import { useSelector } from "react-redux"
import { useState } from "react"

const ShopCart = (props) => {
    const DataProductShop = useSelector((state)=> state.productShop.items)
    console.log(DataProductShop)
    let totalCount = 0;
    const HandlerSum = () =>{
        let totalPrice = 0;
        DataProductShop.forEach(item => {
        totalCount += item.count;
        totalPrice += item.price * item.count;
    });
        return {
        totalCount,
        totalPrice
     };
    }
    const [inputCount, setInputCount] = useState('');
    const changeHandlerCount = (event) => {
    setInputCount(event.target.value)
  }
  const [input, setInput] = useState('');
  const changeHandler = (event) => {
    setInput(event.target.value)
  }
    const totals = HandlerSum()
    return (
        <Modal onCloseCart={props.onCloseCart}>
            <div className="ShopCart_header">
                <div className="ShopCart_header-korz">Корзина</div>
                
                {
                    totals.totalPrice>0 ?
                    <div className="ShopCart_sum-count">
                        <div className="sum-count-flex">
                            <div className="ShopCart_header-sum">Сумма заказа:</div> <input readonly value={totals.totalPrice} className="input-small" onChange={changeHandler} size={input.length>1?input.length - 1:1}></input><span>₽</span>
                        </div>
                        <div className="sum-count-flex">
                            <div className="ShopCart_header-sum">Количество товаров:</div>  <input readonly value={totals.totalCount} className="input-small-very" onChange={changeHandlerCount} size={inputCount.length>1?input.length + 1:1}></input>
                        </div>
                    </div>
                        : <div></div>
                }
            </div>
            {/* {DataProductShop.map((item) => ( */}
                <ProductShop
                // id={item.id}
                // url ={item.url}
                // name ={item.name}
                // grade ={item.grade}
                // price ={item.price}
                // count={item.count}
                // time ={item.time}

          ></ProductShop>
        {/* ))} */}
            <div className="ShopCart_footer">
                <ButtonShop type="submit" className="close-Shop" onClick={props.onCloseCart}>Закрыть</ButtonShop>
                <ButtonShop type="submit" className="order-Shop">Заказать</ButtonShop>
            </div>
        </Modal>
    )
}
export default ShopCart