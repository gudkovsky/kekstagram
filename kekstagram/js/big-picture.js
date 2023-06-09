const bigPictureContainer = document.querySelector('.big-picture')
const bigPictureImage = bigPictureContainer.querySelector('.big-picture__img img')
const previewPictures = document.querySelectorAll('.picture')
const bigPictureCloseButton = bigPictureContainer.querySelector('.big-picture__cancel')
const bigPictureDescription = bigPictureContainer.querySelector('.social__caption')
const bigPictureLikesCount = bigPictureContainer.querySelector('.likes-count')
const bigPictureCommentsCount = bigPictureContainer.querySelector('.social__comment-count')
const commentsList = document.querySelector('.social__comments')

import { randomGeneratedPhotos } from "./photo-generator.js"
import { discussedArray } from "./sort-posts.js"

///////////// OLD
// previewPictures.forEach((e, i) => {
//   e.addEventListener('click', (evt) => {
//     console.log(evt.target)
//     bigPictureContainer.classList.remove('hidden')
//     document.body.classList.add('modal-open')

//     const clickedPicture = e.querySelector('.picture__img')
//     bigPictureImage.src = clickedPicture.src;
//     bigPictureDescription.textContent = clickedPicture.alt;
//     bigPictureLikesCount.textContent = randomGeneratedPhotos[i].likes;

//     bigPictureCommentsCount.innerHTML = `${randomGeneratedPhotos[i].commentsNumber} из <span class="comments-count">${randomGeneratedPhotos[i].commentsNumber}</span> комментариев`;

//     commentsList.innerHTML = ''
//     for (let x = 0; x < randomGeneratedPhotos[i].commentsNumber; x++) {
//       const commentText = randomGeneratedPhotos[i].comments[`${x}`].message
//       const commentName = randomGeneratedPhotos[i].comments[`${x}`].name
//       const commentUserpic = randomGeneratedPhotos[i].comments[`${x}`].avatar

//       const commentTemplate = `<li class="social__comment">
//       <img class="social__picture" src="${commentUserpic}" alt="Аватар комментатора фотографии" width="35" height="35">
//         <p class="social__name">${commentName}</p>
//        <p class="social__text">${commentText}</p>
//     </li>`
//     commentsList.insertAdjacentHTML('beforeend', commentTemplate)
//     }

//   })

// })

previewPictures.forEach((e, i) => {
  e.addEventListener('click', (evt) => {
    // console.log('evt :' + evt,
    // 'e:'+ e,
    // 'i' + i)
    bigPictureContainer.classList.remove('hidden')
    document.body.classList.add('modal-open')

    const clickedPicture = e.querySelector('.picture__img')
    bigPictureImage.src = clickedPicture.src;
    bigPictureDescription.textContent = clickedPicture.alt;
    bigPictureLikesCount.textContent = randomGeneratedPhotos[i].likes;

    bigPictureCommentsCount.innerHTML = `${randomGeneratedPhotos[i].commentsNumber} из <span class="comments-count">${randomGeneratedPhotos[i].commentsNumber}</span> комментариев`;

    commentsList.innerHTML = ''
    for (let x = 0; x < randomGeneratedPhotos[i].commentsNumber; x++) {
      const commentText = randomGeneratedPhotos[i].comments[`${x}`].message
      const commentName = randomGeneratedPhotos[i].comments[`${x}`].name
      const commentUserpic = randomGeneratedPhotos[i].comments[`${x}`].avatar

      const commentTemplate = `<li class="social__comment">
      <img class="social__picture" src="${commentUserpic}" alt="Аватар комментатора фотографии" width="35" height="35">
        <p class="social__name">${commentName}</p>
       <p class="social__text">${commentText}</p>
    </li>`
    commentsList.insertAdjacentHTML('beforeend', commentTemplate)
    }

  })
})



// close button

bigPictureCloseButton.addEventListener('click', () => {
  bigPictureContainer.classList.add('hidden')
  document.body.classList.remove('modal-open')
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    bigPictureContainer.classList.add('hidden')
    document.body.classList.remove('modal-open')
  }
})

document.addEventListener('click', (e) => {
  if (e.target == bigPictureContainer) {
    bigPictureContainer.classList.add('hidden')
    document.body.classList.remove('modal-open')
  }
})


// likes or smth

// const bigPicLikesBtn = document.querySelector('.likes-count')

// bigPicLikesBtn.addEventListener('click', () => {
//   if (!bigPicLikesBtn.classList.contains('likes-count--active')) {
//     bigPicLikesBtn.classList.add('likes-count--active')

//   }
// })
