import React from "react";
import './ProductQuantity.scss'
import ButtonBuy from "../../../../UI/Button/ButtonBuy";
import { useDispatch } from "react-redux";

// import { incrementAction, decrementAction} from "../../../../../store/store";
import { increment,decrement } from "../../../../../store/store";
import Button from "../../../../UI/Button/But";
const ProductQuantity = (props) =>{

    // const [,update] = useReducer((x) => x + 1,0)
    // useEffect(()=>{
    //     const SaveState = store.subscribe(()=>{
    //         update()
    //     })
    // },[])
    const dispatch = useDispatch()
  
   return (<div className="product-count">
        <form className='form-product'>
            <div className="flex-label-input">
                <label id={props.id} className="product-quantity">Количество:</label>
                <input type="input" id={props.id} value={props.count} className="input-count"></input>
            </div>
            <div className="flex-button-buy">
                <ButtonBuy className='btn-buy' onClick={() => dispatch(decrement(props.id))}>-</ButtonBuy>
                <ButtonBuy className='btn-buy' onClick={() => dispatch(increment(props.id))}>+</ButtonBuy>
            </div>
            <Button className="add-shop">Добавить</Button>
        </form>
    </div>)
}


export default ProductQuantity