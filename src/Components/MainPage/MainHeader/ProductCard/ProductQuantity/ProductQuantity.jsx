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
    const product = useSelector((state) => state.products.products)
    const dispatch = useDispatch()
    if (product) {
        console.log(product);
    } else {
        console.log('data или products не определены');
    }
   return (<div>
        <div>Количество</div>
        <form>
            <input type="input" id={props.id} value={product.count}></input>
            <Button onClick={() => dispatch(decrement(props.id))}>-</Button>
            <Button onClick={() => dispatch(increment(props.id))}>+</Button>
        </form>
    </div>)
}


export default ProductQuantity