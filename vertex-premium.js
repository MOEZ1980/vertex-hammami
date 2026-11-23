/* VERTEX HAMMAMI — foto professionali AI, nessuna foto reale del salone.
   Nessuna modifica a prenotazioni, Supabase, WhatsApp o Cassa. */
(() => {
  'use strict';
  const booking = document.getElementById('prenota');
  const agenda = document.getElementById('dayPicker');
  const services = document.getElementById('servizi');
  if (!booking || !agenda || !services) return;

  // Rimuovi tutte le precedenti gallerie promozionali, comprese quelle duplicate.
  document.querySelectorAll('.vertex-premium,.vertex-wait,.vertex-book-now,#vertex-offerte,#vertex-galleria')
    .forEach(el => el.remove());
  // La foto principale originale del sito viene sostituita da un ambiente AI.
  document.querySelectorAll('#home img, .hero img').forEach(img => {
    if (img.closest('header') || /logo/i.test(img.alt || '')) return;
    img.src='vertex-hero-pro.webp?v=6';
    img.alt='Ambiente barber lounge - immagine illustrativa AI';
  });
  // Non lasciare foto reali del locale nascoste nel vecchio hero via CSS.
  const style = document.createElement('style');
  style.id='vertex-premium-v6';
  style.textContent=`
    html {scroll-behavior:smooth;scroll-padding-top:115px}
    #dayPicker {scroll-margin-top:145px}
    .vertex-premium{max-width:1180px;margin:36px auto;padding:0 15px;color:#f6e7cc}
    .vertex-premium h2{font-family:Georgia,serif;color:#f3d392}
    .vertex-premium .vt-heading{font-size:clamp(29px,4vw,46px);text-align:center;margin:16px 0 24px}
    .vt-offer{display:grid;grid-template-columns:44% 56%;background:linear-gradient(135deg,#311e0e,#090808);border:1px solid #d2a766;border-radius:18px;overflow:hidden}
    .vt-offer>img{width:100%;height:100%;min-height:370px;object-fit:cover}
    .vt-copy{padding:30px 24px;text-align:center;align-self:center}
    .vt-copy h2{font-size:clamp(30px,4vw,51px);line-height:1.1;margin:0 0 18px}
    .vt-copy p{line-height:1.6;font-size:17px;color:#f0e4d2}
    .vt-price{display:flex;justify-content:center;align-items:center;gap:18px;margin:19px 0;flex-wrap:wrap}
    .vt-price del{font-size:29px;color:#b7a895}
    .vt-price strong{font:700 clamp(52px,7vw,78px) Georgia,serif;color:#ffdb99}
    .vt-book{display:inline-flex;justify-content:center;align-items:center;padding:14px 24px;margin-top:12px;min-height:49px;border-radius:13px;background:linear-gradient(135deg,#ffe5a8,#d6a251);color:#201608!important;text-decoration:none;font-weight:800}
    .vt-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:13px}
    .vt-card{margin:0;overflow:hidden;border:1px solid #b28b50;background:#16110c;border-radius:16px}
    .vt-card img{width:100%;height:196px;display:block;object-fit:cover}
    .vt-card figcaption{text-align:center;padding:13px 8px;color:#f0d5a1;font-weight:700}
    .vt-family{display:grid;grid-template-columns:38% 1fr;align-items:center;background:#1c140d;border:1px solid #b18b4f;border-radius:18px;overflow:hidden}
    .vt-family img{width:100%;height:290px;object-fit:cover}
    .vt-family>div{padding:26px}
    .vt-family h2{font-size:clamp(28px,4vw,41px);line-height:1.18;margin:0 0 13px}
    .vt-family p{font-size:17px;line-height:1.6}
    .vt-wait{margin-top:20px;border:1px solid #c79b58;border-radius:14px;padding:18px;text-align:center;background:#24170b}
    .vt-wait p{color:#d6c7b2}
    #home.hero{background-image:none!important}
    #home.hero img{max-width:100%;object-fit:cover}
    @media(max-width:850px){
      .vt-offer,.vt-family{grid-template-columns:1fr}
      .vt-offer>img{height:240px;min-height:0}
      .vt-copy{padding:23px 17px}
      .vt-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
      .vt-card img{height:146px}
      .vt-family img{height:220px}
      .vt-price strong{font-size:60px}
      a.floating{position:static!important;inset:auto!important;transform:none!important;display:table!important;width:max-content!important;max-width:90%!important;margin:20px auto!important}
    }
  `;
  document.head.append(style);
  const pic=(src,alt)=>{const i=document.createElement('img');i.src=src+'?v=6';i.alt=alt+' - immagine illustrativa AI';i.loading='lazy';return i};
  const sec=(id,title)=>{const el=document.createElement('section');el.className='vertex-premium';el.id=id;const h=document.createElement('h2');h.className='vt-heading';h.textContent=title;el.append(h);return el};
  const book=()=>{const a=document.createElement('a');a.href='#dayPicker';a.className='vt-book';a.textContent='✂ PRENOTA ORA';return a};
  const offer=sec('offerte','');offer.firstChild.remove();
  const o=document.createElement('div');o.className='vt-offer';o.append(pic('vertex-viso-pro.webp','Trattamento premium viso'));
  const copy=document.createElement('div');copy.className='vt-copy';copy.innerHTML='<h2>OFFERTA SPECIALE DICEMBRE</h2><p>Taglio, barba, shampoo, sopracciglia, scrub viso, maschera calda, asciugamano caldo e trattamento finale.</p><div class="vt-price"><del>35 €</del><strong>30 €</strong></div><p>Dal 1° al 31 dicembre 2026 · Prezzo promozionale in salone.</p>';copy.append(book());o.append(copy);offer.append(o);
  const treatments=sec('trattamenti','Trattamenti premium viso & relax');
  const tgrid=document.createElement('div');tgrid.className='vt-grid';
  const gallery=sec('galleria','Galleria dei trattamenti');
  const ggrid=document.createElement('div');ggrid.className='vt-grid';
  const entries=[
   ['vertex-taglio-pro.webp','Taglio professionale'],
   ['vertex-barba-pro.webp','Barba e rifinitura'],
   ['vertex-viso-pro.webp','Pulizia viso e relax'],
   ['vertex-asciugamani-pro.webp','Asciugamano caldo']
  ];
  function card([file,label]){const f=document.createElement('figure');f.className='vt-card';f.append(pic(file,label));const cap=document.createElement('figcaption');cap.textContent=label;f.append(cap);return f}
  entries.forEach(e=>{tgrid.append(card(e));ggrid.append(card(e))});
  treatments.append(tgrid);gallery.append(ggrid);
  const family=sec('famiglia','');family.firstChild.remove();
  const f=document.createElement('div');f.className='vt-family';f.append(pic('vertex-bmw-pro.webp','Poltrona auto per bambini, immagine AI'));
  const fc=document.createElement('div');fc.innerHTML='<h2>Un pensiero speciale per tutta la famiglia</h2><p>Acqua, caramelle e liquirizia per i nostri ospiti. Per i più piccoli, una poltrona BMW dedicata al taglio.</p>';fc.append(book());f.append(fc);family.append(f);
  services.after(offer,treatments,family,gallery);

  // Porta sempre alla zona dell'agenda senza modificare lo stato del booking.
  document.addEventListener('click',e=>{
    const a=e.target.closest('a[href]');if(!a)return;
    const href=a.getAttribute('href');
    if(href!=='#prenota'&&href!=='#dayPicker')return;
    e.preventDefault();
    requestAnimationFrame(()=>{
      const first=booking.querySelector('.wizard-step[data-step="0"]');
      (first&&!first.hidden?agenda:booking).scrollIntoView({behavior:'auto',block:'start'});
    });
  },true);

  const feedback=document.getElementById('feedback');
  if(feedback){let shown=false;
   new MutationObserver(()=>{
     const text=feedback.textContent||'';
     if(shown||!/Richiesta registrata.*attesa/i.test(text))return;
     shown=true;const div=document.createElement('div');div.className='vt-wait';
     div.innerHTML='<h3>Richiesta inviata con successo!</h3><p>La tua prenotazione è in attesa di conferma.</p>';
     const a=document.createElement('a');a.href='#offerte';a.className='vt-book';a.textContent='Scopri le offerte';div.append(a);feedback.after(div);
   }).observe(feedback,{childList:true,subtree:true,characterData:true});
  }
})();
