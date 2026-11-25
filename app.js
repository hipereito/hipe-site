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
  // id がない公演には日付から自動で付ける（一覧からカードへ飛ぶため）
  all.forEach((s) => { if (!s.id && s.start) s.id = "show-" + s.start; });
  // 飛び飛びの公演日（dates）がある場合は、今日以降で一番近い日を「次の公演日」とする
  const nextDate = (s) => (s.dates || []).map(d).find((x) => x >= today) || d(s.start);
  const playingToday = (s) => s.dates
    ? s.dates.some((x) => d(x).getTime() === today.getTime())
    : d(s.start) <= today && d(s.end || s.start) >= today;
  const openReserves = (s) => (s.reserve || []).filter((l) => !(l.until && d(l.until) < today));

  /* ---------- 共通ヘッダー・フッター ---------- */
  const page = document.body.dataset.page;
  const navItems = [
    ["index.html", "トップ", "home"],
    ["schedule.html", "出演予定", "schedule"],
    ["index.html#photos", "写真", "photos"],
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
    const isNow = playingToday(s);
    const badge = isNow ? '<span class="status">公演中</span>' : i === 0 ? '<span class="status next">NEXT</span>' : "";
    const row = (label, val) => (val && (!Array.isArray(val) || val.length) ? `<dt>${label}</dt><dd>${[].concat(val).map((v) => `<span>${esc(v)}</span>`).join("")}</dd>` : "");
    const venue = s.venue ? `<dt>会場</dt><dd><span>${esc(s.venue)}</span>${s.address ? `<span class="muted">${esc(s.address)}</span>` : ""}${s.access ? `<span class="muted">${esc(s.access)}</span>` : ""}</dd>` : "";
    const btns = [
      ...(s.reserve || []).map((l) =>
        l.until && d(l.until) < today
          ? `<span class="btn primary disabled" aria-disabled="true">${esc(l.label)}（受付終了）</span>`
          : `<a class="btn primary" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`),
      ...(s.links || []).map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`),
    ].join("");
    return `<article${s.id ? ` id="${esc(s.id)}"` : ""} class="show${s.image ? " has-image" : ""}${s.imageWide ? " wide" : ""}">
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

  /* ---------- 出演予定の一覧（ひと目で見る用） ---------- */
  const glanceEl = document.getElementById("glance");
  if (glanceEl) {
    // 同じページに全公演のカードがあれば、ページ内で移動する（トップ・出演予定ページ）
    const upHere = document.getElementById("upcoming");
    const onSchedulePage = !!upHere && !Number(upHere.dataset.limit || 0);
    const W = ["日", "月", "火", "水", "木", "金", "土"];
    const rows = upcoming.filter((s) => !s.tba).map((s) => {
      const st = nextDate(s);
      const isNow = playingToday(s);
      // 日付欄：複数日は日程をまとめて表示（飛び飛び＝「・」、連続＝「〜」）
      const md = (x) => `${x.getMonth() + 1}.${String(x.getDate()).padStart(2, "0")}`;
      let dMain, dWd, multi = false;
      if (s.dates && s.dates.length > 1) {
        const ds = s.dates.map(d);
        dMain = ds.map((x) => `<span class="${x < today ? "past" : ""}">${md(x)}</span>`).join("<i>・</i>");
        dWd = ds.map((x) => W[x.getDay()]).join("・");
        multi = true;
      } else if (s.end && s.end !== s.start) {
        const a = d(s.start), b = d(s.end);
        dMain = `${md(a)}<i>〜</i>${a.getMonth() === b.getMonth() ? b.getDate() : md(b)}`;
        dWd = `${W[a.getDay()]}〜${W[b.getDay()]}`;
        multi = true;
      } else {
        dMain = md(st);
        dWd = W[st.getDay()];
      }
      const open = openReserves(s);
      const chip = isNow
        ? '<span class="chip now">公演中</span>'
        : s.ticketStatus
        ? `<span class="chip${open.length ? " on" : ""}">${esc(s.ticketStatus)}</span>`
        : open.length
        ? '<span class="chip on">予約受付中</span>'
        : "";
      const href = (onSchedulePage ? "" : "schedule.html") + "#" + encodeURIComponent(s.id);
      const where = [s.venue, s.glanceArea].filter(Boolean).map(esc).join("　");
      const cta = open.length
        ? `<a class="g-cta" href="${esc(open[0].url)}" target="_blank" rel="noopener">予約する</a>`
        : "";
      return `<li>
        <a class="g-main" href="${href}">
          <span class="g-date${multi ? " multi" : ""}"><small>${d(s.start).getFullYear()}</small><b>${dMain}</b><small>${dWd}</small></span>
          <span class="g-body"><span class="g-title">${esc(s.title)}</span>${where ? `<span class="g-meta">${where}</span>` : ""}</span>
          <span class="g-side">${chip}<span class="g-arrow">詳細 →</span></span>
        </a>${cta}
      </li>`;
    });
    glanceEl.innerHTML = rows.length ? `<ol class="glance">${rows.join("")}</ol>` : '<p class="empty">現在公開中の出演予定はありません。</p>';
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

  /* ---------- ギャラリー（大小のタイル・絞り込み・タップで拡大） ---------- */
  const galEl = document.getElementById("gallery");
  const G = typeof GALLERY !== "undefined" ? GALLERY : [];
  if (galEl && G.length) {
    const thumb = (src) => src.replace(/\.jpg$/, "-s.jpg");
    const cats = (typeof GALLERY_CATS !== "undefined" ? GALLERY_CATS : []).filter(([k]) => k === "all" || G.some((g) => g.cat === k));
    const tabs = cats.length > 2
      ? `<div class="g-tabs" role="tablist">${cats.map(([k, label], n) =>
          `<button type="button" role="tab" data-cat="${k}" aria-selected="${n === 0}">${label}</button>`).join("")}</div>`
      : "";
    galEl.innerHTML = tabs + `<div class="g-grid">${G.map((g, i) =>
      `<a class="g-item ${esc(g.size || "small")}" href="${esc(g.src)}" data-i="${i}" data-cat="${esc(g.cat || "")}">
        <img src="${esc(thumb(g.src))}" alt="${esc(g.caption || "ヒペ 写真")}" loading="lazy" style="object-position:${esc(g.pos || "50% 50%")}">
        ${g.caption ? `<span class="g-cap">${esc(g.caption)}</span>` : ""}
      </a>`).join("")}</div>`;
    const items = [...galEl.querySelectorAll(".g-item")];
    let visible = G.map((_, i) => i);
    galEl.querySelectorAll(".g-tabs button").forEach((b) => b.addEventListener("click", () => {
      const c = b.dataset.cat;
      galEl.querySelectorAll(".g-tabs button").forEach((x) => x.setAttribute("aria-selected", x === b));
      galEl.classList.toggle("is-filtered", c !== "all");
      visible = [];
      items.forEach((el, i) => { const on = c === "all" || el.dataset.cat === c; el.hidden = !on; if (on) visible.push(i); });
    }));

    const box = document.createElement("div");
    box.className = "lightbox"; box.hidden = true;
    box.innerHTML = `<button class="lb-close" aria-label="閉じる">×</button><button class="lb-prev" aria-label="前の写真">‹</button><figure><img alt=""><figcaption></figcaption></figure><button class="lb-next" aria-label="次の写真">›</button>`;
    document.body.appendChild(box);
    const img = box.querySelector("img"), cap = box.querySelector("figcaption");
    let pos = 0;
    const show = (p) => {
      pos = (p + visible.length) % visible.length; const g = G[visible[pos]];
      img.src = g.src; img.alt = g.caption || "ヒペ 写真";
      cap.textContent = (g.caption ? g.caption + "　" : "") + `${pos + 1} / ${visible.length}`;
    };
    const open = (i) => { show(Math.max(0, visible.indexOf(i))); box.hidden = false; document.body.style.overflow = "hidden"; };
    const close = () => { box.hidden = true; document.body.style.overflow = ""; };
    galEl.addEventListener("click", (e) => { const a = e.target.closest(".g-item"); if (!a) return; e.preventDefault(); open(Number(a.dataset.i)); });
    box.querySelector(".lb-prev").onclick = (e) => { e.stopPropagation(); show(pos - 1); };
    box.querySelector(".lb-next").onclick = (e) => { e.stopPropagation(); show(pos + 1); };
    box.addEventListener("click", (e) => { if (e.target === box || e.target.classList.contains("lb-close")) close(); });
    document.addEventListener("keydown", (e) => { if (box.hidden) return; if (e.key === "Escape") close(); if (e.key === "ArrowLeft") show(pos - 1); if (e.key === "ArrowRight") show(pos + 1); });
    let sx = null;
    box.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", (e) => { if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) show(pos + (dx < 0 ? 1 : -1)); sx = null; });
  }

  /* ---------- #id 付きリンク（例：schedule.html#kenchiku）へスクロール ----------
     カードはJSで描画するため、描画後にハッシュの位置へ移動する */
  if (location.hash.length > 1) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) {
      const go = () => target.scrollIntoView({ behavior: "instant" });
      go();
      window.addEventListener("load", go); // 画像の読み込みでずれるのを補正
    }
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
