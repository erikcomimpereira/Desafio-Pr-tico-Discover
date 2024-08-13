function toggleMode() {
  const theme = localStorage.getItem('theme') ?? 'light';
 
  if(theme === 'light' ) {
    localStorage.setItem("theme", "dark" )
  } else {
    localStorage.setItem("theme", "light")
  }
  
  const html = document.documentElement
  html.classList.toggle("light")

  //pega a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatarlighteri.png")
  } else {
    img.setAttribute("src", "./assets/avatarerik.png")
  }
}

  const theme = localStorage.getItem('theme') ?? 'light';

  if(theme !=='light') {
    
    toggleMode();

  }
  
  console.log(theme)