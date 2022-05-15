## NextJSプロジェクト作成
ここではnpmでNextJSプロジェクトを構築する。

* create-next-app
  ```
  $ npx create-next-app . --use-npm
  ```

* 開発サーバー起動 
  ```
  $ npm run dev
  ```

## Tailwind CSS
Tailwind CSS v3.0となりNextJSでの導入方法が以前と変わっている。

* TailwindCSSインストール
  ```
  $ npm install -D tailwindcss postcss autoprefixer
  ```

* TailwindCSS初期化
  ```
  $ npx tailwindcss init -p
  ```

* tailwnd.config.jsを更新
  ```js
  module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```

* styles/globals.css
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

## ライブラリ追加
* node-fetch
  ｻｰﾊﾞｰｻｲﾄﾞのnode-fetchを利用するためﾗｲﾌﾞﾗﾘｲﾝｽﾄｰﾙ
  ```
  $ npm install node-fetch
  ```

### ディレクトリ構成
* components
  * Layout.js
  * Post.js
* lib
  * posts.js
* pages
  * posts/[id].js
  * blog-page.js
  * contact-page.js

## 参考文献
* [tailwindcss｜Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)
