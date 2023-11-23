import { Link } from 'react-router-dom'
function ShopBody() {
    return (
        <div className='container-fluid fruite py-5'>
            <div className='container py-5'>
                <h1 className='mb-4'>Tienda de dulces tipicos</h1>
                <div className='row g-4'>
                    <div className='col-lg-12'>
                        <div className='row g-4'>
                            <div className='col-xl-3'>
                                <div className='input-group w-100 mx-auto d-flex'>
                                    <input
                                        type='search'
                                        className='form-control p-3'
                                        placeholder='Busca por palabra'
                                        aria-describedby='search-icon-1'
                                    />
                                    <span id='search-icon-1' className='input-group-text p-3'>
                                        <i className='fa fa-search' />
                                    </span>
                                </div>
                            </div>
                            <div className='col-6' />
                            <div className='col-xl-3'>
                                <div className='bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4'>
                                    <label htmlFor='fruits'>Ordenar por:</label>
                                    <select
                                        id='fruits'
                                        name='fruitlist'
                                        className='border-0 form-select-sm bg-light me-3'
                                        form='fruitform'
                                    >
                                        <option value=''>-</option>
                                        <option value=''>-</option>
                                        <option value=''>-</option>
                                        <option value=''>-</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='row g-4'>
                            <div className='col-lg-3'>
                                <div className='row g-4'>
                                    <div className='col-lg-12'>
                                        <div className='mb-3'>
                                            <h4>Categorias</h4>
                                            <ul className='list-unstyled fruite-categorie'>
                                                <li>
                                                    <div className='d-flex justify-content-between fruite-name'>
                                                        <a href='#'>
                                                            <i className='fas fa-apple-alt me-2' />
                                                            Apples
                                                        </a>
                                                        <span>(3)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='d-flex justify-content-between fruite-name'>
                                                        <a href='#'>
                                                            <i className='fas fa-apple-alt me-2' />
                                                            Oranges
                                                        </a>
                                                        <span>(5)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='d-flex justify-content-between fruite-name'>
                                                        <a href='#'>
                                                            <i className='fas fa-apple-alt me-2' />
                                                            Strawbery
                                                        </a>
                                                        <span>(2)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='d-flex justify-content-between fruite-name'>
                                                        <a href='#'>
                                                            <i className='fas fa-apple-alt me-2' />
                                                            Banana
                                                        </a>
                                                        <span>(8)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='d-flex justify-content-between fruite-name'>
                                                        <a href='#'>
                                                            <i className='fas fa-apple-alt me-2' />
                                                            Pumpkin
                                                        </a>
                                                        <span>(5)</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='mb-3'>
                                            <h4 className='mb-2'>Precio</h4>
                                            <input
                                                type='range'
                                                className='form-range w-100'
                                                id='rangeInput'
                                                name='rangeInput'
                                                min={0}
                                                max={500}
                                                defaultValue={0}
                                                onInput='amount.value=rangeInput.value'
                                            />
                                            <output
                                                id='amount'
                                                name='amount'
                                                min={0}
                                                max={500}
                                                htmlFor='rangeInput'
                                            >
                                                0
                                            </output>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='mb-3'>
                                            <h4>Region</h4>
                                            <div className='mb-2'>
                                                <input
                                                    type='radio'
                                                    className='me-2'
                                                    id='Categories-1'
                                                    name='Categories-1'
                                                    defaultValue='Beverages'
                                                />
                                                <label htmlFor='Categories-1'> Andina</label>
                                            </div>
                                            <div className='mb-2'>
                                                <input
                                                    type='radio'
                                                    className='me-2'
                                                    id='Categories-2'
                                                    name='Categories-1'
                                                    defaultValue='Beverages'
                                                />
                                                <label htmlFor='Categories-2'> Orinoquia</label>
                                            </div>
                                            <div className='mb-2'>
                                                <input
                                                    type='radio'
                                                    className='me-2'
                                                    id='Categories-3'
                                                    name='Categories-1'
                                                    defaultValue='Beverages'
                                                />
                                                <label htmlFor='Categories-3'> Antioquia</label>
                                            </div>
                                            <div className='mb-2'>
                                                <input
                                                    type='radio'
                                                    className='me-2'
                                                    id='Categories-4'
                                                    name='Categories-1'
                                                    defaultValue='Beverages'
                                                />
                                                <label htmlFor='Categories-4'> Pacifica</label>
                                            </div>
                                            <div className='mb-2'>
                                                <input
                                                    type='radio'
                                                    className='me-2'
                                                    id='Categories-5'
                                                    name='Categories-1'
                                                    defaultValue='Beverages'
                                                />
                                                <label htmlFor='Categories-5'> Amazonica</label>
                                            </div>
                                            <div className='mb-2'>
                                                <input
                                                    type='radio'
                                                    className='me-2'
                                                    id='Categories-5'
                                                    name='Categories-1'
                                                    defaultValue='Beverages'
                                                />
                                                <label htmlFor='Categories-5'> Caribe</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-9'>
                                <div className='row g-4 justify-content-center'>
                                    <div className='col-md-6 col-lg-6 col-xl-4'>
                                        <div className='rounded position-relative fruite-item'>
                                            <div className='fruite-img'>
                                                <img
                                                    src='img/fruite-item-5.jpg'
                                                    className='img-fluid w-100 rounded-top'
                                                    alt=''
                                                />
                                            </div>
                                            <div
                                                className='text-white bg-secondary px-3 py-1 rounded position-absolute'
                                                style={{ top: 10, left: 10 }}
                                            >
                                                Fruits
                                            </div>
                                            <div className='p-4 border border-secondary border-top-0 rounded-bottom'>
                                                <h4>Grapes</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                                    sed do eiusmod te incididunt
                                                </p>
                                                <div className='d-flex justify-content-between flex-lg-wrap'>
                                                    <p className='text-dark fs-5 fw-bold mb-0'>$4.99 / kg</p>
                                                    <Link to='/Cart'>
                                                        <a
                                                            href='#'
                                                            className='btn border border-secondary rounded-pill px-3 text-black'
                                                        >
                                                            <i className='fa fa-shopping-bag me-2 text-black' />{' '}
                                                            Add to cart
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
export default ShopBody