1. scriptsにサーバー側の起動処理を追加

```
"dev:api": "nodemon server.js",
```

動くか確認しておく。npm run dev:api


2. npm run eject
注意点: 元に戻せないのでeject前のコードをgitにコミットしておく
このときgitに変更をコミットしていないと実行できない


3. Proxyの設定

▼ server.js

```js
const PORT = process.env.PORT || 8080;
// 
app.listen(PORT, () => console.log('Server Running'));
```

package.jsonにproxyを設定

```js
"proxy": "http://localhost:8080",
```

フロント側のAPI接続でルートパスになっているか確認

```js
let response = await fetch('/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formDetails),
});
```

npm run dev:api　で動作するか確認する。


4. npm-run-allでサーバー側とフロントのコードをdevで実行できるようにしておく
npm-run-allをインスト、npm-run-allでdevコマンドでサーバーとクライアントの両方を実行させる

```js
"scripts": {
    "dev:api": "nodemon server.js",
    "dev:client": "node scripts/start.js",
    "dev": "run-p dev:*",
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js"
},
```

5. startのscriptsを変更する
これはホスティングサーバーで実行させるコマンドになる。
フロントのコードはbuildしたものが置かれるのでフロントのコードを起動する必要はない。

```js
"start": "node server.js",
```

6. サーバー側に経路を追加する
expressの設定で、buildの中のコードをサーバー上にホスティングする設定を加える。express.staticというミドルウェアを使用する。

```js
// 第一引数はルートの場合、省略可能
app.use("/", express.static("build"));
```

5番ですでにやっているが、startのscriptsを確認せよ。
本番用のサーバーを立ち上げるコマンドを追加する。

```js
"start": "node server.js",
```

npm run buildからの、npm start を実行して8080で画面を確認してみる。
詳細ページや一覧ページが一見問題なく稼働しているように見えるが、リロードするとnot foundとなる。reactのアプリケーションはすべてのページをindex.htmlを使用している。なのでパスが何であれindex.htmlを返さないといけない。

これを解決するために、server/index.jsに以下を追加する。

```js
const path = require('path');

// APIのルート

// APIのルートの後に追記する
app.get('*', function (req, res) {
    const indexHtml = path.resolve('build', 'index.html');
    res.sendFile(indexHtml);
});
```

これにより、apiパスに一致しないものはこの経路に処理されるのでindex.htmlが返されることになる。

一旦サーバーを落として、もう一度npm startし、http://localhost:8080/を確認。
ページをリロードしても問題なく表示されていることが分かる。

検証ツールでリクエストを見てみるとオリジンも8080でCORSの制約にもひっかかることはない事が確認できる。

7. renderでデプロイする
gitでコミットしておく

https://dashboard.render.com/