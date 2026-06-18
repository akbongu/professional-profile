(function(){
  'use strict';

  /* ── TERMINAL TYPEWRITER ── */
  const sequences = [
    { cmd:'whoami', lines:[
      {t:'Arun Bongu — AI Generalist & Cloud Architect',c:'t'},
      {t:'Somerville, NJ · github.com/akbongu',c:'m'},
    ]},
    { cmd:'ls repos/ | head -8', lines:[
      {t:'knowledge-graph-rag/    aws-compute-creator/',c:'m'},
      {t:'technology-resiliency/  inference-server/',c:'m'},
      {t:'RiskyOptionsBot/        finops-aws-lightswitch-pattern/',c:'m'},
      {t:'gke-rbac-demo/          terraform-aws-hashicat-aws/',c:'m'},
    ]},
    { cmd:'cat skills/ai.txt', lines:[
      {t:'✓ Claude · Claude Code · Cursor · GitHub Copilot',c:'g'},
      {t:'✓ LangChain 0.3 · Neo4j · OpenAI GPT-4o · AWS Bedrock',c:'g'},
      {t:'✓ SKILL.md + AGENTS.md agent instruction design',c:'g'},
    ]},
    { cmd:'cat skills/cloud.txt', lines:[
      {t:'✓ AWS (EC2, SSM, SageMaker, FIS, Lambda, STS)',c:'g'},
      {t:'✓ Azure · GCP · Oracle Cloud · Terraform · GKE',c:'g'},
      {t:'✓ Multi-cloud DR · Chaos Engineering · FinOps',c:'g'},
    ]},
    { cmd:'cat skills/code.txt', lines:[
      {t:'✓ Python · TypeScript · Node.js · Next.js 16 · React 19',c:'g'},
      {t:'✓ ib_insync · APScheduler · AWS SDK v3 · neo4j-graphrag',c:'g'},
    ]},
    { cmd:'echo $STATUS', lines:[
      {t:'OPEN_TO_HIRE=true',c:'t'},
      {t:'ROLES="AI Generalist · Cloud Architect · ML Engineer"',c:'o'},
      {t:'PREF="Remote · Hybrid · Full-time · Contract"',c:'m'},
    ]},
  ];

  const tcmd = document.getElementById('tcmd');
  const tcur = document.getElementById('tcur');
  const tout = document.getElementById('tout');

  if(tcmd && tout){
    let idx = 0;

    function type(str, cb){
      tcmd.textContent = '';
      tcur.style.display = 'inline';
      let i = 0;
      const iv = setInterval(()=>{
        tcmd.textContent += str[i++];
        if(i===str.length){ clearInterval(iv); setTimeout(cb, 220); }
      }, 45);
    }

    function showLines(lines, cb){
      tcur.style.display = 'none';
      lines.forEach((l,i)=>{
        setTimeout(()=>{
          const d = document.createElement('div');
          d.className = 'tol';
          const s = document.createElement('span');
          s.className = l.c; s.textContent = l.t;
          d.appendChild(s); tout.appendChild(d);
          if(i===lines.length-1){
            setTimeout(()=>{ tcmd.textContent=''; tout.innerHTML=''; cb(); }, 1600);
          }
        }, i*100);
      });
    }

    function next(){
      const seq = sequences[idx++ % sequences.length];
      type(seq.cmd, ()=>{ showLines(seq.lines, ()=>{ setTimeout(next, 300); }); });
    }
    setTimeout(next, 700);
  }

  /* ── STAT COUNTERS ── */
  const statEls = document.querySelectorAll('.hn[data-n]');
  if(statEls.length){
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(!e.isIntersecting) return;
        const el = e.target, target = +el.dataset.n;
        let cur = 0;
        const iv = setInterval(()=>{
          cur = Math.min(cur+1, target);
          el.textContent = cur + (target > 9 ? '+' : '');
          if(cur>=target) clearInterval(iv);
        }, Math.ceil(1400/target));
        obs.unobserve(el);
      });
    },{threshold:0.5});
    statEls.forEach(el=>{ el.textContent='0'; obs.observe(el); });
  }

  /* ── SKILL BARS ── */
  const fills = document.querySelectorAll('.sbf');
  if(fills.length){
    fills.forEach(f=>{ f._target = getComputedStyle(f).getPropertyValue('--w').trim(); f.style.width='0'; });
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(!e.isIntersecting) return;
        e.target.style.width = e.target._target;
        obs.unobserve(e.target);
      });
    },{threshold:0.3});
    fills.forEach(f=>obs.observe(f));
  }

  /* ── NAV ACTIVE ── */
  const secs = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a');
  function updateNav(){
    let cur='';
    secs.forEach(s=>{ if(window.scrollY >= s.offsetTop-120) cur=s.id; });
    navAs.forEach(a=>{ a.style.color = a.getAttribute('href')==='#'+cur ? 'var(--teal)' : ''; });
  }
  window.addEventListener('scroll', updateNav, {passive:true});
  updateNav();

  /* ── CARD REVEAL ── */
  const cards = document.querySelectorAll('.pcard');
  if(cards.length && 'IntersectionObserver' in window){
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(!e.isIntersecting) return;
        e.target.style.opacity='1';
        e.target.style.transform='translateY(0)';
        obs.unobserve(e.target);
      });
    },{threshold:0.08});
    cards.forEach((c,i)=>{
      c.style.opacity='0';
      c.style.transform='translateY(24px)';
      c.style.transition=`opacity .55s ease ${i*.07}s, transform .55s ease ${i*.07}s, border-color .25s`;
      obs.observe(c);
    });
  }

  /* ── TOOL CARDS REVEAL ── */
  const tcs = document.querySelectorAll('.tc,.sf-card');
  if(tcs.length && 'IntersectionObserver' in window){
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(!e.isIntersecting) return;
        e.target.style.opacity='1'; e.target.style.transform='translateY(0)';
        obs.unobserve(e.target);
      });
    },{threshold:0.1});
    tcs.forEach((c,i)=>{
      c.style.opacity='0'; c.style.transform='translateY(16px)';
      c.style.transition=`opacity .45s ease ${i*.05}s, transform .45s ease ${i*.05}s`;
      obs.observe(c);
    });
  }

})();
