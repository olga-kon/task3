const body = document.querySelector(".body");
let themeColor = window.localStorage.getItem("tema");
if (themeColor) selectTheme(themeColor);
    console.log(themeColor);
    updateRadio(themeColor);


function selectTheme(theme) {
    switch(theme) {
        case "dark":
            console.log("dark");
            body.classList.remove("light");
            body.classList.add("dark");
            window.localStorage.setItem("tema", "dark");
        break;

        case "light":
            body.classList.remove("dark");
            body.classList.add("light");
            window.localStorage.setItem("tema", "light");

        break;

        default:
        break;
    }
    }



const radios = document.querySelectorAll('input[name="theme"]');

radios.forEach( x => {
    x.addEventListener("change", function() {
   //console.dir(this.value);
   selectTheme(this.value);
    /*switch(this.value) {
        case "dark":
            console.log("dark");
            body.classList.remove("light");
            body.classList.add("dark");
            window.localStorage.setItem("tema", "dark");
        break;

        case "light":
            body.classList.remove("dark");
            body.classList.add("light");
            window.localStorage.setItem("tema", "light");

        break;

        default:
        break;
    }*/
    })
});

window.addEventListener('DOMConteneLoaded', function() {

})

function updateRadio(value) {
    switch (value) {
        case "dark":
            document.getElementById("darkM").checked = true;
            document.getElementById("lightM").checked = false;

            break;

            case "light":
                document.getElementById("lightM").checked = true;
                document.getElementById("darkM").checked = false;

                break;
    
        default: 
        document.getElementById("lightM").checked = true;
        document.getElementById("darkM").checked = false;


            break;
    }
}