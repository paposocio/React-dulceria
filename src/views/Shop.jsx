import BreadCrumb from '../components/BreadCrumb'
import ShopBody from '../components/ShopBody'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Shop() {
    return (
        <>
            <Header />
            <BreadCrumb pageName={'Tienda'}/>
            <ShopBody />
            <Footer />
        </>
    )
}
export default Shop