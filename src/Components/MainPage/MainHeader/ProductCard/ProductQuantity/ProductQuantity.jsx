import React from "react";
import './ProductQuantity.scss'
import Button from "../../../../UI/Button/But";
import { decrementAction, incrementAction } from "../../../../../store/store";
import { useDispatch, useSelector } from "react-redux";

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
            <Button onClick={() => dispatch(decrementAction(1))}>-</Button>
            <Button onClick={() => dispatch(incrementAction(1))}>+</Button>
        </form>
    </div>)
}


export default ProductQuantity