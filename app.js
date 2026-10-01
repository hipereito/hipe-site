/* 共通描画スクリプト（通常は編集不要。内容は data.js を編集） */
(function () {
  const ICONS = {
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.4" cy="6.6" r="1.3"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.6 2h-3.4v13.4a3 3 0 1 1-2.1-2.9V9a6.4 6.4 0 1 0 5.5 6.4V8.6a8 8 0 0 0 4.6 1.5V6.7A4.6 4.6 0 0 1 16.6 2Z"/></svg>',
    link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.6 13.4a1 1 0 0 1 0-1.4l3.5-3.5a1 1 0 1 1 1.4 1.4L12 13.4a1 1 0 0 1-1.4 0ZM8.5 19a4.5 4.5 0 0 1-3.2-7.7l2.1-2.1a1 1 0 0 1 1.4 1.4l-2.1 2.1a2.5 2.5 0 0 0 3.5 3.5l2.1-2.1a1 1 0 1 1 1.4 1.4l-2.1 2.1A4.5 4.5 0 0 1 8.5 19Zm7.4-6.8a1 1 0 0 1-.7-1.7l2.1-2.1a2.5 2.5 0 0 0-3.5-3.5L11.7 7a1 1 0 1 1-1.4-1.4l2.1-2.1a4.5 4.5 0 0 1 6.4 6.4l-2.1 2.1a1 1 0 0 1-.8.2Z"/></svg>',
  };

  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const d = (s) => { const [y, m, dd] = s.split("-").map(Number); return new Date(y, m - 1, dd); };

  const all = (typeof SHOWS !== "undefined" ? SHOWS : []).slice();
  const upcoming = all.filter((s) => d(s.end || s.start) >= today).sort((a, b) => d(a.start) - d(b.start));
  const past = all.filter((s) => d(s.end || s.start) < today && !s.tba).sort((a, b) => d(b.start) - d(a.start));

  /* ---------- 共通ヘッダー・フッター ---------- */
  const page = document.body.dataset.page;
  const navItems = [
    ["index.html", "トップ", "home"],
    ["schedule.html", "出演予定", "schedule"],
    ["history.html", "過去の出演歴", "history"],
    ["links.html", "SNS", "links"],
  ];
  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `<div class="inner">
      <a class="logo" href="index.html">ヒペ<small>HIPE REITO</small></a>
      <nav class="nav" aria-label="メインメニュー">${navItems
        .map(([href, label, key]) => `<a href="${href}"${key === page ? ' aria-current="page"' : ""}>${label}</a>`)
        .join("")}</nav></div>`;
  }
  const snsRow = () =>
    `<div class="sns-row">${SOCIALS.map(
      (s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.name)} ${esc(s.handle)}">${ICONS[s.icon] || ICONS.link}</a>`
    ).join("")}</div>`;
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `<div class="contact">
        <p>出演依頼・お問い合わせは X / Instagram の DM からお願いいたします。</p>${snsRow()}
      </div><footer>© HIPE REITO</footer>`;
  }

  /* ---------- 公演カード ---------- */
  function showCard(s, i) {
    if (s.tba) {
      return `<article class="show tba"><div class="body">
        <p class="date">${esc(s.dateLabel)}</p>
        <span class="area">${esc(s.area || "")}</span>
        <p>情報公開までお待ちください</p></div></article>`;
    }
    const isNow = d(s.start) <= today && d(s.end || s.start) >= today;
    const badge = isNow ? '<span class="status">公演中</span>' : i === 0 ? '<span class="status next">NEXT</span>' : "";
    const row = (label, val) => (val && (!Array.isArray(val) || val.length) ? `<dt>${label}</dt><dd>${[].concat(val).map((v) => `<span>${esc(v)}</span>`).join("")}</dd>` : "");
    const venue = s.venue ? `<dt>会場</dt><dd><span>${esc(s.venue)}</span>${s.address ? `<span class="muted">${esc(s.address)}</span>` : ""}${s.access ? `<span class="muted">${esc(s.access)}</span>` : ""}</dd>` : "";
    const btns = [
      ...(s.reserve || []).map((l) => `<a class="btn primary" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`),
      ...(s.links || []).map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`),
    ].join("");
    return `<article class="show${s.image ? " has-image" : ""}">
      <div class="body">
        <p class="date">${esc(s.dateLabel)}${badge}</p>
        <h3>${esc(s.title)}</h3>
        ${s.subtitle ? `<p class="sub">${esc(s.subtitle)}</p>` : ""}
        ${s.lead ? `<p class="lead">${esc(s.lead)}</p>` : ""}
        ${s.tags ? `<ul class="tags">${s.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
        <dl class="info">${row("日時", s.schedule)}${venue}${row("料金", s.price)}${row("備考", s.note)}</dl>
        ${s.credits ? `<div class="credits">${s.credits.map((c) => `<p>${esc(c)}</p>`).join("")}</div>` : ""}
        ${btns ? `<div class="actions">${btns}</div>` : ""}
      </div>
      ${s.image ? `<a class="visual" href="${esc(s.image)}" target="_blank"><img src="${esc(s.image)}" alt="${esc(s.title)} チラシ" loading="lazy"></a>` : ""}
    </article>`;
  }

  const upEl = document.getElementById("upcoming");
  if (upEl) {
    const limit = Number(upEl.dataset.limit || 0);
    let list = upcoming;
    if (limit) list = upcoming.filter((s) => !s.tba).slice(0, limit);
    upEl.innerHTML = list.length ? list.map(showCard).join("") : '<p class="empty">現在公開中の出演予定はありません。</p>';
  }

  /* ---------- 過去の出演歴 ---------- */
  const histEl = document.getElementById("history");
  if (histEl) {
    const limit = Number(histEl.dataset.limit || 0);
    const list = limit ? past.slice(0, limit) : past;
    const byYear = {};
    list.forEach((s) => (byYear[s.start.slice(0, 4)] ||= []).push(s));
    histEl.innerHTML = Object.keys(byYear)
      .sort((a, b) => b - a)
      .map((y) => `<section class="year"><h2>${y}</h2><ol class="timeline">${byYear[y]
        .map((s) => `<li><div class="d">${esc(s.dateLabel.replace(/^\d{4}\./, ""))}</div><div>
          <h3>${esc(s.title)}</h3>
          ${s.subtitle ? `<p class="sub">${esc(s.subtitle)}</p>` : ""}
          ${s.venue ? `<p class="meta"><b>会場</b>${esc(s.venue)}</p>` : ""}
          ${s.note ? `<p class="note">${esc(s.note)}</p>` : ""}
          ${(s.links || []).map((l) => `<a class="inline" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}
        </div></li>`).join("")}</ol></section>`)
      .join("") || '<p class="empty">出演歴はまだありません。</p>';
    const cnt = document.getElementById("history-count");
    if (cnt) cnt.textContent = past.length;
  }

  /* ---------- SNSリンクページ ---------- */
  const linkEl = document.getElementById("link-list");
  if (linkEl) {
    const next = upcoming.find((s) => !s.tba);
    const item = (href, ic, title, sub, cls = "", ext = true) =>
      `<li><a class="${cls}" href="${esc(href)}"${ext ? ' target="_blank" rel="noopener"' : ""}><span class="ic${ic.startsWith("<") ? "" : " text"}">${ic}</span><span class="t">${title}<small>${sub}</small></span><span class="arrow">→</span></a></li>`;
    let html = "";
    if (next) html += item("schedule.html", "次", `次回出演：${esc(next.title)}`, esc(next.dateLabel), "feature", false);
    html += SOCIALS.map((s) => item(s.url, ICONS[s.icon] || ICONS.link, `${esc(s.name)}　${esc(s.handle)}`, esc(s.note || ""))).join("");
    html += item("schedule.html", "予", "出演予定", "これからのステージ", "", false);
    html += item("history.html", "歴", "過去の出演歴", "これまでの舞台", "", false);
    linkEl.innerHTML = html;
  }
})();
