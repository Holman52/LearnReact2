import React, {useState} from "react";
import './ProductQuantity'
import Button from "../../../../UI/Button/But";

// const QuantityReducer = (value) =>{
//     return {
//         value: 1
//     }
// }

const ProductQuantity = () =>{
    // const [stateQuantity, dispatchStateQuantity] = useReducer(QuantityReducer, {value: '' , isValid: false})
    // const RemoveProduct = (event) =>{
    //     dispatchStateQuantity({value: event.target.value - 1});
    // }
    // const AddProduct = (event) =>{
    //     dispatchStateQuantity({value: event.target.value +  1});
    // }
    const [value, setValue] = useState(1);
  
    const AddProduct = () => {
      setValue(value + 1);
    };
  
    const RemoveProduct = () => {
      setValue(value - 1);
    };
  
   return (<div>
        <div>Количество</div>
        <form>
            <input type="input" id="inputQuantity" value={value}></input>
            <Button onClick={RemoveProduct}>-</Button>
            <Button onClick={AddProduct}>+</Button>
        </form>
    </div>)
}


export default ProductQuantity