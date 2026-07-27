const goods = document.querySelector('.goods');
const square = document.querySelector('.square');
const layer = document.querySelector('.layer');
const consumption = document.querySelector('.consumption');
const bags = document.querySelector('.bags');
const price = document.querySelector('.price');
const goodsImg = document.querySelector('.good-img');

function resetIfEmpty(input) {
    if (input.value.trim() === '') {
        input.value = 1;
    }
}

function calculateConsumption() {
    resetIfEmpty(square);
    resetIfEmpty(layer);

    const squareValue = Number(square.value);
    const layerValue = Number(layer.value);

    if (isNaN(squareValue) || isNaN(layerValue) || squareValue <= 0 || layerValue <= 0) {
        alert('Площадь и толщина слоя должны быть больше 0');
        return;
    }

    if (layerValue > 100) {
        alert('Толщина слоя не должна превышать 100мм');
        return;
    }

    let k = 0;
    let bagPrice = 0;

    const value = goods.value;

    switch (value) {
        case 'budmaster':
            k = 1.9;
            bagPrice = 157;
            break;
        case 'ceresit':
            k = 2;
            bagPrice = 136;
            break;
        case 'polimin':
            k = 1.6;
            bagPrice = 145;
            break;
        case 'siltek':
            k = 1.5;
            bagPrice = 150;
            break;
        case 'ivsil':
            k = 1.7;
            bagPrice = 140;
            break;
        case 'bergauf':
            k = 1.8;
            bagPrice = 160;
            break;
    }

    const expenditure = squareValue * layerValue * k;
    const bagsCount = Math.ceil(expenditure / 25);
    const totalPrice = bagsCount * bagPrice;

    consumption.textContent = `${Math.round(expenditure)} кг`;
    bags.textContent = `${bagsCount} шт`;
    price.textContent = `${totalPrice} uah`;
}

function handleGoodsChange() {
    const value = goods.value;
    goodsImg.src = `./images/${value}.jpg`;
    goodsImg.alt = value;
    consumption.textContent = '';
    bags.textContent = '';
    price.textContent = '';
}

document.querySelector('.b-1').addEventListener('click', calculateConsumption);
goods.onchange = handleGoodsChange;