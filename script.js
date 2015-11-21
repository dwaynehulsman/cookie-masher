var points = 0;
var click_value = 1;
var auto_clicker = 0;
var upgrade_price = 1;
var bakkeryName = "My Bakkery";
var upgrade_price_auto_clicker = 50;
var priceUpdateClick = click_value;
var priceUpdateAutoClicker = auto_clicker;

window.onload = function () {
  if (getCookie("cookies") > points) {
    points = Number(getCookie('cookies'));
  }

  if (getCookie("auto-clickers") > auto_clicker) {
    auto_clicker = Number(getCookie('auto-clickers'));

    document.getElementById('passive_value').innerHTML = "Cookies per sec: " + auto_clicker;
    document.getElementById('passive_value_mobile').innerHTML = "Cookies per sec: " + auto_clicker;

    //Restore price
    upgrade_price_auto_clicker = upgrade_price_auto_clicker * 2 * auto_clicker;
    document.getElementById('auto-click-upgrade-cost').innerHTML = "Cost: " + upgrade_price_auto_clicker + " Cookies";
    document.getElementById('auto-click-upgrade-cost_mobile').innerHTML = "Cost: " + upgrade_price_auto_clicker + " Cookies";


  }

  if (getCookie("click-value") > click_value) {
    click_value = Number(getCookie('click-value'));

    document.getElementById('click_value').innerHTML = "Cookies per click: " + click_value;
    document.getElementById('click_value_mobile').innerHTML = "Cookies per click: " + click_value;

    //Restore price
    upgrade_price = upgrade_price * 2 * click_value;
    document.getElementById('click-upgrade-cost').innerHTML = "Cost: " + upgrade_price + " Cookies";
    document.getElementById('click-upgrade-cost_mobile').innerHTML = "Cost: " + upgrade_price + " Cookies";

  }
}

function ask_name(){

    if (getCookie("bakkeryname").length < 1) {
      bakkeryName = prompt("Please enter your bakery name: ");
      createCookie("bakkeryname", bakkeryName, 30);
    } else {
      bakkeryName = getCookie("bakkeryname").replace(/%20/g, " ");
    }



    if(bakkeryName.length>0){
        document.getElementById('bakery_name').innerHTML = bakkeryName;
        document.getElementById('bakery_name_mobile').innerHTML = bakkeryName;
    }
    else
    {
        document.getElementById('bakery_name').innerHTML = "My" + " bakery";
        document.getElementById('bakery_name_mobile').innerHTML = "My" + " bakery";
    }

}

function pressed(){
    points = points + click_value;
    document.getElementById('total_points').innerHTML = "Cookies: " + points;
    document.getElementById('total_points_mobile').innerHTML = "Cookies: " + points;
}

function passive_upgrade(){
    if(points == upgrade_price_auto_clicker || points > upgrade_price_auto_clicker){
        //remove cookies
        points = points - upgrade_price_auto_clicker;
        document.getElementById('total_points').innerHTML = "Cookies: " + points;
        document.getElementById('total_points_mobile').innerHTML = "Cookies: " + points;
        document.getElementById('audio_upgrade').play();

        //upgrade auto clicker
        auto_clicker = auto_clicker + 1;
        document.getElementById('passive_value').innerHTML = "Cookies per sec: " + auto_clicker;
        document.getElementById('passive_value_mobile').innerHTML = "Cookies per sec: " + auto_clicker;


        //double upgrade price
        upgrade_price_auto_clicker = upgrade_price_auto_clicker*2;
        document.getElementById('auto-click-upgrade-cost').innerHTML = "Cost: " + upgrade_price_auto_clicker + " Cookies";
        document.getElementById('auto-click-upgrade-cost_mobile').innerHTML = "Cost: " + upgrade_price_auto_clicker + " Cookies";

        //Save in cookie
        createCookie('auto-clickers', auto_clicker, 30);
    }
}


function click_upgrade(){

    if(points == upgrade_price || points > upgrade_price){
        //remove cookies
        points = points - upgrade_price;
        document.getElementById('total_points').innerHTML = "Cookies: " + points;
        document.getElementById('total_points_mobile').innerHTML = "Cookies: " + points;
        document.getElementById('audio_upgrade').play();

        //upgrade clicker
        click_value = click_value + 1;
        document.getElementById('click_value').innerHTML = "Cookies per click: " + click_value;
        document.getElementById('click_value_mobile').innerHTML = "Cookies per click: " + click_value;

        //double upgrade price
        upgrade_price = upgrade_price*2;
        document.getElementById('click-upgrade-cost').innerHTML = "Cost: " + upgrade_price + " Cookies";
        document.getElementById('click-upgrade-cost_mobile').innerHTML = "Cost: " + upgrade_price + " Cookies";

        //Save in cookie
        createCookie('click-value', click_value, 30);
    }

}

//update cookies in html when getting passive cookies
window.setInterval(function(){
    points = points + auto_clicker;
    document.getElementById('total_points').innerHTML = "Cookies: " + points;
    document.getElementById('total_points_mobile').innerHTML = "Cookies: " + points;
    document.getElementById('passive_value').innerHTML = "Cookies per sec: " + auto_clicker;
    document.getElementById('passive_value_mobile').innerHTML = "Cookies per sec: " + auto_clicker;
}, 1000);

//update cookies
window.setInterval(function(){
  createCookie("cookies", points, 30);
}, 10000);

//get current prices on load
/*function update_prices(){
  while(priceUpdateClick > 0){
    priceUpdateClick = priceUpdateClick - 1;
    click-upgrade-cost = click-upgrade-cost * 2;
  }else if(priceUpdateAutoClicker === 0){
    document.getElementById('click-upgrade-cost').innerHTML = "Cost: " + upgrade_price + " Cookies";
    document.getElementById('click-upgrade-cost_mobile').innerHTML = "Cost: " + upgrade_price + " Cookies";
  }

  while(priceUpdateAutoClicker > 0){
    priceUpdateAutoClicker = priceUpdateAutoClicker - 1;
    auto-click-upgrade-cost = auto-click-upgrade-cost * 2;

  }else if(priceUpdateAutoClicker === 0){
    document.getElementById('auto-click-upgrade-cost').innerHTML = "Cost: " + upgrade_price_auto_clicker + " Cookies";
    document.getElementById('auto-click-upgrade-cost_mobile').innerHTML = "Cost: " + upgrade_price_auto_clicker + " Cookies";
  }
}*/
