import React from "react"
import "./FooterMain.scss"

const FooterMain = () => {
   return (
        <React.Fragment>
            <div className="navigation__logo">
                <div className="logo__icon"></div>
                <div className="logo__text navigation" >Delivery Food</div>
            </div>
             <div className="footer__desc">
                <div>Ресторанам</div>
                <div>Курьерам</div>
                <div>Пресс-центр</div>
                <div>Контакты</div>
            </div>
            <div className="mes">
                <div className="inst size"></div>
                <div className="face size"></div>
                <div className="vk size"></div>
            </div>
        </React.Fragment>
   )
}

export default FooterMain