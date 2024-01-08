import { Outlet, Link } from "react-router-dom";
import Counter from "../components/Counter";
import { FiShoppingCart } from "react-icons/fi";

export default function Layout() {
  return (
    <div>
      <div className="wrapper">
        <nav>
          <Link to='/'>Home</Link>
          <div className="basket">
            <Link to='/cart' className="nav_cart">
              <FiShoppingCart color="#000" size={30}/>
              <Counter />
            </Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}
