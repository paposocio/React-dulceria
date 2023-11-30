function CheckoutBody() {
    return (
        <div className='container-fluid py-5'>
            <div className='container py-5'>
                <h1 className='mb-4'>Detalles de facturacion</h1>
                <form action='#'>
                    <div className='row g-5'>
                        <div className='col-md-12 col-lg-6 col-xl-7'>
                            <div className='row'>
                                <div className='col-md-12 col-lg-6'>
                                    <div className='form-item w-100'>
                                        <label className='form-label my-3'>
                                            Nombres<sup>*</sup>
                                        </label>
                                        <input type='text' className='form-control' />
                                    </div>
                                </div>
                                <div className='col-md-12 col-lg-6'>
                                    <div className='form-item w-100'>
                                        <label className='form-label my-3'>
                                            Apellidos<sup>*</sup>
                                        </label>
                                        <input type='text' className='form-control' />
                                    </div>
                                </div>
                            </div>
                            <div className='form-item'>
                                <label className='form-label my-3'>
                                    Direccion <sup>*</sup>
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                />
                            </div>
                            <div className='form-item'>
                                <label className='form-label my-3'>
                                    Municipio/Ciudad<sup>*</sup>
                                </label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='form-item'>
                                <label className='form-label my-3'>
                                    Departamento<sup>*</sup>
                                </label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='form-item'>
                                <label className='form-label my-3'>
                                    Codigo Postal<sup>*</sup>
                                </label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='form-item'>
                                <label className='form-label my-3'>
                                    Telefono<sup>*</sup>
                                </label>
                                <input type='tel' className='form-control' />
                            </div>
                            <div className='form-item'>
                                <label className='form-label my-3'>
                                    Correo Electronico<sup>*</sup>
                                </label>
                                <input type='email' className='form-control' />
                            </div>
                            <hr />

                            <div className='form-item'>
                                <textarea
                                    name='text'
                                    className='form-control'
                                    spellCheck='false'
                                    cols={30}
                                    rows={11}
                                    placeholder='Informacion Adicional (Opcional)'
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                        <div className='col-md-12 col-lg-6 col-xl-5'>
                            <div className='table-responsive'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th scope='col'>Productos</th>
                                            <th scope='col'>Nombre</th>
                                            <th scope='col'>Precio</th>
                                            <th scope='col'>Cantidad</th>
                                            <th scope='col'>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope='row'>
                                                <div className='d-flex align-items-center mt-2'>
                                                    <img
                                                        src='https://cdn1.totalcommerce.cloud/mercacentro/product-zoom/es/dulce-banana-extra-x-100-1.webp'
                                                        className='img-fluid rounded-circle'
                                                        style={{ width: 90, height: 90 }}
                                                        alt=''
                                                    />
                                                </div>
                                            </th>
                                            <td className='py-5'>Producto prueba</td>
                                            <td className='py-5'>$69.00</td>
                                            <td className='py-5'>2</td>
                                            <td className='py-5'>$138.00</td>
                                        </tr>
                                        <tr>
                                            <th scope='row'></th>
                                            <td className='py-5' />
                                            <td className='py-5' />
                                            <td className='py-5'>
                                                <p className='mb-0 text-dark py-3'>Subtotal</p>
                                            </td>
                                            <td className='py-5'>
                                                <div className='py-3 border-bottom border-top'>
                                                    <p className='mb-0 text-dark'>$414.00</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope='row'></th>
                                            <td className='py-5'>
                                                <p className='mb-0 text-dark py-4'>Envio</p>
                                            </td>
                                            <td colSpan={3} className='py-5'>
                                                <div className='form-check text-start'>
                                                    <input
                                                        type='checkbox'
                                                        className='form-check-input bg-warning border-0'
                                                        id='Shipping-1'
                                                        name='Shipping-1'
                                                        defaultValue='Shipping'
                                                    />
                                                    <label className='form-check-label' htmlFor='Shipping-1'>
                                                        Envio Gratis
                                                    </label>
                                                </div>
                                                <div className='form-check text-start'>
                                                    <input
                                                        type='checkbox'
                                                        className='form-check-input bg-warning border-0'
                                                        id='Shipping-2'
                                                        name='Shipping-1'
                                                        defaultValue='Shipping'
                                                    />
                                                    <label className='form-check-label' htmlFor='Shipping-2'>
                                                        Flete: $15.00
                                                    </label>
                                                </div>
                                                <div className='form-check text-start'>
                                                    <input
                                                        type='checkbox'
                                                        className='form-check-input bg-warning border-0'
                                                        id='Shipping-3'
                                                        name='Shipping-1'
                                                        defaultValue='Shipping'
                                                    />
                                                    <label className='form-check-label' htmlFor='Shipping-3'>
                                                        Contraentrega: $8.00
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope='row'></th>
                                            <td className='py-5'>
                                                <p className='mb-0 text-dark text-uppercase py-3'>TOTAL</p>
                                            </td>
                                            <td className='py-5' />
                                            <td className='py-5' />
                                            <td className='py-5'>
                                                <div className='py-3 border-bottom border-top'>
                                                    <p className='mb-0 text-dark'>$135.00</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='row g-4 text-center align-items-center justify-content-center border-bottom py-3'>
                                <div className='col-12'>
                                    <div className='form-check text-start my-3'>
                                        <input
                                            type='checkbox'
                                            className='form-check-input bg-warning border-0'
                                            id='Transfer-1'
                                            name='Transfer'
                                            defaultValue='Transfer'
                                        />
                                        <label className='form-check-label' htmlFor='Transfer-1'>
                                            Transferencia Bancaria/PSE
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='row g-4 text-center align-items-center justify-content-center border-bottom py-3'>
                                <div className='col-12'>
                                    <div className='form-check text-start my-3'>
                                        <input
                                            type='checkbox'
                                            className='form-check-input bg-warning border-0'
                                            id='Delivery-1'
                                            name='Delivery'
                                            defaultValue='Delivery'
                                        />
                                        <label className='form-check-label' htmlFor='Delivery-1'>
                                            Contraentrega
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='row g-4 text-center align-items-center justify-content-center border-bottom py-3'>
                                <div className='col-12'>
                                    <div className='form-check text-start my-3'>
                                        <input
                                            type='checkbox'
                                            className='form-check-input bg-warning border-0'
                                            id='Paypal-1'
                                            name='Paypal'
                                            defaultValue='Paypal'
                                        />
                                        <label className='form-check-label' htmlFor='Paypal-1'>
                                            Paypal
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='row g-4 text-center align-items-center justify-content-center pt-4'>
                                <button
                                    type='button'
                                    className='btn border-secondary py-3 px-4 text-uppercase w-100 text-black'
                                >
                                    Realizar Pedido
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default CheckoutBody