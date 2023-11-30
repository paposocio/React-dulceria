import { Link } from "react-router-dom"

function CartBody() {
    return (
        <div className='container-fluid py-5'>
            <div className='container py-5'>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>Productos</th>
                                <th scope='col'>Nombre</th>
                                <th scope='col'>Precio</th>
                                <th scope='col'>Cantidad</th>
                                <th scope='col'>Total</th>
                                <th scope='col'>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope='row'>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='https://cdn1.totalcommerce.cloud/mercacentro/product-zoom/es/dulce-banana-extra-x-100-1.webp'
                                            className='img-fluid me-5 rounded-circle'
                                            style={{ width: 80, height: 80 }}
                                            alt=''
                                        />
                                    </div>
                                </th>
                                <td>
                                    <p className='mb-0 mt-4'>Dulce pruebas</p>
                                </td>
                                <td>
                                    <p className='mb-0 mt-4'>$10.000</p>
                                </td>
                                <td>
                                    <div className='input-group quantity mt-4' style={{ width: 100 }}>
                                        <div className='input-group-btn'>
                                            <button className='btn btn-sm btn-minus rounded-circle bg-light border'>
                                                <i className='fa fa-minus' />
                                            </button>
                                        </div>
                                        <input
                                            type='text'
                                            className='form-control form-control-sm text-center border-0'
                                            defaultValue={1}
                                        />
                                        <div className='input-group-btn'>
                                            <button className='btn btn-sm btn-plus rounded-circle bg-light border'>
                                                <i className='fa fa-plus' />
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='mb-0 mt-4'>$10.000</p>
                                </td>
                                <td>
                                    <button className='btn btn-md rounded-circle bg-light border mt-4'>
                                        <i className='fa fa-times text-danger' />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope='row'>
                                    <div className='d-flex align-items-center'>
                                        <img
                                            src='https://statics-cuidateplus.marca.com/cms/styles/ratio_43/azblob/2023-02/antojos-dulce-chocolate.jpg.webp?itok=QN6wiwyd'
                                            className='img-fluid me-5 rounded-circle'
                                            style={{ width: 80, height: 80 }}
                                            alt=''
                                        />
                                    </div>
                                </th>
                                <td>
                                    <p className='mb-0 mt-4'>Dulce pruebas 2</p>
                                </td>
                                <td>
                                    <p className='mb-0 mt-4'>$8.000</p>
                                </td>
                                <td>
                                    <div className='input-group quantity mt-4' style={{ width: 100 }}>
                                        <div className='input-group-btn'>
                                            <button className='btn btn-sm btn-minus rounded-circle bg-light border'>
                                                <i className='fa fa-minus' />
                                            </button>
                                        </div>
                                        <input
                                            type='text'
                                            className='form-control form-control-sm text-center border-0'
                                            defaultValue={1}
                                        />
                                        <div className='input-group-btn'>
                                            <button className='btn btn-sm btn-plus rounded-circle bg-light border'>
                                                <i className='fa fa-plus' />
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='mb-0 mt-4'>$8.000</p>
                                </td>
                                <td>
                                    <button className='btn btn-md rounded-circle bg-light border mt-4'>
                                        <i className='fa fa-times text-danger' />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='mt-5'>
                    <input
                        type='text'
                        className='border-0 border-bottom rounded me-5 py-3 mb-4'
                        placeholder='Cupon de descuento'
                    />
                    <button
                        className='btn border-secondary rounded-pill px-4 py-3 text-black'
                        type='button'
                    >
                        Aplicar cupon
                    </button>
                </div>
                <div className='row g-4 justify-content-end'>
                    <div className='col-8' />
                    <div className='col-sm-8 col-md-7 col-lg-6 col-xl-4'>
                        <div className='bg-light rounded'>
                            <div className='p-4'>
                                <h1 className='display-6 mb-4'>
                                    Total <span className='fw-normal'>Carrito</span>
                                </h1>
                                <div className='d-flex justify-content-between mb-4'>
                                    <h5 className='mb-0 me-4'>Subtotal:</h5>
                                    <p className='mb-0'>$96.00</p>
                                </div>
                            </div>
                            <Link to="/Checkout">
                            <button
                                className='btn border-secondary rounded-pill px-4 py-3 text-black text-uppercase mb-4 ms-4'
                                type='button'
                            >
                                Proceder al pago
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default CartBody