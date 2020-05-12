$(document).ready(function () {
  $.ajax({
    url:"server.php",
    method:"GET",
    success:function (data,stato) {
      var ctx = $('#lineChart');
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
              datasets: [{
                  label: 'Vendite',
                  data: data,
                  backgroundColor: [
                    'rgba(0, 128, 0, 1)',
                    'rgba(0, 128, 0, 1)',
                    'rgba(0, 128, 0, 1)',
                    'rgba(0, 128, 0, 1)',
                    'rgba(0, 128, 0, 1)',
                    'rgba(0, 128, 0, 1)',
                    'rgba(0, 128, 0, 1)',
                    'rgba(0, 128, 0, 1)',
                    'rgba(0, 128, 0, 1)',
                    'rgba(0, 128, 0, 1)',
                    'rgba(0, 128, 0, 1)',
                    'rgba(0, 128, 0, 1)'
                  ],
                  borderColor: [
                    'rgba(178, 39, 12, 1)',
                    'rgba(178, 39, 12, 1)',
                    'rgba(178, 39, 12, 1)',
                    'rgba(178, 39, 12, 1)',
                    'rgba(178, 39, 12, 1)',
                    'rgba(178, 39, 12, 1)',
                    'rgba(178, 39, 12, 1)',
                    'rgba(178, 39, 12, 1)',
                    'rgba(178, 39, 12, 1)',
                    'rgba(178, 39, 12, 1)',
                    'rgba(178, 39, 12, 1)',
                    'rgba(178, 39, 12, 1)'
                  ],
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
      console.log(data);
    },
    error:function (richiesta,stato,errore) {
      alert("Chiamata fallita!")
    }
  })
})
