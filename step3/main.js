$(document).ready(function () {
  moment.locale('it')
  ChiamataAjax()
})




function getParams() {
  var url_string =window.location.href
  var url = new URL(url_string);
  var level = url.searchParams.get("level");

  return level;
}
function ChiamataAjax() {
  $.ajax({
    url:"server.php",
    method:"GET",
    data:{
      level:getParams()
    },
    success:function (data) {
      lineChart(data["fatturato"],getMonths())
      pieChart(data["fatturato_by_agent"])
      multilineChart(data["team_efficiency"],getMonths())
    },
    error:function (err) {
      alert("Chiamata fallita")
    }
  })
}
function getMonths() {

  return moment.months();
}
function lineChart(data,labels) {
  var ctx = $('#lineChart');
  var myLineChart = new Chart(ctx, {
      type: data['type'],
      data: {
          labels: labels,
          datasets: [{
              label: 'Vendite',
              data: data["data"],
              backgroundColor:'rgba(0, 128, 0, 1)',
              borderColor: 'rgba(178, 39, 12, 1)',
              borderWidth: 3
          }]
      },
      options:{
          scales: {
              yAxes: [{ticks: {beginAtZero: true}}],
              xAxes:[{
                  ticks: {
                      autoSkip: false,
                      maxRotation: 90,
                      minRotation: 45
                    }
              }]
          }
      }

  });
}
function pieChart(data) {
  var ctx = $('#pieChart');
  var myPieChart = new Chart(ctx, {
    type: data["type"],
    data: {
      datasets:[{
        data:data["data"],
        backgroundColor:[
          'rgba(161,83,98,1)',
          'rgba(98,125,161,1)',
          'rgba(5,157,120,1)',
          'rgba(181,156,61,1)'
        ],
        borderColor:'rgba(0,0,0,1)'
      }],
      labels:data["names"]
    },
    options:{
      cutoutPercentage:0
    }
  })
}
function multilineChart(data,labels) {
  var ctx = $('#multilineChart');


  var label = Object.keys(data['data'])

  var team1 = label[0];
  var team2 = label[1];
  var team3 = label[2];

  var value1 = Object.values(data['data']['Team1']);
  var value2 = Object.values(data['data']['Team2']);
  var value3 = Object.values(data['data']['Team3']);


  var myLineChart = new Chart(ctx, {
      type: data['type'],
      data: {
          labels: labels,
          datasets: [{
                label: team1,
                data: value1,
                borderColor: 'rgba(51,135,164,1)'
          },
          {
                label: team2,
                data: value2,
                borderColor: 'rgba(63,180,123,1)'
          },
          {
                label: team3,
                data: value3,
                borderColor: 'rgba(223,195,66,1)'

          }]
      },
      options:{
          scales: {
              yAxes: [{ticks: {beginAtZero: true}}],
              xAxes:[{
                  ticks: {
                      autoSkip: false,
                      maxRotation: 90,
                      minRotation: 45
                    }
              }]
          }
      }

  });
}
