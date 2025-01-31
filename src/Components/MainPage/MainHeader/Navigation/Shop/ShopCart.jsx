import Modal from "../../../../ModalWindow/ModalWindow"
import ButtonShop from "../../../../UI/Button/ButtonShop"
import './ShopCart.scss'



const ShopCart = (props) => {
    return (
        <Modal onCloseCart={props.onCloseCart}>
            <div className="ShopCart_header">
                <div className="ShopCart_header-korz">Корзина</div>
                <div className="ShopCart_header-sum">Сумма заказа:</div>
            </div>
            <div className="ShopCart_footer">
                <ButtonShop type="submit" className="close-Shop" onClick={props.onCloseCart}>Закрыть</ButtonShop>
                <ButtonShop type="submit" className="order-Shop">Заказать</ButtonShop>
            </div>
        </Modal>
    )
}
export default ShopCart