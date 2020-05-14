$(document).ready(function () {
    moment.locale('it')
  $.ajax({
    url:"server.php",
    method:"GET",
    success:function (data,stato) {
      var ctx = $('#lineChart');
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: getMonths(),
              datasets: [{
                  label: 'Vendite',
                  data: data,
                  backgroundColor:'rgba(0, 128, 0, 1)',
                  borderColor:'rgba(178, 39, 12, 1)',
                  borderWidth: 3
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }],
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
    },
    error:function (richiesta,stato,errore) {
      alert("Chiamata fallita!")
    }
  })
})
function getMonths() {

  return moment.months();
}
