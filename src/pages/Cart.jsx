import { Link } from "react-router-dom"
import { MdOutlineArrowBackIos, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { productAcions } from "../store/productsReducer";
import Counter from "../components/Counter";

export default function Cart() {
  const dispatch = useDispatch()
  const buyProducts = useSelector((state) => state.products.buyingProducts)

  const handleClickRefuse = (e) => {
    dispatch(productAcions.refuseProduct(e.target.value))
  }

  const incr = (e) => {
    dispatch(productAcions.increaseCountProduct(e.target.value))
  }
  const decr = (e) => {
    dispatch(productAcions.decreaseCountProduct(e.target.value))
  }

  return (
    <div className="wrapper">
      <h1>Your shopping cart</h1>
      <Link to='/'  className='link'>
        <MdOutlineArrowBackIos color="#fff" size={30}/>
        <Counter />
      </Link>
      {buyProducts.length == 0 ? (
        <div>
          <h2>Oh empty!</h2>
          <p>Your cart is empty, open the catalog and choose the best product</p>
        </div>
      ) : (
        buyProducts.map((prod, index) => {
          return (
            <div key={`${prod.info._id}${index}`} className="product">
              <h4>{prod.info.name}</h4>
              <img src={prod.info.picture} alt="poduct" />
              <div className="buy-container">
                <p>{prod.info.price}</p>
                <button onClick={decr} value={prod.info._id}>-</button>
                <p>count:{prod.count}</p>
                <button onClick={incr} value={prod.info._id}>+</button>
                <button className="buy-button" onClick={handleClickRefuse} value={prod.info._id}><MdDelete size={25}/></button>
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}
