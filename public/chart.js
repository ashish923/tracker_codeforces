 // pie chart user Verdicts
 const ctx = document.getElementById('Chart').getContext('2d');
 const myChart = new Chart(ctx, {
   type: 'pie',
   data: {
     labels: [
       'Red',
       'Blue',
       'Green'
     ],
     datasets: [{
       label: 'My First Dataset',
       data: [300, 50, 100],
       backgroundColor: [
         'rgb(255, 99, 132)',
         'rgb(54, 162, 235)',
         'rgb(50,205,50)'
       ],
       hoverOffset: 4
     }]
   },

 });



 // pie chart of user Language
 const langctx = document.getElementById('lang').getContext('2d');
 const myChartlang = new Chart(langctx, {
   type: 'pie',
   data: {
     labels: [
       'Red',
       'Blue',
       'Green'
     ],
     datasets: [{
       label: 'My First Dataset',
       data: [300, 50, 100],
       backgroundColor: [
         'rgb(255, 99, 132)',
         'rgb(54, 162, 235)',
         'rgb(50,205,50)'
       ],
       hoverOffset: 4
     }]
   },

 });
