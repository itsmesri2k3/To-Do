var popup = document.getElementById("pop-up");
var closebtn = document.getElementById("close-btn");
var container = document.getElementById("main-box");

function additem() {
    popup.style.display = "flex";
}

function closeitem(event) {
    popup.style.display = "none";
    event.preventDefault();
}

function deleteItem(button) {
    var item = button.closest("#cart");
    item.remove();
}

var title = document.getElementById("title");
var hint = document.getElementById("hint");
var about = document.getElementById("about");
var addbtn = document.getElementById("add-btn");

function newlist(event) {
    event.preventDefault();

    var div = document.createElement("div");
    div.setAttribute("id", "cart");
    div.innerHTML = `
        <h1>${title.value}</h1>
        <h3>${hint.value}</h3>
        <p>${about.value}</p>
        <button class="btn" id="delete-btn" onclick="deleteItem(this)"><i class="fa-solid fa-xmark fa-lg"></i></button>`;
    
    container.append(div);
    popup.style.display = "none";

    title.value = "";
    hint.value = "";
    about.value = "";
}
