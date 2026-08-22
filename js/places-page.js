/* ==========================================================================
   Tamil Nadu Tourism & Smart Trip Planner - Places Page Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initPlacesPage();
});

function initPlacesPage() {
  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get('q') || '';
  const initialDistrict = params.get('district') || '';
  const initialCategory = params.get('category') || '';

  // Set initial filter values in form
  const searchInput = document.getElementById('filter-search');
  const districtSelect = document.getElementById('filter-district');
  const categorySelect = document.getElementById('filter-category');

  if (searchInput) searchInput.value = initialQuery;
  
  populateDistrictDropdown(districtSelect, initialDistrict);
  populateCategoryDropdown(categorySelect, initialCategory);

  renderPlaces();

  // Add event listeners
  if (searchInput) searchInput.addEventListener('input', renderPlaces);
  if (districtSelect) districtSelect.addEventListener('change', renderPlaces);
  if (categorySelect) categorySelect.addEventListener('change', renderPlaces);
  
  const sortSelect = document.getElementById('sort-by');
  if (sortSelect) sortSelect.addEventListener('change', renderPlaces);
}

function populateDistrictDropdown(selectElem, activeVal) {
  if (!selectElem) return;
  selectElem.innerHTML = `<option value="">All Districts</option>` + 
    window.TN_DATA.districts.map(d => `<option value="${d}" ${d === activeVal ? 'selected' : ''}>${d}</option>`).join('');
}

function populateCategoryDropdown(selectElem, activeVal) {
  if (!selectElem) return;
  selectElem.innerHTML = `<option value="">All Categories</option>` + 
    window.TN_DATA.categories.map(c => `<option value="${c.id}" ${c.id === activeVal ? 'selected' : ''}>${c.name}</option>`).join('');
}

function renderPlaces() {
  const gridElem = document.getElementById('places-grid-container');
  const countElem = document.getElementById('places-count-badge');
  if (!gridElem) return;

  const searchQuery = (document.getElementById('filter-search')?.value || '').toLowerCase();
  const selectedDistrict = document.getElementById('filter-district')?.value || '';
  const selectedCategory = document.getElementById('filter-category')?.value || '';
  const sortBy = document.getElementById('sort-by')?.value || 'rating';

  let filtered = window.TN_DATA.places.filter(place => {
    const matchSearch = place.name.toLowerCase().includes(searchQuery) || 
                        place.district.toLowerCase().includes(searchQuery) ||
                        place.shortDesc.toLowerCase().includes(searchQuery);
    const matchDistrict = !selectedDistrict || place.district === selectedDistrict;
    const matchCategory = !selectedCategory || place.category === selectedCategory;

    return matchSearch && matchDistrict && matchCategory;
  });

  // Sorting
  if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'popular') {
    filtered.sort((a, b) => b.ratingCount - a.ratingCount);
  }

  if (countElem) {
    countElem.textContent = `${filtered.length} Destinations Found`;
  }

  if (filtered.length === 0) {
    gridElem.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding:4rem 1rem;" class="glass-card">
        <span style="font-size:3.5rem; display:block; margin-bottom:1rem;">🗺️</span>
        <h3>No Tourist Places Found</h3>
        <p style="color:var(--text-muted); margin:0.5rem 0 1.5rem;">Try adjusting your search criteria or resetting filters.</p>
        <button onclick="resetPlacesFilters()" class="btn btn-primary">Reset Filters</button>
      </div>
    `;
    return;
  }

  const favs = getFavorites();

  gridElem.innerHTML = filtered.map(place => {
    const isFav = favs.includes(place.id);
    return `
      <div class="place-card">
        <div class="place-img-wrap">
          <img src="${place.image}" alt="${place.name}" loading="lazy">
          <button class="place-fav-btn fav-btn-${place.id} ${isFav ? 'active' : ''}" 
                  onclick="toggleFavorite('${place.id}', event)" title="Save to Favorites">
            ❤️
          </button>
          <div class="place-rating-badge">
            ★ ${place.rating} (${(place.ratingCount / 1000).toFixed(1)}k)
          </div>
        </div>
        <div class="place-content">
          <div class="place-meta">
            <span class="badge badge-secondary">${place.district}</span>
            <span class="badge badge-primary">${place.categoryName.split(' ')[0]}</span>
          </div>
          <h3 class="place-title">${place.name}</h3>
          <p class="place-desc">${place.shortDesc}</p>
          <div class="place-footer">
            <div style="font-size:0.85rem; color:var(--text-muted);">
              ⏱️ ${place.openTime} - ${place.closeTime}
            </div>
            <a href="place-details.html?id=${place.id}" class="btn btn-primary btn-sm">
              View Details →
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resetPlacesFilters() {
  const searchInput = document.getElementById('filter-search');
  const districtSelect = document.getElementById('filter-district');
  const categorySelect = document.getElementById('filter-category');

  if (searchInput) searchInput.value = '';
  if (districtSelect) districtSelect.value = '';
  if (categorySelect) categorySelect.value = '';

  renderPlaces();
}
