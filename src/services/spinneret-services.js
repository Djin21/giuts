export default class SpinneretServices {

    static getSpinnerets () {
        return fetch('http://localhost:3001/spinnerets')
            .then(response => response.json());
    }

    static getSpinneretByPk (id) {
        return fetch(`http://localhost:3001/spinnerets?id=${id}`)
            .then(response => response.json());
    }

    static getSpinneretsByRoom (room_id) {
        return fetch('http://localhost:3001/spinnerets')
            .then(response => response.json())
    }

}