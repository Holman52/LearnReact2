import CardProduct from "../../../UI/Card/CardProduct"

const DataProduct = [
    {
        img: null,
        id:"c1",
        name: "Пицца плюс",
        time: 50,
        grade: 4.5,
        price: 900,
    },
    {
        img: null,
        id:"c2",
        name: "Тануки",
        time: 45,
        grade: 4.4,
        price: 600,
    },
    {
        img: null,
        id:"c3",
        name: "FoodBand",
        time: 50,
        grade: 4.6,
        price: 750,
    },
    {
        img: null,
        id:"c4",
        name: "Жадина-пицца",
        time: 50,
        grade: 4.5,
        price: 900,
    },
    {
        img: null,
        id:"c5",
        name: "Точка еды",
        time: 60,
        grade: 4.8,
        price: 1100,
    },
    {
        img: null,
        id:"c6",
        name: "PizzaBurger",
        time: 40,
        grade: 4.3,
        price: 800,
    }
]

const CardProductInfo = () =>{
    <section>
        <CardProduct>
            <div class="img_food src-a"></div>
                    <div class="text-food">
                        <div class="delivery">
                            <div class="food-header">Пицца плюс</div>
                            <div class="time">50 мин</div>
                        </div>
                        <div class="desc">
                            <div class="desc-reyt">
                                <div class="icon-star"></div>
                                <div class="reyt">4.5</div>
                            </div>
                            <div class="flex-food">
                                <div class="price">от 900 ₽</div>
                                <div class="point"></div>
                                <div class="food">Пицца</div>
                            </div>
                        </div>
                    </div>
        </CardProduct>
    </section>
}

export default CardProductInfo