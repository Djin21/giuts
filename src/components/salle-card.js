import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { useState } from 'react'

export default function SalleCard (props) {

    const [spinnerets, setSpinnerets] = useState([]);

    return ( 
        <>
            <div className='salle-card d-flex flex-column justify-content-center align-items-center mx-3' data-bs-toggle="modal" data-bs-target={`${props.salle.id ? '#salleModal' + props.salle.id : '' }`} >
                <div className='circle rounded-3 mx-1 shadow d-flex align-items-center justify-content-center'>
                <p className='mx-auto text-center p-0 my-0 salle-card-title'>{props.salle.name ? props.salle.name : 'Nom de la salle'}</p>
                {/* <div className='circle-inscrit shadow rounded-pill'></div> */}
                </div>
                <div className='salle-card-contenu rounded-3 shadow'>
                <div className='d-flex flex-column justify-content-start align-items-start'>
                    <p className='salle-card-filiere p-0 m-0 text-gray-f'>GIN 3</p>
                    <p className='salle-card-date p-0 m-0 text-gray'>02/93/2903 - 23/45/2466</p>
                </div>
                <hr className='line' />
                
                </div>
            </div>

        </>
    )
}