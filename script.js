(function(){

    var hexAvgDemo = {};

    hexAvgDemo.bindButton = function(){
        hexAvgDemo.button.addEventListener("click", function(){
            hexAvgDemo.getInputValues();
        });
    };

    hexAvgDemo.getInputValues = function(){
        avgHex.hexVal1 = avgHex.inputOne.value,
        avgHex.hexVal2 = avgHex.inputTwo.value;

        hexAvgDemo.calcAverage();
    };

    hexAvgDemo.calcAverage = function(){

    };

    hexAvgDemo.init = function(){
        avgHex.inputOne = document.getElementById('HexValue1');
        avgHex.inputTwo = document.getElementById('HexValue2');
        avgHex.button = document.getElementById('GetAverageHex');
        avgHex.outputBox = document.getElementsByClassName('output-box');
        avgHex.answer = document.getElementsByClassName('answer');
        avgHex.bindButton();
    };

})();