import React, {useEffect, useReducer, } from "react";
import './ProductQuantity.scss'
import Button from "../../../../UI/Button/But";
import store, { DecrementAction, IncrementAction } from "../../../../../store/store";

const ProductQuantity = () =>{

    const [,update] = useReducer((x) => x + 1,0)
    useEffect(()=>{
        const SaveState = store.subscribe(()=>{
            update()
        })
    },[])
   return (<div>
        <div>Количество</div>
        <form>
            <input type="input" id="inputQuantity" value={store.getState().value}></input>
            <Button onClick={() => store.dispatch({type: "decrement"} satisfies DecrementAction)}>-</Button>
            <Button onClick={() => store.dispatch({type: "increment"} satisfies IncrementAction)}>+</Button>
        </form>
    </div>)
}


export default ProductQuantity