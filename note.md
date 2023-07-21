# note

- そもそもuseContextが必要ない
- useContextの使い方と、そのデータの非同期での使い方は復習する

## コンポーネント
- NavBar
- Intro
- UsedLanguage
- Repository
- Contact
- Footer
- Wrapper
- Background

## ポイント
- 非同期処理でGithubAPIを叩く → UsedLanguage, Repository
- Node Mailerでexpress.jsを使用、環境変数を設定してHerokuからメールを送信できるように設定
- 一応、Express.jsを使うのでそこにReactを参照する経路を指定する必要があるかどうか？→ MERNの時と同じようにする。しかしserver側のコードはほぼnodemailerの設定のみなので、プロジェクトフォルダにserver.jsを配置するだけでよさげ
- 構成
src/assets
src/components
server.js
- 背景のThree.js ... 最難関?



## 作業手順メモ
0. create-react-app my-portfolio
1. 不要なファイルを削除
2. 必要なコンポーネントとプロジェクトのディレクトリ構成、CSSをどうするかについて考える。今回はcssはapp.cssに全部入れする
3. コンポーネントファイルを作ってrafceで雛形を形成
4. assets/font、assets/imgディレクトリを作成
5. App.jsにコンポーネントを配置する
6. react-bootstrapでNavBarを作っていく


## NavBar
▼ bootstrapのnavbar
react-bootstrapのnavbarを使う

```
$ npm install react-bootstrap bootstrap
```

- react-bootstrapのサイトからnavbarのコードをコピーして編集する

### スクロールの状態でクラスの付け替え
- useStateでスクロールされた時の状態を管理する。50pxスクロールされているとscrolledがtrueとなる
- JSXでNavbarに三項演算子でscrolledの状態を監視してクラスをつけ分ける

### activeLink
- クラスを三項演算子で状態変数を見て付け替える

### 画像の読み込み
### cssファイルでフォントを読み込む
まずフォントファイルをダウンロードする。
(google fontsからDM_SansをDL)
src/assets/font/に入れる
App.cssでフォントを読み込む

### デフォルトCSSを設定する

### scroll-behavior

```css
html {
    scroll-behavior: smooth;
    scroll-padding-top: 75px;
}
```

### ナビバーのcssを設定する

### cssの読み込み
App.jsにApp.cssとbootstrap/dist/css/bootstrap.min.cssを読み込ませる



## skills(非同期GithubAPI)
オリジナルではskillsだが、ここではUsed Languageで。
★ 非同期処理でgithub apiに接続する。

## Repository(タブ、カルーセル、非同期GothubAPI)
オリジナルではprojectsだが、ここではRepositoryで。

▼ タブ

react-bootstrapのpillsを使う

```js
<Tab.Container id="projects-tabs" defaultActiveKey="first">
    <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link eventKey="first">tab One</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="second">Tab Two</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="third">tab Three</Nav.Link>
        </Nav.Item>
    </Nav>
</Tab.Container>
```

▼ カルーセル

react-multi-carouselを使ってカルーセルを実装する。

```
$ npm i react-multi-carousel
```

▼ タブ内のカルーセル内にあるカードをコンポーネント化する
ProjectCard.js

##### id=pills-tabはなんのために？

##### タブの中にあるカルーセルが表示されない
表示されていないタブに配置されたカルーセルが初期的にはDOMに存在しないため、表示されないためです。そのため、タブが切り替わるたびに、カルーセルを初期化する必要があります。

以下は、react-bootstrapのTabコンポーネントのonSelectプロパティを使用して、タブが選択されたときにカルーセルを初期化する方法の例です。

タブを切り替えるたびに初期化を行うことで対策できたが、消えて再表示されるのが見栄え的によくない。
とりあえず、タブ自体を消しておく。

タブをdisplay:blockにせずにopacityとvisibilityで消して、heightを0にしておけばulの中にliは入ったままにできる。
もしくは、タブを切り替えるたびに初期化をするか
のいずれか。

## Contact(フォーム、node mailer)

express、cors、nodemailerをインストールする

```
npm i express cors nodemailer
```

server.jsで経路/contactにpostで待ち受ける。
Contact.jsからはhandleSubmitでasyncを使ってリクエストを送る。

## Footerを実装

省略

## Used language
- 背景に画像を設置してパララクス
- github apiで取得するデータを想定してガワだけ準備する？

## node mailerを試す
1. Gアカウントより「アプリパスワード」を入手
jsqrmxomcrzsnixj
server.jsにGoogleアカウントのユーザー名とパスワードを設定する。
2. 適切にフロントを設定する。→ Contact.js参照
3. dotenvをインストールする

```
npm install dotenv
```

4. .envファイルを新規作成

```
MAIL_USER=mpkpq166@gmail.com
MAIL_PASSWORD=jsqrmxomcrzsnixj
```

5. server.jsで読み込む

```js
const express = require('express');
const dotenv = require('dotenv'); // 追加

const app = express();

// dotenv を読み込み、環境変数を取り込む
dotenv.config();

// 環境変数を使用する
const mailUser = process.env.MAIL_USER;
const mailPassword = process.env.MAIL_PASSWORD;

// ルーティングの定義など...
```

6. server.jsを起動して、フロントも起動してフォームから送信する

送信完了っけい！！！

7. .gitignoreで.envを追加しておく






## Github APIの制限を緩和する
Gituhbのsetting > Developper settings > New OAuth App

MEMO:
- アクセストークンはユーザーごとに発行
OAuthのクライアントID、クライアントシークレットはアプリごとに発行される

パーソナルアクセストークン:
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

##### OAuth設定

注意: OAuthは失敗した。

http://localhost:3000/
http://localhost:3000/callback

Client ID: 78739f0804675c33b4ba
Client secrets: e17abb2db9c2d2b9cd6076751527eb0a6d462783

これらのキーを使ってAPIを叩くとアクセス上限が緩和される。

```
https://api.github.com/users/"<githubのusername>"/repos?&client_id="<Client ID>"&client_secret="<Client Secrets>"
```



##### 制限状況の確認

参照: https://docs.github.com/ja/rest/overview/resources-in-the-rest-api?apiVersion=2022-11-28#rate-limiting

▼ 通常の制限?

```
% curl -i https://api.github.com/users/tsudumiya

HTTP/2 200 
server: GitHub.com
date: Tue, 25 Apr 2023 06:27:47 GMT

x-ratelimit-limit: 60
x-ratelimit-remaining: 57
x-ratelimit-reset: 1682407557
x-ratelimit-resource: core
x-ratelimit-used: 3
```

- x-ratelimit-limit	
1時間あたりのリクエスト数の上限。
- x-ratelimit-remaining
現在のレート制限ウィンドウに残っているリクエストの数。
- x-ratelimit-used
現在のレート制限ウィンドウに残っているリクエストの数。
- x-ratelimit-reset
現在のレート制限ウィンドウが UTC エポック秒単位でリセットされる時刻。

▼ アクセストークン制限の確認

```
curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <YOUR-TOKEN>"\
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/rate_limit
```

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に置き換える

```
curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer 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"\
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/rate_limit
```


## used languageにgithub apiからデータを取得して表示させる

OK


## repositoryのスライダーにgithub apiからデータを取得して表示させる

OK


## 細々修正
- トップを100vhにしてスクロールテキストを追加する
- 背景のコンポーネントを100vhにしておく。あとで3Dオブジェクトを配置する
- Repositoryにダミーの画像とホバー、リンクを配置
- 文言を差し替える
- ソースを整理する
- Contactのフォームの高さや幅を変更

## 背景に3Dオブジェクトを配置して動かす

## 微調整
- 各セクションの文言を埋める
- イントロの高さを調整
- イントロにスクロールテキストを追加する
- ナビゲーションを調整する ... 不要なやつを削る
- ロゴを差し替える
- ナビのアクティブリンクの状態を更新する処理
- 送信完了のメッセージがしょぼい！！
- スクロールしたときのナビの動き




## その他
- このメモは公開しないように.gitignoreに追加する
- Githubのユーザー名を変更する
tsudumiya → kyohei53
- React on screenは必要か?


## 残りタスクA
    1. Used Languageの文言を考える
    2. Repositoryの文言を考える
    3. Contactの文言を考える
    4. Contactのメール送信が機能するようにする
        - メールの送信は●
        - プロキシーの設定●

5. Repositoryの画像を差し替える(サムネは白黒にすればどうにかなる説？)
    1. このサイト
    2. jwtのやつ
    3. 書評のやつ
    4. 
6. Repositoryにリンクを追加する -> Githubへのリンクと、サイトへの直接リンク
7. 全リンクのhover確認
8. Used Languageの棒線に色をつける。Githubと合わせる。
9. Used Languageの背景にパララックスを加える
10. スマホのナビボタンを開いた時にアニメーションさせる
11. cssで余白を微調整
12. スライダーの矢印を整えたい

## 残りタスクB
1. スライダーだかでいずれかのテキストを縦方向にスライドさせる。ヴァーチカルスライダーtextとかで検索する?
2. 



## MEMO
- skills
- repository
- z-indexおかしい。ナビ
- スクロールダウンボタンを追加
- 全体の色を調整
- コンテンツの幅を調整する
- Nav
    - hoverで上下方向に文字が入れ替わるやつにする
- bxsliderでテキストを縦方向に自動スライドループさせる？

## MEMO2
- ⭕️ Skillsの背景を追加してパララックス
参考: https://autovice.jp/articles/164

- スマホのメニューボタンにアニメーションを追加

- Skillsのreact-caroucelの矢印をカスタムにして幅を調整する
- ナビのactive linkを消すか、交差で付け替えるか
- 全体の色を調整
- スマホサイズの表示確認・実機確認






## React Bootstrapのブレイクポイント
xs (Extra Small): 0px (スマートフォンなどの非常に小さいデバイス)
sm (Small): 576px (タブレットポートレートモードなど)
md (Medium): 768px (タブレットランドスケープモードなど)
lg (Large): 992px (デスクトップ画面など)
xl (Extra Large): 1200px (大きなデスクトップ画面など)