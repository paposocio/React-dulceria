import '../../public/homePageStyles.css'
import { Link } from 'react-router-dom'

function HomePageBody() {
    return (
        <>
            {/* Hero Start */}
            <div className='container-fluid hero-header'>
                <div className='container py-5'>
                    <div className='row g-5 align-items-center'>
                        <div className='col-md-12 col-lg-7'>
                            <h4 className='mb-3 text-warning'>Conoce la cultura colombiana</h4>
                            <h1 className='mb-5 display-3 text-black'>
                                Dulces tipicos colombianos
                            </h1>
                        </div>
                        <div className='col-md-12 col-lg-5'>
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://mexicorutamagica.mx/wp-content/uploads/2021/03/dulces-tipicos-de-colombia.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://mitsubishi-motors.com.co/blog/wp-content/uploads/2020/08/dulces-tipicos-guayaba.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://dulcestipicosdecolombia.com/wp-content/uploads/foto-dulces-de-frutas-bodegon-dulces-tipicos-de-colombia.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExample"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExample"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Hero End */}
            {/* Featurs Section Start */}
            <div className='container-fluid featurs py-5'>
                <div className='container py-5'>
                    <div className='row g-4'>
                        <div className='col-md-6 col-lg-3'>
                            <div className='featurs-item text-center rounded bg-light p-4'>
                                <div className='featurs-icon btn-square rounded-circle bg-warning mb-5 mx-auto'>
                                    <i className='fas fa-car-side fa-3x text-white' />
                                </div>
                                <div className='featurs-content text-center'>
                                    <h5>Envios Rapidos</h5>
                                    <p className='mb-0'>Recibe mediante contraentrega</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3'>
                            <div className='featurs-item text-center rounded bg-light p-4'>
                                <div className='featurs-icon btn-square rounded-circle bg-warning mb-5 mx-auto'>
                                    <i className='fas fa-user-shield fa-3x text-white' />
                                </div>
                                <div className='featurs-content text-center'>
                                    <h5>Pagos Seguros</h5>
                                    <p className='mb-0'>100% de respaldo</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3'>
                            <div className='featurs-item text-center rounded bg-light p-4'>
                                <div className='featurs-icon btn-square rounded-circle bg-warning mb-5 mx-auto'>
                                    <i className='fas fa-exchange-alt fa-3x text-white' />
                                </div>
                                <div className='featurs-content text-center'>
                                    <h5>Devoluciones</h5>
                                    <p className='mb-0'>Garantia de calidad de los productos</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-3'>
                            <div className='featurs-item text-center rounded bg-light p-4'>
                                <div className='featurs-icon btn-square rounded-circle bg-warning mb-5 mx-auto'>
                                    <i className='fa fa-phone-alt fa-3x text-white' />
                                </div>
                                <div className='featurs-content text-center'>
                                    <h5>Soporte 24/7</h5>
                                    <p className='mb-0'>Soporte y atencion inmediata</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Featurs Section End */}
            {/* Banner Section Start*/}
            <div className='container-fluid banner bg-warning my-5'>
                <div className='container py-5'>
                    <div className='row g-4 align-items-center'>
                        <div className='col-lg-6'>
                            <div className='py-4'>
                                <h1 className='display-3 text-white'>Sabores unicos y exoticos</h1>
                                <p className='fw-normal display-3 text-dark mb-4'>en nuestra tienda</p>
                                <p className='mb-4 text-dark'>
                                    Compra productos colombianos desde cualquier sitio y en cualquier momento.
                                </p>
                                <Link to='/Shop'>
                                    <a
                                        href='#'
                                        className='banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5'
                                    >
                                        Comprar
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img src="https://www.alfondoque.com/documentos/productos/C-ALFONDOQUE.png" className="img-fluid w-100 rounded" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Banner Section End */}
            {/* Fact Start */}
            <div className='container-fluid py-5'>
                <div className='container'>
                    <div className='bg-light p-5 rounded'>
                        <div className='row g-4 justify-content-center'>
                            <div className='col-md-6 col-lg-6 col-xl-3'>
                                <div className='counter bg-white rounded p-5'>
                                    <i className='fa fa-users text-warning' />
                                    <h4>Clientes satisfechos</h4>
                                    <h1>1963</h1>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-6 col-xl-3'>
                                <div className='counter bg-white rounded p-5'>
                                    <i className='fa fa-users text-warning' />
                                    <h4>Calidad del servicio</h4>
                                    <h1>99%</h1>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-6 col-xl-3'>
                                <div className='counter bg-white rounded p-5'>
                                    <i className='fa fa-users text-warning' />
                                    <h4>Certificados de calidad</h4>
                                    <h1>33</h1>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-6 col-xl-3'>
                                <div className='counter bg-white rounded p-5'>
                                    <i className='fa fa-users text-warning' />
                                    <h4>Variedad de productos</h4>
                                    <h1>789</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fact Start */}
            {/* Tastimonial Start */}
            <div className='container-fluid testimonial py-5'>
                <div className='container py-5'>
                    <div className='testimonial-header text-center'>
                        <h4 className='text-black'>Testimonios</h4>
                        <h1 className='display-5 mb-5 text-dark'>Nuestros clientes dicen!</h1>
                    </div>
                    <div className='owl-carousel testimonial-carousel'>
                        <div className='testimonial-item img-border-radius bg-light rounded p-4'>
                            <div className='position-relative'>
                                <i
                                    className='fa fa-quote-right fa-2x text-warning position-absolute'
                                    style={{ bottom: 30, right: 0 }}
                                />
                                <div className='d-flex align-items-center flex-nowrap'>
                                    <div className='bg-warning rounded'>
                                        <img
                                            src='img/testimonial-1.jpg'
                                            className='img-fluid rounded'
                                            style={{ width: 100, height: 100 }}
                                            alt=''
                                        />
                                    </div>
                                    <div className='ms-4 d-block'>
                                        <h4 className='text-dark'>Juan Torres</h4>
                                        <p className='m-0 pb-3'>Comprador</p>
                                        <div className='d-flex pe-5'>
                                            <i className='fas fa-star text-black' />
                                            <i className='fas fa-star text-black' />
                                            <i className='fas fa-star text-black' />
                                            <i className='fas fa-star' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='testimonial-item img-border-radius bg-light rounded p-4'>
                            <div className='position-relative'>
                                <i
                                    className='fa fa-quote-right fa-2x text-warning position-absolute'
                                    style={{ bottom: 30, right: 0 }}
                                />
                                <div className='mb-4 pb-4 border-bottom border-warning'>
                                    <p className='mb-0'>
                                        Soy extranjero pero desde que conozco este sitio he podido experimentar nuevos sabores totalmente desconocidos para mi.
                                    </p>
                                </div>
                                <div className='d-flex align-items-center flex-nowrap'>
                                    <div className='bg-warning rounded'>
                                        <img
                                            src='img/testimonial-1.jpg'
                                            className='img-fluid rounded'
                                            style={{ width: 100, height: 100 }}
                                            alt=''
                                        />
                                    </div>
                                    <div className='ms-4 d-block'>
                                        <h4 className='text-dark'>Sara Garcia</h4>
                                        <p className='m-0 pb-3'>Vendedora</p>
                                        <div className='d-flex pe-5'>
                                            <i className='fas fa-star text-black' />
                                            <i className='fas fa-star text-black' />
                                            <i className='fas fa-star text-black' />
                                            <i className='fas fa-star text-black' />
                                            <i className='fas fa-star text-black' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='testimonial-item img-border-radius bg-light rounded p-4'>
                            <div className='position-relative'>
                                <i
                                    className='fa fa-quote-right fa-2x text-warning position-absolute'
                                    style={{ bottom: 30, right: 0 }}
                                />
                                <div className='mb-4 pb-4 border-bottom border-warning'>
                                    <p className='mb-0'>
                                        Esta plataforma me ha dado la oportunidad de hacer crecer mi emprendimiento fecilitandome la venta de mis productos.
                                    </p>
                                </div>
                                <div className='d-flex align-items-center flex-nowrap'>
                                    <div className='bg-warning rounded'>
                                        <img
                                            src='img/testimonial-1.jpg'
                                            className='img-fluid rounded'
                                            style={{ width: 100, height: 100 }}
                                            alt=''
                                        />
                                    </div>
                                    <div className='ms-4 d-block'>
                                        <h4 className='text-dark'>Martin Lopez</h4>
                                        <p className='m-0 pb-3'>Comprador</p>
                                        <div className='d-flex pe-5'>
                                            <i className='fas fa-star text-black' />
                                            <i className='fas fa-star text-black' />
                                            <i className='fas fa-star text-black' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tastimonial End */}
        </>

    )
}
export default HomePageBody
