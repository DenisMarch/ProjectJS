//'use strict';
let beginBtn  = document.querySelector('#start'),
    budget    = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level     = document.getElementsByClassName('level-value')[0],
    expenses  = document.getElementsByClassName('expenses-value')[0],
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income    = document.getElementsByClassName('income-value')[0],
    monthsavings = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings  = document.getElementsByClassName('yearsavings-value')[0],
    poleInput    = document.getElementsByClassName('expenses-item'),
    btnExpenses  = document.getElementsByTagName('button')[0],
    btnOptional  = document.getElementsByTagName('button')[1],
    btnBudget    = document.getElementsByTagName('button')[2],
    optionalItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('#income'),
    checkBox     = document.querySelector('#savings'),
    sum     = document.querySelector('.choose-sum'),
    percent     = document.querySelector('.choose-percent'),
    year     = document.querySelector('.year-value'),
    month     = document.querySelector('.month-value'),
    day     = document.querySelector('.day-value'),
    money,
    levelBudget,
    sumExpenses = 0,
    time;

beginBtn.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");
    while(money == '' || isNaN(money) || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.TimeDate = time;
    appData.budget = money;
    budget.textContent = money;
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDay();
    btnExpenses.disabled = false;
    btnOptional.disabled = false;
    btnBudget.disabled = false; 
});

btnExpenses.addEventListener('click', function(){
    let a, b;
     for (let i=0; i<poleInput.length; i++){
        a = poleInput[i].value;
        b = poleInput[++i].value;
        //if (a != '' && typeof(a) ==="string" && typeof(a)!=null && 
        //b != '' && typeof(b) ==="string" && typeof(b)!=null)  {
        appData.expenses[a] = b;
        sumExpenses += +b; 
     //else {
     //   alert("Неправильно ввели, попробуйте еще раз!");
     //   i--;  }
    }
    expenses.textContent = sumExpenses;
});

btnOptional.addEventListener('click', function(){
    for (let i=0; i<optionalItem.length; i++){
        let a = optionalItem[i].value;
        appData.optionalExpenses[i] = a;
        optionalexpenses.textContent += appData.optionalExpenses[i] + ' ';
    } 
});

btnBudget.addEventListener('click', function(){
    if (appData.budget != undefined) {
    appData.MoneyPerDay = ((appData.budget - sumExpenses)/ 30).toFixed(2);
    daybudget.textContent = appData.MoneyPerDay;
    if (appData.MoneyPerDay < 100) {
        level.textContent = 'Малообеспеченный';
        appData.richMan = 'Малообеспеченный';}
    else if (appData.MoneyPerDay>100 && appData.MoneyPerDay<1500) {
        level.textContent = 'Средний достаток';
        appData.richMan = 'Средний достаток';}
    else if (appData.MoneyPerDay>1500) {
        level.textContent = 'Высокий достаток';
        appData.richMan = 'Высокий достаток';}
    }
    else { daybudget.textContent = 'Error'; }
});

chooseIncome.addEventListener('input', function() {
    let inc = chooseIncome.value;
    appData.income = inc.split(', ');
    income.textContent = appData.income;    
});

checkBox.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false; }
    else { appData.savings = true; }
});

sum.addEventListener('input', function(){
    if (appData.savings == true) {
        let summa = +sum.value,
        procent = +percent.value;
    monthsavings.textContent = (summa/100/12*procent).toFixed(2);
    yearsavings.textContent = summa/100*procent;
    }
});

percent.addEventListener('input', function(){
    if (appData.savings == true) {
        let summa = +sum.value,
        procent = +percent.value;
    monthsavings.textContent = (summa/100/12*procent).toFixed(2);
    yearsavings.textContent = summa/100*procent;
    }
});

var appData = {
    budget : money,
    expenses : {},
    optionalExpenses : {},
    income : [],
    TimeDate : time,    
    savings : false,
    chooseExpenses : {}, 
    richMan : levelBudget,
    detectDayBudget : {},
    chooseIncome : {}
};
