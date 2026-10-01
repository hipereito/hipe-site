/* =========================================================
   出演情報データ ― 更新はこのファイルだけでOK
   ---------------------------------------------------------
   ・公演を1件追加 = { ... } を1ブロック追加
   ・end（最終日）を過ぎると自動で「過去の出演歴」へ移動
   ・tba: true にすると「情報公開までお待ちください」表示
   ・使わない項目は消してOK（空欄なら表示されません）
   ========================================================= */

const SHOWS = [
  // ---------- 出演予定 ----------
  {
    start: "2026-10-24", end: "2026-10-24",
    dateLabel: "2026.10.24（土）",
    area: "大阪",
    tba: true,
  },
  {
    start: "2026-11-13", end: "2026-11-15",
    dateLabel: "2026.11.13（金）〜15（日）",
    title: "notebook",
    subtitle: "いいむろなおきマイムカンパニー2026 新作公演",
    lead: "マイム俳優いいむろなおきが28年間書き溜めた「創作ノート」から生まれた、カンパニーのベストアルバム的な作品です。",
    tags: ["マイム"],
    schedule: [
      "13日（金）19:30",
      "14日（土）14:00 ／ 18:00",
      "15日（日）14:00",
    ],
    venue: "扇町ミュージアムキューブ CUBE01",
    address: "大阪市北区南扇町6-26",
    access: "大阪メトロ堺筋線「扇町」駅5番出口 徒歩3分／JR環状線「天満」駅 徒歩7分",
    price: [
      "一般 前売4,000円（整理番号付）／当日4,500円",
      "U18 2,000円（前売・当日共通／要年齢証明）",
      "全自由席・整理番号順入場／未就学児入場不可",
    ],
    reserve: [
      { label: "ご予約（当日精算）", url: "https://shibai-engine.net/prism/webform.php?o=u0i8tvfq" },
    ],
    image: "assets/notebook-front.jpg", imageWide: true,
    links: [
      { label: "公演詳細", url: "https://mime1166.com/stage/2026-11-13-15-notebook-omc/" },
      { label: "会場アクセス（Googleマップ）", url: "https://www.google.com/maps/search/?api=1&query=%E6%89%87%E7%94%BA%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%82%A2%E3%83%A0%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%96%20%E5%A4%A7%E9%98%AA%E5%B8%82%E5%8C%97%E5%8C%BA%E5%8D%97%E6%89%87%E7%94%BA6-26" },
      { label: "チラシ裏面（詳細）", url: "assets/notebook-back.jpg" },
    ],
  },
  {
    start: "2026-11-22", end: "2026-12-06",
    dateLabel: "2026.11.22（日）・12.06（日）",
    title: "眠りの森のルナ",
    subtitle: "NAD企画公演　クラシック音楽 × エアリアル × パントマイム × 演劇",
    lead: "音から、物語がはじまる。クラシック音楽から生まれる、まだ見たことのない物語の世界へ。ヒペはパントマイム・ダンスで出演します。",
    tags: ["パントマイム", "ダンス", "名古屋"],
    image: "assets/luna-flyer.jpg",
    schedule: [
      "第一夜　2026年11月22日（日）18:00開演（17:00開場）",
      "第二夜　2026年12月6日（日）18:00開演（17:00開場）",
    ],
    venue: "こんどう珈琲 テラス",
    address: "愛知県愛知郡東郷町諸輪中木戸西87-1",
    price: [
      "一般 3,800円／小学生以下 2,500円",
      "※ケーキセット（1,200円分）の料金込み",
    ],
    credits: [
      "出演：DoNcHY.（エアリアル・演出）／ヒペレイト（パントマイム・ダンス）／磯村晶子（ピアノ・プロデュース）／森川ひまり（語り部）",
      "脚本：塩田泰造　作曲：中安一秀　衣装：岡 世詩子（SOULcouture）",
      "MUSIC：ベートーヴェン「月光ソナタ」、ドビュッシー「月の光」、サン＝サーンス「動物の謝肉祭」、ジョプリン「エンターテイナー」ほか",
    ],
    reserve: [
      { label: "第一夜 11/22 を予約", url: "https://docs.google.com/forms/d/e/1FAIpQLSeaBsCWq4ZJcIt2g7NsgGeKhA6G28L-Ob1NYWxB6y5GQi8_rg/viewform" },
      { label: "第二夜 12/6 を予約", url: "https://forms.gle/vunEJWA7fmFtAqMM7" },
    ],
    links: [
      { label: "会場アクセス（Googleマップ）", url: "https://www.google.com/maps/search/?api=1&query=%E3%81%93%E3%82%93%E3%81%A9%E3%81%86%E7%8F%88%E7%90%B2%20%E6%84%9B%E7%9F%A5%E7%9C%8C%E6%84%9B%E7%9F%A5%E9%83%A1%E6%9D%B1%E9%83%B7%E7%94%BA%E8%AB%B8%E8%BC%AA%E4%B8%AD%E6%9C%A8%E6%88%B8%E8%A5%BF87-1" },
      { label: "公式Instagram", url: "https://www.instagram.com/nad__luna" },
    ],
  },
  {
    start: "2026-12-18", end: "2026-12-20",
    dateLabel: "2026.12.18（金）〜20（日）",
    area: "大阪",
    tba: true,
  },

  // ---------- 過去の出演歴 ----------
  {
    start: "2026-08-08", end: "2026-08-09",
    dateLabel: "2026.8.8（土）・9（日）",
    title: "Once Upon a Time",
    subtitle: "劇団FOR GOOD ミュージカル公演",
    venue: "世界館劇場（弁天町）",
    note: "ヒペは全公演出演。8/8（土）18:00 Aキャスト／8/9（日）13:00・17:00 Bキャスト",
    links: [{ label: "公演詳細", url: "https://forgoodmusical.com/eventmusical.html" }],
  },
  {
    start: "2026-07-25", end: "2026-07-25",
    dateLabel: "2026.7.25（土）15:00〜17:00",
    title: "MFES 2026",
    venue: "阿倍野区民センター 大ホール",
    note: "Guest Show Case「Priceless -血を分け合った価値がある。-」に出演",
  },
  {
    start: "2026-07-18", end: "2026-07-19",
    dateLabel: "2026.7.18（土）・19（日）",
    title: "TIME TRAVEL",
    subtitle: "L.U.D.O. presents Theme Theatre vol.1",
    note: "一つのテーマ、同じ条件、三つのビジョン。3作品一挙上演。",
  },
  {
    start: "2026-05-04", end: "2026-05-04",
    dateLabel: "2026.5.4（月）",
    title: "中之島春の文化祭",
    venue: "ABCホール",
    note: "Cブロック いいむろなおきマイムカンパニーで出演",
  },
  {
    start: "2025-12-30", end: "2025-12-30",
    dateLabel: "2025.12.30（火）",
    title: "THE SHOW",
    subtitle: "ADHIP主催ダンスイベント",
    venue: "BIGCAT",
    note: "ヒペはチーム「陰ト陽」で出演",
    links: [{ label: "イベント詳細", url: "https://www.dancedelight.net/event/545/" }],
  },
  {
    start: "2025-12-23", end: "2025-12-25",
    dateLabel: "2025.12.23（火）〜25（木）",
    title: "Happy Snow Globe 〜幸せのスノードーム〜",
    subtitle: "ダンスと演劇の公演",
    venue: "Bar Theatre LUDO",
    note: "ヒペの出演は23日・24日",
    links: [{ label: "公演Instagram", url: "https://www.instagram.com/happy_snow_globe/" }],
  },
  {
    start: "2025-12-22", end: "2025-12-22",
    dateLabel: "2025.12.22（月）",
    title: "大阪音楽大学物語",
    subtitle: "第5回 NEXT DESIGN 演劇",
    venue: "ザ・カレッジ・オペラハウス（大阪音楽大学）",
    links: [{ label: "公演詳細", url: "https://www.daion.ac.jp/concert-news/180314/" }],
  },
  {
    start: "2025-12-19", end: "2025-12-21",
    dateLabel: "2025.12.19（金）〜21（日）",
    title: "走れ！走れ！！走れ！！！",
    subtitle: "いいむろなおきマイムカンパニー 演劇",
    venue: "としま区民センター（8F 多目的ホール）",
    links: [{ label: "公演詳細", url: "https://www.toshima-mirai.or.jp/tabid216.html?pdid1=3388" }],
  },
];

/* ---------- SNS・リンク ---------- */
const SOCIALS = [
  { name: "X", handle: "@PricelessHipe", url: "https://x.com/PricelessHipe", icon: "x", note: "出演告知・日々の発信" },
  { name: "Instagram", handle: "@hipereito", url: "https://www.instagram.com/hipereito/", icon: "instagram", note: "写真・舞台の記録" },
  // 追加例：
  // { name: "YouTube", handle: "@xxxx", url: "https://www.youtube.com/@xxxx", icon: "youtube", note: "パフォーマンス映像" },
  // { name: "TikTok", handle: "@xxxx", url: "https://www.tiktok.com/@xxxx", icon: "tiktok", note: "" },
];
