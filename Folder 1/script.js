// document.getElementById('col').innerHTML = "Hello World, Ok Guruji";
// document.getElementById('col').style.backgroundColor = "red"

let a = 0
h1.innerHTML = a;

function myFunction2(){
    // document.querySelector("h1").innerHTML = a;
    if(a<1){
        return;
    }
    else{
        a = a - 1;
        document.getElementById("check").innerHTML = a;
    }
}

function myFunction3(){
    // document.getElementById('num').innerHTML = "a: "+a+"<br>b: "+b+"<br>c: "+"(a + b) = "+c;
    // document.getElementById('num').innerHTML = `${a} + ${b} = ${c}`;
    // document.querySelector("h1").innerHTML = a;
    if(a>9){
        return;
    }
    else{
        a = a + 1;
        document.getElementById("check").innerHTML = a;
    }
}


function resetFunction(){
    // document.getElementById('num').innerHTML = "a: "+a+"<br>b: "+b+"<br>c: "+"(a + b) = "+c;
    // document.getElementById('num').innerHTML = `${a} + ${b} = ${c}`;
    // document.querySelector("h1").innerHTML = a;
    a = 0;
    document.getElementById("check").innerHTML = a;
}