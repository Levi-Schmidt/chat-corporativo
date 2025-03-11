const hiddenButtonFiles = document.getElementById('hiddenButtonFiles');
const boxConfig = document.getElementById("simpleConfiguration");

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
    } else {
        boxConfig.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    openFiles();
    alternateConfigContacts();
});

