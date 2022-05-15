## CSS
### 単位
* px：ピクセル。画素数
* rm：1rem=16px
* %：親要素に対する割合
* vh：ビューポート（画面サイズ）の高さに対する割合。100vhは画面の高さと同じ（100%）を表す
* vw：ビューポートの幅に対する割合
* vmin：画面の高さか幅の小さい方に対する割合
* vmax：画面の高さか幅の大きい方に対する割合

## Tailwind CSS
### Sizing
* min-h-screen（要素最小高）
min-height: 100vh;

### Spacing
* py-0（上下0pxﾊﾟﾃﾞｨﾝｸﾞ）
padding-top: 0px;
padding-bottom: 0px;
* px-2（上下8pxﾊﾟﾃﾞｨﾝｸﾞ）
padding-left: 0.5rem;
padding-right: 0.5rem;
8px

### Flexbox
* flex（ﾌﾚｯｸｽ使用）
display: flex;
* flex-col（ﾌﾚｯｸｽを横方向から縦方向に変更）
flex-direction: column;

### Box Alignment
* justify-center（ﾌﾚｯｸｽ方向に対してｾﾝﾀﾘﾝｸﾞ）
justify-content: center;
* items-center（ｱﾗｲﾒﾝﾄ方向に対してｾﾝﾀﾘﾝｸﾞ）
align-items: center;

## 参考文献
* [TechAcademy｜CSSで要素の高さを指定する100vhと100%の違い](https://techacademy.jp/magazine/38188)
* [Tailwind CHEET SHEET](https://nerdcave.com/tailwind-cheat-sheet)