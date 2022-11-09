export default class UserServices {

    static verifyUser = (user) => {
        return fetch(`http://localhost:3001/users?login=${user.login}&password=${user.password}`)
            .then(response => response.json())
    }

}