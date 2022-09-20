/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


// Define Global Variables
  const Frag = document.createDocumentFragment();     //for performance
const ALLSections = document.querySelectorAll("section");   //element have all sections
const UL = document.getElementById("navbar__list");   //get ul to put li links in it 
 
//End Global Variables


//Start Helper Functions
//Create sections on nav bar and Click on section and go to it 
ALLSections.forEach(create);
function create(item){
    let Link = document.createElement("a"); //create link 
    let textoflink = item.getAttribute("data-nav"); //get content of section 
    Link.textContent = textoflink;
    let LI = document.createElement("li"); // create li to add on ul 
    Link.classList.add("menu__link"); 
    LI.appendChild(Link);

    // Scroll to section on link click
    Link.addEventListener("click", () => {
        item.scrollIntoView({ behavior: "smooth" });
    });
    //add all thing we did in fragment 
    Frag.appendChild(LI);
}
//after that add fragment in ul 
UL.appendChild(Frag);


//function that made the active class in every section when we go to it 
    function ActiveSection (){
    window.addEventListener("scroll" , ()=>{
        ALLSections.forEach((singleSec)=>{
            const distance = singleSec.getBoundingClientRect().top; 
            //alert(singleSec.getAttribute("data-nav") + " " + distance); // get all distane of section from top 
            if (distance > 0 && distance < 460){  // condition of when we do our active class
                //remove 
                const NAV = singleSec.getAttribute("data-nav");
                ALLSections.forEach((active)=>{
                  active.classList.remove("your-active-class");

                })
                singleSec.classList.add("your-active-class");
                let ALLLinks = document.querySelectorAll("a");
                ALLLinks.forEach((SingleLink)=>{
                    if (SingleLink.innerText == NAV){
                        ALLLinks.forEach((ClickLink)=>{
                        ClickLink.classList.remove("your-active-link");
                        })
                        SingleLink.classList.add("your-active-link");
                    }
                 
                });   
            }
        });
    });

    };
    ActiveSection();

 
 



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Set sections as active


