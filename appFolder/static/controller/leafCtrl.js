
angular.module('angApp').controller("leafCtrl", ['$scope', '$http', 'GeoDataFactory', 'ChartDataFactory', function($scope, $http, GeoDataFactory,ChartDataFactory) {

    //call the GeoDataFactory to broadcast the geoData
    GeoDataFactory

    //assign geoData to Leaflet.js
    $scope.$on("UPDATE_GEODATA", function(event, geoData) {
        //just to grab the variable list 
        $scope.leafVars = Object.keys(geoData.data.features[0].properties.data['2012_01'])
        
        angular.extend($scope, {
            geojson: {
                data: geoData.data,
                style: style
            }
        });
    })

    $scope.clicked = {}

    function precinctClick(precinct, event) {
        $scope.clicked = precinct.properties;
        //send the clicked data to the CartDataFactory so chartCrl can use it
        ChartDataFactory(precinct.properties);
    }

    $scope.$on("leafletDirectiveMap.geojsonClick", function(ev, featureSelected, leafletEvent) {
        precinctClick(featureSelected, leafletEvent);
    });

	angular.extend($scope, {
        nyc: {
            lat: 40.722803,
            lng: -74.006073,
            zoom: 10
        },
        layers: {
            baselayers: {
                mapBox: {
                    name: 'MapBox',
                    url: 'http://{s}.tiles.mapbox.com/v3/mgcdanny.h9g9hbn8/{z}/{x}/{y}.png',
                    type: 'xyz'
                },
                osm: {
                    name: 'OpenStreetMap',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    type: 'xyz'
                },
                cloudmade1: {
                    name: 'Cloudmade',
                    type: 'xyz',
                    url: 'http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png',
                    layerParams: {
                        key: '1be9f760d7854183867935c3f65c3111',
                        styleId: 66028
                    }
                }
            }
        },
        defaults: {
            scrollWheelZoom: false
        }
    });

	 function getColor(d){
	 	if(d.style){
	 		return d.style.fill
	 	}else{
	 		return "green"
	 	}
	 }

	function style(feature) {
	 	return{
	        fillColor: getColor(feature),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
	 	}
	}

}]);