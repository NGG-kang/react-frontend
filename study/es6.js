const name = '';
const age = '';
///////////////
// Object 선언
// 1.
// var 대신에 const
// var를 사용시 어디에 있든 최상단에 var 를 선언해준다
// 고로 하단에 선언하고 상단에 불러와도 undefined 라는 내용이 나온다
// var, let, const(상수)
// 보통 var는 안쓰고 대부분 const, 간혹 let을 사용한다

const tom = { lang: 'good' };
tom.lang = 'javascript';
tom['lang'] = 'NoWay';
console.log(tom);
// const는 상수이나 상수 안의 속성 또는 object의 값 변경은 가능하다

// 2.
// const tom3 = {
//   'score' + '1': 10,
// };
const tom3 = {
  ['score' + '1']: 10,
};

const key1 = 'good';
const tom4 = {
  name: 'Tom',
  [key1]: 'good?',
};
// 값을 넣을때는 대괄호로 넣어줘야 한다
// 파이썬은 그냥 넣어도 괜찮음

// 3.
// 이름과 값이 같을 때
// const tom5 = {
//   name: name,
//   age: age,
//   print: function () {
//     console.log(`name: ${this.name}, age: ${this.age}`);
//   },
// };
// 아래와 같이 줄일 수 있다

const tom5 = {
  name,
  age,
  print() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  },
};

///////////////
// 객체 복사
// JS는 object/array에 대해서는 대입시에 얕은 복사
const obj1 = { value1: 10 };
const obj2 = obj1;
const obj3 = JSON.parse(JSON.stringify(obj1));
obj1.value1 += 1;
// obj1 = 11, obj2 = 11, obj3 = 10
// 값을 그대로 복사하는게 아니라 주소를 복사하는 것이다
// obj3는 새로운 객체를 만들어줌

// Template Literals
// `~~~ ${value} ~~~`
const a = `string Text ${name} Text`;

///////////////
// 배열 비구조화
let [name1] = ['Tom', 10, 'seoul'];
let [, age1] = ['Tom', 10, 'seoul'];
let [name2, age2, region2, height2] = ['Tom', 10, 'seoul'];
// height는 undefined 할당, 파이썬은 valueError 예회
let [name3, age3, region3, height3 = 150] = ['Tom', 10, 'seoul'];
// 디폴트값 할당

function get_height() {
  console.log('get height 호출');
  return 150;
}
let [name4, age4, region4, height4 = get_height()] = ['Tom', 10, 'seoul'];
// 디폴트값 할당이 필요할 때 함수 호출

////////////////
// 객체의 비구조화
const tom6 = {
  name: 'Tom',
  age: 10,
  region: 'seoul',
};
const { age5, name5, height5 } = tom;
// 객체에서 필요한 값들만 뽑아냄
// height는 undefined

// 동일한 구조
const person1 = (person) => {
  console.log(person.name);
};
const person2 = ({ name }) => {
  console.log(name);
};

// 동일한 구조
for (const person of people) {
  console.log(person.name, person.age);
}
for (const { name, age } of people) {
  console.log(name, age);
}
// 객체 안의 값들을 {}괄호를 이용해서 뺄 수 있다(간편하게 사용하기 위함인듯)
// 파이썬과 다르게 자바스크립트는 of를 사용

////////////////
// 전개 연산자
// TODO: python도 *로 쓰는 전개 연산자가 있다고 한다 알아봐야 할듯

let [name7, ...rest] = ['Tom', 10, 'seoul'];
// 앞의 name은 Tom 나머지 값은 rest 배열로 들어간다

let names = ['set', 'set2'];
let student = ['tom', ...names, ...names];
// tom, [set, set2], [set, set2] 이렇게 들어간다

let tom = {
  name: 'tom',
  age: 10,
};
let steve = {
  ...tom, // tom의 모든 속성을 가져오되
  name: 'Steve', // 속성명이 중복인 경우 마지막 값으로 대체
};

// max 함수는 nodejs에서 array(배열)로 넘겨주면 안된다
// max(...array)로 넘겨줘야함
// python에서는 max(array)가 가능하다

// 함수에서 디폴트 값에 함수를 적용 할 경우
// nodejs에서는 값이 실제로 불릴 때 호출
// python에서는 함수가 만들어 질 때 한번 호출
// 그 뒤로는 리턴값 지정된거로 계속 간다

////////////////
// Named Parameters
// 파이썬 함수에서는 파라메터에 어떻게 넣든 상관없음
// nodejs에서는 인덱스에 맞춰서 들어간다
// object를 넘기면 object로 넘겨야 한다(당연한건데?)

////////////////
// Arrow function
// 1.
// 3가지 함수 방법이 있음
// arrow function은 리턴값이 없어도
// 하나의 표현식만 있으면 자동으로 리턴값 지정
function fn1(x, y) {
  return x + y;
}
const fn2 = function (x, y) {
  return x + y;
};
const fn3 = (x, y) => x + y;
const fn4 = (x) => x + 10;

// 2.
// this와 arguments를 바인딩 하지 않는다
function fn5() {
  this; // 상단의 this와
  function fn6() {
    this; // 하단의 this는 다르다
  }
}

function fn7() {
  this(
    // arrow 함수를 쓰면
    () => {
      this; // 상단의 this와 하단의 this가 같다
    },
  )();
}

////////////////
// 콜백 처리
// 콜백 -> Promise -> async/await(ES8)
// TODO: Promise 함수, async/await 찾아보기, then catch란?
//

////////////////
// 클래스와 상속
function Person() {}
Person.prototype.print = function () {};
var tom = new Person();

// 문법이 다를 뿐 여전히 prototype 쓸 수 있음
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log(this.name + this.age);
  }
}

var tom2 = new Person2('Tom', 10);
tom2.print();

class Developer extends Person2 {
  constructor(name, age, field) {
    super(name, age);
    this.field = field;
  }
  print() {
    super.print();
    console.log(`field : ${this.field}`);
  }
}

////////////////
// 모듈, ES6 module
// React 쓸 때 사용할 모듈 시스템
// IE를 포함한 구형 브라우저에서는 미지원
// CommonJS - require
// export, import from

////////////////
// 고차 함수 High Order Function
// 함수를 인자로 받거나 반환이 가능하고, 다른 함수를 조작하는 함수
// 함수, 클래스 역시 모두 객체
// 파이썬에서 장식자 문법이랑 비슷하다고 볼 수 있다
// 함수를 함수로 감싸는 것

function base_10(fn) {
  function wrap(x, y) {
    return fn(x, y) + 10;
  }
  // 동일한 문법
  // const wrap = (x, y) => fn(x, y) + 10;
  // 또는
  // return (x, y) => fn(x, y) + 10;
  return wrap;
}
// 동일한 함수
// const base_10 = (fn) => (x, y) => fn(x, y) + 10;
const base_10 = (fn) => (x, y) => fn(x, y) + 10;
function sum(x, y) {
  return x + y;
}
// 동일한 함수
// const sum = (x, y) => a + b;

const result = base_10(sum(1 + 2));
console.log(result);

// 순수함수
// 하나 이상의 인자를 받고, 인자를 변경하지 않고, 참조하여 새로운 값을 반환
// 상태값, 속성값이 같으면 항상 같은 값을 반환
// 다른 side effect를 발생시키지 않아야 한다 (http요청, 데이터 저장, 쿠키조작 등)
// 컴포넌트 상태값은 불변 객체로 관리 해야하만 한다
// 수정할때는 기존값 변경이 아닌, 같은 이름의 새로운 객체 생성
// 이를 통해 UI개발의 복잡도를 낮추고, 버그 발생 확률도 줄인다

const Header = (porps) => (
  <div>
    <h1>{porps.title}</h1>
  </div>
);
// reduce, filter, map, join
// TODO: 각종 함수들 알아보기

// 커링
// 일부의 인자를 고정한 새로운 함수를 반환하는 함수를 만드는 기법
function userLog(username) {
  function wrap(message) {
    console.log(`${username} - ${message}`);
  }
}
const userLogs = (username) => (message) => {
  console.log(`${username} - ${message}`);
};
const log = userLog('이름');
log('메시지');
// const log를 하면 log는 wrap함수가 된다
// log에 값을 주면 그 값은 wrap의 message로 들어간다
