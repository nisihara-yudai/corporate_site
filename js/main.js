'use strict';

// ハンバーガーメニューの処理
const target = document.getElementsByClassName('menu');
console.log(target);
for (let p = 0; p < target.length; p++){
  target[0].addEventListener("click", () => {
  target[0].classList.toggle('open');
  
  const navigation = document.getElementsByClassName('navigation');

  console.log(navigation); // 要素のリストを確認する為に必要なこと。

  for (let i = 0; i < navigation.length; i++){
    navigation[0].classList.toggle('in');
  }
});
}

// getElementByIdでは作る事が出来ました。(ドロワーメニューとハンバーガーメニュー)
// const target = document.getElementById('menu');
// target.addEventListener("click", () => {
//   target.classList.toggle('open');
  
//   const navigation = document.getElementsByClassName('navigation');

//   console.log(navigation); // 要素のリストを確認する為に必要なこと。

//   for (let i = 0; i < navigation.length; i++){
//     navigation[0].classList.toggle('in');
//   }
// });
