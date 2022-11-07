export default class RoomServices {

    static getRooms () {
        return fetch("http://localhost:3001/rooms")
            .then(response => response.json())
    };

    static getFreeRooms() {
        return fetch("http://localhost:3001/rooms?etat=0")
            .then(response => response.json())
    }

    static getOcpRooms() {
        return fetch("http://localhost:3001/rooms?etat=1")
            .then(response => response.json())
    }

    static addRooms (room) {
        return fetch("http://localhost:3001/rooms", {
            method: 'POST',
            body: JSON.stringify(room),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
    }

    static updateRooms (room) {
        return fetch(`http://localhost:3001/rooms/${room.id}`, {
            method: 'PUT',
            body: JSON.stringify(room),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
    }

    static deleteRoom (room) {
        return fetch(`http://localhost:3001/rooms/${room.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
    }

}