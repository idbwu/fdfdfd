// ======================
// ДАННЫЕ (LocalStorage)
// ======================

// Инициализация данных
let works = JSON.parse(localStorage.getItem('works')) || [
    { id: 1, title: 'Семейный портрет', category: 'family', size: '80x100 см', emoji: '👨‍👩‍👧‍👦' },
    { id: 2, title: 'Горный пейзаж', category: 'landscape', size: '90x120 см', emoji: '🏔️' },
    { id: 3, title: 'Классический портрет', category: 'portrait', size: '60x80 см', emoji: '👤' },
    { id: 4, title: 'Абстрактная композиция', category: 'abstract', size: '100x100 см', emoji: '🎨' },
    { id: 5, title: 'Любимый питомец', category: 'pets', size: '50x70 см', emoji: '🐕' },
    { id: 6, title: 'Закат на море', category: 'landscape', size: '120x80 см', emoji: '🌅' },
    { id: 7, title: 'Свадебное фото', category: 'family', size: '70x90 см', emoji: '💑' },
    { id: 8, title: 'Милый котик', category: 'pets', size: '50x70 см', emoji: '🐱' }
];

let services = JSON.parse(localStorage.getItem('services')) || [
    { 
        id: 1, 
        title: 'Печать на холсте', 
        description: 'Премиальная печать на натуральном холсте с использованием технологии Giclée',
        price: 2990,
        icon: '🖼️',
        features: ['Натуральный холст', 'Устойчивые краски', 'Защитное покрытие'],
        popular: false
    },
    { 
        id: 2, 
        title: 'Премиум с рамой', 
        description: 'Холст на подрамнике с эксклюзивной деревянной рамой ручной работы',
        price: 4990,
        icon: '🎨',
        features: ['Деревянный подрамник', 'Рама на в��бор', 'Готово к подвеске'],
        popular: true
    },
    { 
        id: 3, 
        title: 'Модульные картины', 
        description: 'Современные композиции из нескольких сегментов для стильного интерьера',
        price: 6990,
        icon: '✨',
        features: ['2-5 модулей', 'Разные размеры', 'Уникальный дизайн'],
        popular: false
    }
];

let reviews = JSON.parse(localStorage.getItem('reviews')) || [
    { 
        id: 1, 
        author: 'Анна Петрова', 
        rating: 5, 
        text: 'Заказала портрет мужа на юбилей. Качество просто потрясающее! Все детали четкие, цвета яркие. Повесили в гостиной - все гости в восторге! Рекомендую всем!',
        date: '2 недели назад'
    },
    { 
        id: 2, 
        author: 'Дмитрий Соколов', 
        rating: 5, 
        text: 'Заказывал модульную картину из семейных фото. Результат превзошёл все ожидания! Быстрая доставка, отличная упаковка. Уже рекомендовал друзьям!',
        date: '1 месяц назад'
    },
    { 
        id: 3, 
        author: 'Елена Михайлова', 
        rating: 5, 
        text: 'Печатала свадебное фото на холсте 80x120. Получилось невероятно красиво! Консультанты помогли с выбором рамы. Спасибо за профессионализм и качество!',
        date: '3 недели назад'
    },
    { 
        id: 4, 
        author: 'Игорь Васильев', 
        rating: 5, 
        text: 'Делал портрет собаки в подарок жене. Вышло просто супер! Качество печати отличное, цвета яркие. Доставили быстро. Очень доволен!',
        date: '1 неделя назад'
    }
];

let orders = JSON.parse(localStorage.getItem('orders')) || [];

// Сохранение данных
function saveData() {
    localStorage.setItem('works', JSON.stringify(works));
    localStorage.setItem('services', JSON.stringify(services));
    localStorage.setItem('reviews', JSON.stringify(reviews));
    localStorage.setItem('orders', JSON.stringify(orders));
}

// ======================
// НАВИГАЦИЯ
// ======================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Скролл эффект
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Мобильное меню
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Функции навигации
function scrollToContact() {
    const contact = document.getElementById('contact');
    if (contact) {
        contact.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToWorks() {
    const works = document.getElementById('works');
    if (works) {
        works.scrollIntoView({ behavior: 'smooth' });
    }
}

// ======================
// ТАЙМЕР ОБРАТНОГО ОТСЧЕТА
// ======================

function startCountdown() {
    const timerElement = document.getElementById('timer');
    if (!timerElement) return;

    let hours = 12;
    let minutes = 34;
    let seconds = 56;

    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours < 0) {
            hours = 23;
            minutes = 59;
            seconds = 59;
        }

        const h = String(hours).padStart(2, '0');
        const m = String(minutes).padStart(2, '0');
        const s = String(seconds).padStart(2, '0');

        timerElement.textContent = `${h}:${m}:${s}`;
    }, 1000);
}

// ======================
// АНИМАЦИИ
// ======================

// Анимация счетчиков
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
};

// Наблюдатель для анимаций
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Анимация счетчиков
            if (entry.target.classList.contains('hero-trust')) {
                const counters = entry.target.querySelectorAll('.trust-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                });
                observer.unobserve(entry.target);
            }
            
            // Общая анимация появления
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// ======================
// РЕНДЕРИНГ ДАННЫХ
// ======================

// Рендер работ
function renderWorks(filter = 'all') {
    const grid = document.getElementById('worksGrid');
    if (!grid) return;
    
    const filteredWorks = filter === 'all' ? works : works.filter(w => w.category === filter);
    
    grid.innerHTML = filteredWorks.map(work => `
        <div class="work-card-color" data-category="${work.category}">
            <div class="work-image-color">
                <span style="font-size: 120px;">${work.emoji}</span>
            </div>
            <div class="work-info-color">
                <div class="work-category-color">${getCategoryName(work.category)}</div>
                <h3 class="work-title-color">${work.title}</h3>
                <p class="work-size-color">📏 ${work.size}</p>
            </div>
        </div>
    `).join('');
    
    // Добавляем анимацию
    setTimeout(() => {
        const cards = grid.querySelectorAll('.work-card-color');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 10);
}

// Рендер услуг
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    
    grid.innerHTML = services.map(service => `
        <div class="service-card-color ${service.popular ? 'featured' : ''}">
            ${service.popular ? '<div class="popular-badge-color">🔥 Хит продаж</div>' : ''}
            <div class="service-icon-color">${service.icon}</div>
            <h3 class="service-title-color">${service.title}</h3>
            <p class="service-desc-color">${service.description}</p>
            <ul class="service-features-color">
                ${service.features.map(f => `<li class="service-feature-color">${f}</li>`).join('')}
            </ul>
            <div class="service-price-color">от ${service.price.toLocaleString()}₽</div>
        </div>
    `).join('');
}

// Рендер отзывов
function renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    if (!grid) return;
    
    grid.innerHTML = reviews.map(review => `
        <div class="review-card-color">
            <div class="review-stars-color">${'⭐'.repeat(review.rating)}</div>
            <p class="review-text-color">"${review.text}"</p>
            <div class="review-author-color">
                <div class="author-avatar-color">${review.author.charAt(0)}</div>
                <div>
                    <div class="author-name-color">${review.author}</div>
                    <div class="author-date-color">${review.date}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// Обновление превью галереи в героя
function updateGalleryPreview() {
    const preview = document.getElementById('galleryPreview');
    if (!preview || works.length === 0) return;
    
    const randomWork = works[Math.floor(Math.random() * works.length)];
    preview.innerHTML = `<span style="font-size: 180px;">${randomWork.emoji}</span>`;
}

// Получение имени категории
function getCategoryName(category) {
    const names = {
        'portrait': 'Портрет',
        'landscape': 'Пейзаж',
        'family': 'Семейное',
        'abstract': 'Абстракция',
        'pets': 'Питомцы'
    };
    return names[category] || category;
}

// ======================
// ФИЛЬТР РАБОТ
// ======================

document.querySelectorAll('.filter-btn-color').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn-color').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        renderWorks(filter);
    });
});

// ======================
// ФОРМА КОНТАКТОВ
// ======================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            id: Date.now(),
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value,
            date: new Date().toLocaleDateString('ru-RU')
        };
        
        orders.push(formData);
        saveData();
        
        // Показываем красивое уведомление
        showNotification('🎉 Спасибо за заявку! Мы свяжемся с вами в течение 5 минут!');
        
        contactForm.reset();
        updateOrdersStats();
    });
}

// Функция показа уведомлений
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: linear-gradient(135deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
        color: white;
        padding: 20px 30px;
        border-radius: 20px;
        font-weight: 700;
        font-size: 16px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        z-index: 10001;
        animation: slideInRight 0.5s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 5000);
}

// ======================
// АДМИН ПАНЕЛЬ
// ======================

// Открытие/закрытие админки
function openAdminPanel() {
    document.getElementById('adminOverlay').classList.add('active');
    renderAdminData();
}

function closeAdminPanel() {
    document.getElementById('adminOverlay').classList.remove('active');
}

// Закрытие по клику на оверлей
document.getElementById('adminOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'adminOverlay') {
        closeAdminPanel();
    }
});

// Переключение вкладок
document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        
        document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        document.querySelectorAll('.admin-content').forEach(c => c.classList.remove('active'));
        document.getElementById(`admin-${tabName}`).classList.add('active');
        
        renderAdminData();
    });
});

// Рендер данных в админке
function renderAdminData() {
    renderAdminWorks();
    renderAdminServices();
    renderAdminReviews();
    renderAdminOrders();
    updateOrdersStats();
}

// Админ: Работы
function renderAdminWorks() {
    const tbody = document.getElementById('adminWorksTable');
    if (!tbody) return;
    
    tbody.innerHTML = works.map(work => `
        <tr>
            <td><strong>#${work.id}</strong></td>
            <td>
                <div class="table-preview">${work.emoji}</div>
            </td>
            <td><strong>${work.title}</strong></td>
            <td>${getCategoryName(work.category)}</td>
            <td>${work.size}</td>
            <td>
                <div class="table-actions">
                    <button class="btn-edit" onclick="editWork(${work.id})">✏️ Изменить</button>
                    <button class="btn-delete" onclick="deleteWork(${work.id})">🗑️ Удалить</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Админ: Услуги
function renderAdminServices() {
    const tbody = document.getElementById('adminServicesTable');
    if (!tbody) return;
    
    tbody.innerHTML = services.map(service => `
        <tr>
            <td><strong>#${service.id}</strong></td>
            <td>
                <div class="table-preview">${service.icon}</div>
            </td>
            <td><strong>${service.title}</strong></td>
            <td><strong>${service.price.toLocaleString()}₽</strong></td>
            <td>
                ${service.popular ? '<span class="status-badge popular">✅ Да</span>' : '❌ Нет'}
            </td>
            <td>
                <div class="table-actions">
                    <button class="btn-edit" onclick="editService(${service.id})">✏️ Изменить</button>
                    <button class="btn-delete" onclick="deleteService(${service.id})">🗑️ Удалить</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Админ: Отзывы
function renderAdminReviews() {
    const tbody = document.getElementById('adminReviewsTable');
    if (!tbody) return;
    
    tbody.innerHTML = reviews.map(review => `
        <tr>
            <td><strong>#${review.id}</strong></td>
            <td><strong>${review.author}</strong></td>
            <td>${'⭐'.repeat(review.rating)}</td>
            <td>${review.text.substring(0, 80)}...</td>
            <td>${review.date}</td>
            <td>
                <div class="table-actions">
                    <button class="btn-delete" onclick="deleteReview(${review.id})">🗑️ Удалить</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Админ: Заявки
function renderAdminOrders() {
    const tbody = document.getElementById('adminOrdersTable');
    if (!tbody) return;
    
    tbody.innerHTML = orders.map(order => `
        <tr>
            <td><strong>#${order.id}</strong></td>
            <td><strong>${order.name}</strong></td>
            <td>${order.phone}</td>
            <td>${order.email}</td>
            <td>${order.service || 'Не указана'}</td>
            <td>${order.date}</td>
            <td>
                <div class="table-actions">
                    <button class="btn-view" onclick="viewOrder(${order.id})">👁️ Просмотр</button>
                    <button class="btn-delete" onclick="deleteOrder(${order.id})">🗑️ Удалить</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Обновление статистики заявок
function updateOrdersStats() {
    const totalOrders = document.getElementById('totalOrders');
    const newOrders = document.getElementById('newOrders');
    
    if (totalOrders) totalOrders.textContent = orders.length;
    if (newOrders) {
        const today = new Date().toLocaleDateString('ru-RU');
        const todayOrders = orders.filter(o => o.date === today).length;
        newOrders.textContent = todayOrders;
    }
}

// ======================
// CRUD ОПЕРАЦИИ
// ======================

// Работы
function deleteWork(id) {
    if (confirm('🗑️ Удалить эту работу?')) {
        works = works.filter(w => w.id !== id);
        saveData();
        renderAdminWorks();
        renderWorks();
        updateGalleryPreview();
        showNotification('✅ Работа успешно удалена!');
    }
}

function editWork(id) {
    const work = works.find(w => w.id === id);
    if (!work) return;
    
    const title = prompt('📝 Название:', work.title);
    if (!title) return;
    
    const size = prompt('📏 Размер:', work.size);
    if (!size) return;
    
    work.title = title;
    work.size = size;
    
    saveData();
    renderAdminWorks();
    renderWorks();
    showNotification('✅ Работа успешно обновлена!');
}

// Услуги
function deleteService(id) {
    if (confirm('🗑️ Удалить эту услугу?')) {
        services = services.filter(s => s.id !== id);
        saveData();
        renderAdminServices();
        renderServices();
        showNotification('✅ Услуга успешно удалена!');
    }
}

function editService(id) {
    const service = services.find(s => s.id === id);
    if (!service) return;
    
    const title = prompt('📝 Название:', service.title);
    if (!title) return;
    
    const price = prompt('💰 Цена:', service.price);
    if (!price) return;
    
    service.title = title;
    service.price = parseInt(price);
    
    saveData();
    renderAdminServices();
    renderServices();
    showNotification('✅ Услуга успешно обновлена!');
}

// Отзывы
function deleteReview(id) {
    if (confirm('🗑️ Удалить этот отзыв?')) {
        reviews = reviews.filter(r => r.id !== id);
        saveData();
        renderAdminReviews();
        renderReviews();
        showNotification('✅ Отзыв успешно удален!');
    }
}

// Заявки
function deleteOrder(id) {
    if (confirm('🗑️ Удалить эту заявку?')) {
        orders = orders.filter(o => o.id !== id);
        saveData();
        renderAdminOrders();
        updateOrdersStats();
        showNotification('✅ Заявка успешно удалена!');
    }
}

function viewOrder(id) {
    const order = orders.find(o => o.id === id);
    if (!order) return;
    
    const details = `
📋 ЗАЯВКА #${order.id}

👤 Имя: ${order.name}
📞 Телефон: ${order.phone}
✉️ Email: ${order.email}
🎨 Услуга: ${order.service || 'Не указана'}
📅 Дата: ${order.date}

💬 Комментарий:
${order.message || 'Нет комментария'}
    `;
    
    alert(details);
}

// ======================
// МОДАЛЬНЫЕ ОКНА
// ======================

// Добавление работы
function openAddWorkModal() {
    document.getElementById('addWorkModal').classList.add('active');
}

function closeAddWorkModal() {
    document.getElementById('addWorkModal').classList.remove('active');
}

document.getElementById('addWorkForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newWork = {
        id: Date.now(),
        title: formData.get('title'),
        category: formData.get('category'),
        size: formData.get('size'),
        emoji: formData.get('emoji')
    };
    
    works.push(newWork);
    saveData();
    renderAdminWorks();
    renderWorks();
    updateGalleryPreview();
    closeAddWorkModal();
    e.target.reset();
    showNotification('✅ Работа успешно добавлена!');
});

// Добавление услуги
function openAddServiceModal() {
    document.getElementById('addServiceModal').classList.add('active');
}

function closeAddServiceModal() {
    document.getElementById('addServiceModal').classList.remove('active');
}

document.getElementById('addServiceForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newService = {
        id: Date.now(),
        title: formData.get('title'),
        description: formData.get('description'),
        price: parseInt(formData.get('price')),
        icon: formData.get('icon'),
        features: formData.get('features').split(',').map(f => f.trim()),
        popular: formData.get('popular') === 'on'
    };
    
    services.push(newService);
    saveData();
    renderAdminServices();
    renderServices();
    closeAddServiceModal();
    e.target.reset();
    showNotification('✅ Услуга успешно добавлена!');
});

// Добавление отзыва
function openAddReviewModal() {
    document.getElementById('addReviewModal').classList.add('active');
}

function closeAddReviewModal() {
    document.getElementById('addReviewModal').classList.remove('active');
}

document.getElementById('addReviewForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newReview = {
        id: Date.now(),
        author: formData.get('author'),
        rating: parseInt(formData.get('rating')),
        text: formData.get('text'),
        date: 'Только что'
    };
    
    reviews.push(newReview);
    saveData();
    renderAdminReviews();
    renderReviews();
    closeAddReviewModal();
    e.target.reset();
    showNotification('✅ Отзыв успешно добавлен!');
});

// Закрытие модалок по клику на оверлей
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            modal.classList.remove('active');
        }
    });
});

// ======================
// ИНИЦИАЛИЗАЦИЯ
// ======================

document.addEventListener('DOMContentLoaded', () => {
    // Рендер контента
    renderWorks();
    renderServices();
    renderReviews();
    updateGalleryPreview();
    
    // Запуск таймера
    startCountdown();
    
    // Наблюдение за счетчиками
    const heroTrust = document.querySelector('.hero-trust');
    if (heroTrust) {
        observer.observe(heroTrust);
    }
    
    // Анимация карточек при появлении
    setTimeout(() => {
        const cards = document.querySelectorAll('.work-card-color, .service-card-color, .review-card-color, .benefit-card, .process-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
});

// Обновление превью каждые 5 секунд
setInterval(updateGalleryPreview, 5000);

// Добавляем CSS для анимаций уведомлений
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ======================
// ЭФФЕКТЫ ПРИ СКРОЛЛЕ
// ======================

// Параллакс эффект для blob элементов
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const blobs = document.querySelectorAll('.color-blob');
    
    blobs.forEach((blob, index) => {
        const speed = 0.3 + (index * 0.1);
        blob.style.transform = `translate(0, ${scrolled * speed}px)`;
    });
});

// Анимация появления элементов при скролле
const fadeElements = document.querySelectorAll('.work-card-color, .service-card-color, .review-card-color');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => {
    fadeObserver.observe(el);
});

// ======================
// ДОПОЛНИТЕЛЬНЫЕ ФИШКИ
// ======================

// Конфетти при отправке формы (опционально)
function launchConfetti() {
    // Простая реализация конфетти
    for (let i = 0; i < 50; i++) {
        createConfettiPiece();
    }
}

function createConfettiPiece() {
    const confetti = document.createElement('div');
    const colors = ['#FF3CAC', '#784BA0', '#2B86C5', '#10B981', '#F97316', '#FCD34D'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${color};
        top: 50%;
        left: 50%;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10002;
    `;
    
    document.body.appendChild(confetti);
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = 15 + Math.random() * 10;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    let x = 0, y = 0;
    let opacity = 1;
    
    const animate = () => {
        x += vx;
        y += vy + 2; // гравитация
        opacity -= 0.02;
        
        confetti.style.transform = `translate(${x}px, ${y}px)`;
        confetti.style.opacity = opacity;
        
        if (opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            confetti.remove();
        }
    };
    
    animate();
}

// Плавное изменение цвета фона при скролле
let lastScrollY = 0;
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Определяем направление скролла
    if (currentScrollY > lastScrollY) {
        // Скролл вниз
    } else {
        // Скролл вверх
    }
    
    lastScrollY = currentScrollY;
});

// Отслеживание времени на странице
let timeOnPage = 0;
setInterval(() => {
    timeOnPage++;
    // Можно отправлять аналитику
}, 1000);

// ======================
// КОНСОЛЬНОЕ СООБЩЕНИЕ
// ======================

console.log('%c🎨 Kars Print - Премиальная печать на холсте', 
    'color: #FF3CAC; font-size: 24px; font-weight: bold;');
console.log('%cСайт разработан с любовью ❤️', 
    'color: #784BA0; font-size: 16px;');
console.log('%cВсе права защищены © 2026', 
    'color: #2B86C5; font-size: 14px;');