// collapsible menu
butt=Array.from(document.body.getElementsByClassName('info'))
butt.forEach(ele=>{
    ele.querySelector('button').addEventListener('click',function(){
        ele.querySelector('button').getElementsByClassName('contents')[0].classList.toggle('c1')
    })
})

//carousel for pc
$(function(){
    $('.car-item').eq(0).addClass('active');
    var total = $('.car-item').length;
    var current = 0;
    $('#moveRight').on('click', function(){
      var next=current;
      current= current+1;
      setSlide(next, current);
    });
    $('#moveLeft').on('click', function(){
      var prev=current;
      current = current- 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next){
      var slide= current;
      if(next>total-1){
       slide=0;
        current=0;
      }
      if(next<0){
        slide=total - 1;
        current=total - 1;
      }
             $('.car-item').eq(prev).removeClass('active');
             $('.car-item').eq(slide).addClass('active');
        setTimeout(function(){
  
        },800);
      
  
      
      console.log('current '+current);
      console.log('prev '+prev);
    }
  });

  //guests
  function on1() {
    document.getElementById("guestinfo1").style.display = "block";
  }
  
  function off1() {
    document.getElementById("guestinfo1").style.display = "none";
  }
  function on2() {
    document.getElementById("guestinfo2").style.display = "block";
  }
  
  function off2() {
    document.getElementById("guestinfo2").style.display = "none";
  }
  function on3() {
    document.getElementById("guestinfo3").style.display = "block";
  }
  
  function off3() {
    document.getElementById("guestinfo3").style.display = "none";
  }
  function on4() {
    document.getElementById("guestinfo4").style.display = "block";
  }
  
  function off4() {
    document.getElementById("guestinfo4").style.display = "none";
  }
  function on5() {
    document.getElementById("guestinfo5").style.display = "block";
  }
  
  function off5() {
    document.getElementById("guestinfo5").style.display = "none";
  }
  function on6() {
    document.getElementById("guestinfo6").style.display = "block";
  }
  
  function off6() {
    document.getElementById("guestinfo6").style.display = "none";
  }
  function on7() {
    document.getElementById("guestinfo7").style.display = "block";
  }
  
  function off7() {
    document.getElementById("guestinfo7").style.display = "none";
  }
  function on8() {
    document.getElementById("guestinfo8").style.display = "block";
  }
  
  function off8() {
    document.getElementById("guestinfo8").style.display = "none";
  }
  function on9() {
    document.getElementById("guestinfo9").style.display = "block";
  }
  
  function off9() {
    document.getElementById("guestinfo9").style.display = "none";
  }
  function on10() {
    document.getElementById("guestinfo10").style.display = "block";
  }
  
  function off10() {
    document.getElementById("guestinfo10").style.display = "none";
  }
  function on11() {
    document.getElementById("guestinfo11").style.display = "block";
  }
  
  function off11() {
    document.getElementById("guestinfo11").style.display = "none";
  }
  // guest house


  // form divisions
  // function viewe(){
  //   document.getElementsByClassName('vform')[0].style.display="inline-flex"
  //   document.getElementsByClassName('pform')[0].style.display="none"
  // }
  // function viewp(){
  //   document.getElementsByClassName('pform')[0].style.display="inline-flex"
  //   document.getElementsByClassName('vform')[0].style.display="none"
  // }
  const f1=document.getElementsByClassName('vform')[0];
  const f2=document.getElementsByClassName('pform')[0];

document.getElementsByClassName('vi')[0].addEventListener('click',()=>{
  if(f1.style.display=="none")
  {
 f1.style.display="inline-flex";
//  f2.style.display="none";
 f1.classList.add('s1down');
  }
  else if(f1.style.display=="inline-flex")
  { 
    f1.classList.remove('s1down');
    f1.classList.add('sup');
    // f2.style.display="none";
   setTimeout(()=>{
    f1.style.display="none";
   },1000)
  }
 
 
});

 function s(){
  if(document.getElementById('require').value=="Yes")
  document.body.getElementsByClassName('gues')[0].style.display="inline-flex"
  if(document.getElementById('require').value=="No")
  document.body.getElementsByClassName('gues')[0].style.display="none"
 }


//cards events

/*
OVERVIEW
A simple vertical carousel

Slides are cycled through by the two toggles on the right, previous and next. 

Next
=> toggle clicked
=> active slide is faded out, moved up
=> next slide is faded in, moved up

Previous
=> toggle clicked
=> active slide is faded out, moved down
=> next slide is faded in, moved down
*/



function eon1(){
  document.getElementById('einfo1').style.display="block"
}
function eoff1(){
  document.getElementById('einfo1').style.display="none"
}
function eon2(){
  document.getElementById('einfo2').style.display="block"
}
function eoff2(){
  document.getElementById('einfo2').style.display="none"
}
function eon3(){
  document.getElementById('einfo3').style.display="block"
}
function eoff3(){
  document.getElementById('einfo3').style.display="none"
}
function eon4(){
  document.getElementById('einfo4').style.display="block"
}
function eoff4(){
  document.getElementById('einfo4').style.display="none"
}
function eon5(){
  document.getElementById('einfo5').style.display="block"
}
function eoff5(){
  document.getElementById('einfo5').style.display="none"
}
function eon6(){
  document.getElementById('einfo6').style.display="block"
}
function eoff6(){
  document.getElementById('einfo6').style.display="none"
}
function eon7(){
  document.getElementById('einfo7').style.display="block"
}
function eoff7(){
  document.getElementById('einfo7').style.display="none"
}
function eon8(){
  document.getElementById('einfo8').style.display="block"
}
function eoff8(){
  document.getElementById('einfo8').style.display="none"
}


// var y=window.matchMedia("(max-width:430px)")
// cn(y);
// function cn(y){
//  if(y.matches){
//   document.getElementsByClassName('navbar-header')[0].classList.remove('navbar-header')

//  }
// }
var x=window.matchMedia("(max-width:800px)")
change(x);


function change(x){
  if(x.matches){
    const c=Array.from(document.getElementsByClassName('cardi')) ;
    c.forEach(ele=>(
        ele.addEventListener('mouseover',function(){

          ele.classList.toggle('is-flipped');

        })
    ));
  }
  else{
    const c=Array.from(document.getElementsByClassName('cardi')) ;
    c.forEach(ele=>(
        ele.addEventListener('mouseover',function(){
          setTimeout(()=> 
          ele.classList.toggle('is-flipped')
          ,500)
        })
    ));
  }
}

//support us

const pay=document.getElementsByClassName('pay')[0];
document.getElementById('yes').addEventListener('click',function(){
  pay.style.display="block";
  pay.classList.add("slidedown");
});
// document.getElementById('no').addEventListener('click',function(){
//     pay.classList.remove("slidedown");
//     pay.classList.add("slideup");
//     setTimeout(()=>{
//         pay.style.display="none";
//     },1000)
//   });
