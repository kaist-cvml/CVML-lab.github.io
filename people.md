---
layout: single
title: People
---

<div class="people-grid">
  {% assign members = site.people | sort: "name" %}
  {% for m in members %}
  <div class="person">
    <img src="{{ m.photo | default:'/assets/images/people/placeholder.jpg' }}" alt="{{ m.name }}">
    <h3><a href="{{ m.url }}">{{ m.name }}</a></h3>
    <p>{{ m.role }}</p>
    <p>{{ m.interests | join: ', ' }}</p>
  </div>
  {% endfor %}
</div>