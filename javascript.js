const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById('typing-text');
  const staticText = 'F';
  const dynamicText = 'RONTEND DEVELOPER';
  const typingSpeed = 80; // Adjust typing speed in milliseconds
  const pauseDuration = 1200; // Pause duration between typing cycles

  let index = 0;
  let isDeleting = false;

  function typeText() {
      if (index < dynamicText.length && !isDeleting) {
          textElement.textContent = staticText + dynamicText.substring(0, index + 1);
          index++;
          setTimeout(typeText, typingSpeed);
      } else if (index > 0 && isDeleting) {
          textElement.textContent = staticText + dynamicText.substring(0, index - 1);
          index--;
          setTimeout(typeText, typingSpeed);
      } else if (index === dynamicText.length) {
          setTimeout(() => {
              isDeleting = true;
              setTimeout(typeText, typingSpeed);
          }, pauseDuration);
      } else {
          isDeleting = false;
          setTimeout(typeText, typingSpeed);
      }
  }

  // Initialize the text with the static part and start typing
  textElement.textContent = staticText;
  typeText();
});


