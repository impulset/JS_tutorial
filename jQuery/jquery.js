$("li").click(function(ev){
    console.log(ev.target.innerText)
})

// get text
$("li").text()
// set text
$("li").text("some text")

// get html
$("li").html()

// set attribute
$("li").attr("name", "new_name")

$("li").attr({name: "other_name",
             class: "new_class"})
