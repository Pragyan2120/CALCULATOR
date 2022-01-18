var operations_operators = document.querySelector(".operations_operators");
console.log(operations_operators);


var button = operations_operators.querySelectorAll("button");
console.log(button);

// targeting the text-box

var textbox = document.querySelector(".textbox");
console.log(textbox);

// targeting the AC button

var allclear=document.querySelector(".oprt");
console.log(allclear);

// when AC button is clicked i want to show 0 in textbox

allclear.addEventListener("click",addZero);
function addZero(e)
{
textbox.value="0";

}



for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", runEvent);

  function runEvent(e) {
    e.preventDefault();
    console.log(this.innerHTML);


    if(this.innerHTML=="=")
    {

      textbox.value=eval(textbox.value);
    }
    else
    {
      if(this.innerHTML=="x")
      {
        textbox.value=textbox.value+"*";
      }
      else
      {
    textbox.value = textbox.value + this.innerHTML; 
      }
    }
  }
}
