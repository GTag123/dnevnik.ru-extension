let url = chrome.extension.getURL('images/alien.gif');
document.getElementById("content").style.backgroundImage = `url(${url})`

let table = document.querySelector("#journal > tbody");
if ( table ) {
    let author = document.createElement("tr");
    author.innerHTML = "<th colspan='7'>Script by <a href='//vk.com/id239188570' target='_blank'>Tagir</a></th>";
    table.insertBefore(author, document.querySelector("tr"));
    let elements = table.getElementsByTagName("tr");
    for ( let i = 3; i < elements.length; i++) {
        let marks = elements[i].querySelectorAll("span"),
            total = 0;
        marks.forEach(mark => {
            total += +mark.textContent
        });
        let blocks = elements[i].getElementsByTagName("td"),
            str = isNaN(total / marks.length) ? "" : `<span class='premark'>${(total / marks.length).toFixed(2).toString()}</span>`;
        if (!blocks[blocks.length - 1].innerHTML) {
            blocks[blocks.length - 1].innerHTML = str;
        }
    }
}