define(function(require) {

    var TimeEvent = require('domain/timeEvent'),
        FileUpdate = require('domain/fileUpdate'),
        File = {};

    File = function(fileID, fileName, dateCreated, currentVersion, updateCollection, options) {
        var __fileID = fileID,
            __name = fileName,
            __currentVersion = currentVersion,
            __updateCollection = updateCollection || [],
            __options = options || {};

        //call super constructor
        TimeEvent.call(this, dateCreated);

        if(__fileID == null) {
            throw new TypeError('ID must be valid');
        }
        else if(__name == null) {
            throw new TypeError('Name of the file must be valid');
        }
        else if(__currentVersion == null) {
            throw new TypeError('version must be valid');
        }
        else if(__fileUpdates.length == 0) {
            throw new RangeError('There must be at least one FileUpdate. Array length is 0. ');
        }

        //public methods
        File.prototype.getAbsolutePath = function() {
            return __name;
        };
        File.prototype.getRelativePath = function () {
            return this.getDate();
        };
        FileUpdate.prototype.getfileID = function() {
            return __fileID;
        };
        FileUpdate.prototype.getCurrentVersion = function() {
            return __currentVersion;
        };
        File.prototype.getDateOfCreation = function () {
            return this.getEventDate();
        };
        File.prototype.getLastModified = function () {
            return this.version();
        };
        File.prototype.getUpdateEvents = function () {
            return __updateCollection;
        };
        File.prototype.addUpdateEvent = function (fileUpdate) {

            if(fileUpdate == null || !(fileUpdate instanceof FileUpdate)) {
                throw new TypeError('update must be valid FileUpdate Object');
            }
            else {
                var update = {
                    time : fileUpdate.getTimestamp(),
                    event : fileUpdate
                };
                __updateCollection.push(update);
            }
        }
    };

    //inheritance
    File.prototype = Object.create(TimeEvent.prototype);
    File.prototype.constructor = File;

    return File;

});
