# ヒペ 出演情報サイト（静的サイト）

## ページ構成
| ファイル | 内容 |
|---|---|
| index.html | トップ（ヒーロー写真／次の出演／プロフィール／最近の出演） |
| schedule.html | 出演予定 |
| history.html | 過去の出演歴（年ごと） |
| links.html | SNS・リンク集（Instagramプロフィール欄などに貼る用） |

## 更新方法（data.js だけ編集）
- 公演を追加：`SHOWS` に `{ ... }` を1ブロック追加
- `end`（最終日）を過ぎると **自動で「過去の出演歴」へ移動**（手作業での移動は不要）
- 未発表の公演は `tba: true`
- SNSを追加：`SOCIALS` のコメントアウト例（YouTube / TikTok）を外して書き換え

## 画像
- `assets/hero.jpg` は現行Wixサイトの画面から取り込んだ仮の画像です。**元の写真データに差し替える**と画質が上がります（正方形・1200px以上推奨）。
- `assets/luna-flyer.jpg` は眠りの森のルナのチラシ画像。

## 公開方法（おすすめ順）
1. **GitHub Pages**（無料）：リポジトリにこのフォルダを置く → Settings › Pages で公開 → 独自ドメイン hipereito.com を設定。更新は data.js を GitHub 上で編集するだけ。
2. **Cloudflare Pages**（無料）：GitHubと連携して自動公開。表示が速い。
3. **ロリポップ！**（契約済みのサーバー）：FTPでアップロードするだけ。追加費用なし。

※ hipereito.com をWixで取得している場合、Wixのドメイン管理でDNS（Aレコード／CNAME）を公開先に向け直します。Wixのプレミアムプランは移行が終わってから解約してください。
