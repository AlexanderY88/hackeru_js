// array to store the product uniq names, global variable
let products = [];

// Product constructor function
class Product { 
    constructor (name, productName, category, img, serial_number, description, price, isAviable) {
    this.productName = productName
    this.name = name;
    this.category = category;
    this.img = img;
    this.serial_number = serial_number;
    this.description = description;
    this.price = price;
    this.isAviable = isAviable || true; // Default to true if not provided
    products.push(this); // Add product to the global products array
    }

    // create universal getter and setter
    // create universal getter and setter
    get(propName) {
          return this[propName];
    }

    set(propName, value) {
          this[propName] = value;
    }
}

// Create product instances

let product_2536 = new Product(
    "product_2536",
    "Sony Professional 256GB XQD", 
    "Storage", 
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTRo8HWAhuZzTJ6c3BtwxIh5zQMY_lBNmuzxCeGYaPY2Bv9WIkjL9AYJWS10AZp9c6wTs_QcO4dpe4OryxVDCrM0YGYOHime128KlVAeomROvTb-EAKWwBesw", 
    "2536", 
    "The new XQD cards achieve Max read. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    500, 
    true);

let product_2537 = new Product(
    "product_2537",
    "Batman XXL Gaming Mousepad", 
    "Keyboard", 
    "https://m.media-amazon.com/images/I/71r9ZVVgYkL._UF1000,1000_QL80_.jpg", 
    "2537", 
    `Unleash your inner vigilante with the Batman XXL gaming mousepad! Designed for die-hard fans of the Dark Knight, this extra-large gaming mat features the iconic Batman logo, allowing you to bring Gotham's protector into your gaming setup.`
    , 75, 
    true);

let product_2538 = new Product(
    "product_2538",
    "Numskull eSports NS03e Multi Format Gaming Headset", 
    "Headset", 
    "https://www.justgeek.com/cdn/shop/products/ns-ns03e-headset-1.jpg?v=1657803406&width=1800", 
    "2538", 
    `The Numskull NS03 is the essential headset that focuses on what truly matters: balanced, virtual surround sound for all your gaming and music needs encapsulated in a sleek and comfortable industrial design. Compatible with PS4, Xbox One, PC, Mac and more, this headset creates an immersive aural experience through its 40mm neodymium drivers, allowing you to hear every detail.`
    , 120, 
    true);

let product_2539 = new Product(
    "product_2539",
    "Mega Drive ‘Retro Logo’ Black Socks (One Size)", 
    "Socks", 
    "https://www.justgeek.com/cdn/shop/products/md-retro-logo-socks-1.jpg?v=1657846426&width=1800", 
    "2539", 
    `Sprinkle a dash of retro spice into your next outfit and keep your toes toasty with these awesome Mega Drive inspired socks. Made from premium quality cotton, these black socks are sure to feel like you’re walking on a cloud and will make the perfect addition to any gamer’s wardrobe! Official SEGA Product. Designed by Numskull. Made from high quality materials. Ribbed neck and a soft touch. One Size (approximately sizes 6-11 (UK), 39-46 (EU)`
    , 15, 
    true);


let product_2540 = new Product(
    "product_2540",
    "Mega Drive ‘Retro Logo’ Black Socks (One Size)", 
    "Socks", 
    "https://www.justgeek.com/cdn/shop/products/md-retro-logo-socks-1.jpg?v=1657846426&width=1800", 
    "2540", 
    `Sprinkle a dash of retro spice into your next outfit and keep your toes toasty with these awesome Mega Drive inspired socks. Made from premium quality cotton, these black socks are sure to feel like you’re walking on a cloud and will make the perfect addition to any gamer’s wardrobe! Official SEGA Product. Designed by Numskull. Made from high quality materials. Ribbed neck and a soft touch. One Size (approximately sizes 6-11 (UK), 39-46 (EU)`
    , 15, 
    true);

let product_2541 = new Product(
    "product_2541",
    `Asus Tuf Gaming F16 Fx608jpr-qt002 I7-14650hx/32gb/ssd 1tb/16" 2,5k 165hz/rtx 5070/brez Os (90nr0ng1-m00220)`, 
    "Laptop", 
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcPPE851PSc1T2Uh13XFsXSyUGV71g_xBzTYqNqcvkUG_YPKyGjfZykW_OBcDiSffn0v8bVN8SYDPmHRGo5tn8RoaNEKksbhm4jN2E_nMncpnn2pWaTHvEUg", 
    "2541", 
    `About this product: Supported OS Windows, Storage Capacity
    1 TB, RAM Size 32 GB, Processor Intel Core i7, Screen Size 16 in, Graphics Processing Type Dedicated Graphics, Processor Speed 2.3 GHz, Color Black, Series TUF Gaming F16, Type Notebook/Laptop, Features Backlit Keyboard, Touchpad, Bluetooth, Wi-Fi`,
    1525, 
    true);

let product_2542 = new Product(
    "product_2542",
    "Legion 5 Gen 10 AMD (15″) with up to RTX 5060", 
    "Laptop", 
    "https://p2-ofp.static.pub//fes/cms/2025/05/13/k2yxxari1heoktcik6cl87v8z1w71j930470.png", 
    "2542", 
    `About this product: AMD Ryzen™ 7 260 Processor (3.80 GHz up to 5.10 GHz), 16 GB DDR5-5600 MHz RAM, 1 TB SSD, NVIDIA® GeForce RTX™ 4060 8 GB GDDR6, 15.6″ FHD (1920 x 1080) IPS, 165 Hz, Anti-glare, FreeSync™ Premium, Windows 11 Home`,
    1300, 
    true);

let product_2543 = new Product(
    "product_2543",
    `Legion 5 Gen 10 AMD (15″) with up to RTX 5060`, 
    "Laptop", 
    "https://i.rtings.com/assets/products/vwLOQlqT/lenovo-legion-pro-5-gen-8-16-2023/design-medium.jpg?format=auto", 
    "2543", 
    `About this product: AMD Ryzen™ 7 260 Processor (3.80 GHz up to 5.10 GHz), 16 GB DDR5-5600 MHz RAM, 1 TB SSD, NVIDIA® GeForce RTX™ 4060 8 GB GDDR6, 15.6″ FHD (1920 x 1080) IPS, 165 Hz, Anti-glare, FreeSync™ Premium, Windows 11 Home`,
    1300, 
    true);

let product_2544 = new Product(
    "product_2544",
    `Legion 5 Gen 8 AMD (15″) with up to RTX 5030`, 
    "Laptop", 
    "https://p2-ofp.static.pub//fes/cms/2025/05/13/k2yxxari1heoktcik6cl87v8z1w71j930470.png", 
    "2544", 
    `About this product: AMD Ryzen™ 7 260 Processor (3.80 GHz up to 5.10 GHz), 16 GB DDR5-5600 MHz RAM, 1 TB SSD, NVIDIA® GeForce RTX™ 4060 8 GB GDDR6, 15.6″ FHD (1920 x 1080) IPS, 165 Hz, Anti-glare, FreeSync™ Premium, Windows 11 Home`,
    1300, 
    false);

let product_2545 = new Product(
    "product_2544",
    `Legion 5 Gen 8 AMD (15″) with up to RTX 5030`, 
    "Laptop", 
    "https://i.pcmag.com/imagery/reviews/03y320nmuoEuPo1f9X2LFl0-1..v1687898141.jpg", 
    "2544", 
    `About this product: AMD Ryzen™ 7 260 Processor (3.80 GHz up to 5.10 GHz), 16 GB DDR5-5600 MHz RAM, 1 TB SSD, NVIDIA® GeForce RTX™ 4060 8 GB GDDR6, 15.6″ FHD (1920 x 1080) IPS, 165 Hz, Anti-glare, FreeSync™ Premium, Windows 11 Home`,
    1300, 
    true);

let product_2546 = new Product(
    "product_2540",
    "Mega Drive ‘Retro Logo’ Black Socks (One Size)", 
    "Socks", 
    "https://www.justgeek.com/cdn/shop/products/md-retro-logo-socks-1.jpg?v=1657846426&width=1800", 
    "2540", 
    `Sprinkle a dash of retro spice into your next outfit and keep your toes toasty with these awesome Mega Drive inspired socks. Made from premium quality cotton, these black socks are sure to feel like you’re walking on a cloud and will make the perfect addition to any gamer’s wardrobe! Official SEGA Product. Designed by Numskull. Made from high quality materials. Ribbed neck and a soft touch. One Size (approximately sizes 6-11 (UK), 39-46 (EU)`
    , 15, 
    true);

let product_2547 = new Product(
    "product_2536",
    "Sony Professional 256GB XQD", 
    "Storage", 
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTRo8HWAhuZzTJ6c3BtwxIh5zQMY_lBNmuzxCeGYaPY2Bv9WIkjL9AYJWS10AZp9c6wTs_QcO4dpe4OryxVDCrM0YGYOHime128KlVAeomROvTb-EAKWwBesw", 
    "2536", 
    "The new XQD cards achieve Max read. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    500, 
    true);

let product_2548 = new Product(
    "product_2538",
    "Numskull eSports NS03e Multi Format Gaming Headset", 
    "Headset", 
    "https://www.justgeek.com/cdn/shop/products/ns-ns03e-headset-1.jpg?v=1657803406&width=1800", 
    "2538", 
    `The Numskull NS03 is the essential headset that focuses on what truly matters: balanced, virtual surround sound for all your gaming and music needs encapsulated in a sleek and comfortable industrial design. Compatible with PS4, Xbox One, PC, Mac and more, this headset creates an immersive aural experience through its 40mm neodymium drivers, allowing you to hear every detail.`
    , 120, 
    true);

function showProducts() {
    
    let productsContainer = document.getElementById("productsContainer");
    
    productsContainer.innerHTML = ""; // clean previous content
    
    // create HTML structure for products 
    let html = '<div class="container"><div class="row">';
    
    for (let i in products) {
        let product = products[i];
        
        // Shorten the description if it's too long
        // to fit the card layout better
        let shortDescription = product.description.length > 250 
            ? product.description.substring(0, 250) + "..." 
            : product.description;

        let shortTitle = product.productName.length > 60 
            ? product.productName.substring(0, 60) + "..." 
            : product.productName;
            
        html += `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="card h-100 shadow-sm">
                <img src="${product.img}" class="card-img-top" alt="image of ${product.productName}" 
                     style="height: 250px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title" style="height: 60px; overflow: hidden;">
                        ${shortTitle}
                    </h5>
                    <p class="card-text mb-2" >
                        <span class="badge bg-info">${product.category}</span>
                        <span class="badge bg-secondary ms-1">#${product.serial_number}</span>
                    </p>
                    <p class="card-text flex-grow-1" style="height: 150px; overflow: hidden; font-size: 0.9rem; ">
                        ${shortDescription}
                    </p>
                    <div class="mt-auto">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h5 class="text-success mb-0">$${product.price}</h5>
                            <span class="badge ${product.isAviable ? 'bg-success' : 'bg-danger'}">
                                ${product.isAviable ? 'Aviavle' : 'Noa aviable'}
                            </span>
                        </div>
                        <button type="button" class="btn btn-primary w-100" 
                                onclick="showProductDetails('${product.name}')" 
                                ${!product.isAviable ? 'disabled' : ''}>
                            <i class="fas fa-eye me-1" onclick="showProductDetails('${product.name}')" ></i>More information
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    
    html += '</div></div>';
    productsContainer.innerHTML = html;
}

// Found an DOM function to show products after the DOM is loaded
// This ensures that the products are displayed only after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, show products...");
    console.log("Products number:", products.length);
    showProducts();
});


// Function to show product details in a modal
function showProductDetails(productName) {
    let product = products.find(p => p.name === productName);
    if (!product) {
        console.error("Product not found:", productName);
        return;
    }   
    let modalContent = `
    <div class="modal-header">
        <h5 class="modal-title">${product.productName}</h5>
        <button type="button" class="btn-close mr-1" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    </div>
    <div class="modal-body">
        <img src="${product.img}" class="img-fluid" alt="image of ${product.productName}">
        <p>${product.description}</p>
        <p class="text-success">Price: $${product.price}</p>
    </div>
    
    `;
    let modal = document.getElementById("productDetailsModal");
    modal.querySelector(".modal-content").innerHTML = modalContent;
    let bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}