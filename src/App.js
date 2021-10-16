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


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/" >
            <h1> Home </h1>
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
            <h1> Contacto </h1>
          </Route >

          <Route exact path="/carrito" >
            <h1> Carrito </h1>
          </Route >

          <Route path="*" >
            <Redirect to="/" />
          </Route >

        </Switch>

      </BrowserRouter>

    </>
  );
}

export default App;
