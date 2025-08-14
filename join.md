---
layout: single
title: ""
---

{% include hero.html %}

## <span class="section-title">Research Areas</span>
<div class="grid">
{% for a in site.data.areas %}
  <a class="card" href="{{ a.url }}">
    <img src="{{ a.image }}" alt="">
    <div class="pad">
      <h3 style="text-align:center">{{ a.title }}</h3>
    </div>
  </a>
{% endfor %}
</div>

## <span class="section-title">Labs & People</span>
<div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">
  <div class="card">
    <img src="/assets/labs/zurich-map.jpg" alt="">
    <div class="pad"><h3>Zurich, Switzerland</h3></div>
  </div>
  <div class="card">
    <img src="/assets/labs/zurich-studio.jpg" alt="">
    <div class="pad"><h3>About Us</h3></div>
  </div>
  {% assign ppl = site.people | sort:'date' | reverse | slice: 0, 3 %}
  {% for m in ppl %}
  <a class="card person" href="{{ m.url }}">
    <img class="avatar" src="{{ m.photo | default:'/assets/images/people/placeholder.jpg' }}" alt="{{ m.name }}">
    <div class="pad">
      <div class="kicker">{{ m.role }}</div>
      <h3>{{ m.name }}</h3>
    </div>
  </a>
  {% endfor %}
</div>

## <span class="section-title">Our Partners</span>
{% include partners-marquee.html %}

## <span class="section-title">Latest Publications</span>
<div class="grid">
{% assign pubs = site.publications | sort:'date' | reverse | slice: 0, 9 %}
{% for p in pubs %}
  <a class="card" href="{{ p.url }}">
    <img src="{{ p.thumb | default:'/assets/images/placeholder.png' }}" alt="">
    <div class="pad">
      <div class="kicker">{{ p.venue | default:"Publication" }}</div>
      <h3>{{ p.title }}</h3>
      <div class="meta">{{ p.date | date:"%Y-%m-%d" }}</div>
    </div>
  </a>
{% endfor %}
</div>

<p style="text-align:center; margin-top:16px">
  <a class="btn" href="/publications/">View All Publications</a>
</p>
