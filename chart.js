var jsonData = {
  "Hexaware": [
      { "x": "2018-1-1 14:00:15", "y": 12 },
      { "x": "2018-1-1 14:00:15", "y": 14 },
      { "x": "2018-3-1 14:00:15", "y": 12 },
      { "x": "2018-4-1 14:00:15", "y": 10 },
      { "x": "2018-5-1 14:00:15", "y": 16 },
      { "x": "2018-6-1 12:58:52", "y": 14 },
      { "x": "2018-7-1 13:33:23", "y": 10 },
      { "x": "2018-8-1 13:49:18", "y": 11 },
      { "x": "2018-9-1 13:55:01", "y": 14 },
      { "x": "2018-10-1 14:00:15", "y": 12 },
      { "x": "2018-11-1 13:49:18", "y": 16 },
      { "x": "2018-12-1 13:55:01", "y": 20 },
  ],
  }
 var dataPoints = [];
  function show() {

  var chart = new CanvasJS.Chart("chartContainer",
  {
    title:{
			text: "Growth of Company Over the Months(2018)"              
		},
    
    axisY: {
      title:"growth%"
    },
      data: [{
      type: 'area',
      dataPoints:dataPoints
      }]
  });
  var d1 = document.getElementById('from').value;
  var from = new Date(d1);
  var d2 = document.getElementById('to').value;
  var to = new Date(d2);
    display = jsonData.Hexaware;
    for(var i in display) {   
        var xVal = display[i].x;
         d = new Date(xVal);
      if(d.getTime()>from.getTime() && d.getTime()<=to.getTime())
      chart.options.data[0].dataPoints.push({x: new Date(xVal), y: display[i].y});
      
    }
    chart.render();
  }