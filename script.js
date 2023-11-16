const elMainList = document.querySelector(".main-list");

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => data.splice(0, 21).forEach(element => {
    const elMainItem = document.createElement("li");
    const elMainId = document.createElement("span");
    const elItemName = document.createElement("strong");
    const elMainDecription = document.createElement("p");

    elMainItem.className = "main-item";
    elMainId.className = "item-id";
    elItemName.className = "item-name";
    elMainDecription.className = "item-desc";

    elMainId.textContent = element.id;
    elItemName.textContent = element.title;
    elMainDecription.textContent = element.body

    elMainItem.append(elMainId, elItemName, elMainDecription);
    elMainList.appendChild(elMainItem)
})
)