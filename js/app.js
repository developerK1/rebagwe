//updating the copyright year
(function(){
	const currentYear = document.querySelector(".year" );

	let thisYear = new Date();
	let newYear = thisYear.getFullYear();

	currentYear.textContent = newYear ;
	currentYear.innerText = newYear;
}());
/* =============================================================== */
/* ========================= HOVER POP FORWARDS ============================= */
/* =============================================================== */
const popForward  = checkUp(document.querySelectorAll(".pop-forwards"));

if(popForward !== null){
  popForward.forEach((item) => {
    item.addEventListener("mouseover", function(){
      item.classList.add("y-zindex");
    });

    item.addEventListener("mouseout", function(){
      item.classList.remove("y-zindex");
    })
  });
}


/* =============================================================== */
/* ========================= MODALS COSTUMIZED ============================= */
/* =============================================================== */
const allCustomedModals  = document.querySelectorAll(".customed-modal");
const branchModal  = document.querySelector("#branches-modal");
const formModal  = document.querySelector("#form-modal");
const dbModal  = document.querySelector("#db-modal");



//Branche Modal Functionality;
const branchModalOpen = () => openModal(branchModal);
const branchModalClose = () => closeModal(branchModal);
//Database Modal Functionality;
const dbModalOpen = () => openModal(dbModal);


//const dbModalOpen = () => console.log(dbModal);


const dbModalClose = () => closeModal(dbModal);
//From Modal Functionality;
const formModalOpen = () => openModal(formModal);
const formModalClose = () => closeModal(formModal);


//Modal Helper Function
function openModal(modal){

  modal.classList.add("opening-modal");
  window.addEventListener("click", function(e){
    if(e.target == modal){
       closeModal(modal)
    }
  });
}

function closeModal(modal){
  modal.classList.remove("opening-modal");
}


window.addEventListener("scroll",(e)=> allCustomedModals.forEach(item =>{
let screenSize = screen.width;

  if(screenSize <= 780){
    if(item.className == "container-fluid customed-modal opening-modal" && scrollY >= 980){
      closeModal(item);
      setTimeout(()=> window.scrollTo(0, 545), 1500);
    }
  }else if(item.className == "container-fluid customed-modal opening-modal" && scrollY >= 390){
    closeModal(item);
  }

}))

/* =============================================================== */
/* ========================= Read More  ============================= */
/* =============================================================== */
let statusShowRead = false;

if(checkSingle(document.querySelector("#about-us button")) != undefined){
  let content = document.querySelector("#about-us aside .content");

  document.querySelector("#about-us button").addEventListener("click", (e)=>{
    if(statusShowRead === false){
      content.classList.add("opening-modal");
      e.target.textContent = "Read Less";

      statusShowRead = true;
    }else if (statusShowRead === true) {
      content.classList.remove("opening-modal");
      e.target.textContent = "Read More";

      statusShowRead = false;
    }
  })
}
/* =============================================================== */
/* ========================= SHARE BUTTON ============================= */
/* =============================================================== */

const shareBtn = document.querySelector("footer button a");
const shareLink = "https://rebangwefunerals.co.za";
shareBtn.href = `https://www.facebook.com/share.php?u=${shareLink}`;


/* =============================================================== */
/* ========================= HAMBURGER ============================= */
/* =============================================================== */
const hamburger = document.querySelector("#hamburger");
const hamburgerLines = Array.from(document.querySelectorAll("#hamburger .lines"));
const navLinks = document.querySelector("header article .flexy-cen ul")
let hamburgerStatus = false;


hamburger.addEventListener("click", function(){
  if(!hamburgerStatus){
    navLinks.classList.add("show-ul");
    setTimeout(()=> navLinks.classList.add("open-hamburder"), 500);

    hamburgerLines[0].classList.add("upperline");
    hamburgerLines[1].classList.add("middleline");
    hamburgerLines[2].classList.add("lowerline");

    hamburgerStatus = true;

  }else if(hamburgerStatus){
    setTimeout(()=> navLinks.classList.remove("open-hamburder"), 500);

    hamburgerLines[0].classList.remove("upperline");
    hamburgerLines[1].classList.remove("middleline");
    hamburgerLines[2].classList.remove("lowerline");

    navLinks.classList.remove("show-ul");
    hamburgerStatus = false;

  }
})


/* =============================================================== */
/* ========================= CHECK IF DOCUEMNET HAS AN ITEM ============================= */
/* =============================================================== */
function checkUp(item){

 if(item.length === 0) {
   return null;
 }
   return item;
}

function checkSingle(elem){
  if(elem !== null){
    return elem;
  }
}



















/* =============================================================== */
/* ===================== DISABLE FORM ============================= */
/* =============================================================== */
const subBtns =  checkUp(document.querySelectorAll("form button"));
const branchBtns =  checkUp(document.querySelectorAll("#branches-modal aside button"));



if(subBtns !== null){
	subBtns.forEach(btn =>{
		btn.addEventListener("click", function(e){
			e.preventDefault();
			alert("SORRY, DATABASE MISSING...!");
		});
	})
}

if(branchBtns !== null){
	branchBtns.forEach(btn =>{
		btn.addEventListener("click", function(e){
			alert("SORRY,Google intergrations missing...!");
		});
	})
}
