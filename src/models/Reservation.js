export default class Reservation {

    id;
    start;
    end;
    user_id;
    spinneret_id;
    room_id;

    constructor(id = 0, start = null, end = null, user_id = 0, spinneret_id = 0, room_id = 0) {
        this.id = id;
        this.start = start;
        this.end = end;
        this.user_id = user_id;
        this.spinneret_id = spinneret_id;
        this.room_id = room_id;
    }

}