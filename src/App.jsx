import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };
  return (
    <div className="App">
      <NavBar />
      <switch>
        <ItemListContainer greeting="Welcome to our E-Commerce!" />
        <Route path="/" exact component={ItemListContainer} />
        <Route path="/category1" component={ItemListContainer} />
        <Route path="/category2" component={ItemListContainer} />
      </switch>
    </div>
  );
}

export default App;