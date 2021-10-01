import Button from './Buttons/Button';
import TituloNavBar from './Títulos/TituloNavBar';
import Cart from './Cart/Cart';

export default function NavBar() {
    return (
        <>
            <TituloNavBar />
            <Cart text='images/cart.jpg' />
            <hr />
            <Button text='Alimentos' />
            <Button text='Accesorios' />
            <Button text='Higiene' />
            <Button text='Medicamentos' />
            <hr />

        </>
    );
}

