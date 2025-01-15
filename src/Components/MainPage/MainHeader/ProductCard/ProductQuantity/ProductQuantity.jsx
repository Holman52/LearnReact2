import React from "react";
import './ProductQuantity.scss'
import Button from "../../../../UI/Button/But";
import { useDispatch, useSelector } from "react-redux";

import { incrementAction, decrementAction} from "../../../../../store/store";
const ProductQuantity = (props) =>{

    // const [,update] = useReducer((x) => x + 1,0)
    // useEffect(()=>{
    //     const SaveState = store.subscribe(()=>{
    //         update()
    //     })
    // },[])
    const value = useSelector(state=> state.value)
    const dispatch = useDispatch()
    console.log(value)
   return (<div>
        <div>Количество</div>
        <form>
            <input type="input" id={props.id} value={value.value}></input>
            <Button onClick={() => dispatch(decrementAction(props.id))}>-</Button>
            <Button onClick={() => dispatch(incrementAction(props.id))}>+</Button>
        </form>
    </div>)
}


export default ProductQuantity