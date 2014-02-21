

var app = angular.module('angApp', ['ngResource', 'ngRoute','ui.bootstrap','googlechart', 'leaflet-directive']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
        when('/', {
            templateUrl: '/static/partial/home.html',
            controller: ''
        }).when('/snow',{
            templateUrl: '/static/partial/snow.html',
            controller: 'snowCtrl'
        }).otherwise({
            redirectTo: '/'
        });
}]);

app.factory('GeoDataFactory', ['$rootScope','$http', function($rootScope, $http) {
    //TODO: allow users to select only certain 'map' variables (ie year, type) to be
    //sent to the client
    var geoData = {};
    var getChartData = $http.get("static/data/nypp_meta.geojson").then(function(response){
        //can manipulate data here before it broadcastes to the controllers
        geoData = response;
        $rootScope.$broadcast('UPDATE_GEODATA', geoData);
        return geoData;
    })
    return getChartData;
}])

app.factory('ChartDataFactory', ['$rootScope','$http', function($rootScope, $http) {
    //TODO: allow charts data to be a function of the map click data
    return function(mapClickData){
        $rootScope.$broadcast('UPDATE_CHARTDATA', mapClickData);
    }

}])


