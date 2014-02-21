
angular.module('angApp').controller('snowCtrl',['$scope', function($scope){

  var data = {"rows": [
        {"c": [
            {"v": "2014-01-21T04:40:00"}, 
            {"v": "0"}, 
            {"v": "test"}, 
            {"v": "<a href=\"http://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\"> <img src=\"http://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\"  style=\"width:75px;height:50px\"></a><br/>"}, 
            {"v": "<img src=\"http://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\"  style=\"width:75px;height:50px\"><br/>"}
              ]}, 
            {"c": [{"v": "2014-01-21T08:00:00"}, {"v": "0"}, {"v": "test"}, {"v": ""}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}]}, {"c": [{"v": "2014-01-21T08:30:00"}, {"v": "0"}, {"v": "test"}, {"v": "Condition report shows light flurries in Manhattan 8"}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}]}, {"c": [{"v": "2014-01-21T09:30:00"}, {"v": "0"}, {"v": "test"}, {"v": "Condition reports show light flurries in Manhattan 8 with a trace of snow"}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}]}, {"c": [{"v": "2014-01-21T10:30:00"}, {"v": "0"}, {"v": "test"}, {"v": "Condition report shows light flurries in Manhattan 8 with a trace of snow."}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}]}, {"c": [{"v": "2014-01-21T11:30:00"}, {"v": "0.5"}, {"v": "test"}, {"v": "Condition report shows light snow in Manhattan 8 with a snow depth of .50\""}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}]}, {"c": [{"v": "2014-01-21T12:30:00"}, {"v": "1"}, {"v": "test"}, {"v": "Condition report shows moderate snow in Manhattan 8 with a snow depth of 1\""}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}]}, {"c": [{"v": "2014-01-21T13:30:00"}, {"v": "1.5"}, {"v": "test"}, {"v": "Condition report shows moderate snow in Manhattan 8 with a snow depth of 1.50\""}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}]}, {"c": [{"v": "2014-01-21T14:30:00"}, {"v": "2.25"}, {"v": "test"}, {"v": "Condition report shows moderate snow in Manhattan 8 with a snow depth of 2.25\""}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}]}, {"c": [{"v": "2014-01-21T15:30:00"}, {"v": "3.25"}, {"v": "test"}, {"v": "Condition report shows heavy snow in Manhattan 8 with a snow depth of 3.25\""}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}]}, {"c": [{"v": "2014-01-21T16:30:00"}, {"v": "4.75"}, {"v": "test"}, {"v": "Condition report shows heavy snow in Manhattan 8 with a snow depth of 4.75\""}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}]}, {"c": [{"v": "2014-01-21T17:30:00"}, {"v": "5.75"}, {"v": "test"}, {"v": "Condition report shows heavy snow in Manhattan 8 with a snow depth of 5.75\""}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}]}, {"c": [{"v": "2014-01-21T18:30:00"}, {"v": "7"}, {"v": "test"}, {"v": "Condition report shows heavy snow in Manhattan 8 with a snow depth of 7\""}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}]}, {"c": [{"v": "2014-01-21T19:30:00"}, {"v": "9"}, {"v": "test"}, {"v": "Condition report shows heavy snow in Manhattan 8 with a snow depth of 9\""}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}]}, {"c": [{"v": "2014-01-21T20:30:00"}, {"v": "10"}, {"v": "test"}, {"v": "Condition report shows heavy snow in Manhattan 8 with a snow depth of 10\""}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}]}, {"c": [{"v": "2014-01-21T21:30:00"}, {"v": "10.5"}, {"v": "test"}, {"v": "Condition report shows snow in Manhattan 8 with a snow depth of 10.5\""}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}]}, {"c": [{"v": "2014-01-21T22:30:00"}, {"v": "10.75"}, {"v": "test"}, {"v": "Condition report shows snow in Manhattan 8 with a snow depth of 10.75\""}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}]}, {"c": [{"v": "2014-01-21T23:30:00"}, {"v": "10.75"}, {"v": "test"}, {"v": "Condition report shows flurries in Manhattan 8 with a snow depth of 10.75\""}, {"v": "'<img src=\u201dhttp://docshare.telenavtrack.net/upload/WFFTID_15/139146157847093959.jpg\u201d  style=\"width:75px;height:50px\"><br/>'"}
          ]
          }], 
          "cols": [
              {"type": "datetime", "label": "Dates"}, 
              {"type": "number", "label": "Snow Day 1"}, 
              {"type": "string", "label": "Message 1"}, 
              {"type": "string", "label": "Message 1 Text"}
              ]}

  angular.forEach(data["rows"], function(v,k){
    v["c"][0]["v"] = new Date(v["c"][0]["v"])
    v["c"][1]["v"] = Number(v["c"][1]["v"])
  })

  console.log(data)
  $scope.chart = new google.visualization.DataTable(data)

}])


angular.module('angApp').directive('googchart', function() {
        return {
          restrict: 'A',
          link: function($scope, $elm) {
            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.AnnotationChart($elm[0]);
            chart.draw($scope.chart, {allowHtml: true, focusTarget: 'datum'});
          }
      }
    });


