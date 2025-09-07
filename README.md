<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>NextGen Bank — Project README</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
<style>
  :root{
    --bg:#0f1724;
    --card:#0b1220;
    --muted:#94a3b8;
    --accent:#6366f1;
    --glass: rgba(255,255,255,0.03);
    --radius:14px;
  }
  *{box-sizing:border-box}
  body{
    margin:0;
    font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: linear-gradient(180deg,#071025 0%, #081426 100%);
    color:#e6eef8;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    line-height:1.5;
  }

  .wrap{max-width:1100px;margin:48px auto;padding:28px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border-radius:16px;box-shadow:0 10px 40px rgba(2,6,23,0.6);}

  header{display:flex;gap:20px;align-items:center;}
  .logo{width:72px;height:72px;border-radius:12px;background:linear-gradient(135deg,var(--accent),#ec4899);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:20px;color:white}
  h1{font-size:28px;margin:0}
  p.lead{color:var(--muted);margin-top:6px;margin-bottom:18px}

  /* grid */
  .grid{display:grid;grid-template-columns:1fr 360px;gap:24px;margin-top:20px}
  .card{background:var(--card);padding:20px;border-radius:var(--radius);border:1px solid rgba(255,255,255,0.03)}
  .small{font-size:13px;color:var(--muted)}

  /* badges */
  .badges{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0}
  .badge{padding:6px 10px;background:var(--glass);border-radius:999px;font-weight:600;color:var(--accent);font-size:13px}

  /* projects grid */
  .projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px;margin-top:12px}
  .project-card{background:linear-gradient(180deg, rgba(255,255,255,0.012), rgba(255,255,255,0.01));padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,0.025)}
  .project-title{font-weight:700;margin-bottom:6px}
  .project-desc{font-size:13px;color:var(--muted);min-height:36px;margin-bottom:10px}
  .project-meta{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
  .meta-pill{font-size:12px;padding:6px 8px;background:rgba(255,255,255,0.02);border-radius:999px;color:var(--muted)}

  /* video area */
  .video-wrap{display:flex;flex-direction:column;gap:10px}
  .video-player{width:100%;border-radius:12px;overflow:hidden;background:#000}
  video, iframe{width:100%;height:320px;border:0;display:block;background:#000}
  .video-note{font-size:13px;color:var(--muted)}

  /* right column details */
  .meta-list{display:flex;flex-direction:column;gap:12px}
  .meta-item{display:flex;flex-direction:column}
  .meta-item h4{margin:0;font-size:13px;color:var(--muted)}
  .meta-item p{margin:6px 0 0;font-weight:600}

  footer{margin-top:22px;text-align:center;color:var(--muted);font-size:13px}
  a.link{color:var(--accent);text-decoration:none}
  .btn{display:inline-block;padding:10px 14px;border-radius:10px;background:linear-gradient(90deg,var(--accent),#ec4899);color:white;font-weight:700;text-decoration:none}
  @media(max-width:980px){.grid{grid-template-columns:1fr}}
</style>
</head>
<body>
  <div class="wrap">
    <header>
      <div class="logo">NG</div>
      <div>
        <h1>NextGen Bank — Project README</h1>
        <p class="lead">Frontend prototype demonstrating a modern digital banking UI. Built as a clean, responsive demo — includes login/signup modals, account cards, features and an optional demo video.</p>
        <div class="badges">
          <span class="badge">HTML5</span>
          <span class="badge">CSS3</span>
          <span class="badge">JavaScript</span>
          <span class="badge">Vanilla JS</span>
        </div>
      </div>
    </header>

    <div class="grid">
      <!-- left column -->
      <div>
        <!-- Overview -->
        <section class="card">
          <h3 style="margin:0 0 6px">Overview</h3>
          <p class="small">NextGen Bank is a frontend-only demo of a bank website. The UI includes modals for login/signup, account creation flows, feature highlights, app promotion section and a responsive layout. This page also lists your GitHub repositories dynamically so the Projects section always reflects real repos from your account.</p>
          <div style="margin-top:12px">
            <a class="btn" href="https://github.com/Tejas-952007" target="_blank" rel="noopener">Open GitHub Profile</a>
          </div>
        </section>

        <!-- Video sample -->
        <section class="card" style="margin-top:16px">
          <h3 style="margin:0 0 8px">Video Demo / Walkthrough</h3>
          <div class="video-wrap">
            <!-- Native video player (replace src with your MP4) -->
            <div class="video-player" id="nativeVideoContainer">
              <video id="demoVideo" controls poster="">
                <!-- Replace `sample-demo.mp4` with your local file or hosted URL -->
                <source src="demovideo.webm" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>

            <!-- Fallback: YouTube iframe (replace with your video) -->
            <div class="video-player" style="display:none" id="youtubeContainer">
              <iframe id="ytFrame" src="https://www.youtube.com/embed/VIDEO_ID" title="Demo video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="video-note small">
              • To use a local MP4, place `sample-demo.mp4` beside this README and it will play.  
              • To use YouTube, replace `VIDEO_ID` inside the iframe src (example: `https://www.youtube.com/embed/dQw4w9WgXcQ`) and hide the native player if desired.  
              • If you want autoplay, consider privacy & user experience — browsers block autoplay with sound by default.
            </div>
          </div>
        </section>

        <!-- Projects (dynamic) -->
        <section class="card" style="margin-top:16px">
          <h3 style="margin:0 0 6px">Projects (from GitHub)</h3>
          <p class="small">Only public repositories from your GitHub account will show here. Repos that are forks are ignored by default. If a repo has no description or language listed, it will show fallback text.</p>

          <div id="projectsGrid" class="projects-grid" style="margin-top:12px">
            <!-- JS will populate cards here -->
          </div>

          <div id="projectsStatus" class="small" style="margin-top:10px;color:var(--muted)">Loading projects…</div>
        </section>

        <!-- How to use / setup -->
        <section class="card" style="margin-top:16px">
          <h3 style="margin:0 0 8px">Run / Preview</h3>
          <ol style="padding-left:18px;color:var(--muted);margin:0">
            <li>Save this file as <code>README.html</code> inside your project folder.</li>
            <li>Option A — Open locally: double-click file or open with browser (`file:///path/to/README.html`).</li>
            <li>Option B — Host on GitHub Pages: push to repo and enable Pages to serve it.</li>
            <li>To show your demo video: replace <code>sample-demo.mp4</code> or update the YouTube <code>VIDEO_ID</code>.</li>
          </ol>
        </section>
      </div>

      <!-- right column -->
      <aside>
        <div class="card meta-list">
          <div class="meta-item">
            <h4>Project</h4>
            <p>NextGen Bank (UI Demo)</p>
          </div>
          <div class="meta-item">
            <h4>Author</h4>
            <p>Tejas Sunil Ingle — <a class="link" href="mailto:tejasingle137@gmail.com">tejasingle137@gmail.com</a></p>
          </div>
          <div class="meta-item">
            <h4>GitHub</h4>
            <p><a class="link" href="https://github.com/Tejas-952007" target="_blank">github.com/Tejas-952007</a></p>
          </div>
          <div class="meta-item">
            <h4>Tech Stack</h4>
            <p>HTML • CSS • JavaScript (Vanilla) • Font Awesome</p>
          </div>
          <div class="meta-item">
            <h4>License</h4>
            <p>MIT (recommended)</p>
          </div>
        </div>
      </aside>
    </div>

    <footer>
      <div style="padding-top:18px">
        <span class="small">Generated README • NextGen Bank — © <span id="year"></span> Tejas Sunil Ingle</span>
      </div>
    </footer>
  </div>

<script>
  // Set copyright year
  document.getElementById('year').textContent = new Date().getFullYear();

  // GitHub dynamic projects loader
  (async function loadRepos(){
    const username = 'Tejas-952007';
    const container = document.getElementById('projectsGrid');
    const status = document.getElementById('projectsStatus');
    const endpoint = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`;

    try {
      const res = await fetch(endpoint);
      if (!res.ok) throw new Error('GitHub API error: ' + res.status);
      const repos = await res.json();

      // Filter: ignore forks (you can remove this filter if you want forks shown)
      const filtered = repos.filter(r => !r.fork);

      if (!filtered.length) {
        status.textContent = 'No public repositories found.';
        return;
      }

      container.innerHTML = ''; // clear

      filtered.forEach(repo => {
        // create card
        const card = document.createElement('div');
        card.className = 'project-card';

        const title = document.createElement('div');
        title.className = 'project-title';
        title.innerHTML = `<a href="${repo.html_url}" target="_blank" style="color:inherit;text-decoration:none">${repo.name}</a>`;

        const desc = document.createElement('div');
        desc.className = 'project-desc';
        desc.textContent = repo.description ? repo.description : 'No description provided.';

        const meta = document.createElement('div');
        meta.className = 'project-meta';

        const lang = document.createElement('span');
        lang.className = 'meta-pill';
        lang.textContent = (repo.language || 'N/A');

        const stars = document.createElement('span');
        stars.className = 'meta-pill';
        stars.textContent = '★ ' + (repo.stargazers_count || 0);

        const updated = document.createElement('span');
        updated.className = 'meta-pill';
        // show short updated date
        const d = new Date(repo.updated_at);
        updated.textContent = 'Updated: ' + (d.toLocaleDateString());

        meta.appendChild(lang);
        meta.appendChild(stars);
        meta.appendChild(updated);

        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(meta);

        container.appendChild(card);
      });

      status.textContent = `Showing ${filtered.length} public repositories (forks excluded).`;
    } catch (err) {
      console.error(err);
      status.textContent = 'Failed to load GitHub projects — check console for details.';
      container.innerHTML = '<div class="small">⚠️ Unable to fetch repositories. Make sure your username is correct and GitHub API is reachable.</div>';
    }
  })();

  // Video choice UI (if you want to toggle between native and YouTube)
  // If no local mp4 provided, hide native player and show YouTube container (edit VIDEO_ID).
  (function setupVideoFallback(){
    const nativeVideo = document.getElementById('demoVideo');
    const nativeContainer = document.getElementById('nativeVideoContainer');
    const ytContainer = document.getElementById('youtubeContainer');

    // If native source file exists? We can't detect local files via JS in file:// easily.
    // So we simply check if the <source> has non-empty src and try to load it; on error show youtube.
    const source = nativeVideo.querySelector('source');
    if (!source || !source.getAttribute('src') || source.getAttribute('src') === 'sample-demo.mp4') {
      // default: show native (so user can put a local file), but if user wants YouTube, they can edit the iframe and hide native
      // We'll leave both available; no auto-switch to avoid confusing autoplay policies.
      // If you want auto-fallback uncomment logic below and set VIDEO_ID in iframe.
      // ytContainer.style.display = 'block';
      // nativeContainer.style.display = 'none';
    } else {
      // try to load video; if it errors, show yt fallback (not implemented due to cross-origin).
    }
  })();
</script>
</body>
</html>

