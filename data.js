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
    credits: [
      "出演：いいむろなおき／田中啓介／三浦求／谷啓吾／羽田兎桃／川島由衣／さゆ～る／ヒペ／近澤ゆうき／小松阿弥",
      "作・演出・振付：いいむろなおき",
      "主催：いいむろなおきマイムカンパニー　提携：扇町ミュージアムキューブ",
    ],
    image: "assets/notebook-front.jpg", imageWide: true,
    links: [
      { label: "公演詳細", url: "https://mime1166.com/stage/2026-11-13-15-notebook-omc/" },
      { label: "チラシ裏面（詳細）", url: "assets/notebook-back.jpg" },
    ],
  },
  {
    start: "2026-11-22", end: "2026-12-06",
    dates: ["2026-11-22", "2026-12-06"],
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
      { label: "第一夜 11/22 を予約", until: "2026-11-22", url: "https://docs.google.com/forms/d/e/1FAIpQLSeaBsCWq4ZJcIt2g7NsgGeKhA6G28L-Ob1NYWxB6y5GQi8_rg/viewform" },
      { label: "第二夜 12/6 を予約", url: "https://forms.gle/vunEJWA7fmFtAqMM7" },
    ],
    links: [
      { label: "会場アクセス（Googleマップ）", url: "https://www.google.com/maps/search/?api=1&query=%E3%81%93%E3%82%93%E3%81%A9%E3%81%86%E7%8F%88%E7%90%B2%20%E6%84%9B%E7%9F%A5%E7%9C%8C%E6%84%9B%E7%9F%A5%E9%83%A1%E6%9D%B1%E9%83%B7%E7%94%BA%E8%AB%B8%E8%BC%AA%E4%B8%AD%E6%9C%A8%E6%88%B8%E8%A5%BF87-1" },
      { label: "チラシ裏面（出演者紹介）", url: "assets/luna-back.jpg" },
      { label: "公式Instagram", url: "https://www.instagram.com/nad__luna" },
    ],
  },
  {
    start: "2026-12-18", end: "2026-12-20",
    dateLabel: "2026.12.18（金）〜20（日）",
    title: "HAPPY SNOW GLOBE 〜幸せのスノードーム〜",
    subtitle: "L.U.D.O. プロデュースのクリスマスショー",
    lead: "人間に忘れられたクリスマスのおもちゃたちが暮らす、不思議なおもちゃ箱の世界。そこで開かれる特別なクリスマスパーティーを、笑いと感動のストーリーと、ダンス・歌・マイム・バレエ・バトンなど多彩なパフォーマンスで描きます。ヒペは「謎のお猿」役で3日間すべてに出演します。",
    tags: ["クリスマス", "大阪・心斎橋"],
    schedule: [
      "12月18日（金）19:30開演（19:00開場）",
      "12月19日（土）13:30開演（13:00開場）／19:30開演（19:00開場）",
      "12月20日（日）13:30開演（13:00開場）／19:30開演（19:00開場）",
    ],
    venue: "Bar Theatre LUDO",
    address: "大阪市中央区東心斎橋1-18-14 ミドウ心斎橋ビル5F",
    access: "御堂筋線「心斎橋」駅 5番出口から徒歩2分",
    price: [
      "一般 6,000円",
      "VIP 12,500円（1ドリンク付き・各公演15名限定）",
      "VIP特典：一般より15分早く入場／出演キャスト全員との写真撮影／キャストとのアフタートーク",
    ],
    ticketStatus: "チケット発売中",
    note: "全席自由／撮影禁止／面会はVIPのみ／購入後のキャンセル・変更・払い戻し不可",
    credits: [
      "ヒペ：謎のお猿 役（12/18・19・20 全日出演）",
      "日によって出演キャストが異なります（各日のキャスト表をご覧ください）",
      "Produced by L.U.D.O.　Directed by YuiYui",
    ],
    image: "assets/hsg-flyer.jpg",
    links: [
      { label: "チケット購入（LUDOオンラインストア）", url: "https://theatreludo.square.site/" },
      { label: "公演詳細", url: "https://ludo.jp/2026/11/happy-snow-globe-2026/" },
      { label: "会場アクセス", url: "https://ludo.jp/access/" },
      { label: "キャスト表 12/18", url: "assets/hsg-cast-1218.jpg" },
      { label: "キャスト表 12/19", url: "assets/hsg-cast-1219.jpg" },
      { label: "キャスト表 12/20", url: "assets/hsg-cast-1220.jpg" },
      { label: "公演Instagram", url: "https://www.instagram.com/happy_snow_globe/" },
    ],
  },
  {
    id: "kenchiku",
    start: "2027-02-06", end: "2027-02-07",
    dateLabel: "2027.2.6（土）・7（日）",
    title: "建築と舞台芸術",
    subtitle: "ニュー遊び場の創造　いいむろなおきマイムカンパニー出演",
    lead: "建築家ユニットdot architectsの建築的思考をもとに設計された舞台装置を使い、複数の団体が創作・上演する企画です。いいむろなおきマイムカンパニーはAプログラムに出演します。",
    tags: ["マイム", "神戸"],
    schedule: [
      "2月6日（土）Aプログラム 14:00〜",
      "2月7日（日）Aプログラム 11:00〜",
      "開演45分前受付開始・30分前開場／自由席（当日受付順に入場整理券配布）／上演時間 各回100分予定",
    ],
    venue: "新開地アートひろば 2F・ホール",
    image: "assets/kenchiku-front.jpg", imageWide: true,
    address: "神戸市兵庫区新開地5丁目3番14号",
    price: [
      "大人 前売3,500円／当日4,000円",
      "プログラム通し券 前売6,000円／当日7,000円",
      "高校生以下 前売・当日とも1,000円（要証明書）",
      "各回定員120名／未就学児の入場不可",
    ],
    note: "実験的な取り組みのため、座席によってはパフォーマンスが見えにくい、または見えない場合があります。",
    credits: [
      "出演（Aプログラム）：いいむろなおきマイムカンパニー（いいむろなおき／田中啓介／谷啓吾／羽田兎桃／さゆ～る／ヒペ／近澤ゆうき）、男肉 du Soleil、REFUGIA",
      "舞台監督：綿中駿介　照明：幸野英哲（PAC West Inc.）　音響：和田真也　記録撮影：岩本順平",
    ],
    reserve: [
      { label: "ご予約はこちら（CoRichチケット！）", url: "https://s-ah.corich.co/s-ah-202702/common?elu=101" },
    ],
    links: [
      { label: "公演詳細", url: "https://mime1166.com/stage/2027-02-06-07-new-asobiba09/" },
      { label: "会場の公演ページ（新開地アートひろば）", url: "https://s-ah.jp/events/17881/" },
      { label: "チラシ裏面（ワークショップ・アクセス）", url: "assets/kenchiku-back.jpg" },
    ],
  },
  {
    start: "2027-02-11", end: "2027-02-11",
    dateLabel: "2027.2.11（木・祝）",
    title: "ミュージカルコンサート GREEN",
    subtitle: "劇団FOR GOOD 第10回公演（FOR GOOD 10th CONCERT）",
    lead: "歌とダンスのオムニバスライブ、ミュージカルコンサートシリーズ第4弾。テーマは「緑」。ヒペはゲストパフォーマーとして出演します。",
    tags: ["ミュージカル", "ゲスト出演"],
    schedule: [
      "16:00の回【SHIZ：シズ】",
      "19:00の回【OZ：オズ】",
      "2回公演（一部内容が異なります）／開場は開演45分前／上演時間 約80分（予定）",
    ],
    venue: "エンターテイメントダイニング BERONICA",
    access: "京阪・JR「京橋」駅 徒歩3分／地下鉄長堀鶴見緑地線「京橋」駅 徒歩5分",
    price: [
      "撮影可能VIP席（最前列12席）10,000円 ― 2026年12月1日（火）22:00発売",
      "一般指定席 6,500円／小学生以下 3,500円 ― 2026年12月2日（水）22:00発売",
      "全席指定／1ドリンク付き／当日券は＋500円",
    ],
    credits: [
      "MAIN MC：緑川晴菜",
      "SINGER：藤原麻友美／木村咲優実／半田絢子／Yunka",
      "GUEST PERFORMER：ヒペ／石水タヰキ",
      "TEAM 森の家：maco／真鈴／shuri／聖羅／ANNE",
      "ENSEMBLE：熊澤心／熊本有那／小西陽奈／塩川明日美／新居夏希／高橋芽生／中垣愛来／奈良井柚香／野口愛咲美／原口碧音／三好凛花／山下悠馬／吉井野乃佳／吉村芹南",
      "企画・演出：村上宏一郎",
      "※出演者は追加予定（11月15日確定予定）",
    ],
    links: [
      { label: "公演詳細・チケット", url: "https://forgoodmusical.com/eventmusical.html" },
      { label: "会場アクセス", url: "https://beronica.jp/about.php" },
    ],
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

/* ---------- ギャラリー（トップの「写真」欄） ----------
   src     … 大きい画像（一覧用の小さい画像は「-s」付きのファイルを自動で使う）
   cat     … stage（舞台）／ portrait（ポートレート）／ off（オフショット）
   size    … big（大きい正方形）／ wide（横長）／ tall（縦長）／ small（小さい正方形）
             並べたときに隙間が出ないよう、全体のマス数が4の倍数になるようにする
             （big=4マス、wide・tall=2マス、small=1マス）
   pos     … 一覧で切り抜くときの中心（"左右% 上下%"）。顔が切れる場合に調整
   caption … 任意（公演名・撮影クレジットなど） */
const GALLERY_CATS = [
  ["all", "すべて"],
  ["stage", "舞台"],
  ["portrait", "ポートレート"],
  ["off", "オフショット"],
];
const GALLERY = [
  { src: "assets/gallery/g14.jpg", cat: "portrait", size: "big", pos: "50% 35%", caption: "" },
  { src: "assets/gallery/g04.jpg", cat: "portrait", size: "tall", pos: "50% 50%", caption: "" },
  { src: "assets/gallery/g13.jpg", cat: "portrait", size: "tall", pos: "62% 40%", caption: "" },
  { src: "assets/gallery/g01.jpg", cat: "stage", size: "wide", pos: "50% 30%", caption: "" },
  { src: "assets/gallery/g15.jpg", cat: "portrait", size: "wide", pos: "40% 50%", caption: "" },
  { src: "assets/gallery/g10.jpg", cat: "portrait", size: "big", pos: "55% 30%", caption: "" },
  { src: "assets/gallery/g18.jpg", cat: "stage", size: "wide", pos: "48% 45%", caption: "" },
  { src: "assets/gallery/g08.jpg", cat: "stage", size: "wide", pos: "50% 50%", caption: "BATTLE OF THE YEAR ／ Event: ADHIP ／ Photo: Takeshi Murakami" },
  { src: "assets/gallery/g02.jpg", cat: "portrait", size: "wide", pos: "50% 35%", caption: "" },
  { src: "assets/gallery/g05.jpg", cat: "stage", size: "tall", pos: "68% 70%", caption: "" },
  { src: "assets/gallery/g07.jpg", cat: "stage", size: "small", pos: "55% 40%", caption: "" },
  { src: "assets/gallery/g12.jpg", cat: "off", size: "wide", pos: "60% 40%", caption: "" },
  { src: "assets/gallery/g03.jpg", cat: "stage", size: "small", pos: "58% 35%", caption: "" },
  { src: "assets/gallery/g06.jpg", cat: "stage", size: "wide", pos: "50% 40%", caption: "" },
  { src: "assets/gallery/g16.jpg", cat: "portrait", size: "big", pos: "52% 50%", caption: "" },
  { src: "assets/gallery/g09.jpg", cat: "stage", size: "wide", pos: "50% 55%", caption: "BATTLE OF THE YEAR ／ Event: ADHIP ／ Photo: Takeshi Murakami" },
  { src: "assets/gallery/g17.jpg", cat: "off", size: "wide", pos: "55% 40%", caption: "" },
  { src: "assets/gallery/g11.jpg", cat: "off", size: "wide", pos: "62% 50%", caption: "" },
];
