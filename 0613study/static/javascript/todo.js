
$(function(){

    $("#enroll").attr("disabled", "disabled");


    $("#work").keyup( check ); //할일 입력시
    $("#time").change( check );// 시간 선택시
    $("#state").keyup( check );// 상태입력시

    $("#enroll").click( add );

});

function add(){
    var work = $("#work").val();
    var time = $("#time").val();
    var state = $("#state").val();

    if( state ==='완료' || state === '진행중'){

        $("#todoList").append( `<li class="todo">${work}</li>
            <li class="todoTime">${time}</li>
            <li class="todoState">${state}</li>` );
        
        $("#work").val(''); // 할일 input 비우기
        $("#time").val(''); // 시간 비우기
        $("#state").val(''); // 상태 비우기
        $("#work").focus(); // 할일에 포커스 두기

    }else{
        alert("상태는 완료 또는 진행중 만 입려하세요");
    }
}

function check(){
    var work = $("#work").val(); // input 태그 값 가져오기
    var time = $("#time").val();
    var state = $("#state").val();

    if( work != '' && time != '' && state != ''){
        $("#enroll").removeAttr("disabled");
    }else{
        $("#enroll").attr("disabled", "disabled");
    }
}