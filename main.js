var users = [
  { id: 1, name: "Bob", email: "bob@gmail.com" },
  { id: 2, name: "Cindy", email: "cindy@gmail.com" },
  { id: 3, name: "Susan", email: "susan@gmail.com" },
  { id: 4, name: "Sarah", email: "sarah@gmail.com" },
  { id: 5, name: "Tim", email: "tim@gmail.com" },
];
const pluck = function(array, property) {
  return array.map(function(item) {
    return item[property];
  });
};
