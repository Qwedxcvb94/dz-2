let values = [200, 45, 50];
let sumResult = 0;
for (let i = 0; i < values.length; i++) {
    console.log(`${sumResult} + ${values[i]} = ${sumResult + values[i]}`);
    sumResult += values[i];
}
console.log("Итоговая сумма:", sumResult);