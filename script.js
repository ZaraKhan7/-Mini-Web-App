const products = [
    {
        id: 1,
        name: "Luxury Embroidered Suit",
        price: 12000,
        image: "https://cdn.shopify.com/s/files/1/2337/7003/files/media_image-174173348199050_0199dd6f-73af-4f8b-b02e-4690f09c21ee.jpg?v=1747063812&width=300"
    },
    {
        id: 2,
        name: "Off White Farshi Salwar",
        price: 24000,
        image: "https://assets2.andaazfashion.com/media/catalog/product/c/r/crepe-off-white-sequins-embroidered-farshi-salwar-suit-lstv139578-1.jpg"
    },
    {
        id: 3,
        name: "Modern Printed Outfit",
        price: 11000,
        image: "https://cdn.shopify.com/s/files/1/0611/8585/1568/files/W.SS26.159.T-1_533x.jpg?v=1777012455"
    },
    {
        id: 4,
        name: "Elegant Festive Wear",
        price: 13999,
        image: "https://www.shaebiz.com/cdn/shop/files/W.SS24.277.T-1_1946x_a484304e-20a2-4a4d-ade4-bec9a51cb6bc.jpg?v=1734004734"
    },
    {
        id: 5,
        name: "Soft Pastel Collection",
        price: 29000,
        image: "https://www.rabiazahur.com/images/thumbs/0004066_areha_1000.jpeg"
    },
    {
        id: 6,
        name: "Ballerina Embroidered 3PC",
        price: 16000,
        image: "https://luxeurs.com/cdn/shop/files/LuxeursBallerinaEmbroidered3pc_11_8519a843-2b07-49f8-906a-ea9becb81e3b.jpg?v=1769203759&width=2972"
    },
    {
        id: 7,
        name: "Premium Embroidered Dress",
        price: 17000,
        image: "https://s.alicdn.com/@sc04/kf/Af424d00c1b9e40548037aab219287f47q.jpg"
    },
    {
        id: 8,
        name: "Traditional Luxury Outfit",
        price: 28000,
        image: "https://thelibas.com/wp-content/uploads/2022/09/G.jpg"
    },
    {
        id: 9,
        name: "Elegant Party Wear",
        price: 25500,
        image: "https://st1.bollywoodlife.com/wp-content/uploads/2025/01/Ayeza-Khan-3.jpg?impolicy=Medium_Widthonly&w=400&h=711"
    },
    {
        id: 10,
        name: "Pink Embroidered Salwar",
        price: 10000,
        image: "https://cdn.sareeka.com/image/data2023/faux-georgette-embroidered-pink-salwar-kameez-248171.jpg"
    },
    {
        id: 11,
        name: "Sky Blue Wedding Collection",
        price: 20000,
        image: "https://www.nameerabyfarooq.com/cdn/shop/products/SilkSkyBlueSalwarKameezPakistaniWeddingDresses_620x.jpg?v=1676530234"
    },
    {
        id: 12,
        name: "Luxury Formal Wear",
        price: 32000,
        image: "https://empress-clothing.com/cdn/shop/files/Denisa-A.jpg?v=1778136820&width=1080"
    },
    {
        id: 13,
        name: "Traditional Bridal Outfit",
        price: 26000,
        image: "https://i.etsystatic.com/64399215/r/il/2a03bc/8041074915/il_fullxfull.8041074915_otr7.jpg"
    }
];
let cart = [];
const productContainer = document.getElementById('product-container');
function displayProducts() {
    productContainer.innerHTML = ''; 
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <div class="img-container">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>PKR ${product.price.toLocaleString()}</p>
                <button class="add-btn" onclick="addToCart(${product.id})">Add to Bag</button>
            </div>
        `;
        productContainer.appendChild(card);
    });
}
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('open');
}
function addToCart(productId) {
    const targetProduct = products.find(p => p.id === productId);
    cart.push(targetProduct);
    updateCartUI();   
    document.getElementById('cart-sidebar').classList.add('open');
    document.getElementById('cart-overlay').classList.add('open');
}
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}
function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price; 
        const itemRow = document.createElement('div');
        itemRow.classList.add('cart-item');
        itemRow.innerHTML = `
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>PKR ${item.price.toLocaleString()}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">✕</button>
        `;
        cartItemsContainer.appendChild(itemRow);
    });   
    document.getElementById('cart-total-price').innerText = total.toLocaleString();
}
displayProducts();