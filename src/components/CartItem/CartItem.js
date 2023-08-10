import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  removeFromCart,
} from "../../redux/carts/cartsAction";
import Swal from "sweetalert2";
const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrement = (product) => {
    dispatch(increment(product));
  };
  const handleRemoveFromCart = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "this product added to cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "oop! remove it",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(product));
        Swal.fire("Deleted!", "success");
      }
    });
  };

  const handleDecrement = (product) => {
    dispatch(decrement(product));
  };
  return (
    <tr>
      <td className="align-middle">
        <div className="row  align-items-center">
          <div className=" col-lg-4">
            <img src={product.image} className="img-fluid" alt="product" />
          </div>
          <div className=" col-lg-5">
            <h5>{product.name}</h5>
            <p> {product.description}</p>
          </div>
        </div>
      </td>
      <td className="align-middle" style={{ width: "10%" }}>
        {product.price}
      </td>
      <td className="align-middle">
        <button
          onClick={() => handleIncrement(product)}
          className="btn btn-sm btn-dark me-2"
        >
          +
        </button>
        <span>{product.qyt}</span>
        <button
          onClick={() => handleDecrement(product)}
          className="btn btn-sm btn-dark ms-2"
        >
          -
        </button>
      </td>
      <td className="align-middle">{product.price * product.qyt}</td>
      <td className="align-middle" style={{ width: "15%" }}>
        <button
          onClick={() => handleRemoveFromCart(product)}
          className="btn btn-sm btn-danger"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
