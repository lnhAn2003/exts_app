class User{
    #password

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    setPassword(newPassword){
        if (this.#validatePassword(newPassword)){
            this.#password = newPassword;
            console.log('Password change successfully.'); 
        } else {
            console.log('Password need to longer than 8 symbol !');
        }
    }

    #validatePassword(password) {
        return password.length >= 8;
    }

    authenticate(inputPassword) {
        return inputPassword === this.#password;
    }
}

module.exports = User;