# ヒペ 出演情報サイト — 作業メモ（Claude Code 用）

## 概要
- パフォーマー「ヒペ（ヒペレイト / HIPE REITO）」の出演情報サイト。現行は hipereito.com（Wix）。そこからの移行用に作った静的サイト。
- ビルド不要の素の HTML / CSS / JS。`index.html` をブラウザで直接開けば確認できる（file:// で動作）。

## 構成
- `index.html` トップ / `schedule.html` 出演予定 / `history.html` 過去の出演歴 / `links.html` SNSリンク集
- `data.js` … **公演データとSNSはすべてここ**（`SHOWS`, `SOCIALS`）。通常の更新はこのファイルだけ。
- `app.js` … 共通ヘッダー・フッターと各リストの描画。`end` 日付が今日より前の公演は自動で過去の出演歴へ移動。`tba: true` は「情報公開までお待ちください」表示（過去には出ない）。
- `style.css` … デザイン。黒地＋白（--ink）＋隈取の朱（--red）。フォント：Shippori Mincho B1 / Zen Kaku Gothic New / Cormorant Garamond（Google Fonts）。
- `assets/hero.jpg` … 現行Wixサイトからの画面キャプチャ（仮）。元写真に差し替え予定。`assets/luna-flyer.jpg` … 眠りの森のルナのチラシ。

## 公演データの書き方（data.js）
```js
{
  start: "2026-11-22", end: "2026-12-06",   // 必須（YYYY-MM-DD）
  dateLabel: "2026.11.22（日）・12.06（日）", // 表示用
  title: "", subtitle: "", lead: "", tags: [],
  schedule: [], venue: "", address: "", access: "", price: [], note: "",
  credits: [], image: "assets/xxx.jpg",
  reserve: [{label, url}],  // 赤いボタン
  links:   [{label, url}],  // 枠線ボタン
  tba: true, area: "大阪",  // 未発表の場合
}
```

## 方針・注意
- 公開判断は本人が行う。デプロイ・DNS変更は指示があるまで実行しない。
- 公開先候補：GitHub Pages（第一候補）/ Cloudflare Pages / ロリポップ!（契約済み）。
- 問い合わせは X（@PricelessHipe）・Instagram（@hipereito）の DM。
- 出演者情報・役名などの未公開情報は勝手に載せない。
