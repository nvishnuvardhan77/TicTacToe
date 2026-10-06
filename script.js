let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

mode.addEventListener("mouseover", () => {
    if(currMode === "light"){
        console.log("Dark Mode Enabled");
        body.classList.remove("light");
        body.classList.add("dark");
        currMode = "dark";
    }
    else{
        console.log("Light Mode Enabled");
        body.classList.remove("dark");
        body.classList.add("light");
        currMode = "light";
    }
});
