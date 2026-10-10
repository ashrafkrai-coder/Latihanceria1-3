const $ = s => document.querySelector(s), app = $('#app'), homeBtn = $('#homeBtn');
let year = Number(localStorage.getItem('latihan_year') || 1), state = null;
const USER_KEY = 'latihan_user';

const safe = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const getHistory = () => {
  try { return JSON.parse(localStorage.getItem('latihan_history') || '[]'); }
  catch { return []; }
};

function saveHistory(h) {
  localStorage.setItem('latihan_history', JSON.stringify(h.slice(0, 100)));
}

function getUserProfile() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    const profile = JSON.parse(raw);
    const name = String(profile?.name || '').trim();
    if (!name) return null;
    const photo = typeof profile?.photo === 'string' && /^data:image\/jpeg;base64,[A-Za-z0-9+/]+=*$/.test(profile.photo)
      ? profile.photo
      : '';
    return {
      name,
      className: String(profile?.className || '').trim() || `Tahun ${year}`,
      createdAt: profile?.createdAt || new Date().toISOString(),
      photo
    };
  } catch {
    return null;
  }
}

async function processProfilePhoto(file) {
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
    throw new Error('Pilih foto dalam format JPG, PNG atau WebP.');
  }
  if (file.size > 5 * 1024 * 1024) {
    throw new Error('Saiz foto mestilah tidak melebihi 5 MB.');
  }

  const bitmap = await createImageBitmap(file);
  const size = 256;
  const scale = Math.min(size / bitmap.width, size / bitmap.height);
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d');

  if (!context) {
    bitmap.close();
    throw new Error('Foto tidak dapat diproses pada peranti ini.');
  }

  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, size, size);
  context.drawImage(bitmap, (size - width) / 2, (size - height) / 2, width, height);
  bitmap.close();
  return canvas.toDataURL('image/jpeg', 0.8);
}

function renderAvatar(photo, className = '') {
  return photo
    ? `<img class="${className}" src="${safe(photo)}" alt="Foto profil">`
    : `<span class="${className} avatar-placeholder" aria-hidden="true">👤</span>`;
}

function saveUserProfile(profile) {
  localStorage.setItem(USER_KEY, JSON.stringify({
    name: String(profile.name || '').trim(),
    className: String(profile.className || '').trim() || `Tahun ${year}`,
    createdAt: profile.createdAt || new Date().toISOString(),
    photo: profile.photo || ''
  }));
}

function renderRegisterScreen() {
  state = null;
  homeBtn.hidden = true;
  const current = getUserProfile();
  let removePhoto = false;
  let previewUrl = '';

  app.innerHTML = `
    <section class="hero auth-hero">
      <div>
        <div class="eyebrow">Daftar pengguna</div>
        <h1>Selamat datang<br>ke Latihan Ceria! ✨</h1>
        <p>Daftar nama anda sebelum memulakan latihan.</p>
      </div>
      <div class="art">📝</div>
    </section>
    <section class="section">
      <div class="card">
        <form id="registerForm" class="register-form">
          <div class="field">
            <label for="registerPhoto">Foto pengguna</label>
            <div class="photo-picker">
              ${renderAvatar(current?.photo, 'photo-preview')}
              <div class="photo-controls">
                <input id="registerPhoto" name="photo" type="file" accept="image/jpeg,image/png,image/webp">
                <small class="muted">Pilih foto JPG, PNG atau WebP (maksimum 5 MB).</small>
                <button class="ghost" type="button" id="removeProfilePhoto" ${current?.photo ? '' : 'hidden'}>Buang foto</button>
              </div>
            </div>
          </div>
          <div class="field">
            <label for="registerName">Nama murid</label>
            <input id="registerName" name="name" type="text" maxlength="40" value="${safe(current?.name || '')}" placeholder="Contoh: Aisyah" required>
          </div>
          <div class="field">
            <label for="registerClass">Kelas / Tahun</label>
            <input id="registerClass" name="class" type="text" maxlength="30" value="${safe(current?.className || `Tahun ${year}`)}" placeholder="Contoh: 1 Amanah">
          </div>
          <button class="primary wide" type="submit">${current ? 'Simpan profil' : 'Daftar masuk'}</button>
          ${current ? '<button class="ghost wide" type="button" id="cancelEditProfile">Batal</button>' : ''}
        </form>
      </div>
    </section>
  `;
  const photoInput = $('#registerPhoto');
  photoInput.onchange = () => {
    const file = photoInput.files[0];
    if (!file) return;
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      alert('Pilih foto dalam format JPG, PNG atau WebP.');
      photoInput.value = '';
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('Saiz foto mestilah tidak melebihi 5 MB.');
      photoInput.value = '';
      return;
    }

    removePhoto = false;
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = URL.createObjectURL(file);
    const image = document.createElement('img');
    image.className = 'photo-preview';
    image.src = previewUrl;
    image.alt = 'Pratonton foto profil';
    $('.photo-preview').replaceWith(image);
    $('#removeProfilePhoto').hidden = false;
  };

  $('#removeProfilePhoto').addEventListener('click', () => {
    removePhoto = true;
    photoInput.value = '';
    const placeholder = document.createElement('span');
    placeholder.className = 'photo-preview avatar-placeholder';
    placeholder.setAttribute('aria-hidden', 'true');
    placeholder.textContent = '👤';
    $('.photo-preview').replaceWith(placeholder);
    $('#removeProfilePhoto').hidden = true;
  });

  $('#registerForm').onsubmit = async e => {
    e.preventDefault();
    const name = $('#registerName').value.trim();
    const className = $('#registerClass').value.trim() || `Tahun ${year}`;

    if (!name) {
      alert('Sila masukkan nama murid.');
      return;
    }

    const submitButton = $('#registerForm button[type="submit"]');
    submitButton.disabled = true;
    try {
      const file = photoInput.files[0];
      const photo = file
        ? await processProfilePhoto(file)
        : (removePhoto ? '' : current?.photo || '');
      saveUserProfile({
        name,
        className,
        createdAt: current?.createdAt || new Date().toISOString(),
        photo
      });
      home();
    } catch (error) {
      alert(`Profil tidak dapat disimpan: ${error.message}`);
      submitButton.disabled = false;
    } finally {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    }

  };

  $('#cancelEditProfile')?.addEventListener('click', home);
}

function home() {
  const profile = getUserProfile();
  state = null;
  homeBtn.hidden = true;

  if (!profile) {
    renderRegisterScreen();
    return;
  }

  const history = getHistory();
  const attempts = history.length;
  const avg = attempts ? Math.round(history.reduce((a, b) => a + b.score / b.total * 100, 0) / attempts) : 0;

  app.innerHTML = `
    <section class="hero">
      <div>
        <div class="eyebrow">Jom belajar bersama!</div>
        <h1>Belajar hari ini,<br>hebat setiap hari! ✨</h1>
        <p>Hai, ${safe(profile.name)}! Siap untuk latihan hari ini?</p>
      </div>
      ${profile.photo ? renderAvatar(profile.photo, 'profile-avatar') : '<div class="art">🎒</div>'}
    </section>
    <section class="section">
      <div class="tools">
        <h2>1. Pilih tahun</h2>
        <button class="ghost" id="profileBtn">👤 ${safe(profile.name)}</button>
      </div>
      <div class="years">
        ${[1, 2, 3].map(y => `<button class="year ${year === y ? 'active' : ''}" data-year="${y}"><b>Tahun ${y}</b><span>Latihan tahap ${y}</span></button>`).join('')}
      </div>
    </section>
    <section class="section">
      <h2>2. Pilih subjek <span class="muted">· 10 soalan setiap latihan</span></h2>
      <div class="subjects">
        ${Object.entries(SUBJECTS).map(([k, [name, emoji]]) => `<button class="subject" data-subject="${k}"><span class="emoji">${emoji}</span><b>${name}</b><small>Mulakan kuiz ↗</small></button>`).join('')}
      </div>
    </section>
    <section class="section">
      <h2>Profil saya</h2>
      <div class="card profile-card">
        ${renderAvatar(profile.photo, 'profile-avatar')}
        <div class="profile-pill">${safe(profile.name)}</div>
        <p><strong>Kelas:</strong> ${safe(profile.className)}</p>
        <small>Daftar sejak ${new Date(profile.createdAt).toLocaleDateString('ms-MY')}</small>
      </div>
    </section>
    <section class="section">
      <h2>Pencapaian saya</h2>
      <div class="stats">
        <div class="stat"><b>${attempts}</b><span>Latihan selesai</span></div>
        <div class="stat"><b>${avg}%</b><span>Purata markah</span></div>
        <div class="stat"><b>${attempts ? Math.max(...history.map(h => Math.round(h.score / h.total * 100))) : 0}%</b><span>Markah tertinggi</span></div>
      </div>
    </section>
    <section class="section">
      <div class="tools">
        <h2>Sejarah latihan</h2>
        <button class="ghost" id="clearHistory" ${attempts ? '' : 'disabled'}>Padam rekod</button>
      </div>
      <div class="card">
        <ul class="history">
          ${history.length ? history.slice(0, 8).map(h => `<li><span>${safe(h.date)} · Tahun ${h.year} · ${safe(SUBJECTS[h.subject]?.[0] || h.subject)}</span><strong>${h.score}/${h.total}</strong></li>`).join('') : '<li class="empty">Belum ada latihan. Pilih subjek untuk bermula! 🌟</li>'}
        </ul>
      </div>
    </section>
  `;

  document.querySelectorAll('[data-year]').forEach(b => {
    b.onclick = () => {
      year = Number(b.dataset.year);
      localStorage.setItem('latihan_year', year);
      home();
    };
  });

  document.querySelectorAll('[data-subject]').forEach(b => {
    b.onclick = () => start(b.dataset.subject);
  });

  $('#profileBtn').onclick = renderRegisterScreen;
  $('#clearHistory').onclick = () => {
    if (confirm('Padam semua rekod pencapaian pada peranti ini?')) {
      localStorage.removeItem('latihan_history');
      home();
    }
  };
}

function start(subject) {
  const questions = QUESTION_BANK[year][subject].map(([q, options, answer, why]) => ({ q, options, answer, why }));
  state = { year, subject, questions, index: 0, answers: [], selected: null, checked: false };
  homeBtn.hidden = false;
  renderQuestion();
}

function renderQuestion() {
  const s = state;
  const i = s.index;
  const item = s.questions[i];
  const pct = (i / s.questions.length) * 100;

  app.innerHTML = `
    <div class="topline">
      <div>
        <div class="muted">Tahun ${s.year} / ${safe(SUBJECTS[s.subject][0])}</div>
        <h2>Soalan ${i + 1} daripada ${s.questions.length}</h2>
      </div>
      <span class="pill">⭐ ${s.answers.filter((a, j) => a === s.questions[j].answer).length} betul</span>
    </div>
    <div class="progress"><i style="width:${pct}%"></i></div>
    <div class="card">
      <div class="muted">Pilih satu jawapan yang betul</div>
      <div class="question">${safe(item.q)}</div>
      <div class="answers">
        ${item.options.map((op, j) => `<button class="answer ${s.checked ? (j === item.answer ? 'correct' : j === s.selected ? 'wrong' : '') : (j === s.selected ? 'selected' : '')}" data-answer="${j}" ${s.checked ? 'disabled' : ''}><span class="letter">${'ABCD'[j]}</span>${safe(op)}</button>`).join('')}
      </div>
      ${s.checked ? `<div class="explain"><strong>${s.selected === item.answer ? '✅ Tepat!' : '💡 Jawapan betul: ' + safe(item.options[item.answer])}</strong><div>${safe(item.why)}</div></div>` : ''}
      <div class="bar">
        <span class="muted">${s.checked ? 'Teruskan untuk soalan seterusnya.' : 'Pilih jawapan terlebih dahulu.'}</span>
        <button id="nextBtn" class="primary" ${s.selected === null ? 'disabled' : ''}>${s.checked ? (i === s.questions.length - 1 ? 'Lihat keputusan 🏆' : 'Soalan seterusnya →') : 'Semak jawapan ✓'}</button>
      </div>
    </div>
  `;

  document.querySelectorAll('[data-answer]').forEach(b => {
    b.onclick = () => {
      s.selected = Number(b.dataset.answer);
      renderQuestion();
    };
  });

  $('#nextBtn').onclick = () => {
    if (s.selected === null) return;

    if (!s.checked) {
      s.checked = true;
      s.answers.push(s.selected);
      renderQuestion();
      return;
    }

    if (s.index === s.questions.length - 1) {
      finish();
      return;
    }

    s.index += 1;
    s.selected = null;
    s.checked = false;
    renderQuestion();
  };
}

function finish() {
  const s = state;
  const score = s.answers.reduce((a, x, i) => a + (x === s.questions[i].answer ? 1 : 0), 0);
  const pct = Math.round(score / s.questions.length * 100);
  const history = getHistory();

  history.unshift({
    date: new Date().toLocaleDateString('ms-MY'),
    year: s.year,
    subject: s.subject,
    score,
    total: s.questions.length
  });
  saveHistory(history);

  app.innerHTML = `
    <div class="card result">
      <div class="trophy">${pct === 100 ? '🏆' : pct >= 70 ? '🌟' : '💪'}</div>
      <h1>${pct === 100 ? 'Tahniah! Sempurna!' : pct >= 70 ? 'Syabas, hebat!' : 'Bagus kerana mencuba!'}</h1>
      <div class="bigscore">${score}<small> / ${s.questions.length}</small></div>
      <p>Anda mendapat ${pct}% untuk ${safe(SUBJECTS[s.subject][0])} Tahun ${s.year}.</p>
      <div class="bar" style="justify-content:center">
        <button class="ghost" id="homeResult">Ke halaman utama</button>
        <button class="primary" id="repeat">Cuba lagi ↻</button>
      </div>
    </div>
    <section class="section">
      <h2>Semak jawapan</h2>
      <div class="card">
        ${s.questions.map((q, i) => `
          <div class="review-item">
            <b>${i + 1}. ${safe(q.q)}</b>
            <p>Jawapan anda: <span class="${s.answers[i] === q.answer ? 'badgeok' : ''}">${safe(q.options[s.answers[i]])} ${s.answers[i] === q.answer ? '✓' : '✗'}</span></p>
            ${s.answers[i] !== q.answer ? `<p>Jawapan betul: <strong>${safe(q.options[q.answer])}</strong></p>` : ''}
            <p class="muted">${safe(q.why)}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;

  $('#homeResult').onclick = home;
  $('#repeat').onclick = () => start(s.subject);
}

homeBtn.onclick = () => {
  if (state && !confirm('Keluar dari latihan ini? Markah latihan semasa tidak disimpan.')) return;
  home();
};

home();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
