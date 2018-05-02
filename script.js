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

        this.avgR = this.avgCalc(this.rgbArray1[0], this.rgbArray2[0]);
        this.avgG = this.avgCalc(this.rgbArray1[1], this.rgbArray2[1]);
        this.avgB = this.avgCalc(this.rgbArray1[2], this.rgbArray2[2]);

        this.averageHex = this.rgbToHex([this.avgR, this.avgG, this.avgB]);

        this.callback(this.averageHex);
    };
    
    avgHex.prototype.hexToNum = function(hex){
        return parseInt((hex) ,16);
    };

    avgHex.prototype.numToRgb = function(num){
        return [num >> 16 & 0xFF, num >> 8 & 0xFF, num & 0xFF];
    };

    avgHex.prototype.avgCalc = function(num1, num2){
        return (num1 + num2) / 2;
    };

    avgHex.prototype.rgbToHex = function(array){
        var result = "";
        for(var i = 0; i < array.length; i++){
            var str = (array[i] >> 0).toString(16);

            if(str.length == 2){
                result = result + str;
            } else{
                result = result + ('0' + str); 
            };
        };

        return result;
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

    hexAvgDemo.displayResult = function(result){
        hexAvgDemo.answer[0].innerText = '#' + result;
        hexAvgDemo.outputBox[0].setAttribute('style',"background-color:#" + result);
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