import { useState } from 'react';
import { registerProducts, deleteProducts } from '../api/api'
import Swal from 'sweetalert2'

function UserPanel() {
    const [productFormData, setproductFormData] = useState({
        createdAt: new Date().toISOString(),
        seller: "65601990e6794b13da2553cf",
        region: "Andina"
    });
    const handleProductRegister = async (event) => {
        event.preventDefault();
        try {
            const response = await registerProducts(productFormData);
            console.log(response.request.statusText);
            Swal.fire({
                icon: 'success',
                title: 'Producto creado correctamente',
                confirmButtonColor: '#ffab2d',
                confirmButtonText: 'Entendido'
            })
        } catch (error) {
            console.error(error);
        }
    };
    const HandleProductChange = (event) => {
        let value = event.target.name === 'price' ? parseFloat(event.target.value) : event.target.value;
        setproductFormData({
            ...productFormData,
            [event.target.name]: value,
        });
    };

    const [deleteProductFormData, setdeleteProductFormData] = useState("");
    const handleProductDelete = async (event) => {
        event.preventDefault();
        console.log(deleteProductFormData)
        try {
            const response = await deleteProducts(deleteProductFormData);
            console.log(response.request.statusText);
            Swal.fire({
                icon: 'info',
                title: 'Producto eliminado correctamente',
                confirmButtonColor: '#ffab2d',
                confirmButtonText: 'Entendido'
            })
        } catch (error) {
            console.error(error);
        }
    };
    const HandleProductDeleteChange = (event) => {
        setdeleteProductFormData(event.target.value);
    };
    

    return (
        <div className="container" style={{ padding: 50 }}>
            <div className="row">
                <div className="col-md-5 mb-4">
                    <form onSubmit={handleProductRegister}>

                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Registro de productos</h5>
                            </div>
                            <div className="card-body">


                                {/* Text input */}
                                <div className="form-outline mb-4">
                                    <input type="text" id="form7Example3" className="form-control" name="productName" onChange={HandleProductChange} required />
                                    <label className="form-label" htmlFor="form7Example3">
                                        Nombre del producto
                                    </label>
                                </div>
                                {/* 2 column grid layout with text inputs for the first and last names */}
                                <div className="row mb-4">
                                    <div className="col">
                                        <div className="form-outline">
                                            <input
                                                type="number"
                                                id="form7Example1"
                                                className="form-control"
                                                name="price"
                                                onChange={HandleProductChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form7Example1">
                                                Precio
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <select className='form-select' name="region" onChange={HandleProductChange} required>
                                                <option value="Andina">Andina</option>
                                                <option value="Caribe">Caribe</option>
                                                <option value="Orinoquia">Orinoquia</option>
                                                <option value="Pacifica">Pacifica</option>
                                                <option value="Amazonica">Amazonica</option>
                                            </select>
                                            <label className="form-label" htmlFor="form7Example2">
                                                Region
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* Text input */}
                                <div className="form-outline mb-4">
                                    <input type="text" id="form7Example4" className="form-control" name="image" onChange={HandleProductChange} required />
                                    <label className="form-label" htmlFor="form7Example4">
                                        Url de imagen
                                    </label>
                                </div>
                                {/* Message input */}
                                <div className="form-outline mb-4">
                                    <textarea
                                        className="form-control"
                                        id="form7Example7"
                                        rows={4}
                                        defaultValue={""}
                                        name="description"
                                        onChange={HandleProductChange}
                                        required
                                    />
                                    <label className="form-label" htmlFor="form7Example7">
                                        Descripcion del producto
                                    </label>
                                </div>
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Confirmacion</h5>
                                </div>
                                <div className="card-body">
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">
                                        Crear producto
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
                <div className="col-md-4 mb-4">
                    <form onSubmit={handleProductDelete}>
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Eliminacion de producto</h5>
                            </div>
                            <div className="card-body">
                                {/* Text input */}
                                <div className="form-outline mb-4">
                                    <input type="text" id="form7Example4" className="form-control" name="id" onChange={HandleProductDeleteChange} required />
                                    <label className="form-label" htmlFor="form7Example4">
                                        Id del producto
                                    </label>
                                </div>
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Confirmacion</h5>
                                </div>
                                <div className="card-body">
                                    <button type="submit" className="btn btn-danger btn-lg btn-block">
                                        Eliminar producto
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >

    )
}

export default UserPanel