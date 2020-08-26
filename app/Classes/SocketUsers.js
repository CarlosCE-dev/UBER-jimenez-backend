"use strict";

class SocketUsers {
    constructor() {
        this.users = [];
    }

    getUser(id){
        const user = this.users.find( u => u.id === id);
        return user;
    }

    getUsers() {
        return this.users;
    }

    addUser(user) {
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        this.users = this.users.filter( u => u.id === id);
        return this.users;
    }
}

module.exports = { SocketUsers }
