$(document).ready(function() {
var cart = {};
function loadCart() {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        	showCart();
        }
    else {
    	$('.main-cart').html('<p class="cart-empty">Корзина пуста!</p>');
    }
}

function showCart() {
	if (!isEmpty(cart)) {
        	$('.main-cart').html('<p class="cart-empty">Корзина пуста..</p>');
        }
        else {
	$.getJSON('assets/js/goods.json', function (data) {
		var goods = data;
		var out = '';
		for (var id in cart) {
			out += ' <div class="main-cart__item">';
			out += ' <button data-id="'+id+'" class="del-goods">x</button>';
			out += ' <img src="assets/img/'+goods[id].img+'">';
			out += ' '+goods[id].name+'';
			out += ' <button data-id="'+id+'" class="minus-goods">-</button>';
			out += ' '+cart[id]+'шт.';
			out += ' <button data-id="'+id+'" class="plus-goods">+</button>';
			out += 	 cart[id]*goods[id].cost+'$';
			out += ' </div>';
			out += ' <br>';
		}
		$('.main-cart').html(out);
		$('.del-goods').on('click', delhide);
		$('.del-goods').on('click', delGoods);
		$('.plus-goods').on('click', plusGoods);
		$('.minus-goods').on('click', minusGoods);
	});
}
}

function delhide() {
};

function delGoods() {
	var id = $(this).attr('data-id');
	delete cart[id];
	saveCart();
	showCart();
}

function plusGoods() {
	var id = $(this).attr('data-id');
	cart[id]++;
	saveCart();
	showCart();
}

function minusGoods() {
	var id = $(this).attr('data-id');
	if (cart[id]==1) {
		delete cart[id];
	}
	else {
	cart[id]--;
	}
	saveCart();
	showCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


function isEmpty(object) {
	for (var key in object)
	if (object.hasOwnProperty(key)) return true;
	return false;
}

function sendEmail() {
	var cname = $('#cname').val();
	var cemail = $('#cemail').val();
	var cphone = $('#cphone').val();
	if (cname!='' && cphone!='') {
		if (isEmpty(cart)) {
		$.post(
			"../dist/assets/core/mail.php",
			{
				"cname" : cname,
				"cemail" : cemail,
				"cphone" : cphone,
				"cart" : cart
			},
			function(data){
				if (data==1){
				alert('Заказ отправлен!');

			}
			else {
				alert('Повторите заказ!');
			 }
			}
		  );
		}
		else {
		alert('Корзина пуста!');
		}
	}
	else {
		alert('Заполните поля!');
	}
}

  loadCart();
  $('.send-cart').on('click', sendEmail);
});

function sendEmail() {
	var cname = $('#cname').val();
	var cemail = $('#cemail').val();
	var cphone = $('#cphone').val();
	if (cname!='' && cphone!='') {
		if (isEmpty(cart)) {
		$.post(
			"../dist/assets/core/mail.php",
			{
				"cname" : cname,
				"cemail" : cemail,
				"cphone" : cphone,
				"cart" : cart
			},
			function(data){
				if (data==1){
				alert('Заказ отправлен!');

			}
			else {
				alert('Повторите заказ!');
			 }
			}
		  );
		}
		else {
		alert('Корзина пуста!');
		}
	}
	else {
		alert('Заполните поля!');
	}
}



