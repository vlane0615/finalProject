

about = () => document.getElementById("about1").style.display = "block";


seo = () =>   document.getElementById("seo#1").style.display = "block";


marketing = () => {
  document.getElementById("GeneralMarketing#1").style.display = "block";
}

education = () => {
  document.getElementById("Education#1").style.display = "block";
}

function other() {
  document.getElementById("Other#1").style.display = "block";
}

function contact() {
  document.getElementById("Contact#1").style.display = "block";
}

function person() {
  document.getElementById("Personal#1").style.display = "block";
}

myFunction = img => {
    var aboutImage = document.getElementById("aboutImage")
    aboutImage.src = img.src;
    aboutImage.parentElement.style.display = "block"
  imgText.innerHTML = img.alt;
}

function invite() {
    var connect = confirm("Don't forget to fill out the contact form!")
    if (connect) {
        document.getElementById("Contact#1").style.display = "block"
    }
}

