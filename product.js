let a= [
    {
    name: 'private_home',
    size: '120m',
    rooms: 8,
    floor: 5,
    description: 'Уютный дом, площадью 100 м²,создан специально для семьи с ребенком, с акцентом на комфорт и стиль. Дом сочетает в себе функциональность и современный дизайн, обеспечивая все необходимое для жизни за городом.',
    address: "Университетская 142/25 ",
    prise: '220000$',
    sold: true,
    image: 'https://avatars.mds.yandex.net/i?id=615ad5781faa0db5a68f4cc1e80bc708_l-12816737-images-thumbs&n=13'
 },
 {
    name: 'Flat',
    size: '65m',
    rooms: 4,
    floor: 6,
    description: 'Уютная квартира в элитном доме по хорошей цене',
    address: "Чеховская 8 ",
    prise: '77000$',
    sold: true,
    image: 'https://cdn0.divan.ru/img/v1/aD6SCpsY4BRl-aDFB4FJQ5xasBnIR1u4f63ScfZl1gM/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi9ja2VkaXRvci93aWtpLWFydGljbGUvMjk5My82NGYwNDNmZDkyOTI3LmpwZw.jpg'
 },
 {
    name: 'luxury_apartment',
    size: '123m',
    rooms: 7,
    floor: 3,
    description: 'Двухуровневая квартира в центре',
    address: "Маршала Жукова 15 ",
    prise: '280000$',
    sold: true,
    image: 'https://images.cdn-cian.ru/images/2830749129-1.jpg'
 },
 {
    name: 'apartment',
    size: '55m',
    rooms: 2,
    floor: 6,
    description: 'Вторичная квартира с элитным ремонтом',
    address: "Пр.Мира 15",
    prise: '55000$',
    sold: true,
    image: 'https://i.pinimg.com/736x/94/84/6b/94846b635b71ac09bbe36b3d2fdfdd72.jpg'
 },
 {
    name: 'house',
    size: '150m',
    rooms: 4,
    floor: 21,
    description: 'Новые квартиры в элитном ЖК',
    address: "Багратиона 25/5 ",
    prise: '150000$',
    sold: true,
    image: 'https://miriadagroup.ru/wp-content/uploads/2017/03/c01_View050750_resize.jpg'
 }
  ]


  let parametr =location.search.replace('?parametr=',    '')

  let name = document.getElementById('name')
  name.innerHTML = parametr
