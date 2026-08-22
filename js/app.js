/* ==========================================================================
   Tamil Nadu Tourism & Smart Trip Planner - Global Application Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initUserSession();
  initEmergencyModal();
  injectFloatingEmergencyBtn();
});

// Toast Notification Helper
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  if (type === 'danger') icon = '⚠️';

  toast.innerHTML = `<span>${icon}</span> <div>${message}</div>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Navbar & Sticky Scroll Controller
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });
  }
}

// User Session & Authentication Persistence
function getCurrentUser() {
  const userStr = localStorage.getItem('tn_user');
  return userStr ? JSON.parse(userStr) : null;
}

function initUserSession() {
  const user = getCurrentUser();
  const navActions = document.getElementById('nav-actions');

  if (!navActions) return;

  if (user) {
    navActions.innerHTML = `
      <a href="favorites.html" class="btn btn-outline btn-sm" title="My Favorites">
        ❤️ Wishlist
      </a>
      <a href="profile.html" class="user-nav-profile">
        <div class="user-avatar">${user.name.charAt(0).toUpperCase()}</div>
        <span style="font-size:0.9rem; font-weight:600;">${user.name.split(' ')[0]}</span>
      </a>
      <button onclick="logoutUser()" class="btn btn-outline btn-sm" style="border-color:rgba(255,255,255,0.2);">
        Logout
      </button>
    `;
  } else {
    navActions.innerHTML = `
      <a href="login.html" class="btn btn-outline btn-sm">Login</a>
      <a href="register.html" class="btn btn-primary btn-sm">Register</a>
    `;
  }
}

function logoutUser() {
  localStorage.removeItem('tn_user');
  showToast('Logged out successfully', 'info');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 800);
}

// Favorites State Management
function getFavorites() {
  const favs = localStorage.getItem('tn_favorites');
  return favs ? JSON.parse(favs) : [];
}

function toggleFavorite(placeId, event) {
  if (event) event.stopPropagation();

  const user = getCurrentUser();
  if (!user) {
    showToast('Please login to add places to your favorites!', 'danger');
    setTimeout(() => window.location.href = 'login.html', 1500);
    return;
  }

  let favs = getFavorites();
  const index = favs.indexOf(placeId);

  if (index > -1) {
    favs.splice(index, 1);
    showToast('Removed from Favorites', 'info');
  } else {
    favs.push(placeId);
    showToast('Added to Favorites ❤️', 'success');
  }

  localStorage.setItem('tn_favorites', JSON.stringify(favs));

  // Update UI heart icons if present on page
  const heartBtns = document.querySelectorAll(`.fav-btn-${placeId}`);
  heartBtns.forEach(btn => {
    if (index > -1) {
      btn.classList.remove('active');
    } else {
      btn.classList.add('active');
    }
  });

  // Dispatch custom event for pages listing favorites
  window.dispatchEvent(new CustomEvent('favoritesUpdated'));
}

// Emergency Quick Floating Widget Injection
function injectFloatingEmergencyBtn() {
  if (document.getElementById('floating-emergency-trigger')) return;

  const btn = document.createElement('button');
  btn.id = 'floating-emergency-trigger';
  btn.className = 'floating-emergency-btn';
  btn.title = '24/7 Tourist Emergency Help';
  btn.innerHTML = '🚨';
  btn.onclick = openEmergencyModal;
  document.body.appendChild(btn);
}

function initEmergencyModal() {
  if (document.getElementById('emergency-modal-overlay')) return;

  const modalHtml = `
    <div id="emergency-modal-overlay" class="modal-overlay">
      <div class="modal-card">
        <button class="modal-close-btn" onclick="closeEmergencyModal()">✕</button>
        <div style="text-align:center; margin-bottom:1.5rem;">
          <span style="font-size:3rem; display:block; margin-bottom:0.5rem;">🚨</span>
          <h2 style="font-size:1.8rem;">Tourist Emergency SOS Hub</h2>
          <p style="color:var(--text-muted); font-size:0.9rem;">Immediate emergency assistance across Tamil Nadu</p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1.5rem;">
          <a href="tel:108" class="btn btn-danger" style="display:flex; flex-direction:column; padding:1.2rem; align-items:center;">
            <span style="font-size:1.5rem;">🚑</span>
            <strong>108 Ambulance</strong>
            <span style="font-size:0.75rem; opacity:0.8;">Medical Emergency</span>
          </a>
          <a href="tel:100" class="btn btn-primary" style="display:flex; flex-direction:column; padding:1.2rem; align-items:center;">
            <span style="font-size:1.5rem;">🚓</span>
            <strong>100 Police</strong>
            <span style="font-size:0.75rem; opacity:0.8;">Crime & Safety</span>
          </a>
          <a href="tel:181" class="btn btn-secondary" style="display:flex; flex-direction:column; padding:1.2rem; align-items:center;">
            <span style="font-size:1.5rem;">👩</span>
            <strong>181 Women Helpline</strong>
            <span style="font-size:0.75rem; opacity:0.8;">Women Safety</span>
          </a>
          <a href="tel:1077" class="btn btn-outline" style="display:flex; flex-direction:column; padding:1.2rem; align-items:center; border-color:var(--border-dark);">
            <span style="font-size:1.5rem;">🌧️</span>
            <strong>1077 Disaster</strong>
            <span style="font-size:0.75rem; opacity:0.8;">Disaster Control</span>
          </a>
        </div>

        <div style="text-align:center; border-top:1px solid var(--border-dark); padding-top:1.2rem;">
          <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1rem;">
            Need hospital, police station or pharmacy details for your destination?
          </p>
          <a href="emergency.html" class="btn btn-outline btn-sm" onclick="closeEmergencyModal()">
            View Full Emergency Directory →
          </a>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function openEmergencyModal() {
  const modal = document.getElementById('emergency-modal-overlay');
  if (modal) modal.classList.add('active');
}

function closeEmergencyModal() {
  const modal = document.getElementById('emergency-modal-overlay');
  if (modal) modal.classList.remove('active');
}

// Global Search Redirection
function handleGlobalSearch(event) {
  if (event) event.preventDefault();

  const searchInput = document.getElementById('hero-search-query');
  const districtSelect = document.getElementById('hero-search-district');
  const categorySelect = document.getElementById('hero-search-category');

  const query = searchInput ? searchInput.value.trim() : '';
  const district = districtSelect ? districtSelect.value : '';
  const category = categorySelect ? categorySelect.value : '';

  const params = new URLSearchParams();
  if (query) params.append('q', query);
  if (district) params.append('district', district);
  if (category) params.append('category', category);

  window.location.href = `places.html?${params.toString()}`;
}

// Helper to render star rating stars HTML
function renderStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  let starsHtml = '';

  for (let i = 0; i < fullStars; i++) starsHtml += '★';
  if (hasHalf) starsHtml += '½';
  const emptyCount = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyCount; i++) starsHtml += '☆';

  return `<span style="color:#fbbf24;">${starsHtml}</span> <span style="font-weight:700;">${rating}</span>`;
}
