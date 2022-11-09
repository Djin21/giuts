export default class User {

    id;
    login;
    password;

    constructor(id = 0, login=0, password=0) {
        this.id = id;
        this.login = login;
        this.password = password;
    }

}