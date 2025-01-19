import React from "react";
import './ProductQuantity.scss'
import Button from "../../../../UI/Button/But";
import { useDispatch, useSelector } from "react-redux";

// import { incrementAction, decrementAction} from "../../../../../store/store";
import { increment,decrement } from "../../../../../store/store";
const ProductQuantity = (props) =>{

    // const [,update] = useReducer((x) => x + 1,0)
    // useEffect(()=>{
    //     const SaveState = store.subscribe(()=>{
    //         update()
    //     })
    // },[])
    const dispatch = useDispatch()
  
   return (<div className="product-count">
        <div className="product-quantity">Количество</div>
        <form className='form-product'>
            <input type="input" id={props.id} value={props.count} className="input-count"></input>
            <Button className='btn-decrement' onClick={() => dispatch(decrement(props.id))}>-</Button>
            <Button className='btn-increment' onClick={() => dispatch(increment(props.id))}>+</Button>
        </form>
    </div>)
}


export default ProductQuantity