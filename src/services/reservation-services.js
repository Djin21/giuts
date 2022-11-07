export default class ReservationServices {

    static getReservationByRooms (room_id) {
        const reservations = fetch(`http://localhost:3001/reservations?rooms=${room_id}`);
    }

    // static addReservation (reservation) {
    //     return fetch('http://localhost/reservations', {
    //         method
    //     })
    // }

}