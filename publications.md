---
layout: single
title: Publications
permalink: /publications/
---

<input id="filter" class="mono" placeholder="Filter by tag or venue… (e.g., visual, siggraph)" style="width:100%;padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.03);margin:8px 0 16px;color:#e8ebf4">

<div class="grid" id="pubs">
{% assign pubs = site.publications | sort:"date" | reverse %}
{% for p in pubs %}
  <a class="card" href="{{ p.url }}" data-tags="{{ p.tags | join:' ' | downcase }} {{ p.venue | downcase }}">
    <img src="{{ p.thumb | default:'/assets/images/placeholder.png' }}">
    <div class="pad">
      <div class="kicker">{{ p.venue }}</div>
      <h3>{{ p.title }}</h3>
      <div class="meta">{{ p.date | date:"%Y-%m-%d" }}</div>
      <div style="margin-top:6px">{% for t in p.tags limit:4 %}<span class="tag">#{{ t }}</span>{% endfor %}</div>
    </div>
  </a>
{% endfor %}
</div>

<script>
document.getElementById('filter').addEventListener('input', e=>{
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll('#pubs .card').forEach(card=>{
    const hay = card.dataset.tags || "";
    card.style.display = (!q || hay.indexOf(q) >= 0) ? "" : "none";
  });
});
</script>
