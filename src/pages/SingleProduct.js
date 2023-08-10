import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/products/productsAction";
import ProductItem from "../components/productItem/ProductItem";
import notFonud from "./404page.jpg";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products, loading, errors } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (loading && !products.length) {
    return <h3>loading...</h3>;
  }
  if (errors) {
    return <h3>{errors}</h3>;
  }
  return (
    <>
      <div className="container-md mt-5 container-fluid">
        <div className="row g-3">
          {products.find(
            (product) => product.id.toString() === id.toString()
          ) ? (
            products
              .filter((product) => product.id.toString() === id.toString())
              .map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  infobtn={false}
                />
              ))
          ) : (
            <>
              <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                <h3>Ommm!There is no such product</h3>
                <Link to="/products">
                  <button className="btn btn-primary">Let's go shopping</button>
                </Link>
                <div>
                  <img
                    style={{ height: "300px" }}
                    src={notFonud}
                    alt="emptyCart"
                    className="mt-2 img-fluid"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
