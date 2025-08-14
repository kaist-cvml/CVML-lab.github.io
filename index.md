---
layout: single
title: 우리 연구실
header:
  overlay_image: /assets/images/hero.jpg
  caption: "3D Vision • Dense Correspondence • Geodesic-aware Learning"
---

> We strive to expand the designer’s toolbox… (연구 미션 한 줄)

## Latest Publications
{% assign latest = site.publications | sort: "date" | reverse | slice: 0, 6 %}
<div class="pub-grid">
  {% for p in latest %}
    <div class="card">
      <a href="{{ p.url }}"><img src="{{ p.thumb | default: '/assets/images/placeholder.png' }}" alt=""></a>
      <h3><a href="{{ p.url }}">{{ p.title }}</a></h3>
      <p>{{ p.venue }} · {{ p.date | date: "%Y-%m-%d" }}</p>
      <p class="tags">{% for t in p.tags %}<span>#{{ t }}</span>{% endfor %}</p>
    </div>
  {% endfor %}
</div>
