$(document).ready(function(){   
  $.getJSON("data.json", function( data ) {
        var label_list=[];
        var bookData_list=[];
        var backgroundColor_list=[];
        var hoverBackgroundColor_list=[];
        var legend =''; 
        var legend_digit ='';
        $.each(data, function(index, value) {
          label_list.push(value.label);
          bookData_list.push(value.fruit_data);
          backgroundColor_list.push(value.backgroundColor);
          hoverBackgroundColor_list.push(value.backgroundColor);
        });
        $.each(data, function(index, value) {
           legend += '<tr><td>'
            +'<i class="fa fa-square" style="color:'+value.backgroundColor+'"></i>'
            +value.label+'</td></tr>';
            legend_digit += '<tr><td>'
            +value.fruit_data+'</td></tr>';

        });             
        doughnut_chart_data = {                                    
        labels: label_list,
        datasets: [{
          data:bookData_list,
          backgroundColor: backgroundColor_list,
          hoverBackgroundColor:hoverBackgroundColor_list                      
          }]
      };
      
    doughnut_chart(doughnut_chart_data);
    $("#canvas1_legend").append(legend);
    $("#canvas1_digit").append(legend_digit);
    console.log(legend);
  });

  function doughnut_chart(data) {
    var can = $("#canvas1");
    var ctx = can.get(0).getContext("2d");                
     new Chart(ctx, {
      type:"doughnut",
      data:data,
      options: {
        legend: false,
        responsive: false
      }
  });
}
});                