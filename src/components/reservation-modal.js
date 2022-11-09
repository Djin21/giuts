import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { useState } from 'react';

export default function ReservationModal (props) {

    const [dateDeb, setDateDeb] = useState()
    const [dateFin, setDateFin] = useState()
    const [horaire, setHoraire] = useState()

    return (
        <div class="modal fade" id={`filiereModal${props.filiere.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{props.filiere.name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className='w-100 d-flex flex-column justify-content-start align-items-start'>
                            <div className='w-100 d-flex justify-content-between align-items-center mb-3'>
                                <p className='p-0 m-0'>Salle :</p>
                                <p className='py-1 px-2 m-0 badge-value'>{props.salle.name}</p>
                            </div>
                            <div className='w-100 d-flex justify-content-between align-items-center mb-3'>
                                <p className='p-0 m-0'>Date debut :</p>
                                <input type="date" class="form-control w-50" id="exampleFormControlInput1" placeholder="" onChange={(e) => setDateDeb(e.target.value)} />
                            </div>
                            <div className='w-100 d-flex justify-content-between align-items-center mb-3'>
                                <p className='p-0 m-0'>Date Fin :</p>
                                <input type="date" class="form-control w-50" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <div className='w-100 d-flex justify-content-betnew Date()ween align-items-center mb-3'>
                                <p className='p-0 m-0'>Plage horaire :</p>
                                {/* <p className='py-1 px-2 m-0 badge-value'>Reservee</p> */}
                                <input type="time" class="form-control w-50" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <hr className='col-8 modal-line mx-auto' />
                            <p>{dateDeb}</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primaire">Modifier</button>
                        <button type="button" class="btn btn-primaire">Supprimer</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}