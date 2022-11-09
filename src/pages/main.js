import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '../css/style.css'
import { useEffect, useState } from 'react';
import SalleCard from '../components/salle-card';
import SideBar from '../components/sidebar';
import SalleModal from '../components/salle-modal';
import RoomServices from '../services/room-services';
import SpinneretServices from '../services/spinneret-services';
import ReservationForm from '../components/reservation-form';

export default function Main () {

  // Recuperarions des salles
  const [roomsList, setRoomsList] = useState([]);
  const [freeRoomsList, setFreeRoomsList] = useState([]);
  const [OcpRoomsList, setOcpRoomsList] = useState([]);

  // Recuperation des filieres
  const [Filieres, setFilieres] = useState([]);

  const [stateListShow, setStateListShow] = useState(1); // 1 = toutes, 2 = libres, 3 = reservees
  const [salleCardClasse, setSalleCardClasse] = useState('')

  const [searchState, setSearchState] = useState(0);
  const [searchRoomsList, setSearchRoomsList] = useState([]);

  const showListe = (id) => {
    if (stateListShow !== id) {
      setSalleCardClasse('salle-card-hide')
      setTimeout(() => {
        setStateListShow(id)
        setSalleCardClasse('')
      }, 800);
    }
  }

  const searchRooms = (term) => {
    if(term !== null && term !== '') {
      setSearchState(1)
      RoomServices.searchRooms(term).then(data => setSearchRoomsList(data));
    }else{
      setSearchState(0)
    }
  }

  useEffect(() => {
    RoomServices.getRooms().then(data => setRoomsList(data));
    RoomServices.getFreeRooms().then(data => setFreeRoomsList(data));
    RoomServices.getOcpRooms().then(data => setOcpRoomsList(data));
    SpinneretServices.getSpinnerets().then(data => setFilieres(data))
  }, [])

    return (
        <div className='container-fluid'>
          
        <SideBar />

        <div className='container-center ms-4'>
          <h3 className='text-start page-title mt-5 text-gray-f'>Reservation des salles</h3>
          <div className='row row-type pt-3 mb-5 d-flex flex-row justify-content-start align-items-center'>
            <ul className='d-flex flex-row justify-content-start align-items-center w-auto m-0'>
              <li className='type-item me-4'>
                <button className={`btn ${stateListShow === 1 ? 'btn-primaire' : '' }`} onClick={() => { showListe(1) }}>Toutes</button>
              </li>
              <li className='type-item me-4'>
              <button className={`btn ${stateListShow === 2 ? 'btn-primaire' : '' }`} onClick={() => { showListe(2) }}>Libres</button>
              </li>
              <li className='type-item me-4'>
              <button className={`btn ${stateListShow === 3 ? 'btn-primaire' : '' }`} onClick={() => { showListe(3) }}>Reservees</button>
              </li>
            </ul>
            <div class="form-floating w-50 ms-auto" id='searchBar'>
              <input type="text" class="form-control border-0" id="floatingInput" placeholder="name@example.com" onChange={(e) => { searchRooms(e.target.value) }} />
              <label for="floatingInput" className='ps-4'>Search</label>
            </div>
          </div>
          <div className='center-list d-flex justify-content-start ps-5 pe-2 mt-2'>
            {
              searchState === 0 ?
                stateListShow === 1 ? 
                <ul className='list-carte-salle d-flex flex-row justify-content-start px-4 m-0'>
                  {
                    roomsList.map(salle => (
                      <li key={salle.id} className={`p-0 m-0 salle-card-item ${salleCardClasse}`}>
                        <SalleCard salle={salle} />
                      </li>
                    ))
                  }
                </ul>
                : stateListShow === 2 ? 
                <ul className='list-carte-salle d-flex flex-row justify-content-start px-4 m-0'>
                  {
                    freeRoomsList.map(salle => (
                      <li key={salle.id} className={`p-0 m-0 salle-card-item ${salleCardClasse}`}>
                        <SalleCard salle={salle} />
                      </li>
                    ))
                  }
                </ul>
                : 
                <ul className='list-carte-salle d-flex flex-row justify-content-start px-4 m-0'>
                  {
                    OcpRoomsList.map(salle => (
                      <li key={salle.id} className={`p-0 m-0 salle-card-item ${salleCardClasse}`}>
                        <SalleCard salle={salle} />
                      </li>
                    ))
                  }
                </ul>
              : <ul className='list-carte-salle d-flex flex-row justify-content-start px-4 m-0'>
                {
                  searchRoomsList.map(salle => (
                    <li key={salle.id} className={`p-0 m-0 salle-card-item ${salleCardClasse}`}>
                      <SalleCard salle={salle} />
                    </li>
                  ))
                }
              </ul>
            }
            {
              roomsList.map(salle => (
                <SalleModal salle={salle} />
              ))
            }
          </div>
        </div>

        <ReservationForm Filieres={Filieres} roomsList={roomsList} />

      </div>
    );
}