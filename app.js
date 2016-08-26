$(document).ready(function() {
  //when user clicks on grid, x shows up
  var count = 0;
  $("tr>td").click(function(){     //function_td
    if ($(this).children("span").length > 0) {
    } else {
    count++;
    var odd = "<span>X</span>";
    var even = "<span>O</span>";
    if (count == 1 || count == 3 || count == 5 || count == 7 || count == 9) {
      $(this).html(odd);
    }
    if (count == 2 || count == 4 || count == 6 ||count == 8 || count == 10 || count == 12) {
      $(this).html(even);
    }
    console.log(count)
    var r1c1 = $("#r1c1 span").text()
    var r1c2 = $("#r1c2 span").text()
    var r1c3 = $("#r1c3 span").text()
    var r2c1 = $("#r2c1 span").text()
    var r2c2 = $("#r2c2 span").text()
    var r2c3 = $("#r2c3 span").text()
    var r3c1 = $("#r3c1 span").text()
    var r3c2 = $("#r3c2 span").text()
    var r3c3 = $("#r3c3 span").text()
    if (r1c1 == "O" && r1c2 == "O" && r1c3 == "O") {
      alert("O wins!");
    };
    if (r2c1 == "O" && r2c2 == "O" && r2c3 == "O") {
      alert("O wins!");
      restart();
    };
    if (r3c1 == "O" && r3c2 == "O" && r3c3 == "O") {
      alert("O wins!");
      restart();
    };
    if (r1c1 == "O" && r2c1 == "O" && r3c1 == "O") {
      alert("O wins!");
      restart();
    };
    if (r1c2 == "O" && r2c2 == "O" && r3c2 == "O") {
      alert("O wins!");
      restart();
    };
    if (r1c3 == "O" && r2c3 == "O" && r3c3 == "O") {
      alert("O wins!");
      restart();
    };
    if (r1c1 == "O" && r2c2 == "O" && r3c3 == "O") {
      alert("O wins!");
      restart();
    };
    if (r1c3 == "O" && r2c2 == "O" && r3c1 == "O") {
      alert("O wins!");
      restart();
    };
    if (r1c1 == "X" && r1c2 == "X" && r1c3 == "X") {
      alert("X wins!");
      restart();
    };
    if (r2c1 == "X" && r2c2 == "X" && r2c3 == "X") {
      alert("X wins!");
      restart();
    };
    if (r3c1 == "X" && r3c2 == "X" && r3c3 == "X") {
      alert("X wins!");
      restart();
    };
    if (r1c1 == "X" && r2c1 == "X" && r3c1 == "X") {
      alert("X wins!");
      restart();
    };
    if (r1c2 == "X" && r2c2 == "X" && r3c2 == "X") {
      alert("X wins!");
      restart();
    };
    if (r1c3 == "X" && r2c3 == "X" && r3c3 == "X") {
      alert("X wins!");
      restart();
    };
    if (r1c1 == "X" && r2c2 == "X" && r3c3 == "X") {
      alert("X wins!");
      restart();
    };
    if (r1c3 == "X" && r2c2 == "X" && r3c1 == "X") {
      alert("X wins!");
      restart();
    };

    function restart() {
      count = 0;
      $("#r1c1").html("&nbsp;")
      $("#r1c2").html("&nbsp;")
      $("#r1c3").html("&nbsp;")
      $("#r2c1").html("&nbsp;")
      $("#r2c2").html("&nbsp;")
      $("#r2c3").html("&nbsp;")
      $("#r3c1").html("&nbsp;")
      $("#r3c2").html("&nbsp;")
      $("#r3c3").html("&nbsp;")
    }
  };
});
})
