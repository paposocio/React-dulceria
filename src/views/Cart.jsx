import BreadCrumb from '../components/BreadCrumb'
import CartBody from '../components/CartBody'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Cart() {
    return (
        <>
            <Header />
            <BreadCrumb pageName={'Carrito'}/>
            <CartBody />
            <Footer />
        </>
    )
}
export default Cart