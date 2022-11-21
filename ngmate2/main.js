function start(){
    location.href= "level1.html";
}
function back1(){
    location.href= "home.html";
    alert( "Você desistiu! sua ultima pontuação foi de: " +x1)
}
function back2(){
    location.href= "home.html";
    alert( "Você desistiu! sua ultima pontuação foi de: " +x2)
}
function back3(){
    location.href= "home.html";
    alert( "Você desistiu! sua ultima pontuação foi de: " +x3)
}
function back4(){
    location.href= "home.html";
    alert( "Você desistiu! sua ultima pontuação foi de: " +x4)
}
function back5(){
    location.href= "home.html";
    alert( "Você desistiu! sua ultima pontuação foi de: " +x5)
}
function back6(){
    location.href= "home.html";
    alert( "Você desistiu! sua ultima pontuação foi de: " +x6)
}
function back7(){
    location.href= "home.html";
    alert( "Você desistiu! sua ultima pontuação foi de: " +x7)
}
function back8(){
    location.href= "home.html";
    alert( "Você desistiu! sua ultima pontuação foi de: " +x8)
}
function back9(){
    location.href= "home.html";
    alert( "Você desistiu! sua ultima pontuação foi de: " +x9)
}
function back10(){
    location.href= "home.html";
    alert( "Você desistiu! sua ultima pontuação foi de: " +x10)
}
x1 = 0
x2 = 0
x3 = 0
x4 = 0
x5 = 0
x6 = 0
x7 = 0
x8 = 0
x9 = 0
x10 = 0
function answer1(){
    var aswr1 = document.getElementById("answeri").value
    if( aswr1 == "Arco-iris"){
        location.href= "level2.html"
        x1 = x1+20
        alert("Parabéns! Sua pontuação nesse nivel foi: " +x1)
    }else{
        alert('Try again')
        x1 = x1-1
    }
}
function answer2(){
    var aswr2 = document.getElementById("answerii").value
    if( aswr2 == "Blackout"){
        location.href= "level3.html"
        x2 = x2+20
        alert("Parabéns! Sua pontuação nesse nivel foi: " +x2)
    }else{
        alert('Try again')
        x2 = x2-1
    }
}
function answer3(){
    var aswr3 = document.getElementById("answeriii").value
    if( aswr3 == "@_.ast3roid"){
        location.href= "level4.html"
        x3 = x3+20
        alert("Parabéns! Sua pontuação nesse nivel foi: " +x3)
    }else{
        alert('Try again')
        x3 = x3-1
    }
}
function answer4(){
    var aswr4 = document.getElementById("answeriv").value
    if( aswr4 == "Eu estou aqui"){
        location.href= "level5.html"
        x4 = x4+20
        alert("Parabéns! Sua pontuação nesse nivel foi: " +x4)
    }else{
        alert('Try again')
        x4 = x4-1
    }
}
function answer5(){
    var aswr5 = document.getElementById("answerv").value
    if( aswr5 == "I know what you did last summer"){
        location.href= "level6.html"
        x5 = x5+20
        alert("Parabéns! Sua pontuação nesse nivel foi: " +x5)
    }else{
        alert('Try again')
        x5 = x5-1
    }
}
function answer6(){
    var aswr6 = document.getElementById("answervi").value
    if( aswr6 == "Security"){
        location.href= "level7.html"
        x6 = x6+20
        alert("Parabéns! Sua pontuação nesse nivel foi: " +x6)
    }else{
        alert('Try again')
        x6 = x6-1

    }
}
function answer7(){
    var aswr7 = document.getElementById("answervii").value
    if( aswr7 == "Fort Lauderdale"){
        location.href= "level8.html"
        x7 = x7+20
        alert("Parabéns! Sua pontuação nesse nivel foi: " +x7)
    }else{
        alert('Try again')
        x7 = x7-1
    }
}
function answer8(){
    var aswr8 = document.getElementById("answerviii").value
    if( aswr8 == "Galileu Galilei"){
        location.href= "level9.html"
        x8 = x8+20
        alert("Parabéns! Sua pontuação nesse nivel foi: " +x8)
    }else{
        alert('Try again')
        x8 = x8-1 
    }
}
function answer9(){
    var aswr9 = document.getElementById("answerix").value
    if( aswr9 == "Easy level"){
        location.href= "level10.html"
        x9 = x9+20
        alert("Parabéns! Sua pontuação nesse nivel foi: " +x9)
    }else{
        alert('Try again')
        x9 = x9-1
    }
}
function answer10(){
    var aswr10 = document.getElementById("answerx").value
    if( aswr10 == "RJJK"){
        location.href= "end.html"
        x10 = x10+20
        alert("Parabéns! Sua pontuação nesse nivel foi: " +x10)
    }else{
        alert('Try again')
        x10 = x10-1
    }
}
