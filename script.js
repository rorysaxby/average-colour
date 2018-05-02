(function(){

    /***************************
    - Calculate Average
    ****************************/

    var avgHex = function(opts){
        this.hex1 = opts.hex1;
        this.hex2 = opts.hex2;
        this.callback = opts.callback;

        this.num1 = this.hexToNum(this.hex1);
        this.num2 = this.hexToNum(this.hex2);

        this.rgbArray1 = this.numToRgb(this.num1);
        this.rgbArray2 = this.numToRgb(this.num2);

        console.log(this.rgbArray1, this.rgbArray2);
    };
    
    avgHex.prototype.hexToNum = function(hex){
        return parseInt((hex) ,16);
    };

    avgHex.prototype.numToRgb = function(num){
        return [num >> 16 & 0xFF, num >> 8 & 0xFF, num & 0xFF];
    };

    /***************************
    - Hex Average Demo 
    ****************************/

    var hexAvgDemo = {};

    hexAvgDemo.bindButton = function(){
        hexAvgDemo.button.addEventListener("click", function(){
            hexAvgDemo.getInputValues();
        });
    };

    hexAvgDemo.getInputValues = function(){
        hexAvgDemo.hexVal1 = hexAvgDemo.inputOne.value,
        hexAvgDemo.hexVal2 = hexAvgDemo.inputTwo.value;

        hexAvgDemo.calcAverage();
    };

    hexAvgDemo.calcAverage = function(){
        var calAvg = new avgHex({
            hex1: hexAvgDemo.hexVal1,
            hex2: hexAvgDemo.hexVal2,
            callback: hexAvgDemo.displayResult
        });
    };

    hexAvgDemo.displayResult = function(){

    };

    hexAvgDemo.init = function(){
        hexAvgDemo.inputOne = document.getElementById('HexValue1');
        hexAvgDemo.inputTwo = document.getElementById('HexValue2');
        hexAvgDemo.button = document.getElementById('GetAverageHex');
        hexAvgDemo.outputBox = document.getElementsByClassName('output-box');
        hexAvgDemo.answer = document.getElementsByClassName('answer');
        hexAvgDemo.bindButton();
    }();

})();