import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { useEffect, useState } from 'react'
import SpinneretServices from '../services/spinneret-services';

export default function SalleCard (props) {

    const [spinnerets, setSpinnerets] = useState([]);

    useEffect (() => {
        SpinneretServices.getSpinneretsByRoom(props.salle.id).then(data => setSpinnerets(data))
    }, [])

    return ( 
        <>
            <div className={`salle-card d-flex flex-column justify-content-center align-items-center mx-3 ${spinnerets.length <= 1 ? 'pb-1' : spinnerets.length === 2 ? 'pb-2' : 'pb-3' }`} data-bs-toggle="modal" data-bs-target={`${props.salle.id ? '#salleModal' + props.salle.id : '' }`} >
                <div className='circle rounded-3 mx-1 shadow d-flex align-items-center justify-content-center'>
                    <p className='mx-auto text-center p-0 my-0 salle-card-title'>{props.salle.name ? props.salle.name : 'Nom de la salle'}</p>
                </div>
                <div className='salle-card-contenu rounded-3 shadow'>
                {
                    spinnerets.length === 0 ? 
                        <>
                            <div className='d-flex flex-column justify-content-start align-items-start'>
                                <p className='salle-card-filiere p-0 m-0 text-gray-f'>Aucune reservation</p>
                            </div>
                            <hr className='line' />
                        </>
                    :
                    spinnerets.map(filiere => (
                        <>
                            <div className='d-flex flex-column justify-content-start align-items-start'>
                                <p className='salle-card-filiere p-0 m-0 text-gray-f'>{ filiere.name }</p>
                                <p className='salle-card-date p-0 m-0 text-gray'>02/93/2903 - 23/45/2466</p>
                            </div>
                            <hr className='line' />
                        </>
                    ))
                }
                </div>
            </div>

        </>
    )
}