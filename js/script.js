
const card = [
  {
    id: 1,
    author: 'Phil Mangione',
    profile: 'https://unsplash.it/300/300?image=15',
    date: '08-23-2022',
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto.Ad ad maiores et sintvoluptate recusandae architecto.Et nihil ullam aut alias.',
    image: 'https://unsplash.it/600/300?image=171',
    likes: 80,
  }, {
    id: 2,
    author: 'Thomas Mann',
    profile: 'img/profile2.jpg',
    date: '09-23-2022',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nesciunt, ullam numquam quod, voluptas officia inventore quis maxime harum, minima temporibus voluptatum! Omnis eveniet recusandae sed rem perspiciatis nisi itaque?',
    image: 'img/1.jpg',
    likes: 90,
  }, {
    id: 3,
    author: 'Altieri Biagi',
    profile: 'img/profile3.jpg',
    date: '10-23-2022',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic odit ipsum ducimus, nesciunt fugiat, dolorum ea molestias itaque dignissimos explicabo tempore totam voluptas provident inventore magnam. Illo repudiandae illum iste!',
    image: 'img/2.jpg',
    likes: 110,
  }, {
    id: 4,
    author: 'Mark Twain',
    profile: 'img/profile4.jpg',
    date: '11-23-2022',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat illo facilis ipsum itaque quidem eos, rerum numquam sint ea illum voluptatibus in eveniet iusto optio labore praesentium ducimus quod?',
    image: 'img/3.jpg',
    likes: 120,
  }, {
    id: 5,
    author: 'Agatha Christie',
    profile: 'img/profile1.jpg',
    date: '12-23-2022',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio excepturi repellat culpa veniam blanditiis cupiditate corrupti? Rerum quod ullam quas atque consequuntur cumque ipsa, dicta quia saepe, officiis quisquam?',
    image: 'img/4.jpg',
    likes: 180,
  }, {
    id: 6,
    author: 'Lev Tolstoi',
    profile: 'img/profile5.jpg',
    date: '12-23-2022',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus deleniti dicta voluptas doloremque totam eligendi officia accusantium pariatur sequi repellat hic labore ipsum asperiores, voluptate quaerat magnam unde eius! Pariatur!',
    image: 'img/5.jpg',
    likes: 230,
  }
];

// Recupero i dati dal DOM
const post = document.querySelector('.posts-list');


let cardElements = '';


for (let i = 0; i < card.length; i++) {
  const cardPost = card[i];
  // const button = document.createElement()
  cardElements += `<div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src="${cardPost.profile}" alt="Phil Mangione"/>
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${cardPost.author}</div>
          <div class="post-meta__time">${cardPost.date}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
    ${cardPost.text}
    </div>
    <div class="post__image">
      <img src="${cardPost.image}" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <button class="like-button js-like-button" href="#" data-postid="${cardPost.id}" class="button">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </button>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-${cardPost.id}" class="js-likes-counter">${cardPost.likes}</b> persone</div>
      </div>
    </div>
  </div>
       
  `;

}

post.innerHTML = cardElements;

const buttons = document.querySelectorAll('button');



for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];

  let isClicked = false;

  button.addEventListener('click', () => {

    if (!isClicked) {
      button.classList.add('like-button--liked');
      const like = document.getElementById('like-counter-' + (i + 1));
      like.innerText = parseInt(like.innerText) + 1;
      isClicked = !isClicked;
    } else {
      button.classList.remove('like-button--liked');
      const like = document.getElementById('like-counter-' + (i + 1));
      like.innerText = parseInt(like.innerText) - 1;
      isClicked = !isClicked;
    }

  });

}


