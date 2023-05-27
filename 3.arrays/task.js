function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
};

function getUsersNamesInAgeRange(users, gender) {

  if ((users.length === 0) || (gender !== "женский" && gender !== "мужской" )) {
     return 0;
   }; 
  
  let sumAge = users.filter((person) => person.gender === gender);
  
  return sumAge.map((item) => item = item.age).reduce((sum, elem) => sum + elem) / sumAge.length;
}; 