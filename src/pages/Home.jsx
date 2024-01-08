import { useDispatch, useSelector } from "react-redux";
import { cartAcions } from "../store/cartSlice";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Counter from "../components/Counter";
import { useEffect } from "react";
import { fetchProducts } from "../store/productSlice";


const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.items)
  const { loading, error } = useSelector((state) => state.products)


  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  const handleClickBuy = (id) => {
    const selectProductInfo = products.filter((item) => item.id == id)[0]
    const buy = {                       // новый объект с количеством
      ...selectProductInfo,
      count: 1
    }
    dispatch(cartAcions.buyProduct(buy))
  }


  if (loading) return <div className="loading"><h2>Loading...</h2></div>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div className="wrapper">
      <h1>CATALOG</h1>
      <Link to='/cart' className="link">
        <FiShoppingCart color="#fff" size={30}/>
        <Counter />
      </Link>
      {products?.map(prod => {
        return (
          <div key={prod.id} className="product">
            <h4>{prod.title}</h4>
            <img src={prod.images[0]} alt="poduct" />
            <div className="buy-container">
              <p>{prod.price} &#36;</p>
              <button className="buy-button" onClick={() => handleClickBuy(prod.id)}>Buy Now</button>
            </div>
          </div>
        )
      })}
    </div>
  ); 
}


export default Home