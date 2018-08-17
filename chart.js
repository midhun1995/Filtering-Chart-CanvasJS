var jsonData = {
  "Hexaware": [
      { "x": "2018-6-25 12:58:52", "y": 1 },
      { "x": "2018-7-25 13:33:23", "y": 2.5 },
      { "x": "2018-8-25 13:49:18", "y": 2.5 },
      { "x": "2018-9-25 13:55:01", "y": 5 },
      { "x": "2018-10-25 14:00:15", "y": 6 },
  ],
  }
 var dataPoints = [];
  function show() {

  var chart = new CanvasJS.Chart("chartContainer",
  {
    
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