const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIcon = document.querySelector('.burger-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const asideCart = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIcon.addEventListener('click',toggleMobileMenu);
shoppingCart.addEventListener('click',toggleShoppingCart);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    asideCart.classList.add('inactive')
}
function toggleShoppingCart(){
    asideCart.classList.toggle('inactive');
    mobileMenu.classList.add('inactive')
}

const productList = [];
    productList.push({
        name: 'bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    productList.push({
        name: 'pantalla',
        price: 540,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    productList.push({
        name: 'avion',
        price: 120000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    productList.push({
        name: 'moto',
        price: 67523,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    productList.push({
        name: 'casa',
        price: 12000000,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    productList.push({
        name: 'puerta',
        price: 43129,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });

function renderProducts(arr){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
    
        const productPrice = document.createElement('p');
        productPrice.innerText= '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText= product.name;
    
        const productFigure = document.createElement('figure');
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src','./icons/bt_add_to_cart.svg');
        productFigure.append(productFigureImg);
    
        productInfo.append(productInfoDiv, productFigure);
        productInfoDiv.append(productPrice, productName);
        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);