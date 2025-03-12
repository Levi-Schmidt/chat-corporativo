const hiddenButtonFiles = document.getElementById('hiddenButtonFiles');
const boxConfig = document.getElementById("simpleConfiguration");
const boxOptions = document.getElementById("popUpOptions")

function openFiles() {
    if (hiddenButtonFiles.style.visibility === "hidden") {
        hiddenButtonFiles.style.visibility = "visible";
    } else {
        hiddenButtonFiles.style.visibility = 'hidden';
    }
}

function alternateConfigContacts() {
    if (boxConfig.style.display === "none") {
        boxConfig.style.display = "flex";
        if (boxConfig.style.display === "flex") {
            boxOptions.style.display = "none"; 
        }
    } else {
        boxConfig.style.display = "none";
    }
}

function openOptions() {

    if (boxOptions.style.display === "none" || boxOptions.style.display === "") {
        boxOptions.style.display = "flex";
        if (boxConfig.style.display === "flex") {
            boxOptions.style.display = "none"; 
        }
    } else {
        boxOptions.style.display = "none";
    }
}

// hover da scrollbar
const targetElement = document.getElementById("contacts");

targetElement.addEventListener("mouseenter", () => {
    document.documentElement.style.setProperty("--scrollbar-color", "#000000"); 
});
targetElement.addEventListener("mouseleave", () => {
    document.documentElement.style.setProperty("--scrollbar-color", "gray"); 
});

document.addEventListener('DOMContentLoaded', function() {
    openFiles();
    alternateConfigContacts();
});

//div arrastável
const dragPopUp = document.getElementById("popUpNotifications");

let offsetX, offsetY, isDragging = false;

dragPopUp.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - dragPopUp.getBoundingClientRect().left;
    offsetY = e.clientY - dragPopUp.getBoundingClientRect().top;
    dragPopUp.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        dragPopUp.style.left = `${e.clientX - offsetX}px`;
        dragPopUp.style.top = `${e.clientY - offsetY}px`;
        dragPopUp.style.position = "absolute";
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    dragPopUp.style.cursor = "grab";
});
