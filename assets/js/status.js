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
    *Add the components into an array
    */
     status.addDetails = function(){
         status.display1 = true;
         status.statusList.report.push({date1:$('#statusDate').val(),
                                 project : status.project.name,
                                 activity : status.activity.name,
                                 workHour : status.hour+'h',
                                 workMin : status.min+'min.',
                                 details : status.details
                             });
        var newarray = [];
        for(i=0;i<status.statusList.report.length;i++){
            newarray.push(status.statusList.report[i]);
        }
        status.statusList.report = newarray;
        delete newarray;
        $("#statForm")[0].reset();
     };
 });
