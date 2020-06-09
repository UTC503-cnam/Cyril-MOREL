const maximize = v =>m  =>v<m? v:m;

const maximize_3= maximize(3);
const maximize_4= maximize(4);

console.log(maximize_3(2))
console.log(maximize_3(10))
console.log(maximize_4(2))
console.log(maximize_4(20))