import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/products/productsAction";
import ProductItem from "../components/productItem/ProductItem";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, errors } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      {loading && !products.length && <h3>loading...</h3>}
      {errors && <h3>{errors}</h3>}
      <div className="container-md mt-5 container-fluid">
        <div className="row g-3">
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};
export default Products;
