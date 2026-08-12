// Task 1
// Добавьте через addEventListener событие 'click' на параграф .p-1. При клике запускается стрелочная функция t01, которая при событии клик дописывает в .out-1 символ единица. Т.е. кликнули два раза, в .out-1 будет '11'.

const p1 = document.querySelector('.p-1');
const out1 = document.querySelector('.out-1');

const t01 = () => out1.textContent += '1';

p1.addEventListener('click', t01);


// Task 2
// Добавьте через addEventListener событие 'dblclick' на кнопку .b-2. При событии запускается стрелочная функция t02, которая окрашивает .out-2 в backgroundColor 'orange'.

const b2 = document.querySelector('.b-2');
const out2 = document.querySelector('.out-2');

const t02 = () => out2.style.backgroundColor = 'orange';

b2.addEventListener('dblclick', t02);

// Task 3
// Добавьте через addEventListener событие 'mouseup' на кнопку .p-3. При событии запускается стрелочная функция t03, которая выводит в .out-3 строку 'mouseup'.

const p3 = document.querySelector('.p-3');
const out3 = document.querySelector('.out-3');

const t03 = () => out3.textContent = 'mouseup';

p3.addEventListener('mouseup', t03);

// Task 4
// Добавьте через addEventListener событие 'mousedown' на кнопку .p-4. При событии  запускается стрелочная функция t04, которая при выводит в .out-4 строку 'mousedown'.

const p4 = document.querySelector('.p-4');
const out4 = document.querySelector('.out-4');

const t04 = () => out4.textContent = 'mousedown';

p4.addEventListener('mousedown', t04);

// Task 5
// Добавьте через addEventListener событие 'mouseover' на .block-5.  При событии запускается стрелочная функция t05, которая выводит в .out-5 строку 'mousedown'.

const div5 = document.querySelector('.block-5');
const out5 = document.querySelector('.out-5');

const t05 = () => out5.textContent = 'mouseover';

div5.addEventListener('mouseover', t05);

// Task 6
// Добавьте через addEventListener событие 'mouseout' на .block-6.  При событии запускается стрелочная функция t06, которая добавляет классу .block-6 класс 'bg-orange'.

const div6 = document.querySelector('.block-6');

const t06 = () => div6.classList.add('bg-orange');

div6.addEventListener('mouseout', t06);

// Task 7
// Добавьте событие click на кнопку .b-7, по событию запускается стрелочная функция t07. Функция отключает событие contextmenu на блоке .block-7.

const b7 = document.querySelector('.b-7');
const div7 = document.querySelector('.block-7');
let disabled7 = false;

const t07 = () => disabled7 = true;

div7.addEventListener('contextmenu', (event) => {
    if (disabled7) event.preventDefault();
});

b7.addEventListener('click', t07);

// Task 8
// Добавьте событие mousemove на блок .block-8. При событии запускается стрелочная функция t08.

const div8 = document.querySelector('.block-8');
let w = 100;

const t08 = () => {
    w++;
    div8.style.width = w + 'px';
};

div8.addEventListener('mousemove', t08);

// Task 9
// Добавьте событие click на .block-9. При клике запускается функция t09 (стрелочная). Функция при срабатывании поворачивает блок .block-9 на 15 градусов. 
// Т.е. после двух кликов будет блок повернут на 30 градусов.

const div9 = document.querySelector('.block-9');
let angle = 0;

const t09 = () => {
    angle += 15;
    div9.style.transform = `rotate(${angle}deg)`;
};

div9.addEventListener('click', t09);


// Task 10
// При клике на кнопке .b-10 запускается функция t10. Функция должна добавлять через addEventListener событие mousemove на блок .block-10. При срабатывании события запускается функция blockSize.

const div10 = document.querySelector('.block-10');

const blockSize = () => {
    let w = div10.offsetWidth;
    w++;
    div10.style.width = w + 'px';
};

const t10 = () => div10.addEventListener('mousemove', blockSize);

document.querySelector('.b-10').addEventListener('click', t10);


// Task 11
// При клике на кнопке .b-11 запускается функция t11. Функция должна удалять через removeEventListener событие mousemove на блоке .block-10.

const t11 = () => div10.removeEventListener('mousemove', blockSize);

document.querySelector('.b-11').addEventListener('click', t11);


// Task 12
// Добавьте на input.i-12 событие input с помощью addEventListener. При событии запускается стрелочная функция t12. Функция должна получать value из input.i-12 и выводить в .out-12.

const out12 = document.querySelector('.out-12');
const i12 = document.querySelector('.i-12');

const t12 = () => out12.textContent = i12.value;

i12.addEventListener('input', t12);

// Task 13
// Добавьте событие copy на input.i-13. При срабатывании события запускается функция t13, которая выводит в .out-13 строку 'copy'.

const out13 = document.querySelector('.out-13');
const i13 = document.querySelector('.i-13');

const t13 = () => out13.textContent = 'copy';

i13.addEventListener('copy', t13);

// Task 14
// Добавьте событие paste на input.i-14. При срабатывании события запускается функция t14, которая выводит в .out-14 вставленный в input.i-14 текст.

const out14 = document.querySelector('.out-14');
const i14 = document.querySelector('.i-14');

const t14 = (event) => out14.textContent = event.clipboardData.getData('text');

i14.addEventListener('paste', t14);

// Task 15
// Добавьте событие cut на input.i-15. При срабатывании события запускается функция t15, которая добавляет .i-15 атрибут placeholder с текстом 'cut'

const i15 = document.querySelector('.i-15');

const t15 = () => i15.placeholder = 'cut';

i15.addEventListener('cut', t15);

// Task 16
// Добавьте событие focus на input.i-16. При срабатывании события запускается функция t16, которая добавляет .i-16 класс  'focus-input'.

const i16 = document.querySelector('.i-16');

const t16 = () => i16.classList.add('focus-input');

i16.addEventListener('focus', t16);

// Task 17
// Добавьте событие blur на input.i-16. При срабатывании события запускается функция t17, которая удаляет .i-16 класс  'focus-input'.

const t17 = () => i16.classList.remove('focus-input');

i16.addEventListener('blur', t17);

// Task 18
// Добавьте событие click на кнопку .b-18. По клику запускается стрелочная функция t18, которая ищет элемент с tabindex = 18 и делает элемент focus().

const b18 = document.querySelector('.b-18');

const t18 = () => document.querySelector('[tabindex="18"]').focus();

b18.addEventListener('click', t18);

// Task 19
// Добавьте событие canсel на input .i-19. По клику запускается стрелочная функция t19, которая выводит в .out-19 текст 'Cancel'.

const out19 = document.querySelector('.out-19');
const i19 = document.querySelector('.i-19');

const t19 = () => out19.textContent = 'Cancel';

i19.addEventListener('cancel', t19);

// Task 20
// Добавьте событие dragstart на .block-20. По событию запускается стрелочная функция t20. Функция выводит в .out-20 строку 'drag'.

const out20 = document.querySelector('.out-20');
const div20 = document.querySelector('.block-20');

const t20 = () => out20.textContent = 'drag';

div20.addEventListener('dragstart', t20);