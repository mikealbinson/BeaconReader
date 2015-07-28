//OledDisplay.js
/******************************************************************************
 * Display definitions
 ******************************************************************************/

console.log("OLED begin")
var sys = require('util');
var SSD1306 = require('./Node_Indicators/ssd1306.js');
var AFGFX = require('./Node_Indicators/Adafruit_GFX.js');
var fs = require('fs');
var Edison = require('./Node_Indicators/Edison.js');


var __OLED = new SSD1306();

exports.beginOled = function() {
  Edison.enable_i2c6_breakout(__startOled());
}

function __startOled()
{ 
  __OLED.init();
  //Display the image
  __clearOLEDScreen();
  __displayTicketflyLogo();
  console.log('oled init done');
}

exports.displayTicketflyLogo = function() {
  __OLED.renderImageToBuffer('/home/root/Ticketfly_Beacon/images/TicketflyLogo.png');
  console.log('displayed');
}

function __displayTicketflyLogo() {
  __OLED.renderImageToBuffer('/home/root/Ticketfly_Beacon/images/TicketflyLogo.png');
  console.log('displayed');
}

exports.displayAdmit = function() {
  __OLED.renderImageToBuffer('/home/root/Ticketfly_Beacon/images/ADMIT.png');
  console.log('Admit')
  setTimeout(__clearOLEDScreen, 1990);
  setTimeout(__displayTicketflyLogo, 2000);
}

exports.displayNoAdmit = function() {
  __OLED.renderImageToBuffer('/home/root/Ticketfly_Beacon/images/NO_ADMIT.png');
  console.log('No Admit')
  setTimeout(__clearOLEDScreen, 1990);
  setTimeout(__displayTicketflyLogo, 2000);
}

exports.clearOLEDScreen = function(){
  __OLED.renderImageToBuffer('/home/root/Ticketfly_Beacon/images/clear_screen_black.png');
  console.log('cleared');
}

function __clearOLEDScreen(){
  __OLED.renderImageToBuffer('/home/root/Ticketfly_Beacon/images/clear_screen_black.png');
  console.log('cleared');
}

exports.displayNoAdmitVoid = function() {
  __OLED.renderImageToBuffer('/home/root/Ticketfly_Beacon/images/NO_ADMIT_VOID.png');
  console.log('Voided Ticket')
  setTimeout(__clearOLEDScreen, 1990);
  setTimeout(__displayTicketflyLogo, 2000);
}

exports.displayAdmitVIP = function() {
  __OLED.renderImageToBuffer('/home/root/Ticketfly_Beacon/images/ADMIT_VIP.png');
  console.log('Admit VIP')
  setTimeout(__clearOLEDScreen, 1990);
  setTimeout(__displayTicketflyLogo, 2000);
}

