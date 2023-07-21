1. scriptsにサーバー側の起動処理を追加

```
"dev:api": "nodemon server.js",
```

動くか確認しておく。npm run dev:api


2. npm run eject
注意点: 元に戻せないのでeject前のコードをgitにコミットしておく


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