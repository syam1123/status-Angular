var statusReport = angular.module('DailyStatus',[]);
statusReport.service('getStatusHistory', function($http, $q) {
   return {
     getHistory: function() {
       var deferred = $q.defer();
       $http.get('apis/allData.json').success(function(data) {
          deferred.resolve(data);
          myfunction();
       }).error(function(){
          deferred.reject();
       });
       return deferred.promise;
     }
   }
});
 statusReport.controller('DailyStatusReport',function($scope, getStatusHistory){
     //var status = this;
     var a;

/*
* fetch the api.
* store the json object into a variable.
*/
getStatusHistory.getHistory().then(
        function(data) {
            $scope.statusList = data;
    });

/*
* Create the date picker as a select box.
* The Dates Should include the last 7 dys from today.
*/
    $scope.date = [];
    var today = new Date();
    var first = today.getDate();
    var startDate = new Date(today.setDate(first));
    startDate = "" + startDate.getFullYear() +"-" +(startDate.getMonth() + 1) + "-" + startDate.getDate() ;

    var i = 0;

    for(i=0; i<7;i++)
    {
        var last = first-i;
        var endDate = new Date(today.setDate(last));
        endDate = endDate.getFullYear() +"-" +(endDate.getMonth() + 1) + "-" + endDate.getDate();

        $scope.date.push({
          id: i,
          title: endDate
        });
    }
    console.log($scope.date);
    $scope.hour = [];
/*
* The hour should be a select box.
* The minutes are having a step of 15.
*/
   var i =1;
   for(i=1; i<=24; i++)
       {
           $scope.hour.push({id: i, value: i});
       }

   $scope.mins = [];
   var j =1;
   for(j=1; j<4; j++)
       {
           $scope.mins.push({id: j, value: j*15});
       }
/*
*Add the components into an array
*/
     $scope.addDetails = function(){

         $scope.display1 = true;
         $scope.statusList.report.push({date1:$scope.date1,
                                 project : $scope.project.name,
                                 activity : $scope.activity.name,
                                 workHour : $scope.hourWork+'h',
                                 workMin : $scope.minsWork+'min.',
                                 details : $scope.details
                             });

        var newarray = [];
        for(i=0;i<$scope.statusList.report.length;i++){
            newarray.push($scope.statusList.report[i]);
        }
        $scope.statusList.report = newarray;
        delete newarray;
        $("#statForm")[0].reset();
    };
 });
