
const LOTS = [{"id": "par12", "name": "Parque das Árvores • Lote 12", "project": "Parque das Árvores", "area": 300, "dims": "10 x 30 m", "price": 238000, "tag": "entrada inteligente", "taste": "Prático", "details": "Lote com metragem racional, ideal para quem quer iniciar a jornada patrimonial com menor desembolso e boa liquidez futura.", "features": ["300 m²", "Frente funcional", "Vocação residencial", "Boa relação valor/m²"], "thumb": "assets/img/lot-par12-premium.png", "coords": {"lat": -18.72512, "lng": -47.49792}, "arPoints": [{"label": "Portaria", "distance": 95, "bearing": 318}, {"label": "Área verde", "distance": 42, "bearing": 71}, {"label": "Acesso", "distance": 14, "bearing": 23}, {"label": "Lote 12", "distance": 6, "bearing": 0}]}, {"id": "par26", "name": "Parque das Árvores • Lote 26", "project": "Parque das Árvores", "area": 347, "dims": "11,5 x 30 m", "price": 279000, "tag": "boa metragem", "taste": "Equilibrado", "details": "Lote intermediário para quem busca equilíbrio entre área, custo de implantação e flexibilidade de projeto.", "features": ["347 m²", "Frente ampliada", "Projeto térreo possível", "Bom equilíbrio"], "thumb": "assets/img/lot-par26-premium.png", "coords": {"lat": -18.72545, "lng": -47.49735}, "arPoints": [{"label": "Portaria", "distance": 120, "bearing": 309}, {"label": "Praça", "distance": 58, "bearing": 77}, {"label": "Acesso", "distance": 18, "bearing": 25}, {"label": "Lote 26", "distance": 6, "bearing": 0}]}, {"id": "sol45", "name": "Solaris • Lote 45", "project": "Solaris Residencial Resort", "area": 360, "dims": "12 x 30 m", "price": 438000, "tag": "resort living", "taste": "Premium", "details": "Base premium para uma casa de presença, conectada ao conceito de lazer, segurança e experiência residencial elevada.", "features": ["360 m²", "12m de frente", "Condomínio resort", "Perfil premium"], "thumb": "assets/img/lot-sol45-premium.png", "coords": {"lat": -18.73162, "lng": -47.4928}, "arPoints": [{"label": "Clube", "distance": 70, "bearing": 196}, {"label": "Portaria", "distance": 210, "bearing": 312}, {"label": "Lazer", "distance": 25, "bearing": 197}, {"label": "Lote 45", "distance": 6, "bearing": 0}]}, {"id": "sol81", "name": "Solaris • Lote 81", "project": "Solaris Residencial Resort", "area": 420, "dims": "14 x 30 m", "price": 525000, "tag": "frente ampla", "taste": "Especial", "details": "Lote com frente generosa, indicado para projetos mais autorais, fachadas imponentes e melhor implantação de garagem/lazer.", "features": ["420 m²", "14m de frente", "Mais liberdade arquitetônica", "Alto padrão"], "thumb": "assets/img/lot-sol81-premium.png", "coords": {"lat": -18.73218, "lng": -47.49348}, "arPoints": [{"label": "Lazer", "distance": 42, "bearing": 205}, {"label": "Portaria", "distance": 260, "bearing": 320}, {"label": "Boulevard", "distance": 35, "bearing": 88}, {"label": "Lote 81", "distance": 6, "bearing": 0}]}];
const HOMES = [{"id": "compacta", "name": "Casa Compacta Smart", "style": "Entrada premium", "tier": "entrada", "area": 124, "rooms": 3, "suites": 1, "price": 490000, "ideal": "primeira casa com padrão superior", "details": "Modelo eficiente, com boa leitura comercial para quem quer entrar na jornada da casa pronta sem carregar um projeto grande demais.", "features": ["124 m²", "3 quartos", "1 suíte", "2 vagas"], "ext": "assets/img/img-003-490a84c40ff07f65.png", "int": "assets/img/img-004-defd92dc229dfda6.png"}, {"id": "armonia", "name": "Casa Armonia", "style": "Térrea premium", "tier": "premium", "area": 198, "rooms": 3, "suites": 3, "price": 790000, "ideal": "família que quer conforto e praticidade", "details": "Casa térrea com distribuição equilibrada, boa fluidez de uso e apelo para famílias que valorizam conforto sem excesso.", "features": ["198 m²", "3 suítes", "Ambientes integrados", "Perfil familiar"], "ext": "assets/img/img-003-490a84c40ff07f65.png", "int": "assets/img/img-005-3f83fe1450cb2af1.png"}, {"id": "essenza", "name": "Casa Essenza", "style": "Contemporânea", "tier": "premium", "area": 248, "rooms": 4, "suites": 4, "price": 990000, "ideal": "vida social, sofisticação e integração", "details": "Modelo de forte apelo visual, pensado para unir fachada contemporânea, integração social e sensação de casa de alto padrão.", "features": ["248 m²", "4 suítes", "Área gourmet", "Arquitetura contemporânea"], "ext": "assets/img/img-006-1d9abc304d3e4261.png", "int": "assets/img/img-007-ccd7bec2a86b1756.png"}, {"id": "horizonti", "name": "Casa Horizonti", "style": "Alto padrão", "tier": "alto", "area": 312, "rooms": 4, "suites": 4, "price": 1480000, "ideal": "projeto marcante em lote amplo", "details": "Casa com leitura arquitetônica mais forte, adequada para compradores que querem presença, amplitude e maior sofisticação.", "features": ["312 m²", "4 suítes", "Implantação ampla", "Alto padrão"], "ext": "assets/img/img-008-fd44f1d797f665ab.png", "int": "assets/img/img-009-c32ed0c9e12cd012.png"}, {"id": "villa", "name": "Casa Villa Bella", "style": "Clássica sofisticada", "tier": "alto", "area": 340, "rooms": 5, "suites": 4, "price": 1680000, "ideal": "presença, tradição e alto padrão", "details": "Modelo de maior presença e linguagem mais clássica, voltado a famílias que valorizam imponência e acabamento sofisticado.", "features": ["340 m²", "5 quartos", "4 suítes", "Linguagem clássica"], "ext": "assets/img/img-010-ac16c63511a91557.png", "int": "assets/img/img-011-81099445fe09c4fd.png"}];
const ADDONS = [{"id": "solar", "name": "Energia solar", "price": 16900, "tag": "eficiência"}, {"id": "paisagismo", "name": "Paisagismo completo", "price": 9500, "tag": "biofilia"}, {"id": "seguranca", "name": "Automação e segurança", "price": 7200, "tag": "proteção"}, {"id": "gourmet", "name": "Espaço gourmet", "price": 21400, "tag": "convivência"}, {"id": "piscina", "name": "Piscina compacta", "price": 39800, "tag": "lazer"}, {"id": "moveis", "name": "Mobiliário essencial", "price": 57800, "tag": "interiores"}];

const CUSTOM_LOT_STORAGE_KEY = 'fc_registered_lots_v71';

function normalizeStoredLot(lot){
  return {
    id: lot.id || `custom-${Date.now()}`,
    name: lot.name || `${lot.project || 'Empreendimento'} • Lote ${lot.lotNumber || 'novo'}`,
    project: lot.project || 'Empreendimento cadastrado',
    area: Number(lot.area || 0),
    dims: lot.dims || '-',
    price: Number(lot.price || 0),
    tag: lot.tag || 'cadastro próprio',
    taste: lot.taste || 'Novo',
    details: lot.details || 'Lote cadastrado pela equipe.',
    features: Array.isArray(lot.features) ? lot.features : [],
    thumb: lot.thumb || 'assets/img/lot-sol45-premium.png',
    gallery: Array.isArray(lot.gallery) ? lot.gallery : [],
    videos: Array.isArray(lot.videos) ? lot.videos : [],
    coords: lot.coords && lot.coords.lat && lot.coords.lng ? {lat:Number(lot.coords.lat), lng:Number(lot.coords.lng)} : null,
    gpsAccuracy: lot.gpsAccuracy || null,
    source: 'custom',
    createdAt: lot.createdAt || new Date().toISOString(),
    status: lot.status || 'disponível'
  };
}

function getSavedCustomLots(){
  try{
    const raw = JSON.parse(localStorage.getItem(CUSTOM_LOT_STORAGE_KEY) || '[]');
    return Array.isArray(raw) ? raw.map(normalizeStoredLot) : [];
  }catch(e){
    return [];
  }
}

function saveCustomLots(lots){
  localStorage.setItem(CUSTOM_LOT_STORAGE_KEY, JSON.stringify(lots.map(normalizeStoredLot)));
}

function upsertCustomLot(lot){
  const normalized = normalizeStoredLot(lot);
  const saved = getSavedCustomLots();
  const idx = saved.findIndex(item=>item.id === normalized.id);
  if(idx >= 0) saved[idx] = normalized;
  else saved.push(normalized);
  saveCustomLots(saved);
  const liveIdx = LOTS.findIndex(item=>item.id === normalized.id);
  if(liveIdx >= 0) LOTS[liveIdx] = normalized;
  else LOTS.push(normalized);
  return normalized;
}

getSavedCustomLots().forEach(lot=>{
  if(!LOTS.some(item=>item.id===lot.id)) LOTS.push(lot);
});

function makeSvgDataUri(title, subtitle, c1, c2){
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
    <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs>
    <rect width="1200" height="800" fill="url(#g)"/>
    <circle cx="980" cy="140" r="120" fill="rgba(255,255,255,.18)"/>
    <circle cx="180" cy="690" r="160" fill="rgba(255,255,255,.10)"/>
    <rect x="70" y="90" width="1060" height="620" rx="34" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.28)"/>
    <text x="110" y="200" fill="white" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="700">${title}</text>
    <text x="110" y="265" fill="rgba(255,255,255,.82)" font-family="Arial, Helvetica, sans-serif" font-size="28">${subtitle}</text>
  </svg>`;
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}
function lotGallery(l){
  const gallery = Array.isArray(l.gallery) ? l.gallery.filter(Boolean) : [];
  const base = l.thumb || makeSvgDataUri(l.name, 'Vista geral do lote e contexto urbano', '#466a43', '#c2ca8e');
  return [
    ...gallery,
    base,
    makeSvgDataUri(l.project, 'Perspectiva de implantação e frente do lote', '#5f7c4c', '#d6a76e'),
    makeSvgDataUri((l.area || '-') + ' m²', 'Leitura de potencial construtivo e posição', '#2a4e5f', '#7fa5b8')
  ].filter((src, index, arr)=>src && arr.indexOf(src)===index);
}
function homeGallery(h){
  const arr = [];
  if(h.ext) arr.push(h.ext);
  if(h.int) arr.push(h.int);
  arr.push(makeSvgDataUri(h.name, 'Ambiente complementar / conceito do modelo', '#5d4636', '#c79d73'));
  return arr;
}
function renderGallery(images, galleryId='galleryViewport'){
  return `
    <div class="galleryShell">
      <button class="galleryArrow prev" type="button" data-gallery-nav="prev" data-gallery-target="${galleryId}" aria-label="Imagem anterior">‹</button>
      <div class="galleryViewport" id="${galleryId}">
        ${images.map((src,i)=>`<div class="gallerySlide"><img src="${src}" alt="Imagem ${i+1}"></div>`).join('')}
      </div>
      <button class="galleryArrow next" type="button" data-gallery-nav="next" data-gallery-target="${galleryId}" aria-label="Próxima imagem">›</button>
    </div>
  `;
}

const fmt = v => new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(Math.round(v || 0));
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));

const state = {
  lot: LOTS[2],
  home: HOMES[2],
  addons: [],
  mode: 'combo',
  entryMode: 'percent',
  customLotPrice: LOTS[2].price,
  customHomePrice: HOMES[2].price
};


const DEFAULT_FINANCE_SETTINGS = {
  interestMonthly: 0.98,
  correctionIndex: 'IPCA',
  correctionMonthly: 0.35,
  notes: 'Condições estimadas para simulação comercial. Sujeitas à política comercial vigente.'
};

function normalizeFinanceSettings(settings={}){
  const interestMonthly = Math.max(0, Number(settings.interestMonthly ?? DEFAULT_FINANCE_SETTINGS.interestMonthly) || 0);
  const correctionIndex = settings.correctionIndex || DEFAULT_FINANCE_SETTINGS.correctionIndex;
  const correctionMonthly = correctionIndex === 'none'
    ? 0
    : Math.max(0, Number(settings.correctionMonthly ?? DEFAULT_FINANCE_SETTINGS.correctionMonthly) || 0);
  return {
    interestMonthly,
    correctionIndex,
    correctionMonthly,
    notes: settings.notes || DEFAULT_FINANCE_SETTINGS.notes
  };
}

function loadFinanceSettings(){
  try{
    const saved = JSON.parse(localStorage.getItem('fc_finance_settings_v92') || '{}');
    return normalizeFinanceSettings({...DEFAULT_FINANCE_SETTINGS, ...saved});
  }catch(e){
    return normalizeFinanceSettings(DEFAULT_FINANCE_SETTINGS);
  }
}

let financeSettings = loadFinanceSettings();

function saveFinanceSettings(){
  financeSettings = normalizeFinanceSettings(financeSettings);
  localStorage.setItem('fc_finance_settings_v92', JSON.stringify(financeSettings));
}

function financeIndexLabel(index){
  const labels = {
    IPCA:'IPCA',
    INCC:'INCC',
    IGP:'IGP-M',
    CDI:'CDI',
    fixed:'Correção fixa',
    none:'Sem correção',
    custom:'Índice personalizado'
  };
  return labels[index] || index || 'Correção';
}

function pctLabel(value){
  return `${Number(value || 0).toFixed(2).replace('.',',')}%`;
}

function financeRateInfo(mode='combo'){
  const interest = Math.max(0, Number(financeSettings.interestMonthly || 0));
  const correction = financeSettings.correctionIndex === 'none'
    ? 0
    : Math.max(0, Number(financeSettings.correctionMonthly || 0));
  const monthlyRate = (interest + correction) / 100;
  return {
    monthlyRate,
    interestMonthly: interest,
    correctionMonthly: correction,
    interestText: `${pctLabel(interest)} a.m.`,
    correctionText: financeSettings.correctionIndex === 'none'
      ? 'Sem correção'
      : `${financeIndexLabel(financeSettings.correctionIndex)} • ${pctLabel(correction)} a.m.`,
    effectiveText: `${pctLabel(interest + correction)} a.m.`,
    notes: financeSettings.notes || ''
  };
}

function updateFinanceCorrectionInputState(){
  const index = $('#financeCorrectionIndex')?.value;
  const input = $('#financeCorrectionMonthly');
  if(!input) return;
  const disabled = index === 'none';
  input.disabled = disabled;
  if(disabled) input.value = 0;
}


const ADMIN_FINANCE_PASSWORD = '1234';

function requestFinanceSettingsAccess(){
  const password = window.prompt('Digite a senha de administrador para configurar juros e correção:', '');
  if(password === null) return;
  if(String(password).trim() !== ADMIN_FINANCE_PASSWORD){
    toast('Senha inválida. Acesso não autorizado.');
    return;
  }
  openFinanceSettingsModal();
}

function openFinanceSettingsModal(){
  const s = normalizeFinanceSettings(financeSettings);
  openModal(`
    <div class="modalHead">
      <div>
        <span class="tag">Condições financeiras</span>
        <h2>Juros remuneratórios e índice de correção</h2>
        <p class="muted">Cadastre os parâmetros que serão aplicados na parcela estimada do simulador financeiro.</p>
      </div>
      <button class="btn light small" data-close-modal>Fechar</button>
    </div>
    <div class="modalBody">
      <div class="financeConfigSummary">
        <b>Taxa mensal considerada: ${pctLabel(s.interestMonthly + (s.correctionIndex === 'none' ? 0 : s.correctionMonthly))} a.m.</b>
        <p>Esta taxa soma os juros remuneratórios e a correção mensal estimada. O resultado é usado para calcular a parcela em PRICE ou SAC.</p>
      </div>

      <div class="financeConfigGrid">
        <div class="modalField">
          <label>Juros remuneratórios (% a.m.)</label>
          <input type="number" id="financeInterestMonthly" step="0.01" min="0" value="${s.interestMonthly}">
        </div>
        <div class="modalField">
          <label>Índice de correção</label>
          <select id="financeCorrectionIndex">
            <option value="IPCA" ${s.correctionIndex==='IPCA'?'selected':''}>IPCA</option>
            <option value="INCC" ${s.correctionIndex==='INCC'?'selected':''}>INCC</option>
            <option value="IGP" ${s.correctionIndex==='IGP'?'selected':''}>IGP-M</option>
            <option value="CDI" ${s.correctionIndex==='CDI'?'selected':''}>CDI</option>
            <option value="fixed" ${s.correctionIndex==='fixed'?'selected':''}>Correção fixa</option>
            <option value="custom" ${s.correctionIndex==='custom'?'selected':''}>Índice personalizado</option>
            <option value="none" ${s.correctionIndex==='none'?'selected':''}>Sem correção</option>
          </select>
        </div>
        <div class="modalField">
          <label>Correção estimada (% a.m.)</label>
          <input type="number" id="financeCorrectionMonthly" step="0.01" min="0" value="${s.correctionMonthly}">
        </div>
        <div class="modalField">
          <label>Aplicação no simulador</label>
          <input type="text" value="Somada à taxa mensal da simulação" readonly>
        </div>
        <div class="modalField full">
          <label>Observação / política comercial</label>
          <textarea id="financeNotes" placeholder="Ex.: Condições sujeitas à aprovação comercial.">${s.notes || ''}</textarea>
        </div>
      </div>

      <div class="financeConfigHelp">
        <b>Importante:</b> esta configuração altera a parcela estimada do simulador. Ela não representa aprovação de crédito nem proposta definitiva.
      </div>

      <div class="actions">
        <button class="btn primary" id="saveFinanceSettings" type="button">Salvar condições</button>
        <button class="btn light" id="resetFinanceSettings" type="button">Restaurar padrão</button>
        <button class="btn primary" data-close-modal type="button">Cancelar</button>
      </div>
    </div>
  `);
  updateFinanceCorrectionInputState();
}

function saveFinanceSettingsFromModal(){
  financeSettings = normalizeFinanceSettings({
    interestMonthly: Number($('#financeInterestMonthly')?.value || 0),
    correctionIndex: $('#financeCorrectionIndex')?.value || 'IPCA',
    correctionMonthly: Number($('#financeCorrectionMonthly')?.value || 0),
    notes: $('#financeNotes')?.value || ''
  });
  saveFinanceSettings();
  closeModal();
  renderTray();
  toast('Condições financeiras salvas e aplicadas à simulação.');
}

function resetFinanceSettingsFromModal(){
  financeSettings = normalizeFinanceSettings(DEFAULT_FINANCE_SETTINGS);
  saveFinanceSettings();
  closeModal();
  renderTray();
  toast('Condições financeiras restauradas.');
}


const comboSelections = {};

function resolveComboChoice(index, combos = getSuggestedCombos()){
  const base = combos[Number(index)] || combos[0];
  const saved = comboSelections[index] || {};
  const availableLots = typeof filteredComboLots === 'function' ? filteredComboLots() : LOTS;
  const lot = availableLots.find(item => item.id === saved.lotId) || availableLots.find(item => item.id === base.lot.id) || availableLots[0] || base.lot;
  const home = HOMES.find(item => item.id === saved.homeId) || base.home;
  comboSelections[index] = { lotId: lot.id, homeId: home.id };
  return { base, lot, home };
}

function applyComboChoice(index,{scroll=true,toastMessage='Combo configurado e enviado para a simulação.'} = {}){
  const { lot, home } = resolveComboChoice(index);
  state.lot = lot;
  state.home = home;
  state.customLotPrice = lot.price;
  state.customHomePrice = home.price;
  state.mode = 'combo';
  if($('#buyMode')) $('#buyMode').value = 'combo';
  syncPriceInputs();
  renderAll();
  if(toastMessage) toast(toastMessage);
  if(scroll) document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'});
}

function toast(text){
  const el = $('#toast');
  el.textContent = text;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),2200);
}

function activateJourney(mode){
  const labels = { lot:'Somente lote', home:'Somente casa', combo:'Lote + casa', future:'Lote agora + casa depois' };
  const targets = { lot:'#lotes', home:'#casas', combo:'#combos', future:'#bandeja' };
  state.mode = mode;
  if($('#buyMode')) $('#buyMode').value = mode;
  syncPriceInputs();
  renderAll();
  toast(labels[mode] + ' selecionado.');
  const target = document.querySelector(targets[mode]);
  if(target) target.scrollIntoView({behavior:'smooth'});
}

function syncPriceInputs(){
  if($('#lotPriceInput')) $('#lotPriceInput').value = Math.round(state.customLotPrice || state.lot?.price || 0);
  if($('#homePriceInput')) $('#homePriceInput').value = Math.round(state.customHomePrice || state.home?.price || 0);
  const mode = $('#buyMode')?.value || state.mode;
  if(mode === 'lot' && $('#homePriceInput')) $('#homePriceInput').value = 0;
  if(mode === 'home' && $('#lotPriceInput')) $('#lotPriceInput').value = 0;
}

function getProjectLogo(project){
  if((project||'').toLowerCase().includes('solaris')){
    return `<span class="projectLogo solaris"><img src="assets/img/img-012-b433f95ad146a0f7.png" alt="Solaris Residencial Resort"></span>`;
  }
  return '';
}

function renderLots(filter='all'){
  $('#lotGrid').innerHTML = LOTS.filter(l => filter === 'all' || l.project === filter).map(l => `
    <article class="menuCard ${state.lot?.id === l.id ? 'selected' : ''}">
      <div class="menuTop">
        <img class="lotThumb" src="${l.thumb}" alt="${l.name}">
        <div class="lotShade"></div>
        <div class="lotLabel"><span class="chip">${l.project}</span><span class="title">${l.name}</span></div>
        <span class="area">${l.area} m²</span>
      </div>
      <div class="body">
        <span class="tag">${l.taste} • ${l.tag}</span>${l.source === "custom" ? `<span class="registerBadge">Cadastro interno</span>` : ""}
        <h3>${l.name}</h3>
        <div class="specs"><span>${l.dims}</span><span>${l.project}</span></div>
        <div class="price">${fmt(l.price)}</div>
        <p class="muted">${l.details}</p>
        <div class="cardActions">
          <button class="btn primary small" data-detail-lot="${l.id}">Detalhes</button>
          <button class="btn primary small" data-house-sim-lot="${l.id}">Gerar imagens por IA</button>
          <button class="btn primary small" data-sim-lot="${l.id}">Simular valor</button>
          <button class="btn primary small" data-combo-lot="${l.id}">Usar no combo</button>
        </div>
      </div>
    </article>
  `).join('');
  $$('[data-detail-lot]').forEach(btn => btn.onclick = () => openLotDetails(btn.dataset.detailLot));
  $$('[data-sim-lot]').forEach(btn => btn.onclick = () => {
    state.lot = LOTS.find(l => l.id === btn.dataset.simLot);
    state.customLotPrice = state.lot.price;
    state.mode = 'lot';
    $('#buyMode').value = 'lot';
    syncPriceInputs();
    renderAll();
    toast('Lote selecionado para simular valor.');
    document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'});
  });
  $$('[data-house-sim-lot]').forEach(btn => btn.onclick = () => openHouseSimulation(btn.dataset.houseSimLot));
  $$('[data-combo-lot]').forEach(btn => btn.onclick = () => {
    state.lot = LOTS.find(l => l.id === btn.dataset.comboLot);
    state.customLotPrice = state.lot.price;
    state.mode = 'combo';
    $('#buyMode').value = 'combo';
    syncPriceInputs();
    renderAll();
    toast('Lote adicionado ao combo.');
    document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'});
  });
}

function renderHomes(filter='all'){
  $('#homeGrid').innerHTML = HOMES.filter(h => filter === 'all' || h.tier === filter).map(h => `
    <article class="menuCard ${state.home?.id === h.id ? 'selected' : ''}">
      <div class="houseImgs"><img src="${h.ext}" alt="${h.name} fachada"><img src="${h.int}" alt="${h.name} interior"></div>
      <div class="body">
        <span class="tag">${h.style}</span>
        <h3>${h.name}</h3>
        <div class="specs"><span>${h.area} m²</span><span>${h.rooms} quartos</span><span>${h.suites} suítes</span></div>
        <p class="muted">Ideal para ${h.ideal}.</p>
        <div class="price">${fmt(h.price)}</div>
        <div class="cardActions">
          <button class="btn primary small" data-detail-home="${h.id}">Detalhes</button>
          <button class="btn primary small" data-sim-home="${h.id}">Simular valor</button>
          <button class="btn dark small" data-combo-home="${h.id}">Usar no combo</button>
        </div>
      </div>
    </article>
  `).join('');
  $$('[data-detail-home]').forEach(btn => btn.onclick = () => openHomeDetails(btn.dataset.detailHome));
  $$('[data-sim-home]').forEach(btn => btn.onclick = () => {
    state.home = HOMES.find(h => h.id === btn.dataset.simHome);
    state.customHomePrice = state.home.price;
    state.mode = 'home';
    $('#buyMode').value = 'home';
    syncPriceInputs();
    renderAll();
    toast('Casa selecionada para simular valor.');
    document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'});
  });
  $$('[data-combo-home]').forEach(btn => btn.onclick = () => {
    state.home = HOMES.find(h => h.id === btn.dataset.comboHome);
    state.customHomePrice = state.home.price;
    state.mode = 'combo';
    $('#buyMode').value = 'combo';
    syncPriceInputs();
    renderAll();
    toast('Casa adicionada ao combo.');
    document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'});
  });
}

function getSuggestedCombos(){
  return [
    {name:'Combo Inteligente', lot:LOTS[0], home:HOMES[0], desc:'Menor desembolso para começar com padrão superior.'},
    {name:'Combo Família Premium', lot:LOTS[2], home:HOMES[2], desc:'Equilíbrio entre resort living, espaço e presença.'},
    {name:'Combo Alto Padrão', lot:LOTS[3], home:HOMES[3], desc:'Lote amplo, casa sofisticada e posicionamento premium.'}
  ];
}

function filteredComboLots(){
  return currentLotFilter === 'all'
    ? LOTS
    : LOTS.filter(item => item.project === currentLotFilter);
}

function ensureComboLotMatchesFilter(index){
  const availableLots = filteredComboLots();
  if(!availableLots.length) return;
  const saved = comboSelections[index] || {};
  const selected = availableLots.find(item => item.id === saved.lotId);
  if(!selected){
    comboSelections[index] = { ...(comboSelections[index] || {}), lotId: availableLots[0].id };
  }
}

function renderCombos(){
  const combos = getSuggestedCombos();
  const availableLots = filteredComboLots();

  $('#comboGrid').innerHTML = combos.map((c,idx) => {
    ensureComboLotMatchesFilter(idx);
    const choice = resolveComboChoice(idx, combos);
    const lot = availableLots.find(item => item.id === choice.lot.id) || availableLots[0] || choice.lot;
    const home = choice.home;

    if(lot && lot.id !== choice.lot.id){
      comboSelections[idx] = { ...(comboSelections[idx] || {}), lotId: lot.id, homeId: home.id };
    }

    return `
    <article class="comboCard">
      <div class="comboPreview">
        <div class="previewBox"><img src="${lot.thumb}" alt="${lot.name}"><b>${lot.area} m²</b><small class="muted">${lot.project}</small></div>
        <div class="plus">+</div>
        <div class="previewBox"><img src="${home.ext}" alt="${home.name}"></div>
      </div>
      <div class="comboPickerGrid">
        <div class="comboPickerField">
          <label>Lote do combo</label>
          <select data-combo-lot-select="${idx}">
            ${availableLots.map(item=>`<option value="${item.id}" ${item.id===lot.id?'selected':''}>${item.name} — ${item.project}</option>`).join('')}
          </select>
        </div>
        <div class="comboPickerField">
          <label>Casa do combo</label>
          <select data-combo-home-select="${idx}">
            ${HOMES.map(item=>`<option value="${item.id}" ${item.id===home.id?'selected':''}>${item.name}</option>`).join('')}
          </select>
        </div>
      </div>
      <span class="tag">Combo sugerido</span>
      <h3>${c.name}</h3>
      <p class="muted">${c.desc}</p>
      <div class="price">${fmt(lot.price + home.price)}</div>
      <div class="cardActions">
        <button class="btn primary" data-combo="${idx}">Escolher combo</button>
        <button class="btn primary" data-combo-details="${idx}">Detalhes</button>
      </div>
    </article>
  `}).join('');

  $$('[data-combo-lot-select]').forEach(sel => sel.onchange = () => {
    const idx = Number(sel.dataset.comboLotSelect);
    comboSelections[idx] = { ...(comboSelections[idx] || {}), lotId: sel.value };
    renderCombos();
  });

  $$('[data-combo-home-select]').forEach(sel => sel.onchange = () => {
    const idx = Number(sel.dataset.comboHomeSelect);
    comboSelections[idx] = { ...(comboSelections[idx] || {}), homeId: sel.value };
    renderCombos();
  });

  $$('[data-combo]').forEach(btn => btn.onclick = () => {
    applyComboChoice(Number(btn.dataset.combo));
  });

  $$('[data-combo-details]').forEach(btn => btn.onclick = () => {
    const idx = Number(btn.dataset.comboDetails);
    ensureComboLotMatchesFilter(idx);
    const choice = resolveComboChoice(idx, combos);
    openComboDetails(idx, choice.lot.id, choice.home.id);
  });
}

function renderAddons(){
  $('#addonGrid').innerHTML = ADDONS.map(a => `
    <div class="addon ${state.addons.some(x=>x.id===a.id) ? 'active' : ''}">
      <div><span class="tag">${a.tag}</span><h3>${a.name}</h3><div class="muted">${fmt(a.price)}</div></div>
      <button class="btn light" data-addon="${a.id}">${state.addons.some(x=>x.id===a.id) ? 'Remover' : 'Adicionar'}</button>
    </div>
  `).join('');
  $$('[data-addon]').forEach(btn => btn.onclick = () => {
    const item = ADDONS.find(a => a.id === btn.dataset.addon);
    const exists = state.addons.some(a => a.id === item.id);
    state.addons = exists ? state.addons.filter(a => a.id !== item.id) : [...state.addons, item];
    renderAll();
    toast(exists ? 'Adicional removido.' : 'Adicional incluído.');
  });
}

function baseTotalWithoutEntry(){
  const mode = $('#buyMode')?.value || state.mode;
  state.mode = mode;
  const addons = state.addons.reduce((sum,a)=>sum+a.price,0);
  const lot = Number($('#lotPriceInput')?.value || state.customLotPrice || state.lot?.price || 0);
  const home = Number($('#homePriceInput')?.value || state.customHomePrice || state.home?.price || 0);
  state.customLotPrice = lot; state.customHomePrice = home;
  let total = 0;
  if(mode === 'lot') total = lot;
  if(mode === 'home') total = home;
  if(mode === 'combo') total = lot + home;
  if(mode === 'future') total = lot + home * 0.15;
  return {mode, addons, lot, home, total: total + addons};
}

function getTotals(changedField=''){
  const mode = $('#buyMode')?.value || state.mode;
  state.mode = mode;

  let lot = Number($('#lotPriceInput')?.value || 0);
  let home = Number($('#homePriceInput')?.value || 0);

  if(mode === 'lot'){
    home = 0;
  } else if(mode === 'home'){
    lot = 0;
  }

  if(mode !== 'home') state.customLotPrice = lot || state.customLotPrice;
  if(mode !== 'lot') state.customHomePrice = home || state.customHomePrice;

  const addons = state.addons.reduce((sum,a)=>sum+a.price,0);
  let total = 0;
  if(mode === 'lot') total = lot;
  if(mode === 'home') total = home;
  if(mode === 'combo') total = lot + home;
  if(mode === 'future') total = lot + home * 0.15;
  total += addons;

  let entryPercent = Number($('#entryPercent')?.value || 0);
  let entryValue = Number($('#entryValue')?.value || 0);

  if(changedField === 'entryValue') {
    entryPercent = total ? (entryValue / total) * 100 : 0;
    $('#entryPercent').value = entryPercent.toFixed(2);
  } else {
    entryValue = total * entryPercent / 100;
    $('#entryValue').value = Math.round(entryValue);
  }

  const installments = Number($('#entryInstallments')?.value || 1);
  const entryInstallment = installments ? entryValue / installments : entryValue;
  const financed = Math.max(total - entryValue,0);
  const term = Number($('#term')?.value || 240);
  const system = $('#system')?.value || 'PRICE';
  const rateInfo = financeRateInfo(mode);
  const r = rateInfo.monthlyRate;
  const baseAmortization = term ? financed / term : financed;
  const payment = system === 'PRICE'
    ? (r > 0 ? financed * (r / (1 - Math.pow(1+r,-term))) : baseAmortization)
    : baseAmortization + financed * r;
  return {mode,addons,lot,home,total,entryPercent,entryValue,installments,entryInstallment,financed,payment,system,term,rateInfo};
}

function renderTray(changedField=''){
  const mode = $('#buyMode')?.value || state.mode;
  state.mode = mode;

  const lotInput = $('#lotPriceInput');
  const homeInput = $('#homePriceInput');

  if(mode === 'lot'){
    lotInput.disabled = false;
    homeInput.disabled = true;
    homeInput.value = 0;
  } else if(mode === 'home'){
    lotInput.disabled = true;
    lotInput.value = 0;
    homeInput.disabled = false;
  } else if(mode === 'future'){
    lotInput.disabled = false;
    homeInput.disabled = false;
    if(!Number(lotInput.value) && state.customLotPrice) lotInput.value = Math.round(state.customLotPrice);
    if(!Number(homeInput.value) && state.customHomePrice) homeInput.value = Math.round(state.customHomePrice);
  } else {
    lotInput.disabled = false;
    homeInput.disabled = false;
    if(!Number(lotInput.value) && state.customLotPrice) lotInput.value = Math.round(state.customLotPrice);
    if(!Number(homeInput.value) && state.customHomePrice) homeInput.value = Math.round(state.customHomePrice);
  }

  const t = getTotals(changedField);

  $('#trayLot').textContent = state.lot ? state.lot.name : 'Nenhum';
  $('#trayHome').textContent = state.home ? state.home.name : 'Nenhuma';
  $('#trayAddons').textContent = fmt(t.addons);
  $('#trayTotal').textContent = fmt(t.total);
  $('#resEntry').textContent = fmt(t.entryValue);
  $('#resEntryInstallment').textContent = `${t.installments}X no cartão de ${fmt(t.entryInstallment)}`;
  if($('#entryInstallmentField')) $('#entryInstallmentField').value = fmt(t.entryInstallment);
  $('#resFinanced').textContent = fmt(t.financed);
  $('#resPayment').textContent = fmt(t.payment);
  $('#resRatio').textContent = t.entryPercent.toFixed(1).replace('.',',') + '%';
  $('#resSystem').textContent = t.system;
  if($('#resInterestRate')) $('#resInterestRate').textContent = t.rateInfo?.interestText || '-';
  if($('#resCorrectionIndex')) $('#resCorrectionIndex').textContent = t.rateInfo?.correctionText || '-';

  const healthy = t.entryPercent >= 30;
  const attention = t.entryPercent >= 20 && t.entryPercent < 30;
  $('#diagnosisTitle').textContent = healthy ? 'Entrada forte para avançar.' : attention ? 'Composição equilibrada para negociar.' : 'Vale reforçar a entrada ou ajustar a composição.';
  $('#diagnosisText').textContent = healthy ? 'A entrada está robusta e cria uma base confortável para a conversa comercial.' : attention ? 'A configuração está funcional e pode ser refinada no prazo, na entrada ou na composição do combo.' : 'Uma boa alternativa é elevar a entrada, reduzir a composição ou considerar lote agora + casa em etapa seguinte.';
}

function renderAll(){
  renderLots(currentLotFilter); renderHomes(currentHomeFilter); renderCombos(); renderAddons(); renderTray();
}

function openComboDetails(index, selectedLotId='', selectedHomeId=''){
  const combos = getSuggestedCombos();
  const base = combos[Number(index)] || combos[0];
  const lot = LOTS.find(x=>x.id === (selectedLotId || base.lot.id)) || base.lot;
  const home = HOMES.find(x=>x.id === (selectedHomeId || base.home.id)) || base.home;
  comboSelections[index] = { lotId: lot.id, homeId: home.id };
  const lotImages = lotGallery(lot);
  const homeImages = homeGallery(home);
  const total = lot.price + home.price;
  openModal(`
    <div class="modalHead"><div><span class="tag">Combo sugerido</span><h2>${base.name}</h2><p class="muted">${base.desc}</p></div><button class="btn light small" data-close-modal>Fechar</button></div>
    <div class="modalBody">
      <div class="comboDetailGrid">
        <section class="comboDetailBlock">
          <div class="comboDetailTop">
            <div>
              <span class="tag">Lote</span>
              <h3>${lot.name}</h3>
              <div class="modalBrand">${getProjectLogo(lot.project)}</div>
            </div>
            <select class="miniSelect" id="comboLotSelect" data-combo-detail-select="lot" data-combo-index="${index}">
              ${LOTS.map(item=>`<option value="${item.id}" ${item.id===lot.id?'selected':''}>${item.name} — ${item.project}</option>`).join('')}
            </select>
          </div>
          ${renderGallery(lotImages,'comboLotGallery')}
          <p class="muted">${lot.details}</p>
          <div class="comboMeta"><span>${lot.area} m²</span><span>${lot.dims}</span><span>${fmt(lot.price)}</span></div>
          <div class="featureList">${lot.features.map(f=>`<span>${f}</span>`).join('')}</div>
        </section>
        <section class="comboDetailBlock">
          <div class="comboDetailTop">
            <div>
              <span class="tag">Casa</span>
              <h3>${home.name}</h3>
              <p class="muted">${home.style}</p>
            </div>
            <select class="miniSelect" id="comboHomeSelect" data-combo-detail-select="home" data-combo-index="${index}">
              ${HOMES.map(item=>`<option value="${item.id}" ${item.id===home.id?'selected':''}>${item.name}</option>`).join('')}
            </select>
          </div>
          ${renderGallery(homeImages,'comboHomeGallery')}
          <p class="muted">${home.details}</p>
          <div class="comboMeta"><span>${home.area} m²</span><span>${home.style}</span><span>${fmt(home.price)}</span></div>
          <div class="featureList">${home.features.map(f=>`<span>${f}</span>`).join('')}</div>
        </section>
      </div>
      <div class="comboDetailActions">
        <p><b>Total estimado do combo:</b> ${fmt(total)}</p>
        <div class="actions"><button class="btn primary" data-apply-combo-details="${index}">Atualizar combo e abrir simulação</button><button class="btn primary" data-close-modal>Fechar</button></div>
      </div>
    </div>
  `);
}

function openLotDetails(id){
  const l = LOTS.find(x=>x.id===id);
  const images = lotGallery(l);
  const hasCoords = !!(l?.coords && Number.isFinite(Number(l.coords.lat)) && Number.isFinite(Number(l.coords.lng)));
  const videoList = Array.isArray(l.videos) && l.videos.length
    ? `<div class="lotMediaList"><b>Vídeos cadastrados</b>${l.videos.map(v=>`<span><span>${v.name || 'Vídeo cadastrado'}</span><small>${v.type || 'vídeo'}</small></span>`).join('')}</div>`
    : '';
  const gpsBlock = hasCoords
    ? `<div class="pendingGps"><b>GPS cadastrado:</b> ${Number(l.coords.lat).toFixed(6)}, ${Number(l.coords.lng).toFixed(6)} ${l.gpsAccuracy ? `· precisão ± ${Math.round(l.gpsAccuracy)} m` : ''}<br><button class="btn light small" data-edit-gps-lot="${l.id}" style="margin-top:10px">Editar GPS</button></div>`
    : `<div class="pendingGps"><b>Coordenadas pendentes.</b> Este lote ainda não possui posição de GPS. Cadastre a posição usando o GPS do aparelho para liberar rota precisa e AR georreferenciado.<br><button class="btn primary small" data-edit-gps-lot="${l.id}" style="margin-top:10px">Cadastrar posição via GPS</button></div>`;
  openModal(`
    <div class="modalHead"><div><span class="tag">${l.project}</span><h2>${l.name}</h2><div class="modalBrand">${getProjectLogo(l.project)}</div><p class="muted">${l.details}</p></div><button class="btn light small" data-close-modal>Fechar</button></div>
    <div class="modalBody">
      ${renderGallery(images,'lotGalleryViewport')}
      <div class="featureList">${l.features.map(f=>`<span>${f}</span>`).join('')}</div>
      <p><b>Valor estimado:</b> ${fmt(l.price)}<br><b>Dimensões:</b> ${l.dims}<br><b>Perfil:</b> ${l.taste} • ${l.tag}</p>
      ${gpsBlock}
      ${videoList}
      <div class="arHelpBox"><b>Recursos Futura Casa v7.2:</b> use <b>Rota</b> para abrir o Google Maps, <b>Realidade aumentada</b> para visualizar referências do lote em campo, ou edite a posição GPS quando necessário.</div>
      <div class="actions">
        <button class="btn primary" type="button" data-route-lot="${l.id}">Rota</button>
        <button class="btn primary" type="button" data-ar-lot="${l.id}">Realidade aumentada</button>
        <button class="btn primary" data-modal-sim-lot="${l.id}">Simular valor</button>
        <button class="btn primary" data-modal-combo-lot="${l.id}">Usar no combo</button>
      </div>
    </div>
  `);
}

function openHomeDetails(id){
  const h = HOMES.find(x=>x.id===id);
  const images = homeGallery(h);
  openModal(`
    <div class="modalHead"><div><span class="tag">${h.style}</span><h2>${h.name}</h2><p class="muted">${h.details}</p></div><button class="btn light small" data-close-modal>Fechar</button></div>
    <div class="modalBody">
      ${renderGallery(images,'lotGalleryViewport')}
      <div class="featureList">${h.features.map(f=>`<span>${f}</span>`).join('')}</div>
      <p><b>Valor estimado:</b> ${fmt(h.price)}<br><b>Perfil:</b> ${h.ideal}</p>
      <div class="actions"><button class="btn primary" data-modal-sim-home="${h.id}">Simular valor</button><button class="btn primary" data-modal-combo-home="${h.id}">Usar no combo</button></div>
    </div>
  `);
}

function openModal(content, extraClass=''){
  const modal = $('#detailModal');
  modal.classList.toggle('fieldMode', String(extraClass).includes('fieldModalCard'));
  modal.innerHTML = `<div class="modalCard ${extraClass}">${content}</div>`;
  modal.classList.add('show');
  bindModalActions();
}

function closeModal(){ stopARResources(); const modal=$('#detailModal'); modal.classList.remove('show','fieldMode'); modal.innerHTML=''; }

function bindModalActions(){
  $$('[data-close-modal]').forEach(b=>b.onclick=closeModal);
  $$('[data-modal-sim-lot]').forEach(b=>b.onclick=()=>{ state.lot=LOTS.find(l=>l.id===b.dataset.modalSimLot); state.customLotPrice=state.lot.price; $('#buyMode').value='lot'; closeModal(); syncPriceInputs(); renderAll(); document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'}); });
  $$('[data-modal-combo-lot]').forEach(b=>b.onclick=()=>{ state.lot=LOTS.find(l=>l.id===b.dataset.modalComboLot); state.customLotPrice=state.lot.price; $('#buyMode').value='combo'; closeModal(); syncPriceInputs(); renderAll(); document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'}); });
  $$('[data-modal-sim-home]').forEach(b=>b.onclick=()=>{ state.home=HOMES.find(h=>h.id===b.dataset.modalSimHome); state.customHomePrice=state.home.price; $('#buyMode').value='home'; closeModal(); syncPriceInputs(); renderAll(); document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'}); });
  $$('[data-modal-combo-home]').forEach(b=>b.onclick=()=>{ state.home=HOMES.find(h=>h.id===b.dataset.modalComboHome); state.customHomePrice=state.home.price; $('#buyMode').value='combo'; closeModal(); syncPriceInputs(); renderAll(); document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'}); });
  $$('[data-gallery-nav]').forEach(btn=>btn.onclick=()=>{
    const targetId = btn.dataset.galleryTarget || 'galleryViewport';
    const viewport = document.getElementById(targetId);
    if(!viewport) return;
    const step = viewport.clientWidth + 12;
    viewport.scrollBy({left: btn.dataset.galleryNav === 'next' ? step : -step, behavior:'smooth'});
  });
  $$('[data-combo-detail-select]').forEach(sel=>sel.onchange=()=>{
    const comboIndex = Number(sel.dataset.comboIndex);
    const lotId = document.getElementById('comboLotSelect')?.value || '';
    const homeId = document.getElementById('comboHomeSelect')?.value || '';
    comboSelections[comboIndex] = { lotId, homeId };
    openComboDetails(comboIndex, lotId, homeId);
  });
  $$('[data-apply-combo-details]').forEach(btn=>btn.onclick=()=>{
    const comboIndex = Number(btn.dataset.applyComboDetails);
    const lotId = document.getElementById('comboLotSelect')?.value;
    const homeId = document.getElementById('comboHomeSelect')?.value;
    comboSelections[comboIndex] = { lotId, homeId };
    closeModal();
    applyComboChoice(comboIndex,{scroll:true,toastMessage:'Combo atualizado e enviado para a simulação.'});
  });
  $$('[data-route-lot]').forEach(btn=>btn.onclick=()=>openRouteToLot(btn.dataset.routeLot));
  $$('[data-ar-lot]').forEach(btn=>btn.onclick=()=>openARView(btn.dataset.arLot));
  if($('#captureLotGps')) $('#captureLotGps').onclick = ()=>captureGpsInto('#lotLat','#lotLng','#lotGpsStatus');
  if($('#lotPhotos')) $('#lotPhotos').onchange = handlePhotoPreview;
  if($('#lotVideos')) $('#lotVideos').onchange = handleVideoPreview;
  if($('#saveRegisteredLot')) $('#saveRegisteredLot').onclick = saveRegisteredLot;
  if($('#registerAnotherLot')) $('#registerAnotherLot').onclick = openLotRegistrationModal;
  if($('#captureEditGps')) $('#captureEditGps').onclick = ()=>captureGpsInto('#editLotLat','#editLotLng','#editGpsStatus');
  $$('[data-edit-gps-lot]').forEach(btn=>btn.onclick=()=>openGpsEditModal(btn.dataset.editGpsLot));
  $$('[data-save-gps-lot]').forEach(btn=>btn.onclick=()=>saveGpsForLot(btn.dataset.saveGpsLot));
  if($('#financeCorrectionIndex')) $('#financeCorrectionIndex').onchange = updateFinanceCorrectionInputState;
  if($('#saveFinanceSettings')) $('#saveFinanceSettings').onclick = saveFinanceSettingsFromModal;
  if($('#resetFinanceSettings')) $('#resetFinanceSettings').onclick = resetFinanceSettingsFromModal;
  if($('#scheduleSubmit')) $('#scheduleSubmit').onclick = submitSchedule;
}



let arCameraStream = null;
let arWatchId = null;
let arOrientationHandler = null;
let fieldCurrentHeading = null;
let fieldCurrentPoints = [];


function buildPseudoArPoints(base){
  const number = base.number || (String(base.name || '').match(/Lote\s*([0-9]+)/i)?.[1]) || '--';
  return [
    {label:`Lote ${number}`, distance:6, bearing:0},
    {label:'Portaria', distance:160, bearing:320},
    {label:'Área verde', distance:48, bearing:72},
    {label:'Acesso', distance:22, bearing:24}
  ];
}

function resolveSelectableLot(id){
  const direct = (typeof LOTS !== 'undefined' ? LOTS.find(x=>x.id===id) : null);
  if(direct) return direct;
  const fromMap = (typeof MAP_LOTS !== 'undefined' ? MAP_LOTS.find(x=>x.id===id) : null);
  if(!fromMap) return null;
  return {
    id: fromMap.id,
    name: fromMap.name,
    project: fromMap.project,
    area: fromMap.area,
    dims: fromMap.dims,
    price: fromMap.price,
    tag: fromMap.tag || mapStatusLabel?.(fromMap.status) || 'Mapa',
    taste: fromMap.taste || 'Oferta',
    details: fromMap.details || 'Lote selecionado no mapa convencional.',
    features: [
      `${Math.round(fromMap.area)} m²`,
      fromMap.dims,
      `Quadra ${fromMap.quadra}`,
      mapStatusLabel?.(fromMap.status) || 'Disponibilidade'
    ],
    thumb: (typeof mapImageSrc !== 'undefined' ? mapImageSrc : 'assets/img/solaris-mapa-lotes-clean.png'),
    coords: fromMap.coords,
    number: fromMap.number,
    quadra: fromMap.quadra,
    arPoints: buildPseudoArPoints(fromMap)
  };
}

function pointDisplayName(lot){
  if(!lot) return 'Ponto selecionado';
  if(lot.quadra && lot.number) return `${lot.project || 'Empreendimento'} - Quadra ${lot.quadra} - Lote ${lot.number}`;
  return lot.name || lot.project || 'Ponto selecionado';
}

function lotDestination(lot){
  return lot?.coords && Number.isFinite(Number(lot.coords.lat)) && Number.isFinite(Number(lot.coords.lng))
    ? {lat:Number(lot.coords.lat), lng:Number(lot.coords.lng)}
    : null;
}


function mapsDirectionsUrl(lot, origin=null){
  const dest = lotDestination(lot);
  if(!dest) return '';
  const destinationLabel = `${pointDisplayName(lot)} ${dest.lat},${dest.lng}`;
  const params = new URLSearchParams({
    api: '1',
    destination: destinationLabel,
    travelmode: 'driving'
  });
  if(origin) params.set('origin', `${origin.lat},${origin.lng}`);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}



function openRouteToLot(id){
  const lot = resolveSelectableLot(id);
  if(!lot) return;
  const dest = lotDestination(lot);
  if(!dest){
    toast('Cadastre a posição GPS deste ponto antes de traçar a rota.');
    if(typeof openGpsEditModal === 'function') openGpsEditModal(id);
    return;
  }
  const openUrl = (url) => {
    if(url) window.open(url, '_blank', 'noopener');
  };
  const pointName = pointDisplayName(lot);
  if(!navigator.geolocation){
    openUrl(mapsDirectionsUrl(lot));
    toast(`Abrindo Google Maps para ${pointName}.`);
    return;
  }
  toast(`Autorize sua localização para traçar a rota até ${pointName}.`);
  navigator.geolocation.getCurrentPosition(
    pos => {
      const origin = {lat: pos.coords.latitude, lng: pos.coords.longitude};
      openUrl(mapsDirectionsUrl(lot, origin));
      toast(`Abrindo Google Maps para ${pointName}.`);
    },
    () => {
      openUrl(mapsDirectionsUrl(lot));
      toast(`Não foi possível acessar sua localização. Abrindo rota para ${pointName}.`);
    },
    {enableHighAccuracy:true, timeout:10000, maximumAge:30000}
  );
}

function stopARResources(){
  if(arCameraStream){
    arCameraStream.getTracks().forEach(track=>track.stop());
    arCameraStream = null;
  }
  if(arWatchId !== null && navigator.geolocation){
    navigator.geolocation.clearWatch(arWatchId);
    arWatchId = null;
  }
  if(arOrientationHandler){
    window.removeEventListener('deviceorientationabsolute', arOrientationHandler, true);
    window.removeEventListener('deviceorientation', arOrientationHandler, true);
    arOrientationHandler = null;
  }
  fieldCurrentHeading = null;
  fieldCurrentPoints = [];
}

function metersBetween(a,b){
  const R = 6371000;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(b.lat-a.lat);
  const dLng = toRad(b.lng-a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat/2)**2 + Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLng/2)**2;
  return Math.round(2 * R * Math.atan2(Math.sqrt(h), Math.sqrt(1-h)));
}

function bearingBetween(a,b){
  const toRad = d => d * Math.PI / 180;
  const toDeg = r => r * 180 / Math.PI;
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const dLng = toRad(b.lng-a.lng);
  const y = Math.sin(dLng) * Math.cos(lat2);
  const x = Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLng);
  return Math.round((toDeg(Math.atan2(y,x)) + 360) % 360);
}

function lotsWithCoords(){
  return LOTS.filter(l=>lotDestination(l));
}

function findNearestLot(current){
  return lotsWithCoords()
    .map(lot=>({lot, distance: metersBetween(current, lotDestination(lot)), bearing: bearingBetween(current, lotDestination(lot))}))
    .sort((a,b)=>a.distance-b.distance)[0] || null;
}

function nearestLotPoints(current){
  return lotsWithCoords()
    .map(lot=>({kind:'lot', label: lot.name.replace('Parque das Árvores • ', '').replace('Solaris • ', 'Solaris '), distance: metersBetween(current, lotDestination(lot)), bearing: bearingBetween(current, lotDestination(lot)), id: lot.id}))
    .sort((a,b)=>a.distance-b.distance)
    .slice(0,3);
}

function placePointsFromLot(lot){
  const points = Array.isArray(lot?.arPoints) ? lot.arPoints : [];
  return points
    .filter(p=>!String(p.label || '').toLowerCase().includes('lote'))
    .slice(0,2)
    .map(p=>({kind:'place', label:p.label, distance:p.distance, bearing:p.bearing}));
}

function buildFieldPoints(activeLot,current=null){
  if(current){
    const lots = nearestLotPoints(current);
    const places = placePointsFromLot(activeLot || lots[0]?.lot).slice(0, Math.max(0, 4-lots.length));
    return [...lots, ...places].slice(0,4);
  }
  const fallbackLots = [{kind:'lot', label: activeLot?.name || 'Lote', distance:6, bearing:0}];
  return [...fallbackLots, ...placePointsFromLot(activeLot)].slice(0,4);
}

function pointArrowRotation(p){
  if(fieldCurrentHeading == null || p.bearing == null) return 0;
  return Math.round((((p.bearing - fieldCurrentHeading) % 360) + 360) % 360);
}

function fieldPointHtml(points=[]){
  const finalPoints = points.length ? points : [
    {kind:'place', label:'Portaria', distance:49, bearing:309},
    {kind:'place', label:'Lazer', distance:25, bearing:197},
    {kind:'lot', label:'Lote', distance:6, bearing:0}
  ];
  return finalPoints.slice(0,4).map((p,i)=>`
    <div class="fieldPin ${p.kind === 'lot' ? 'nearLot' : 'placePin'} p${i+1}">
      <div class="fieldPinHead"><span class="fieldPinDir"><span class="fieldPinDirArrow" style="transform:rotate(${pointArrowRotation(p)}deg)">↑</span></span><span>${p.label}</span></div>
      <small>${p.distance} m · ${p.bearing}°</small>
    </div>
  `).join('');
}

function updateFieldPins(points){
  fieldCurrentPoints = points || [];
  const el = $('#fieldPins');
  if(el) el.innerHTML = fieldPointHtml(fieldCurrentPoints);
}

function refreshFieldPinDirections(){
  const arrows = document.querySelectorAll('.fieldPinDirArrow');
  arrows.forEach((arrow, idx)=>{
    const point = fieldCurrentPoints[idx];
    if(!point) return;
    arrow.style.transform = `rotate(${pointArrowRotation(point)}deg)`;
  });
}

function setFieldActiveLot(activeLot, modeLabel='Você está vendo'){
  if(!activeLot) return;
  if($('#fieldStatusLabel')) $('#fieldStatusLabel').textContent = modeLabel;
  if($('#fieldCurrentPoint')) $('#fieldCurrentPoint').textContent = activeLot.name;
  if($('#fieldInfoProduct')) $('#fieldInfoProduct').textContent = `${activeLot.area} m² · ${activeLot.dims}`;
  if($('#fieldInfoValue')) $('#fieldInfoValue').textContent = fmt(activeLot.price);
  const dest = lotDestination(activeLot);
  if(dest && $('#fieldInfoCoords')) $('#fieldInfoCoords').textContent = `${dest.lat.toFixed(5)}, ${dest.lng.toFixed(5)}`;
}

function openARView(id){
  const lot = resolveSelectableLot(id);
  if(!lot) return;
  if(!lotDestination(lot)){
    toast('Cadastre a posição GPS deste ponto antes de usar AR.');
    openGpsEditModal(id);
    return;
  }
  const image = lot.thumb || 'assets/img/lot-sol45-premium.png';
  const coords = lotDestination(lot);
  openModal(`
    <div class="modalBody">
      <div class="fieldShell">
        <div class="fieldStage">
          <video id="fieldVideo" autoplay playsinline muted></video>
          <div class="fieldFallback" id="fieldFallback">
            <img src="${image}" alt="${lot.name}">
          </div>
          <div class="fieldVeil"></div>
          <div class="fieldTop">
            <button class="fieldClose" data-close-modal>×</button>
          </div>
          <div class="fieldCompass">
            <div class="fieldCompassDial"><span>N</span><div class="fieldNeedle" id="fieldNeedle"></div></div>
            <strong id="fieldHeading">--°</strong>
          </div>
          <div id="fieldPins" class="fieldPins">${fieldPointHtml(buildFieldPoints(lot))}</div>
          <div class="fieldStatus">
            <div class="fieldStatusIcon">⌖</div>
            <div class="fieldStatusText"><small class="dynamicLabel" id="fieldStatusLabel">Você está vendo</small><b id="fieldCurrentPoint">${lot.name}</b><span id="fieldAccuracy">Solicitando câmera, bússola e localização...</span></div>
          </div>
        </div>
        <div class="fieldInfo">
          <div class="res"><small>Coordenada do lote</small><b id="fieldInfoCoords">${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}</b></div>
          <div class="res"><small>Produto</small><b id="fieldInfoProduct">${lot.area} m² · ${lot.dims}</b></div>
          <div class="res"><small>Valor</small><b id="fieldInfoValue">${fmt(lot.price)}</b></div>
        </div>
        <div class="fieldActions">
          <button class="btn primary" data-route-lot="${lot.id}">Abrir rota</button>
          <button class="btn primary" data-edit-gps-lot="${lot.id}">Atualizar GPS</button>
          <button class="btn primary" id="fieldCompassPermission">Ativar bússola</button>
          <button class="btn primary" data-close-modal>Fechar</button>
        </div>
      </div>
    </div>
  `, 'fieldModalCard');
  initFieldExperience(lot.id);
}

function initFieldExperience(lotId){
  const lot = LOTS.find(x=>x.id===lotId);
  if(!lot) return;
  setFieldActiveLot(lot, 'Você está vendo');
  updateFieldPins(buildFieldPoints(lot));

  // Ordem v7.5: câmera → bússola → localização.
  // A chamada acontece no mesmo fluxo do clique em “Realidade aumentada”.
  startFieldCamera();
  setupFieldOrientation({autoRequest:true});
  startFieldLocation(lot);
}

function startFieldCamera(){
  const video = $('#fieldVideo');
  const fallback = $('#fieldFallback');
  if(!video || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
    if(fallback) fallback.classList.remove('hidden');
    return;
  }
  navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}}, audio:false})
    .then(stream=>{
      arCameraStream = stream;
      video.srcObject = stream;
      video.play().catch(()=>{});
      if(fallback) fallback.classList.add('hidden');
    })
    .catch(()=>{
      if(fallback) fallback.classList.remove('hidden');
      toast('Câmera não autorizada. Exibindo imagem do lote como prévia.');
    });
}

function startFieldLocation(selectedLot){
  if(!navigator.geolocation){
    $('#fieldAccuracy').textContent = 'GPS indisponível neste navegador.';
    return;
  }
  toast('Depois da câmera e da bússola, autorize sua localização para identificar o lote.');
  arWatchId = navigator.geolocation.watchPosition(
    pos=>{
      const current = {lat: pos.coords.latitude, lng: pos.coords.longitude};
      const accuracy = Math.round(pos.coords.accuracy || 0);
      const nearest = findNearestLot(current);
      const threshold = Math.max(35, accuracy * 1.8);
      const activeLot = nearest?.lot || selectedLot;
      const inside = nearest && nearest.distance <= threshold;
      setFieldActiveLot(activeLot, inside ? 'Você está em' : 'Lote mais próximo');
      updateFieldPins(buildFieldPoints(activeLot, current));
      refreshFieldPinDirections();
      if($('#fieldAccuracy')){
        const dist = nearest ? nearest.distance : null;
        $('#fieldAccuracy').textContent = dist !== null
          ? `${dist} m do lote · GPS ± ${accuracy} m · atualização em tempo real`
          : `GPS ± ${accuracy} m · atualização em tempo real`;
      }
    },
    ()=>{
      $('#fieldAccuracy').textContent = 'Permita localização para identificar o lote em tempo real.';
      updateFieldPins(buildFieldPoints(selectedLot));
      refreshFieldPinDirections();
    },
    {enableHighAccuracy:true, maximumAge:2500, timeout:10000}
  );
}

function updateFieldHeading(heading){
  if(heading == null || Number.isNaN(heading)) return;
  const value = Math.round((heading + 360) % 360);
  fieldCurrentHeading = value;
  const headingEl = $('#fieldHeading');
  const needle = $('#fieldNeedle');
  if(headingEl) headingEl.textContent = `${value}°`;
  if(needle) needle.style.transform = `rotate(${value}deg)`;
  refreshFieldPinDirections();
}

function setupFieldOrientation({autoRequest=false} = {}){
  const button = $('#fieldCompassPermission');
  const handler = (event) => {
    let heading = null;
    if(typeof event.webkitCompassHeading === 'number'){
      heading = event.webkitCompassHeading;
    }else if(typeof event.alpha === 'number'){
      heading = 360 - event.alpha;
    }
    if(heading != null) updateFieldHeading(heading);
  };
  arOrientationHandler = handler;

  let compassActive = false;

  const activateListeners = () => {
    if(compassActive) return;
    compassActive = true;
    window.removeEventListener('deviceorientationabsolute', handler, true);
    window.removeEventListener('deviceorientation', handler, true);
    window.addEventListener('deviceorientationabsolute', handler, true);
    window.addEventListener('deviceorientation', handler, true);
    if(button){
      button.textContent = 'Bússola ativa';
      button.disabled = true;
    }
    toast('Bússola ativada.');
  };

  const requestCompass = async () => {
    if(button){
      button.style.display = 'inline-flex';
      button.textContent = 'Ativando bússola...';
      button.disabled = true;
    }
    try{
      const result = await DeviceOrientationEvent.requestPermission();
      if(result === 'granted'){
        activateListeners();
      }else{
        if(button){
          button.textContent = 'Ativar bússola';
          button.disabled = false;
        }
        toast('Permissão da bússola não autorizada.');
      }
    }catch(e){
      if(button){
        button.textContent = 'Ativar bússola';
        button.disabled = false;
      }
      toast('Toque em “Ativar bússola” para liberar o sensor.');
    }
  };

  if(window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function'){
    if(button){
      button.style.display = 'inline-flex';
      button.onclick = requestCompass;
    }
    if(autoRequest){
      requestCompass();
    }
  }else if(window.DeviceOrientationEvent){
    if(button) button.style.display = 'none';
    activateListeners();
  }else{
    if(button){
      button.style.display = 'none';
    }
    const headingEl = $('#fieldHeading');
    if(headingEl) headingEl.textContent = 'sem sensor';
  }
}
function defaultLotThumb(project=''){
  return project.toLowerCase().includes('solaris')
    ? 'assets/img/lot-sol45-premium.png'
    : 'assets/img/lot-par26-premium.png';
}

function fileToCompressedImage(file, maxWidth=1280, quality=.78){
  return new Promise((resolve)=>{
    if(!file || !file.type.startsWith('image/')) return resolve(null);
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = () => resolve(null);
      img.src = reader.result;
    };
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}

function openLotRegistrationModal(){
  openModal(`
    <div class="modalHead"><div><span class="tag">v7.1 Cadastro</span><h2>Cadastrar novo lote</h2><p class="muted">Cadastre o lote, capture a posição via GPS e anexe fotos ou vídeos do local.</p></div><button class="btn light small" data-close-modal>Fechar</button></div>
    <div class="modalBody">
      <p class="registerIntro">Este cadastro fica salvo neste navegador para o protótipo. Em produção, estes dados devem ser enviados para o backoffice e banco de dados.</p>
      <div class="modalFormGrid">
        <div class="modalField"><label>Empreendimento</label><input type="text" id="lotProject" placeholder="Ex.: Solaris Residencial Resort"></div>
        <div class="modalField"><label>Número / nome do lote</label><input type="text" id="lotNumber" placeholder="Ex.: 104"></div>
        <div class="modalField"><label>Área em m²</label><input type="number" id="lotArea" placeholder="Ex.: 360"></div>
        <div class="modalField"><label>Dimensões</label><input type="text" id="lotDims" placeholder="Ex.: 12 x 30 m"></div>
        <div class="modalField"><label>Valor</label><input type="number" id="lotPrice" placeholder="Ex.: 438000"></div>
        <div class="modalField"><label>Status</label><select id="lotStatus"><option>disponível</option><option>reservado</option><option>vendido</option><option>bloqueado</option></select></div>
        <div class="modalField"><label>Perfil</label><input type="text" id="lotTaste" placeholder="Ex.: Premium"></div>
        <div class="modalField"><label>Tag comercial</label><input type="text" id="lotTag" placeholder="Ex.: esquina • alto potencial"></div>
        <div class="modalField full"><label>Descrição</label><textarea id="lotDetails" placeholder="Descreva diferenciais, localização e potencial comercial do lote."></textarea></div>
        <div class="modalField"><label>Latitude</label><input type="number" step="any" id="lotLat" placeholder="-18.000000"></div>
        <div class="modalField"><label>Longitude</label><input type="number" step="any" id="lotLng" placeholder="-47.000000"></div>
      </div>
      <div class="gpsBox">
        <div><b>Posição GPS</b><small id="lotGpsStatus">Você pode cadastrar agora ou deixar para editar depois nos detalhes do lote.</small></div>
        <button class="btn primary small" id="captureLotGps">Usar GPS agora</button>
      </div>
      <div class="modalFormGrid">
        <div class="modalField full"><label>Fotos do lote</label><input type="file" id="lotPhotos" accept="image/*" capture="environment" multiple><div class="mediaPreview" id="lotPhotoPreview"></div></div>
        <div class="modalField full"><label>Vídeos do lote</label><input type="file" id="lotVideos" accept="video/*" capture="environment" multiple><div class="fileList" id="lotVideoPreview"></div></div>
      </div>
      <div class="actions"><button class="btn primary" id="saveRegisteredLot">Confirmar cadastro</button><button class="btn primary" data-close-modal>Cancelar</button></div>
    </div>
  `);
}

function captureGpsInto(latSelector,lngSelector,statusSelector){
  if(!navigator.geolocation){
    const status = $(statusSelector);
    if(status) status.textContent = 'GPS indisponível neste navegador.';
    toast('GPS indisponível neste navegador.');
    return;
  }
  const status = $(statusSelector);
  if(status) status.textContent = 'Solicitando permissão de localização...';
  toast('Autorize o acesso à sua localização.');
  navigator.geolocation.getCurrentPosition(
    pos=>{
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const accuracy = Math.round(pos.coords.accuracy || 0);
      if($(latSelector)) $(latSelector).value = lat.toFixed(7);
      if($(lngSelector)) $(lngSelector).value = lng.toFixed(7);
      if(status) status.textContent = `GPS capturado: ${lat.toFixed(6)}, ${lng.toFixed(6)} · precisão ± ${accuracy} m`;
      if(status) status.dataset.accuracy = String(accuracy);
      toast('Posição GPS capturada.');
    },
    ()=>{
      if(status) status.textContent = 'Não foi possível capturar a localização. Verifique a permissão do navegador.';
      toast('Localização não autorizada.');
    },
    {enableHighAccuracy:true, timeout:12000, maximumAge:0}
  );
}

async function handlePhotoPreview(){
  const files = Array.from($('#lotPhotos')?.files || []);
  const preview = $('#lotPhotoPreview');
  if(!preview) return;
  preview.innerHTML = '';
  for(const file of files.slice(0,6)){
    const data = await fileToCompressedImage(file, 420, .72);
    if(data) preview.insertAdjacentHTML('beforeend', `<img src="${data}" alt="${esc(file.name)}">`);
  }
}

function handleVideoPreview(){
  const files = Array.from($('#lotVideos')?.files || []);
  const preview = $('#lotVideoPreview');
  if(!preview) return;
  preview.innerHTML = files.slice(0,6).map(file=>`<span>${esc(file.name)} · ${(file.size/1024/1024).toFixed(1)} MB</span>`).join('');
}

async function collectRegisteredLot(){
  const project = ($('#lotProject')?.value || '').trim();
  const lotNumber = ($('#lotNumber')?.value || '').trim();
  const area = Number($('#lotArea')?.value || 0);
  const dims = ($('#lotDims')?.value || '').trim();
  const price = Number($('#lotPrice')?.value || 0);
  const status = ($('#lotStatus')?.value || 'disponível').trim();
  const taste = ($('#lotTaste')?.value || 'Novo').trim();
  const tag = ($('#lotTag')?.value || 'cadastro próprio').trim();
  const details = ($('#lotDetails')?.value || '').trim();
  const lat = Number($('#lotLat')?.value || 0);
  const lng = Number($('#lotLng')?.value || 0);
  const gpsAccuracy = $('#lotGpsStatus')?.dataset?.accuracy || null;
  if(!project) throw new Error('Informe o empreendimento.');
  if(!lotNumber) throw new Error('Informe o número ou nome do lote.');
  if(!area) throw new Error('Informe a área do lote.');
  const photos = Array.from($('#lotPhotos')?.files || []);
  const gallery = [];
  for(const file of photos.slice(0,4)){
    const data = await fileToCompressedImage(file, 1280, .78);
    if(data) gallery.push(data);
  }
  const videos = Array.from($('#lotVideos')?.files || []).slice(0,4).map(file=>({name:file.name, type:file.type || 'video', size:file.size, capturedAt:new Date().toISOString()}));
  const cleanLotNumber = lotNumber.replace(/^lote\s*/i,'').trim();
  const name = `${project} • Lote ${cleanLotNumber}`;
  return normalizeStoredLot({
    id: `custom-${Date.now()}`,
    name, project, area, dims: dims || '-',
    price, status, taste, tag,
    details: details || 'Lote cadastrado pela equipe.',
    features: [`${area} m²`, dims || 'Dimensões a confirmar', project, 'Cadastro próprio'],
    thumb: gallery[0] || defaultLotThumb(project),
    gallery,
    videos,
    coords: lat && lng ? {lat,lng} : null,
    gpsAccuracy,
    source: 'custom',
    createdAt: new Date().toISOString()
  });
}

async function saveRegisteredLot(){
  try{
    const lot = await collectRegisteredLot();
    const saved = upsertCustomLot(lot);
    renderAll();
    openLotCreatedConfirmation(saved);
  }catch(error){
    toast(error.message || 'Não foi possível cadastrar o lote.');
  }
}

function openLotCreatedConfirmation(lot){
  openModal(`
    <div class="modalHead"><div><span class="tag">Cadastro confirmado</span><h2>Lote cadastrado com sucesso</h2><p class="muted">O lote já está disponível na vitrine e poderá ser usado nas simulações.</p></div><button class="btn light small" data-close-modal>Fechar</button></div>
    <div class="modalBody">
      <div class="confirmBox">
        <h3>${lot.name}</h3>
        <p><b>Área:</b> ${lot.area} m² · <b>Valor:</b> ${fmt(lot.price)} · <b>Status:</b> ${lot.status}</p>
        <p>${lot.coords ? `GPS: ${Number(lot.coords.lat).toFixed(6)}, ${Number(lot.coords.lng).toFixed(6)}` : 'GPS ainda não cadastrado. Você pode cadastrar depois em Detalhes > Cadastrar posição via GPS.'}</p>
      </div>
      <div class="actions"><button class="btn primary" data-detail-lot="${lot.id}">Ver lote</button><button class="btn light" id="registerAnotherLot">Cadastrar outro lote</button><button class="btn primary" data-close-modal>Fechar</button></div>
    </div>
  `);
}

function openGpsEditModal(id){
  const lot = LOTS.find(x=>x.id===id);
  if(!lot) return;
  openModal(`
    <div class="modalHead"><div><span class="tag">GPS do lote</span><h2>${lot.name}</h2><p class="muted">Capture ou edite a posição oficial do lote.</p></div><button class="btn light small" data-close-modal>Fechar</button></div>
    <div class="modalBody">
      <div class="modalFormGrid">
        <div class="modalField"><label>Latitude</label><input type="number" step="any" id="editLotLat" value="${lot.coords?.lat || ''}"></div>
        <div class="modalField"><label>Longitude</label><input type="number" step="any" id="editLotLng" value="${lot.coords?.lng || ''}"></div>
      </div>
      <div class="gpsBox">
        <div><b>Atualizar posição</b><small id="editGpsStatus">${lot.coords ? 'Você pode manter, ajustar manualmente ou capturar novamente via GPS.' : 'Nenhuma coordenada cadastrada para este lote.'}</small></div>
        <button class="btn primary small" id="captureEditGps">Usar GPS agora</button>
      </div>
      <div class="actions"><button class="btn primary" data-save-gps-lot="${lot.id}">Salvar posição GPS</button><button class="btn primary" data-close-modal>Cancelar</button></div>
    </div>
  `);
}

function saveGpsForLot(id){
  const lot = LOTS.find(x=>x.id===id);
  if(!lot) return;
  const lat = Number($('#editLotLat')?.value || 0);
  const lng = Number($('#editLotLng')?.value || 0);
  if(!lat || !lng){
    toast('Informe latitude e longitude.');
    return;
  }
  lot.coords = {lat,lng};
  lot.gpsAccuracy = $('#editGpsStatus')?.dataset?.accuracy || lot.gpsAccuracy || null;
  if(lot.source === 'custom') upsertCustomLot(lot);
  renderAll();
  openLotDetails(id);
  toast('Posição GPS salva.');
}

function buyerData(){
  return {
    name: ($('#buyerName')?.value || '').trim(),
    phone: ($('#buyerPhone')?.value || '').trim(),
    email: ($('#buyerEmail')?.value || '').trim(),
    city: ($('#buyerCity')?.value || '').trim(),
    preference: ($('#contactPreference')?.value || '').trim(),
    time: ($('#contactTime')?.value || '').trim(),
    note: ($('#buyerNote')?.value || '').trim()
  };
}

function esc(value=''){
  return String(value)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

function dateToDisplay(value=''){
  if(!value) return '-';
  const parts = value.split('-');
  return parts.length===3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : value;
}

function openScheduleModal(){
  const b = buyerData();
  const minDate = new Date().toISOString().split('T')[0];
  const suggestedDate = minDate;
  openModal(`
    <div class="modalHead"><div><span class="tag">Atendimento</span><h2>Agendar apresentação</h2><p class="muted">Preencha os dados de contato, a data e o horário desejados para o atendimento.</p></div><button class="btn light small" data-close-modal>Fechar</button></div>
    <div class="modalBody">
      <p class="modalCaption">Se você já preencheu os dados na simulação, eles aparecem aqui automaticamente para conferência.</p>
      <div class="modalFormGrid">
        <div class="modalField"><label>Nome completo</label><input type="text" id="scheduleName" value="${esc(b.name)}" placeholder="Ex.: Franco Alves"></div>
        <div class="modalField"><label>WhatsApp / telefone</label><input type="tel" id="schedulePhone" value="${esc(b.phone)}" placeholder="Ex.: (34) 99999-9999"></div>
        <div class="modalField"><label>E-mail</label><input type="email" id="scheduleEmail" value="${esc(b.email)}" placeholder="Ex.: nome@email.com"></div>
        <div class="modalField"><label>Cidade</label><input type="text" id="scheduleCity" value="${esc(b.city)}" placeholder="Ex.: Monte Carmelo, MG"></div>
        <div class="modalField"><label>Preferência de contato</label><select id="schedulePreference"><option ${b.preference==='WhatsApp'?'selected':''}>WhatsApp</option><option ${b.preference==='Ligação'?'selected':''}>Ligação</option><option ${b.preference==='E-mail'?'selected':''}>E-mail</option><option ${b.preference==='Reunião presencial'?'selected':''}>Reunião presencial</option><option ${b.preference==='Videochamada'?'selected':''}>Videochamada</option></select></div>
        <div class="modalField"><label>Data desejada</label><input type="date" id="scheduleDate" min="${minDate}" value="${suggestedDate}"></div>
        <div class="modalField"><label>Horário desejado</label><input type="time" id="scheduleHour" value="09:00"></div>
        <div class="modalField"><label>Formato do atendimento</label><select id="scheduleFormat"><option>Apresentação comercial</option><option>Atendimento por WhatsApp</option><option>Ligação</option><option>Reunião presencial</option><option>Videochamada</option></select></div>
        <div class="modalField full"><label>Observação</label><textarea id="scheduleNote" placeholder="Ex.: Gostaria de entender condições do lote + casa e comparar prazos.">${esc(b.note)}</textarea></div>
      </div>
      <div class="actions"><button class="btn primary" id="scheduleSubmit">Agendar</button><button class="btn primary" data-close-modal>Fechar</button></div>
    </div>
  `);
}

function scheduleFormData(){
  return {
    name: ($('#scheduleName')?.value || '').trim(),
    phone: ($('#schedulePhone')?.value || '').trim(),
    email: ($('#scheduleEmail')?.value || '').trim(),
    city: ($('#scheduleCity')?.value || '').trim(),
    preference: ($('#schedulePreference')?.value || '').trim(),
    date: ($('#scheduleDate')?.value || '').trim(),
    hour: ($('#scheduleHour')?.value || '').trim(),
    format: ($('#scheduleFormat')?.value || '').trim(),
    note: ($('#scheduleNote')?.value || '').trim()
  };
}

function syncBuyerFromSchedule(data){
  if($('#buyerName')) $('#buyerName').value = data.name || '';
  if($('#buyerPhone')) $('#buyerPhone').value = data.phone || '';
  if($('#buyerEmail')) $('#buyerEmail').value = data.email || '';
  if($('#buyerCity')) $('#buyerCity').value = data.city || '';
  if($('#contactPreference')) $('#contactPreference').value = data.preference || 'WhatsApp';
  if($('#buyerNote')) $('#buyerNote').value = data.note || '';
  localStorage.setItem('fc_buyer_data', JSON.stringify({
    name: data.name || '',
    phone: data.phone || '',
    email: data.email || '',
    city: data.city || '',
    preference: data.preference || 'WhatsApp',
    time: data.hour || '',
    note: data.note || ''
  }));
}

function scheduleText(data){
  const t = getTotals();
  const modeLabel = t.mode === 'lot' ? 'Somente lote' : t.mode === 'home' ? 'Somente casa' : t.mode === 'future' ? 'Lote agora + casa pré-contratada' : 'Lote + casa';
  return `Futura Casa | Agendamento de apresentação

DADOS DO INTERESSADO
Nome: ${data.name || '-'}
WhatsApp/telefone: ${data.phone || '-'}
E-mail: ${data.email || '-'}
Cidade: ${data.city || '-'}
Preferência de contato: ${data.preference || '-'}

AGENDAMENTO
Data desejada: ${dateToDisplay(data.date)}
Horário desejado: ${data.hour || '-'}
Formato do atendimento: ${data.format || '-'}
Observação: ${data.note || '-'}

ESCOLHA ATUAL
Jornada: ${modeLabel}
Lote: ${state.lot?.name || '-'}
Casa: ${state.home?.name || '-'}
Adicionais: ${state.addons.map(a=>a.name).join(', ') || '-'}
Valor total estimado: ${fmt(t.total)}
Entrada total: ${fmt(t.entryValue)}
Parcela estimada: ${fmt(t.payment)}

Solicito agendamento de apresentação comercial.`;
}

function submitSchedule(){
  const data = scheduleFormData();
  if(!data.name){ toast('Informe o nome do interessado.'); $('#scheduleName')?.focus(); return; }
  if(!data.phone){ toast('Informe o WhatsApp ou telefone.'); $('#schedulePhone')?.focus(); return; }
  if(!data.date){ toast('Informe a data desejada.'); $('#scheduleDate')?.focus(); return; }
  if(!data.hour){ toast('Informe o horário desejado.'); $('#scheduleHour')?.focus(); return; }
  syncBuyerFromSchedule(data);
  const text = scheduleText(data);
  localStorage.setItem('fc_schedule_request', text);
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  closeModal();
  toast('Agendamento preparado para envio.');
}

function validateBuyerData(){
  const b = buyerData();
  if(!b.name){
    toast('Informe o nome do comprador.');
    $('#buyerName')?.focus();
    document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'});
    return false;
  }
  if(!b.phone){
    toast('Informe o WhatsApp ou telefone.');
    $('#buyerPhone')?.focus();
    document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'});
    return false;
  }
  return true;
}

function proposalText(){
  const t = getTotals();
  const b = buyerData();
  const modeLabel = t.mode === 'lot' ? 'Somente lote' : t.mode === 'home' ? 'Somente casa' : t.mode === 'future' ? 'Lote agora + casa pré-contratada' : 'Lote + casa';
  return `Futura Casa | Proposta para negociação

DADOS DO INTERESSADO
Nome: ${b.name || '-'}
WhatsApp/telefone: ${b.phone || '-'}
E-mail: ${b.email || '-'}
Cidade: ${b.city || '-'}
Preferência de contato: ${b.preference || '-'}
Melhor horário: ${b.time || '-'}
Observação: ${b.note || '-'}

ESCOLHA DO CLIENTE
Jornada: ${modeLabel}
Lote: ${state.lot?.name || '-'}
Casa: ${state.home?.name || '-'}
Adicionais: ${state.addons.map(a=>a.name).join(', ') || '-'}

SIMULAÇÃO
Valor total estimado: ${fmt(t.total)}
Entrada total: ${fmt(t.entryValue)}
Parcelamento da entrada: ${t.installments}X no cartão de ${fmt(t.entryInstallment)}
Valor financiado: ${fmt(t.financed)}
Prazo: ${t.term} meses
Sistema: ${t.system}
Juros remuneratórios: ${t.rateInfo?.interestText || '-'}
Índice de correção: ${t.rateInfo?.correctionText || '-'}
Taxa mensal considerada: ${t.rateInfo?.effectiveText || '-'}
Parcela estimada: ${fmt(t.payment)}
Entrada em %: ${t.entryPercent.toFixed(1)}%

Solicito contato de um consultor para iniciar a negociação.`;
}

function sendToConsultant(){
  if(!validateBuyerData()) return;
  const text = proposalText();
  localStorage.setItem('fc_consultant_proposal', text);
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  toast('Proposta com dados do comprador preparada para o consultor.');
}

let currentLotFilter='all', currentHomeFilter='all';
$$('[data-filter-lot]').forEach(btn => btn.onclick=()=>{
  currentLotFilter=btn.dataset.filterLot;
  $$('[data-filter-lot]').forEach(b=>b.classList.toggle('active',b===btn));
  const availableLots = filteredComboLots();
  if(availableLots.length){
    Object.keys(comboSelections).forEach(key=>{
      if(!availableLots.some(item=>item.id===comboSelections[key].lotId)){
        comboSelections[key] = { ...(comboSelections[key] || {}), lotId: availableLots[0].id };
      }
    });
  }
  renderLots(currentLotFilter);
  renderCombos();
});
$$('[data-filter-home]').forEach(btn => btn.onclick=()=>{currentHomeFilter=btn.dataset.filterHome;$$('[data-filter-home]').forEach(b=>b.classList.toggle('active',b===btn));renderHomes(currentHomeFilter);});

$$('[data-journey]').forEach(card=>{
  card.addEventListener('click',()=>activateJourney(card.dataset.journey));
});

['buyMode','entryPercent','entryInstallments','term','system','lotPriceInput','homePriceInput'].forEach(id=>{
  const el=$('#'+id);
  if(el){
    el.addEventListener('input',()=>renderTray(id));
    el.addEventListener('change',()=>renderTray(id));
  }
});
$('#entryValue').addEventListener('input',()=>renderTray('entryValue')); $('#entryValue').addEventListener('change',()=>renderTray('entryValue'));
$('#saveChoice').onclick=()=>{localStorage.setItem('fc_menu_choice_v5', proposalText()); localStorage.setItem('fc_buyer_data', JSON.stringify(buyerData())); toast('Proposta salva.');};
$('#copyChoice').onclick=()=>{navigator.clipboard?.writeText(proposalText()); toast('Resumo copiado.');};
$('#sendConsultant').onclick=sendToConsultant;
$('#sendConsultantBottom').onclick=sendToConsultant;
$('#openScheduleModal').onclick=openScheduleModal;
if($('#openFinanceSettings')) $('#openFinanceSettings').onclick=requestFinanceSettingsAccess;
if($('#openLotRegistryMenu')) $('#openLotRegistryMenu').onclick=(event)=>{event.preventDefault();openLotRegistrationModal();};
if($('#openLotRegistryMobile')) $('#openLotRegistryMobile').onclick=(event)=>{event.preventDefault();$('#mobile')?.classList.remove('open');openLotRegistrationModal();};

function aiAnswer(q){
  const t=q.toLowerCase(); const totals=getTotals();
  if(t.includes('juros') || t.includes('correção') || t.includes('indice') || t.includes('índice')) return 'Use o botão “Configurar juros e correção” para cadastrar juros remuneratórios e índice de correção. Esses parâmetros passam a compor a taxa mensal usada no simulador.';
  if(t.includes('entrada')) return 'Você pode editar a entrada em valor ou percentual. A entrada pode ser paga no cartão de crédito em 1, 2 ou 3 parcelas, e a simulação mostra o valor de cada parcela.';
  if(t.includes('lote')) return 'Para simular apenas o lote, clique em “Simular valor” no card ou selecione “Somente lote” na bandeja.';
  if(t.includes('casa')) return 'Para simular apenas a casa, clique em “Simular valor” no card ou selecione “Somente casa” na bandeja.';
  if(t.includes('consultor')) return 'Após montar a bandeja, use o botão “Enviar ao consultor”. Ele prepara a proposta com lote, casa, adicionais e condições simuladas.';
  return totals.entryPercent>=30?'Sua bandeja parece bem estruturada para iniciar a negociação.':'Teste aumentar a entrada, ampliar o prazo ou usar lote agora + casa pré-contratada.';
}

$('#aiSend').onclick=()=>{const input=$('#aiInput');const q=input.value.trim();if(!q)return;$('#thread').insertAdjacentHTML('beforeend',`<div class="msg user">${q}</div><div class="msg bot">${aiAnswer(q)}</div>`);input.value='';$('#thread').scrollTop=$('#thread').scrollHeight;};
$('#hamb').onclick=()=>$('#mobile').classList.toggle('open');
$$('#mobile a').forEach(a=>a.onclick=()=>$('#mobile').classList.remove('open'));
$('#detailModal').addEventListener('click',e=>{if(e.target.id==='detailModal')closeModal();});

syncPriceInputs();

const savedBuyer = JSON.parse(localStorage.getItem('fc_buyer_data') || 'null');
if(savedBuyer){
  if($('#buyerName')) $('#buyerName').value = savedBuyer.name || '';
  if($('#buyerPhone')) $('#buyerPhone').value = savedBuyer.phone || '';
  if($('#buyerEmail')) $('#buyerEmail').value = savedBuyer.email || '';
  if($('#buyerCity')) $('#buyerCity').value = savedBuyer.city || '';
  if($('#contactPreference')) $('#contactPreference').value = savedBuyer.preference || 'WhatsApp';
  if($('#contactTime')) { const timeOptions = Array.from($('#contactTime').options).map(o=>o.value); $('#contactTime').value = timeOptions.includes(savedBuyer.time) ? savedBuyer.time : 'Manhã'; }
  if($('#buyerNote')) $('#buyerNote').value = savedBuyer.note || '';
}

renderAll();


function fieldDirectionArrowSvg(){
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 21 12 17.3 4 21 12 3Z"></path></svg>`;
}

function fieldPointIconSvg(point){
  const label = String(point?.label || '').toLowerCase();
  if(point?.kind === 'lot'){
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z"></path><path d="M12 4v16"></path><path d="M4 8.5 12 13l8-4.5"></path></svg>`;
  }
  if(label.includes('portaria')){
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V7"></path><path d="M20 20V7"></path><path d="M4 7h16"></path><path d="M9 7v13"></path><path d="M15 7v13"></path></svg>`;
  }
  if(label.includes('acesso')){
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18h10"></path><path d="M10 6h10"></path><path d="m11 15 3 3 6-6"></path></svg>`;
  }
  if(label.includes('verde')){
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20c5-2 8-6.5 8-12-5.5 0-10 2.8-12 8"></path><path d="M12 20c-4.5-1.8-7-5.7-8-10 4.4-.2 7.8 1.3 10 4.6"></path></svg>`;
  }
  if(label.includes('lazer')){
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19h14"></path><path d="M12 19V9"></path><path d="M12 9c2.2-2.5 4.8-3.5 7-3.5 0 3.3-2 5.7-7 5.7-4.9 0-7-2.4-7-5.7 2.2 0 4.8 1 7 3.5Z"></path></svg>`;
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10Z"></path><path d="M12 13.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"></path></svg>`;
}

function fieldPointHtml(points=[]){
  const finalPoints = points.length ? points : [
    {kind:'place', label:'Portaria', distance:49, bearing:309},
    {kind:'place', label:'Lazer', distance:25, bearing:197},
    {kind:'lot', label:'Lote', distance:6, bearing:0}
  ];
  return finalPoints.slice(0,4).map((p,i)=>`
    <div class="fieldPin ${p.kind === 'lot' ? 'nearLot' : 'placePin'} p${i+1}">
      <div class="fieldPinHead">
        <span class="fieldPinDir" aria-hidden="true"><span class="fieldPinDirArrow" style="transform:rotate(${pointArrowRotation(p)}deg)">${fieldDirectionArrowSvg()}</span></span>
        <div class="fieldPinLabel">
          <span class="fieldPinIcon" aria-hidden="true">${fieldPointIconSvg(p)}</span>
          <span class="fieldPinLabelText">${p.label}</span>
        </div>
      </div>
      <small><span>${p.distance} m</span><b>•</b><span>${Math.round(p.bearing || 0)}°</span></small>
    </div>
  `).join('');
}

function updateFieldPins(points){
  fieldCurrentPoints = points || [];
  const el = $('#fieldPins');
  if(el) el.innerHTML = fieldPointHtml(fieldCurrentPoints);
  refreshFieldPinDirections();
}

function refreshFieldPinDirections(){
  const arrows = document.querySelectorAll('.fieldPinDirArrow');
  arrows.forEach((arrow, idx)=>{
    const point = fieldCurrentPoints[idx];
    if(!point) return;
    arrow.style.transform = `rotate(${pointArrowRotation(point)}deg)`;
  });
}

function updateFieldHeading(heading){
  if(heading == null || Number.isNaN(heading)) return;
  const value = Math.round((heading + 360) % 360);
  fieldCurrentHeading = value;
  const headingEl = $('#fieldHeading');
  const needleWrap = $('#fieldNeedleWrap') || $('#fieldNeedle');
  if(headingEl) headingEl.textContent = `${value}°`;
  if(needleWrap) needleWrap.style.transform = `rotate(${value}deg)`;
  refreshFieldPinDirections();
}

function setupFieldOrientation({autoRequest=false} = {}){
  const button = $('#fieldCompassPermission');
  const headingEl = $('#fieldHeading');
  const handler = (event) => {
    let heading = null;
    if(typeof event.webkitCompassHeading === 'number'){
      heading = event.webkitCompassHeading;
    }else if(typeof event.alpha === 'number'){
      heading = 360 - event.alpha;
    }
    if(heading != null) updateFieldHeading(heading);
  };
  arOrientationHandler = handler;

  let compassActive = false;
  const activateListeners = () => {
    if(compassActive) return;
    compassActive = true;
    window.removeEventListener('deviceorientationabsolute', handler, true);
    window.removeEventListener('deviceorientation', handler, true);
    window.addEventListener('deviceorientationabsolute', handler, true);
    window.addEventListener('deviceorientation', handler, true);
    if(button){
      button.textContent = 'Bússola ativa';
      button.disabled = true;
    }
    toast('Bússola ativada.');
  };

  const requestCompass = async () => {
    try{
      const result = await DeviceOrientationEvent.requestPermission();
      if(result === 'granted'){
        activateListeners();
      }else{
        if(headingEl) headingEl.textContent = 'perm.';
        toast('Permissão da bússola não autorizada.');
      }
    }catch(e){
      if(headingEl) headingEl.textContent = 'perm.';
      toast('A permissão da bússola depende do sistema do aparelho.');
    }
  };

  if(window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function'){
    if(button){
      button.style.display = 'none';
      button.onclick = requestCompass;
    }
    if(autoRequest) requestCompass();
  }else if(window.DeviceOrientationEvent){
    if(button) button.style.display = 'none';
    activateListeners();
  }else{
    if(button) button.style.display = 'none';
    if(headingEl) headingEl.textContent = 'sem';
  }
}

function openARView(id){
  const lot = LOTS.find(x=>x.id===id);
  if(!lot) return;
  if(!lotDestination(lot)){
    toast('Cadastre a posição GPS deste lote antes de usar AR.');
    openGpsEditModal(id);
    return;
  }
  const image = lot.thumb || 'assets/img/lot-sol45-premium.png';
  const coords = lotDestination(lot);
  openModal(`
    <div class="modalBody">
      <div class="fieldShell">
        <div class="fieldStage">
          <video id="fieldVideo" autoplay playsinline muted></video>
          <div class="fieldFallback" id="fieldFallback">
            <img src="${image}" alt="${lot.name}">
          </div>
          <div class="fieldVeil"></div>
          <div class="fieldTop">
            <div class="fieldCompass" aria-label="Bússola">
              <div class="fieldCompassDial">
                <div class="fieldCompassRose"></div>
                <span class="fieldNorthLabel">N</span>
                <div class="fieldNeedleWrap" id="fieldNeedleWrap"><div class="fieldNeedle" id="fieldNeedle"></div></div>
                <div class="fieldCompassCenter"></div>
              </div>
              <div class="fieldCompassMeta"><strong id="fieldHeading">--°</strong><small>bússola</small></div>
            </div>
            <button class="fieldClose" data-close-modal aria-label="Fechar">×</button>
          </div>
          <div id="fieldPins" class="fieldPins">${fieldPointHtml(buildFieldPoints(lot))}</div>
          <div class="fieldStatus">
            <div class="fieldStatusIcon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10Z"></path><path d="M12 13.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"></path></svg></div>
            <div class="fieldStatusText"><small class="dynamicLabel" id="fieldStatusLabel">Você está vendo</small><b id="fieldCurrentPoint">${lot.name}</b><span id="fieldAccuracy">Solicitando câmera, bússola e localização...</span></div>
          </div>
        </div>
        <div class="fieldInfo">
          <div class="res"><small>Coordenada do lote</small><b id="fieldInfoCoords">${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}</b></div>
          <div class="res"><small>Produto</small><b id="fieldInfoProduct">${lot.area} m² · ${lot.dims}</b></div>
          <div class="res"><small>Valor</small><b id="fieldInfoValue">${fmt(lot.price)}</b></div>
        </div>
        <div class="fieldActions">
          <button class="btn primary" type="button" data-route-lot="${lot.id}"><span class="actionIcon">↗</span><span>Abrir rota</span></button>
          <button class="btn primary" data-edit-gps-lot="${lot.id}"><span class="actionIcon">◎</span><span>Atualizar GPS</span></button>
          <button class="fieldActionHidden" id="fieldCompassPermission" type="button" aria-hidden="true" tabindex="-1">Ativar bússola</button>
        </div>
      </div>
    </div>
  `, 'fieldModalCard');
  initFieldExperience(lot.id);
}



/* v7.8 — mídia de campo, pins ocultáveis e graus relativos em tempo real */
const FIELD_MEDIA_KEY_V77 = 'fc_field_media_v77';
let fieldActiveLotId = null;
let fieldActiveLocationLabel = '';

function getFieldMediaStore(){
  try{return JSON.parse(localStorage.getItem(FIELD_MEDIA_KEY_V77) || '{}') || {};}catch(e){return {};}
}
function saveFieldMediaStore(store){localStorage.setItem(FIELD_MEDIA_KEY_V77, JSON.stringify(store));}
function mediaForLot(lotId){
  const store=getFieldMediaStore();
  const media = store[lotId] || {};
  media.images = Array.isArray(media.images) ? media.images : [];
  media.videos = Array.isArray(media.videos) ? media.videos : [];
  media.files = Array.isArray(media.files) ? media.files : [];
  media.driveLinks = Array.isArray(media.driveLinks) ? media.driveLinks : [];
  return media;
}
function saveMediaForLot(lotId, media){const store=getFieldMediaStore(); store[lotId]=media; saveFieldMediaStore(store); return media;}
function uniqueBySrc(items){const seen=new Set(); return (items||[]).filter(item=>{const key=item.src || item.url || item.name; if(!key || seen.has(key)) return false; seen.add(key); return true;});}

function applyStoredFieldMedia(){
  const store = getFieldMediaStore();
  LOTS.forEach(lot=>{
    const media = store[lot.id];
    if(!media) return;
    const images = uniqueBySrc(media.images||[]).map(x=>x.src).filter(Boolean);
    lot.gallery = Array.from(new Set([...(lot.gallery||[]), ...images]));
    lot.fieldVideos = [...(lot.fieldVideos||[]), ...(media.videos||[])];
    lot.fieldFiles = [...(lot.fieldFiles||[]), ...(media.files||[])];
    lot.driveLinks = [...(lot.driveLinks||[]), ...(media.driveLinks||[])];
  });
}

function lotGallery(l){
  const media = mediaForLot(l.id);
  const mediaImages = (media.images||[]).map(x=>x.src).filter(Boolean);
  const gallery = Array.isArray(l.gallery) ? l.gallery.filter(Boolean) : [];
  const base = l.thumb || makeSvgDataUri(l.name, 'Vista geral do lote e contexto urbano', '#466a43', '#c2ca8e');
  return [
    ...mediaImages,
    ...gallery,
    base,
    makeSvgDataUri(l.project, 'Perspectiva de implantação e frente do lote', '#5f7c4c', '#d6a76e'),
    makeSvgDataUri((l.area || '-') + ' m²', 'Leitura de potencial construtivo e posição', '#2a4e5f', '#7fa5b8')
  ].filter((src,index,arr)=>src && arr.indexOf(src)===index);
}

function renderGallery(images, galleryId='galleryViewport'){
  return `
    <div class="galleryShell">
      <button class="galleryArrow prev" type="button" data-gallery-nav="prev" data-gallery-target="${galleryId}" aria-label="Imagem anterior">‹</button>
      <div class="galleryViewport" id="${galleryId}">
        ${images.map((src,i)=>`<div class="gallerySlide"><img src="${src}" alt="Imagem ${i+1}" data-expand-image="${src}"></div>`).join('')}
      </div>
      <button class="galleryArrow next" type="button" data-gallery-nav="next" data-gallery-target="${galleryId}" aria-label="Próxima imagem">›</button>
    </div>
  `;
}

function fieldMediaMarkup(l){
  const media = mediaForLot(l.id);
  const videos = [...(l.fieldVideos||[]), ...(l.videos||[]), ...(media.videos||[])];
  const files = [...(l.fieldFiles||[]), ...(media.files||[])];
  const drive = [...(l.driveLinks||[]), ...(media.driveLinks||[])];
  const rows = [];
  videos.forEach(v=>rows.push(`<span><span>Vídeo: ${esc(v.name || 'vídeo cadastrado')}</span><small>${esc(v.locationLabel || '')}</small></span>`));
  files.forEach(f=>rows.push(`<span><span>Arquivo: ${esc(f.name || 'arquivo cadastrado')}</span><small>${esc(f.locationLabel || '')}</small></span>`));
  drive.forEach(d=>rows.push(`<a href="${esc(d.url)}" target="_blank" rel="noopener"><span>Google Drive: ${esc(d.name || d.url)}</span><small>${esc(d.locationLabel || '')}</small></a>`));
  if(!rows.length) return '';
  return `<div class="mediaMarkup"><h4>Mídias vinculadas ao lote/local</h4><div class="mediaRows">${rows.join('')}</div></div>`;
}

function openLotDetails(id){
  const l = LOTS.find(x=>x.id===id);
  const images = lotGallery(l);
  const hasCoords = !!(l?.coords && Number.isFinite(Number(l.coords.lat)) && Number.isFinite(Number(l.coords.lng)));
  const gpsBlock = hasCoords
    ? `<div class="pendingGps"><b>GPS cadastrado:</b> ${Number(l.coords.lat).toFixed(6)}, ${Number(l.coords.lng).toFixed(6)} ${l.gpsAccuracy ? `· precisão ± ${Math.round(l.gpsAccuracy)} m` : ''}<br><button class="btn light small" data-edit-gps-lot="${l.id}" style="margin-top:10px">Editar GPS</button></div>`
    : `<div class="pendingGps"><b>Coordenadas pendentes.</b> Este lote ainda não possui posição de GPS. Cadastre a posição usando o GPS do aparelho para liberar rota precisa e AR georreferenciado.<br><button class="btn primary small" data-edit-gps-lot="${l.id}" style="margin-top:10px">Cadastrar posição via GPS</button></div>`;
  openModal(`
    <div class="modalHead"><div><span class="tag">${l.project}</span><h2>${l.name}</h2><div class="modalBrand">${getProjectLogo(l.project)}</div><p class="muted">${l.details}</p></div><button class="btn light small" data-close-modal>Fechar</button></div>
    <div class="modalBody">
      ${renderGallery(images,'lotGalleryViewport')}
      <div class="featureList">${l.features.map(f=>`<span>${f}</span>`).join('')}</div>
      <p><b>Valor estimado:</b> ${fmt(l.price)}<br><b>Dimensões:</b> ${l.dims}<br><b>Perfil:</b> ${l.taste} • ${l.tag}</p>
      ${gpsBlock}
      ${fieldMediaMarkup(l)}
      <div class="arHelpBox"><b>Recursos Futura Casa v7.7:</b> use <b>Rota</b>, <b>Realidade aumentada</b> e cadastre mídias vinculadas ao lote/local em campo.</div>
      <div class="actions">
        <button class="btn primary" type="button" data-route-lot="${l.id}">Rota</button>
        <button class="btn primary" type="button" data-ar-lot="${l.id}">Realidade aumentada</button>
        <button class="btn primary" data-modal-sim-lot="${l.id}">Simular valor</button>
        <button class="btn primary" data-modal-combo-lot="${l.id}">Usar no combo</button>
      </div>
    </div>
  `);
}

function relativeBearingText(p){
  if(fieldCurrentHeading == null || p.bearing == null) return Math.round(p.bearing || 0);
  return pointArrowRotation(p);
}

function fieldPointHtml(points=[]){
  const finalPoints = points.length ? points : [
    {kind:'place', label:'Portaria', distance:49, bearing:309},
    {kind:'place', label:'Lazer', distance:25, bearing:197},
    {kind:'lot', label:'Lote', distance:6, bearing:0}
  ];
  return finalPoints.slice(0,4).map((p,i)=>`
    <div class="fieldPin ${p.kind === 'lot' ? 'nearLot' : 'placePin'} p${i+1}">
      <div class="fieldPinHead">
        <span class="fieldPinDir" aria-hidden="true"><span class="fieldPinDirArrow" style="transform:rotate(${pointArrowRotation(p)}deg)">${fieldDirectionArrowSvg()}</span></span>
        <div class="fieldPinLabel">
          <span class="fieldPinIcon" aria-hidden="true">${fieldPointIconSvg(p)}</span>
          <span class="fieldPinLabelText">${p.label}</span>
        </div>
      </div>
      <small><span>${p.distance} m</span><b>•</b><span class="fieldBearingValue">${relativeBearingText(p)}°</span></small>
    </div>
  `).join('');
}

function updateFieldPins(points){
  fieldCurrentPoints = points || [];
  const el = $('#fieldPins');
  if(el) el.innerHTML = fieldPointHtml(fieldCurrentPoints);
  refreshFieldPinDirections();
}

function refreshFieldPinDirections(){
  const arrows = document.querySelectorAll('.fieldPinDirArrow');
  const bearings = document.querySelectorAll('.fieldBearingValue');
  arrows.forEach((arrow, idx)=>{
    const point = fieldCurrentPoints[idx];
    if(!point) return;
    arrow.style.transform = `rotate(${pointArrowRotation(point)}deg)`;
    if(bearings[idx]) bearings[idx].textContent = `${relativeBearingText(point)}°`;
  });
}

function setFieldActiveLot(activeLot, modeLabel='Você está vendo'){
  if(!activeLot) return;
  fieldActiveLotId = activeLot.id;
  fieldActiveLocationLabel = activeLot.name;
  if($('#fieldStatusLabel')) $('#fieldStatusLabel').textContent = modeLabel;
  if($('#fieldCurrentPoint')) $('#fieldCurrentPoint').textContent = activeLot.name;
  if($('#fieldInfoProduct')) $('#fieldInfoProduct').textContent = `${activeLot.area} m² · ${activeLot.dims}`;
  if($('#fieldInfoValue')) $('#fieldInfoValue').textContent = fmt(activeLot.price);
  const dest = lotDestination(activeLot);
  if(dest && $('#fieldInfoCoords')) $('#fieldInfoCoords').textContent = `${dest.lat.toFixed(5)}, ${dest.lng.toFixed(5)}`;
  if($('#fieldMediaTarget')) $('#fieldMediaTarget').textContent = `Vinculado a: ${activeLot.name}`;
}

function toggleFieldPins(){
  const stage = document.querySelector('.fieldStage');
  const btn = $('#fieldTogglePins');
  if(!stage || !btn) return;
  const hidden = stage.classList.toggle('pinsHidden');
  btn.querySelector('span:last-child').textContent = hidden ? 'Visualizar pontos' : 'Ocultar pontos';
}

function openFieldMediaPanel(){
  const panel = $('#fieldMediaPanel');
  if(!panel) return;
  panel.classList.remove('hidden');
  if($('#fieldMediaTarget')) $('#fieldMediaTarget').textContent = `Vinculado a: ${fieldActiveLocationLabel || 'lote atual'}`;
}
function closeFieldMediaPanel(){ const panel=$('#fieldMediaPanel'); if(panel) panel.classList.add('hidden'); }

async function previewFieldMediaPhotos(){
  const preview = $('#fieldMediaPreview');
  if(!preview) return;
  preview.innerHTML = '';
  const files = [...Array.from($('#fieldMediaPhotos')?.files || []), ...Array.from($('#fieldMediaCamera')?.files || [])];
  for(const file of files.slice(0,8)){
    const data = await fileToCompressedImage(file, 420, .7);
    if(data) preview.insertAdjacentHTML('beforeend', `<img src="${data}" alt="${esc(file.name)}" data-expand-image="${data}">`);
  }
}

function fieldFileMeta(file){return {name:file.name, type:file.type || 'arquivo', size:file.size, locationLabel:fieldActiveLocationLabel, createdAt:new Date().toISOString()};}

async function saveFieldMedia(){
  const lotId = fieldActiveLotId;
  const lot = LOTS.find(l=>l.id===lotId);
  if(!lot){ toast('Não foi possível identificar o lote atual.'); return; }
  const media = mediaForLot(lotId);
  const photoFiles = [...Array.from($('#fieldMediaPhotos')?.files || []), ...Array.from($('#fieldMediaCamera')?.files || [])];
  for(const file of photoFiles.slice(0,10)){
    const src = await fileToCompressedImage(file, 1280, .78);
    if(src) media.images.push({src, name:file.name, locationLabel:fieldActiveLocationLabel, createdAt:new Date().toISOString()});
  }
  Array.from($('#fieldMediaVideos')?.files || []).forEach(file=>media.videos.push(fieldFileMeta(file)));
  Array.from($('#fieldMediaFiles')?.files || []).forEach(file=>media.files.push(fieldFileMeta(file)));
  const drive = ($('#fieldMediaDrive')?.value || '').trim();
  if(drive) media.driveLinks.push({url:drive, name:'Link do Google Drive', locationLabel:fieldActiveLocationLabel, createdAt:new Date().toISOString()});
  media.images = uniqueBySrc(media.images);
  saveMediaForLot(lotId, media);
  applyStoredFieldMedia();
  renderAll();
  toast('Mídia vinculada ao lote/local.');
  closeFieldMediaPanel();
}

function showImageLightbox(src){
  let box = $('#imageLightbox');
  if(!box){
    box = document.createElement('div');
    box.id = 'imageLightbox';
    box.className = 'imageLightbox hidden';
    box.innerHTML = `<button type="button" aria-label="Fechar imagem">×</button><img alt="Imagem ampliada">`;
    document.body.appendChild(box);
    box.addEventListener('click', e=>{ if(e.target===box || e.target.tagName==='BUTTON') box.classList.add('hidden'); });
  }
  box.querySelector('img').src = src;
  box.classList.remove('hidden');
}

document.addEventListener('click', e=>{
  const img = e.target.closest('[data-expand-image]');
  if(img){ e.preventDefault(); showImageLightbox(img.dataset.expandImage || img.src); }
});

function openARView(id){
  const lot = LOTS.find(x=>x.id===id);
  if(!lot) return;
  if(!lotDestination(lot)){
    toast('Cadastre a posição GPS deste lote antes de usar AR.');
    openGpsEditModal(id);
    return;
  }
  const image = lot.thumb || 'assets/img/lot-sol45-premium.png';
  const coords = lotDestination(lot);
  openModal(`
    <div class="modalBody">
      <div class="fieldShell">
        <div class="fieldStage">
          <video id="fieldVideo" autoplay playsinline muted></video>
          <div class="fieldFallback" id="fieldFallback"><img src="${image}" alt="${lot.name}"></div>
          <div class="fieldVeil"></div>
          <div class="fieldTop">
            <div class="fieldCompass" aria-label="Bússola">
              <div class="fieldCompassDial">
                <div class="fieldCompassRose"></div><span class="fieldNorthLabel">N</span>
                <div class="fieldNeedleWrap" id="fieldNeedleWrap"><div class="fieldNeedle" id="fieldNeedle"></div></div>
                <div class="fieldCompassCenter"></div>
              </div>
              <div class="fieldCompassMeta"><strong id="fieldHeading">--°</strong><small>bússola</small></div>
            </div>
            <button class="fieldClose" data-close-modal aria-label="Fechar">×</button>
          </div>
          <div id="fieldPins" class="fieldPins">${fieldPointHtml(buildFieldPoints(lot))}</div>
          <div class="fieldStatus">
            <div class="fieldStatusIcon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10Z"></path><path d="M12 13.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"></path></svg></div>
            <div class="fieldStatusText"><small class="dynamicLabel" id="fieldStatusLabel">Você está vendo</small><b id="fieldCurrentPoint">${lot.name}</b><span id="fieldAccuracy">Solicitando câmera, bússola e localização...</span></div>
          </div>
          <div class="fieldMediaPanel hidden" id="fieldMediaPanel">
            <div class="fieldMediaPanelHead"><div><h3>Cadastrar mídia</h3><p id="fieldMediaTarget">Vinculado a: ${lot.name}</p></div><button class="fieldMediaClose" id="fieldMediaClose" type="button">×</button></div>
            <div class="fieldMediaGrid">
              <div class="modalField"><label>Fotos já tiradas</label><input type="file" id="fieldMediaPhotos" accept="image/*" multiple></div>
              <div class="modalField"><label>Tirar foto agora</label><input type="file" id="fieldMediaCamera" accept="image/*" capture="environment"></div>
              <div class="modalField"><label>Vídeos</label><input type="file" id="fieldMediaVideos" accept="video/*" capture="environment" multiple></div>
              <div class="modalField"><label>Arquivos</label><input type="file" id="fieldMediaFiles" multiple></div>
              <div class="modalField full"><label>Link do Google Drive</label><input type="url" id="fieldMediaDrive" placeholder="Cole o link do Drive"></div>
            </div>
            <div class="fieldMediaPreview" id="fieldMediaPreview"></div>
            <div class="fieldMediaSaved">As imagens serão vinculadas ao lote/local detectado e aparecerão na galeria do lote.</div>
            <div class="fieldMediaActions"><button class="btn primary" id="fieldMediaSave" type="button">Salvar mídia</button><button class="btn light" id="fieldMediaCancel" type="button">Cancelar</button></div>
          </div>
        </div>
        <div class="fieldInfo">
          <div class="res"><small>Coordenada do lote</small><b id="fieldInfoCoords">${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}</b></div>
          <div class="res"><small>Produto</small><b id="fieldInfoProduct">${lot.area} m² · ${lot.dims}</b></div>
          <div class="res"><small>Valor</small><b id="fieldInfoValue">${fmt(lot.price)}</b></div>
        </div>
        <div class="fieldActions">
          <button class="btn primary" type="button" data-route-lot="${lot.id}"><span class="actionIcon">↗</span><span>Abrir rota</span></button>
          <button class="btn primary" data-edit-gps-lot="${lot.id}"><span class="actionIcon">◎</span><span>Atualizar GPS</span></button>
          <button class="btn primary" id="fieldTogglePins" type="button"><span class="actionIcon">◌</span><span>Ocultar pontos</span></button>
          <button class="btn light" id="fieldMediaButton" type="button"><span class="actionIcon">＋</span><span>Cadastrar mídia</span></button>
          <button class="fieldActionHidden" id="fieldCompassPermission" type="button" aria-hidden="true" tabindex="-1">Ativar bússola</button>
        </div>
      </div>
    </div>
  `, 'fieldModalCard');
  initFieldExperience(lot.id);
  if($('#fieldTogglePins')) $('#fieldTogglePins').onclick = toggleFieldPins;
  if($('#fieldMediaButton')) $('#fieldMediaButton').onclick = openFieldMediaPanel;
  if($('#fieldMediaClose')) $('#fieldMediaClose').onclick = closeFieldMediaPanel;
  if($('#fieldMediaCancel')) $('#fieldMediaCancel').onclick = closeFieldMediaPanel;
  if($('#fieldMediaSave')) $('#fieldMediaSave').onclick = saveFieldMedia;
  if($('#fieldMediaPhotos')) $('#fieldMediaPhotos').onchange = previewFieldMediaPhotos;
  if($('#fieldMediaCamera')) $('#fieldMediaCamera').onchange = previewFieldMediaPhotos;
}


/* v8.3 — mapa interativo de quadras e lotes */
const MAP_LOTS = [
  {id:'map-sol-12', number:'12', quadra:'A', project:'Solaris Home Resort', name:'Solaris Home Resort • Lote 12', area:504.83, dims:'15 x 33 m', price:498000, status:'available', x:69.5, y:11.2, taste:'Premium', tag:'vista elevada', details:'Lote de posição alta, com leitura premium no mapa e boa relação entre frente, profundidade e implantação residencial.', coords:{lat:-18.7312,lng:-47.4932}},
  {id:'map-sol-26', number:'26', quadra:'C', project:'Solaris Home Resort', name:'Solaris Home Resort • Lote 26', area:465.12, dims:'15 x 30 m', price:459000, status:'available', x:43.1, y:25.2, taste:'Equilibrado', tag:'boa metragem', details:'Lote intermediário em quadra curva, indicado para projeto residencial com implantação eficiente.', coords:{lat:-18.7316,lng:-47.4928}},
  {id:'map-sol-45', number:'45', quadra:'C', project:'Solaris Home Resort', name:'Solaris Home Resort • Lote 45', area:458.16, dims:'15 x 30 m', price:470000, status:'available', x:56.8, y:35.8, taste:'Prático', tag:'implantação fácil', details:'Lote com boa leitura de quadra e acesso simples ao sistema viário interno.', coords:{lat:-18.7319,lng:-47.4925}},
  {id:'map-sol-81', number:'81', quadra:'F', project:'Solaris Home Resort', name:'Solaris Home Resort • Lote 81', area:470.94, dims:'15 x 31 m', price:512000, status:'available', x:66.8, y:40.5, taste:'Premium', tag:'próximo à área verde', details:'Lote com proximidade visual a áreas verdes e boa posição para projeto de presença.', coords:{lat:-18.7322,lng:-47.49348}},
  {id:'map-sol-104', number:'104', quadra:'E', project:'Solaris Home Resort', name:'Solaris Home Resort • Lote 104', area:456.05, dims:'15 x 30 m', price:455000, status:'available', x:73.5, y:57.6, taste:'Funcional', tag:'quadra organizada', details:'Lote em quadra vertical, com ótima clareza de acesso e potencial para moradia planejada.', coords:{lat:-18.7329,lng:-47.4921}},
  {id:'map-sol-124', number:'124', quadra:'E', project:'Solaris Home Resort', name:'Solaris Home Resort • Lote 124', area:470.59, dims:'15 x 31 m', price:468000, status:'available', x:80.1, y:77.5, taste:'Privativo', tag:'fim de quadra', details:'Lote em posição mais reservada, indicado para quem valoriza privacidade e menor fluxo.', coords:{lat:-18.7337,lng:-47.4917}},
  {id:'map-sol-137', number:'137', quadra:'J', project:'Solaris Home Resort', name:'Solaris Home Resort • Lote 137', area:428.03, dims:'12 x 35 m', price:398000, status:'reserved', x:54.7, y:85.5, taste:'Oportunidade', tag:'entrada de valor', details:'Lote de perfil objetivo para entrada na jornada Solaris com menor valor total.', coords:{lat:-18.7341,lng:-47.4931}},
  {id:'map-sol-157', number:'157', quadra:'B', project:'Solaris Home Resort', name:'Solaris Home Resort • Lote 157', area:477.04, dims:'15 x 31 m', price:485000, status:'available', x:29.2, y:54.2, taste:'Paisagem', tag:'próximo à represa', details:'Lote com forte apelo paisagístico por proximidade com a represa e áreas verdes.', coords:{lat:-18.733,lng:-47.4945}},
  {id:'map-sol-165', number:'165', quadra:'B', project:'Solaris Home Resort', name:'Solaris Home Resort • Lote 165', area:476.79, dims:'15 x 31 m', price:492000, status:'available', x:22.1, y:62.4, taste:'Vista', tag:'represa', details:'Lote em setor com presença marcante da represa, ideal para storytelling de lifestyle.', coords:{lat:-18.7333,lng:-47.4949}},
  {id:'map-sol-73', number:'73', quadra:'F', project:'Solaris Home Resort', name:'Solaris Home Resort • Lote 73', area:487.6, dims:'16 x 30 m', price:505000, status:'sold', x:63.5, y:32.7, taste:'Vendido', tag:'referência', details:'Lote já vendido, mantido no mapa para contexto de estoque e leitura de ocupação.', coords:{lat:-18.732,lng:-47.4929}},
  {id:'map-sol-114', number:'114', quadra:'E', project:'Solaris Home Resort', name:'Solaris Home Resort • Lote 114', area:470.59, dims:'15 x 31 m', price:475000, status:'available', x:80.3, y:55.0, taste:'Familiar', tag:'quadra tranquila', details:'Lote com boa metragem para casa familiar e acesso simples pelo sistema viário.', coords:{lat:-18.733,lng:-47.49185}},
  {id:'map-sol-31', number:'31', quadra:'C', project:'Solaris Home Resort', name:'Solaris Home Resort • Lote 31', area:457.72, dims:'15 x 30 m', price:462000, status:'available', x:50.7, y:25.0, taste:'Equilibrado', tag:'miolo de quadra', details:'Lote com perfil equilibrado e boa posição na quadra superior do empreendimento.', coords:{lat:-18.73155,lng:-47.49255}}
];

let selectedMapLotId = 'map-sol-12';
let mapZoom = 0.92;

function mapLotToPlatformLot(mapLot){
  return {
    id: mapLot.id,
    name: mapLot.name,
    project: 'Solaris Residencial Resort',
    area: Math.round(mapLot.area),
    dims: mapLot.dims,
    price: mapLot.price,
    tag: mapLot.tag,
    taste: mapLot.taste,
    details: mapLot.details,
    features: [`Quadra ${mapLot.quadra}`, `${Math.round(mapLot.area)} m²`, mapLot.dims, mapLot.status === 'available' ? 'Disponível' : mapLot.status === 'reserved' ? 'Reservado' : 'Vendido'],
    thumb: 'assets/img/solaris-mapa-lotes-clean.png',
    gallery: ['assets/img/solaris-mapa-lotes-clean.png'],
    coords: mapLot.coords,
    arPoints: [{label:'Represa',distance:120,bearing:260},{label:'Área verde',distance:38,bearing:185},{label:`Lote ${mapLot.number}`,distance:6,bearing:0}],
    source:'map'
  };
}

function ensureMapLotInLots(mapLot){
  const existing = LOTS.find(l=>l.id === mapLot.id);
  const normalized = mapLotToPlatformLot(mapLot);
  if(existing) Object.assign(existing, normalized);
  else LOTS.push(normalized);
  return LOTS.find(l=>l.id === mapLot.id);
}

function selectedMapLot(){
  return MAP_LOTS.find(l=>l.id === selectedMapLotId) || MAP_LOTS[0];
}

function statusLabel(status){
  return status === 'reserved' ? 'Reservado' : status === 'sold' ? 'Vendido' : 'Disponível';
}

const mapFilterState = {status:'available', quadra:'all', query:'', areaMin:'', areaMax:'', priceMin:'', priceMax:''};

function mapStatusLabel(status){
  return status === 'reserved' ? 'Reservado' : status === 'sold' ? 'Vendido' : 'Disponível';
}

function mapNumber(value){
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : null;
}

function mapFilteredLots(){
  const q = (mapFilterState.query || '').trim().toLowerCase();
  const areaMin = mapNumber(mapFilterState.areaMin);
  const areaMax = mapNumber(mapFilterState.areaMax);
  const priceMin = mapNumber(mapFilterState.priceMin);
  const priceMax = mapNumber(mapFilterState.priceMax);

  return MAP_LOTS.filter(l=>{
    const statusOk = mapFilterState.status === 'all' || l.status === mapFilterState.status;
    const quadraOk = mapFilterState.quadra === 'all' || l.quadra === mapFilterState.quadra;
    const areaOk = (!areaMin || l.area >= areaMin) && (!areaMax || l.area <= areaMax);
    const priceOk = (!priceMin || l.price >= priceMin) && (!priceMax || l.price <= priceMax);
    const text = `${l.number} ${l.quadra} ${l.name} ${l.details} ${l.tag} ${l.taste} ${l.area} ${l.price}`.toLowerCase();
    const qOk = !q || text.includes(q);
    return statusOk && quadraOk && areaOk && priceOk && qOk;
  });
}

function renderMapLots(){
  const layer = document.getElementById('mapLotsLayer');
  if(!layer) return;
  const l = selectedMapLot();
  if(!l){
    layer.innerHTML = '';
    return;
  }
  layer.innerHTML = `<div class="mapSelectedMarker" style="--x:${l.x}%;--y:${l.y}%">
    <div class="pinBubble"><span class="pinQuadra">Quadra ${l.quadra}</span><span class="pinDivider">•</span><span class="pinLote">Lote ${l.number}</span></div>
    <div class="pinPoint"></div>
  </div>`;
}

function renderMapSelection(){
  const card = document.getElementById('mapSelectionCard');
  if(!card) return;
  const l = selectedMapLot();
  if(!l){
    card.innerHTML = `<div class="mapCard"><span class="tag">Sem resultado</span><h3>Nenhum lote encontrado</h3><p class="muted">Ajuste os filtros para visualizar um lote no mapa.</p></div>`;
    return;
  }
  ensureMapLotInLots(l);
  card.innerHTML = `
    <div class="mapCard">
      <div class="mapCardTop">
        <div>
          <span class="tag">Lote selecionado • ${mapStatusLabel(l.status)}</span>
          <h3>${l.name}</h3>
        </div>
        <div class="mapMiniLot"><b>${l.number}</b></div>
      </div>
      <div class="mapSpecs"><span>Quadra ${l.quadra}</span><span>${Math.round(l.area)} m²</span><span>${l.dims}</span></div>
      <div class="price">${fmt(l.price)}</div>
      <p class="muted">${l.details}</p>
      <div class="mapActions">
        <button class="btn primary" data-map-detail="${l.id}">Detalhes</button>
        <button class="btn primary" data-map-sim="${l.id}">Simular valor</button>
        <button class="btn primary wide" data-map-ai="${l.id}">Gerar imagens por IA</button>
        <button class="btn primary" data-map-combo="${l.id}">Usar no combo</button>
        <button class="btn primary" data-map-route="${l.id}">Rota</button>
        <button class="btn primary" data-map-ar="${l.id}">Realidade aumentada</button>
      </div>
    </div>`;
  bindMapSelectionActions();
}

function renderMapFinder(){
  const list = document.getElementById('mapConventionalList');
  const count = document.getElementById('mapListCount');
  const quadraSelect = document.getElementById('mapQuadraFilter');
  const statusSelect = document.getElementById('mapStatusFilter');
  const searchInput = document.getElementById('mapSearchInput');
  const areaMinInput = document.getElementById('mapAreaMin');
  const areaMaxInput = document.getElementById('mapAreaMax');
  const priceMinInput = document.getElementById('mapPriceMin');
  const priceMaxInput = document.getElementById('mapPriceMax');

  if(quadraSelect && !quadraSelect.dataset.ready){
    const quadras = ['all', ...Array.from(new Set(MAP_LOTS.map(l=>l.quadra))).sort()];
    quadraSelect.innerHTML = quadras.map(q=>`<option value="${q}">${q === 'all' ? 'Todas as quadras' : 'Quadra ' + q}</option>`).join('');
    quadraSelect.dataset.ready = '1';
  }

  if(quadraSelect) quadraSelect.value = mapFilterState.quadra;
  if(statusSelect) statusSelect.value = mapFilterState.status;
  if(searchInput && document.activeElement !== searchInput) searchInput.value = mapFilterState.query;
  if(areaMinInput && document.activeElement !== areaMinInput) areaMinInput.value = mapFilterState.areaMin;
  if(areaMaxInput && document.activeElement !== areaMaxInput) areaMaxInput.value = mapFilterState.areaMax;
  if(priceMinInput && document.activeElement !== priceMinInput) priceMinInput.value = mapFilterState.priceMin;
  if(priceMaxInput && document.activeElement !== priceMaxInput) priceMaxInput.value = mapFilterState.priceMax;

  const lots = mapFilteredLots();

  if(count){
    count.textContent = lots.length
      ? `${lots.length} lote(s) encontrado(s). Toque no card ou em “Ver no mapa”.`
      : 'Nenhum lote encontrado com estes filtros.';
  }

  if(!list) return;
  list.innerHTML = lots.map(l=>`
    <article class="mapLotRow ${l.id===selectedMapLotId?'selected':''}" data-view-map-lot-card="${l.id}">
      <div class="mapLotRowTop">
        <h4>Quadra ${l.quadra} • Lote ${l.number}</h4>
        <span class="statusBadge ${l.status}">${mapStatusLabel(l.status)}</span>
      </div>
      <div class="rowMeta"><span>${Math.round(l.area)} m²</span><span>${l.dims}</span><span>${fmt(l.price)}</span><span>${l.taste}</span></div>
      <p class="muted" style="margin:0">${l.details}</p>
      <div class="mapLotRowActions">
        <button class="btn primary small" type="button" data-view-map-lot="${l.id}">Ver no mapa</button>
      </div>
    </article>
  `).join('');

  list.querySelectorAll('[data-view-map-lot-card]').forEach(row=>{
    row.onclick = (event)=>{
      if(event.target.closest('button')) return;
      selectMapLot(row.dataset.viewMapLotCard,{scrollToMap:true});
    };
  });
  list.querySelectorAll('[data-view-map-lot]').forEach(btn=>{
    btn.onclick = ()=>selectMapLot(btn.dataset.viewMapLot,{scrollToMap:true});
  });
}

function selectFirstFilteredLotIfNeeded({force=false} = {}){
  const lots = mapFilteredLots();
  if(!lots.length) return false;
  if(force || !lots.some(l=>l.id === selectedMapLotId)){
    selectedMapLotId = lots[0].id;
    return true;
  }
  return false;
}

function scrollToMapVisual(){
  const target = document.querySelector('#mapa .mapExperience') || document.querySelector('#mapa');
  if(!target) return;
  target.scrollIntoView({behavior:'smooth', block:'start'});
}

function selectMapLot(id,{silent=false, scrollToMap=false} = {}){
  selectedMapLotId = id;
  renderMapLots();
  renderMapSelection();
  renderMapFinder();
  if(scrollToMap){
    setTimeout(scrollToMapVisual, 80);
    if(!silent) toast('Lote marcado no mapa visual.');
  }else if(!silent){
    toast('Lote selecionado. Toque em “Ver no mapa” para subir ao mapa visual.');
  }
}

function setMapStatusFilter(status){
  mapFilterState.status = status;
  document.querySelectorAll('[data-map-filter]').forEach(b=>b.classList.toggle('active', b.dataset.mapFilter === status));
  selectFirstFilteredLotIfNeeded({force:true});
  renderMapLots();
  renderMapSelection();
  renderMapFinder();
}

function updateMapFiltersFromInputs(){
  mapFilterState.quadra = document.getElementById('mapQuadraFilter')?.value || 'all';
  mapFilterState.status = document.getElementById('mapStatusFilter')?.value || 'available';
  mapFilterState.query = document.getElementById('mapSearchInput')?.value || '';
  mapFilterState.areaMin = document.getElementById('mapAreaMin')?.value || '';
  mapFilterState.areaMax = document.getElementById('mapAreaMax')?.value || '';
  mapFilterState.priceMin = document.getElementById('mapPriceMin')?.value || '';
  mapFilterState.priceMax = document.getElementById('mapPriceMax')?.value || '';
  document.querySelectorAll('[data-map-filter]').forEach(b=>b.classList.toggle('active', b.dataset.mapFilter === mapFilterState.status));
  selectFirstFilteredLotIfNeeded();
  renderMapLots();
  renderMapSelection();
  renderMapFinder();
}

function bindMapSelectionActions(){
  document.querySelectorAll('[data-map-detail]').forEach(btn=>btn.onclick=()=>openLotDetails(ensureMapLotInLots(MAP_LOTS.find(l=>l.id===btn.dataset.mapDetail)).id));
  document.querySelectorAll('[data-map-ai]').forEach(btn=>btn.onclick=()=>openHouseSimulation(ensureMapLotInLots(MAP_LOTS.find(l=>l.id===btn.dataset.mapAi)).id));
  document.querySelectorAll('[data-map-route]').forEach(btn=>btn.onclick=()=>openRouteToLot(ensureMapLotInLots(MAP_LOTS.find(l=>l.id===btn.dataset.mapRoute)).id));
  document.querySelectorAll('[data-map-ar]').forEach(btn=>btn.onclick=()=>openARView(ensureMapLotInLots(MAP_LOTS.find(l=>l.id===btn.dataset.mapAr)).id));
  document.querySelectorAll('[data-map-sim]').forEach(btn=>btn.onclick=()=>{
    const lot = ensureMapLotInLots(MAP_LOTS.find(l=>l.id===btn.dataset.mapSim));
    state.lot = lot; state.customLotPrice = lot.price; state.mode = 'lot';
    if($('#buyMode')) $('#buyMode').value = 'lot';
    syncPriceInputs(); renderAll();
    document.querySelector('#bandeja')?.scrollIntoView({behavior:'smooth'});
    toast('Lote do mapa enviado para simulação.');
  });
  document.querySelectorAll('[data-map-combo]').forEach(btn=>btn.onclick=()=>{
    const lot = ensureMapLotInLots(MAP_LOTS.find(l=>l.id===btn.dataset.mapCombo));
    state.lot = lot; state.customLotPrice = lot.price; state.mode = 'combo';
    if($('#buyMode')) $('#buyMode').value = 'combo';
    syncPriceInputs(); renderAll();
    document.querySelector('#bandeja')?.scrollIntoView({behavior:'smooth'});
    toast('Lote do mapa adicionado ao combo.');
  });
}

function showMapZoomBadge(){
  const badge = document.getElementById('mapZoomBadge');
  if(!badge) return;
  badge.textContent = `${Math.round(mapZoom * 100)}%`;
  badge.classList.add('show');
  clearTimeout(showMapZoomBadge._timer);
  showMapZoomBadge._timer = setTimeout(()=>badge.classList.remove('show'), 850);
}

function applyMapZoom(){
  const inner = document.getElementById('mapInner');
  if(inner){
    inner.style.setProperty('--mapZoom', mapZoom);
    inner.style.transform = `scale(${mapZoom})`;
  }
  showMapZoomBadge();
}

function initInteractiveMap(){
  ensureMapLotInLots(selectedMapLot());
  selectFirstFilteredLotIfNeeded({force:true});
  renderMapLots();
  renderMapSelection();
  renderMapFinder();

  document.querySelectorAll('[data-map-filter]').forEach(btn=>{
    btn.onclick = (event)=>{
      event.preventDefault();
      setMapStatusFilter(btn.dataset.mapFilter);
    };
  });

  ['mapQuadraFilter','mapStatusFilter','mapSearchInput','mapAreaMin','mapAreaMax','mapPriceMin','mapPriceMax'].forEach(id=>{
    const el = document.getElementById(id);
    if(!el) return;
    const eventName = el.tagName === 'SELECT' ? 'change' : 'input';
    el.addEventListener(eventName, updateMapFiltersFromInputs);
  });

  const zoomIn = document.getElementById('mapZoomIn');
  const zoomOut = document.getElementById('mapZoomOut');
  const doZoomIn = (event)=>{ event?.preventDefault?.(); mapZoom = Math.min(1.75, +(mapZoom + .18).toFixed(2)); applyMapZoom(); };
  const doZoomOut = (event)=>{ event?.preventDefault?.(); mapZoom = Math.max(0.82, +(mapZoom - .18).toFixed(2)); applyMapZoom(); };
  if(zoomIn){
    zoomIn.onclick = doZoomIn;
    zoomIn.onpointerdown = doZoomIn;
  }
  if(zoomOut){
    zoomOut.onclick = doZoomOut;
    zoomOut.onpointerdown = doZoomOut;
  }
  applyMapZoom();
}

applyStoredFieldMedia();
renderAll();
initInteractiveMap();


/* v7.8 — ocultar/visualizar único + simular casa */
var fieldPointsVisible = true;
var HOUSE_STYLE_LIBRARY = [
  {id:'contemporanea', name:'Contemporânea', desc:'Linhas retas, volumetria limpa e grandes esquadrias.'},
  {id:'terrea-premium', name:'Térrea Premium', desc:'Conforto no térreo, varanda ampla e fachada sofisticada.'},
  {id:'biofilica', name:'Biofílica', desc:'Materiais naturais, integração com paisagismo e luz abundante.'},
  {id:'minimalista', name:'Minimalista', desc:'Composição elegante, tons neutros e desenho enxuto.'},
  {id:'resort', name:'Resort Living', desc:'Fachada de alto padrão com clima de casa de resort.'},
  {id:'mediterranea', name:'Mediterrânea', desc:'Telhados leves, volumes acolhedores e atmosfera solar.'}
];
function updateFieldPointToggleButton(){
  const btn = document.querySelector('[data-toggle-field-points]');
  const pins = document.getElementById('fieldPins');
  if(pins) pins.classList.toggle('hidden', !fieldPointsVisible);
  if(btn) btn.textContent = fieldPointsVisible ? 'Ocultar pontos' : 'Visualizar pontos';
}
function toggleFieldPointVisibility(){ fieldPointsVisible = !fieldPointsVisible; updateFieldPointToggleButton(); }

function openARView(id){
  const lot = LOTS.find(x=>x.id===id);
  if(!lot) return;
  if(!lotDestination(lot)){
    toast('Cadastre a posição GPS deste lote antes de usar AR.');
    openGpsEditModal(id);
    return;
  }
  const image = lot.thumb || makeSvgDataUri(lot.name, 'Vista geral do lote e contexto urbano', '#466a43', '#c2ca8e');
  openModal(`
    <div class="modalBody">
      <div class="fieldShell">
        <div class="fieldStage">
          <video id="fieldVideo" autoplay playsinline muted></video>
          <div class="fieldFallback" id="fieldFallback"><img src="${image}" alt="${lot.name}"></div>
          <div class="fieldVeil"></div>
          <div class="fieldTop">
            <div class="fieldCompass" aria-label="Bússola">
              <div class="fieldCompassDial">
                <div class="fieldCompassRose"></div>
                <span class="fieldNorthLabel">N</span>
                <div class="fieldNeedleWrap" id="fieldNeedleWrap"><div class="fieldNeedle" id="fieldNeedle"></div></div>
                <div class="fieldCompassCenter"></div>
              </div>
              <div class="fieldCompassMeta"><strong id="fieldHeading">--°</strong><small>bússola</small></div>
            </div>
            <button class="fieldClose" data-close-modal aria-label="Fechar">×</button>
          </div>
          <div id="fieldPins" class="fieldPins">${fieldPointHtml(buildFieldPoints(lot))}</div>
          <div class="fieldStatus">
            <div class="fieldStatusIcon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10Z"></path><path d="M12 13.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"></path></svg></div>
            <div class="fieldStatusText"><small class="dynamicLabel" id="fieldStatusLabel">Você está vendo</small><b id="fieldCurrentPoint">${lot.name}</b><span id="fieldAccuracy">Solicitando câmera, bússola e localização...</span></div>
          </div>
        </div>
        <div class="fieldInfo compact">
          <div class="res"><small>Produto</small><b id="fieldInfoProduct">${lot.area} m² · ${lot.dims}</b></div>
          <div class="res"><small>Valor</small><b id="fieldInfoValue">${fmt(lot.price)}</b></div>
          <div class="res hiddenGps"><small>Coordenada do lote</small><b id="fieldInfoCoords"></b></div>
        </div>
        <div class="fieldActions v78">
          <button class="btn primary" type="button" data-route-lot="${lot.id}"><span class="actionIcon">↗</span><span>Abrir rota</span></button>
          <button class="btn primary" type="button" data-house-sim-lot="${lot.id}"><span class="actionIcon">⌂</span><span>Simular Casa</span></button>
          <button class="btn primary" type="button" data-toggle-field-points><span>Ocultar pontos</span></button>
          <button class="btn primary" id="openFieldMediaRegister" data-media-lot="${lot.id}"><span>Adicionar mídia</span></button>
          <button class="fieldActionHidden" id="fieldCompassPermission" type="button" aria-hidden="true" tabindex="-1">Ativar bússola</button>
        </div>
      </div>
    </div>
  `, 'fieldModalCard');
  fieldPointsVisible = true;
  initFieldExperience(lot.id);
  updateFieldPointToggleButton();
}

function houseMockImage(lot, styleName){
  const base = lot.thumb || makeSvgDataUri(lot.name, 'Lote base para simulação', '#d8d2ca', '#efe8de');
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
    <defs>
      <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="rgba(10,16,30,0.05)"/><stop offset="100%" stop-color="rgba(10,16,30,0.45)"/></linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="18" stdDeviation="28" flood-color="rgba(0,0,0,0.25)"/></filter>
    </defs>
    <image href="${base}" x="0" y="0" width="1200" height="900" preserveAspectRatio="xMidYMid slice"/>
    <rect width="1200" height="900" fill="url(#fade)"/>
    <rect x="54" y="54" width="1092" height="792" rx="34" fill="rgba(255,253,249,0.04)" stroke="rgba(255,255,255,0.28)"/>
    <rect x="110" y="610" width="980" height="110" rx="22" fill="rgba(93,84,70,0.88)"/>
    <rect x="180" y="470" width="420" height="160" rx="20" fill="rgba(238,234,228,0.95)" filter="url(#shadow)"/>
    <rect x="540" y="420" width="320" height="210" rx="18" fill="rgba(225,215,200,0.95)" filter="url(#shadow)"/>
    <rect x="830" y="495" width="160" height="135" rx="18" fill="rgba(205,180,154,0.98)" filter="url(#shadow)"/>
    <rect x="145" y="438" width="510" height="34" rx="17" fill="rgba(89,80,68,0.96)"/>
    <rect x="508" y="390" width="402" height="36" rx="18" fill="rgba(74,65,57,0.96)"/>
    <rect x="232" y="528" width="130" height="70" rx="8" fill="rgba(159,191,214,0.65)"/>
    <rect x="388" y="528" width="160" height="70" rx="8" fill="rgba(159,191,214,0.65)"/>
    <rect x="612" y="500" width="186" height="96" rx="10" fill="rgba(164,193,212,0.62)"/>
    <rect x="875" y="530" width="88" height="64" rx="8" fill="rgba(164,193,212,0.58)"/>
    <circle cx="970" cy="170" r="86" fill="rgba(243,111,47,0.18)"/>
    <circle cx="995" cy="192" r="46" fill="rgba(255,255,255,0.20)"/>
    <text x="110" y="145" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700">Simulação IA · ${styleName}</text>
    <text x="110" y="185" fill="rgba(255,255,255,0.82)" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="800">${lot.name}</text>
    <text x="110" y="235" fill="rgba(255,255,255,0.84)" font-family="Arial, Helvetica, sans-serif" font-size="30">Prévia conceitual gerada sobre a foto do lote</text>
  </svg>`;
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}

async function requestChatGptHouseApi(lot, styles){
  const payload = {lotId: lot.id, lotName: lot.name, lotImage: lot.thumb || '', coordinates: lot.coords || null, styles};
  try{
    const resp = await fetch('/api/chatgpt-house', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)});
    if(!resp.ok) throw new Error('api');
    const data = await resp.json();
    if(data && Array.isArray(data.images) && data.images.length){
      return data.images.map((src, i)=>({style:styles[i] || `Opção ${i+1}`, src, source:'api'}));
    }
  }catch(e){}
  return styles.map(style=>({style, src: houseMockImage(lot, style), source:'fallback'}));
}

function selectedHouseStyles(){
  return Array.from(document.querySelectorAll('[data-house-style]:checked')).map(x=>x.value).slice(0,3);
}
function enforceHouseStyleLimit(changed){
  const checked = selectedHouseStyles();
  if(checked.length > 3 && changed){ changed.checked = false; toast('Selecione até 3 estilos.'); }
}


function homeForGeneratedStyle(style=''){
  const s = String(style).toLowerCase();
  const byId = id => HOMES.find(h=>h.id===id) || HOMES[0];
  if(s.includes('térrea') || s.includes('terrea')) return byId('armonia');
  if(s.includes('contempor')) return byId('essenza');
  if(s.includes('biof')) return byId('essenza');
  if(s.includes('minimal')) return byId('compacta');
  if(s.includes('resort')) return byId('horizonti');
  if(s.includes('mediterr')) return byId('villa');
  return HOMES.find(h=>h.tier === 'premium') || HOMES[0];
}

function openFinancialSimulatorFromGeneratedHouse(lotId, style=''){
  const lot = LOTS.find(l=>l.id===lotId) || state.lot || LOTS[0];
  const home = homeForGeneratedStyle(style);

  state.lot = lot;
  state.home = home;
  state.customLotPrice = lot.price;
  state.customHomePrice = home.price;
  state.mode = 'combo';

  if($('#buyMode')) $('#buyMode').value = 'combo';

  const houseModal = document.getElementById('houseSimModal');
  if(houseModal){
    houseModal.classList.remove('show');
    houseModal.innerHTML = '';
  }

  closeModal();
  syncPriceInputs();
  renderAll();

  toast(`Simulador financeiro aberto: ${lot.name} + ${home.name}.`);
  setTimeout(()=>document.querySelector('#bandeja')?.scrollIntoView({behavior:'smooth'}), 120);
}


function saveGeneratedHouseImagesToGallery(lot, images=[]){
  if(!lot || !Array.isArray(images) || !images.length) return 0;
  const targetKey = mediaTargetLotKeyV79(lot.id);
  const items = readFieldMediaV79();
  let saved = 0;
  images.forEach((item, idx)=>{
    if(!item || !item.src) return;
    const exists = items.some(media => media.targetKey === targetKey && media.type === 'image' && media.src === item.src);
    if(exists) return;
    items.push({
      id:`media-ai-${Date.now()}-${idx}-${Math.random().toString(16).slice(2)}`,
      targetKey,
      type:'image',
      src:item.src,
      name:`simulacao-ia-${(item.style || 'casa').toLowerCase().replace(/[^a-z0-9]+/gi,'-')}.png`,
      note:`Imagem gerada por IA para ${lot.name} · ${item.style || 'estilo selecionado'}`,
      createdAt:new Date().toISOString(),
      generatedBy:'chatgpt-house-api'
    });
    saved += 1;
  });
  if(saved) saveFieldMediaV79(items);
  return saved;
}

function openHouseSimulation(lotId){
  const lot = LOTS.find(l=>l.id===lotId);
  if(!lot) return;
  const modal = document.getElementById('houseSimModal');
  const styleOptions = HOUSE_STYLE_LIBRARY.map((item, idx)=>`
    <label class="houseStyleOption"><input type="checkbox" data-house-style value="${item.name}" ${idx<3?'checked':''}><span><b>${item.name}</b><br><small>${item.desc}</small></span></label>
  `).join('');
  modal.innerHTML = `
    <div class="houseSimCard">
      <div class="houseSimHead">
        <div><span class="tag">Simular Casa</span><h2>${lot.name}</h2><p class="muted">Selecione até 3 estilos para gerar prévias da casa sobre a foto do lote. Depois você poderá salvar as imagens na galeria do lote e abrir o simulador financeiro já com o lote e a casa correspondente.</p></div>
        <button class="btn light small" data-close-house-sim>Fechar</button>
      </div>
      <div class="houseSimBody">
        <div class="houseSimPreview">
          <img src="${lot.thumb || makeSvgDataUri(lot.name, 'Foto base do lote', '#d9d2c8', '#efe8de')}" alt="${lot.name}">
          <div class="res" style="margin-top:12px"><small>Base do lote</small><b>${lot.area} m² · ${lot.dims}</b></div>
          <div class="res" style="margin-top:10px"><small>Empreendimento</small><b>${lot.project}</b></div>
        </div>
        <div>
          <div class="houseStyleGrid">${styleOptions}</div>
          <div class="houseSimGenerate">
            <button class="btn primary" id="generateHouseSimulation">Gerar simulações</button>
            <button class="btn light" data-close-house-sim>Cancelar</button>
          </div>
          <div id="houseSimResults" class="houseSimResults"><div class="houseLoading">Escolha até 3 estilos e clique em “Gerar simulações”.</div></div>
        </div>
      </div>
    </div>`;
  modal.classList.add('show');
  modal.querySelectorAll('[data-house-style]').forEach(chk=>chk.addEventListener('change', ()=>enforceHouseStyleLimit(chk)));
  modal.querySelectorAll('[data-close-house-sim]').forEach(btn=>btn.onclick=()=>{ modal.classList.remove('show'); modal.innerHTML='';});
  const generateBtn = document.getElementById('generateHouseSimulation');
  generateBtn.onclick = async ()=>{
    const styles = selectedHouseStyles();
    if(!styles.length){ toast('Selecione pelo menos um estilo.'); return; }
    const results = document.getElementById('houseSimResults');
    results.innerHTML = '<div class="houseLoading">Gerando propostas visuais do lote com os estilos escolhidos...</div>';
    const images = await requestChatGptHouseApi(lot, styles);
    results.innerHTML = `
      <div class="houseSimToolbar">
        <button class="btn primary" type="button" id="saveGeneratedAiImagesToGallery">Salvar imagens na galeria</button>
        <button class="btn light" type="button" id="openGeneratedAiGallery">Ver galeria do lote</button>
      </div>
      ${images.map((item, idx)=>`
      <div class="houseResultCard">
        <img src="${item.src}" alt="${item.style}" data-zoom-src="${item.src}">
        <div class="houseResultMeta"><h4>${item.style}</h4><span class="tag">${item.source==='api'?'API ChatGPT':'prévia'}</span></div>
        <p>Simulação visual da implantação da casa no lote, considerando o estilo arquitetônico selecionado.</p>
        <button class="btn primary houseFinancialCta" type="button" data-open-financial-sim="${lot.id}" data-house-style="${item.style}">Abrir simulador financeiro</button>
        <div class="houseResultNote">Este botão leva o lote atual e a casa correspondente ao estilo escolhido para o simulador financeiro.</div>
      </div>`).join('')}`;
    results.querySelectorAll('[data-zoom-src]').forEach(img=>img.onclick=()=>openImagePreview(img.dataset.zoomSrc, img.alt || 'Simulação de casa'));
    results.querySelectorAll('[data-open-financial-sim]').forEach(btn=>{
      btn.onclick = ()=>openFinancialSimulatorFromGeneratedHouse(btn.dataset.openFinancialSim, btn.dataset.houseStyle || '');
    });
    const saveAiBtn = document.getElementById('saveGeneratedAiImagesToGallery');
    if(saveAiBtn){
      saveAiBtn.onclick = ()=>{
        const added = saveGeneratedHouseImagesToGallery(lot, images);
        if(added){
          toast(`${added} imagem(ns) salvas na galeria de ${lot.name}.`);
        }else{
          toast('Essas imagens já estão salvas na galeria deste lote.');
        }
      };
    }
    const openAiGalleryBtn = document.getElementById('openGeneratedAiGallery');
    if(openAiGalleryBtn){
      openAiGalleryBtn.onclick = ()=>openFieldMediaGalleryV79(mediaTargetLotKeyV79(lot.id), `Galeria de ${lot.name}`);
    }
  };
}

(function(){
  const originalBind = bindModalActions;
  bindModalActions = function(){
    originalBind();
    document.querySelectorAll('[data-toggle-field-points]').forEach(btn=>btn.onclick=toggleFieldPointVisibility);
    document.querySelectorAll('[data-house-sim-lot]').forEach(btn=>btn.onclick=()=>openHouseSimulation(btn.dataset.houseSimLot));
    const mediaBtn = document.getElementById('openFieldMediaRegister');
    if(mediaBtn) mediaBtn.onclick = openFieldMediaRegister;
    updateFieldPointToggleButton();
  };
  const houseModal = document.getElementById('houseSimModal');
  if(houseModal){
    houseModal.addEventListener('click', (e)=>{ if(e.target.id === 'houseSimModal'){ houseModal.classList.remove('show'); houseModal.innerHTML=''; } });
  }
})();


/* v7.9 — botões AR funcionais e mídia vinculada */
var FIELD_MEDIA_STORAGE_KEY_V79 = 'fc_field_media_v79';
var fieldSessionFilesV79 = {};

function mediaTargetLotKeyV79(lotId){ return `lot:${lotId}`; }

function readFieldMediaV79(){
  try{
    const raw = JSON.parse(localStorage.getItem(FIELD_MEDIA_STORAGE_KEY_V79) || '[]');
    return Array.isArray(raw) ? raw : [];
  }catch(e){
    return [];
  }
}

function saveFieldMediaV79(items){
  localStorage.setItem(FIELD_MEDIA_STORAGE_KEY_V79, JSON.stringify(items));
}

function fieldMediaForTargetV79(key){
  return readFieldMediaV79().filter(item=>item.targetKey === key);
}

function lotMediaImagesV79(lotId){
  return fieldMediaForTargetV79(mediaTargetLotKeyV79(lotId))
    .filter(item=>item.type === 'image' && item.src)
    .map(item=>item.src);
}

function fieldCurrentLotIdV79(){
  const btn = document.getElementById('openFieldMediaRegister');
  return btn?.dataset?.mediaLot || state.lot?.id || LOTS[0]?.id;
}

function fieldCurrentLotV79(){
  return LOTS.find(l=>l.id === fieldCurrentLotIdV79()) || state.lot || LOTS[0];
}

function lotGallery(l){
  const media = lotMediaImagesV79(l.id);
  const gallery = Array.isArray(l.gallery) ? l.gallery.filter(Boolean) : [];
  const base = l.thumb || makeSvgDataUri(l.name, 'Vista geral do lote e contexto urbano', '#466a43', '#c2ca8e');
  return [
    ...media,
    ...gallery,
    base,
    makeSvgDataUri(l.project, 'Perspectiva de implantação e frente do lote', '#5f7c4c', '#d6a76e'),
    makeSvgDataUri((l.area || '-') + ' m²', 'Leitura de potencial construtivo e posição', '#2a4e5f', '#7fa5b8')
  ].filter((src, index, arr)=>src && arr.indexOf(src)===index);
}

function renderGallery(images, galleryId='galleryViewport'){
  return `
    <div class="galleryShell">
      <button class="galleryArrow prev" type="button" data-gallery-nav="prev" data-gallery-target="${galleryId}" aria-label="Imagem anterior">‹</button>
      <div class="galleryViewport" id="${galleryId}">
        ${images.map((src,i)=>`<div class="gallerySlide"><img class="zoomableImage" data-zoom-src="${src}" src="${src}" alt="Imagem ${i+1}"></div>`).join('')}
      </div>
      <button class="galleryArrow next" type="button" data-gallery-nav="next" data-gallery-target="${galleryId}" aria-label="Próxima imagem">›</button>
    </div>
  `;
}

function openImagePreview(src,title='Imagem'){
  const modal = document.getElementById('fieldMediaModal');
  if(!modal) return;
  modal.innerHTML = `
    <div class="zoomCard">
      <div class="zoomHead"><b>${title}</b><button class="btn light small" data-close-field-media>Fechar</button></div>
      <div class="zoomBody"><img class="zoomModalImage" src="${src}" alt="${title}"></div>
    </div>`;
  modal.classList.add('show');
  bindFieldMediaModalV79();
}

function openFieldMediaRegister(){
  const lot = fieldCurrentLotV79();
  const targetKey = mediaTargetLotKeyV79(lot.id);
  const modal = document.getElementById('fieldMediaModal');
  if(!modal){
    toast('Janela de mídia não encontrada.');
    return;
  }
  modal.innerHTML = `
    <div class="fieldMediaCard">
      <div class="fieldMediaHead">
        <div><span class="tag">Cadastro de mídia</span><h2>Adicionar mídia ao lote</h2><p class="muted">As imagens entram automaticamente na galeria do lote.</p></div>
        <button class="btn light small" data-close-field-media>Fechar</button>
      </div>
      <div class="fieldMediaBody">
        <div class="confirmBox" style="margin-bottom:14px">
          <h3>${lot.name}</h3>
          <p>Vinculando mídia ao lote atual da experiência em campo.</p>
        </div>
        <div class="modalFormGrid">
          <div class="modalField full"><label>Fotos já tiradas</label><input type="file" id="mediaImagesV79" accept="image/*" multiple></div>
          <div class="modalField full"><label>Tirar foto agora</label><input type="file" id="mediaCameraV79" accept="image/*" capture="environment"></div>
          <div class="modalField full"><label>Vídeos</label><input type="file" id="mediaVideosV79" accept="video/*" capture="environment" multiple></div>
          <div class="modalField full"><label>Arquivos</label><input type="file" id="mediaFilesV79" multiple></div>
          <div class="modalField full"><label>Link do Google Drive</label><input type="url" id="mediaDriveV79" placeholder="https://drive.google.com/..."></div>
          <div class="modalField full"><label>Observação</label><textarea id="mediaNoteV79" placeholder="Ex.: foto da testada, esquina, vista, documento do lote..."></textarea></div>
        </div>
        <div class="actions"><button class="btn primary" id="saveFieldMediaV79" data-target-key="${targetKey}">Salvar mídia</button><button class="btn light" data-open-media-gallery-v79="${targetKey}">Ver galeria</button></div>
      </div>
    </div>`;
  modal.classList.add('show');
  bindFieldMediaModalV79();
}

async function saveFieldMediaFromModalV79(){
  const lot = fieldCurrentLotV79();
  const targetKey = mediaTargetLotKeyV79(lot.id);
  const note = (document.getElementById('mediaNoteV79')?.value || '').trim();
  const items = readFieldMediaV79();
  const now = new Date().toISOString();

  const addImageFile = async (file) => {
    const src = await fileToCompressedImage(file, 1400, .82);
    if(src){
      items.push({id:`media-${Date.now()}-${Math.random().toString(16).slice(2)}`, targetKey, type:'image', src, name:file.name, note, createdAt:now});
    }
  };

  const images = [
    ...Array.from(document.getElementById('mediaImagesV79')?.files || []),
    ...Array.from(document.getElementById('mediaCameraV79')?.files || [])
  ];
  for(const file of images.slice(0,8)) await addImageFile(file);

  Array.from(document.getElementById('mediaVideosV79')?.files || []).slice(0,6).forEach(file=>{
    const id = `media-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const url = URL.createObjectURL(file);
    fieldSessionFilesV79[id] = url;
    items.push({id,targetKey,type:'video',name:file.name,mime:file.type,size:file.size,note,createdAt:now,sessionUrl:url});
  });

  Array.from(document.getElementById('mediaFilesV79')?.files || []).slice(0,12).forEach(file=>{
    const id = `media-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    items.push({id,targetKey,type:'file',name:file.name,mime:file.type,size:file.size,note,createdAt:now});
  });

  const drive = (document.getElementById('mediaDriveV79')?.value || '').trim();
  if(drive){
    items.push({id:`media-${Date.now()}-drive`,targetKey,type:'drive',name:'Google Drive',url:drive,note,createdAt:now});
  }

  saveFieldMediaV79(items);
  toast('Mídia vinculada ao lote.');
  const modal = document.getElementById('fieldMediaModal');
  modal.classList.remove('show');
  modal.innerHTML = '';
}

function openFieldMediaGalleryV79(targetKey, title='Galeria'){
  const media = fieldMediaForTargetV79(targetKey);
  const images = media.filter(m=>m.type==='image' && m.src);
  const videos = media.filter(m=>m.type==='video');
  const files = media.filter(m=>m.type==='file' || m.type==='drive');
  const modal = document.getElementById('fieldMediaModal');
  if(!modal) return;
  modal.innerHTML = `
    <div class="fieldMediaCard">
      <div class="fieldMediaHead">
        <div><span class="tag">Galeria vinculada</span><h2>${title}</h2><p class="muted">${media.length ? `${media.length} item(ns) cadastrados.` : 'Nenhuma mídia cadastrada para este lote.'}</p></div>
        <button class="btn light small" data-close-field-media>Fechar</button>
      </div>
      <div class="fieldMediaBody">
        ${images.length ? `<div class="fieldMediaGrid">${images.map(img=>`<img class="zoomableImage" data-zoom-src="${img}" src="${img}" alt="${title}">`).join('')}</div>` : `<div class="mediaEmpty">Nenhuma imagem cadastrada. Use “Adicionar mídia”.</div>`}
        ${videos.length ? `<div class="mediaList"><b>Vídeos</b>${videos.map(v=>v.sessionUrl ? `<a href="${v.sessionUrl}" target="_blank">${v.name}<small>abrir</small></a>` : `<span>${v.name}<small>registrado</small></span>`).join('')}</div>` : ''}
        ${files.length ? `<div class="mediaList"><b>Arquivos e Drive</b>${files.map(f=>f.type==='drive' ? `<a href="${f.url}" target="_blank">${f.name}<small>Google Drive</small></a>` : `<span>${f.name}<small>${((f.size||0)/1024/1024).toFixed(1)} MB</small></span>`).join('')}</div>` : ''}
        <div class="actions" style="margin-top:16px"><button class="btn primary" id="openFieldMediaRegisterFromGalleryV79">Adicionar mídia</button></div>
      </div>
    </div>`;
  modal.classList.add('show');
  bindFieldMediaModalV79();
}

function bindFieldMediaModalV79(){
  document.querySelectorAll('[data-close-field-media]').forEach(btn=>btn.onclick=()=>{
    const modal=document.getElementById('fieldMediaModal');
    modal.classList.remove('show');
    modal.innerHTML='';
  });
  const saveBtn = document.getElementById('saveFieldMediaV79');
  if(saveBtn) saveBtn.onclick = saveFieldMediaFromModalV79;
  document.querySelectorAll('[data-open-media-gallery-v79]').forEach(btn=>btn.onclick=()=>openFieldMediaGalleryV79(btn.dataset.openMediaGalleryV79, fieldCurrentLotV79().name));
  const addFromGallery = document.getElementById('openFieldMediaRegisterFromGalleryV79');
  if(addFromGallery) addFromGallery.onclick = openFieldMediaRegister;
  document.querySelectorAll('[data-zoom-src]').forEach(img=>img.onclick=()=>openImagePreview(img.dataset.zoomSrc, img.alt || 'Imagem'));
}

(function(){
  const previousBind = bindModalActions;
  bindModalActions = function(){
    previousBind();
    document.querySelectorAll('[data-house-sim-lot]').forEach(btn=>btn.onclick=()=>openHouseSimulation(btn.dataset.houseSimLot));
    document.querySelectorAll('[data-toggle-field-points]').forEach(btn=>btn.onclick=toggleFieldPointVisibility);
    const mediaBtn = document.getElementById('openFieldMediaRegister');
    if(mediaBtn) mediaBtn.onclick = openFieldMediaRegister;
    document.querySelectorAll('[data-zoom-src]').forEach(img=>img.onclick=()=>openImagePreview(img.dataset.zoomSrc, img.alt || 'Imagem'));
  };
  const mediaModal = document.getElementById('fieldMediaModal');
  if(mediaModal){
    mediaModal.addEventListener('click', e=>{
      if(e.target.id === 'fieldMediaModal'){
        mediaModal.classList.remove('show');
        mediaModal.innerHTML='';
      }
    });
  }
  const houseModal = document.getElementById('houseSimModal');
  if(houseModal){
    houseModal.addEventListener('click', e=>{
      if(e.target.id === 'houseSimModal'){
        houseModal.classList.remove('show');
        houseModal.innerHTML='';
      }
    });
  }
})();


/* v8.0 — refinamentos da experiência AR */
function pointIconGlyphV80(point){
  const txt = String(point?.label || '').toLowerCase();
  if(point?.kind === 'lot') return '⬚';
  if(txt.includes('portaria') || txt.includes('acesso')) return '⌂';
  if(txt.includes('verde') || txt.includes('praça') || txt.includes('lazer') || txt.includes('clube')) return '✦';
  return '⌖';
}

function fieldPointHtml(points=[]){
  const finalPoints = points.length ? points : [
    {kind:'place', label:'Portaria', distance:49, bearing:309},
    {kind:'place', label:'Lazer', distance:25, bearing:197},
    {kind:'lot', label:'Lote', distance:6, bearing:0}
  ];
  return finalPoints.slice(0,4).map((p,i)=>`
    <button type="button" class="fieldPin ${p.kind === 'lot' ? 'nearLot' : 'placePin'} p${i+1}" data-ar-point-index="${i}" data-ar-point-kind="${p.kind || ''}" data-ar-point-id="${p.id || ''}" data-ar-point-label="${esc(String(p.label || ''))}">
      <div class="fieldPinHead">
        <span class="fieldPinDir" aria-hidden="true"><span class="fieldPinDirArrow" style="transform:rotate(${pointArrowRotation(p)}deg)">${fieldDirectionArrowSvg()}</span></span>
        <div class="fieldPinLabel">
          <span class="fieldPinIcon" aria-hidden="true">${fieldPointIconSvg(p)}</span>
          <span class="fieldPinLabelText">${p.label}</span>
        </div>
      </div>
      <small><span>${p.distance} m</span><b>•</b><span class="fieldBearingValue">${relativeBearingText(p)}°</span></small>
    </button>
  `).join('');
}

function openFieldPointDetailsV80(point){
  if(!point) return;
  if(point.kind === 'lot' && point.id){
    openLotDetails(point.id);
    return;
  }
  const lot = LOTS.find(l=>l.id===fieldActiveLotId) || fieldCurrentLotV79() || LOTS[0];
  const icon = pointIconGlyphV80(point);
  const descMap = {
    'portaria':'Ponto de acesso principal do empreendimento, útil para orientação e chegada do cliente.',
    'acesso':'Referência viária próxima ao lote, importante para leitura de localização em campo.',
    'área verde':'Área verde e espaço de contemplação associado ao empreendimento.',
    'praça':'Praça ou área de convivência próxima ao lote.',
    'lazer':'Equipamento de lazer próximo ao lote.',
    'clube':'Clube, lazer ou estrutura social do condomínio.'
  };
  const key = String(point.label || '').toLowerCase();
  let desc = descMap[key] || `Referência em campo vinculada ao empreendimento ${lot.project}.`;
  const media = fieldMediaForTargetV79(mediaTargetLotKeyV79(lot.id));
  openModal(`
    <div class="modalHead"><div><span class="tag">Ponto em realidade aumentada</span><h2>${esc(point.label)}</h2><p class="muted">${esc(lot.project)}</p></div><button class="btn light small" data-close-modal>Fechar</button></div>
    <div class="modalBody arPointModal">
      <div class="arPointHero">
        <div class="arPointIcon">${icon}</div>
        <div><h3>${esc(point.label)}</h3><p>${esc(desc)}</p></div>
      </div>
      <div class="featureList"><span>${Math.round(point.distance || 0)} m</span><span>${Math.round(point.bearing || 0)}°</span><span>${esc(lot.name)}</span></div>
      <p>Este ponto está sendo usado como referência visual em campo. Você pode usar as mídias vinculadas ao lote para documentar fotos, vídeos e arquivos relacionados a essa posição.</p>
      ${media.length ? `<div class="arHelpBox"><b>Mídias vinculadas ao lote:</b> ${media.length} item(ns) disponíveis na galeria.</div>` : ''}
      <div class="actions">
        <button class="btn primary" data-route-lot="${lot.id}">Abrir rota</button>
        <button class="btn primary" data-ar-lot="${lot.id}">Voltar para AR</button>
        <button class="btn primary" type="button" id="openFieldMediaRegister" data-media-lot="${lot.id}">Adicionar mídia</button>
      </div>
    </div>
  `);
}

function bindARPointClicksV80(){
  document.querySelectorAll('[data-ar-point-index]').forEach(btn=>{
    btn.onclick = ()=>{
      const idx = Number(btn.dataset.arPointIndex || -1);
      const point = fieldCurrentPoints[idx];
      if(point) openFieldPointDetailsV80(point);
    };
  });
  const status = document.querySelector('.fieldStatus');
  if(status){
    status.onclick = ()=>{
      const lot = LOTS.find(l=>l.id===fieldActiveLotId) || fieldCurrentLotV79() || LOTS[0];
      if(lot) openLotDetails(lot.id);
    };
  }
}

const _updateFieldPins_v80 = updateFieldPins;
updateFieldPins = function(points){
  _updateFieldPins_v80(points);
  bindARPointClicksV80();
};

const _openARView_v80 = openARView;
openARView = function(id){
  _openARView_v80(id);
  bindARPointClicksV80();
};

function renderUnifiedFileListV80(){
  const list = document.getElementById('mediaUnifiedListV80');
  const input = document.getElementById('mediaUnifiedV80');
  if(!list || !input) return;
  const files = Array.from(input.files || []);
  list.innerHTML = files.length ? files.map(file=>`<div>${esc(file.name)} <small>· ${((file.size||0)/1024/1024).toFixed(1)} MB</small></div>`).join('') : '<div>Nenhum arquivo selecionado.</div>';
}

openFieldMediaRegister = function(){
  const lot = fieldCurrentLotV79();
  const targetKey = mediaTargetLotKeyV79(lot.id);
  const modal = document.getElementById('fieldMediaModal');
  if(!modal){ toast('Janela de mídia não encontrada.'); return; }
  modal.innerHTML = `
    <div class="fieldMediaCard compact">
      <div class="fieldMediaHead">
        <div><span class="tag">Cadastro de mídia</span><h2>Adicionar mídia ao lote</h2></div>
        <button class="btn light small" data-close-field-media>Fechar</button>
      </div>
      <div class="fieldMediaBody">
        <div class="confirmBox" style="margin-bottom:14px">
          <h3>${lot.name}</h3>
          <p>As mídias serão vinculadas ao lote atual e aparecerão automaticamente na galeria.</p>
        </div>
        <p class="fieldMediaCompactIntro">Use um único envio para fotos, vídeos ou arquivos. Em dispositivos móveis, o seletor também pode abrir a câmera.</p>
        <div class="modalFormGrid">
          <div class="modalField full"><label>Mídias e arquivos</label><input type="file" id="mediaUnifiedV80" accept="image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx,.zip,.rar,.txt" multiple></div>
          <div class="modalField full"><label>Link do Google Drive (opcional)</label><input type="url" id="mediaDriveV80" placeholder="https://drive.google.com/..."></div>
          <div class="modalField full"><label>Observação</label><textarea id="mediaNoteV80" placeholder="Ex.: foto da testada, vídeo do entorno, documento, levantamento de campo..."></textarea></div>
        </div>
        <div id="mediaUnifiedListV80" class="mediaUnifiedList"><div>Nenhum arquivo selecionado.</div></div>
        <div class="actions"><button class="btn primary" id="saveFieldMediaV80" data-target-key="${targetKey}">Salvar mídia</button><button class="btn light" data-open-media-gallery-v79="${targetKey}">Ver galeria</button></div>
      </div>
    </div>`;
  modal.classList.add('show');
  bindFieldMediaModalV80();
};

async function saveFieldMediaFromModalV80(){
  const lot = fieldCurrentLotV79();
  const targetKey = mediaTargetLotKeyV79(lot.id);
  const note = (document.getElementById('mediaNoteV80')?.value || '').trim();
  const items = readFieldMediaV79();
  const now = new Date().toISOString();
  const files = Array.from(document.getElementById('mediaUnifiedV80')?.files || []);
  for(const file of files.slice(0,20)){
    if((file.type || '').startsWith('image/')){
      const src = await fileToCompressedImage(file, 1400, .82);
      if(src) items.push({id:`media-${Date.now()}-${Math.random().toString(16).slice(2)}`, targetKey, type:'image', src, name:file.name, note, createdAt:now});
    }else if((file.type || '').startsWith('video/')){
      const id = `media-${Date.now()}-${Math.random().toString(16).slice(2)}`;
      const url = URL.createObjectURL(file);
      fieldSessionFilesV79[id] = url;
      items.push({id,targetKey,type:'video',name:file.name,mime:file.type,size:file.size,note,createdAt:now,sessionUrl:url});
    }else{
      items.push({id:`media-${Date.now()}-${Math.random().toString(16).slice(2)}`, targetKey, type:'file', name:file.name, mime:file.type, size:file.size, note, createdAt:now});
    }
  }
  const drive = (document.getElementById('mediaDriveV80')?.value || '').trim();
  if(drive) items.push({id:`media-${Date.now()}-drive`,targetKey,type:'drive',name:'Google Drive',url:drive,note,createdAt:now});
  saveFieldMediaV79(items);
  toast('Mídia vinculada ao lote.');
  const modal = document.getElementById('fieldMediaModal');
  modal.classList.remove('show');
  modal.innerHTML = '';
}

function bindFieldMediaModalV80(){
  bindFieldMediaModalV79();
  const unified = document.getElementById('mediaUnifiedV80');
  if(unified) unified.onchange = renderUnifiedFileListV80;
  const saveBtn = document.getElementById('saveFieldMediaV80');
  if(saveBtn) saveBtn.onclick = saveFieldMediaFromModalV80;
}

(function(){
  const previousBind = bindModalActions;
  bindModalActions = function(){
    previousBind();
    document.querySelectorAll('[data-ar-point-index]').forEach(btn=>{
      btn.onclick = ()=>{
        const idx = Number(btn.dataset.arPointIndex || -1);
        const point = fieldCurrentPoints[idx];
        if(point) openFieldPointDetailsV80(point);
      };
    });
    const mediaBtn = document.getElementById('openFieldMediaRegister');
    if(mediaBtn) mediaBtn.onclick = openFieldMediaRegister;
  };
})();


/* v9.1 — botão Ver no mapa realmente leva para o mapa visual */
function scrollToMapVisualV91(){
  const target = document.querySelector('#mapa .mapViewport') || document.querySelector('#mapa .mapExperience') || document.querySelector('#mapa');
  if(!target) return;
  const header = document.querySelector('.top');
  const offset = (header ? header.getBoundingClientRect().height : 0) + 12;
  const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({top: Math.max(0, top), behavior:'smooth'});
}

function viewMapLotV91(id){
  selectedMapLotId = id;
  renderMapLots();
  renderMapSelection();
  renderMapFinder();
  requestAnimationFrame(()=>setTimeout(scrollToMapVisualV91, 90));
  toast('Lote marcado no mapa visual.');
}

(function(){
  const previousRenderMapFinder = renderMapFinder;
  renderMapFinder = function(){
    previousRenderMapFinder();
    document.querySelectorAll('[data-view-map-lot]').forEach(btn=>{
      btn.onclick = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        viewMapLotV91(btn.dataset.viewMapLot);
      };
    });
    document.querySelectorAll('[data-view-map-lot-card]').forEach(row=>{
      row.onclick = (event)=>{
        if(event.target.closest('button')) return;
        viewMapLotV91(row.dataset.viewMapLotCard);
      };
    });
  };

  const previousSelectMapLot = selectMapLot;
  selectMapLot = function(id, options = {}){
    if(options.scrollToMap){
      viewMapLotV91(id);
      return;
    }
    previousSelectMapLot(id, options);
  };

  renderMapFinder();
})();



document.addEventListener('click', (event) => {
  const routeBtn = event.target.closest('[data-route-lot],[data-map-route]');
  if(routeBtn){
    event.preventDefault();
    const id = routeBtn.dataset.routeLot || routeBtn.dataset.mapRoute;
    if(id) openRouteToLot(id);
    return;
  }
  const arBtn = event.target.closest('[data-ar-lot],[data-map-ar]');
  if(arBtn){
    event.preventDefault();
    const id = arBtn.dataset.arLot || arBtn.dataset.mapAr;
    if(id) openARView(id);
    return;
  }
});
