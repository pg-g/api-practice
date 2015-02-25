var app = angular.module('github-api');

app.service('githubService', function($http, env) {
	var param = "?client_id=" + env.id + "&client_secret=" + env.sec;

	this.getUser = function(username) {
		return $http({
			method: 'GET',
			url: 'https://api.github.com/users/' + username + param
		});
	};
});