function Footer() {
    return (
        <div className='container-fluid bg-dark text-white-50 footer pt-5 mt-5'>
            <div className='container py-5'>
                <div
                    className='pb-4 mb-4'
                    style={{ borderBottom: '1px solid rgba(226, 175, 24, 0.5)' }}
                >
                    <div className='row g-4'>
                        <div className='col-lg-3'>
                            <a href='#'>
                                <h1 className='mb-0 storeLogo text-white'>Mi Dulceria Online</h1>
                                <p className='text-secondary mb-0'>Dulces tipicos</p>
                            </a>
                        </div>
                        <div className='col-lg-6'>
                            <div className='position-relative mx-auto'>
                                <input
                                    className='form-control border-0 w-100 py-3 px-4 rounded-pill'
                                    type='email'
                                    placeholder='Tu correo'
                                />
                                <button
                                    type='submit'
                                    className='btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white'
                                    style={{ top: 0, right: 0 }}
                                >
                                    Suscribete
                                </button>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='d-flex justify-content-end pt-3'>
                                <a
                                    className='btn  btn-outline-secondary me-2 btn-md-square rounded-circle'
                                    href=''
                                >
                                    <i className='fab fa-twitter' />
                                </a>
                                <a
                                    className='btn btn-outline-secondary me-2 btn-md-square rounded-circle'
                                    href=''
                                >
                                    <i className='fab fa-facebook-f' />
                                </a>
                                <a
                                    className='btn btn-outline-secondary me-2 btn-md-square rounded-circle'
                                    href=''
                                >
                                    <i className='fab fa-youtube' />
                                </a>
                                <a
                                    className='btn btn-outline-secondary btn-md-square rounded-circle'
                                    href=''
                                >
                                    <i className='fab fa-linkedin-in' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row g-5'>
                    <div className='col-lg-3 col-md-6'>
                        <div className='footer-item'>
                            <h4 className='text-light mb-3'>Por que elegirnos ?</h4>
                            <p className='mb-4'>
                                Llevamos mas de 5 años llevando los exquisitos y exoticos sabores de toda colombia a miles de usuarios que mediante nuestra plataforma exploran y apoyan la cultura colombiana.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <div className='d-flex flex-column text-start footer-item'>
                            <h4 className='text-light mb-3'>Informacion</h4>
                            <a className='btn-link' href=''>
                                Acerca de
                            </a>
                            <a className='btn-link' href=''>
                                Contacto
                            </a>
                            <a className='btn-link' href=''>
                                Politica de privacidad
                            </a>
                            <a className='btn-link' href=''>
                                Terminos &amp; Condiciones
                            </a>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <div className='d-flex flex-column text-start footer-item'>
                            <h4 className='text-light mb-3'>Cuenta</h4>
                            <a className='btn-link' href=''>
                                Mi cuenta
                            </a>
                            <a className='btn-link' href=''>
                                Mis productos
                            </a>
                            <a className='btn-link' href=''>
                                Historial de ventas
                            </a>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <div className='footer-item'>
                            <h4 className='text-light mb-3'>Contacto</h4>
                            <p>Direccion: 1429 Netus Rd, NY 48247</p>
                            <p>Correo: Example@gmail.com</p>
                            <p>Telefono: +0123 4567 8910</p>
                            <p>Metodos de pago</p>
                            <img src='img/payment.png' className='img-fluid' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer