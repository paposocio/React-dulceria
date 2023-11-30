import { useEffect, useState } from 'react';
import { getProducts } from '../api/api'
import { Link } from 'react-router-dom';

const ShopProducts = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const listaProductos = async () => {
            try {
                const response = await getProducts();
                setProductos(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        listaProductos();
    }, []);

    return (
        <>
            {productos.map((producto) => (
                <div className='col-md-6 col-lg-6 col-xl-4' key={producto._id}>
                    <div className='rounded position-relative fruite-item h-100' >
                        <div className='fruite-img'>
                            <img
                                src={producto.image}
                                className='img-fluid w-100 rounded-top'
                                alt='imagen del producto'
                                style={{ maxHeight: 250, maxWidth: 336.02, minHeight: '200px', height: '200px' }}
                            />
                        </div>
                        <div
                            className='text-white bg-secondary px-3 py-1 rounded position-absolute'
                            style={{ top: 10, left: 10 }}
                        >
                            {producto.region}
                        </div>
                        <div className='p-4 border border-secondary border-top-0 rounded-bottom' style={{ minHeight: '200px', maxHeight: '200px', height: '200px' }}>
                            <h4>{producto.productName}</h4>
                            <p>
                                {producto.description}
                            </p>
                            <div className='d-flex justify-content-between flex-lg-wrap'>
                                <p className='text-dark fs-5 fw-bold mb-0'>${producto.price}</p>
                                <Link to={'/cart'}>
                                    <a
                                        className='btn border border-secondary rounded-pill px-3 text-black'
                                    >
                                        <i className='fa fa-shopping-bag me-2 text-black' />{' '}
                                        Agregar al carrito
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ShopProducts;
