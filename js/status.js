angular.module('DailyStatus',[])
 .controller('DailyStatusReport',function(){
     var status = this;
     status.display1 = false;
     status.statusReport = [{
         date1 : '',
         project : '',
         activity : '',
         workHour : '',
         workMin : '',
         details : ''
     }];
     status.updated = 4;
     status.date = {
         min : '2015-09-10',
         max : '2015-09-17'
     }
     status.times = {
         hourMax : 24,
         minMax : 45,
         minStep : 15
     }
     status.projects = [
         'N/A',
         'project1',
         'project2',
         'project3',
         'project4',
         'project5'
     ];
     status.activities = [
         'coding',
         'Training',
         'Activity2',
         'Activity3',
         'Activity4',
         'Activity5'
     ];

     status.addDetails = function(){
         status.display1 = true;
         status.statusReport.push({date1:$('#statusDate').val(),
                                 project : status.project,
                                 activity : status.activity,
                                 workHour : status.hour+'h',
                                 workMin : status.min+'min.',
                                 details : status.details
                             });
        var newarray = [];
        for(i=0;i<status.statusReport.length;i++){
            newarray.push(status.statusReport[i]);
        }
        status.statusReport = newarray;
        delete newarray;
        $("#statForm")[0].reset();
     };
 });
