<?php 
$json = file_get_contents('../js/goods.json');
$json = json_decode($json, true);

$massage = '';
$massage .= '<h1>Заказ стола</h1>';
$massage .= '<p>Телефон: '.$_POST['cphone'].'</p>';
$massage .= '<p>Почта: '.$_POST['cemail'].'</p>';
$massage .= '<p>Имя: '.$_POST['cname'].'</p>'; 

$cart = $_POST['cart'];
$sum = 0;
foreach ($cart as $id=>$count) {
    $message .=$json[$id]['name'].' --- ';
    $message .=$count.' --- ';
    $message .=$count*$json[$id]['cost'];
    $message .='<br>';
    $sum = $sum +$count*$json[$id]['cost'];
}
$message .='Всего: '.$sum;

//print_r($message);

$to = 'dimacherenkov97@gmail.com'.',';
$to .=$_POST['email'];
$spectext = '<!DOCTYPE HTML><html><head><title>Заказ</title></head><body>';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$m = mail($to, 'Заказ в магазине', $spectext.$message.'</body></html>', $headers);

if ($m) {echo 1;} else {echo 0;}