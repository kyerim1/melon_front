// signup.js


$(function(){

    $("#portrait").on("change", function( e ){
        //console.log(  $(this).val() );
        console.log(  e.target.files  );
        var file = e.target.files[0]; //input 태그로 선택한 파일의정보
                     //  파일명, 파일유형, 수정일자, 크기 
        
        var reader = new FileReader(); // 파일열기 객체 생성
        reader.onload = function( e){  //파일 열기가 완료되면
            console.log( e.target.result );
            var path = e.target.result;

            $("#preview").css("background","url("+path+") no-repeat center");
            $("#preview").css("background-size","contain");

            //  이미지태그.attr("src", 경로);
        }

        reader.readAsDataURL(file);


        //console.log( e.target.result );
    });

    // 회원가입 버튼 클릭 이벤트 등록
   $("#signup").on('click' , requiredCheck );
    
   // 체크박스들을 선택하였을경우 어떻게 값이 나오나?
//    $("#signup").on('click',function(){
//     // jquery에서 checkbox중 체크 한 것만 가져오려면
//     // $("input[name=interest]:checked")
//     //  :checked 를 붙여야  체크 한것 만 가져온다.

//     //alert(  $("input[name=interest]:checked").length );

//     // 체크 한 value 값 전부 확인하려면
//     let itr = $("input[name=interest]:checked");
//     let value=[]; 
//     for( var i=0; i<itr.length; i++){
//         value.push(  $(itr[i]).val() );
//     }
//     alert("체크 한 관심분야 : " + value);



//         // let interest = $("input[name=interest]:checked").val();
//         // alert( interest );

//         //$("#signupForm").submit();
//    });
});

function requiredCheck(){ // 필수 입력 을 모두 입력했는가?
    var id = $("#userId");  // 아이디 id.val()  
    var pw = $("#userPw"); //  비밀번호
    var re = $("#pwRe");   //  비밀번호확인
    var email = $("#email");// 이메일
    var tel = $("#tel");    // 연락처
    var addr = $("#addr");  // 주소

    if( id.val()=='' ){
        alert("아이디 입력하세요");
        id.focus(); // 아이디 input태그에 포커스 넣기
    }else if(pw.val() == ''){
        alert("비밀번호를 입력하세요");
        pw.focus();  re.val('');
    }else if( re.val() == ''){
        alert("비밀번호 다시 입력해주세요");
        re.focus();
    }else if( pw.val() != re.val() ){
        alert("비밀번호가 잘못되었습니다.");
        pw.val('');  re.val('');
        pw.focus();
    }else if( email.val() == '' ){
        alert("이메일 입력하세요");
        email.focus();
    }else if( tel.val() == '' ){
        alert("연락처를 입력하세요");
        tel.focus();
    }else if( addr.val() == ''){
        alert("주소를 입력하세요 ");
        addr.focus();
    }else{  // 위의 if 조건식이 모두 거짓이라면 동작
            //모두 거짓이면  필수입력 전부 입력된것이다.

        //localstorage에 저장

        // 아이디 - id,  비밀번호 - pw , 이메일 - email , 연락처 - tel, 주소 -addr
        var user = { id:id.val() , pw:pw.val() , email:email.val() , 
            tel: tel.val(), addr:addr.val()
        }
        localStorage.setItem("user" , JSON.stringify( user) );


        $("#signupForm").submit();
    }
}