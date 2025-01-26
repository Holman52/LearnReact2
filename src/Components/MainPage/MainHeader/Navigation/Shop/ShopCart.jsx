import Modal from "../../../../ModalWindow/ModalWindow"
import Button from "../../../../UI/Button/But"
import './ShopCart.scss'



const ShopCart = () => {
    return (
        <Modal>
            <div className="ShopCart_header">
                <div className="ShopCart_header-korz">Корзина</div>
                <div className="ShopCart_header-sum">Сумма заказа:</div>
            </div>
            <div className="ShopCart_footer">
                <Button className="close-Shop">Закрыть</Button>
                <Button className="order-Shop">Заказать</Button>
            </div>
        </Modal>
    )
}
export default ShopCart