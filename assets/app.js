const WA='905340883948';
const SOCIAL={instagram:'https://instagram.com/altansedir',facebook:'https://facebook.com/altansedir',youtube:'https://youtube.com/@altansedir',tiktok:'https://tiktok.com/@altansedir',pinterest:'https://pinterest.com/altansedir'};
const SOC_LABEL={instagram:'Instagram',facebook:'Facebook',youtube:'YouTube',tiktok:'TikTok',pinterest:'Pinterest'};
const FRAMES=[{n:'Siyah',c:'#1d1d1d'},{n:'Beyaz',c:'#efefea'},{n:'Antrasit',c:'#4a4d52'},{n:'Gold / Özel',c:'#b8964e'}];
const FABRIC_TYPES={outdura:{n:'Su Geçirmez Outdura / Akrilik',add:600},kadife:{n:'Tay Tüyü & Kadife (iç mekân)',add:350},leke:{n:'Leke Tutmaz / Silinebilir Dokuma',add:450},uv:{n:'UV Korumalı Açık Hava',add:700}};
const FABRICS=[
 ['OD-101','Krem','#e6dcc8','outdura'],['OD-102','Kum','#cdb99a','outdura'],['OD-103','Gri','#9c9a95','outdura'],['OD-104','Lacivert','#2f3b52','outdura'],
 ['KD-201','Hardal','#c0902f','kadife'],['KD-202','Yeşil','#4b5e45','kadife'],['KD-203','Bordo','#6d2f33','kadife'],['KD-204','Bej','#d6c5a8','kadife'],
 ['LT-301','Taş','#b9b2a6','leke'],['LT-302','Antrasit','#55575a','leke'],['LT-303','Kiremit','#a85f43','leke'],['LT-304','Ekru','#efe6d4','leke'],
 ['UV-401','Gün Işığı','#d9c9a3','uv'],['UV-402','Okyanus','#4a6e7a','uv'],['UV-403','Zeytin','#6d6b3c','uv'],['UV-404','Kömür','#34343a','uv']];
const USES={balkon:'Balkon & Teras',bahce:'Bahçe',ic:'İç Mekân & Salon',ticari:'Kafe, Restoran & Otel',l:'L Tipi (Köşe)'};
const TYPES={metal:'Metal / Profil İskeletli',ahsap:'Ahşap Detaylı / Kolçaklı',depolama:'Depolamalı / Sandıklı',moduler:'Modüler / Birleşebilir'};
const PRODUCTS=[
 {id:'teras-slim',name:'Teras Slim',use:['balkon'],type:'metal',per:24,depth:45,profile:'30x50 mm',cap:350,fabric:'outdura',frame:0,desc:'Dar balkonlar için ince hatlı, 45 cm derinliğinde metal iskeletli sedir.'},
 {id:'bahce-pro',name:'Bahçe Pro',use:['bahce','balkon'],type:'metal',per:28,depth:55,profile:'40x40 mm',cap:400,fabric:'uv',frame:2,desc:'Yağmur ve güneşe dayanıklı; UV korumalı kumaş ve paslanmaz bağlantı elemanları.'},
 {id:'salon-wood',name:'Salon Wood',use:['ic'],type:'ahsap',per:32,depth:60,profile:'30x50 mm',cap:350,fabric:'kadife',frame:0,wood:1,desc:'Ahşap klapa ve kolçak detaylı, salon için sıcak ve modern sedir.'},
 {id:'salon-minimal',name:'Salon Minimal',use:['ic'],type:'metal',per:27,depth:55,profile:'30x50 mm',cap:350,fabric:'kadife',frame:1,desc:'Sade çizgili, ince profilli minimal iç mekân sedirı.'},
 {id:'kafe-heavy',name:'Kafe Heavy',use:['ticari'],type:'metal',per:36,depth:55,profile:'40x40 mm',cap:500,fabric:'leke',frame:0,desc:'Yüksek sirkülasyon için güçlendirilmiş iskelet, 35 DNS HR sünger ve leke tutmaz kumaş.'},
 {id:'kose-l',name:'Köşe L',use:['l','balkon','ic'],type:'moduler',per:30,depth:55,profile:'40x40 mm',cap:400,fabric:'outdura',frame:2,l:1,desc:'Sağ/sol yön seçenekli L tipi sedir; balkon köşelerine ölçüye özel.'},
 {id:'box-store',name:'Box Store',use:['balkon','ic'],type:'depolama',per:38,depth:55,profile:'40x40 mm',cap:350,fabric:'outdura',frame:0,desc:'Baza mekanizmalı, gaz amortisörlü depolamalı sedir.'},
 {id:'modul-set',name:'Modül Set',use:['ticari','ic','bahce'],type:'moduler',per:33,depth:55,profile:'40x40 mm',cap:400,fabric:'leke',frame:2,desc:'Birleşebilir üniteler; mekâna göre büyütülebilir ek parça sistemi.'},
 {id:'cay-bahcesi',name:'Çay Bahçesi',use:['ticari'],type:'metal',per:26,depth:45,profile:'40x40 mm',cap:350,fabric:'outdura',frame:0,desc:'Metal profil iskeletli, ölçüye özel üretilen çay bahçesi sedir sistemi.'},
 {id:'kafe-tas',name:'Taş Duvar Kafe',use:['ticari'],type:'ahsap',per:29,depth:50,profile:'30x50 mm',cap:400,fabric:'kadife',frame:2,desc:'Metal profil iskeletli, ölçüye özel üretilen taş duvar kafe sedir sistemi.'},
 {id:'tas-duvar',name:'Rustik Restoran',use:['ticari'],type:'depolama',per:32,depth:55,profile:'40x40 mm',cap:450,fabric:'leke',frame:0,desc:'Metal profil iskeletli, ölçüye özel üretilen rustik restoran sedir sistemi.'},
 {id:'gece-kafe',name:'Gece Kafe',use:['ticari'],type:'moduler',per:35,depth:45,profile:'30x50 mm',cap:350,fabric:'uv',frame:1,desc:'Metal profil iskeletli, ölçüye özel üretilen gece kafe sedir sistemi.'},
 {id:'geo-masa',name:'Geometrik Masa Seti',use:['ic'],type:'metal',per:38,depth:50,profile:'40x40 mm',cap:400,fabric:'outdura',frame:0,desc:'Metal profil iskeletli, ölçüye özel üretilen geometrik masa seti sedir sistemi.'},
 {id:'deniz',name:'Sahil Kafe',use:['ticari'],type:'ahsap',per:27,depth:55,profile:'30x50 mm',cap:450,fabric:'kadife',frame:2,desc:'Metal profil iskeletli, ölçüye özel üretilen sahil kafe sedir sistemi.'},
 {id:'renkli-kirlent',name:'Renkli Kırlent',use:['ic'],type:'depolama',per:30,depth:45,profile:'40x40 mm',cap:350,fabric:'leke',frame:0,desc:'Metal profil iskeletli, ölçüye özel üretilen renkli kırlent sedir sistemi.'},
 {id:'salon-genis',name:'Salon Geniş',use:['ticari'],type:'moduler',per:33,depth:50,profile:'30x50 mm',cap:400,fabric:'uv',frame:1,desc:'Metal profil iskeletli, ölçüye özel üretilen salon geniş sedir sistemi.'},
 {id:'gri-set',name:'Gri Set',use:['balkon'],type:'metal',per:36,depth:55,profile:'40x40 mm',cap:450,fabric:'outdura',frame:0,desc:'Metal profil iskeletli, ölçüye özel üretilen gri set sedir sistemi.'},
 {id:'restoran',name:'Restoran Set',use:['bahce', 'balkon'],type:'ahsap',per:39,depth:45,profile:'30x50 mm',cap:350,fabric:'kadife',frame:2,desc:'Metal profil iskeletli, ölçüye özel üretilen restoran set sedir sistemi.'},
 {id:'petek',name:'Petek Desen',use:['ic'],type:'depolama',per:28,depth:50,profile:'40x40 mm',cap:400,fabric:'leke',frame:0,desc:'Metal profil iskeletli, ölçüye özel üretilen petek desen sedir sistemi.'},
 {id:'bej-kirlent',name:'Bej Kırlent',use:['ic'],type:'moduler',per:31,depth:55,profile:'30x50 mm',cap:450,fabric:'uv',frame:1,desc:'Metal profil iskeletli, ölçüye özel üretilen bej kırlent sedir sistemi.'},
 {id:'gece-pembe',name:'Gece Terası',use:['bahce', 'balkon'],type:'metal',per:34,depth:45,profile:'40x40 mm',cap:350,fabric:'outdura',frame:0,desc:'Metal profil iskeletli, ölçüye özel üretilen gece terası sedir sistemi.'},
 {id:'yaprak',name:'Yaprak Desen',use:['ic'],type:'ahsap',per:37,depth:50,profile:'30x50 mm',cap:400,fabric:'kadife',frame:2,desc:'Metal profil iskeletli, ölçüye özel üretilen yaprak desen sedir sistemi.'},
 {id:'geo-yan',name:'Geometrik Kafe',use:['ticari'],type:'depolama',per:26,depth:55,profile:'40x40 mm',cap:450,fabric:'leke',frame:0,desc:'Metal profil iskeletli, ölçüye özel üretilen geometrik kafe sedir sistemi.'},
 {id:'bordo',name:'Bordo Kapitone',use:['ticari'],type:'moduler',per:29,depth:45,profile:'30x50 mm',cap:350,fabric:'uv',frame:1,desc:'Metal profil iskeletli, ölçüye özel üretilen bordo kapitone sedir sistemi.'},
 {id:'lounge',name:'Lounge Siyah',use:['ticari'],type:'metal',per:32,depth:50,profile:'40x40 mm',cap:400,fabric:'outdura',frame:0,desc:'Metal profil iskeletli, ölçüye özel üretilen lounge siyah sedir sistemi.'},
 {id:'lounge-2',name:'Lounge Antrasit',use:['ticari'],type:'ahsap',per:35,depth:55,profile:'30x50 mm',cap:450,fabric:'kadife',frame:2,desc:'Metal profil iskeletli, ölçüye özel üretilen lounge antrasit sedir sistemi.'},
 {id:'siyah-mermer',name:'Siyah Mermer',use:['ic'],type:'depolama',per:38,depth:45,profile:'40x40 mm',cap:350,fabric:'leke',frame:0,desc:'Metal profil iskeletli, ölçüye özel üretilen siyah mermer sedir sistemi.'},
 {id:'teras',name:'Teras Takımı',use:['balkon'],type:'moduler',per:27,depth:50,profile:'30x50 mm',cap:400,fabric:'uv',frame:1,desc:'Metal profil iskeletli, ölçüye özel üretilen teras takımı sedir sistemi.'},
 {id:'kafe-gece',name:'Gece Lounge',use:['ticari'],type:'metal',per:30,depth:55,profile:'40x40 mm',cap:450,fabric:'outdura',frame:0,desc:'Metal profil iskeletli, ölçüye özel üretilen gece lounge sedir sistemi.'},
 {id:'kafe-turuncu',name:'Turuncu Kafe',use:['ticari'],type:'ahsap',per:33,depth:45,profile:'30x50 mm',cap:350,fabric:'kadife',frame:2,desc:'Metal profil iskeletli, ölçüye özel üretilen turuncu kafe sedir sistemi.'},
 {id:'geometrik',name:'Geometrik Desen',use:['ticari'],type:'depolama',per:36,depth:50,profile:'40x40 mm',cap:400,fabric:'leke',frame:0,desc:'Metal profil iskeletli, ölçüye özel üretilen geometrik desen sedir sistemi.'}
];

const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
function sofaSVG(frame='#1d1d1d',fab='#cdb99a',o={}){
 const dark=shade(fab,-14),wood='#a9784a';
 return `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sedir">
 <ellipse cx="210" cy="232" rx="185" ry="12" fill="rgba(60,40,20,.18)"/>
 ${[40,100,310,370].map(x=>`<rect x="${x}" y="176" width="9" height="52" fill="${frame}"/>`).join('')}
 <rect x="30" y="168" width="360" height="14" rx="2" fill="${frame}"/>
 <rect x="30" y="100" width="12" height="76" fill="${frame}"/><rect x="378" y="100" width="12" height="76" fill="${frame}"/>
 ${o.wood?`<rect x="22" y="94" width="30" height="10" rx="3" fill="${wood}"/><rect x="368" y="94" width="30" height="10" rx="3" fill="${wood}"/>`:''}
 ${o.bare?'':`<rect x="46" y="62" width="328" height="88" rx="12" fill="${dark}"/>`}
 ${o.pillow?`<rect x="70" y="72" width="62" height="56" rx="10" fill="${shade(fab,12)}" transform="rotate(-6 100 100)"/>`:''}
 ${o.bare?'':`<rect x="42" y="136" width="336" height="38" rx="8" fill="${fab}"/><path d="M42 150h336" stroke="rgba(0,0,0,.07)"/>`}
 ${o.l?`<rect x="300" y="60" width="90" height="120" rx="8" fill="${fab}" opacity=".0"/>`:''}
 ${o.cover?`<rect x="30" y="52" width="360" height="132" rx="14" fill="rgba(255,255,255,.35)" stroke="#fff"/>`:''}
 </svg>`;
}
function shade(h,p){let n=parseInt(h.slice(1),16),r=(n>>16)+p*2.5,g=((n>>8)&255)+p*2.5,b=(n&255)+p*2.5;const c=v=>Math.max(0,Math.min(255,Math.round(v)));return '#'+((1<<24)+(c(r)<<16)+(c(g)<<8)+c(b)).toString(16).slice(1)}
function calc(p,s){ // s: {w,dens,thick,ftype,extras[]}
 const f=s.w/100;
 let t=p.per*s.w;
 t+=({28:0,32:250,35:500}[s.dens]||0)*f;
 t+=({8:0,10:200,12:400,15:700}[s.thick]||0)*f;
 t+=FABRIC_TYPES[s.ftype].add*f;
 const ex={kirlent:350,klapa:900,yagmurluk:650};
 (s.extras||[]).forEach(k=>t+=ex[k]);
 if(s.support) t+=180*f;
 return Math.round(t/10)*10;
}
const money=n=>new Intl.NumberFormat('tr-TR').format(n)+' TL';
function wa(msg){window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,'_blank')}
function toast(m){let t=$('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=m;t.style.display='block';setTimeout(()=>t.style.display='none',3200)}

const IC={
 instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>',
 facebook:'<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>',
 youtube:'<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor"/>',
 tiktok:'<path d="M14 3v11a4 4 0 1 1-4-4"/><path d="M14 3c0 3 2 5 5 5"/>',
 pinterest:'<circle cx="12" cy="12" r="9"/><path d="M11 8c3-1 5 1 4 3.5s-3 2-3 4M11.5 12L10 19"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
 cart:'<path d="M3 4h3l2 12h10l2-8H7"/><circle cx="10" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/>',
 wa:'<path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6z"/><path d="M9 9c0 3 3 6 6 6l1.2-1.4-2-1-1 .6c-1-.4-2-1.4-2.4-2.4l.6-1-1-2z"/>',
 shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5L16 9.5"/>',
 flame:'<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z"/>',
 layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 17.5l9 5 9-5" opacity=".5"/>',
 drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
 ruler:'<rect x="2" y="8" width="20" height="8" rx="1"/><path d="M6 8v4M10 8v3M14 8v4M18 8v3"/>',
 truck:'<path d="M2 6h11v10H2zM13 10h4l3 3v3h-7z"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="16.5" cy="17.5" r="1.8"/>',
 check:'<path d="M5 12.5l4.5 4.5L19 7"/>'
};
const ico=(k,s=20)=>`<svg class="ico" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[k]}</svg>`;
// ---- sepet / sipariş (tarayıcıda saklanır)
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const getCart=()=>store.get('ts_cart',[]);
const cartCount=()=>getCart().reduce((a,i)=>a+i.qty,0);
function addToCart(it){const c=getCart();const x=c.find(y=>y.key===it.key);if(x)x.qty+=1;else c.push({...it,qty:1});store.set('ts_cart',c);badge()}
function badge(){const n=cartCount();$$('.cartn').forEach(e=>{e.textContent=n;e.style.display=n?'flex':'none'})}
const allPh=()=>[...new Set(Object.values(PHOTO).filter(f=>/^scene-/.test(f)&&f!=='scene-kartela.jpg'))];
function galleryFor(p){const m=PHOTO['urun-'+p.id],u=PHOTO['urun-'+p.id+'-uygulama'];const all=allPh();const i=Math.max(0,PRODUCTS.indexOf(p));const extra=[all[(i*3+1)%all.length],all[(i*3+7)%all.length],all[(i*3+13)%all.length]];return [...new Set([m,u,...extra].filter(Boolean))].slice(0,4)}
function layout(){
 const H=`<header class="site"><div class="wrap hrow"><a class="logo" href="index.html" aria-label="Altansedir"><img src="assets/img/logo.png" alt="Altansedir" style="height:74px;width:auto"></a>
 <nav class="main" id="nav">
 <div><a href="sedir-modelleri.html">Sedir Modelleri</a><div class="drop wide"><div><h4>Kullanım Alanına Göre</h4>${Object.entries(USES).map(([k,v])=>`<a href="sedir-modelleri.html?use=${k}">${v}</a>`).join('')}</div><div><h4>İskelet & Tasarım</h4>${Object.entries(TYPES).map(([k,v])=>`<a href="sedir-modelleri.html?type=${k}">${v}</a>`).join('')}</div></div></div>
 <div><a href="minder-kumas.html">Minder & Kumaş</a><div class="drop"><a href="minder-kumas.html#sunger">Sünger Kaliteleri</a><a href="minder-kumas.html#kumas">Kumaş Türleri</a><a href="minder-kumas.html#kartela">Renk Kartelası & Numune</a></div></div>
 <div><a href="ozel-olcu.html">Ücretsiz Keşif & Çizim</a></div>
 <div><a href="kurumsal.html">Kurumsal</a></div>
 <div><a href="iletisim.html">İletişim</a></div></nav>
 <div class="hright"><button class="hbtn" id="sbtn" aria-label="Ara">${ico('search')}</button><a class="hbtn" href="hesabim.html" aria-label="Hesabım" title="Hesabım">${ico('user')}</a><a class="hbtn cartb" href="sepet.html" aria-label="Sepet" title="Sepet">${ico('cart')}<span class="cartn"></span></a><a class="pill hide-m" href="#" onclick="wa('Merhaba, sedir hakkında bilgi almak istiyorum.');return false">WhatsApp</a><button class="burger" onclick="$('#nav').classList.toggle('open')" aria-label="Menü">☰</button></div></div>
 <div class="sbar" id="sbar"><div class="wrap"><form id="sform"><input id="sq" placeholder="Model, kullanım alanı veya renk ara…" autocomplete="off"><button class="btn fill">Ara</button></form><div id="sres"></div></div></div></header>`;
 const F=`<footer class="site"><div class="wrap"><div class="fcols"><div><p class="serif" style="font-size:26px;color:#fff;line-height:1.2">Mekânınıza özel ölçü,<br>metal iskeletli sedirler.</p><p style="margin-top:14px;color:#8d8372">Atölyemizden doğrudan, Türkiye geneli teslimat.</p></div>
 <div><h5>Koleksiyon</h5><a href="sedir-modelleri.html?use=balkon">Balkon & Teras</a><a href="sedir-modelleri.html?use=ticari">Kafe & Otel</a><a href="sedir-modelleri.html?use=l">L Tipi Köşe</a><a href="sedir-modelleri.html?type=depolama">Depolamalı</a></div>
 <div><h5>Atölye</h5><a href="kurumsal.html#hakkimizda">Hakkımızda</a><a href="kurumsal.html#uretim">Üretim</a><a href="kurumsal.html#kargo">Kargo</a><a href="kurumsal.html#sss">SSS</a><a href="minder-kumas.html#kartela">Numune İste</a></div>
 <div><h5>İletişim</h5><a href="tel:+905340883948">0 534 088 39 48</a><a href="mailto:destek@altansedir.com">destek@altansedir.com</a><a href="#" onclick="wa('Merhaba');return false">WhatsApp</a><a href="iletisim.html">Adres</a></div></div>
 <div class="soc" style="margin-top:34px">${Object.entries(SOCIAL).map(([k,u])=>`<a href="${u}" target="_blank" rel="noopener" aria-label="${SOC_LABEL[k]}" title="${SOC_LABEL[k]}">${ico(k,20)}</a>`).join('')}<a href="#" onclick="wa('Merhaba');return false" aria-label="WhatsApp" title="WhatsApp">${ico('wa',20)}</a></div>
 <div class="legal"><a href="yasal.html#kvkk">KVKK</a><a href="yasal.html#gizlilik">Gizlilik</a><a href="yasal.html#cerez">Çerezler</a><a href="yasal.html#mesafeli">Mesafeli Satış Sözleşmesi</a><a href="yasal.html#iade">İade & Cayma</a></div>
 <p style="margin-top:14px;font-size:12px;color:#7d7466">© 2026 Altansedir · Özel ölçü ürünlerde cayma hakkı bulunmamaktadır.</p></div><div class="bigmark">ALTANSEDİR</div></footer>
 <a class="wafloat" href="#" onclick="wa('Merhaba, fiyat almak istiyorum.');return false" aria-label="WhatsApp">${ico('wa',28)}</a>`;
 $('#hdr').outerHTML=H;$('#ftr').outerHTML=F;
 badge();
 const sb=$('#sbar'),sq=$('#sq');
 $('#sbtn').onclick=()=>{sb.classList.toggle('open');if(sb.classList.contains('open'))sq.focus()};
 const norm=s=>s.toLocaleLowerCase('tr').replace(/\s+/g,' ').trim();
 sq.addEventListener('input',()=>{const q=norm(sq.value);if(q.length<2){$('#sres').innerHTML='';return}
  const r=PRODUCTS.filter(p=>norm(p.name+' '+p.use.map(u=>USES[u]).join(' ')+' '+TYPES[p.type]).includes(q)).slice(0,6);
  $('#sres').innerHTML=r.map(p=>`<a href="urun.html?id=${p.id}"><span class="sth" data-photo="urun-${p.id}"></span><span>${p.name}<small>${TYPES[p.type]}</small></span></a>`).join('')||'<p class="note" style="padding:12px 0">Sonuç bulunamadı.</p>'});
 $('#sform').onsubmit=e=>{e.preventDefault();location.href='sedir-modelleri.html?q='+encodeURIComponent(sq.value)};
}
document.addEventListener('DOMContentLoaded',()=>{
 if($('#hdr'))layout();
 $$('.faq').forEach(f=>{});
 $$('.tabs').forEach(t=>t.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
  const root=t.parentElement;$$('button',t).forEach(x=>x.classList.toggle('on',x===b));$$('.pane',root).forEach(p=>p.classList.toggle('on',p.id===b.dataset.t))}));
 const h=location.hash.slice(1);if(h){const b=$(`.tabs button[data-t="${h}"]`);if(b)b.click()}
});
// Genel form -> WhatsApp
function sendForm(e,title){e.preventDefault();const d=new FormData(e.target);let m=`*${title}*\n`;for(const [k,v] of d.entries()){if(v&&!(v instanceof File))m+=`${k}: ${v}\n`}wa(m);toast('Talebiniz WhatsApp üzerinden iletiliyor.');return false}

// Fotoğraf yuvaları: anahtar -> dosya (assets/img). Dosya yoksa illüstrasyon kalır.
const PHOTO={'kesif':'scene-geo-masa.jpg','hak-1':'scene-kirmizi.jpg','hak-2':'scene-kose-mavi.jpg','hak-3':'scene-kilim.jpg','hak-4':'scene-petek.jpg','adim-1':'scene-balkon.jpg','adim-2':'atolye.jpg','adim-3':'scene-gri-set.jpg','adim-4':'scene-geo-yan.jpg','adim-5':'scene-siyah-mermer.jpg','adim-6':'scene-kartela.jpg','adim-7':'scene-kilim.jpg','adim-8':'scene-restoran.jpg','promo-1':'scene-kose-mavi.jpg','promo-2':'scene-kirmizi.jpg','urun-cay-bahcesi':'scene-cay-bahcesi.jpg','urun-cay-bahcesi-uygulama':'scene-kafe-tas.jpg','urun-kafe-tas':'scene-kafe-tas.jpg','urun-kafe-tas-uygulama':'scene-tas-duvar.jpg','urun-tas-duvar':'scene-tas-duvar.jpg','urun-tas-duvar-uygulama':'scene-gece-kafe.jpg','urun-gece-kafe':'scene-gece-kafe.jpg','urun-gece-kafe-uygulama':'scene-geo-masa.jpg','urun-geo-masa':'scene-geo-masa.jpg','urun-geo-masa-uygulama':'scene-deniz.jpg','urun-deniz':'scene-deniz.jpg','urun-deniz-uygulama':'scene-renkli-kirlent.jpg','urun-renkli-kirlent':'scene-renkli-kirlent.jpg','urun-renkli-kirlent-uygulama':'scene-salon-genis.jpg','urun-salon-genis':'scene-salon-genis.jpg','urun-salon-genis-uygulama':'scene-gri-set.jpg','urun-gri-set':'scene-gri-set.jpg','urun-gri-set-uygulama':'scene-restoran.jpg','urun-restoran':'scene-restoran.jpg','urun-restoran-uygulama':'scene-petek.jpg','urun-petek':'scene-petek.jpg','urun-petek-uygulama':'scene-bej-kirlent.jpg','urun-bej-kirlent':'scene-bej-kirlent.jpg','urun-bej-kirlent-uygulama':'scene-gece-pembe.jpg','urun-gece-pembe':'scene-gece-pembe.jpg','urun-gece-pembe-uygulama':'scene-yaprak.jpg','urun-yaprak':'scene-yaprak.jpg','urun-yaprak-uygulama':'scene-geo-yan.jpg','urun-geo-yan':'scene-geo-yan.jpg','urun-geo-yan-uygulama':'scene-bordo.jpg','urun-bordo':'scene-bordo.jpg','urun-bordo-uygulama':'scene-lounge.jpg','urun-lounge':'scene-lounge.jpg','urun-lounge-uygulama':'scene-lounge-2.jpg','urun-lounge-2':'scene-lounge-2.jpg','urun-lounge-2-uygulama':'scene-siyah-mermer.jpg','urun-siyah-mermer':'scene-siyah-mermer.jpg','urun-siyah-mermer-uygulama':'scene-teras.jpg','urun-teras':'scene-teras.jpg','urun-teras-uygulama':'scene-kafe-gece.jpg','urun-kafe-gece':'scene-kafe-gece.jpg','urun-kafe-gece-uygulama':'scene-kafe-turuncu.jpg','urun-kafe-turuncu':'scene-kafe-turuncu.jpg','urun-kafe-turuncu-uygulama':'scene-geometrik.jpg','urun-geometrik':'scene-geometrik.jpg','urun-geometrik-uygulama':'scene-cay-bahcesi.jpg','atolye':'atolye.jpg','hero':'scene-salon-genis.jpg','kartela':'scene-kartela.jpg','urun-teras-slim':'scene-balkon.jpg','urun-bahce-pro':'scene-mavi-teras.jpg','urun-salon-wood':'scene-koltuk.jpg','urun-salon-minimal':'scene-sari-gri.jpg','urun-kafe-heavy':'scene-kirmizi.jpg','urun-kose-l':'scene-kose-mavi.jpg','urun-box-store':'scene-pembe-yesil.jpg','urun-modul-set':'scene-kilim.jpg','urun-teras-slim-uygulama':'scene-gri-set.jpg','urun-bahce-pro-uygulama':'scene-restoran.jpg','urun-salon-wood-uygulama':'scene-petek.jpg','urun-salon-minimal-uygulama':'scene-bej-kirlent.jpg','urun-kafe-heavy-uygulama':'scene-bordo.jpg','urun-kose-l-uygulama':'scene-gece-pembe.jpg','urun-box-store-uygulama':'scene-yaprak.jpg','urun-modul-set-uygulama':'scene-geo-yan.jpg','kategori-balkon':'scene-balkon.jpg','kategori-bahce':'scene-mavi-teras.jpg','kategori-ic':'scene-koltuk.jpg','kategori-ticari':'scene-kirmizi.jpg','kategori-l':'scene-kose-mavi.jpg','referans-1':'scene-cay-bahcesi.jpg','referans-2':'scene-kafe-tas.jpg','referans-3':'scene-tas-duvar.jpg','referans-4':'scene-gece-kafe.jpg','referans-5':'scene-geo-masa.jpg','referans-6':'scene-deniz.jpg','referans-7':'scene-kilim.jpg','referans-8':'scene-renkli-kirlent.jpg'};
function hydrate(root=document){$$('[data-photo]:not([data-ph-done])',root).forEach(el=>{el.dataset.phDone=1;const f=PHOTO[el.dataset.photo];if(!f)return;const im=new Image();
 im.onload=()=>{const cover=/^(hero|scene|atolye)/.test(f);if(el.hasAttribute('data-keep'))$$('.fb',el).forEach(x=>x.remove());else el.innerHTML='';
  if(cover){el.style.padding='0';el.style.background=`${el.dataset.pos||'center'}/cover no-repeat url(${im.src})`}
  else{el.style.padding='8%';el.style.background=`center/contain no-repeat url(${im.src}),linear-gradient(160deg,#efe6d6,#d3c2a6)`;el.style.backgroundOrigin='content-box,border-box'}
  el.classList.add('has-photo')};
 im.src='assets/img/'+f})}
document.addEventListener('DOMContentLoaded',()=>{hydrate();new MutationObserver(()=>hydrate()).observe(document.body,{childList:true,subtree:true})});

document.addEventListener('DOMContentLoaded',badge);
