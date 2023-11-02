# 2023年度後期javascript基礎授業課題

## 授業内コード
1. 10月5日（木）はじめの一歩
2. 10月5日（木）github リポジトリ作成
3. 10月12日　(木)　文字列の計算、変数の宣言、代入、複合演算子とインクリメント、doumentオブジェクトとDOM
4. 10月19日 (木)　コレクション
5. 10月26日　(木)　その他の document オブジェクトのメソッド　イベント
6. 11月2日　　（木）classlistとイベント

## 10月12日

- リテラルと演算子

### classlist

```js
<script>
        //全部javascript内に持ってくる
        const h1_element = document.querySelector("h1");
        //確認
        console.dir(h1_element);

        //hasAttribute
        const has_result = h1_element.hasAttribute("class");
        console.log("has_result");

        //getAttribute
        const get_result = h1_element.getAttribute("class");
        console.log(get_result);

        //classname classの値を上書きできる
        h1_element.className = "title sitename";

        //classlist.add 加えたいとき
        h1_element.classList.add("w-full");

        //elem.classList.remove("class"); //クラスの削除をします。
        h1_element.classList.remove("sitename");
        //elem.classList.toggle("class"); //クラスが存在する場合は削除します。なければ追加します。
        const body_element = document.body;
        body_element.addEventListener("click", function () {
            body_element.classList.toggle("red");
        })
        // elem.classList.contains("class"); //クラスをの有無をチェックし、true/falseを返します。
        const contains_result = h1_element.classList.contains("sitename");
        console.log(contains_result);//上で削除しているのでfalse
    </script>

```





### 文字列の計算

```js
//文字列の連結
        console.log("ABC" + "DEF"); //文字列 + 文字列
        console.log("円周率は" + 3.14 + "です"); //文字列 + 数値
        console.log("計算結果" + 123 + 456); //文字列 + 数値の計算
        console.log(123 + 456 + "となりました"); //数値の計算 + 文字列
        console.log("計算結果:" + (123 + 456)); //文字列 + (数値の計算)
        console.log("2" - 1); //文字列 - 数値
        console.log("2" * 3); //文字列 - 数値
        console.log("2" / 4); //文字列 - 数値
```
### 変数の宣言、代入

```js
        //変数の宣言、代入
        let a; //変数の宣言　//ES6
        a = 10; //値の代入 (数値型)
        console.log(a);

        a = "hello"; //値の再代入 (文字列型)
        console.log(a);

        let = "world"; //変数の宣言と代入を同時に行っています。更に再宣言なので、エラーになる

        //定数の宣言、代入
        const PI = 3.14;
        console.log(PI);

        //再代入
        PI = 3.14159265;
 ```


### 複合演算子とインクリメント
```js
        //複合演算子

        let n = 5;
        n = n + 2;
        console.log(n); //7


        let n2 = 5;
        n2 += 2;  //複合代入演算子　n2 = n2 +　２と同じ
        console.log(n2);


        インクリメント
        let n3 = 5;
        n3++;  //インクリメント　1足す
        console.log(n3); //6
 ```

### doumentオブジェクトとDOM
```js
 <h1>果物の種類</h1>
    <ul id="fruitslist" class="listbox__list">
        <li>りんご</li>
        <li>みかん</li>
        <li>バナナ</li>
    </ul>
    <!--リストを操作するDOM操作のスクリプト-->
    <script>
        //メロンを加えたい
        //ul要素を取り入れる
        const element = document.querySelector("ul");
        console.log(element);

        //selectorってcssのセレクターなので、
        const element2 = document.querySelector("#fruitslist");
        console.log(element2);

        //classもいける
        const element3 = document.querySelector(".listbox__list");
        console.log(element3);

        //新しい要素を作るli
        const lilast = document.createElement("li");
        console.dir(lilast);
        lilast.textContent = "メロン";
        console.log(lilast);
    </script>
 ```

    sample3-20
 ```js
     <script>
        for (let i = 0; i < 4; i++) {
            //繰り返しの処理を書いていきます。
            //0~3を表示したい。
            console.log(i);


            const name_list = ["松田", "田中", "中山", "山本", "本田"];
            console.log(name_list);

            console.log(name_list[3]);

            for (let i = 0; i < 5; i++);
            console.log(name_list[1]);

        }
    ```

```js

    <script>
        const fruits = ["りんご", "もも", "バナナ"];

        console.log(fruits[2]);

        //ulをjavascript空間に引きずり込む
        const element = document.querySelector("#fruitslist");
        console.log(element);

        for (let i = 0; i < fruits.length; i++) {
            const lilast = document.createElement("li");

            //liに値（果物→配列fruitsの中にある）を代入
            console.log(fruits[i]); //りんご、もも、バナナが取れる
            lilast.textContent = fruits[i];
            element.appendChild(lilast);

        }
```

```js
    <script>
        const btn = document.querySelector("#btn");
        console.log(btn);


        function showMessage() {
            alert("イベントが発生しました。")
        }

        //イベント
        //何に何かをしたら、どうなる
        //「ボタン」に「クリック」をしたら、「アラートが出る」
        btn.addEventListener("click", showMessage);
        //加える+イベント+リスト

        //関数を使わない
        const nonFuncBtn = document.querySelector("#nonFunc");
        nonFuncBtn.addEventListener("click", function () {
            alert("関数を使わないボタンをクリック");
        });

        //例）「ブラウザで発生する主なイベント」から"resize"（サイズが変更する）タイミングで console に文字が発生するようにします。
        //resizeは、DOM内にはありませんのでwindowで取得します。
        window.addEventListener("resize", function () {
            //ここに処理を書きます。
            console.log("サイズが変わりました。");
        });
    </script>
```
## 10 月 5 日

- インターネットの基本について理解する。
- Web の基本的な仕組みを理解する。
- Web サーバーの役割について理解する。
- 開発環境の構築
- JavaScript を書く場所

### JavaScript を書く場所

1. HTML ファイルの中
1. 外部 JS ファイルの中
1. ブラウザのコンソール

基本は、外部 JS ファイルを読み込むが、HTML 内に各場合は、`</body>`の上に書く。

```html
<!doctype html>
<html lang=ja>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>演習</title>
</head>
<body>
</script>
</body>
</html>
```

### フロントエンドロードマップ

フロントエンドエンジニアに必要なスキルの[ロードマップ](https://roadmap.sh/frontend)がある。