export default class ReservationServices {

    static getReservationByRooms (room_id) {
        const reservations = fetch(`http://localhost:3001/reservations?rooms=${room_id}`);
    }

    // static addReservation (reservation) {
    //     return fetch('http://localhost/reservations', {
    //         method
    //     })
    // }

    static getReservations () {
        return fetch('http://localhost:3001/reservations')
            .then(response => response.json())
    }

    static addReservation (reservation) {
        return fetch("http://localhost:3001/reservations", {
            method: 'POST',
            body: JSON.stringify({
                start: reservation.start,
                end: reservation.end,
                user_id: reservation.id,
                spinneret_id: reservation.spinneret_id,
                room_id: reservation.room_id
            }),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
    }

}