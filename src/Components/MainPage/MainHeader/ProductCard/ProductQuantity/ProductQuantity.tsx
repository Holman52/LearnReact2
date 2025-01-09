import React, {useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import './ProductQuantity.scss'
import Button from "../../../../UI/Button/But";
import store, { DecrementAction, IncrementAction } from "../../../../../store/store";
import Input from "../../../../UI/Input/Input";

interface ProductQuantityProps{
    id: string,
    value: number
};
const ProductQuantity: React.FC<ProductQuantityProps> = (props) =>{
    const state = useSelector((state) => state)
    console.log({state})
    const [,update] = useReducer((x) => x + 1,0)
    console.log({store})
    useEffect(()=>{
        const SaveState = store.subscribe(()=>{
            update()
        })
        return SaveState
    },[])
    return (<div>
        <div>Количество</div>
        <form>
            <Input type="number" id={props.id} value={store.getState().value}></Input>
            <Button onClick={() => store.dispatch({type: "decrement"} satisfies DecrementAction)}>-</Button>
            <Button onClick={() => store.dispatch({type: "increment"} satisfies IncrementAction)}>+</Button>
        </form>
    </div>)
}
export default ProductQuantity
