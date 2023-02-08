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

  // guest house

  // function on() {
  //   if(document.body.getElementsByTagName('select')[0].value=="participating"){
  //     document.getElementsByClassName("guesth")[0].style.display = "block";
  //     document.getElementById("purpose").value="participating"
  //   }
    
  //   if(document.body.getElementsByTagName('select')[0].value=="visiting"){
  //     document.getElementsByClassName("guesth")[0].style.display = "none";
  //     document.getElementById("purpose").value="visiting"
  //   }
    
  // }


  function sc(){
    if(document.body.getElementsByTagName('select')[1].value=="Male")
    document.getElementById("sex").value="Male"
    if(document.body.getElementsByTagName('select')[1].value=="Female")
    document.getElementById("sex").value="Female"
    if(document.body.getElementsByTagName('select')[1].value=="Others")
    document.getElementById("sex").value="Others"
  }

  function modesel(){
    
      if(document.body.getElementsByTagName('select')[3].value=="Air")
      document.getElementById("mode").value="Air"
      if(document.body.getElementsByTagName('select')[3].value=="Bus")
      document.getElementById("mode").value="Bus"
      if(document.body.getElementsByTagName('select')[3].value=="Train")
      document.getElementById("mode").value="Train"
      if(document.body.getElementsByTagName('select')[3].value=="Others")
      document.getElementById("mode").value="Others"
  
  }

  function checks(){
    if(document.body.getElementsByTagName('select')[2].value=="Yes"){
      document.getElementsByClassName("gues")[0].style.display = "block";
      document.getElementById("require").value="Yes"
    }
    if(document.body.getElementsByTagName('select')[2].value=="No"){
      document.getElementsByClassName("gues")[0].style.display = "none";
      document.getElementById("require").value="No"
    }
  }

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

document.getElementsByClassName('btn-warning')[0].addEventListener('click',()=>{
  if(f1.style.display=="none")
  {
 f1.style.display="inline-flex";
 f2.style.display="none";
 f1.classList.add('s1down');
  }
  else if(f1.style.display=="inline-flex")
  { 
    f1.classList.remove('s1down');
    f1.classList.add('sup');
    f2.style.display="none";
   setTimeout(()=>{
    f1.style.display="none";
   },1000)
  }
 
 
});
document.getElementsByClassName('btn-outline-primary')[0].addEventListener('click',()=>{

  if(f2.style.display=="none")
  {
 f2.style.display="inline-flex";
 f1.style.display="none";
 f2.classList.add('s2down');
  }
  else if(f2.style.display=="inline-flex")
  { 
    f2.classList.remove('s2down');
    f2.classList.add('s2up');
    f1.style.display="none";
   setTimeout(()=>{
    f2.style.display="none";
   },1000)
  }

 });
//cards events

  const c=Array.from(document.getElementsByClassName('cardi')) ;
c.forEach(ele=>(
    ele.addEventListener('mouseover',function(){
        ele.classList.toggle('is-flipped');
    })
));

//support us

const pay=document.getElementsByClassName('pay')[0];
document.getElementById('yes').addEventListener('click',function(){
  pay.style.display="block";
  pay.classList.add("slidedown");
});
document.getElementById('no').addEventListener('click',function(){
    pay.classList.remove("slidedown");
    pay.classList.add("slideup");
    setTimeout(()=>{
        pay.style.display="none";
    },1000)
  });