$(document).ready(function () {
  moment.locale('it')
  chiamataAjax("fatturato.php",lineChart)
  chiamataAjax("fatturatobyagent.php",pieChart)
})



function chiamataAjax(url,chart) {
  $.ajax({
    url:url,
    method:"GET",
    success:function (data,stato) {
      chart(data)
    },
    error:function (err) {
      alert("Chiamata fallita!")
    }
  })
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

function lineChart(data) {
  var ctx = $('#lineChart');
  var myLineChart = new Chart(ctx, {
      type: data['type'],
      data: {
          labels: getMonths(),
          datasets: [{
              label: 'Vendite',
              data: data["data"],
              backgroundColor:'rgba(0, 128, 0, 1)',
              borderColor: 'rgba(178, 39, 12, 1)',
              borderWidth: 3
          }]
      },
      options: {
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


function getMonths() {

  return moment.months();
}
