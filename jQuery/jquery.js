$("li").on("click", function(ev){
    console.log(ev.target.innerText)
})

// get text .text()
$("li").text()
// set text

$("li").text("some text")

// get html .html()
$("li").html()

// set attribute .attr()
$("li").attr("name", "new_name")

$("li").attr({name: "other_name",
             class: "new_class"})
// or
let newAttr = {name: "other_name1",
               class: "new_class1"}
$("li").attr(newAttr)

//.val() for inputs
$("input").val()
$("#in_2").val("new value")
$("#in_2").val("") // good for reset

    //CSS
$("li").css("color")
let styleObj = {color: "blue", fontSize: "30px", "font-family": "Arial"}
$("li").css(styleObj)
//add and remove class
$("li").addClass("some_class")
$("li").removeClass("some_class")

//Chaining
const $li = $("li")
$li.addClass("n_class")
$("li").addClass("w_class").text("cool").css("color", "navy")