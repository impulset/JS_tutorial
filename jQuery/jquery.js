// get text .text()
$("li").text()
// set text

$("li").text("some text")

// get html .html()
$("li").html()

// set attribute .attr()
$("li").attr("name", "new_name")

$("li").attr({
  name: "other_name",
  class: "new_class"
})
// or
let newAttr = {
  name: "other_name1",
  class: "new_class1"
}
$("li").attr(newAttr)

//.val() for inputs
$("input").val()
$("#in_2").val("new value")
$("#in_2").val("") // good for reset

    //CSS
$("li").css("color")
let styleObj = { color: "blue", fontSize: "30px", "font-family": "Arial" }
$("li").css(styleObj)
//add and remove class
$("li").addClass("some_class")
$("li").removeClass("some_class")

    //Chaining
const $li = $("li")
$li.addClass("n_class")
$("li").addClass("w_class").text("cool").css("color", "navy")

    //Traversal
const $specialLi = $('li a').eq(0)
$specialLi.next()
$specialLi.prev()
$specialLi.parent()
$specialLi.children()
$specialLi.find('a')

    //Creating Appending Removing
$('ul').append("<li>Hello</li>")
$('ul').prepend("<li>World</li>")

$("<li>HELLO</li>").css("color", "orange").appendTo('ul') //creates new element and apend to another element
$("li").after("<span>Hi</span>")

    //Events
$("li").on("click", function (ev) {
  console.log(ev.target.innerText);
});

$("span").on("click", function () {
  $(this).css('color', 'red');
});

$("span").on("mouseleave", function () {
  $(this).remove();
});

    //Event delegation
$('#my_button').on("click", function(){
  $('ul').append("<input>")
});
$('body').on("focus", 'input', function(){
  $(this).val("Type something")
});

    //Animations
$('#div1').on("click", function(){
  $(this).fadeOut(1000, function(){
    $(this).remove();
  });
});
$('#div2').on("click", function(){
  $(this).animate({
    height: "200px",
    opacity: 0.7
  }, 3000, function(){
    $(this).remove();
  });
});
