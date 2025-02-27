# Google Search Results Shortcuts MV3 Version

Google検索結果ページにキーボードショートカットを追加するブラウザ拡張機能です。

## 謝辞

このプロジェクトは [miyaoka/crx-google-search-results-shortcuts](https://github.com/miyaoka/crx-google-search-results-shortcuts) をベースに、Manifest V3対応とWXT/React/TypeScriptへの移行を行ったものになります。

## 機能

Google検索結果ページで以下のキーボードショートカットが使用できます：

- **J/K (下/上)**: 検索結果のリンク間を移動
- **H/L (左/右)**: ページ間を移動
- **/**: 検索入力フィールドにフォーカス
- **G + A/I/V/M/N**: 検索タイプの切り替え（全て/画像/動画/マップ/ニュース）
- **G + Shift+V**: 完全一致検索

## 技術スタック

- [WXT](https://wxt.dev/): ブラウザ拡張機能開発フレームワーク
- TypeScript: 型安全なJavaScript
- React: UIコンポーネント（ポップアップ用）

## 開発

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発モードで実行
npm run dev

# ビルド
npm run build

# パッケージ化
npm run zip
```

### インストール方法

1. Chromeで `chrome://extensions` を開く
2. 「デベロッパーモード」を有効にする
3. 「パッケージ化されていない拡張機能を読み込む」をクリックし、`.output/chrome-mv3` ディレクトリを選択

または、パッケージ化されたZIPファイル（`.output/google-search-results-shortcuts-x.x.x-chrome.zip`）をChromeウェブストアにアップロードすることもできます。

## ライセンス

MIT
