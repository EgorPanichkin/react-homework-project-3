import { useSelector } from "react-redux"


export default function Counter() {
  const buyingProducts = useSelector((state) => state.products.buyingProducts)

  function countProd(buyingProducts) {
    let count = 0
    if (buyingProducts.length != 0) {
      buyingProducts.forEach(prod => {
        count = count + prod.count
      })
    }
    return count
  }

  return (
    <div className="counter">{countProd(buyingProducts)}</div>
  )
}
