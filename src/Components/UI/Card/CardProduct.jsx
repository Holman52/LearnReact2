

const CardProduct = (props) => {
    return (
      <div className={`${"card-product"} ${props.className}`}>{props.children}</div>
    );
  };
  
  export default CardProduct