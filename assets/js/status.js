angular.module('DailyStatus',[])
 .controller('DailyStatusReport',function(){
     var status = this;
/*
* fetch the api.
* store the json object into a variable.
*/

    $.getJSON("apis/allData.json", function(data) {
        status.statusList = data;
    });
/*
* Create the date picker as a selecct box.
* The Dates Should include the last 7 dys from today.
*/
    status.date = [];
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

    status.date.push({
      id: i,
      title: endDate
    });
    }
    status.hour = [];
/*
* The hour should be a select box.
* The minutes are having a step of 15.
*/
   var i =1;
   for(i=1; i<=24; i++)
       {
           status.hour.push({id: i, value: i});
       }

   status.mins = [];
   var j =1;
   for(j=1; j<4; j++)
       {
           status.mins.push({id: j, value: j*15});
       }
/*
*Add the components into an array
*/
     status.addDetails = function(){
         status.display1 = true;
         status.statusList.report.push({date1:status.date1,
                                 project : status.project.name,
                                 activity : status.activity.name,
                                 workHour : status.hourWork+'h',
                                 workMin : status.minsWork+'min.',
                                 details : status.details
                             });
                             console.log(status.statusList.report);
        var newarray = [];
        for(i=0;i<status.statusList.report.length;i++){
            newarray.push(status.statusList.report[i]);
        }
        status.statusList.report = newarray;
        delete newarray;
        $("#statForm")[0].reset();
     };
 });
