// window.onload = function(){
    window.addEventListener("load", function(){
    var btnPrint = document.getElementById("btn-print");
   
    var add = function(x,y){
        return x + y;
    };

    btnPrint.onclick = function(){
    // var x,y;
    var x = prompt("x값을 입력하세요",0);
    var y = prompt("y값을 입력하세요",0);

    x = parseInt(x);
    y = parseInt(y);

    btnPrint.value = add(x,y);
    };
    
});
//두가지 방식이 있음. script를 밑으로 내리거나.
    //window.onload = init;