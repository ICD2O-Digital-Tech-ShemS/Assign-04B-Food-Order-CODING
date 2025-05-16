// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
// ./js/script.js
"use strict";

function Order() {
    const OPTION1 = 18.99;
    const OPTION2 = 17.99;
    const OPTION3 = 16.99;
    const HST = 0.13;
    let subtotal = 0;
    let tax = 0;
    let total = 0; 
    let calculation = 0;

    if (document.getElementById("checkbox1").checked) {
        calculation += OPTION1; 
    } 
    if (document.getElementById("checkbox2").checked) {
        calculation += OPTION2;
    }
    if (document.getElementById("checkbox3").checked) {
        calculation += OPTION3;
    }

    tax = calculation * HST;
    total = calculation + tax;

    document.getElementById("calculation").innerHTML = "Subtotal: $" + calculation.toFixed(2);
    document.getElementById("tax").innerHTML = "Tax: $" + tax.toFixed(2);
    document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2);
}
