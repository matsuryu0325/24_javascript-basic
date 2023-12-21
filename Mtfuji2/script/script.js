//imgを取得
const images = document.querySelectorAll(".slide img")
console.log()

//div ="slide"の中の最後の画像[images.length-1]を最初の画像[0]の前
//inserBeforeはappendChildの逆、前に入れる
const slide = document.querySelector(".slide");
slide.insertBefore(images[images.length - 1], images[0]);
//btn

//左ボタン

const leftBtn = document.querySelector(".leftBtn");
const leftslider = function () {
    leftBtn.addEventListener("click", function () {
        //ローカル変数　このブロックにしか有効ではない
        const slideImages = document.querySelectorAll(".slide img")
        //クリックを押した時点でのhtml
        //左側の余計な画像を、最後に移動
        //入っているstyle属性を削除
        slide.appendChild(slideImages[0]);
        slideImages[1].removeAttribute("style");
    });
};

leftBtn.addEventListener("click", leftslider);





//右ボタン
const rightBtn = document.querySelector(".rightBtn");
const rightslider = function () {
    rightBtn.addEventListener("click", function () {
        const slideImages = document.querySelectorAll(".slide img")
        slideImages[1].removeAttribute("style");
        slideImages[0].style.marginLeft = "0";
        slide.insertBefore(slideImages[slideImages.length - 1], slideImages[0]);
    });
};

rightBtn.addEventListener("click", rightslider);

window.setInterval(leftSlider, 2000);
