import { Link } from 'react-router-dom';
import '../../public/breadCrumbStyles.css'
// eslint-disable-next-line react/prop-types
function BreadCrumb({pageName}) {
    return (
        <div className='container-fluid py-5 breadCrumbClass'>
            <h1 className='text-center text-white display-6'>{pageName}</h1>
            <ol className='breadcrumb justify-content-center mb-0'>
                <li className='breadcrumb-item'>
                    <Link to='/'><a href='#' className='text-warning'>Inicio</a></Link>
                </li>
                <li className='breadcrumb-item active text-white'>{pageName}</li>
            </ol>
        </div>
    )
}
export default BreadCrumb
