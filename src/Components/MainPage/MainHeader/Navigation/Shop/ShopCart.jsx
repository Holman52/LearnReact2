import Modal from "../../../../ModalWindow/ModalWindow"
import ButtonShop from "../../../../UI/Button/ButtonShop"
import './ShopCart.scss'
import ProductShop from "./ProductShop"
import { useSelector } from "react-redux"

const ShopCart = (props) => {
    const DataProductShop = useSelector((state)=> state.productShop.items)
    console.log(DataProductShop)
    return (
        <Modal onCloseCart={props.onCloseCart}>
            <div className="ShopCart_header">
                <div className="ShopCart_header-korz">Корзина</div>
                <div className="ShopCart_header-sum">Сумма заказа:</div>
            </div>
            {DataProductShop.map((item) => (
                <ProductShop
                id={item.id}
                url ={item.url}
                name ={item.name}
                grade ={item.grade}
                price ={item.price}
                count={item.count}
                time ={item.time}

          ></ProductShop>
        ))}
            <div className="ShopCart_footer">
                <ButtonShop type="submit" className="close-Shop" onClick={props.onCloseCart}>Закрыть</ButtonShop>
                <ButtonShop type="submit" className="order-Shop">Заказать</ButtonShop>
            </div>
        </Modal>
    )
}
export default ShopCart