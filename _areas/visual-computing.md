---
title: Visual Computing
layout: single
thumb: /assets/images/areas/visual-computing.jpg
---

간단 설명(렌더링, 애니메이션, 캡처, 스타일라이제이션…).

### Featured Works
{% assign vc = site.publications | where_exp: "p", "p.tags contains 'visual-computing'" | sort: "date" | reverse | slice: 0, 6 %}
<ul>
{% for p in vc %}<li><a href="{{ p.url }}">{{ p.title }}</a> — {{ p.venue }} ({{ p.date | date: "%Y" }})</li>{% endfor %}
</ul>