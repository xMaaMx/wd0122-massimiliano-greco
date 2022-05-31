var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
var user = {
    name: 'mario',
    lastname: 'Rossi',
    age: 32,
    address: {
        via: 'Milano',
        civico: 2,
        citta: 'Roma'
    }
};
var user2 = {
    name: 'mario',
    lastname: 'Rossi',
    age: 32,
    address: {
        via: 'Roma',
        civico: 1,
        citta: 'Milano'
    }
};
var users = [user, user2];
