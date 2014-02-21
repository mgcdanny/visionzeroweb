
angular.module('angApp').controller('chartCtrl',['$scope', '$http', 'ChartDataFactory',function($scope,$http, ChartDataFactory){

  
  $scope.getDisplayVars = function(){

  }


  $scope.selectionChange = function () {
      $scope.hideServer =! $scope.hideServer;
      if ($scope.hideServer) {
          $scope.chart.view = {columns: [0, 1, 2, 4]};
      } else {
          $scope.chart.view = {};
      }
  }
      
  $scope.getChartCols = function(mapClickData){
    var cols = [{
      "type": "string",
      "id": "date",
      "label": "Date"
    }]
    //hack to get the col data from the first object in the data object
    angular.forEach(mapClickData.data["2011_08"], function(value, key){
      if(key != "TOTAL Movers"){
        cols.push({"type":"number","id":key,"label":key})
      }
    })
    return cols;
  }

  $scope.getChartRows = function(mapClickData){
      var rows = []
      angular.forEach(mapClickData.data, function(fields, theDate){
        var temp = {"c":[{"v":theDate}]}
        angular.forEach(fields, function(dataPoints, fieldName){
        if(fieldName != "TOTAL Movers"){
           temp["c"].push({"v":dataPoints['mtd']})
          }
        })
        rows.push(temp)
      })
      return rows;
  }



  $scope.chart = {};

  $scope.$on("UPDATE_CHARTDATA", function(event, mapClickData) {
    $scope.chart = {
      "type": "AreaChart",
      "displayed": true,
      "cssStyle": "height:900px; width:100%;",
      "data": {
        "cols": [],
        "rows": []
        },
      "options": {
        "title": "Precinct "+ mapClickData["Precinct"].toString(),
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
          "title": "Moving Violations",
          "gridlines": {
            "count": 2
          }
        },
        "hAxis": {
          "title": "Date"
        }
      },
      "formatters": {},
      "view": {}
    }

      $scope.chart['data']['cols'] = $scope.getChartCols(mapClickData)
      $scope.chart['data']['rows'] = $scope.getChartRows(mapClickData);
      console.log($scope.chart)
      console.log(mapClickData)
      
     })

}])