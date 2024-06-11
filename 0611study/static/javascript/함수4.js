//   함수4.js

// 브라우저에 모두 표시되면 발생하는이벤트 onload
window.onload = function(){  
     document.getElementById("calc").addEventListener('click', function(){
        var k = Number( document.getElementById("kor").value );
        var m = Number( document.getElementById("mat").value );
        var e = Number( document.getElementById("eng").value );
        var h = Number( document.getElementById("his").value );
        총점계산(k,m,e,h);
     } );
}
function 총점계산(a, b, c, d){ // 총점 계산 만 하는 함수
    var total = a+ b+ c+ d;
    평균계산( total );
}
function 평균계산( total ){ // 평균 계산만 하는함수
    var avg = total/4 ;
    출력( total , avg);
}
function 출력(tot, avg){ // 총점과 평균을 화면에 출력하는 함수

    document.getElementById("total").innerText = `총점 : ${tot}점`;
    document.getElementById("avg").innerText = `평균 : ${avg}점`;
}