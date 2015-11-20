/**
 * Created by Gijs on 12-10-2015.
 */
var points = 0;
var click_value = 1;
var auto_clicker = 0;
var upgrade_price = 1;
var upgrade_price_auto_clicker = 50;



function ask_name(){
    var name = prompt("Please enter your bakery name: ");
    if(name.length>0){
        document.getElementById('bakery_name').innerHTML = name + " bakery";
    }
    else
    {
        document.getElementById('bakery_name').innerHTML = "My" + " bakery";
    }

}

function pressed(){
    points = points + click_value;
    document.getElementById('total_points').innerHTML = "Cookies: " + points;

}

function passive_upgrade(){
    if(points == upgrade_price_auto_clicker || points > upgrade_price_auto_clicker){
        //remove cookies
        points = points - upgrade_price_auto_clicker;
        document.getElementById('total_points').innerHTML = "Cookies: " + points;
        document.getElementById('audio_upgrade').play();

        //upgrade auto clicker
        auto_clicker = auto_clicker + 1;
        document.getElementById('passive_value').innerHTML = "Clicks per sec: " + auto_clicker;

        //double upgrade price
        upgrade_price_auto_clicker = upgrade_price_auto_clicker*2;
        document.getElementById('passive_upgrade').innerHTML = "Clicks per sec: +1<br />Price: " + upgrade_price_auto_clicker;
    }
}


function click_upgrade(){

    if(points == upgrade_price || points > upgrade_price){
        //remove cookies
        points = points - upgrade_price;
        document.getElementById('total_points').innerHTML = "Cookies: " + points;
        document.getElementById('audio_upgrade').play();

        //upgrade clicker
        click_value = click_value + 1;
        document.getElementById('click_value').innerHTML = "Clicking power: " + click_value;

        //double upgrade price
        upgrade_price = upgrade_price*2;
        document.getElementById('button_upgrade').innerHTML = "Clicker: +1<br /> Price: " + upgrade_price;

    }

}

//update cookies in html when getting passive cookies
window.setInterval(function(){
    points = points + auto_clicker;
    document.getElementById('total_points').innerHTML = "Cookies: " + points;
}, 1000);
