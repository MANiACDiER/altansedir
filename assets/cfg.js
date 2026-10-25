function mountCfg(root,p,onChange){
 const S={w:180,custom:false,d:p.depth,h:45,lside:'Sağ',frame:p.frame||0,dens:32,thick:10,support:true,ftype:p.fabric,fab:null,extras:[]};
 S.fab=FABRICS.find(f=>f[3]===S.ftype);
 const opt=(g,v,l,on)=>`<button type="button" class="opt ${on?'on':''}" data-g="${g}" data-v="${v}">${l}</button>`;
 function render(){
  const fabs=FABRICS.filter(f=>f[3]===S.ftype);
  root.innerHTML=`
  <label>1 · Ölçü (genişlik)</label><div class="opts">${[120,150,180,200].map(v=>opt('w',v,v+' cm',!S.custom&&S.w==v)).join('')}${opt('w','custom','Özel ölçü gireceğim',S.custom)}</div>
  ${S.custom?`<div class="row3" style="margin-top:10px"><div><small class="note">Genişlik (cm)</small><input type="number" min="80" max="500" value="${S.w}" data-i="w"></div><div><small class="note">Derinlik (cm)</small><input type="number" min="35" max="90" value="${S.d}" data-i="d"></div><div><small class="note">Yükseklik (cm)</small><input type="number" min="35" max="120" value="${S.h}" data-i="h"></div></div>`:''}
  ${p.l?`<label>L köşe yönü</label><div class="opts">${['Sağ','Sol'].map(v=>opt('lside',v,v+' köşe',S.lside===v)).join('')}</div>`:''}
  <label>2 · İskelet rengi — ${FRAMES[S.frame].n}</label><div class="opts">${FRAMES.map((f,i)=>`<button type="button" class="sw ${i===S.frame?'on':''}" style="background:${f.c}" data-g="frame" data-v="${i}" title="${f.n}"></button>`).join('')}</div>
  <label>3 · Sünger yoğunluğu</label><div class="opts">${[28,32,35].map(v=>opt('dens',v,v+' DNS'+(v>28?' HR':''),S.dens==v)).join('')}</div>
  <label>Sünger kalınlığı</label><div class="opts">${[8,10,12,15].map(v=>opt('thick',v,v+' cm',S.thick==v)).join('')}</div>
  <label class="check" style="text-transform:none;letter-spacing:0;font-size:14px;color:var(--ink)"><input type="checkbox" data-c="support" ${S.support?'checked':''}> Alt destek katmanı (çökme önleyici keçe + sert katman)</label>
  <label>4 · Kumaş türü</label><div class="opts">${Object.entries(FABRIC_TYPES).map(([k,v])=>opt('ftype',k,v.n,S.ftype===k)).join('')}</div>
  <label>Kumaş rengi — ${S.fab[0]} ${S.fab[1]}</label><div class="opts">${fabs.map(f=>`<button type="button" class="sw ${f[0]===S.fab[0]?'on':''}" style="background:${f[2]}" data-g="fab" data-v="${f[0]}" title="${f[0]} ${f[1]}"></button>`).join('')}</div>
  <label>5 · Ekstralar</label>
  ${[['kirlent','Sırt kırlenti / yastık (+350 TL)'],['klapa','Ahşap klapa / kolçak detayı (+900 TL)'],['yagmurluk','Koruma kılıfı / yağmurluk (+650 TL)']].map(([k,l])=>`<label class="check" style="text-transform:none;letter-spacing:0;font-size:14px;color:var(--ink);margin:6px 0"><input type="checkbox" data-c="${k}" ${S.extras.includes(k)?'checked':''}> ${l}</label>`).join('')}
  `;
  update();
 }
 function summary(){return `${p.name} · ${S.w}x${S.d} cm${p.l?' ('+S.lside+' köşe)':''} · ${FRAMES[S.frame].n} iskelet · ${S.dens} DNS ${S.thick} cm sünger · ${FABRIC_TYPES[S.ftype].n} / ${S.fab[0]} ${S.fab[1]}${S.extras.length?' · Ekstra: '+S.extras.join(', '):''}`}
 function update(){const price=calc(p,S);onChange&&onChange({S,price,summary:summary(),svg:sofaSVG(FRAMES[S.frame].c,S.fab[2],{wood:p.wood||S.extras.includes('klapa'),pillow:S.extras.includes('kirlent'),cover:S.extras.includes('yagmurluk'),l:p.l})})}
 root.addEventListener('click',e=>{const b=e.target.closest('[data-g]');if(!b)return;const g=b.dataset.g,v=b.dataset.v;
  if(g==='w'){if(v==='custom'){S.custom=true}else{S.custom=false;S.w=+v}}
  else if(g==='frame')S.frame=+v;else if(g==='dens'||g==='thick')S[g]=+v;
  else if(g==='lside')S.lside=v;
  else if(g==='ftype'){S.ftype=v;S.fab=FABRICS.find(f=>f[3]===v)}
  else if(g==='fab')S.fab=FABRICS.find(f=>f[0]===v);
  render()});
 root.addEventListener('change',e=>{const t=e.target;
  if(t.dataset.c==='support'){S.support=t.checked}
  else if(t.dataset.c){S.extras=t.checked?[...S.extras,t.dataset.c]:S.extras.filter(x=>x!==t.dataset.c)}
  else if(t.dataset.i){S[t.dataset.i]=Math.max(+t.min,Math.min(+t.max,+t.value||+t.min))}
  if(t.dataset.i)update();else render()});
 render();return S;
}
