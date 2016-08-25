$(document).ready(function() {
  //when user clicks on grid, x shows up
  var count = 0;
  $("tr>td").click(function(){     //function_td
    count++;
    var odd = "X";
    var even = "O";
    if (count == 1 || count == 3 || count == 5 || count == 7 || count == 9) {
      $(this).html("<td>"+odd+"</td>");
    }
    if (count == 2 || count == 4 || count == 8 || count == 10 || count == 12) {
      $(this).html("<td>"+even+"</td>");
    }
});

})
