//ふわっと表示
document.addEventListener("DOMContentLoaded", function () {
    document.body.className = "view";
});

//画像ファイル名は、配列から取得します。
const fujiImg_list = ["mt-fuji001.jpg", "mt-fuji002.jpg", "mt-fuji003.jpg"];

//ここに処理を書きます。
const imageArea = document.querySelector("#mt-fuji");
const btns = document.querySelectorAll(".image-fuji");
const preBtn = document.querySelector(".pre");
const nextBtn = document.querySelector(".next");
let count = 0;

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        imageArea.setAttribute("src", `images/${fujiImg_list[i]}`);
        count = i;
    });
}

const nextBtnClick = function () {
    if (count < fujiImg_list.length - 1) {
        count++;
        imageArea.setAttribute("src", "images/" + fujiImg_list[count]);
    } else {
        count = 0;
        imageArea.setAttribute("src", "images/" + fujiImg_list[count]);
    }
};

const prevBtnClick = function () {
    if (count === 0) {
        count = fujiImg_list.length - 1;
        imageArea.setAttribute("src", "images/" + fujiImg_list[count]);
    } else {
        count--;
        imageArea.setAttribute("src", "images/" + fujiImg_list[count]);
    }
};

preBtn.addEventListener("click", prevBtnClick);
nextBtn.addEventListener("click", nextBtnClick);