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


let a, b;

for (let i=1; i<3; i++){
    a = prompt("Введите обязательную статью расходов в этом месяце", '');
    b = prompt("Во сколько обойдется?", '');
    if (a != '' && typeof(a) ==="string" && typeof(a)!=null && 
        b != '' && typeof(b) ==="string" && typeof(b)!=null)  {
        appData.expenses[a] = b;
        }
        else
          {
              alert("Неправильно ввели, попробуйте еще раз!");
              i--;
          }
}

appData.MoneyPerDay = appData.budget / 30;
alert("Бюджет на день" +  appData.MoneyPerDay);