---
layout: single
title: Publications
---

<input id="filter" placeholder="Filter by tag (e.g., visual-computing)">
<div id="pubs">
{% assign pubs = site.publications | sort: "date" | reverse %}
{% for p in pubs %}
  <div class="card" data-tags="{{ p.tags | join: ' ' }}">
    <a href="{{ p.url }}"><img src="{{ p.thumb | default:'/assets/images/placeholder.png' }}"></a>
    <h3><a href="{{ p.url }}">{{ p.title }}</a></h3>
    <p>{{ p.venue }} · {{ p.date | date: "%Y-%m-%d" }}</p>
    <p class="tags">{% for t in p.tags %}<span>#{{ t }}</span>{% endfor %}</p>
  </div>
{% endfor %}
</div>

<script>
const i = document.getElementById('filter');
i.addEventListener('input', e=>{
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll('#pubs .card').forEach(c=>{
    const t = c.dataset.tags.toLowerCase();
    c.style.display = (!q || t.indexOf(q) >= 0) ? '' : 'none';
  });
});
</script>