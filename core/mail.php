<?php 
$json = file_get_contents(filename: '../js/goods.json');
$json = json_decode($json, assoc: true);

$massage = '';
$massage .= '<h1>Заказ стола</h1>';
$massage .= '<p>Телефон: '.POST['cphone'].'</p>';
$massage .= '<p>Почта: '.POST['cemail'].'</p>';
$massage .= '<p>Имя: '.POST['cname'].'</p>'; 

$goods = $_POST['cart'];

foreach ($cart as $key => $count) {

}
print_r($massage);