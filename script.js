var under_home_icon = document.querySelectorAll(".under_home_icon")
under_home_icon[1].firstElementChild.style.fill="aliceblue"
under_home_icon[1].firstElementChild.style.height="50px"
under_home_icon[1].firstElementChild.style.marginLeft="10px"
under_home_icon[1].firstElementChild.style.marginLeft="10px"
under_home_icon[0].style.backgroundColor="rgb(81, 0, 255)"
under_home_icon[1].style.backgroundColor="rgb(0, 171, 0)"
under_home_icon[2].style.backgroundColor="rgb(154, 0, 197)"
under_home_icon[3].style.backgroundColor=""

var topSellerName = document.querySelectorAll(".topSellerName")
var topSellerMoney = document.querySelectorAll(".topSellerMoney")
var sellersNames = ["aaaa","ssss","qqqq","xxxx","hhhh","wwww","cccc","vvvv","ffff","rrrr","oooo","tttt"]
var SellersMoney = ["200ETH","180ETH","210ETH","177ETH","300ETH","230ETH","196ETH","240ETH","199ETH","265ETH","167ETH","299ETH"]
for (let i = 0; i < sellersNames.length; i++) {
    topSellerName[i].innerText=sellersNames[i]
    topSellerMoney[i].innerText=SellersMoney[i]
}
var title = document.querySelectorAll(".title")
title[1].style.color="black"
title[1].style.marginTop="300px"
var fire = document.querySelectorAll(".fire")
fire[1].style.fill="#bd16cf"