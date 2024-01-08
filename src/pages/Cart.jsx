import { Link } from "react-router-dom"
import { MdOutlineArrowBackIos, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { cartAcions } from "../store/cartSlice";
import Counter from "../components/Counter";

export default function Cart() {
  const dispatch = useDispatch()
  const buyProducts = useSelector((state) => state.cart.buyingProducts)

  const handleClickRefuse = (id) => {
    dispatch(cartAcions.refuseProduct(id))
  }

  const incr = (e) => {
    dispatch(cartAcions.increaseCountProduct(e.target.value))
  }
  const decr = (e) => {
    dispatch(cartAcions.decreaseCountProduct(e.target.value))
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
            <div key={`${prod.id}${index}`} className="product">
              <h4>{prod.title}</h4>
              <img src={prod.images[0]} alt="poduct" />
              <div className="buy-container">
                <p>{prod.price} &#36;</p>
                <button onClick={decr} value={prod.id}>-</button>
                <p>count:{prod.count}</p>
                <button onClick={incr} value={prod.id}>+</button>
                <button className="buy-button" onClick={() => handleClickRefuse(prod.id)}><MdDelete size={25}/></button>
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}
