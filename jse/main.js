console.log("Hello");
/* 표기법
* dash-case => html, css ex) the-quick-brown-fox-jumps-over-the-lazy-dog
* snke_case => html, css ex) the_quick_brown_fox_jumps_over_the_lazy_dog
* camelCase => js ex)the_quick_brown_fox_jumps_over_the_lazy_dog
* PascalCase => js ex)The_quick_brown_fox_jumps_over_the_lazy_dog
*/

console.log(new Date('2021-01-30').getDay());
console.log(new Date('2021-01-31').getDay());
console.log(new Date('2021-02-01').getDay());

// 한 줄 메모
/* 한 줄 메모 */
/**
 * 여러 줄
 * 메모 1
 * 메모 2
 */

// String(문자 데이터)
// 따옴표를 사용
let myName = "Homin";
let email = "zz33z3@asdasd.as"
let hello = `Hello ${myName}?!`

console.log(myName);
console.log(email);
console.log(hello);

// Number(숫자 데이터)
// 정수 및 부동소수점 숫자.
let number = 123;
let opacity = 1.57;

console.log(number);
console.log(opacity);

// Boolean(불린 데이터)
// true, false 두 가지 값밖에 없는 논리 데이터
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

// Undefined
// 값이 할당되지 않은 상태
let undef;
let obj = { abc: 123 };

console.log(undef);
console.log(obj.abc);
console.log(obj.xyz);

// Null
// 어떤 값이 의도적으로 비어있음을 의미
let empty = null;

console.log(empty);

// Objet(객체 데이터)
// 여러 데이터를 Key:Value 형태로 저장
let user = {
  // Key: Value,
  name: 'ParkHoMin',
  age: 99,
  isValid: true
};

console.log(user.name);
console.log(user.age);
console.log(user.isValid);

// Array(배열 데이터)
// 여러 데이터를 순차적으로 저장/ []

let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 변수
// 데이터를 저장하고 참조(사용)하는 데이터의 이름 var, let, const(var는 권장사양이 아님)
// let은 값(데이터)의 재할당 가능, const는 값(데이터)의 재할당 불가능
let a = 2;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// 함수
// 특정 동작(기능)을 수행하는 일부 코드의 집합(부분)

//함수 선언
function helloFunc() {
  console.log(1234);
}

//함수 호출
helloFunc();

function returnFunc() {
  return 123;
}

let reF = returnFunc();
console.log(reF);

function sum(a, b) {
  return a + b;
}

let sumA = sum(1, 2);
let sumB = sum(7, 12);
let sumC = sum(2, 4);

console.log(sumA);
console.log(sumB);
console.log(sumC);

// 기명(이름이 있는) 함수
function hello2() {
  console.log('Hello~');
}

// 익명(이름이 없는) 함수
let world = function () {
  console.log('World');
}

hello2();
world();


// 객체 데이터
const homin = {
  name: 'hm',
  age: 99,
  // 메소드(Method)
  getName: function () {
    return this.name;
  }
};

const hisName = homin.getName();
console.log(hisName);
console.log(homin.getName());

//조건문
// 조건의 결과(truthy, falsy)에 따라 다른 코드르르 실행하는 구문 if or else

let isShow2 = true;
let checked2 = false;

if (isShow2) {
  console.log('Show');
}

if (!checked2) {
  console.log('Checked false')
}

if (isShow2) {
  console.log('Show');
} else {
  console.log('Hide');
}

// DOM API
// Document Object Model, Application Programming Interface
let boxEl = document.querySelector('.box');
console.log(boxEl);

//HTML 요소에 적용할 수 있는 메소드
boxEl.addEventListener();

// 인수(Arguments)를 추가 가능
boxEl.addEventListener(1, 2);

// 1 - 이벤트(Event, 상황)
boxEl.addEventListener('click', 2);

// 2 - 핸들러(Handler, 실행할 함수)
boxEl.addEventListener('click', function () {
  console.log('Click~!');
});

// 요소의 클래스 정보 객체 활용!
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains);

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains);


boxEl.addEventListener('click', function () {
  console.log('Click');
  boxEl.classList.add('active');
  console.log(
    boxEl.classList.contains('active')
  );
  boxEl.classList.remove('active');
  console.log(
    boxEl.classList.contains('active')
  );
});

// HTML 요소(Element) 모두 검색/찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

//찾은 요소들 반복해서 함수 실행
// 익명 함수를 인수로 추가
boxEls.forEach(function () { });

// 첫 번째 매개변수(boxEl): 반복 중인 요수
// 두 번째 매개변수(index): 반복 중인 번호
boxEls.forEach(function (boxEl, index) { });

//출력
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(intdex, boxEl);
});

const boxEl2 = document.querySelector('.box');

//Getter, 값을 얻는 용도
console.log(boxEl2.textContent);

//Setter, 값을 지정하는 용도
boxEl2.textContent = 'PWM';
console.log(boxEl.textContent);

//메소드 체이닝
const a3 = 'Hello~';
//split: 문자를 인수 기준으로 쪼개서 배열로 반환
//reverse: 배열을 뒤집기
//join: 배열을 인수 기준으로 문자로 병합해 반환
const b2 = a3.split('').reverse().join('');

console.log(a3);
console.log(b2);