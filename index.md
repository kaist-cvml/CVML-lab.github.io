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
---
layout: single
title: ""
---

<div class="hero">
  <div class="page__inner-wrap">
    <h1 class="title">Computer Vision & Visual Computing Lab</h1>
    <p class="subtitle">Dense correspondence • 3D vision • Geodesic-aware learning</p>
    <p style="margin-top:18px">
      <a class="btn" href="/join/">Join Us</a>
      <span class="mute" style="margin-left:10px">We’re recruiting PhD/MS & interns</span>
    </p>
  </div>
</div>

## <span class="section-title">Latest Publications</span>
<div class="grid">
{% assign latest = site.publications | sort: "date" | reverse | slice: 0, 8 %}
{% for p in latest %}
  <a class="card" href="{{ p.url }}">
    <img src="{{ p.thumb | default:'/assets/images/placeholder.png' }}" alt="">
    <div class="pad">
      <div class="kicker">{{ p.venue | default: "Publication" }}</div>
      <h3>{{ p.title }}</h3>
      <div class="meta">{{ p.date | date:"%Y-%m-%d" }}</div>
      <div style="margin-top:6px">
        {% for t in p.tags limit:3 %}<span class="tag">#{{ t }}</span>{% endfor %}
      </div>
    </div>
  </a>
{% endfor %}
</div>

## <span class="section-title">Research Areas</span>
<div class="grid">
{% assign areas = site.areas | sort:"title" %}
{% for a in areas %}
  <a class="card" href="{{ a.url }}">
    <img src="{{ a.thumb | default:'/assets/images/areas/placeholder.jpg' }}" alt="">
    <div class="pad">
      <div class="kicker">Area</div>
      <h3>{{ a.title }}</h3>
      <p class="mute">{{ a.excerpt | default: a.subtitle }}</p>
    </div>
  </a>
{% endfor %}
</div>

<div class="cta">
  <h3 style="margin:0 0 6px">Work with us</h3>
  <p class="mute" style="margin:0 0 12px">We collaborate with industry and academia on visual computing and 3D vision.</p>
  <a href="/join/" class="btn">View Open Positions</a>
</div>

