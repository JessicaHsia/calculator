const showLink = document.querySelector('input');
const historyList = document.querySelector('.history');
var numStringArray = [];//存數字
var opStringArray = [];//存符號

//按C 清空所有東西
function cln() {
    showLink.value = '';//上方output清空
    historyList.innerHTML = '';//下方歷史紀錄清空
    numStringArray = [];
};

//按del 清空input值 歷史紀錄不會清空
function del() {
    console.log(showLink.value);
    let linkLength = showLink.value.length;
}

//按計算區
function insert(e) {
    //input顯示出所有數字
    showLink.value += e;
    //歷史紀錄區顯示所有數字
    historyList.innerHTML += `${e}`;
    //每三位數加入一個逗號
    //每個數字的小數點只能有一個
    //運算符不得連續出現
    //0、00不得為數字數字開頭(小數點除外)

    if (showLink.value == 0 && showLink.value == '') {
        showLink.value = '';
    }
    let num = showLink.value.slice(0, -1);//取出數字部分
    switch (e) {
        case '+':
            showLink.value = '';//清空input
            numStringArray.push(num);//將數字放於陣列中
            numStringArray.push('+');//將運算子存於陣列中
            console.log(numStringArray);
            break;
        case '-':
            showLink.value = '';//清空input
            numStringArray.push(num);//將數字放於陣列中
            numStringArray.push('-');//將運算子存於陣列中
            console.log(numStringArray);
            break;
        case '*':
            showLink.value = '';//清空input
            numStringArray.push(num);//將數字放於陣列中
            numStringArray.push('*');//將運算子存於陣列中
            console.log(numStringArray);
            break;
        case '/':
            showLink.value = '';//清空input
            numStringArray.push(num);//將數字放於陣列中
            numStringArray.push('/');//將運算子存於陣列中
            console.log(numStringArray);
            break;

    }
}
//將陣列的運算式算出來
function calSum() {
    var num = Number(numStringArray[numStringArray.length - 1]);
    if (isNaN(num) && showLink == "") {  //如果陣列最後的值是運算式或是小數點且calstr沒有值
        numStringArray.pop();
    } else {
        sentStr(); //將calStr送入陣列
    }
    var arrAnswer = eval(numStringArray.join(""));
    var strAnswer = parseFloat(arrAnswer).toPrecision(12); //處理小數精度問題
    var answer = parseFloat(strAnswer);
    //var answer = eval(numStringArray.join("")); //陣列運算
    console.log("arr of function calSum: " + answer);
    historyList.innerHTML += "=" + answer;
}
//當按下運算符按紐時將數字送入arr的陣列
function sentStr() {
    if (showLink.value != "") {  //避免送空值到arr
        numStringArray.push(showLink.value);
        showLink.value = "";
    }
}