import BreadCrumb from '../components/BreadCrumb'
import CheckoutBody from '../components/CheckoutBody'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Checkout() {
    return (
        <>
            <Header />
            <BreadCrumb pageName={'Pago'}/>
            <CheckoutBody />
            <Footer />
        </>
    )
}
export default Checkout
