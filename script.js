const menu = [
    { name: "Bánh Su Kem Truyền Thống", price: 20, img: "https://picsum.photos/300/200?1" },
    { name: "Bánh Su Kem Chocolate", price: 30, img: "https://picsum.photos/300/200?2" },
    { name: "Bánh Su Kem Matcha", price: 25, img: "https://picsum.photos/300/200?3" },
    { name: "Bánh Su Kem Phô Mai", price: 35, img: "https://picsum.photos/300/200?4" },
    { name: "Bánh Su Kem Dâu", price: 28, img: "https://picsum.photos/300/200?5" },
    { name: "Bánh Su Kem Bắp", price: 22, img: "https://picsum.photos/300/200?6" },
    { name: "Bánh Su Kem Trà Xanh", price: 27, img: "https://picsum.photos/300/200?7" },
    { name: "Bánh Su Kem Caramel", price: 32, img: "https://picsum.photos/300/200?8" }
];

const menuList = document.getElementById("menuList");
const searchInput = document.getElementById("searchInput");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const letterFilter = document.getElementById("letterFilter");

function renderMenu() {
    const searchText = searchInput.value.toLowerCase();
    const minP = Number(minPrice.value);
    const maxP = Number(maxPrice.value);
    const letter = letterFilter.value;

    menuList.innerHTML = "";

    menu.forEach(item => {
        if (item.price < minP || item.price > maxP) return;
        if (!item.name.toLowerCase().includes(searchText)) return;
        if (letter !== "all" && item.name.charAt(0).toUpperCase() !== letter) return;

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${item.img}">
            <h3>${item.name}</h3>
            <p>${item.price}k</p>
        `;
        menuList.appendChild(card);
    });
}

renderMenu();

searchInput.addEventListener("input", renderMenu);
minPrice.addEventListener("input", renderMenu);
maxPrice.addEventListener("input", renderMenu);
letterFilter.addEventListener("change", renderMenu);
