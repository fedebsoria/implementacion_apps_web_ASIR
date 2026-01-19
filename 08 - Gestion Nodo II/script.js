document.addEventListener("DOMContentLoaded", () => {

    const response = document.getElementById("response");
    const images = document.getElementById("imgs");
    const country = document.querySelector("#list-countries");
    const countryImgList = ["img/default.gif", "img/alemania.jpg", "img/españa.jpg", "img/francia.jpg","img/italia.jpg", "img/portugal.jpg"];
    const subtitle = "Haz seleccionado: "

    country.addEventListener("change", (e) => {
        
        let countrySelected = e.target.value;
        console.log(countrySelected);
        switch (countrySelected) {
            case "alemania":
                response.innerText = subtitle+"Alemania";
                images.setAttribute("src", countryImgList[1]);
                break;
            case "espana":
                response.innerText = subtitle+"España";
                images.setAttribute("src", countryImgList[2]);
                break;
            case "francia":
                response.innerText = subtitle+"Francia";
                images.setAttribute("src", countryImgList[3]);
                break;
            case "italia":
                response.innerText = subtitle+"Italia";
                images.setAttribute("src", countryImgList[4]);
                break;
            case "portugal":
                response.innerText = subtitle+"Portugal";
                images.setAttribute("src", countryImgList[5]);
                break;
            default:
                break;
        }
    })
})