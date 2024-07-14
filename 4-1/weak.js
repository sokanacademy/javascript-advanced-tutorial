let visitsCountMap = new WeakMap(); // map: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
  // console.log(`user: ${user.name} is visits ${count} times.\n`)
}


let john = { name: "John" };

countUser(john); // count his visits
countUser(john); // count his visits
countUser(john); // count his visits

john = null;

// let x = visitsCountMap.get({ name: "John" });
let x = visitsCountMap.get(john);
console.log(x);