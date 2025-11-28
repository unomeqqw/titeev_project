// Обложка
const bookTableBtn = document.getElementById('bookTableBtn');

bookTableBtn.addEventListener('click', () => {
    const reservationSection = document.getElementById('reservation');
    reservationSection.scrollIntoView({ behavior: 'smooth' });
});

// Слайдер акций
const slides = document.querySelectorAll('.promotions__slide');
const prevBtn = document.querySelector('.promotions__prev');
const nextBtn = document.querySelector('.promotions__next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Автопрокрутка каждые 5 секунд
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Кликер-пицца
const clickerTab = document.getElementById('clickerTab');
const clickerContent = document.getElementById('clickerContent');
const pizzaImg = document.getElementById('pizzaImg');
const clickCount = document.getElementById('clickCount');
const closeClicker = document.getElementById('closeClicker');
let clicks = 0;

clickerTab.addEventListener('click', () => {
    clickerContent.classList.add('active');
    clickerTab.style.display = 'none';
});

closeClicker.addEventListener('click', () => {
    clickerContent.classList.remove('active');
    clickerTab.style.display = 'block';
});

pizzaImg.addEventListener('click', () => {
    clicks++;
    clickCount.textContent = clicks;
    document.getElementById('clicksField').value = clicks;
});

// Проверка перед отправкой формы
const submitBtn = document.getElementById('submitBtn');
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    if (clicks < 100) {
        e.preventDefault();
        alert('Нужно кликнуть на пиццу минимум 100 раз!');
    }
});