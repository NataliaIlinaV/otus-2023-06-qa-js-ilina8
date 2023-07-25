function getScore(grade) {
    let sum=0;
for (let key in grade){
 sum+=(grade[key]);
}
return sum;
}

let grade = {
    Masha:55,
    Pasha:4,
    Sasha:3,
};

console.log(getScore(grade));   

