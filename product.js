let a= [
    {
    name: 'Cottage',
    size: 'Size: 100m',
    rooms: 'Rooms: 6',
    floor: 'Floor: 2',
    description: 'Description: Уютный дом, площадью 100 м²,создан специально для семьи с ребенком, с акцентом на комфорт и стиль. Дом сочетает в себе функциональность и современный дизайн, обеспечивая все необходимое для жизни за городом.',
    address: 'Address: Солнечная улица, 35А ',
    price: ' Prise: 170000$',
    photo:'https://avatars.mds.yandex.net/i?id=615ad5781faa0db5a68f4cc1e80bc708_l-12816737-images-thumbs&n=13'
 },
 {
    name: 'Flat',
    size: 'Size: 60m',
    rooms:'Rooms: 2',
    floor: 'Floor: 6',
    description: 'Description: Дизайнерская квартира — воплощение современного комфорта и эстетики. Просторное помещение,которое объединяет гостиную, кухню и зону отдыха. Нейтральная цветовая гамма создаёт уютную атмосферу. Идеальное место для жизни и вдохновения.',
    address: "Address: улица Чехова, 18 ",
    price: 'Prise: 145000$',
    photo: 'https://cdn0.divan.ru/img/v1/aD6SCpsY4BRl-aDFB4FJQ5xasBnIR1u4f63ScfZl1gM/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi9ja2VkaXRvci93aWtpLWFydGljbGUvMjk5My82NGYwNDNmZDkyOTI3LmpwZw.jpg'
 },
 {
    name: 'luxury_apartment',
    size: 'Size: 123m',
    rooms: 'Rooms: 3',
    floor: 'Floor: 5',
    description: 'Description: Двухуровневая квартира — простор и свобода планировки. На первом уровне расположены гостиная с панорамными окнами, кухня‑студия. Второй уровень - спальня с выходом на балкон, детская и рабочий кабинет.Идеальна для семьи или тех, кто ценит функциональность и стиль.',
    address: "Address: Полюстровский проспект, 75 ",
    price: 'Prise: 210000$',
    photo: 'https://images.cdn-cian.ru/images/2830749129-1.jpg'
 },
 {
    name: 'apartment',
    size: 'Size 32m',
    rooms: 'Rooms: 1',
    floor: 'Floor: 11',
    description: 'Уютная студия в современном доме — идеальное. Просторная комната объединена с кухней, создаёт ощущение свободы и лёгкости. В квартире есть всё необходимое для комфортного проживания: удобная зона отдыха, функциональная кухня и компактная ванная. Отличный вариант для тех, кто ценит простор и минимализм.',
    address: "Address: Ленинградский проспект, 37/3",
    price: 'Prise: 85000$',
    photo: 'https://i.pinimg.com/736x/94/84/6b/94846b635b71ac09bbe36b3d2fdfdd72.jpg'
 },

  ]


  let parametr =location.search.replace('?parametr=',    '')

  let productData

  for (let i = 0; i < a.length; i++){
   if (a[i].name === parametr){
      productData = a[i]
   }
  }

  let name = document.getElementById('name')
  let photo = document.getElementById('photo')
  let price = document.getElementById('price')
  let rooms = document.getElementById('rooms')
  let size = document.getElementById('size')
  let floor = document.getElementById('floor')
  let address = document.getElementById('address')
  let description = document.getElementById('description')
  

  name.innerHTML = parametr
  photo.src = productData.photo
  floor.innerHTML = productData.floor
  rooms.innerHTML = productData.rooms
  size.innerHTML = productData.size
  price.innerHTML = productData.price
  address.innerHTML = productData.address
  description.innerHTML = productData.description
