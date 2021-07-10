import { useSelector } from 'react-redux';
import { BrowserRouter , Link, Route} from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';

function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">RODICK</Link>
          </div>
          <div>
            <Link to="/cart">Cart
              {cartItems.length > 0  && (
                <span className='badge'>{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign in</Link>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>  
          <Route path="/" component={HomeScreen} exact></Route>  
        </main>
        <footer className="row center">
          All rights reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;