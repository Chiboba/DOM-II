// Your code goes here

const contactNav = document.querySelector('.nav');
const aNav = document.querySelectorAll('a');

const imageContent = document.querySelectorAll('.img-content');
const footer = document.querySelector('footer');
const mainNav = document.querySelector('.main-navigation');
const allImg = document.querySelectorAll('img');
const allP = document.querySelectorAll('p');
const home = document.querySelector('.container.home');
const input = document.querySelector('#email');

//1
contactNav.addEventListener('mouseover', (event) => {
    event.target.style.fontWeight = 'bold';  
    event.target.style.color = "blue";
    event.stopPropagation();
});

aNav[0].addEventListener('mouseover', (event) => {
    event.target.style.color = "Orange";
});

//2
document.addEventListener('keydown', (event) => {
    imageContent[0].style.display = 'none';
    imageContent[1].style.display = 'none';
})

//3
document.addEventListener('wheel', function(event) {
    if(event.deltaY > 600 || event.deltaY < -600) {
        alert('SLOW DOWN');
    }
    // ON A MOUSE PAD YOU HAVE TO SWING YOUR FINGERS FORWARD FAST.
});

//4
footer.addEventListener('drag', (event) => {
    event.target.style.backgroundColor = 'red';
});

//5
contactNav.addEventListener('dblclick', (event) => {
    TweenMax.to(event.target.parentNode, 2, {backgroundColor:"pink", marginTop: "10%", paddingTop: "10%"});
});

//6
document.addEventListener('scroll', (event) => {
    mainNav.style.display = "none";   
}, false);

//7
window.addEventListener('resize', (event) => {
    allP[0].style.display = 'none';
    allP[1].style.display = 'none';
    allP[2].style.display = 'none';
    allP[3].style.display = 'none';
    allP[4].style.display = 'none';
    allP[5].style.display = 'none';
    allP[6].style.display = 'none';
    allP[7].style.display = 'none';
    allP[8].style.display = 'none';
})
//8
window.addEventListener("load", function(event) {
    home.style.backgroundColor = 'Yellow';
});

//9 
input.addEventListener('select', (event) => {
    alert(`Welcome`);
})

//10 

aNav[1].addEventListener('click', (event) => {
    event.target.style.color = "Orange";
    event.stopPropagation();
});




    [].forEach.call(aNav, function (curr, i) {
        aNav[i].addEventListener('click', (event) => {
            event.preventDefault();
         });
    });


