// let arr = ["Duong", "Cuong"]

// let Duong = {
//     name: "Duong",
//     age: 12,
//     height: "3m",
//     status: "pro"
// }

// let Cuong = {
//     name: "Cuong",
//     age: 100,
//     height: "1m",
//     love:"his wife"
// }

// console.log("object",Cuong);
// console.log(Cuong.love);
// console.log("array", arr);

// let data = [
//     {
//         name:"xoai",
//         url:"https://media.mercola.com/assets/images/foodfacts/mango-nutrition-facts.jpg"
//     },{
//         name:"thom",
//         url:"https://antioxidant-fruits.com/wp-content/uploads/2015/10/Fresh-Golden-Pineapple.jpg"
//     },{
//         name:"dua",
//         url:"https://www.plantgrower.org/uploads/6/5/5/4/65545169/published/coconut-white-balsamic-condimento.jpg?1515168579"
//     },{
//         name:"dua hau",
//         url:"https://lh3.googleusercontent.com/proxy/l9-Xxf_vI63hAZZFHE54yuBHOgAodKwBYUI7CKY0QLcaJkW3BmaUwjYdhZooPRLufN7pAB7CnbyN6ppJxP9KB_H0iytyrBvxkMbv3qIG4xv2PueMiN_pxLQrU208vDE"
//     },{
//         name:"du du",
//         url:"https://c.ndtvimg.com/2019-06/qlo3s8ko_papaya-seeds_625x300_06_June_19.jpg"
//     },{
//         name:"vai thieu",
//         url:"https://i5.walmartimages.ca/images/Enlarge/524/207/6000200524207.jpg"
//     }
// ]
let data = [{
    name: "xoai",
    url: "https://media.mercola.com/assets/images/foodfacts/mango-nutrition-facts.jpg",
  },
  {
    name: "thom",
    url: "https://antioxidant-fruits.com/wp-content/uploads/2015/10/Fresh-Golden-Pineapple.jpg",
  },
  {
    name: "dua",
    url: "https://www.plantgrower.org/uploads/6/5/5/4/65545169/published/coconut-white-balsamic-condimento.jpg?1515168579",
  },
  {
    name: "dua hau",
    url: "https://lh3.googleusercontent.com/proxy/l9-Xxf_vI63hAZZFHE54yuBHOgAodKwBYUI7CKY0QLcaJkW3BmaUwjYdhZooPRLufN7pAB7CnbyN6ppJxP9KB_H0iytyrBvxkMbv3qIG4xv2PueMiN_pxLQrU208vDE",
  },
  {
    name: "du du",
    url: "https://c.ndtvimg.com/2019-06/qlo3s8ko_papaya-seeds_625x300_06_June_19.jpg",
  },
  {
    name: "vai thieu",
    url: "https://i5.walmartimages.ca/images/Enlarge/524/207/6000200524207.jpg",
  },
  {
    name: "Cam",
    url: "https://th.bing.com/th/id/OIP.PKHYlstDYAp3lswvX1o0aAHaE8?w=224&h=180&c=7&o=5&dpr=3&pid=1.7",
  },
  {
    name: "Kiwi",
    url: "https://th.bing.com/th/id/OIP.Lmvdlq0GJuGUdz1ylkyCCAHaD3?w=322&h=180&c=7&o=5&dpr=3&pid=1.7",
  },
  {
    name: "Mít",
    url: "https://th.bing.com/th/id/OIP.wlkNLGO2aweRe61m7uVNLQHaE8?w=296&h=197&c=7&o=5&dpr=3&pid=1.7",
  },
  {
    name: "ổi",
    url: "https://th.bing.com/th/id/OIP.Hj4GOzt-TJIkJw-s0HEHygHaFj?w=230&h=180&c=7&o=5&dpr=3&pid=1.7",
  },
  {
    name: "Chuối",
    url: "https://th.bing.com/th/id/R589c6beca423dbc5f47de0a7cb605e7f?rik=sHyfydrZfxAROA&pid=ImgRaw",
  },
  {
    name: "Quýt",
    url: "https://www.theepochtimes.com/assets/uploads/2015/02/15/shutterstock_95061862.jpg",
  },
  {
    name: "nho",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEuhX1suGCOcJvOVI0cGdXFTP7IS8XPc-RA&usqp=CAU",
  },
  {
    name: "dau",
    url: "https://s30386.pcdn.co/wp-content/uploads/2019/08/Strawberries_HNL1306_ts104880701.jpg"
  },
  {
    name: "dao",
    url: "https://www.canada.ca/content/dam/phac-aspc/images/services/public-health-notices/2020/peaches.jpg"
  },
  {
    name: "thanh long",
    url: "https://post.healthline.com/wp-content/uploads/2020/09/dragon-fruit-1200x628-facebook-1200x628.jpg"
  },
  {
    name: "sau rieng",
    url: "https://www.swedishnomad.com/wp-content/images/2019/09/Durian-Fruit.jpg"
  }
];

let input = document.getElementById("input")
let btn = document.getElementById("btn")
let image = document.getElementById("img")
let namee = document.getElementById("name")

btn.addEventListener('click', () => {
  let inputValue = input.value.toLowerCase()

  console.log(inputValue);

  for (let i = 0; i < data.length; i++) {
    if (inputValue == data[i].name.toLowerCase()) {
      image.src = data[i].url
      namee.innerText = data[i].name
      break
    } else {
      image.src = 'https://cdn3.vectorstock.com/i/1000x1000/31/47/404-error-page-not-found-design-template-vector-21393147.jpg'
      namee.innerText = 'Not Found'
    }
  }
})