const itemsList = [
  {
    imgSrc: "img/reviews/client1happy.jpg",
    imgAlt: "Фото клиента",
    clientInfo: "Дядя Игорь, г. Москва",
    clientGrade: 5,
    clientComment: "Я вне себя от радости! Пицца нереально вкусная! Особенно колбасная! Колбасило не по-детски! Порекомендую мужикам с завода!",
    altData: {
      imgSrc: "img/reviews/client1sad.jpg",
      clientGrade: 1,
      clientComment: "Меня тошнит от ваших колбасных пицц! я не шучу! Меня буквально тошнит и мне плохо!"
    }
  },
  {
    imgSrc: "img/reviews/client2.jpg",
    imgAlt: "Фото клиента",
    clientInfo: "Антонио Багратто, г.Флоренция",
    clientGrade: 5,
    clientComment: "Я здесь и ем и живу и работаю и ем и живу и работаю. Я обожаю это место!",
    altData: {
      clientGrade: 1,
      clientComment: "Я здесь и ем и живу и работаю и ем и живу и работаю. Я ненавижу это место!"
    }
  },
  {
    imgSrc: "img/reviews/client3.jpg",
    imgAlt: "Фото клиента",
    clientInfo: "Иван Иван, г. Тверь",
    clientGrade: 5,
    clientComment: "Я люблю это пицца этот расположение и покупать вся еда дешево, нравится!",
    altData: {
      clientGrade: 2,
      clientComment: "Я простой рабочий Иван город Тверь. Жить Россия устать много налог мало зарплат, порций рис не хватать"
    }
  }
];

let elementIndex = 0; // смещение по оси икс, для расчета прокрутки слайдера
const sliderLine = document.querySelector(".js-reviews__sliderLine"); // линия/полоса слайдера, в которую поместим отзывы
let reviewItems = {}; // переменная, в которую мы запишем блоки с отзывами из DOM, собранные нашей ф-цией
const buttonPrev = document.querySelector(".js-slider-btn-prev"); // кнопка "влево"
const buttonNext = document.querySelector(".js-slider-btn-next"); // кнопка "вправо"

function setItems() {
  if (sliderLine) {
    itemsList.forEach(item => {
        let reviewItemsTemp = ``;
        reviewItemsTemp += `<div class="js-review-item review-item">
        <div class="review-item__head">
          <div class="review-item__img-container">
            <img class="review-item__img" src="${item.imgSrc}" alt="${item.imgAlt}">
          </div>
          <span class="review-item__visitor-info">${item.clientInfo}</span>
          <div class="review-item__grade-block">
            <span class="review-item__grade-icon material-symbols-outlined">kid_star</span>
            <span class="review-item__grade-value">${item.clientGrade}</span>
          </div>
        </div>
        <p class="review-item__review-text">${item.clientComment}</p>`
        if (item.altData) {
        reviewItemsTemp += `<div class="review-item review-item_alt">
          <div class="review-item__head">
            <div class="review-item__img-container">
              <img class="review-item__img" src="${item.altData.imgSrc ? item.altData.imgSrc : item.imgSrc}" alt="${item.altData.imgAlt}">
            </div>
            <span class="review-item__visitor-info">${item.clientInfo}</span>
            <div class="review-item__grade-block">
              <span class="review-item__grade-icon review-item__grade-icon_alt material-symbols-outlined">kid_star</span>
              <span class="review-item__grade-value">${item.altData.clientGrade}</span>
            </div>
          </div>
          <p class="review-item__review-text">${item.altData.clientComment}</p>
        </div>`
      }

      reviewItemsTemp += `</div>`;
      sliderLine.innerHTML += reviewItemsTemp;
    });
    reviewItems = document.querySelectorAll(".js-review-item");
  }
}

function slide(index) {
  if (sliderLine) {
    sliderLine.setAttribute("style", `transform: translateX(${ -1 * index * 100 / reviewItems.length }%)`);
  }
}
setItems();
buttonNext.addEventListener("click", () => {
  elementIndex += 1;
  if (elementIndex > reviewItems.length - 1) {
    elementIndex = 0;
  }
  slide(elementIndex);
});

buttonPrev.addEventListener("click", () => {
  elementIndex -= 1;
  if (elementIndex < 0) {
    elementIndex = reviewItems.length - 1;
  }
  slide(elementIndex);
});