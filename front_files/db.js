angular.module('db', ['ngResource']).
    factory('Project', function($resource) {
        /* var Project = $resource('/api/:id', { apiKey : "132" }, { update: { method: 'PUT' } } ); */
        var Project = $resource('https://api.mongolab.com/api/1/databases' +
            '/angularjs/collections/projects/:id',
            { apiKey: '4f847ad3e4b08a2eed5f3b54' }, {
                update: { method: 'PUT' }
            }
        );

        Project.prototype.update = function(cb) {
            return Project.update({id: this._id.$oid},
                angular.extend({}, this, {_id:undefined}), cb);
        };

        Project.prototype.destroy = function(cb) {
            return Project.remove({id: this._id.$oid}, cb);
        };

        return Project;
    });