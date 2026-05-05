// Renders the consistent top bar + footer across pages.
(function () {
  const here = (document.body.dataset.page || '').toLowerCase();
  const nav = [
    { href: 'index.html',     label: 'Overview',   key: 'index' },
    { href: 'quiz.html',      label: 'Diagnostic', key: 'quiz' },
    { href: 'cost.html',      label: 'Cost',       key: 'cost' },
    { href: 'research.html',  label: 'Research',   key: 'research' },
    { href: 'team.html',      label: 'Lab',        key: 'team' },
  ];
  const today = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();
  const html = `
    <a href="index.html" class="brand">organizational amnesia</a>
    <div class="center">A Standing Inquiry · ${today}</div>
    <nav>
      ${nav.map(n => `<a href="${n.href}" class="${n.key === here ? 'active' : ''}">${n.label}</a>`).join('')}
    </nav>
  `;
  const el = document.querySelector('header.topbar');
  if (el) el.innerHTML = html;

  const f = document.querySelector('footer.footer');
  if (f) {
    f.innerHTML = `
      <div>
        <div class="imprint">organizational amnesia</div>
        <div class="colophon">An independent research initiative cataloguing how, why, and at what cost organizations forget. ${new Date().getFullYear()}. All findings released under CC&nbsp;BY&nbsp;4.0.</div>
      </div>
      <div>
        <h4>Sections</h4>
        <ul>
          <li><a href="index.html">Overview</a></li>
          <li><a href="quiz.html">Diagnostic (OAQ-12)</a></li>
          <li><a href="cost.html">Cost calculator</a></li>
          <li><a href="research.html">Research &amp; methodology</a></li>
          <li><a href="team.html">The lab</a></li>
        </ul>
      </div>
      <div>
        <h4>Reading</h4>
        <ul>
          <li><a href="signs.html">10 signs of amnesia</a></li>
          <li><a href="attrition.html">Knowledge attrition</a></li>
          <li><a href="prevent.html">How to prevent it</a></li>
          <li><a href="tacit-knowledge.html">Tacit knowledge</a></li>
          <li><a href="ai-memory.html">AI memory</a></li>
          <li><a href="resources.html">Reading list</a></li>
          <li><a href="index.html#faq">FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li>hello@organizationalamnesia.com</li>
          <li>ISSN 2998-4471</li>
        </ul>
      </div>
    `;
  }
})();
