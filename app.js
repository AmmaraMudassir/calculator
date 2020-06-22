function input(num){
    console.log(num)
    var number= document.getElementById("userinput");
    number.value += num;
    
}
function clearResult(){
    var number = document.getElementById("userinput");
    number.value = "";

}
function finalResult(){
    var number = document.getElementById("userinput");
    number.value = eval(number.value);

}
