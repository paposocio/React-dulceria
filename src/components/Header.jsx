import { Link } from "react-router-dom"

function Header() {
    return (
        <div className='container-fluid header'>
            <div className='container'>
                <nav className='navbar navbar-light navbar-expand-xl'>
                    <Link to="/">
                        <a className='navbar-brand d-flex justify-content-center align-items-center'>
                            <h1 className=' storeLogo'>Mi Dulceria Online </h1>
                        </a>
                    </Link>
                    <button
                        className='navbar-toggler py-2 px-3'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarCollapse'
                    >
                        <span className='fa fa-bars text-black' />
                    </button>
                    <div className='collapse navbar-collapse' id='navbarCollapse'>
                        <div className='navbar-nav mx-auto'>
                        </div>         
                        <div className='d-flex m-3 me-0'>
                            <a href='#' className='position-relative me-4 my-auto'>
                                <i className='fa fa-shopping-bag fa-2x' />
                                <span
                                    className='position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1'
                                    style={{ top: '-5px', left: 15, height: 20, minWidth: 20 }}
                                >
                                    3
                                </span>
                            </a>
                            <a href='#' className='my-auto'>
                                <i className='fas fa-user fa-2x' />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Header