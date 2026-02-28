const overlay = document.createElement('div');
overlay.className = 'modal-overlay';
overlay.innerHTML = `
  <div class="modal" role="dialog" aria-modal="true">
    <button class="modal-close" aria-label="Fermer">✕</button>
    <div class="modal-preview">
      <div class="modal-preview-placeholder">Aperçu</div>
    </div>
    <div class="modal-content">
      <p class="modal-num"></p>
      <h2 class="modal-title"></h2>
      <div class="modal-tags"></div>
      <div class="modal-desc"></div>
      <div class="modal-footer"></div>
    </div>
  </div>
`;
document.body.appendChild(overlay);

// ── Grab references to modal parts ───────────────────────────
const modalPreview  = overlay.querySelector('.modal-preview');
const modalNum      = overlay.querySelector('.modal-num');
const modalTitle    = overlay.querySelector('.modal-title');
const modalTags     = overlay.querySelector('.modal-tags');
const modalDesc     = overlay.querySelector('.modal-desc');
const modalFooter   = overlay.querySelector('.modal-footer');
const modalClose    = overlay.querySelector('.modal-close');

// ── Open modal with data from a card ─────────────────────────
function openModal(card) {
  const num       = card.dataset.num       || '';
  const title     = card.dataset.title     || 'Projet';
  const tags      = card.dataset.tags      || '';
  const desc      = card.dataset.desc      || '';
  const img       = card.dataset.img       || '';
  const link      = card.dataset.link      || '';
  const linkLabel = card.dataset.linkLabel || 'Visiter';
  const pdf       = card.dataset.pdf       || '';
  
  // Fill in text
  modalNum.textContent   = num;
  modalTitle.textContent = title;
  
  // Tags
  modalTags.innerHTML = tags
  .split(',')
  .map(t => `<span>${t.trim()}</span>`)
  .join('');
  
  // Description — supports line breaks with \n
  modalDesc.innerHTML = desc
  .split('\\n')
  .map(p => `<p>${p.trim()}</p>`)
  .join('');
  
  // Preview image or placeholder
  if (img) {
    modalPreview.innerHTML = `<img src="${img}" alt="Aperçu ${title}">`;
  } else {
    modalPreview.innerHTML = `<div class="modal-preview-placeholder">Aperçu à venir</div>`;
  }
  
  // Footer buttons
  modalFooter.innerHTML = '';
  if (link) {
    modalFooter.innerHTML += `<a href="${link}" target="_blank" rel="noopener" class="modal-btn">${linkLabel}</a>`;
  }
  if (pdf) {
    modalFooter.innerHTML += `<a href="${pdf}" target="_blank" rel="noopener" class="modal-btn outline">Voir le PDF</a>`;
  }
  
  // Open
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden'; // prevent background scroll
}

// ── Close modal ───────────────────────────────────────────────
function closeModal() {
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
}

// ── Attach click listeners to all project cards ───────────────
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openModal(card));
  card.style.cursor = 'pointer';
});

// ── Close on ✕ button ─────────────────────────────────────────
modalClose.addEventListener('click', closeModal);

// ── Close on overlay background click ────────────────────────
overlay.addEventListener('click', function(e) {
  if (e.target === overlay) closeModal();
});

// ── Close on Escape key ───────────────────────────────────────
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});