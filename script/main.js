// Sample data
const currentMonthData = [1.8, 2.3, 2.5, 4.5, 2.9, 3, 2.25, 3.8, 4.75, 3.5];
const lastMonthData = [1.5, 2.35, 3.5, 3.75, 3.1, 1.8, 1.6, 1.2, 1.8, 2.75];

// Create the chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
type: 'line',
data: {
 labels: ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28'],
 datasets: [
   {
     label: 'Current Month',
 
         
     data: currentMonthData,
     borderColor: '#824AED',
     borderWidth: 2,
     fill: true,
     tension: 0.5,
     
 pointBorderColor: '#fff',
 pointBackgroundColor: '#824AED',
 pointRadius: 5,
 pointHoverRadius: 10,
 pointHitRadius: 30,
 pointBorderWidth: 1.5,
 pointStyle: 'Rounded',
     backgroundColor: createGradient(
       ctx,
       'rgba(130, 74, 237, 0.19)',
       'rgba(130, 74, 237, 0.01)'
     ),
     
   },
   {
     label: 'Last Month',
     data: lastMonthData,
     borderColor: '#3AAFE4',
     borderWidth: 2,
     backgroundColor: '#3AAFE4',
 pointBorderColor: '#fff',
 pointBackgroundColor: '#3AAFE4',
 pointRadius: 5,
 pointHoverRadius: 10,
 pointHitRadius: 30,
 pointBorderWidth: 1.5,
 pointStyle: 'Rounded',
     fill: true,
     tension: 0.5,
     backgroundColor: createGradient(
       ctx,
       'rgba(58, 175, 228, 0.26)',
       'rgba(58, 175, 228, 0.1)'
     ),
   },
 ],
},
options: {
 responsive: true,
 
 scales: {
   x: {
     display: true,
     grid: {
       display: false, 
     },
     title: {
       display: true,
     },
   },
   y: {
     display: true,
     title: {
       display: true,
     },
     grid: {
       display: true,
       drawOnChartArea: false,
       drawTicks: false,
       borderDash: [10, 10],
       color: function(context) {
         if (context.tick.value === 1 || context.tick.value === 2 || context.tick.value === 3 || context.tick.value === 4 || context.tick.value === 5) {
           return '#000'; // Change grid line color for specific values
         }
         return '#330000'; // Change grid line color for other values
       }
     },
     max: 5,
     stepSize: 1,
     ticks: {
       callback: function (value, index, values) {
        
         if (value === 1 || value === 2 || value === 3 || value === 4 || value === 5) {
           return value + 'k';
         }
         return '';
       },
     },
   },
 },
 plugins: {
   legend: {
     display: false,
   },
 },
},
});

// Helper function to create a gradient fill
function createGradient(ctx, startColor, endColor) {
const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
gradient.addColorStop(0, startColor);
gradient.addColorStop(1, endColor);
return gradient;
}

// Custom legend
const chartLegend = document.getElementById('chart-legend');
const datasets = myChart.data.datasets;
datasets.forEach((dataset, index) => {
const label = dataset.label;
const color = dataset.borderColor;

const legendItem = document.createElement('div');
legendItem.classList.add('legend-item');

const legendColor = document.createElement('span');
legendColor.classList.add('legend-color');
legendColor.style.backgroundColor = color;

const legendLabel = document.createElement('span');
legendLabel.classList.add('legend-label');
legendLabel.textContent = label;

legendItem.appendChild(legendColor);
legendItem.appendChild(legendLabel);

chartLegend.appendChild(legendItem);
});


function toggleSidebar() {
const sidebar = document.querySelector('.sidebar');
sidebar.classList.toggle('open');
}

// Close the sidebar when a menu item is clicked (optional)
const menuItems = document.querySelectorAll('.sidebar-menu li');
menuItems.forEach((item) => {
item.addEventListener('click', () => {
 const sidebar = document.querySelector('.sidebar');
 sidebar.classList.remove('open');
});
});





