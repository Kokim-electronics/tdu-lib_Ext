## tdu-lib_Ext-v1.1.1

### Ⅰ.機能
- [電大OPAC](https://tdu-lib.mrcl.dendai.ac.jp/)のログインを自動化。

### Ⅱ.導入

参考 : <br>[カスタムの Chrome アプリと拡張機能を作成して公開する - Chrome Enterprise and Education ヘルプ](https://support.google.com/chrome/a/answer/2714278?hl=ja)

1. [Releases](https://github.com/Kokim-electronics/tdu-lib_Ext/releases) - Assets - `tdu-lib_Ext-vx.x.x.zip`からDL

3. `chrome://extensions/` or `edge://extensions/`へアクセス、デベロッパーモード(Chrome)・開発者モード(Edge)、オン

4. `C:\Users\hoge\Documents\Github`あたりにでも解凍し`tdu-lib_Ext-vx.x.x`フォルダ(manifest.jsonが入っているフォルダ以外はエラーを吐きます)をD&D

5. 設定画面にて学籍番号と共通パスワードを設定

### Ⅲ.備考
- ブラウザ右上のパズルピースアイコンから本拡張機能をピン止めするとアクセスが楽に。
- トラブルシューティングは[#tdu_lib_Ext](https://twitter.com/search?q=%23tdu_lib_Ext)でツイート。

### Ⅳ.参考資料
BearOffice/WebClass-Extension: ウェブクラス(WebClass)の利便性を向上できるChrome拡張機能． https://github.com/BearOffice/WebClass-Extension 

### Ⅴ.他大生向け
manifest.jsonやbackground.jsあたりのURL変えると他の大学でも使えるかも？

最終更新日:2022/07/22 21:30