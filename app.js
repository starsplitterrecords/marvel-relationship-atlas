'use strict';
(function(){
  const starterEditorial = JSON.parse(document.getElementById('seed-editorial').textContent);
  const starterResearch = JSON.parse(document.getElementById('seed-research').textContent);
  let editorial = starterEditorial;
  let research = starterResearch;
  const state={view:'stories',person:null,a:'frank',b:'luke'};
  const app = document.getElementById('app');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const person = id => editorial.portraits.find(p=>p.id===id);
  const realName = id => (research.people.find(p=>p.id===id)||{}).name||id;
  const alias = id => (research.people.find(p=>p.id===id)||{}).alias||id;
  const issueList = id => {
    const all = research.events.filter(e=>e.b===id);
    const seen = new Set();
    return all.filter(e=>{let key=(e.issue||'')+'|'+(e.source_id||'');if(seen.has(key))return false;seen.add(key);return true})
      .sort((a,b)=>(a.publication_year||0)-(b.publication_year||0))
      .map(e=>{
        const src=research.sources.find(s=>s.id===e.source_id);
        const link=src&&src.url?'<a href="'+esc(src.url)+'" target="_blank" rel="noopener noreferrer">'+esc(e.issue)+' ↗</a>':'<strong>'+esc(e.issue)+'</strong>';
        return '<div class="issue"><div class="date">'+esc(e.publication_year||'')+'</div>'+link+'<p>'+esc(e.observation||'')+'</p></div>';
      }).join('');
  };
  const scrollTop=()=>window.scrollTo({top:0,behavior:'auto'});
  const feature=()=>{
    const f=editorial.spotlight;
    return '<section class="feature"><div class="feature-copy"><div class="kicker">'+esc(f.eyebrow)+'</div><h2>'+esc(f.title)+'</h2><p>'+esc(f.opening)+'</p><button type="button" class="light-button" data-person="'+esc(f.partner_id)+'">Read their story →</button></div><div class="feature-art" aria-hidden="true"><div class="symbols"><div class="symbol">D</div><div class="dash"></div><div class="symbol">P</div></div><p>'+esc(f.theme)+'</p></div></section>';
  };
  const storyTile=p=>'<button type="button" class="story-tile" data-person="'+esc(p.id)+'"><div class="kicker">'+esc(p.tag)+'</div><h3>'+esc(p.headline)+'</h3><p>'+esc(p.lede)+'</p><span class="read-more">Read about '+esc(alias(p.id))+' →</span></button>';
  function stories(){
    if(state.person){
      const p=person(state.person);
      if(!p){state.person=null;return stories();}
      return '<article class="essay"><button type="button" class="back" data-back="true">← All stories</button><div class="kicker">DAREDEVIL & '+esc(alias(p.id)).toUpperCase()+' · '+esc(p.tag)+'</div><h2>'+esc(p.headline)+'</h2><p class="deck">'+esc(p.lede)+'</p><div class="prose">'+p.paragraphs.map(x=>'<p>'+esc(x)+'</p>').join('')+'</div><blockquote class="pullquote">'+esc(p.takeaway)+'</blockquote><details class="reading-box"><summary>'+esc(p.readLabel)+' →</summary><p>These issue references and Marvel reading guides are the starting points for the story. They are not a substitute for reading every panel.</p><div class="issue-list">'+issueList(p.id)+'</div></details><p class="note">This is a portrait of the relationship across selected Earth-616 stories, not a claim that these feelings or loyalties remain unchanged forever. Where a motive is uncertain, the wording reflects that uncertainty.</p><button type="button" class="back" data-back="true">← Explore another relationship</button></article>';
    }
    return feature()+'<div class="story-heading"><div class="folio">THE PEOPLE IN MATT MURDOCK’S LIFE</div><h2>Every relationship is its own story.</h2><p>Two people can cooperate and still disagree about everything that matters. A lifelong friend may know you better than anyone — and sometimes trust you less.</p></div><div class="story-grid">'+editorial.portraits.map(storyTile).join('')+'</div>';
  }
  function compare(){
    const a=person(state.a)||editorial.portraits[0];
    const b=person(state.b)||editorial.portraits[1];
    const key=state.a+'|'+state.b;
    const reverse=state.b+'|'+state.a;
    const contrast=editorial.compare[key]||editorial.compare[reverse];
    return '<div class="folio">SIDE BY SIDE</div><div class="story-heading"><h2>One hero. Different kinds of closeness.</h2><p>Choose two people and the contrast becomes clear. The same gesture — helping Matt, defying him, knowing his secret — can mean entirely different things.</p></div><div class="compare-controls"><div class="select-wrap"><label for="compare-a">First relationship</label><select id="compare-a">'+editorial.portraits.map(p=>'<option value="'+esc(p.id)+'" '+(p.id===state.a?'selected':'')+'>'+esc(alias(p.id))+'</option>').join('')+'</select></div><div class="select-wrap"><label for="compare-b">Second relationship</label><select id="compare-b">'+editorial.portraits.map(p=>'<option value="'+esc(p.id)+'" '+(p.id===state.b?'selected':'')+'>'+esc(alias(p.id))+'</option>').join('')+'</select></div></div><div class="compare-grid">'+[a,b].map(p=>'<div class="compare-story"><div class="kicker">'+esc(alias(p.id))+'</div><h3>'+esc(p.headline)+'</h3><p>'+esc(p.lede)+'</p><p><em>'+esc(p.takeaway)+'</em></p><button type="button" class="back" data-person="'+esc(p.id)+'">Read the full story →</button></div>').join('')+'</div>'+(contrast?'<section class="contrast"><h3>'+esc(contrast.headline)+'</h3>'+contrast.paragraphs.map(p=>'<p>'+esc(p)+'</p>').join('')+'</section>':'<section class="contrast"><h3>Different people bring out different sides of Matt.</h3><p>'+esc(a.paragraphs[0])+'</p><p>'+esc(b.paragraphs[0])+'</p><p>These stories were written in different eras. Their differences are worth exploring without forcing them into a single ranking.</p></section>')+'<p class="note">These are editorial comparisons of published stories, not scores for how much someone likes or trusts another person.</p>';
  }
  function reading(){
    const items=editorial.portraits.map(p=>{
      const list=research.events.filter(e=>e.b===p.id);
      const uniqueIssues=[...new Set(list.map(e=>e.issue))].slice(0,3);
      return '<div class="reading-item"><div class="meta">'+esc(alias(p.id)).toUpperCase()+'</div><h3>'+esc(p.headline)+'</h3><p>'+esc(uniqueIssues.join(' · '))+'</p><button type="button" class="back" data-person="'+esc(p.id)+'">Read the story and its comics →</button></div>';
    }).join('');
    return '<div class="folio">BEHIND THE STORIES</div><div class="story-heading"><h2>The comics are the source of everything here.</h2></div><p class="reading-intro">These are interpretations of relationships as they unfold in the stories, not invented access to the characters’ thoughts. Where Marvel says what happened, we can tell you that. Where a gesture might mean trust, admiration or fear, we should be careful — and say what remains open to interpretation.</p><div class="reading-list">'+items+'</div><div class="reading-box"><strong>One important limitation</strong><p>Our first round draws primarily on Marvel’s official descriptions and reading guides. We have not independently checked every original comic panel. The portraits will get richer and more precise as the reading expands.</p></div>';
  }
  function render(){
    app.innerHTML=state.view==='stories'?stories():state.view==='compare'?compare():reading();
    document.querySelectorAll('[data-view]').forEach(btn=>btn.classList.toggle('active',btn.dataset.view===state.view));
    document.title=(state.view==='stories'&&state.person?alias(state.person)+' & Daredevil | ':'')+'Marvel Relationship Atlas';
  }
  function goView(view,selected){
    state.view=view;
    if(selected!==undefined) state.person=selected;
    render();scrollTop();
  }
  document.addEventListener('click',e=>{
    const nav=e.target.closest('[data-view]');
    if(nav){if(nav.dataset.view==='stories') {history.replaceState(null,'',location.pathname+location.search);goView('stories',null);}else{goView(nav.dataset.view);}return;}
    const back=e.target.closest('[data-back]');
    if(back){history.replaceState(null,'',location.pathname+location.search);goView('stories',null);return;}
    const p=e.target.closest('[data-person]');
    if(p){const id=p.dataset.person;if(person(id)){history.replaceState(null,'','#'+encodeURIComponent(id));goView('stories',id);}return;}
  });
  document.addEventListener('change',e=>{
    if(e.target.id==='compare-a'){state.a=e.target.value;render();}
    if(e.target.id==='compare-b'){state.b=e.target.value;render();}
  });
  const initial=decodeURIComponent(location.hash.slice(1));
  if(person(initial))state.person=initial;
  render();
  const load=async(path)=>{const r=await fetch(path,{cache:'no-store'});if(!r.ok)throw new Error('Could not fetch '+path);return r.json();};
  Promise.allSettled([load('./data/editorial_profiles.json'),load('./data/relationship_pilot.json')]).then(results=>{
    if(results[0].status==='fulfilled'&&Array.isArray(results[0].value.portraits)) editorial=results[0].value;
    if(results[1].status==='fulfilled'&&Array.isArray(results[1].value.events)) research=results[1].value;
    render();
  });
  if('serviceWorker' in navigator&&location.protocol==='https:')navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
})();