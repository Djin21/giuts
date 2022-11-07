export default class Room {
    id;
    code;
    name;
    contenance;
    etat;

    constructor (id = 0, code = 0, name = '', contenance = 0, etat = 0) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.contenance = contenance;
        this.etat = etat;
    }

}