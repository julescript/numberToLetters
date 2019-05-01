var num = "152312";
var digit = ["one", "two", "three","four", "five", "six", "seven", "eight", "nine"];
var tens = ["ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sisxteen", "seventeen", "eighteen", "nineteen"];
var decis = ["twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"];
var huns = ["hundred","thousand","million","billion"];


console.log("the number is : " + num);
console.log("the number in letters is : " + numToText(num));


function numToText(n){
    
    let numl =  n.length;

    if(numl < 2){
        return digit[n-1];
    }else if(numl < 3){
        if(parseInt(n/10)==1){
            return tens[n-10]
        }else{
            return decis[parseInt(n/10) - 2] + " " + numToText(""+(n%10));
        }
    }else{
        if(numl == 3){
            return digit[n.charAt(0) - 1] + " " + huns[0] + " & " + numToText(""+(n%100));
        }else if(numl == 4){
            return digit[n.charAt(0) - 1] + " " + huns[1] + " " +  numToText(""+(n%1000));
        }else if(numl >= 5){
            return numToText(""+parseInt(n/1000)) + " " + huns[1] + " " +  numToText(""+(n%1000));
        }
    }
}
