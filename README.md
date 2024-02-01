# 2023年度後期javascript基礎授業課題

## 授業内コード
1. 10月5日（木）はじめの一歩
2. 10月5日（木）github リポジトリ作成
3. 10月12日　(木)　文字列の計算、変数の宣言、代入、複合演算子とインクリメント、doumentオブジェクトとDOM
4. 10月19日 (木)　コレクション
5. 10月26日　(木)　その他の document オブジェクトのメソッド　イベント
6. 11月2日　　（木）classlistとイベント
7. 11月9日　（木）if文・switch文
8. 12月7日　（木） 関数、引数と戻り値
9. 12月14日（木）　コールバック関数、アロー関数
10. 1月11日（木）　フォームとオブジェクトとクラス
11. 1月18日（木）　オブジェクト
12. 2月1日　（木）　フォームとオブジェクトとクラス、期末確認テスト


2月1日
```js
<script>
    // story:話, title:題名, image:サムネイル名, id:YouTube動画id
    const chiikawas = [
      {
        story: 1,
        title: "かためのプリン／ホットケーキ",
        image: "chiikawa-001.webp",
        id: "pbQQAwSQUX4",
      },
      {
        story: 2,
        title: "スフィンクス／ほんものだ",
        image: "chiikawa-002.webp",
        id: "i6d3K6ln-d4",
      },
      {
        story: 3,
        title: "イカ／パイシチュー",
        image: "chiikawa-003.webp",
        id: "a7cwqxmn7rY",
      },
      {
        story: 4,
        title: "ブロッコリー／ピザまん",
        image: "chiikawa-004.webp",
        id: "l9IAr7WY-Xk",
      },
      {
        story: 5,
        title: "チャリメラ／チャルメラ",
        image: "chiikawa-005.webp",
        id: "cE8wVmwY7VY",
      },
    ];
  </script>
  <script>
    //こちらに記述する
    const content = document.querySelector(".content");

    for (let i = 0; i < chiikawas.length; i++) {
      console.log(chiikawas[i]);
      const dlElm = document.createElement("dl");

      const dtElm = `<dt><span>第${chiikawas[i]["story"]}話</span>${chiikawas[i]["title"]}
        </dt>
        <dd><a href=""<img src="./images/${chiikawas[i]["image"]}"></dd>
      `;//テンプレートリテラル

      dlElm.innerHTML = dtElm;
      content.appendChild(dlElm);

      for (let key in chiikawas[i]) {
        console.log(chiikawas[i][key]);
      }

    }
  </script>
```









1月18日
```js
<script>
        const countries = {
            Japan: "日本",
            USA: "アメリカ",
            China: "中国",
            Korea: "韓国",
        };

        console.log(countries.USA); //アメリカがほしい

        //for...in文
        for (let country in countries) {
            console.log(countries[country]);
        }

        const meibo_obj = [ //[]で囲まれているので、配列
            { id: "20224", name: "新井太郎" }, //{}で囲まれているので、オブジェクト
            { id: "20031", name: "井上次郎" },
            { id: "20193", name: "山本花子" }
        ];
        //オブジェクトが３つはいっているオブジェクト
        //配列の要素が全部欲しいfor文
        for (let i = 0; i < meibo_obj.length; i++) {
            console.log(meibo_obj[i]);
            for (let key in meibo_obj[i]) {
                console.log(key); //id,name
                console.log(meibo_obj[i][key]); //20224 新井太郎
            }
        }

        let npbCentral_list = [
            { team: "東京ヤクルトスワローズ", home: "東京" },
            { team: "阪神タイガース", home: "大阪" },
            { team: "読売ジャイアンツ", home: "東京" },
            { team: "広島東洋カープ", home: "広島" },
            { team: "中日ドラゴンズ", home: "名古屋" },
            { team: "横浜DeNAベイスターズ", home: "横浜" },
        ];
        //中日ドラゴンズの本拠地をconsoleに表示する
        //配列の指定→オブジェクトの指定
        //for文、for..in文は使わなくて良い

        console.log(npbCentral_list[4].home);
    </script>
```

```js

<body>
    <ul>
        <li>りんご</li>
        <li>みかん</li>
        <li>パイナップル</li>
    </ul>
    <script>
        //値を変更したい場合は、添字で指定
        const animals = ["dog", "cat", "bird"];
        animals[2] = "lion";
        console.log(animals);

        animals.push("tiger");
        console.log(animals.length); //4
        console.log(animals);

        //NodelistやHTMLCOllectionは、配列の便利なメソット
        const fruits = document.querySelectorAll("li");
        console.log(fruits); //Nodelist　（配列っぽいもの Array Like）
        //fruits.push("<li>いちご</li>");

        animals.unshift("elephant");
        console.log(animals);

        animals.pop();
        console.log(animals);
        //["elephant", "dog", "cat", "lion"];

        animals.shift();
        console.log(animals);
        //["dog", "cat", "lion"];
    </script>

    <ul class="junishis"></ul>
    <script>
        const junishi = ["丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌"];
        const twopieces = ["子", "亥"];
        const junishis = document.querySelector(".junishis");

        //配列junishisに子と亥を追加する
        twopieces[0];
        twopieces[1];

        //先頭に追加する場合は、unshift
        junishi.unshift("子");



        for (eto of junishi) {
            const list = document.createElement("li");
            list.innerHTML = eto;
            junishis.appendChild(list);
        }

        const staff = [
            ["佐藤", 41, "板橋"],
            ["鈴木", 25, "大阪"],
            ["林", 34, "札幌"],
        ];

        for (let i = 0; i < staff.length; i++) {
            console.log(staff[i][0]);
            //全部要素を取りたい
            //ネスト（入れ子）の場合は、iの次はjを使う
            for (let i = 0; i < staff[i].length; j++) {
                console.log(staff[i][j])
                //jの次はkを使う
                //for文のネストは３階層まで、４以上になる場合はおかしい
            }
        }
    </script>
```









1月11日

```js
 <script>
        const person = {
            nome: "",
            age: 0,
            information: function () {
                return "名前:" + this.name + "\n年齢i" + this.age;
            },
        };

        person.name = "山田太郎";
        person.age = 18;

        console.log(person.information());

        const myCar_list = {}; //空のオブジェクトを作成
        myCar_list.make = "Ford";
        myCar_list.model = "Mustang";
        myCar_list.year = 1969;
        console.log(myCar_list);
        //{make: 'Ford', model: 'Mustang', year: 1969}
        console.log(myCar_list.model, myCar_list.year);
        // objectは順番を担保しない

        myCar_list["2021"] = "51年"; //ブランケットで設定

        console.log(myCar_list);
        console.log(myCar_list["2021"]);


        const dict = { apple: "林檎", banana: "バナナ", orange: "オレンジ", };
        //新規登録
        dict.grape = "ぶどう";

        //削除
        delete dict.orange;
        console.log(dict);

        //再代入
        dict.apple = "りんご";
        console.log(dict);
    </script>
```








```js
 const takeOutBtn = document.querySelector(".takeOut");

        const calculation = function (cake, tax) {
            const result = cake + cake * tax;
            return result;
        }

        takeOutBtn.addEventListener("click", function () {
            const price = calculation(cake, 0.08);
            result.innerHTML = price;
        })

        const eatInBtn = document.querySelector(".eatIn");

        eatInBtn.addEventListener("click", function () {
            const price = calculation(cake, 0.10);
            result.innerHTML = price;
        })
        const result = document.querySelector(".taxIn");
```

-  アロー関数

"return" 戻り値




```js

<script>
        const dog = function () {
            return "わんわん";
        }
        //関数の定義
        function dog2() {
            return "バウワウ";
        }

        //関数dogを実行=()があるから
        console.log(dog());
        console.log(dog2());


        const cat = () => {
            return "にゃーにゃー";
        }

        //関数catの実行
        console.log(cat());



        //鳴き方を決めたい
        const animal = (voice) => {
            return voice;
        }

        //関数animalの実行
        //みゃあみゃあ


        console.log(animal("みゃあみゃあ"));


        const thisElm = document.querySelector("p");
        console.log(thisElm);

        thisElm.addEventListener("click", (e) => {
            console.log("クリック")
            //console.log(this.textContent);
            console.log(e.target.innerText);
        });

    </script>
```



- コールバック関数

```js

    <script>
        //関数①
        const concatenateSpace = function (lastName, firstName) {
            return lastName + " " + firstName;
        };
        //関数②
        const useConcatenate = function (name, func) {
            //nameには　関数式①
            let concatName = func(name[0], name[1]);
            console.log("結合結果：" + concatName);
        };

        let nameParam = ["松岡", "琉志"];//配列

        //関数式②の実行（引数① =　配列,引数② = 関数の名前）
        useConcatenate(nameParam, concatenateSpace);

        //結合結果：中田 雄二

        //コールバック関数基本　※よく使う
        //関数式①
        const testFunc = function (func) {
            //funcには、関数式②
            //関数の実行後すぐに表示
            console.log("testFuncが実行されました");

            //2秒後、実行
            setTimeout(function () {
                func();
            }, 2000);
        };

        //関数式②
        const callback = function () {
            console.log("callbackが実行されました");
        };

        //関数式①を実行している
        //callbackは関数式②の関数名
        testFunc(callback);
    </script>
```








## 10月12日

- リテラルと演算子

### classlist

```js
    <script>
        const text = document.querySelectorAll("p");
        console.log(text);

        for (let i = 0; i < text.length; i++) {
            //nodelistだから
            console.log(i);
            text[i].addEventListener("click", function () {
                this.classList.add("slide")
            });
        }
    </script>
```





```js
<h1>if文による条件分岐</h1>
    <script>
        /* ※ブロックコメント
      条件分岐のサンプル(1)
      if文による条件分岐*/

        const num = 100;

        //条件分岐 ※行コメント
        if (true) {
            document.body.insertAdjacentHTML("beforeEnd", "<p>numは100以上</p>");
        } else if (num === 0) {
            document.body.insertAdjacentHTML("beforeEnd", "<p>numは100以上</p>");
        } else {
            document.body.insertAdjacentHTML("beforeEnd", "<p>numは100以上</p>");
        }

        console.log(num >= 100);

        console.log(1 == 1);
        console.log(1 === 1);

        console.log(1 == "1");
        console.log(1 === "1");//""文字列型　"""がないと数値型、型が違う　===のときはfalse
    </script>

    ```






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