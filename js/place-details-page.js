/* ==========================================================================
   Tamil Nadu Tourism & Smart Trip Planner - Place Details Page Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initPlaceDetailsPage();
});

let currentPlaceData = null;

function initPlaceDetailsPage() {
  const params = new URLSearchParams(window.location.search);
  const placeId = params.get('id') || 'tn_meenakshi';

  const place = window.TN_DATA.places.find(p => p.id === placeId) || window.TN_DATA.places[0];
  currentPlaceData = place;

  // Render hero & metadata
  document.getElementById('place-hero-img').src = place.image;
  document.getElementById('place-title').textContent = place.name;
  document.getElementById('place-district-badge').textContent = place.district;
  document.getElementById('place-category-badge').textContent = place.categoryName;
  document.getElementById('place-rating-text').innerHTML = renderStarRating(place.rating);

  // Render main text & history
  document.getElementById('place-long-desc').textContent = place.longDesc;
  document.getElementById('place-history-text').textContent = place.history;

  // Attractions
  const attractionsList = document.getElementById('place-attractions-list');
  if (attractionsList) {
    attractionsList.innerHTML = place.attractions.map(att => `
      <span class="badge badge-primary" style="font-size:0.85rem; padding:0.4rem 0.8rem;">✨ ${att}</span>
    `).join(' ');
  }

  // Quick specs
  document.getElementById('spec-open-time').textContent = place.openTime;
  document.getElementById('spec-close-time').textContent = place.closeTime;
  document.getElementById('spec-holiday').textContent = place.holiday;
  document.getElementById('spec-entry-fee').textContent = place.entryFee;
  document.getElementById('spec-best-time').textContent = place.bestTime;

  // Transport Info
  document.getElementById('bus-info-station').textContent = `${place.transport.bus.station} (${place.transport.bus.distance})`;
  document.getElementById('bus-info-detail').textContent = place.transport.bus.available;

  document.getElementById('train-info-station').textContent = `${place.transport.train.station} (${place.transport.train.distance})`;
  document.getElementById('train-info-detail').textContent = place.transport.train.frequency;

  document.getElementById('taxi-info-detail').textContent = place.transport.taxi.options;

  // Initialize Map
  initPlaceMap(place);

  // Emergency Services
  renderEmergencyServices(place.emergency);

  // Hotels & Restaurants
  renderNearbyHotels(place.hotels);
  renderNearbyRestaurants(place.restaurants);

  // Reviews
  renderPlaceReviews(place.id);

  // Bookmark Button State
  const favBtn = document.getElementById('place-fav-toggle-btn');
  if (favBtn) {
    const isFav = getFavorites().includes(place.id);
    favBtn.className = `btn ${isFav ? 'btn-danger' : 'btn-outline'} fav-btn-${place.id}`;
    favBtn.innerHTML = isFav ? '❤️ Saved to Favorites' : '♡ Add to Favorites';
    favBtn.onclick = (e) => {
      toggleFavorite(place.id, e);
      const updatedFav = getFavorites().includes(place.id);
      favBtn.className = `btn ${updatedFav ? 'btn-danger' : 'btn-outline'} fav-btn-${place.id}`;
      favBtn.innerHTML = updatedFav ? '❤️ Saved to Favorites' : '♡ Add to Favorites';
    };
  }
}

// Leaflet Map Integration
function initPlaceMap(place) {
  const mapElem = document.getElementById('place-map');
  if (!mapElem || !window.L) return;

  const map = L.map('place-map').setView([place.lat, place.lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  const marker = L.marker([place.lat, place.lng]).addTo(map);
  marker.bindPopup(`
    <div style="color:#000; text-align:center;">
      <strong>${place.name}</strong><br>
      ${place.district}, Tamil Nadu<br>
      <a href="https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}" target="_blank" style="color:var(--primary); font-weight:700;">
        Get Directions 📍
      </a>
    </div>
  `).openPopup();

  const getDirBtn = document.getElementById('get-directions-btn');
  if (getDirBtn) {
    getDirBtn.href = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`;
  }
}

// Emergency Services Rendering
function renderEmergencyServices(emergency) {
  const container = document.getElementById('place-emergency-container');
  if (!container) return;

  let html = '';

  if (emergency.hospitals) {
    emergency.hospitals.forEach(h => {
      html += `
        <div class="emergency-item">
          <div>
            <h4>🏥 ${h.name}</h4>
            <p style="font-size:0.85rem; color:var(--text-muted);">${h.address} (${h.distance})</p>
          </div>
          <div style="display:flex; gap:0.5rem; margin-top:0.8rem;">
            <a href="tel:${h.phone}" class="btn btn-danger btn-sm" style="flex:1;">📞 Call ${h.phone}</a>
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.name + ' ' + h.address)}" target="_blank" class="btn btn-outline btn-sm">🗺️ Directions</a>
          </div>
        </div>
      `;
    });
  }

  if (emergency.police) {
    emergency.police.forEach(p => {
      html += `
        <div class="emergency-item" style="background:rgba(13, 148, 136, 0.08); border-color:rgba(13, 148, 136, 0.25);">
          <div>
            <h4 style="color:#2dd4bf;">🚓 ${p.name}</h4>
            <p style="font-size:0.85rem; color:var(--text-muted);">${p.address} (${p.distance})</p>
          </div>
          <div style="display:flex; gap:0.5rem; margin-top:0.8rem;">
            <a href="tel:${p.phone}" class="btn btn-secondary btn-sm" style="flex:1;">📞 Call ${p.phone}</a>
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name)}" target="_blank" class="btn btn-outline btn-sm">🗺️ Directions</a>
          </div>
        </div>
      `;
    });
  }

  container.innerHTML = html;
}

// Hotels & Restaurants
function renderNearbyHotels(hotels) {
  const container = document.getElementById('place-hotels-container');
  if (!container) return;

  if (!hotels || hotels.length === 0) {
    container.innerHTML = '<p style="color:var(--text-muted);">No hotel recommendations listed.</p>';
    return;
  }

  container.innerHTML = hotels.map(h => `
    <div class="glass-card" style="padding:1.2rem; display:flex; gap:1.2rem; align-items:center;">
      <img src="${h.image}" alt="${h.name}" style="width:90px; height:90px; object-fit:cover; border-radius:var(--radius-md);">
      <div style="flex:1;">
        <h4 style="font-size:1.1rem; margin-bottom:0.3rem;">🏨 ${h.name}</h4>
        <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;">
          📍 ${h.dist} away | ★ ${h.rating}
        </div>
        <div style="font-weight:700; color:#fbbf24;">${h.price}</div>
      </div>
      <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.name)}" target="_blank" class="btn btn-outline btn-sm">
        View Hotel
      </a>
    </div>
  `).join('');
}

function renderNearbyRestaurants(restaurants) {
  const container = document.getElementById('place-restaurants-container');
  if (!container) return;

  if (!restaurants || restaurants.length === 0) {
    container.innerHTML = '<p style="color:var(--text-muted);">No restaurant recommendations listed.</p>';
    return;
  }

  container.innerHTML = restaurants.map(r => `
    <div class="glass-card" style="padding:1.2rem; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <h4 style="font-size:1.1rem; margin-bottom:0.3rem;">🍽️ ${r.name}</h4>
        <div style="font-size:0.85rem; color:var(--text-muted);">
          🍲 ${r.foodType} | 📍 ${r.dist} | ★ ${r.rating}
        </div>
        <div style="font-size:0.85rem; color:#2dd4bf; margin-top:0.2rem;">${r.price}</div>
      </div>
      <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + ' ' + r.address)}" target="_blank" class="btn btn-outline btn-sm">
        Get Directions
      </a>
    </div>
  `).join('');
}

// User Reviews
function renderPlaceReviews(placeId) {
  const container = document.getElementById('place-reviews-list');
  if (!container) return;

  const storedReviews = JSON.parse(localStorage.getItem('tn_reviews') || '[]');
  const allReviews = [...window.TN_DATA.initialReviews, ...storedReviews].filter(r => r.placeId === placeId);

  if (allReviews.length === 0) {
    container.innerHTML = '<p style="color:var(--text-muted);">No reviews submitted yet. Be the first to review!</p>';
    return;
  }

  container.innerHTML = allReviews.map(r => `
    <div class="glass-card" style="padding:1.2rem; margin-bottom:1rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
        <strong style="color:#ffffff;">👤 ${r.userName}</strong>
        <span style="font-size:0.85rem; color:var(--text-muted);">${r.date}</span>
      </div>
      <div style="margin-bottom:0.5rem;">${renderStarRating(r.rating)}</div>
      <p style="color:var(--text-muted); font-size:0.95rem;">"${r.comment}"</p>
    </div>
  `).join('');
}

function handleAddReview(event) {
  event.preventDefault();

  const user = getCurrentUser();
  if (!user) {
    showToast('Please login to submit a review!', 'danger');
    setTimeout(() => window.location.href = 'login.html', 1500);
    return;
  }

  const ratingSelect = document.getElementById('review-rating');
  const commentInput = document.getElementById('review-comment');

  const newReview = {
    id: Date.now(),
    placeId: currentPlaceData.id,
    userName: user.name,
    rating: parseFloat(ratingSelect.value),
    date: new Date().toISOString().split('T')[0],
    comment: commentInput.value.trim()
  };

  const stored = JSON.parse(localStorage.getItem('tn_reviews') || '[]');
  stored.push(newReview);
  localStorage.setItem('tn_reviews', JSON.stringify(stored));

  showToast('Review posted successfully! Thank you.', 'success');
  commentInput.value = '';
  renderPlaceReviews(currentPlaceData.id);
}
