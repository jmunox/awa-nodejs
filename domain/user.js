define(function(require) {

    var TimeEvent = require('domain/timeEvent'),
        User = {};

    User = function(userName, email, userDetails, avatar, credentials, permissions, options) {
        var __userName = userName,
            __userDetails = userDetails,
            __email = email,
            __avatar = avatar, // || 'defaultAvatar.jpeg', //
            __credentials = credentials || {},
            __permissions = permissions || {},
            __options = options || {};

        //call super constructor
        TimeEvent.call(this, new Date());

        //public methods
        //getters
        User.prototype.getUserName = function () {
            return __userName;
        };
        User.prototype.getUserDetails = function () {
            return __userDetails;
        };
        User.prototype.getEmail = function () {
            return __email;
        };
        User.prototype.getAvatar = function () {
            return __avatar;
        };
        User.prototype.getCredentials = function () {
            return __credentials;
        };
        User.prototype.getPermissions = function () {
            return __permissions;
        };
        User.prototype.getOptions = function () {
            return __options;
        };

        //setters
        User.prototype.setUserName = function (userName) {
            __userName = userName;
        };
        User.prototype.setUserDetails = function (userDetails) {
            __userDetails = userDetails;
        };
        User.prototype.setEmail = function (email) {
            __email = email;
        };
        User.prototype.setAvatar = function (avatar) {
            __avatar = avatar;
        };
        User.prototype.setCredentials = function (credentials) {
            __credentials = credentials;
        };
        User.prototype.setPermissions = function (permissions) {
            __permissions;
        };
        User.prototype.setOptions = function (options) {
            __options = options || {};
        };

        //DAO methods
        User.prototype.save = function (callback) {
            return callback();
        }
        User.prototype.delete = function (callback) {
            return callback();
        }
    };

    //static methods
    //DAO methods
    User.getUserByUserName = function (email, callback) {
        return callback(null);
    };

    User.getUserByEmail = function (email, callback) {
        return callback(null);
    };

    //inheritance
    User.prototype = Object.create(TimeEvent.prototype);
    User.prototype.constructor = User;

    return User;

});


