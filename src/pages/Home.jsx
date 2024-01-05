import { useDispatch, useSelector } from "react-redux";
import { productAcions } from "../store/productsReducer";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Counter from "../components/Counter";


const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.catalog)

  const handleClickBuy = (e) => {
    const id = e.target.value
    const selectProductInfo = products.filter((item) => item._id == id)
    const buy = {                       // новый объект для удобной работы с количеством
      id: selectProductInfo[0]._id,
      info: selectProductInfo[0],
      count: 1
    }
    dispatch(productAcions.buyProduct(buy))
  }

  
  
  return (
    <div className="wrapper">
      <h1>CATALOG</h1>
      <Link to='/cart' className="link">
        <FiShoppingCart color="#fff" size={30}/>
        <Counter />
      </Link>
      {products?.map(prod => {
        return (
          <div key={prod._id} className="product">
            <h4>{prod.name}</h4>
            <img src={prod.picture} alt="poduct" />
            <div className="buy-container">
              <p>{prod.price}</p>
              <button className="buy-button" onClick={handleClickBuy} value={prod._id}>Buy Now</button>
            </div>
          </div>
        )
      })}
    </div>
  ); 
}


export default Home