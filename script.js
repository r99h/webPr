let phrases = [
    { text: 'мы крутые парни'},
    { text: 'мы пишем и играем музыку' },
    { text: 'мы вас любим' },
    { text: '<3' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let vk = document.querySelector('.vk');
  let inst = document.querySelector('.inst');
  let music = document.querySelector('.music');
  let news = document.querySelector('.news');

  let linkVk = 'https://vk.com/pdrooga';
  vk.onclick = function () {
    window.open(linkVk);
  }
  let linkInst = 'https://www.instagram.com/pdrooga';
  inst.onclick = function () {
    window.open(linkInst);
  }
  let linkMusic = 'https://band.link/SDjpr';
  music.onclick = function () {
    window.open(linkMusic);

    let linkNews = 'file:///C:/src/web/news.html';
  news.onclick = function () {
    window.open(linkNews);
  }  

  button.addEventListener('phrases', function () {
    let randomElement = getRandomElement(phrases);
  
    if (randomElement.text.length >= 25) {
      advice.style.fontSize = '20px';
    } else {
      advice.style.fontSize = '25px';
    }
  });
  
  }

  for (let i = 0; i <= 3; i = i + 1) {
    smoothly(phrase, 'textContent', phrases[i].text);  
  };


