import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { CartVista } from './components/CartVista/CartVista';
import { CartProvider } from './context/CartContext';
import { UIProvider } from './context/UIContext';
import { Home } from './components/Secciones/Home';
import { Contacto } from './components/Secciones/Contacto';

function App() {

  return (
    <>

      <UIProvider>
        <CartProvider>

          <BrowserRouter>
            <NavBar />

            <Switch>
              <Route exact path="/" >
                <Home />
              </Route>

              <Route exact path="/planes" >
                <h1> Planes </h1>
              </Route >

              <Route exact path="/productos/:categoryId" >
                <ItemListContainer />
              </Route >

              <Route exact path="/detalle/:itemId" >
                <ItemDetailContainer />
              </Route >

              <Route exact path="/contacto" >
                <Contacto />
              </Route >

              <Route exact path="/carrito" >
                <CartVista />
              </Route >

              <Route path="*" >
                <Redirect to="/" />
              </Route >

            </Switch>

          </BrowserRouter>


        </CartProvider>
      </UIProvider>
    </>
  );
}

export default App;
