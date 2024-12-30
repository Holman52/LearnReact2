import React, {Fragment, useReducer} from "react";
import './ProductQuantity'
import Button from "../../../../UI/Button/But";

const QuantityReducer = (value) =>{
    return {
        value: 1
    }
}

const ProductQuantity = () =>{
    const [stateQuantity, dispatchStateQuantity] = useReducer(QuantityReducer, {value: '' , isValid: false})
    const RemoveProduct = (event) =>{
        dispatchStateQuantity = () =>{
            
        }

    }

    <Fragment>
        <span>Количество</span>
        <form>
            <input type="input" id="inputQuantity" value={stateQuantity.value}></input>
            <Button onClick={RemoveProduct}>-</Button>
            <Button onClick={AddProduct}>+</Button>
        </form>
    </Fragment>
}


export default ProductQuantity