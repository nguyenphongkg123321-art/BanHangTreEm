(function () {
  'use strict';

  function start() {
    if (!window.TNK || !Array.isArray(window.PRODUCTS)) return;
    if (document.body.dataset.page === 'products') initCatalog();
    if (document.body.dataset.page === 'product-detail') initDetail();
  }

  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().trim();
  const byId = id => document.getElementById(id);
  const categoryName = id => (window.CATEGORIES || []).find(category => category.id === id)?.name || 'Sản phẩm';
  const esc = value => window.TNK.escape(String(value ?? ''));
  const productURL = product => `product-detail.html?id=${encodeURIComponent(product.id)}`;

  function sizeGuide(shoes) {
    const rows = shoes
      ? [['26', '15.5–16'], ['27', '16–16.5'], ['28', '16.5–17'], ['29', '17–17.5'], ['30', '17.5–18'], ['31', '18–18.5'], ['32', '18.5–19'], ['33', '19–19.5'], ['34', '19.5–20']]
      : [['100', '95–105', '14–17', '3–4'], ['110', '105–115', '17–20', '4–5'], ['120', '115–125', '20–25', '5–6'], ['130', '125–135', '25–30', '7–8'], ['140', '135–145', '30–36', '9–10'], ['150', '145–155', '36–43', '11–12']];
    return `<p class="size-guide-copy">${shoes ? 'Đo chiều dài bàn chân của bé từ gót đến ngón dài nhất, rồi chọn kích thước phù hợp.' : 'Đo chiều cao và cân nặng hiện tại của bé. Nếu bé nằm giữa hai size, nhà Thỏ gợi ý chọn size lớn hơn để bé thoải mái vận động.'}</p><table class="size-guide-table"><thead><tr>${(shoes ? ['Size', 'Chiều dài chân (cm)'] : ['Size', 'Chiều cao (cm)', 'Cân nặng (kg)', 'Tuổi tham khảo']).map(title => `<th scope="col">${title}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table><p class="size-guide-note">Bảng size minh họa cho cửa hàng mẫu. Số đo có thể chênh lệch 1–2 cm tùy kiểu dáng và chất liệu. Ưu tiên số đo thực tế của bé khi lựa chọn.</p>`;
  }

  function initCatalog() {
    const params = new URLSearchParams(location.search);
    const categories = (window.CATEGORIES || []).filter(category => window.PRODUCTS.some(product => product.category === category.id));
    const state = {
      categories: new Set((params.get('category') || '').split(',').filter(id => categories.some(category => category.id === id))),
      sizes: new Set((params.get('size') || '').split(',').filter(Boolean)),
      colors: new Set((params.get('color') || '').split(',').filter(Boolean)),
      gender: ['girl', 'boy'].includes(params.get('gender')) ? params.get('gender') : 'all',
      price: params.get('price') || 'all',
      sort: ['newest', 'price-asc', 'price-desc'].includes(params.get('sort')) ? params.get('sort') : 'featured',
      query: (params.get('q') || '').trim(),
      sale: params.get('sale') === '1',
      newOnly: params.get('new') === '1',
      wishlist: params.get('wishlist') === '1',
      collection: params.get('collection') || '',
      limit: 12
    };
    if (!['all', '0-150000', '150000-250000', '250000-400000', '400000-999999999'].includes(state.price)) state.price = 'all';
    const colorMap = new Map();
    window.PRODUCTS.forEach(product => (product.colors || []).forEach(color => { if (!colorMap.has(color.name)) colorMap.set(color.name, color.hex); }));
    const sizes = [...new Set(window.PRODUCTS.flatMap(product => product.sizes || []))].sort((a, b) => (Number(a) - Number(b)) || String(a).localeCompare(String(b)));
    byId('filter-categories').innerHTML = categories.map(category => `<label><input type="checkbox" name="category" value="${esc(category.id)}" ${state.categories.has(category.id) ? 'checked' : ''}> ${esc(category.name)}</label>`).join('');
    byId('filter-sizes').innerHTML = sizes.map(size => `<label class="filter-size-choice"><input type="checkbox" name="size" value="${esc(size)}" ${state.sizes.has(size) ? 'checked' : ''}><span>${esc(size)}</span></label>`).join('');
    byId('filter-colors').innerHTML = [...colorMap].map(([name, hex]) => `<label class="filter-color-choice"><input type="checkbox" name="color" value="${esc(name)}" ${state.colors.has(name) ? 'checked' : ''}><span class="filter-swatch" style="--swatch:${esc(hex)}"></span><span>${esc(name)}</span></label>`).join('');
    byId('catalog-sort').value = state.sort;
    syncForm();
    render();

    function syncForm() {
      const form = byId('catalog-filter-form');
      form.querySelectorAll('[name="category"]').forEach(input => { input.checked = state.categories.has(input.value); });
      form.querySelectorAll('[name="size"]').forEach(input => { input.checked = state.sizes.has(input.value); });
      form.querySelectorAll('[name="color"]').forEach(input => { input.checked = state.colors.has(input.value); });
      form.querySelectorAll('[name="price"]').forEach(input => { input.checked = input.value === state.price; });
      form.querySelectorAll('[name="gender"]').forEach(input => { input.checked = input.value === state.gender; });
    }

    function updateURL() {
      const next = new URLSearchParams();
      if (state.gender !== 'all') next.set('gender', state.gender);
      if (state.categories.size) next.set('category', [...state.categories].join(','));
      if (state.query) next.set('q', state.query);
      if (state.sale) next.set('sale', '1');
      if (state.newOnly) next.set('new', '1');
      if (state.wishlist) next.set('wishlist', '1');
      if (state.collection) next.set('collection', state.collection);
      if (state.sizes.size) next.set('size', [...state.sizes].join(','));
      if (state.colors.size) next.set('color', [...state.colors].join(','));
      if (state.price !== 'all') next.set('price', state.price);
      if (state.sort !== 'featured') next.set('sort', state.sort);
      history.replaceState(null, '', `products.html${next.size ? '?' + next.toString() : ''}`);
    }

    function baseProducts() {
      const saved = window.TNK.storage.get('tnk.favorites', []);
      const favorites = Array.isArray(saved) ? saved : [];
      return window.PRODUCTS.filter(product => {
        if (state.gender !== 'all' && product.gender !== state.gender && product.gender !== 'unisex') return false;
        if (state.sale && !(product.price < product.originalPrice)) return false;
        if (state.newOnly && !product.isNew) return false;
        if (state.wishlist && !favorites.includes(product.id)) return false;
        if (state.collection && product.collection !== state.collection) return false;
        if (state.query && !normalize(product.name).includes(normalize(state.query))) return false;
        return true;
      });
    }

    function filteredProducts() {
      const [min, max] = state.price === 'all' ? [0, Infinity] : state.price.split('-').map(Number);
      const filtered = baseProducts().filter(product => {
        if (state.categories.size && !state.categories.has(product.category)) return false;
        if (state.sizes.size && !(product.sizes || []).some(size => state.sizes.has(String(size)))) return false;
        if (state.colors.size && !(product.colors || []).some(color => state.colors.has(color.name))) return false;
        if (product.price < min || product.price >= max) return false;
        return true;
      });
      if (state.sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
      if (state.sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
      if (state.sort === 'newest') filtered.sort((a, b) => ((Number(b.createdAt) || Date.parse(b.createdAt) || 0) - (Number(a.createdAt) || Date.parse(a.createdAt) || 0)) || String(b.id).localeCompare(String(a.id)));
      if (state.sort === 'featured') filtered.sort((a, b) => Number(b.isNew) - Number(a.isNew) || (b.sold || 0) - (a.sold || 0));
      return filtered;
    }

    function render() {
      let title = state.gender === 'girl' ? 'Thời trang bé gái' : state.gender === 'boy' ? 'Thời trang bé trai' : 'Tất cả sản phẩm';
      let description = state.gender === 'girl' ? 'Những thiết kế dịu dàng, cho bé tự tin tỏa sáng theo cách riêng.' : state.gender === 'boy' ? 'Thoải mái vận động, thỏa sức khám phá. Sẵn sàng cho mọi cuộc phiêu lưu!' : 'Mềm mại để thoải mái. Xinh xắn để tự tin. Cùng bé lớn khôn mỗi ngày.';
      const collection = (window.COLLECTIONS || []).find(item => item.id === state.collection);
      if (state.collection) { title = collection?.name || 'Bộ sưu tập'; description = collection?.subtitle || 'Những điều nhỏ xinh, dành riêng cho tuổi thơ của bé.'; }
      if (state.newOnly) { title = 'Món mới nhà Thỏ'; description = 'Một chút mới mẻ cho tủ đồ nhỏ. Khám phá những thiết kế vừa ghé nhà Thỏ.'; }
      if (state.wishlist) { title = 'Những món bé thích'; description = 'Tất cả những món đồ xinh ba mẹ đã lưu lại, cùng ở đây chờ bé.'; }
      if (state.sale) { title = 'Orange Friday · Siêu sale'; description = 'Niềm vui to, giá thật nhỏ. Khám phá những món đồ xinh đang có giá ưu đãi.'; }
      if (state.categories.size === 1 && !state.query) title = `${categoryName([...state.categories][0])}${state.gender === 'girl' ? ' bé gái' : state.gender === 'boy' ? ' bé trai' : ' cho bé'}`;
      if (state.query) { title = `Kết quả cho “${state.query}”`; description = 'Nhà Thỏ đã tìm những món đồ dưới đây cho bạn. Thử kết hợp bộ lọc để chọn nhanh hơn nhé.'; }
      byId('catalog-title').textContent = title;
      byId('catalog-description').textContent = description;
      byId('catalog-breadcrumb').textContent = title;
      byId('catalog-banner-image').src = state.gender === 'boy' ? 'assets/images/boy-banner.jpg' : (collection?.image || 'assets/images/girl-banner.jpg');
      byId('catalog-banner-image').alt = title;
      document.title = `${title} | Thỏ Nhỏ Kids`;
      byId('catalog-category-pills').innerHTML = `<button class="category-pill ${!state.categories.size ? 'active' : ''}" type="button" data-category-pill="">Tất cả</button>${categories.map(category => `<button class="category-pill ${state.categories.has(category.id) ? 'active' : ''}" type="button" data-category-pill="${esc(category.id)}">${esc(category.name)}</button>`).join('')}`;
      const results = filteredProducts();
      byId('catalog-count').innerHTML = `<strong>${results.length}</strong> sản phẩm${state.query ? ` cho “${esc(state.query)}”` : ' dành cho bé'}`;
      byId('catalog-grid').innerHTML = results.slice(0, state.limit).map(product => window.TNK.productCard(product)).join('');
      byId('catalog-grid').hidden = !results.length;
      byId('catalog-empty').hidden = results.length > 0;
      byId('catalog-empty').querySelector('h2').textContent = state.wishlist ? 'Tủ yêu thích đang chờ những món đồ xinh' : 'Chưa tìm thấy món đồ phù hợp';
      byId('catalog-empty').querySelector('p').textContent = state.wishlist ? 'Chạm vào trái tim trên sản phẩm để lưu món đồ ba mẹ muốn dành cho bé.' : 'Thử một từ khóa khác hoặc giảm bớt bộ lọc nhé.';
      byId('catalog-progress').textContent = results.length ? `Bạn đã xem ${Math.min(state.limit, results.length)} trên ${results.length} sản phẩm` : '';
      byId('catalog-load-more').hidden = results.length <= state.limit;
      renderChips();
      updateURL();
    }

    function renderChips() {
      const chips = [];
      state.categories.forEach(value => chips.push({type: 'category', value, label: categoryName(value)}));
      state.sizes.forEach(value => chips.push({type: 'size', value, label: `Size ${value}`}));
      state.colors.forEach(value => chips.push({type: 'color', value, label: value}));
      if (state.gender !== 'all') chips.push({type: 'gender', value: '', label: state.gender === 'girl' ? 'Bé gái' : 'Bé trai'});
      if (state.price !== 'all') chips.push({type: 'price', value: '', label: byId('catalog-filter-form').querySelector('[name="price"]:checked').parentElement.textContent.trim()});
      if (state.query) chips.push({type: 'query', value: '', label: `Tìm: ${state.query}`});
      if (state.collection) chips.push({type: 'collection', value: '', label: (window.COLLECTIONS || []).find(item => item.id === state.collection)?.name || 'Bộ sưu tập'});
      if (state.sale) chips.push({type: 'sale', value: '', label: 'Đang giảm giá'});
      if (state.newOnly) chips.push({type: 'new', value: '', label: 'Hàng mới'});
      if (state.wishlist) chips.push({type: 'wishlist', value: '', label: 'Yêu thích'});
      byId('catalog-active-filters').innerHTML = chips.map(chip => `<button class="active-filter-chip" type="button" data-remove-filter="${chip.type}" data-value="${esc(chip.value)}" aria-label="Bỏ bộ lọc ${esc(chip.label)}">${esc(chip.label)} <span aria-hidden="true">×</span></button>`).join('');
    }

    function clearFilters(all) {
      state.categories.clear(); state.sizes.clear(); state.colors.clear(); state.price = 'all'; state.gender = 'all'; state.limit = 12;
      if (all) { state.gender = 'all'; state.query = ''; state.sale = false; state.newOnly = false; state.wishlist = false; state.collection = ''; state.sort = 'featured'; byId('catalog-sort').value = 'featured'; }
      syncForm(); render();
    }

    byId('catalog-filter-form').addEventListener('submit', event => event.preventDefault());
    byId('catalog-filter-form').addEventListener('change', event => {
      const input = event.target;
      const field = {category: state.categories, size: state.sizes, color: state.colors}[input.name];
      if (field) input.checked ? field.add(input.value) : field.delete(input.value);
      if (input.name === 'price') state.price = input.value;
      if (input.name === 'gender') state.gender = input.value;
      state.limit = 12; render();
    });
    byId('catalog-sort').addEventListener('change', event => { state.sort = event.target.value; state.limit = 12; render(); });
    byId('catalog-load-more').addEventListener('click', () => { state.limit += 12; render(); });
    byId('filter-clear').addEventListener('click', () => clearFilters(false));
    byId('catalog-reset').addEventListener('click', () => clearFilters(true));
    byId('catalog-category-pills').addEventListener('click', event => {
      const button = event.target.closest('[data-category-pill]');
      if (!button) return;
      state.categories = new Set(button.dataset.categoryPill ? [button.dataset.categoryPill] : []); state.limit = 12; syncForm(); render();
    });
    byId('catalog-active-filters').addEventListener('click', event => {
      const button = event.target.closest('[data-remove-filter]');
      if (!button) return;
      const type = button.dataset.removeFilter;
      const field = {category: state.categories, size: state.sizes, color: state.colors}[type];
      if (field) field.delete(button.dataset.value);
      if (type === 'price') state.price = 'all';
      if (type === 'gender') state.gender = 'all';
      if (type === 'query') state.query = '';
      if (type === 'sale') state.sale = false;
      if (type === 'new') state.newOnly = false;
      if (type === 'wishlist') state.wishlist = false;
      if (type === 'collection') state.collection = '';
      state.limit = 12; syncForm(); render();
    });
    const toggleFilters = open => {
      byId('catalog-filters').classList.toggle('is-open', open);
      byId('catalog-filter-shade').hidden = !open;
      byId('catalog-filter-open').setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('catalog-filter-open', open);
      if (open) byId('catalog-filter-close').focus();
    };
    byId('catalog-filter-open').setAttribute('aria-controls', 'catalog-filters');
    byId('catalog-filter-open').setAttribute('aria-expanded', 'false');
    byId('catalog-filter-open').addEventListener('click', () => toggleFilters(true));
    byId('catalog-filter-close').addEventListener('click', () => toggleFilters(false));
    byId('catalog-filter-shade').addEventListener('click', () => toggleFilters(false));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') toggleFilters(false); });
    document.addEventListener('tnk:favorites', () => { if (state.wishlist) render(); });
    byId('catalog-size-help').addEventListener('click', () => window.TNK.openModal('Chọn size vừa xinh cho bé', sizeGuide(false)));
  }

  function initDetail() {
    const id = new URLSearchParams(location.search).get('id');
    const product = window.PRODUCTS.find(item => String(item.id) === id);
    const main = byId('product-detail-main');
    if (!product) {
      document.title = 'Không tìm thấy sản phẩm | Thỏ Nhỏ Kids';
      main.innerHTML = '<nav class="breadcrumb" aria-label="Đường dẫn"><a href="index.html">Trang chủ</a><span>/</span><span>Sản phẩm</span></nav><div class="catalog-empty"><div class="empty-illustration" aria-hidden="true">⌕</div><h1>Món đồ này chưa có trong tủ nhà Thỏ</h1><p>Sản phẩm có thể đã thay đổi. Khám phá những món đồ xinh khác cho bé nhé.</p><div class="pdp-error-actions"><a href="products.html" class="btn btn-primary">Khám phá sản phẩm</a><a href="index.html" class="btn btn-outline">Về trang chủ</a></div></div>';
      return;
    }
    document.title = `${product.name} | Thỏ Nhỏ Kids`;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) descriptionMeta.content = product.description;
    const images = [...new Set([product.image, ...(product.images || [])].filter(Boolean))];
    const colors = product.colors || [];
    const discount = product.originalPrice > product.price ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    const genderName = product.gender === 'boy' ? 'Bé trai' : product.gender === 'girl' ? 'Bé gái' : 'Thời trang cho bé';
    const stock = Math.max(0, Number(product.stock) || 0);
    let selectedColor = colors[0]?.name || 'Mặc định';
    let selectedSize = '';
    let busy = false;
    const related = [...window.PRODUCTS.filter(item => item.id !== product.id && item.category === product.category), ...window.PRODUCTS.filter(item => item.id !== product.id && item.category !== product.category && (item.gender === product.gender || item.gender === 'unisex'))].slice(0, 4);
    main.innerHTML = `
      <nav class="breadcrumb" aria-label="Đường dẫn"><a href="index.html">Trang chủ</a><span>/</span><a href="products.html${product.gender === 'unisex' ? '' : '?gender=' + esc(product.gender)}">${genderName}</a><span>/</span><a href="products.html?category=${esc(product.category)}">${esc(categoryName(product.category))}</a><span>/</span><span>${esc(product.name)}</span></nav>
      <div class="pdp-layout">
        <section class="pdp-gallery" aria-label="Hình ảnh sản phẩm">
          <div class="pdp-thumbnails">${images.map((image, index) => `<button class="pdp-thumb ${index === 0 ? 'active' : ''}" type="button" data-image="${esc(image)}" aria-label="Xem ảnh ${index + 1} của ${esc(product.name)}" aria-pressed="${index === 0}"><img src="${esc(image)}" alt="${esc(product.name)} – ảnh ${index + 1}" ${index ? 'loading="lazy"' : ''}></button>`).join('')}</div>
          <button type="button" class="pdp-image-wrap" id="pdp-zoom" aria-label="Phóng to ảnh sản phẩm"><img id="pdp-main-image" src="${esc(product.image)}" alt="${esc(product.name)}" fetchpriority="high"><span class="pdp-gallery-note">Nhấn để xem ảnh lớn</span></button>
        </section>
        <section class="pdp-info" aria-labelledby="pdp-title">
          <div class="pdp-pretitle">${product.isNew ? 'NEW ARRIVAL' : 'LITTLE EVERYDAY JOYS'}<span class="pdp-stock">${stock ? 'Còn hàng' : 'Tạm hết hàng'}</span></div>
          <h1 id="pdp-title">${esc(product.name)}</h1>
          <p class="pdp-code"><span>Mã sản phẩm: ${esc(String(product.id).toUpperCase())}</span><span>Thỏ Nhỏ Kids</span></p>
          <div class="pdp-price-row"><span class="pdp-price">${window.TNK.money(product.price)}</span>${discount ? `<span class="pdp-original">${window.TNK.money(product.originalPrice)}</span><span class="pdp-discount">−${discount}%</span>` : ''}</div>
          <p class="pdp-short-description">${esc(product.description)}</p>
          <form id="pdp-form" novalidate>
            <fieldset class="pdp-choices"><legend>Màu sắc: <span id="pdp-color-label">${esc(selectedColor)}</span></legend><div class="pdp-color-options">${colors.map((color, index) => `<button type="button" class="pdp-color ${index === 0 ? 'active' : ''}" data-color="${esc(color.name)}" style="--swatch:${esc(color.hex)}" aria-label="Màu ${esc(color.name)}" aria-pressed="${index === 0}" title="${esc(color.name)}"></button>`).join('')}</div></fieldset>
            <div class="pdp-choices"><div class="pdp-size-top"><label id="pdp-size-label">Kích thước <span aria-hidden="true">*</span></label><button type="button" id="pdp-size-help" class="pdp-size-help">Hướng dẫn chọn size</button></div><div class="pdp-size-options" id="pdp-size-options" role="group" aria-labelledby="pdp-size-label" aria-describedby="pdp-size-error">${(product.sizes || []).map(size => `<button type="button" class="pdp-size" data-size="${esc(size)}" aria-pressed="false">${esc(size)}</button>`).join('')}</div><p class="pdp-size-error" id="pdp-size-error" role="status" hidden>Ba mẹ chọn size cho bé trước khi thêm vào giỏ nhé.</p></div>
            <div class="pdp-actions"><div class="pdp-order-row"><div class="pdp-quantity"><button type="button" id="pdp-qty-minus" aria-label="Giảm số lượng" disabled>−</button><input type="number" min="1" max="${stock}" value="1" id="pdp-qty" aria-label="Số lượng sản phẩm" inputmode="numeric"><button type="button" id="pdp-qty-plus" aria-label="Tăng số lượng" ${stock <= 1 ? 'disabled' : ''}>+</button></div><button type="submit" class="btn btn-outline" id="pdp-add" ${!stock ? 'disabled' : ''}>${stock ? 'Thêm vào giỏ hàng' : 'Tạm hết hàng'}</button></div><button type="button" id="pdp-buy" class="btn btn-primary pdp-buy-now" ${!stock ? 'disabled' : ''}>Mua ngay</button></div>
          </form>
          <p class="pdp-service-note">Một chút yêu thương, gửi cùng mỗi món đồ của bé.</p>
          <div class="pdp-mini-benefits"><span class="pdp-mini-benefit">${window.TNK.icon('truck', 23)} Miễn phí giao hàng từ 499.000đ</span><span class="pdp-mini-benefit">${window.TNK.icon('refresh', 21)} Đổi trả trong 30 ngày</span><span class="pdp-mini-benefit">${window.TNK.icon('shield', 21)} Chất liệu an toàn, mềm mại</span><span class="pdp-mini-benefit">${window.TNK.icon('package', 21)} Kiểm tra hàng khi nhận</span></div>
          <details class="pdp-accordion" open><summary>Mô tả & chất liệu</summary><div class="pdp-accordion-content"><p>${esc(product.description)}</p>${product.material ? `<p><strong>Chất liệu:</strong> ${esc(product.material)}</p>` : ''}<ul><li>Thiết kế vừa vặn, phù hợp với các hoạt động hằng ngày của bé.</li><li>${esc(product.care || (product.category === 'shoes' ? 'Đế nhẹ, độ bám tốt. Vệ sinh bằng khăn ẩm và để khô tự nhiên.' : 'Ưu tiên giặt nhẹ bằng nước mát, phân loại màu trước khi giặt. Phơi nơi thoáng mát; không dùng chất tẩy mạnh.'))}</li></ul></div></details>
          <details class="pdp-accordion"><summary>Giao hàng & đổi trả</summary><div class="pdp-accordion-content"><p>Phí giao hàng mô phỏng: 30.000đ, miễn phí với đơn từ 499.000đ. Dự kiến giao trong 2–5 ngày làm việc.</p><p>Đổi trả trong 30 ngày với sản phẩm còn nguyên tem, chưa sử dụng. Đồ lót đã mở bao bì không áp dụng đổi trả vì lý do vệ sinh.</p><p>Đây là cửa hàng frontend mẫu; chức năng đặt hàng và giao hàng được mô phỏng trên trình duyệt.</p></div></details>
        </section>
      </div>
      <section class="pdp-related"><div class="section-heading"><h2>Có thể ba mẹ sẽ thích</h2><a href="products.html?category=${esc(product.category)}">Xem tất cả</a></div><div class="product-grid">${related.map(item => window.TNK.productCard(item)).join('')}</div></section>`;

    main.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
      byId('pdp-main-image').src = button.dataset.image;
      main.querySelectorAll('[data-image]').forEach(thumb => { const active = thumb === button; thumb.classList.toggle('active', active); thumb.setAttribute('aria-pressed', String(active)); });
    }));
    byId('pdp-zoom').addEventListener('click', () => window.TNK.openModal(product.name, `<img class="pdp-lightbox-image" src="${esc(byId('pdp-main-image').getAttribute('src'))}" alt="${esc(product.name)}">`));
    byId('pdp-size-help').addEventListener('click', () => window.TNK.openModal('Chọn size vừa xinh cho bé', sizeGuide(product.category === 'shoes')));
    main.querySelectorAll('[data-color]').forEach(button => button.addEventListener('click', () => {
      selectedColor = button.dataset.color;
      byId('pdp-color-label').textContent = selectedColor;
      main.querySelectorAll('[data-color]').forEach(option => { const active = option === button; option.classList.toggle('active', active); option.setAttribute('aria-pressed', String(active)); });
    }));
    main.querySelectorAll('[data-size]').forEach(button => button.addEventListener('click', () => {
      selectedSize = button.dataset.size;
      byId('pdp-size-error').hidden = true;
      byId('pdp-size-options').removeAttribute('aria-invalid');
      main.querySelectorAll('[data-size]').forEach(option => { const active = option === button; option.classList.toggle('active', active); option.setAttribute('aria-pressed', String(active)); });
    }));
    function quantity(value) {
      const next = Math.max(1, Math.min(stock || 1, Math.floor(Number(value) || 1)));
      byId('pdp-qty').value = next;
      byId('pdp-qty-minus').disabled = next <= 1;
      byId('pdp-qty-plus').disabled = next >= stock;
      return next;
    }
    byId('pdp-qty-minus').addEventListener('click', () => quantity(Number(byId('pdp-qty').value) - 1));
    byId('pdp-qty-plus').addEventListener('click', () => quantity(Number(byId('pdp-qty').value) + 1));
    byId('pdp-qty').addEventListener('change', event => quantity(event.target.value));
    function addToCart(buy) {
      if (busy || !stock) return;
      if (!selectedSize && product.sizes?.length) {
        byId('pdp-size-error').hidden = false;
        byId('pdp-size-options').setAttribute('aria-invalid', 'true');
        byId('pdp-size-options').querySelector('button')?.focus();
        return;
      }
      const button = buy ? byId('pdp-buy') : byId('pdp-add');
      const label = button.textContent;
      busy = true; button.disabled = true; button.textContent = 'Đang thêm…';
      window.setTimeout(() => {
        try {
          const added = window.Cart.add(product.id, selectedSize || 'Một cỡ', selectedColor, quantity(byId('pdp-qty').value));
          if (added !== false && buy) location.href = 'checkout.html';
        } finally { busy = false; button.disabled = false; button.textContent = label; }
      }, 180);
    }
    byId('pdp-form').addEventListener('submit', event => { event.preventDefault(); addToCart(false); });
    byId('pdp-buy').addEventListener('click', () => addToCart(true));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
