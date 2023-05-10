const ctx = document.getElementById('boxchart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Keberangkatan', 'Job Match', 'User'],
    datasets: [{
      label: 'Sales',
      data: [12, 19, 3, 5, 2, 3, 15],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    plugins: {
        legend: {
          display: false
        }
    }
  }
});

const numCounter = $('.count')
//console.log(numCounter);
var countSpeed = 100;

numCounter.each(function () {
    
    var targetCount = $(this).attr('data-count');
    var countInit = +$(this).text();
    //console.log(targetCount);

    var increaseCountNum = Math.floor(targetCount / countSpeed);
    //console.log(increaseCountNum);

    //for some reason, i keep console.log() everything fcking stupid FR FR
    const increasedNumber = () => {
        countInit += increaseCountNum;
        $(this).text(countInit);

        if (countInit < targetCount){
            setTimeout( () => { increasedNumber() },5)
        }
    }

    increasedNumber();
});

$(document).ready(function () {

    //uuh oh well this gonna make the fontawesome somehow cool IMO idk whatever
    $("div.outerline").hover(function(){
        $(this).css("background-color", "rgba(64,64,64)");
        $(this).css("color", "rgba(255, 255, 255)");
    },
    function(){
        $(this).css("background-color", "rgba(255, 255, 255)");
        $(this).css("color", "black");
    }
 )
});