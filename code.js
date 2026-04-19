  let a= [
    {
    name: 'Flat',
    size: '86m',
    rooms: 3,
    floor: 5,
    description: 'новая, уютная квартира в элитном доме по хорошей цене',
    address: "Театральная 10/2 ",
    prise: '100000$',
    sold: true,
    image: 'https://image.lexica.art/full_webp/23aefbaf-f513-41a7-99ee-19376f1b9be8'
 },
 {
    name: 'Flat',
    size: '86m',
    rooms: 3,
    floor: 5,
    description: 'новая, уютная квартира в элитном доме по хорошей цене',
    address: "Театральная 10/2 ",
    prise: '100000$',
    sold: true,
    image: 'https://image.lexica.art/full_webp/23aefbaf-f513-41a7-99ee-19376f1b9be8'
 },
 {
    name: 'Flat',
    size: '86m',
    rooms: 3,
    floor: 5,
    description: 'новая, уютная квартира в элитном доме по хорошей цене',
    address: "Театральная 10/2 ",
    prise: '100000$',
    sold: true,
    image: 'https://image.lexica.art/full_webp/23aefbaf-f513-41a7-99ee-19376f1b9be8'
 },
 {
    name: 'Flat',
    size: '86m',
    rooms: 3,
    floor: 5,
    description: 'новая, уютная квартира в элитном доме по хорошей цене',
    address: "Театральная 10/2 ",
    prise: '100000$',
    sold: true,
    image: 'https://image.lexica.art/full_webp/23aefbaf-f513-41a7-99ee-19376f1b9be8'
 },
 {
    name: 'Flat',
    size: '86m',
    rooms: 3,
    floor: 5,
    description: 'новая, уютная квартира в элитном доме по хорошей цене',
    address: "Театральная 10/2 ",
    prise: '100000$',
    sold: true,
    image: 'https://image.lexica.art/full_webp/23aefbaf-f513-41a7-99ee-19376f1b9be8'
 }
  ]




let market = document.getElementById('market')

for (let i = 0; i < a.length; i++){
    let object = a[i]
    market.innerHTML =  market.innerHTML + `<div class="card">
            <img class="caRD-IMG" src="${object.image}" alt="" >
            <h1>${object.name}</h1>
            <p>${object.description}</p>
            <p class="cost">${object.prise}</p>
            <button>Купить</button>
        </div> `
}