// app.js

const menu = [
  // ПИЦЦА
  {
    id: 1,
    name: "Ветчина и грибы",
    price: 345,
    cookTime: "33 мин",
    category: "Пицца",
    image: "https://media-cdn.restik.com/pl_demo_vitrina_usp5vqldi/0ef4125a-0c47-4af6-98e5-0df19ac0b196.jpg",
    description: "Нежная ветчина, шампиньоны и тянущийся сыр."
  },
  {
    id: 2,
    name: "Гавайская",
    price: 395,
    cookTime: "24 мин",
    category: "Пицца",
    image: "https://media-cdn.restik.com/pl_demo_vitrina_usp5vqldi/0fb45c4a-21cc-458b-86f1-1349430f90c0.jpg",
    description: "Сочная курица, ананасы и сыр моцарелла."
  },
  {
    id: 3,
    name: "Мясная",
    price: 450,
    cookTime: "35 мин",
    category: "Пицца",
    image: "https://media-cdn.restik.com/pl_demo_vitrina_usp5vqldi/fd94e36b-2c0b-4b7c-8c21-62e30f7153b8.jpg",
    description: "Несколько видов мяса для настоящих гурманов."
  },
  {
    id: 4,
    name: "Пепперони",
    price: 400,
    cookTime: "34 мин",
    category: "Пицца",
    image: "https://media-cdn.restik.com/pl_demo_vitrina_usp5vqldi/814436d7-1010-42a5-8f71-00b22819ff7b.jpg",
    description: "Классическая пицца с острой пепперони."
  },

  // БУРГЕРЫ
  {
    id: 5,
    name: "ORIGINAL Бургер",
    price: 390,
    cookTime: "35 мин",
    category: "Бургеры",
    image: "https://media-cdn.restik.com/pl_demo_vitrina_usp5vqldi/05411e07-8a23-4142-ac28-d4e26c518068.jpg",
    description: "Фирменный бургер с сочной котлетой."
  },
  {
    id: 6,
    name: "Двойной чизбургер",
    price: 495,
    cookTime: "32 мин",
    category: "Бургеры",
    image: "https://media-cdn.restik.com/pl_demo_vitrina_usp5vqldi/ec661572-9d1b-4ab0-ab32-19a6fd8090c7.jpg",
    description: "Двойная котлета и много сыра."
  },
  {
    id: 7,
    name: "Роял бургер",
    price: 450,
    cookTime: "35 мин",
    category: "Бургеры",
    image: "https://media-cdn.restik.com/pl_demo_vitrina_usp5vqldi/bf747938-2edb-4695-a52d-9042b2b00858.jpg",
    description: "Большой бургер с фирменным соусом."
  },
  {
    id: 8,
    name: "Чикенбургер",
    price: 390,
    cookTime: "16 мин",
    category: "Бургеры",
    image: "https://media-cdn.restik.com/pl_demo_vitrina_usp5vqldi/4c568acf-0426-4660-b857-6c7c84ea252c.jpg",
    description: "Хрустящая курочка и свежие овощи."
  },

  // ЗАВТРАКИ
  {
    id: 9,
    name: "Бейгл с лососем",
    price: 590,
    cookTime: "19 мин",
    category: "Завтраки",
    image: "https://media-cdn.restik.com/pl_demo_vitrina_usp5vqldi/99fb67f2-892e-402a-b47a-056cc59c1c0d.jpg",
    description: "Свежий бейгл с лососем и сливочным сыром."
  },
  {
    id: 10,
    name: "Сладкие панкейки",
    price: 199,
    cookTime: "19 мин",
    category: "Завтраки",
    image: "https://media-cdn.restik.com/pl_demo_vitrina_usp5vqldi/b011901c-f29d-4934-b22a-64f7441aea8b.jpg",
    description: "Воздушные панкейки с сиропом."
  },
  {
    id: 11,
    name: "Сладкий сэндвич с бананом и голубикой",
    price: 250,
    cookTime: "20 мин",
    category: "Завтраки",
    image: "https://media-cdn.restik.com/pl_demo_vitrina_usp5vqldi/7e24a281-238b-4fa0-9e70-2b2399dd203b.jpg",
    description: "Нежный сладкий сэндвич с ягодами."
  },
  {
    id: 12,
    name: "Сэндвич с яйцом",
    price: 350,
    cookTime: "24 мин",
    category: "Завтраки",
    image: "https://media-cdn.restik.com/pl_demo_vitrina_usp5vqldi/a332a254-1519-458c-8d87-e6e9341d0721.jpg",
    description: "Сытный сэндвич с яйцом и соусом."
  },

  // ДЕСЕРТЫ
  {
    id: 13,
    name: "Кейк со свежей малиной",
    price: 390,
    cookTime: "23 мин",
    category: "Десерты",
    image: "https://media-cdn.restik.com/pl_demo_vitrina_usp5vqldi/a389cfe9-4715-4a16-b8ea-74747f9b260c.jpg",
    description: "Нежный десерт со свежей малиной."
  },
  {
    id: 14,
    name: "Малиновый сорбет",
    price: 230,
    cookTime: "21 мин",
    category: "Десерты",
    image: "https://media-cdn.restik.com/pl_demo_vitrina_usp5vqldi/816ba522-76fb-4b7e-97f2-75b72580e049.jpg",
    description: "Освежающий ягодный сорбет."
  }
];

const categories = ["Все", "Пицца", "Бургеры", "Завтраки", "Десерты"];

const menuContainer = document.getElementById("menuContainer");
const categoriesContainer = document.getElementById("categories");
const cartBadge = document.getElementById("cartBadge");

const modalOverlay = document.getElementById("modalOverlay");
const openCartBtn = document.getElementById("openCartBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

const cartItemsContainer = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");

let selectedCategory = "Все";

let cart = JSON.parse(localStorage.getItem("cart")) || {};

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getCartCount() {
  return Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
}

function getTotalPrice() {
  return Object.values(cart).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
}

function updateBadge() {
  cartBadge.textContent = getCartCount();
}

function addToCart(productId) {
  const product = menu.find(item => item.id === productId);

  if (!cart[productId]) {
    cart[productId] = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    };
  } else {
    cart[productId].quantity++;
  }

  saveCart();
  renderMenu();
  renderCart();
  updateBadge();
}

function removeFromCart(productId) {
  if (!cart[productId]) return;

  cart[productId].quantity--;

  if (cart[productId].quantity <= 0) {
    delete cart[productId];
  }

  saveCart();
  renderMenu();
  renderCart();
  updateBadge();
}

function renderCategories() {
  categoriesContainer.innerHTML = "";

  categories.forEach(category => {
    const btn = document.createElement("button");

    btn.className = `category-btn ${
      selectedCategory === category ? "active" : ""
    }`;

    btn.textContent = category;

    btn.addEventListener("click", () => {
      selectedCategory = category;
      renderCategories();
      renderMenu();
    });

    categoriesContainer.appendChild(btn);
  });
}

function renderMenu() {
  menuContainer.innerHTML = "";

  const filteredMenu =
    selectedCategory === "Все"
      ? menu
      : menu.filter(item => item.category === selectedCategory);

  filteredMenu.forEach(item => {
    const quantity = cart[item.id]?.quantity || 0;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="image-wrapper">
        <img src="${item.image}" alt="${item.name}" />

        <div class="cook-time">
          ⏱ ${item.cookTime}
        </div>
      </div>
      <div class="card-content">
        <h3 class="card-title">${item.name}</h3>

        <p class="card-description">
          ${item.description || ""}
        </p>

        <div class="card-bottom">
          <div class="price">${item.price} ₽</div>

          <div class="counter">
            <button onclick="removeFromCart(${item.id})">−</button>

            <span>${quantity}</span>

            <button onclick="addToCart(${item.id})">+</button>
          </div>
        </div>
      </div>
    `;

    menuContainer.appendChild(card);
  });
}

function renderCart() {
  const items = Object.values(cart);

  if (!items.length) {
    cartItemsContainer.innerHTML = `
      <div class="empty">
        Корзина пуста
      </div>
    `;
  } else {
    cartItemsContainer.innerHTML = "";

    items.forEach(item => {
      const element = document.createElement("div");

      element.className = "cart-item";

      element.innerHTML = `
        <div class="cart-item-top">
          <div>
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">
              ${item.price} ₽ × ${item.quantity}
            </div>
          </div>

          <strong>
            ${item.price * item.quantity} ₽
          </strong>
        </div>

        <div class="counter">
          <button onclick="removeFromCart(${item.id})">−</button>

          <span>${item.quantity}</span>

          <button onclick="addToCart(${item.id})">+</button>
        </div>
      `;

      cartItemsContainer.appendChild(element);
    });
  }

  totalPriceEl.textContent = `${getTotalPrice()} ₽`;
}

openCartBtn.addEventListener("click", () => {
  modalOverlay.classList.add("active");
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
  }
});

renderCategories();
renderMenu();
renderCart();
updateBadge();