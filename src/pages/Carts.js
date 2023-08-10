import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem/CartItem";
import { Link } from "react-router-dom";
import emptyCart from "./emptycart.jpg";
import { deleteCart } from "../redux/carts/cartsAction";
import Swal from "sweetalert2";

const Carts = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cartsReducer);
  const handleDeleteCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete All cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "yes! delete all",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCart());
        Swal.fire("Deleted!", "success");
      }
    });
  };
  return (
    <>
      {carts.length ? (
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-12 pl-3 pt-3">
              <table className="table table-hover border bg-white">
                <thead>
                  <tr>
                    <th>product</th>
                    <th>price</th>
                    <th style={{ width: "15%" }}>quantity</th>
                    <th>subtotal</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.length > 0 &&
                    carts.map((product) => (
                      <CartItem key={product.id} product={product} />
                    ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <button
                        className="btn btn-dark"
                        onClick={() => {
                          handleDeleteCart();
                        }}
                      >
                        clear cart
                      </button>
                    </td>
                    <td colSpan="2" className="hidden-xs"></td>
                    <td className="hidden-xs " style={{ width: "15%" }}>
                      <strong>
                        total:
                        {carts.reduce((total, cart) => {
                          return total + cart.price * cart.qyt;
                        }, 0)}
                      </strong>
                    </td>
                    <td>
                      <button className="btn btn-success btn-block">
                        {" "}
                        checkout
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5">
          <Link to="/products" className="btn btn-outline-primary">
            Let's go shopping
          </Link>
          <div>
            <img
              style={{ height: "300px" }}
              src={emptyCart}
              alt="emptyCart"
              className="mt-2 img-fluid"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Carts;
