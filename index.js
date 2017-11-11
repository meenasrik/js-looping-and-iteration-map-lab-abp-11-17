// Code your solution in this file.
function lowerCaseDrivers (arr) {
  return arr.map(function (name) {
    return name.toLowerCase();
  });
}

function nameToAttributes (arr) {
  return arr.map(function (name) {
    const fname = name.split(' ')[0];
    const lname = name.split(' ')[1];
    return {firstName: fname, lastName: lname};
  });
}

function attributesToPhrase (arr) {
  return arr.map(function (obj) {
    const dname = obj.name;
    const dhometown = obj.hometown;
    return `${dname} is from ${dhometown}`;
  });
}
