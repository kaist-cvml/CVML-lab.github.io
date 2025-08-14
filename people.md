---
layout: single
title: People
permalink: /people/
---

<div class="grid">
{% assign members = site.people | sort: "name" %}
{% for m in members %}
  <a class="card person" href="{{ m.url }}">
    <img class="avatar" src="{{ m.photo | default:'/assets/images/people/placeholder.jpg' }}" alt="{{ m.name }}">
    <div class="pad">
      <div class="kicker">{{ m.role }}</div>
      <h3>{{ m.name }}</h3>
      {% if m.interests %}<div class="meta">{{ m.interests | join: ', ' }}</div>{% endif %}
    </div>
  </a>
{% endfor %}
</div>
