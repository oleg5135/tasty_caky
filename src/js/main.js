const swiper = new Swiper('.swiper', {
    slidesPerView: 3, // За замовчуванням для великих екранів
    spaceBetween: 20, // Відстань між слайдами
    loop: true, // Увімкнути циклічність
    navigation: {
        nextEl: '.swiper-button-next', // Кнопка "наступний"
        prevEl: '.swiper-button-prev', // Кнопка "попередній"
    },
    breakpoints: {
        1024: {
            slidesPerView: 3, // 3 слайди на великих екранах
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2, // 2 слайди на середніх екранах
            spaceBetween: 15,
        },
        0: {
            slidesPerView: 1, // 1 слайд на малих екранах
            spaceBetween: 10,
        },
    },
});

function showConfirmation() {
    const confirmationIcon = document.getElementById('confirmationIcon');
    
    // Показуємо іконку
    confirmationIcon.classList.remove('tw-hidden');
    confirmationIcon.classList.add('tw-flex');
    
    // Прибираємо іконку через 5 секунд
    setTimeout(() => {
        confirmationIcon.classList.add('tw-hidden');
        confirmationIcon.classList.remove('tw-flex');
    }, 5000); // 5000 мс = 5 секунд
}
function showPhotoUploadedMessage() {
    const message = document.getElementById('photoUploadedMessage');
    
    // Показуємо повідомлення
    message.classList.remove('tw-hidden');
    
    // Ховаємо повідомлення через 5 секунд
    setTimeout(() => {
        message.classList.add('tw-hidden');
    }, 5000); // 5000 мс = 5 секунд
}
function showOrderSuccessMessage() {
    const message = document.getElementById('orderSuccessMessage');
    
    // Показуємо повідомлення
    message.classList.remove('tw-hidden');
    
    // Ховаємо повідомлення через 5 секунд
    setTimeout(() => {
        message.classList.add('tw-hidden');
    }, 5000); // 5000 мс = 5 секунд
}
function showCatalogNotification() {
    const notification = document.getElementById('catalogNotification');
    notification.classList.remove('tw-hidden'); // Показуємо повідомлення

    // Ховаємо повідомлення через 5 секунд
    setTimeout(() => {
        notification.classList.add('tw-hidden');
    }, 5000);
}


// Відкриття меню
document.getElementById("categoriesButton").addEventListener("click", function () {
    document.getElementById("categoriesMenu").classList.remove("tw-hidden");
});

// Закриття меню
document.getElementById("closeMenuButton").addEventListener("click", function () {
    document.getElementById("categoriesMenu").classList.add("tw-hidden");
});
