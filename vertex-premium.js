
/* VERTEX HAMMAMI - PREMIUM V5
   Design, foto e navigazione.
   Prenotazioni originali preservate.
*/
(() => {
  'use strict';

  const booking = document.getElementById('prenota');
  const agenda = document.getElementById('dayPicker');
  const servizi = document.getElementById('servizi');

  if (!booking || !agenda || !servizi) return;

  // Elimina soltanto i vecchi elementi aggiunti.
  document.querySelectorAll(
    '.vertex-premium, .vertex-wait, .vertex-book-now'
  ).forEach(el => el.remove());

  document.getElementById('vertex-v5-style')?.remove();

  // Foto professionali per i trattamenti.
  // Foto originali del salone soltanto in galleria.
  const FOTO = {
    salone: 'vertex-salone.webp',
    bmw: 'vertex-bmw.webp',
    caramelle: 'vertex-caramelle.webp',
    taglio: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&auto=format&fit=crop',
    barba: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900&auto=format&fit=crop',
    viso: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&auto=format&fit=crop',
    relax: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1000&auto=format&fit=crop'
  };

  const css = document.createElement('style');
  css.id = 'vertex-v5-style';
  css.textContent = `
    html { scroll-behavior: smooth; }
    #dayPicker { scroll-margin-top: 125px; }

    .vertex-premium {
      max-width: 1150px;
      margin: 32px auto;
      padding: 0 16px;
      color: #f5e6cb;
    }

    .vertex-premium h2 {
      font-family: Georgia, serif;
      color: #f3d18d;
    }

    .vertex-heading {
      text-align: center;
      font-size: clamp(28px, 5vw, 44px);
      margin: 15px 0 22px;
    }

    .vertex-cards {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 14px;
    }

    .vertex-card {
      background: #15100c;
      border: 1px solid #b58b4a;
      border-radius: 16px;
      overflow: hidden;
      min-width: 0;
    }

    .vertex-card img {
      display: block;
      width: 100%;
      height: 185px;
      object-fit: cover;
      background: #17110b;
    }

    .vertex-card strong {
      display: block;
      text-align: center;
      padding: 14px 8px;
      color: #f0d49c;
      font-size: 15px;
    }

    .vertex-offer {
      display: grid;
      grid-template-columns: 42% 58%;
      overflow: hidden;
      background: linear-gradient(130deg,#251608,#090909);
      border: 1px solid #d9ad68;
      border-radius: 22px;
    }

    .vertex-offer > img {
      width: 100%;
      height: 100%;
      min-height: 340px;
      object-fit: cover;
    }

    .vertex-offer-copy {
      padding: 28px;
      text-align: center;
    }

    .vertex-offer-copy h2 {
      font-size: clamp(29px,5vw,48px);
      margin: 8px 0 18px;
    }

    .vertex-offer-copy p {
      line-height: 1.7;
      color: #f5e8d3;
    }

    .vertex-price {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin: 22px 0;
      flex-wrap: wrap;
    }

    .vertex-price del {
      font-size: 27px;
      color: #baa993;
    }

    .vertex-price strong {
      font: bold 65px Georgia,serif;
      color: #ffdc99;
      white-space: nowrap;
    }

    .vertex-button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 15px 24px;
      border-radius: 14px;
      background: linear-gradient(135deg,#ffe4a4,#d4a14d);
      color: #201407 !important;
      text-decoration: none;
      font-weight: 800;
      min-height: 50px;
    }

    .vertex-family {
      display: grid;
      grid-template-columns: 45% 55%;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid #c59a59;
      background: #18120c;
    }

    .vertex-family img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .vertex-family-copy {
      padding: 25px;
      align-self: center;
      line-height: 1.7;
    }

    .vertex-family-copy h2 {
      font-size: clamp(25px,4vw,38px);
    }

    .vertex-wait {
      border: 1px solid #dab66f;
      background: #1b130b;
      border-radius: 15px;
      text-align: center;
      padding: 20px;
      margin-top: 20px;
    }

    .vertex-wait h3 {color:#f3d18d}

    .vertex-wait a {
      display: inline-block;
      padding: 12px 20px;
      color: #f3d18d;
      border: 1px solid #c9a160;
      border-radius: 10px;
      text-decoration: none;
    }

    @media(max-width:850px) {
      .vertex-cards {
        grid-template-columns: repeat(2,minmax(0,1fr));
        gap: 10px;
      }

      .vertex-card img {height:140px}

      .vertex-offer,
      .vertex-family {
        grid-template-columns: 1fr;
      }

      .vertex-offer > img {
        height: 225px;
        min-height: 0;
      }

      .vertex-offer-copy {padding:22px 15px}
      .vertex-price strong {font-size:59px}
      .vertex-family img {height:230px}

      /* WhatsApp non copre i prezzi */
      a.floating {
        position: static !important;
        inset: auto !important;
        transform: none !important;
        display: table !important;
        max-width: 90% !important;
        width: max-content !important;
        margin: 22px auto !important;
      }
    }
  `;
  document.head.appendChild(css);

  function section(id, title) {
    const el = document.createElement('section');
    el.className = 'vertex-premium';
    el.id = id;
    const h = document.createElement('h2');
    h.className = 'vertex-heading';
    h.textContent = title;
    el.appendChild(h);
    return el;
  }

  function image(src, alt) {
    const el = document.createElement('img');
    el.src = src;
    el.alt = alt;
    el.loading = 'lazy';
    el.onerror = () => { el.style.display = 'none'; };
    return el;
  }

  function card(src, label) {
    const el = document.createElement('div');
    el.className = 'vertex-card';
    el.appendChild(image(src, label));

    const name = document.createElement('strong');
    name.textContent = label;
    el.appendChild(name);
    return el;
  }

  const offer = section('offerte','Offerta speciale dicembre');

  const offerBox = document.createElement('div');
  offerBox.className = 'vertex-offer';
  offerBox.appendChild(image(FOTO.viso,'Trattamento viso premium'));

  const offerText = document.createElement('div');
  offerText.className = 'vertex-offer-copy';
  offerText.innerHTML = `
    <h2>OFFERTA SPECIALE DICEMBRE</h2>
    <p>Taglio, barba, sopracciglia, shampoo,
    scrub viso, maschera calda, asciugamano
    caldo e trattamento finale.</p>
    <div class="vertex-price">
      <del>35 €</del><strong>30 €</strong>
    </div>
    <p>Dal 1° al 31 dicembre 2026.</p>
    <p>Richiesta soggetta a conferma.</p>
    <a href="#dayPicker" class="vertex-button">
      ✂ PRENOTA ORA
    </a>
  `;
  offerBox.appendChild(offerText);
  offer.appendChild(offerBox);

  const treatments = section(
    'trattamenti','Trattamenti premium & relax'
  );

  const treatmentGrid = document.createElement('div');
  treatmentGrid.className = 'vertex-cards';

  [
    [FOTO.taglio,'Taglio professionale'],
    [FOTO.barba,'Barba e rifinitura'],
    [FOTO.viso,'Trattamento viso'],
    [FOTO.relax,'Relax e benessere']
  ].forEach(([src,name]) => {
    treatmentGrid.appendChild(card(src,name));
  });

  treatments.appendChild(treatmentGrid);

  const family = section('famiglia','Per tutta la famiglia');
  const familyBox = document.createElement('div');
  familyBox.className = 'vertex-family';
  familyBox.appendChild(image(FOTO.bmw,'Poltrona BMW per bambini'));

  const familyCopy = document.createElement('div');
  familyCopy.className = 'vertex-family-copy';
  familyCopy.innerHTML = `
    <h2>Un pensiero speciale per tutta la famiglia</h2>
    <p>Acqua, caramelle e liquirizia per i nostri ospiti.</p>
    <p>Per i più piccoli una speciale poltrona BMW,
    per rendere il taglio un momento divertente!</p>
  `;
  familyBox.appendChild(familyCopy);
  family.appendChild(familyBox);

  const gallery = section('galleria','Galleria del salone');
  const galleryGrid = document.createElement('div');
  galleryGrid.className = 'vertex-cards';

  [
    [FOTO.salone,'Il nostro salone'],
    [FOTO.taglio,'Tagli professionali'],
    [FOTO.viso,'Cura del viso'],
    [FOTO.bmw,'BMW per bambini'],
    [FOTO.caramelle,'Acqua e caramelle'],
    [FOTO.relax,'Relax'],
    [FOTO.barba,'Barba'],
    [FOTO.salone,'Le nostre postazioni']
  ].forEach(([src,name]) => {
    galleryGrid.appendChild(card(src,name));
  });

  gallery.appendChild(galleryGrid);

  // Inserisci contenuti, senza alterare la prenotazione.
  servizi.after(offer,treatments,family,gallery);

  // Tutti i link PRENOTA ORA vanno all'agenda.
  function goAgenda() {
    if (typeof window.showStep === 'function') {
      window.showStep(0);
    }

    document.getElementById('prenota')?.removeAttribute('hidden');

    requestAnimationFrame(() => {
      agenda.scrollIntoView({
        behavior:'smooth',
        block:'start'
      });
    });
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;

    const href = a.getAttribute('href') || '';
    const label = (a.textContent || '').trim();

    const isBooking =
      href === '#prenota' ||
      href === '#dayPicker' ||
      (
        href.startsWith('#') &&
        /prenota|appuntamento/i.test(label)
      );

    if (!isBooking) return;

    e.preventDefault();
    goAgenda();
  }, true);

  // Attesa di conferma: contenuto aggiuntivo.
  const feedback = document.getElementById('feedback');
  const status = document.getElementById('send');

  if (feedback && status) {
    let shown = false;

    const observer = new MutationObserver(() => {
      if (shown) return;

      const text = feedback.textContent || '';
      if (!/richiesta registrata.*attesa/i.test(text)) return;

      shown = true;

      const wait = document.createElement('div');
      wait.className = 'vertex-wait';
      wait.innerHTML = `
        <h3>✓ Richiesta inviata con successo!</h3>
        <p>La tua prenotazione è in attesa di conferma.</p>
        <p>Ti avviseremo appena possibile.</p>
        <a href="#offerte">Scopri le nostre offerte</a>
      `;

      feedback.after(wait);
    });

    observer.observe(feedback, {
      childList:true,
      characterData:true,
      subtree:true
    });
  }
})();
