// Slider
$(document).ready(function() {

   $('.single-item').slick({   

        centerMode:false,     
        arrows:false,    
        autoplay:true,
        autoplaySpeed:2800,     
        slidesToShow:3,     
        slidesToScroll:1,   
        dots:true
    });

$('.product__slider').slick({
  centerMode: true,
centerPadding: '20px',
  slidesToShow: 3,
   autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '20px',
        arrows: false,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerPadding: '20px',
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});

 });
// Cart
var cart = {};

function init() {
    //считать goods.JSON
    $.getJSON("assets/js/goods.json", goodsOut);
}

function goodsOut(data) {

  console.log(data);
  var out='';
  for (var key in data) {
      out +='<div class="product__card">';
      out +='<img src="assets/img/'+data[key].img+'" alt="">'; 
      out +='<h3 class="name_card">'+data[key].name+'</h3>';
      out +='<div class="product__card__price">';
      out +='<p>Цена:</p>';
      out +='<div class="cost">'+data[key].cost+' руб.</div>';
      out +='</div>';
      out +='<div class="product__card-btn">';
      out +='<a class="add__card" href="">';
      out +='<span>Смотреть</span>';
      out +='<i class="ion-checkmark"></i>';
      out +='</a>';
      out +='<button class="add__card add__card-btn" data-toggle-text="Товар в корзине" data-id="'+[key]+'">';
      out +='<span>В корзину</span>';
      out +='<i class="ion-ios-cart"></i>';
      out +='</button>';
      out +='</div>';
      out +='</div>';
  }
  $('.product__cards').html(out);
  $('.add__card-btn').on('click', addToCart);
  $('.add__card-btn').on('click', change);
}

function addToCart() {
  var id = $(this).attr('data-id');
  if (cart[id]==undefined) {
      cart[id] = 1;
  }
  else {
      cart[id]++;
  }
  showMiniCart();
  saveCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showMiniCart() {
    var out="";
    for (var key in cart) {
         out++;
    }
    $('.mini-cart').html(out);
}

function loadCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        showMiniCart();
    }
}

$(document).ready(function () {
  init();
  loadCart();
});



// Preloader
$(window).on('load', function () {
$('.preloader').fadeOut();
});

function change() {
$('.add__card-btn').on('click');
$(this).addClass('active');
};


// Add block about
$('.about__add-btn').html('Подробнее');

$('.about__add-btn').on('click', function(e){
  e.preventDefault();
  
  var
    $this = $(this),
    content = $('.about__add');  
  
  
  if(!$this.hasClass('trigger')){
    $this.addClass('trigger');
    $this.html('Обратно');
    
    content.slideDown();
  } else {
    $this.removeClass('trigger');
    $this.html('Подробнее');
    
    content.slideUp();
  }
});