function SwapIMG(imageName, newImageFile) {
// Найти объект с изображением
var image = document.getElementById(imageName)
// Изменить изображение
image.src = newImageFile
}


  function ToggleVisibility(element){
    var element = document.getElementById(element)
    // Определить состояние элемента
    if (element.style.display == "none"){
      // Если элемент скрыт, то показать его
      element.style.display = "block"
    } else {
      // Если элемент показывается, то скрыть его
      element.style.display = "none"
    }
  }

  //Определить и показать результаты тестирования 
  function ShowTestResult(event) {
    //Объект, к которому привязано событие (кнопка)
    var objCurrent = event.currentTarget;
    //Объект форма явлется родительским по отношению к кнопке
    var objForm = objCurrent.parentElement;
    var num = 0; //количество правильных ответов
    if (objForm.q1.value == "C") {num++};
    if (objForm.q2.value == "3") {num++};	
    if (num==0) {
      var objResult = document.getElementById("again")
      objResult.style.display = "block";
    } else {
      var objResult = document.getElementById("result")
      objResult.style.display = "block";
      var objAnswer = document.getElementById("answer")
      objAnswer.innerHTML = num;      
    }	
  }
  //Отменить результаты тестирования 
  function ResetResult(event) {
    var objResult = document.getElementById("again")
    objResult.style.display = "none";
    objResult = document.getElementById("result")
    objResult.style.display = "none";
  }
