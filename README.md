# durachat

アニメ デュラララで利用されているチャットシステムを再現してみました。

<img src="./demo/login.jpeg" alt="ログイン画面" />
<img src="./demo/chat-01.jpeg" alt="チャット画面その1" />
<img src="./demo/chat-02.jpeg" alt="チャット画面その2" />

## 技術スタック

- React
- styled-components
- express
- socket.io

## 実行手順

各種パッケージインストール  
`yarn install`

webpack-dev-server起動(3000番ポート)  
`yarn dev`

socket.io用サーバを起動(8080番ポート)  
`node server.js`

## TODO

- [ ] コンポーネントのリファクタリング
- [ ] Contextの導入検討
