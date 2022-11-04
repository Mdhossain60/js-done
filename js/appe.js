 let button = document.querySelector(".button")
 let body = document.querySelector('body')

 let darkIcon = document.querySelector('.button .dark')  
    let heading =  document.querySelector('.heading')
 
 button.addEventListener("click",darkmode)

 function darkmode() {
    body.classList.toggle('darkmode')

   let isDarkmode = body.classList.contains("darkmode")

   if (isDarkmode) {
    darkIcon .style .marginTop = '-100%'

    heading.innerText = "Dark Mode"

   }

     else { 
    darkIcon .style .marginTop = '0px'

    heading.innerText = "Light Mode"
    }






 }





