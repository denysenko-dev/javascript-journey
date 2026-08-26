// iTGid.info - курс JS24/2

// В задачах, где говорится пробел - применяем символ пробела - нажатие на клавишу space.
// Там где говорится дефис - подразумевается черта на клавиатуре "минус", между символами 0 и =

// Task 01
// Создайте функцию. Функция с помощью вложенных циклов создает строку:
// 4=4 3 2 1 0 3=4 3 2 1 0 2=4 3 2 1 0 1=4 3 2 1 0 0=4 3 2 1 0
// и выводит в .out-1.
// Напоминаю. Если можно избежать, то не делайте вывод на страницу внутри цикла.

const out1 = document.querySelector('.out-1');

const t01 = () => {
    let cycleString = '';

    for (let i = 4; i >= 0; i--) {
        cycleString += `${i}=`;
        for (let k = 4; k >= 0; k--) {
            cycleString += `${k} `;
        }
    }

    out1.textContent = cycleString;
};

document.querySelector('.b-1').addEventListener('click', t01);

// Task 02
// Создайте функцию. Функция с помощью вложенных циклов создает строку:
// 0****<br>1****<br>2****<br>3****<br>4****<br>
// и выводит в .out-2 с помощью innerHTML

const out2 = document.querySelector('.out-2');

const t02 = () => {
    let cycleString = '';

    for (let i = 0; i <= 4; i++) {
        cycleString += `${i}`;
        for (let k = 0; k < 4; k++) {
            cycleString += `*`;
        }
        cycleString += `<br>`;
    }

    out2.innerHTML = cycleString;
};

document.querySelector('.b-2').addEventListener('click', t02);


// Task 03
// Функция должна выводить прямоугольник на страницу состоящий из символов звездочка. В горизонтали 6 звездочек, количество линий - число, которое пользователь ввел в input.i-3.
// Перенос строки делайте с помощью тега br.

const out3 = document.querySelector('.out-3');

const t03 = () => {
    let cycleString = '';
    const i3Val = Number(document.querySelector('.i-3').value);

    for (let i = 0; i < i3Val; i++) {
        for (let k = 0; k < 6; k++) {
            cycleString += `*`;
        }
        cycleString += `<br>`;
    }

    out3.innerHTML = cycleString;
};

document.querySelector('.b-3').addEventListener('click', t03);


// Task 04
// Функция должна выводить прямоугольник на страницу состоящий из чисел. В горизонтали 6 чисел от 5 до нуля, количество линий - число, которое пользователь ввел в input.i-4.
// Перенос строки делайте с помощью тега br.

const out4 = document.querySelector('.out-4');

const t04 = () => {
    let cycleString = '';
    const i4Val = Number(document.querySelector('.i-4').value);

    for (let i = 0; i < i4Val; i++) {
        for (let k = 5; k >= 0; k--) {
            cycleString += `${k}_`;
        }
        cycleString += `<br>`;
    }

    out4.innerHTML = cycleString;
};

document.querySelector('.b-4').addEventListener('click', t04);


// Task 05
// Функция должна выводить прямоугольник на страницу состоящий из чисел. В горизонтали числа от введенного в input.i-51 до нуля, количество линий - число, которое пользователь ввел в input.i-52.
// Перенос строки делайте с помощью тега br.

const out5 = document.querySelector('.out-5');

const t05 = () => {
    let cycleString = '';
    const i51Val = Number(document.querySelector('.i-51').value);
    const i52Val = Number(document.querySelector('.i-52').value);

    for (let i = 0; i < i52Val; i++) {
        for (let k = i51Val; k >= 0; k--) {
            cycleString += `${k}_`;
        }
        cycleString += `<br>`;
    }

    out5.innerHTML = cycleString;
};

document.querySelector('.b-5').addEventListener('click', t05);


// Task 06
// Функция должна с помощью циклов рисовать такую фигуру:
// и выводить в .out-6

const out6 = document.querySelector('.out-6');

const t06 = () => {
    let cycleString = '';

    for (let i = 0; i < 3; i++) {
        cycleString += `| `;
        for (let k = 0; k < 4; k++) {
            cycleString += `* `;
        }
        cycleString += `|<br>`;
    }

    out6.innerHTML = cycleString;
};

document.querySelector('.b-6').addEventListener('click', t06);


// Task 07
// Функция должна с помощью циклов рисовать такую фигуру:
// и выводить в .out-7.

const out7 = document.querySelector('.out-7');

const t07 = () => {
    let cycleString = '';

    for (let i = 0; i <= 4; i++) {
        cycleString += `| `;
        for (let k = 0; k < 4; k++) {
            cycleString += i === 0 || i === 4 ? `- ` : `* `;
        }
        cycleString += `|<br>`;
    }

    out7.innerHTML = cycleString;
};

document.querySelector('.b-7').addEventListener('click', t07);


// Task 08
// Функция должна рисовать такую фигуру
//10x01x%
//10x01x
//10x01x
// и выводить в .out-08

const out8 = document.querySelector('.out-8');

const t08 = () => {
    let cycleString = '';

    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 2; k++) {
            cycleString += k === 0 ? `10x` : `01x`;
        }
        cycleString += i === 0 ? `%<br>` : `<br>`;
    }

    out8.innerHTML = cycleString;
};

document.querySelector('.b-8').addEventListener('click', t08);


// Task 09
// Функция должна рисовать такую фигуру
// и выводить в .out-09

const out9 = document.querySelector('.out-9');

const t09 = () => {
    let cycleString = '';

    for (let i = 0; i < 6; i++) {
        for (let k = 0; k < 3; k++) {
            cycleString += i % 2 === 0 ? `01` : `10`;
        }
        cycleString += `<br>`;
    }

    out9.innerHTML = cycleString;
};

document.querySelector('.b-9').addEventListener('click', t09);


// Task 10
// Функция должна вывести в .out-10 такую строку:
// 5 0 4 1 3 2 2 3 1 4 0 5

const out10 = document.querySelector('.out-10');

const t10 = () => {
    let cycleString = '';
    let counter = 0;

    for (let i = 5; i >= 0; i--) {
        cycleString += `${i} `;
        for (let k = 0; k < 1; k++) {
            cycleString += `${counter} `;
            counter++;
        }
    }

    out10.textContent = cycleString;
};

document.querySelector('.b-10').addEventListener('click', t10);


// Task 11
// Функция должна рисовать такую фигуру
// и выводить в .out-11

const out11 = document.querySelector('.out-11');

const t11 = () => {
    let cycleString = '';
    let counterStars = 0;

    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 4; k++) {
            cycleString += counterStars < k ? `` : `*`;
        }
        counterStars++;
        cycleString += `<br>`;
    }

    out11.innerHTML = cycleString;
};

document.querySelector('.b-11').addEventListener('click', t11);


// Task 12
// Функция должна рисовать такую фигуру
// и выводить в .out-12

const out12 = document.querySelector('.out-12');

const t12 = () => {
    let cycleString = '';
    let counterStars = 0;

    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 4; k++) {
            cycleString += counterStars < k ? `_ ` : `* `;
        }
        counterStars++;
        cycleString += `<br>`;
    }

    out12.innerHTML = cycleString;
};

document.querySelector('.b-12').addEventListener('click', t12);


// Task 13
// Функция должна рисовать такую фигуру
// и выводить в .out-13

const out13 = document.querySelector('.out-13');

const t13 = () => {
    let cycleString = '';
    let numbers = 0;

    for (let i = 0; i < 4; i++) {
        for (let k = 0; k <= 10; k++) {
            cycleString += `${numbers}_`;
            if (k !== 10) numbers++;
        }
        cycleString += `<br>`;
    }

    out13.innerHTML = cycleString;
};

document.querySelector('.b-13').addEventListener('click', t13);


// Task 14
// Функция должна рисовать такую фигуру
// и выводить в .out-14

const out14 = document.querySelector('.out-14');

const t14 = () => {
    let cycleString = '';
    let numbers = 0;

    for (let i = 0; i < 4; i++) {
        for (let k = 0; k <= 10; k++) {
            cycleString += k === 10 ? `${(i + 1) * k}_` : `${i}${numbers}_`;
            numbers++;
        }
        numbers = 0;
        cycleString += `<br>`;
    }

    out14.innerHTML = cycleString;
};

document.querySelector('.b-14').addEventListener('click', t14);

// Task 15
// Функция должна рисовать такую фигуру
// и выводить в .out-15

const out15 = document.querySelector('.out-15');

const t15 = () => {
    let cycleString = '';
    let numbersCounter = 1;

    for (let i = 0; i < 4; i++) {
        for (let k = 1; k < 5; k++) {
            cycleString += numbersCounter < k ? `` : `${k}_`;
        }
        numbersCounter++;
        cycleString += `<br>`;
    }

    out15.innerHTML = cycleString;
};

document.querySelector('.b-15').addEventListener('click', t15);


// Task 16
// Функция должна рисовать такую фигуру
// и выводить в .out-16

const out16 = document.querySelector('.out-16');

const t16 = () => {
    let cycleString = '';
    let numbersCounter = 1;

    for (let i = 1; i < 5; i++) {
        for (let k = 1; k < 5; k++) {
            cycleString += numbersCounter < k ? `` : `${i}_`;
        }
        numbersCounter++;
        cycleString += `<br>`;
    }

    out16.innerHTML = cycleString;
};

document.querySelector('.b-16').addEventListener('click', t16);


// Task 17
// Функция должна рисовать такую фигуру
// и выводить в .out-17

const out17 = document.querySelector('.out-17');

const t17 = () => {
    let cycleString = '';
    let numbersCounter = 5;

    for (let i = 1; i < 5; i++) {
        for (let k = 1; k < 5; k++) {
            cycleString += numbersCounter > k ? `${k}_` : ``;
        }
        numbersCounter--;
        cycleString += `<br>`;
    }

    out17.innerHTML = cycleString;
};

document.querySelector('.b-17').addEventListener('click', t17);


// Task 18
// Функция должна рисовать такую фигуру
// и выводить в .out-18

const out18 = document.querySelector('.out-18');

const t18 = () => {
    let cycleString = '';
    let numbersCounter = 4;

    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 5; k++) {
            cycleString += numbersCounter > k ? `=_` : `${k}_`;
        }
        numbersCounter--;
        cycleString += `<br>`;
    }

    out18.innerHTML = cycleString;
};

document.querySelector('.b-18').addEventListener('click', t18);


// Task 19
// Функция должна рисовать такую фигуру
// и выводить в .out-19

const out19 = document.querySelector('.out-19');

const t19 = () => {
    let cycleString = '';
    let numbersCounter = 0;

    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 5; k++) {
            cycleString += numbersCounter <= k ? `${k}_` : `=_`;
        }
        numbersCounter++;
        cycleString += `<br>`;
    }

    out19.innerHTML = cycleString;
};

document.querySelector('.b-19').addEventListener('click', t19);


// Task 20
// Функция должна рисовать такую фигуру
// и выводить в .out-20

const out20 = document.querySelector('.out-20');

const t20 = () => {
    let cycleString = '';
    let firstNumbersCounter = 4;
    let secondNumbersCounter = 5;

    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 10; k++) {
            cycleString += firstNumbersCounter > k || secondNumbersCounter < k ? `${k}_` : `*_`;
        }
        firstNumbersCounter--;
        secondNumbersCounter++;
        cycleString += `<br>`;
    }

    out20.innerHTML = cycleString;
};

document.querySelector('.b-20').addEventListener('click', t20);