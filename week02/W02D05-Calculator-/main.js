
function caculator(num1, num2, operator) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if (isNaN(num1) || isNaN(num2)) {
        return "enter a number"
    }
    switch (operator) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
        case "%":
            return num1 % num2
        default:
        return "eroor"      
    }
}


// output
// numbers
// operator

$('.numbers').on('click' , function(event){
    let num = event.target.innerText
    let pre = $('#output').text()
    $('#output').text(pre + num)

})
$('.operator').on('click' , function(event){
    let operator = event.target.innerText
    let pre = $('#output').text()
    $('#output').text(pre + " " + operator + " ")
})

$('.final').on('click' , function(event){
    let total = $('#output').text()
   
    let num1 = total.split(" ")[0]
    let num2 = total.split(" ")[2]
    let operator = total.split(" ")[1]
    $('#output').text(caculator(num1, num2 , operator))
})

$('#c').on('click' , function(){
    let total = $('#output').text();
    console.log(total)
    var totalSplit = total.split("")
    console.log(totalSplit)
    if (totalSplit[totalSplit.length-1] == " "){
        totalSplit.pop()
    }
    totalSplit.pop()
 
    $('#output').text(totalSplit.join(""))
})
$('#Ac').on('click' , function(){

    $('#output').text("")

})











