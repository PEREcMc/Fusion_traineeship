// Task 1
const arrStr = ["asd", "afffd", "cc", "kk"];

function checkStr (arr) {
    let checkArr = [];

    for(let i = 0; i < arr.length - 1; i++){
        if (arr[i][0] == arr[i + 1][0] && arr[i][arr[i].length - 1] == arr[i + 1][arr[i + 1].length - 1]) {
            checkArr.push(true);
        } else {
            checkArr.push(false);
        }
    }
    return checkArr;
}

console.log(checkStr(arrStr));

// Task 2
// [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// console.log([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]].flat(9));

const array = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

function flatten (arr) {
    const result = [...arr];
    // console.log([...result]);
    let i = 0;
  
    while (i < result.length) {
      if (result[i] instanceof Array) {
        result.splice(i, 1, ...result[i]);
      } else {
        i++;
      }
    }
    return result;
}

console.log(flatten(array));

// Task 3
const solution = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

function transformArr (arr) {
    let strFromArr = [];

    for (let index = 0; index < arr.length - 1; index++) {
        strFromArr.push(arr[index].toString());
      if (index === arr.length - 1) {
        break;
      }

      let elem1 = arr[index];
      let elem2 = arr[index + 1];
      let isRange = false;

      while (elem2 - elem1 === 1 && index < arr.length - 1) {

          index++ 
          elem1 = arr[index];
          elem2 = arr[index + 1];
          isRange = true;
      }

      if (isRange) {
        strFromArr[strFromArr.length - 1]+="-" + arr[index].toString()
      }
  }
    return strFromArr.toString();
}

console.log(transformArr(solution));

// Task 4
// Написать функцию которая преобразует массив users в объект типа (смотри результат). То есть у нас должен быть объект
// -  ключами которого является id юзера.
// -  массив cars внутри каждого юзера нужно заполнить id данных авто вместо названия
// - важно чтобы оригинальный объект юзера был не изменен

const users = [
  {
    id: 1,
    name: 'Alex',
    cars: ['audi', 'bmw', 'porshe']
  },
  {
    id: 2,
    name: 'Tony',
    cars: ['audi']
  },
  {
    id: 3,
    name: 'Jony',
    cars: ['lada', 'bmw', 'ford']
  }
];
const cars = {
  1: {
    id: 1,
    title: 'audi'
  },
  2: {
    id: 2,
    title: 'bmw'
  },
  3: {
    id: 3,
    title: 'porshe'
  },
  4: {
    id: 4,
    title: 'lada'
  },
  5: {
    id: 5,
    title: 'ford'
  },
};

function convertArrToObj() {
  let copyUsers = JSON.parse(JSON.stringify(users));

  let formatedUsers = copyUsers.reduce( (acc, user) => {
      acc[user.id] = user;
      return acc;
  }, {});

  for (let item in formatedUsers) {
      let { cars: carsUsers } = formatedUsers[item];
      
          for (let i = 0; i < carsUsers.length; i++) {
              for (let objCar in cars) {
                  let { id, title } = cars[objCar];

                  if (carsUsers[i] === title) {
                      carsUsers[i] = id;
                  }
              }
          }
  }
  return formatedUsers;
}
convertArrToObj();
console.log(convertArrToObj());
console.log(users);






// Попытки .... не в ту сторону(
/* function getCarsProperty() {
  let carsProperty = []; 
      for (let key in cars) {
        carsProperty.push(cars[key]);
  }
  return carsProperty;
}
function getCarsId() {
  let carsId = []; 
      for (let key in cars) {
         carsId.push(cars[key].id);
  }
  return carsId;
}
function getCarsTitle() {
  let carsTitle = [];
      for (let key in cars) {
         carsTitle.push(cars[key].title);
  }
  return carsTitle;
}

function convertArrToObj() {
  let formatedUsers = users.reduce( (acc, user) => {
      acc[user.id] = user;
      return acc;
  }, {});

  getCarsProperty().forEach( prop => {
    let titleCar = prop.title;
    let idCar = prop.id;

    for (let key in formatedUsers) {
      let arrCars = formatedUsers[key].cars;
      
      arrCars.forEach( item => {
        console.log(item);
        if (item === titleCar) {
            item = idCar;
        }

      })
    }
  })

  for (let key in cars) {
    let carsId = cars[key].id;
    let carsTitle = cars[key].title;
    // console.log(carsId);
    // console.log(carsTitle);

    for (let key in formatedUsers) {
      let arrCars = formatedUsers[key].cars;
  
      // console.log(arrCars);
      
      arrCars.map(item => {
        console.log(item);
        if (item === carsTitle) {
            item = carsId;
        }
        return arrCars;
      })
    }
  }
  return formatedUsers;
}
 */