const menu = [
    { 
        name: "🎂 1. Tiramisu", 
        rating: 5,
        img: "assets/sk1.jpg",
        ingredients: [
            "300g bánh ladyfinger",
            "250g kem mascarpone",
            "3 quả trứng (lấy lòng đỏ)",
            "80g đường",
            "250ml cà phê đen",
            "30ml rượu Rhum hoặc Marsala (không bắt buộc)",
            "Bột cacao để rắc",
        ],
        steps: [
            "Đánh lòng đỏ trứng + đường đến khi vàng nhạt.",
            "Thêm mascarpone, trộn mịn.",
            "Nhúng nhanh bánh ladyfinger vào cà phê.",
            "Xếp 1 lớp bánh → 1 lớp kem → lặp lại.",
            "Để tủ lạnh 4–6 giờ, rắc cacao lên mặt rồi thưởng thức.",
        ]
    },
    {
        name: "🍓 2. Bánh Mousse Dâu",
        rating: 5,
        img: "assets/sk2.jpg",
        ingredients: [
            "Dâu tây tươi: 200 g",
            "Đường: 60 g",
            "Kem tươi (whipping cream): 200 ml",
            "Gelatin: 5 g",
            "Sữa tươi không đường: 50 ml",
            "Đế bánh bông lan mỏng hoặc bánh quy nghiền",
        ],
        steps: [
            "Ngâm gelatin trong 20 ml nước lạnh cho nở.",
            "Xay dâu + đường → lọc lấy nước.",
            "Đun ấm sữa, cho gelatin vào khuấy tan.",
            "Trộn hỗn hợp gelatin với nước dâu.",
            "Đánh whipping cream đến bông mềm rồi trộn vào hỗn hợp dâu.",
            "Đổ lên đế bánh và để lạnh ít nhất 4 giờ.",
        ]
    },
    {
        name: "🥐 3. Bánh Su Kem (Choux Cream)",
        rating: 5,
        img: "assets/sk3.jpg",
        ingredients: [
            "Bột mì: 120 g",
            "Bơ: 60 g",
            "Nước: 150 ml",
            "Trứng: 3 quả",
            "Muối: 1 nhúm",
            "Sữa tươi: 250 ml",
            "Đường: 50 g",
            "Trứng: 2 lòng đỏ",
            "Bột bắp: 20 g",
            "Vanilla: 1 muỗng",
        ],
        steps: [
            "Đun bơ + nước + muối đến sôi.",
            "Cho bột mì vào, khuấy đến khi bột khô và rời nồi.",
            "Tắt bếp, cho từng quả trứng vào đánh đến khi mịn.",
            "Bắt bột thành hình trên khay và nướng 200°C trong 20–25 phút.",
            "Nấu nhân kem bằng cách trộn sữa, đường, trứng, bột bắp – đun đến sệt.",
            "Khi vỏ bánh nguội, bơm nhân kem vào bên trong.",
        ]
    },
    {
        name: "🍮 4. Bánh Cheesecake (Không nướng)",
        rating: 5,
        img: "assets/sk4.jpg",
        ingredients: [
            "Bánh quy (digestive): 150 g",
            "Bơ tan chảy: 60 g",
            "Cream cheese: 250 g",
            "Đường: 70 g",
            "Whipping cream: 200 ml",
            "Gelatin: 7 g",
            "Nước cốt chanh: 1 muỗng",
        ],
        steps: [
            "Nghiền bánh quy + trộn với bơ → ép xuống đáy khuôn.",
            "Ngâm gelatin trong nước lạnh, sau đó đun tan.",
            "Đánh cream cheese + đường đến mịn, thêm chanh.",
            "Đánh whipping cream bông mềm rồi trộn vào.",
            "Cho gelatin vào, trộn đều.",
            "Đổ lên đế bánh và để lạnh 4–6 giờ.",
        ]
    },
    {
        name: "🍬 5. Bánh Macaron",
        rating: 5,
        img: "assets/sk5.jpg",
        ingredients: [
            "Bột hạnh nhân mịn: 100 g",
            "Đường bột: 100 g",
            "Lòng trắng trứng: 2 quả",
            "Đường cát: 50 g",
            "Màu thực phẩm (tùy chọn)",
            "Nhân: kem bơ, ganache hoặc mứt",
        ],
        steps: [
            "Rây bột hạnh nhân + đường bột.",
            "Đánh lòng trắng trứng → thêm đường, đánh đến bông cứng.",
            "Fold bột vào lòng trắng đến khi hỗn hợp chảy thành dải.",
            "Bắt thành hình tròn nhỏ trên khay, để khô mặt 30–45 phút.",
            "Nướng 150°C trong 12–15 phút.",
            "Phết nhân và kẹp hai mặt lại.",
        ]
    },
    {
        name: "🍫 6. Bánh Brownie Socola",
        rating: 5,
        img: "assets/sk6.jpg",
        ingredients: [
            "Socola đen: 200 g",
            "Bơ: 120 g",
            "Đường: 150 g",
            "Trứng: 3 quả",
            "Bột mì: 100 g",
            "Bột cacao: 20 g",
            "Vanilla: 1 muỗng",
            "Hạt óc chó (tùy chọn)",
        ],
        steps: [
            "Đun chảy socola + bơ.",
            "Đánh trứng + đường rồi cho hỗn hợp socola vào.",
            "Rây bột mì + cacao → trộn đều.",
            "Thêm hạt nếu thích.",
            "Đổ vào khuôn và nướng 170°C trong 20–25 phút (không nướng quá khô).",
        ]
    },
];

const menuList = document.getElementById("menuList");
const searchInput = document.getElementById("searchInput");
const ratingFilter = document.getElementById("ratingFilter");
const modal = document.getElementById("recipeModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close");

function renderMenu() {
    const searchText = searchInput.value.toLowerCase();
    const minRating = ratingFilter.value === "all" ? 0 : Number(ratingFilter.value);

    menuList.innerHTML = "";

    menu.forEach((item, index) => {
        if (minRating > 0 && item.rating < minRating) return;
        if (!item.name.toLowerCase().includes(searchText)) return;

        const stars = "⭐".repeat(item.rating);

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="card-content">
                <h3>${item.name}</h3>
                <div class="rating">${stars}</div>
                <button class="view-recipe-btn" onclick="showRecipe(${index})">
                    Xem công thức 📖
                </button>
            </div>
        `;
        menuList.appendChild(card);
    });
}

function showRecipe(index) {
    const item = menu[index];
    modalTitle.textContent = item.name;
    
    modalBody.innerHTML = `
        <div class="recipe-section">
            <h3>🥘 Nguyên liệu</h3>
            <ul>
                ${item.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
        </div>
        
        <div class="recipe-section">
            <h3>👨‍🍳 Các bước thực hiện</h3>
            <ul class="steps">
                ${item.steps.map(step => `<li>${step}</li>`).join('')}
            </ul>
        </div>
    `;
    
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

renderMenu();

searchInput.addEventListener("input", renderMenu);
ratingFilter.addEventListener("change", renderMenu);

// Expose showRecipe to global scope
window.showRecipe = showRecipe;