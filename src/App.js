import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
function App() {
  const [visible, setVisible] = useState(false)

  const showCart =()=>{
    setVisible(true)
  }
  const hideCart = ()=>{
    setVisible(false)
  }
  return (
    <>
    {visible && <Cart onHideCart={hideCart} />}
      <Header onShowCart ={showCart} />
      <Meals/>
    </>
  );
}

export default App;
