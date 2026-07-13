const products = [
    {
        id: 1,
        name: "Luxury Embroidered Suit",
        price: 12000,
        category: "Pret",
        description: "A hand-finished three-piece suit featuring dense thread embroidery across the neckline and hem, cut from a breathable premium blend for all-day comfort.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.8,
        stock: 15,
        image: "https://cdn.shopify.com/s/files/1/2337/7003/files/media_image-174173348199050_0199dd6f-73af-4f8b-b02e-4690f09c21ee.jpg?v=1747063812&width=300"
    },
    {
        id: 2,
        name: "Off White Farshi Salwar",
        price: 14000,
        category: "Wedding Festive",
        description: "A regal farshi silhouette in crepe, finished with sequin embroidery and a dramatic floor-sweeping trail — designed for the bridal party that wants old-world grandeur.",
        sizes: ["S", "M", "L"],
        rating: 4.9,
        stock: 6,
        image: "https://assets2.andaazfashion.com/media/catalog/product/c/r/crepe-off-white-sequins-embroidered-farshi-salwar-suit-lstv139578-1.jpg"
    },
    {
        id: 3,
        name: "Modern Printed Outfit",
        price: 8000,
        category: "Pret",
        description: "A clean, contemporary print on lightweight fabric with a relaxed fit — an easy everyday layer for the woman who wants comfort without compromising on style.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        stock: 22,
        image: "https://cdn.shopify.com/s/files/1/0611/8585/1568/files/W.SS26.159.T-1_533x.jpg?v=1777012455"
    },
    {
        id: 4,
        name: "Elegant Festive Wear",
        price: 17999,
        category: "Wedding Festive",
        description: "Festive tailoring with subtle metallic thread accents, cut for movement and finished with a hand-rolled hem — built for evenings that call for a little more shine.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.6,
        stock: 11,
        image: "https://www.shaebiz.com/cdn/shop/files/W.SS24.277.T-1_1946x_a484304e-20a2-4a4d-ade4-bec9a51cb6bc.jpg?v=1734004734"
    },
    {
        id: 5,
        name: "Soft Pastel Collection",
        price: 21000,
        category: "Luxury Collection",
        description: "Soft pastel tones layered with delicate mirror-work, tailored from premium unstitched lawn — a signature ZYRA piece made for the discerning collector.",
        sizes: ["M", "L", "XL"],
        rating: 4.9,
        stock: 4,
        image: "https://www.rabiazahur.com/images/thumbs/0004066_areha_1000.jpeg"
    },
    {
        id: 6,
        name: "Ballerina Embroidered 3PC",
        price: 16000,
        category: "Pret",
        description: "Three-piece ensemble with ballerina-inspired embroidery on the bodice, paired with a flowing dupatta — poised and wearable from day to night.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.7,
        stock: 18,
        image: "https://luxeurs.com/cdn/shop/files/LuxeursBallerinaEmbroidered3pc_11_8519a843-2b07-49f8-906a-ea9becb81e3b.jpg?v=1769203759&width=2972"
    },
    {
        id: 7,
        name: "Simple Embroidered Dress",
        price: 17000,
        category: "Unstitched",
        description: "Premium unstitched fabric with pre-embroidered panels, ready for your tailor to shape into a custom silhouette that fits exactly how you want it to.",
        sizes: ["S", "M", "L"],
        rating: 4.4,
        stock: 9,
        image: "https://s.alicdn.com/@sc04/kf/Af424d00c1b9e40548037aab219287f47q.jpg"
    },
    {
        id: 8,
        name: "Traditional Luxury Outfit",
        price: 18500,
        category: "Luxury Collection",
        description: "A traditional silhouette rebuilt in luxury fabric with intricate zari work throughout — a statement outfit for the season's most important occasions.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.8,
        stock: 7,
        image: "https://thelibas.com/wp-content/uploads/2022/09/G.jpg"
    },
    {
        id: 9,
        name: "Elegant Party Wear",
        price: 15500,
        category: "Wedding Festive",
        description: "Party-ready tailoring finished with hand-embellished detailing at the neckline — designed to hold its shape and shine from the first dance to the last.",
        sizes: ["S", "M", "L"],
        rating: 4.6,
        stock: 5,
        image: "https://st1.bollywoodlife.com/wp-content/uploads/2025/01/Ayeza-Khan-3.jpg?impolicy=Medium_Widthonly&w=400&h=711"
    },
    {
        id: 10,
        name: "Pink Embroidered Dress",
        price: 10000,
        category: "Pret",
        description: "Faux georgette salwar kameez with fine floral embroidery in a soft rose palette — lightweight, breathable, and easy to style for daytime events.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.3,
        stock: 26,
        image: "https://www.nameerabyfarooq.com/cdn/shop/files/StunningShockingPinkEmbroideredPakistaniSalwarKameezSuit_620x.jpg?v=1699884572"
    },
    {
        id: 11,
        name: "Sky Blue Wedding Collection",
        price: 11500,
        category: "Wedding Festive",
        description: "Pure silk in a serene sky-blue tone, tailored for wedding guests who want something memorable without heavy embellishment.",
        sizes: ["S", "M", "L"],
        rating: 4.7,
        stock: 8,
        image: "https://www.nameerabyfarooq.com/cdn/shop/products/SilkSkyBlueSalwarKameezPakistaniWeddingDresses_620x.jpg?v=1676530234"
    },
    {
        id: 12,
        name: "Luxury Formal Wear",
        price: 17000,
        category: "Luxury Collection",
        description: "Our most formal piece — richly layered embroidery on a structured base, made for galas, receptions, and the moments that call for full couture.",
        sizes: ["M", "L", "XL"],
        rating: 5.0,
        stock: 3,
        image: "https://empress-clothing.com/cdn/shop/files/Denisa-A.jpg?v=1778136820&width=1080"
    },
    {
        id: 13,
        name: "Rosé Dawn Ombre",
        price: 16000,
        category: "Wedding Festive",
        description: "A graceful ombré ensemble featuring soft ivory-to-rose tones and delicate embellishments, perfect for festive celebrations and special occasions.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.9,
        stock: 6,
        image: "https://i.etsystatic.com/64399215/r/il/2a03bc/8041074915/il_fullxfull.8041074915_otr7.jpg"
    },
    {
        id: 14,
        name: "Noor-e-Zard Festive Lawn",
        price: 12500,
        category: "Pret",
        description: "A premium lawn ensemble from Noor-e-Zard's festive edit, featuring rich prints and refined tailoring for everyday elegance.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.6,
        stock: 14,
        image: "https://empirescollection.pk/wp-content/uploads/Mushq-women-new-dress-design-original-brand-empires-collection-buy-Lawn-Dresses-Online-Pakistan-best-clothing-brand-Fashion-2025-festive.jpg"
    },
    {
        id: 15,
        name: "Gulnaar Ensemble",
        price: 19500,
        category: "Wedding Festive",
        description: "A finely embroidered party ensemble with detailed handwork, designed for celebrations that call for a little extra shine.",
        sizes: ["S", "M", "L"],
        rating: 4.7,
        stock: 10,
        image: "https://cdn.shopify.com/s/files/1/0886/0726/0970/files/sp4_59a1200d-e466-4ecd-a331-f2db687e5478_1024x1024.jpg?v=1739341700"
    },
    {
        id: 16,
        name: "Elegant Eid Lawn Suit",
        price: 14000,
        category: "Pret",
        description: "An Elegant lawn suit from the Eid edit, blending signature prints with a comfortable, breathable cut for festive daywear.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.8,
        stock: 16,
        image: "https://empirescollection.pk/wp-content/uploads/Asim-Jofa-women-new-dress-design-original-brand-empires-collection-Lawn-Dresses-Online-Pakistan-best-clothing-brand-Fashion-2025-eid-festive.jpg"
    },
    {
        id: 17,
        name: "Sapphire Ivory Eid Suit",
        price: 13500,
        category: "Pret",
        description: "A sunny Ivory lawn suit from Sapphire's latest Eid collection, styled with bold prints for a fresh, festive daytime look.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        stock: 15,
        image: "https://empirescollection.pk/wp-content/uploads/Sapphire-women-new-yellow-dress-design-original-brand-empires-collection-buy-online-Pakistan-best-clothing-brand-girls-latest-fashion-2025-eid-1.jpg"
    },
    {
        id: 18,
        name: "Husn Unstitched Suit",
        price: 11000 ,
        category: "Unstitched",
        description: "An unstitched three-piece suit ready for your tailor, featuring premium fabric and detailed embroidery panels for a custom fit.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.4,
        stock: 18,
        image: "https://finalchoice.com.pk/cdn/shop/files/I-201Husn_1.jpg?v=1741257374"
    },
    {
        id: 19,
        name: "Enroba Embellished Dress",
        price: 17000,
        category: "Luxury Collection",
        description: "A richly embellished piece from Enroba, tailored with intricate detailing for evenings that call for full couture.",
        sizes: ["S", "M", "L"],
        rating: 4.9,
        stock: 8,
        image: "https://enroba.com/cdn/shop/files/MTB03146_1800x1800_d6511598-4cdd-4cec-a65c-769b731b3eb1.webp?v=1722805661"
    },
    {
        id: 20,
        name: "Imperial Black Eid Dress",
        price: 15000,
        category: "Pret",
        description: "Our signature lawn suit, prized for its refined prints and effortless silhouette — a wardrobe staple for the summer season.",
        sizes: ["S", "M", "L", "XL"],
        rating: 4.7,
        stock: 20,
        image: "https://www.stylesgap.com/wp-content/uploads/2021/03/Maria-B-Lawn-Collection-2022-Best-Pakistani-Designer-Summer-Dresses-34.jpg"
    }
];

const STORAGE_CART = "zyra_cart";
const STORAGE_WISHLIST = "zyra_wishlist";

let cart = loadFromStorage(STORAGE_CART, []);
let wishlist = loadFromStorage(STORAGE_WISHLIST, []);

let activeCategory = "All";
let searchTerm = "";
let sortMode = "default";

let currentModalProduct = null;
let currentModalSize = null;
let currentModalQty = 1;

function loadFromStorage(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
        return fallback;
    }
}

function saveToStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
    }
}


const productContainer = document.getElementById("product-container");
const noResultsEl = document.getElementById("noResults");
const resultsMetaEl = document.getElementById("resultsMeta");

function getVisibleProducts() {
    let list = products.filter(p => {
        const matchesCategory = activeCategory === "All" || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    switch (sortMode) {
        case "price-asc":
            list = list.slice().sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            list = list.slice().sort((a, b) => b.price - a.price);
            break;
        case "name-asc":
            list = list.slice().sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "name-desc":
            list = list.slice().sort((a, b) => b.name.localeCompare(a.name));
            break;
    }
    return list;
}

function renderStars(rating) {
    const full = Math.round(rating);
    return "★".repeat(full) + "☆".repeat(5 - full) + ` <span style="color:#999">(${rating.toFixed(1)})</span>`;
}

function displayProducts() {
    const visible = getVisibleProducts();
    productContainer.innerHTML = "";

    noResultsEl.hidden = visible.length !== 0;
    resultsMetaEl.textContent = visible.length
        ? `Showing ${visible.length} of ${products.length} pieces`
        : "";

    visible.forEach((product, i) => {
        const isFav = wishlist.includes(product.id);
        const lowStock = product.stock <= 5;

        const card = document.createElement("div");
        card.classList.add("product-card");
        card.style.animationDelay = `${Math.min(i, 8) * 0.05}s`;
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `View details for ${product.name}`);

        card.innerHTML = `
            <div class="img-container">
                ${lowStock ? `<span class="stock-tag">Only ${product.stock} left</span>` : ""}
                <button class="card-favorite ${isFav ? "active" : ""}" aria-label="Toggle wishlist for ${product.name}" data-id="${product.id}">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="${isFav ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
                </button>
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3>${product.name}</h3>
                <p class="product-rating">${renderStars(product.rating)}</p>
                <p class="price">PKR ${product.price.toLocaleString()}</p>
                <button class="add-btn" data-id="${product.id}" ${product.stock === 0 ? "disabled" : ""}>
                    ${product.stock === 0 ? "Out of Stock" : "Add to Bag"}
                </button>
            </div>
        `;

        card.addEventListener("click", (e) => {
            if (e.target.closest("button")) return;
            openProductModal(product.id);
        });
        card.addEventListener("keydown", (e) => {
            if ((e.key === "Enter" || e.key === " ") && !e.target.closest("button")) {
                e.preventDefault();
                openProductModal(product.id);
            }
        });

        productContainer.appendChild(card);
    });

    productContainer.querySelectorAll(".quick-view-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            openProductModal(Number(btn.dataset.id));
        });
    });

    productContainer.querySelectorAll(".card-favorite").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleWishlist(Number(btn.dataset.id));
        });
    });

    productContainer.querySelectorAll(".add-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const product = products.find(p => p.id === Number(btn.dataset.id));
            addToCart(product, product.sizes[0], 1);
        });
    });
}

const productModal = document.getElementById("productModal");

function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    currentModalProduct = product;
    currentModalSize = product.sizes[0];
    currentModalQty = 1;

    document.getElementById("modalImg").src = product.image;
    document.getElementById("modalImg").alt = product.name;
    document.getElementById("modalCategory").textContent = product.category;
    document.getElementById("modalProductName").textContent = product.name;
    document.getElementById("modalRating").innerHTML = renderStars(product.rating);
    document.getElementById("modalPrice").textContent = `PKR ${product.price.toLocaleString()}`;
    document.getElementById("modalDesc").textContent = product.description;
    document.getElementById("qtyValue").textContent = "1";

    const stockEl = document.getElementById("modalStock");
    if (product.stock === 0) {
        stockEl.textContent = "Currently out of stock";
        stockEl.classList.add("low");
    } else if (product.stock <= 5) {
        stockEl.textContent = `Only ${product.stock} left in stock — order soon`;
        stockEl.classList.add("low");
    } else {
        stockEl.textContent = "In stock and ready to ship";
        stockEl.classList.remove("low");
    }

    const sizeWrap = document.getElementById("sizeOptions");
    sizeWrap.innerHTML = "";
    product.sizes.forEach(size => {
        const btn = document.createElement("button");
        btn.className = "size-btn" + (size === currentModalSize ? " selected" : "");
        btn.textContent = size;
        btn.setAttribute("aria-pressed", size === currentModalSize ? "true" : "false");
        btn.addEventListener("click", () => {
            currentModalSize = size;
            sizeWrap.querySelectorAll(".size-btn").forEach(b => {
                b.classList.remove("selected");
                b.setAttribute("aria-pressed", "false");
            });
            btn.classList.add("selected");
            btn.setAttribute("aria-pressed", "true");
        });
        sizeWrap.appendChild(btn);
    });

    const addBtn = document.getElementById("modalAddBtn");
    addBtn.disabled = product.stock === 0;
    addBtn.textContent = product.stock === 0 ? "Out of Stock" : "Add to Bag";

    const wishBtn = document.getElementById("modalWishlistBtn");
    wishBtn.classList.toggle("active", wishlist.includes(product.id));

    productModal.hidden = false;
    document.body.classList.add("overlay-active");
    document.getElementById("modalClose").focus();
}

function closeProductModal() {
    productModal.hidden = true;
    document.body.classList.remove("overlay-active");
    currentModalProduct = null;
}

document.getElementById("modalClose").addEventListener("click", closeProductModal);
productModal.addEventListener("click", (e) => {
    if (e.target === productModal) closeProductModal();
});

document.getElementById("qtyMinus").addEventListener("click", () => {
    if (currentModalQty > 1) {
        currentModalQty--;
        document.getElementById("qtyValue").textContent = currentModalQty;
    }
});
document.getElementById("qtyPlus").addEventListener("click", () => {
    if (currentModalProduct && currentModalQty < currentModalProduct.stock) {
        currentModalQty++;
        document.getElementById("qtyValue").textContent = currentModalQty;
    } else {
        showToast("Reached available stock limit");
    }
});

document.getElementById("modalAddBtn").addEventListener("click", () => {
    if (!currentModalProduct) return;
    addToCart(currentModalProduct, currentModalSize, currentModalQty);
    closeProductModal();
});

document.getElementById("modalWishlistBtn").addEventListener("click", () => {
    if (!currentModalProduct) return;
    toggleWishlist(currentModalProduct.id);
    document.getElementById("modalWishlistBtn").classList.toggle("active", wishlist.includes(currentModalProduct.id));
});

function addToCart(product, size, qty) {
    const existing = cart.find(item => item.id === product.id && item.size === size);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: size,
            qty: qty
        });
    }
    saveToStorage(STORAGE_CART, cart);
    updateCartUI();
    openCart();
    showToast(`${product.name} added to bag`);
}

function changeCartQty(index, delta) {
    const item = cart[index];
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart.splice(index, 1);
    }
    saveToStorage(STORAGE_CART, cart);
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveToStorage(STORAGE_CART, cart);
    updateCartUI();
    showToast("Item removed from bag");
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cart-count").textContent = totalItems;
    document.getElementById("cart-item-count").textContent = totalItems;

    const container = document.getElementById("cart-items");
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = `<p class="empty-state">Your bag is empty. Explore the collection to find your next piece.</p>`;
    } else {
        cart.forEach((item, index) => {
            const row = document.createElement("div");
            row.classList.add("cart-item");
            row.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-meta">Size: ${item.size}</p>
                    <div class="cart-item-bottom">
                        <div class="mini-qty">
                            <button aria-label="Decrease quantity" data-action="dec" data-index="${index}">−</button>
                            <span>${item.qty}</span>
                            <button aria-label="Increase quantity" data-action="inc" data-index="${index}">+</button>
                        </div>
                        <span class="item-subtotal">PKR ${(item.price * item.qty).toLocaleString()}</span>
                    </div>
                </div>
                <button class="remove-btn" aria-label="Remove ${item.name}" data-index="${index}">✕</button>
            `;
            container.appendChild(row);
        });

        container.querySelectorAll('[data-action="inc"]').forEach(btn =>
            btn.addEventListener("click", () => changeCartQty(Number(btn.dataset.index), 1))
        );
        container.querySelectorAll('[data-action="dec"]').forEach(btn =>
            btn.addEventListener("click", () => changeCartQty(Number(btn.dataset.index), -1))
        );
        container.querySelectorAll(".remove-btn").forEach(btn =>
            btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.index)))
        );
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    document.getElementById("cart-total-price").textContent = total.toLocaleString();
}

function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast("Removed from wishlist");
    } else {
        wishlist.push(productId);
        showToast("Added to wishlist");
    }
    saveToStorage(STORAGE_WISHLIST, wishlist);
    updateWishlistUI();
    displayProducts(); 
}

function updateWishlistUI() {
    document.getElementById("wishlist-count").textContent = wishlist.length;
    const container = document.getElementById("wishlist-items");
    container.innerHTML = "";

    if (wishlist.length === 0) {
        container.innerHTML = `<p class="empty-state">No favorites yet. Tap the heart on any piece to save it here.</p>`;
        return;
    }

    wishlist.forEach(id => {
        const product = products.find(p => p.id === id);
        if (!product) return;
        const row = document.createElement("div");
        row.classList.add("wishlist-item");
        row.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="cart-item-details">
                <h4>${product.name}</h4>
                <p class="cart-item-meta">PKR ${product.price.toLocaleString()}</p>
                <div class="wishlist-item-actions">
                    <button data-action="add" data-id="${product.id}">Add to Bag</button>
                    <button data-action="remove" data-id="${product.id}">Remove</button>
                </div>
            </div>
        `;
        container.appendChild(row);
    });

    container.querySelectorAll('[data-action="add"]').forEach(btn =>
        btn.addEventListener("click", () => {
            const product = products.find(p => p.id === Number(btn.dataset.id));
            addToCart(product, product.sizes[0], 1);
        })
    );
    container.querySelectorAll('[data-action="remove"]').forEach(btn =>
        btn.addEventListener("click", () => toggleWishlist(Number(btn.dataset.id)))
    );
}

const checkoutModal = document.getElementById("checkoutModal");

function openCheckout() {
    if (cart.length === 0) {
        showToast("Your bag is empty");
        return;
    }
    closeSidebars();

    document.getElementById("checkoutForm").hidden = false;
    document.getElementById("checkoutSuccess").hidden = true;

    const summary = document.getElementById("orderSummaryItems");
    summary.innerHTML = "";
    cart.forEach(item => {
        const line = document.createElement("div");
        line.className = "order-line";
        line.innerHTML = `<span>${item.name} (${item.size}) × ${item.qty}</span><span>PKR ${(item.price * item.qty).toLocaleString()}</span>`;
        summary.appendChild(line);
    });
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    document.getElementById("orderTotal").textContent = total.toLocaleString();

    checkoutModal.hidden = false;
    document.body.classList.add("overlay-active");
}

function closeCheckout() {
    checkoutModal.hidden = true;
    document.body.classList.remove("overlay-active");
}

document.getElementById("checkoutClose").addEventListener("click", closeCheckout);
checkoutModal.addEventListener("click", (e) => {
    if (e.target === checkoutModal) closeCheckout();
});

document.getElementById("orderForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("custName").value.trim();
    const email = document.getElementById("custEmail").value.trim();

    document.getElementById("checkoutForm").hidden = true;
    document.getElementById("checkoutSuccess").hidden = false;
    document.getElementById("successName").textContent = name;
    document.getElementById("successEmail").textContent = email;

    cart = [];
    saveToStorage(STORAGE_CART, cart);
    updateCartUI();
    e.target.reset();
});

document.getElementById("successClose").addEventListener("click", closeCheckout);


function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}

const cartSidebar = document.getElementById("cart-sidebar");
const wishlistSidebar = document.getElementById("wishlist-sidebar");
const overlay = document.getElementById("overlay");

function openCart() {
    closeSidebars();
    cartSidebar.classList.add("open");
    overlay.classList.add("open");
    document.body.classList.add("overlay-active");
}

function openWishlistPanel() {
    closeSidebars();
    wishlistSidebar.classList.add("open");
    overlay.classList.add("open");
    document.body.classList.add("overlay-active");
}

function closeSidebars() {
    cartSidebar.classList.remove("open");
    wishlistSidebar.classList.remove("open");
    overlay.classList.remove("open");
    document.body.classList.remove("overlay-active");
}

document.getElementById("cartTrigger").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeSidebars);
document.getElementById("wishlistTrigger").addEventListener("click", openWishlistPanel);
document.getElementById("wishlistClose").addEventListener("click", closeSidebars);
document.getElementById("checkoutBtn").addEventListener("click", openCheckout);
overlay.addEventListener("click", closeSidebars);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        if (!productModal.hidden) closeProductModal();
        if (!checkoutModal.hidden) closeCheckout();
        closeSidebars();
        document.getElementById("navLinks").classList.remove("open");
        document.getElementById("menuToggle").classList.remove("active");
    }
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

function setActiveCategory(category) {
    activeCategory = category;

    document.querySelectorAll(".nav-filter").forEach(el =>
        el.classList.toggle("active", el.dataset.category === category)
    );
    document.querySelectorAll(".chip").forEach(el =>
        el.classList.toggle("active", el.dataset.category === category)
    );

    displayProducts();
    navLinks.classList.remove("open");
    menuToggle.classList.remove("active");
}

document.querySelectorAll(".nav-filter").forEach(el => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        setActiveCategory(el.dataset.category);
    });
});
document.querySelectorAll(".chip").forEach(el => {
    el.addEventListener("click", () => setActiveCategory(el.dataset.category));
});

const searchToggle = document.getElementById("searchToggle");
const searchWrap = document.querySelector(".search-wrap");
const searchInput = document.getElementById("searchInput");

searchToggle.addEventListener("click", () => {
    searchWrap.classList.toggle("open");
    if (searchWrap.classList.contains("open")) searchInput.focus();
});

searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    displayProducts();
});

document.getElementById("sortSelect").addEventListener("change", (e) => {
    sortMode = e.target.value;
    displayProducts();
});

function init() {
    displayProducts();
    updateCartUI();
    updateWishlistUI();
}

init();
