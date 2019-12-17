//'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");


var appData = {
    budget : money,
    expenses : {},
    optionalExpenses : {},
    income : [],
    TimeDate : time,    
    savings : false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert("Бюджет на день" +  appData.budget / 30);
alert(appData.expenses.a1 + appData.expenses.a2 + appData.expenses.a3 + appData.expenses.a4);