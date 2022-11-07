import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

export default function ReservationModal (props) {
    return (
        <div class="modal fade" id={`filiereModal${props.filiere.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{props.filiere.nom}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className='w-100 d-flex flex-column justify-content-start align-items-start'>
                            <div className='w-100 d-flex justify-content-between align-items-center mb-3'>
                                <p className='p-0 m-0'>Salle :</p>
                                <p className='py-1 px-2 m-0 badge-value'>Nom de la salle</p>
                            </div>
                            <div className='w-100 d-flex justify-content-between align-items-center mb-3'>
                                <p className='p-0 m-0'>Date debut :</p>
                                <p className='py-1 px-2 m-0 badge-value'>Reservee</p>
                            </div>
                            <div className='w-100 d-flex justify-content-between align-items-center mb-3'>
                                <p className='p-0 m-0'>Date Fin :</p>
                                <p className='py-1 px-2 m-0 badge-value'>Reservee</p>
                            </div>
                            <div className='w-100 d-flex justify-content-between align-items-center mb-3'>
                                <p className='p-0 m-0'>Plage horaire :</p>
                                <p className='py-1 px-2 m-0 badge-value'>Reservee</p>
                            </div>
                            <hr className='col-8 modal-line mx-auto' />
                                {/* <p className='fs-5 fw-bold text-gray p-0 mb-3'>Filiere</p> */}
                            {/* <div className='w-100 d-flex justify-content-start align-items-end'>
                            </div> */}
                            <div className='w-100 px-2 py-3 d-flex justify-content-between align-items-center mb-2 badge-filiere'>
                                <p className='p-0 m-0 fw-bold text-gray-f'>GIN3</p>
                                <p className='p-0 m-0'>12/12/1222</p>
                                <p className='p-0 m-0'>31/12/1222</p>
                                <p className='p-0 m-0'>12h30 - 99h43</p>
                            </div>
                            <div className='w-100 px-2 py-3 d-flex justify-content-between align-items-center mb-2 badge-filiere'>
                                <p className='p-0 m-0'>GIN3</p>
                                <p className='p-0 m-0'>12/12/1222 - 31/12/1222</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}