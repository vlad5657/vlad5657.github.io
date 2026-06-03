// 1. Функция для переключения вкладок
function openTab(tabID) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.style.display = 'none');
    document.getElementById(tabID).style.display = 'block';
}

// 2. СПИСОК URL-АДРЕСОВ 
const memesList = [
    'https://media1.tenor.com/m/zym9t648lewAAAAd/fubangifs.gif',
    'https://media.tenor.com/mMWyBEdFyMsAAAAj/disappointed-meme.gif',
    'https://media1.tenor.com/m/WQhefsbg9A0AAAAd/shrek.gif',
    'https://media.tenor.com/txLhIb_KKY0AAAA1/sunshine-rainbows-sunshine-lolipop.webp',
    'https://media.tenor.com/9tdCBtF91-sAAAAj/benjammins-six-seven.gif',
    'https://media.tenor.com/hKNxoSlvT-kAAAAj/hamster.gif',
    'https://media1.tenor.com/m/Ob1fIszBHjEAAAAd/roblox-memes-roblox.gif',
    'https://media.tenor.com/PiL9RdttgvQAAAAj/memes-meme.gif',
    'https://media.tenor.com/PiL9RdttgvQAAAAj/memes-meme.gif',
    'https://media.tenor.com/JdGebSchIUcAAAAm/dark-mario.webp',
    
];

// 3. Функция для получения случайного мема (fetch запрос)
async function fetchRandomMeme() {
    // Возвращаем Promise с случайным URL из списка
    return new Promise((resolve) => {
        const randomIndex = Math.floor(Math.random() * memesList.length);
        const randomMemeUrl = memesList[randomIndex];
        resolve(randomMemeUrl);
    });
}

// 4. Обработчик событий после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    const fetchButton = document.getElementById('fetchImageBtn');
    
    if (fetchButton) {
        fetchButton.addEventListener('click', async function() {
            const img = document.getElementById('myImage');
            
            // Меняем текст кнопки и убираем старую картинку
            fetchButton.textContent = 'Загрузка мема...';
            img.classList.remove('show');
            img.style.display = 'none';
            
            // ПОЛУЧАЕМ СЛУЧАЙНЫЙ URL ИЗ СПИСКА
            const memeUrl = await fetchRandomMeme();
            
            if (memeUrl) {
                // Вставляем картинку на страницу
                img.src = memeUrl;
                img.style.display = 'block';
                img.classList.add('show');
                console.log('Загружен мем:', memeUrl); // Для проверки в консоли
            }
            
            // Возвращаем текст кнопки
            fetchButton.textContent = 'Показать случайный мем';
        });
    }
});
