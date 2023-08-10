import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addToCart } from "../../redux/carts/cartsAction";
import { MdOutlineAddShoppingCart, MdAddTask } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
const ProductItem = ({ product, infobtn = true }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { carts } = useSelector((state) => state.cartsReducer);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    Swal.fire({
      title: `${product.name} added`,
      icon: "success",
      confirmButtonText: "ok",
    });
  };

  const addedProdeuct = carts.find((cart) => cart.id === product.id)
    ? true
    : false;
  return (
    <div className=" col-sm-6  col-lg-4">
      <div className="card p-2 shadow h-100 border-0">
        <img
          src={product.image}
          className="card-img-top"
          style={{ objectFit: "contain" }}
          height="150"
          alt="product"
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
        </div>
        <div className="card-footer d-flex flex-column  ">
          {addedProdeuct ? (
            <button
              onClick={() =>
                Swal.fire({
                  text: `${product.name} added to cart`,
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
                })
              }
              className="btn btn-sm btn-success fw-bold"
            >
              <MdAddTask className="me-2 " />
              added
            </button>
          ) : (
            <button
              onClick={() => handleAddToCart(product)}
              className="btn btn-sm btn-outline-primary"
            >
              <MdOutlineAddShoppingCart className="me-2" />
              add to cart
            </button>
          )}

          <div className="d-flex justify-content-between my-3 align-items-center ">
            {infobtn && (
              <button
                onClick={() => navigate(`/products/${product.id}`)}
                className=" btn btn-info btn-sm"
              >
                more infomation
              </button>
            )}
            <h6 className="mb-0">{product.price} $</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
