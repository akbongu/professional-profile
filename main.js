(function(){
  'use strict';

  /* ── TERMINAL TYPEWRITER ── */
  const sequences = [
    { cmd:'whoami', lines:[
      {t:'Arun Bongu — AI Generalist & Cloud Architect',c:'t'},
      {t:'github.com/akbongu · Open to new roles',c:'m'},
    ]},
    { cmd:'ls projects/', lines:[
      {t:'compliance-dashboard/   knowledge-graph-rag/',c:'m'},
      {t:'technology-resiliency/  aws-compute-creator/',c:'m'},
      {t:'inference-server/       RiskyOptionsBot/',c:'m'},
      {t:'finops-lightswitch/     terraform-aws-hashicat/',c:'m'},
    ]},
    { cmd:'cat mcp-servers.txt', lines:[
      {t:'✓ Jira MCP → CDAOTECHRES2 story creation + epic assignment',c:'g'},
      {t:'✓ Confluence MCP → documentation automation',c:'g'},
      {t:'✓ SKILL.md files → domain-aware AI agent instructions',c:'g'},
    ]},
    { cmd:'cat skills/ai.txt', lines:[
      {t:'✓ Claude Opus 4.6 · Claude Code · Cursor · GitHub Copilot',c:'g'},
      {t:'✓ LangChain 0.3 · Neo4j · GPT-4o-mini · AWS Bedrock',c:'g'},
      {t:'✓ Plotly/Dash · Jupyter · ipywidgets · VS Code',c:'g'},
    ]},
    { cmd:'cat skills/cloud.txt', lines:[
      {t:'✓ AWS (EC2, SSM, SageMaker, FIS, Lambda, STS)',c:'g'},
      {t:'✓ Azure · GCP · Oracle Cloud · Terraform · GKE',c:'g'},
      {t:'✓ Multi-cloud DR · Chaos Engineering · FinOps',c:'g'},
    ]},
    { cmd:'echo $AVAILABILITY', lines:[
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
      tcmd.textContent = ''; tcur.style.display = 'inline'; let i = 0;
      const iv = setInterval(()=>{ tcmd.textContent += str[i++]; if(i===str.length){ clearInterval(iv); setTimeout(cb,220); } },45);
    }
    function showLines(lines, cb){
      tcur.style.display = 'none';
      lines.forEach((l,i)=>{
        setTimeout(()=>{
          const d=document.createElement('div'); d.className='tol';
          const s=document.createElement('span'); s.className=l.c; s.textContent=l.t;
          d.appendChild(s); tout.appendChild(d);
          if(i===lines.length-1){ setTimeout(()=>{ tcmd.textContent=''; tout.innerHTML=''; cb(); },1600); }
        },i*100);
      });
    }
    function next(){ const seq=sequences[idx++ % sequences.length]; type(seq.cmd,()=>{ showLines(seq.lines,()=>{ setTimeout(next,300); }); }); }
    setTimeout(next,700);
  }

  /* ── STAT COUNTERS ── */
  const statEls = document.querySelectorAll('.hn[data-n]');
  if(statEls.length){
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(!e.isIntersecting) return;
        const el=e.target, target=+el.dataset.n; let cur=0;
        const iv=setInterval(()=>{ cur=Math.min(cur+1,target); el.textContent=cur+(target>9?'+':''); if(cur>=target) clearInterval(iv); },Math.ceil(1400/target));
        obs.unobserve(el);
      });
    },{threshold:0.5});
    statEls.forEach(el=>{ el.textContent='0'; obs.observe(el); });
  }

  /* ── SKILL BARS ── */
  const fills = document.querySelectorAll('.sbf');
  if(fills.length){
    fills.forEach(f=>{ f._target=getComputedStyle(f).getPropertyValue('--w').trim(); f.style.width='0'; });
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(!e.isIntersecting) return; e.target.style.width=e.target._target; obs.unobserve(e.target); });
    },{threshold:0.3});
    fills.forEach(f=>obs.observe(f));
  }

  /* ── NAV ACTIVE ── */
  const secs=document.querySelectorAll('section[id]');
  const navAs=document.querySelectorAll('.nav-links a');
  function updateNav(){ let cur=''; secs.forEach(s=>{ if(window.scrollY>=s.offsetTop-120) cur=s.id; }); navAs.forEach(a=>{ a.style.color=a.getAttribute('href')==='#'+cur?'var(--teal)':''; }); }
  window.addEventListener('scroll',updateNav,{passive:true}); updateNav();

  /* ── CARD REVEAL ── */
  if('IntersectionObserver' in window){
    const cardObs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(!e.isIntersecting) return; e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; cardObs.unobserve(e.target); });
    },{threshold:0.06});
    document.querySelectorAll('.pcard,.tc,.sf-card,.mcp-card').forEach((c,i)=>{
      c.style.opacity='0'; c.style.transform='translateY(20px)';
      c.style.transition=`opacity .5s ease ${i*.06}s, transform .5s ease ${i*.06}s, border-color .25s`;
      cardObs.observe(c);
    });
  }

})();
