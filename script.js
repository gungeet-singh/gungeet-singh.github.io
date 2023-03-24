function type()
{
    let name1="Gungeet Singh";
    let namearr=name1.split("");

    function looping()
    {
        if(namearr.length>0)
        {
            let n=namearr.shift();
            document.querySelector("#heading--main").innerHTML+=n;
        }
        else
        {
            //deleting();
            return false;
        }
        setTimeout(looping,500);
    }

    looping();
}


function deleting()
{
    nameDarr=document.querySelector("#heading--main").innerHTML.split("");
    if(nameDarr.length>0)
    {
        nameDarr.pop();
        document.querySelector("#heading--main").innerHTML=nameDarr.join("");
    }
    else
    {
        type();
        return false;
    }
    setTimeout(deleting,150)
}

type();


//skills fill effect


const square = document.querySelectorAll('.skill-line div,.work-line div');
// square.forEach(a=>a.classList.remove('animaaation'));


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animaaation');
      return;
    }

    entry.target.classList.remove('animaaation');
  });
});

square.forEach(a=>observer.observe(a))




//light dark theme
let dayN=document.querySelector("#day-night")
dayN.style.fontSize = "25px";
dayN.addEventListener("click",alter)
function alter()
{
    if(dayN.querySelector("i").classList.contains("fa-sun"))
    {
        dayN.innerHTML='<i class="fas fa-moon"></i>';
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
  

    }
    else
    {
        dayN.innerHTML='<i class="fas fa-sun"></i>';
        document.querySelector("body").classList.remove("dark");
        document.querySelector("body").classList.add("light");

    }
}


//cursor
const cursor=document.querySelector(".cursor");
document.addEventListener('mousemove',e=>{
    cursor.setAttribute("style","top: "+(e.pageY-20)+"px;left: "+(e.pageX-20)+"px");
})

let element = document.querySelectorAll("button,a");

element.forEach(a=>a.addEventListener("mouseover", function( event ) {
    cursor.classList.add("red");
},));

element.forEach(a=>a.addEventListener("mouseout", function( event ) {
    cursor.classList.remove("red");
},));



// timeline js


  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  } else {

    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }

  sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
