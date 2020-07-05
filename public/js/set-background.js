/*var idx = Math.floor(new Date().getHours());*/
var idx = 25;
var body = document.getElementsByTagName("body")[0];

$("header div").removeClass("message");*/

$(function(){
    $("button").eq(0).click(function(){
        $("p").toggleClass ("red");
    })  
});
$(function(){
    $("button").eq(1).click(function(){
        $("body p").eq(1).html(Date());
    })
});
$(function(){
    $("button").eq(2).click(function(){
        $("body").html(myR());
    })
});

var R = require("r-script"); 

var attitude = JSON.parse(
    require("fs").readFileSync("attitude.json", "utf8"));

function myR(){
    R("ex-async.R")
    .data({df: attitude, nGroups: 3, fxn: "mean" })
    .call(function(err, d) {
      if (err) throw err;
      console.log(d);
    });
} 

/*$(function(){*/
    /*$("button").eq(1).click(function(){*/
/*/*$.ajax({*/
    /*url : "/",*/
    /*type: "POST",*/
    /*data: JSON.stringify([*/
        /*{id: 1, name: "Shahed"}, */
        /*{id: 2, name: "Hossain"}*/
    /*]),*/
    /*contentType: "application/json; charset=utf-8",*/
    /*dataType   : "json",*/
    /*success    : function(){*/
        /*console.log("Pure jQuery Pure JS object");*/
    /*}*/
/*});*/
