import './ItemDetail.css'
import Categorias from '../Category/Categorias'
import ItemCount from '../ItemCount/ItemCount'
import 'react-toastify/dist/ReactToastify.css';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemDetail = (item) => {
	const { title, description, descriptiondetail,category, price, img, offer } = item

    return (
		<>
			<section className="detail__box">
					<div className='detail__volver--container'>
						<Link to='/' className='detail__volver'><FontAwesomeIcon className="detail__icon" style = {{cursor:"pointer"}} icon={faArrowLeft} /></Link>
					</div>
						<img className='detail__img' src={img} alt={title || "Imagen del producto"}/>
				<div className='detail__description description'>
					<ul className='description__main main'>
						{/*Agregar icono para cada categoria*/}
						<li className='detail__title'> 
							<h3>{title}</h3>
							<span className='detail__category'>{<Categorias category={category} />}</span>
						</li>
						<li className='detail__body'>
							<p className=''>{description}</p><br/>
							<h3 className='tracking-tighter'>Descripción</h3>
							<p>{descriptiondetail}</p>
						</li>
						<li className='detail__price'>
							<p className='text__offer_price'>ARS ${Math.round(price/1.10)}</p>
						{offer===true? <p className="text__offer--detail font-bold">ARS ${price}</p> : null}
						</li>
					</ul>
					<div className='detail__button'>
						<ItemCount item={item}/>
					</div>
				</div>
			</section>
		</>
    )
}

export default ItemDetail