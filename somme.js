function somme(){
    var num1 = document.getElementById("num1").value ;
    var num2 = document.getElementById("num2").value ;
    var s = parseInt(num1) + parseInt(num2);
    var message = document.getElementById("message").innerHTML=`la somme de ${num1} + ${num2} est ${s}`;
}
function compar(){
    var num1 = document.getElementById("num1").value ;
    var num2 = document.getElementById("num2").value ;
    var sup
    if (parseInt(num1)>=parseInt(num2)) {
        sup=parseInt(num1);
    } 
    else{
        sup=parseInt(num2);
    }  
    var sup = document.getElementById("sup").innerHTML=`la valeur superieur est ${sup}`;

}