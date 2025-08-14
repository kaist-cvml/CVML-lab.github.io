---
layout: single
title: "Computer Vision & Visual Computing Lab"
classes: wide
toc: false
---
{% include drs-hero.html %}

<div class="drs-section">
  <div class="wrap">
    <h2 style="text-align:center">Research Areas</h2>
    <div class="drs-grid-2">
      <article class="drs-card">
        <a href="/machine-learning/">
          <img src="/assets/images/areas/ml.png" alt="Machine Learning">
          <h3>Machine Learning</h3>
        </a>
      </article>
      <article class="drs-card">
        <a href="/visual-computing/">
          <img src="/assets/images/areas/visual-computing.png" alt="Visual Computing">
          <h3>Visual Computing</h3>
        </a>
      </article>
    </div>
  </div>
</div>

<div class="drs-section">
  <div class="wrap">
    <h2 style="text-align:center">Labs &amp; People</h2>
    <div class="people-grid">
      {%- assign ppl = site.people | sort: 'date' | reverse | slice: 0, 3 -%}
      {%- for p in ppl -%}
      <article class="people-card">
        <a href="{{ p.url | relative_url }}">
          <img src="{{ p.avatar | default: '/assets/images/people/default.jpg' }}" alt="{{ p.title }}">
          <h3 style="margin:12px 0 4px">{{ p.title }}</h3>
          <div class="role">{{ p.role | default: p.position }}</div>
        </a>
      </article>
      {%- endfor -%}
    </div>
    <p style="text-align:center;margin-top:20px">
      <a class="drs-btn" href="/people/">View Our People</a>
    </p>
  </div>
</div>

<section class="parallax-cta" style="background-image:url('/assets/images/cta/view-jobs.jpg')">
  <h2>Join the Magic. Work with Us</h2>
  <p><a class="drs-btn" href="/careers/">View Jobs</a></p>
</section>

<div class="drs-section">
  <div class="wrap">
    <h3 style="text-align:center">Partners</h3>
    <div class="logo-belt" aria-label="Partner logos">
      <div class="lane" style="--n:18">
        <!-- 같은 순서를 두 번 반복하면 무한 스크롤 느낌 -->
        {% assign logos = site.data.partners.logos %}
        {% for l in logos %}
          <img src="{{ l.src }}" alt="{{ l.alt }}">
        {% endfor %}
        {% for l in logos %}
          <img src="{{ l.src }}" alt="{{ l.alt }}">
        {% endfor %}
      </div>
    </div>
  </div>
</div>

<div class="drs-section">
  <div class="wrap">
    <h2 style="text-align:center">Latest Publications</h2>
    <div class="pubs">
      {%- assign pubs = site.publications | sort: 'date' | reverse | slice: 0, 3 -%}
      {%- for post in pubs -%}
      <article class="pub">
        <a href="{{ post.url | relative_url }}">
          {% if post.teaser %}
            <img src="{{ post.teaser | relative_url }}" alt="{{ post.title }}">
          {% endif %}
        </a>
        <div class="box">
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <div class="meta">
            {{ post.date | date: "%Y-%m-%d" }}
            {% if post.venue %} · {{ post.venue }}{% endif %}
          </div>
        </div>
      </article>
      {%- endfor -%}
    </div>
    <p style="text-align:center;margin-top:18px">
      <a class="drs-btn" href="/publications/">View All Publications</a>
    </p>
  </div>
</div>

<div class="drs-section" style="background:#f5f5f7">
  <div class="wrap footer-columns">
    <div>
      <h5>Research at {{ site.title | default: "Our Lab" }}</h5>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/research/">Research</a></li>
        <li><a href="/people/">People</a></li>
        <li><a href="/careers/">Careers</a></li>
        <li><a href="/publications/">Publications</a></li>
        <li><a href="/outreach/">Outreach</a></li>
        <li><a href="/about/">About Us</a></li>
      </ul>
    </div>
    <div>
      <h5>Legal</h5>
      <ul>
        <li><a href="https://disneyprivacycenter.com/" rel="noopener">Privacy Policy</a></li>
        <li><a href="http://disneytermsofuse.com/" rel="noopener">Terms of Use</a></li>
      </ul>
    </div>
    <div>
      <h5>More</h5>
      <ul>
        <li><a href="/news/">News</a></li>
      </ul>
    </div>
  </div>
</div>