let visitsCountMap = new Map();

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let Ali = { name: "Ali" };
let Mahdi = { name: "Mahdi" };

countUser(Ali);
countUser(Ali);
countUser(Ali);
countUser(Mahdi);

console.log("Before leave: ", visitsCountMap.get(Ali));
visitsCountMap.delete(Ali);
Ali = null;
console.log("After leave: ", visitsCountMap.entries());
