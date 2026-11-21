/* Checkout is a browser-local demonstration. No payment service is called. */
(function () {
  'use strict';

  function init() {
    const page = document.body.dataset.page;
    if (page !== 'checkout' && page !== 'order-success') return;
    const app = window.TNK;
    const cart = window.Cart;
    const esc = app.escape;
    const money = app.money;
    const getOrders = () => {
      const orders = app.storage.get('tnk.orders', []);
      return Array.isArray(orders) ? orders.filter(order => order && typeof order.id === 'string' && Array.isArray(order.items) && order.items.every(item => item && typeof item.name === 'string' && typeof item.image === 'string' && Number.isFinite(item.price) && Number.isInteger(item.quantity) && item.quantity > 0)) : [];
    };

    function paymentText(order) {
      return order.payment === 'transfer' ? 'Chuyển khoản mô phỏng · Chờ thanh toán' : 'COD · Chưa thanh toán';
    }

    function orderLines(order) {
      return order.items.map(item => `<div class="summary-product"><img src="${esc(item.image)}" alt="${esc(item.name)}" width="64" height="80"><div><strong>${esc(item.name)}</strong><small>Size ${esc(item.size)} · ${esc(item.color)} · SL ${Number(item.quantity)}</small></div><span>${money(item.price * item.quantity)}</span></div>`).join('');
    }

    if (page === 'order-success') {
      const id = new URLSearchParams(location.search).get('id');
      const order = getOrders().find(item => item && item.id === id);
      const target = document.getElementById('order-success-content');
      if (!order) {
        target.innerHTML = `<div class="commerce-empty"><span class="success-symbol muted-symbol" aria-hidden="true">?</span><h1>Chưa tìm thấy đơn hàng</h1><p>Đơn mẫu chỉ có trên trình duyệt đã tạo đơn. Mã đơn có thể không hợp lệ hoặc dữ liệu đã bị xóa.</p><a href="products.html" class="btn btn-primary">KHÁM PHÁ SẢN PHẨM</a><a href="account.html" class="text-link">Xem tài khoản mẫu</a></div>`;
        return;
      }
      const customer = order.customer || {};
      const summary = order.summary || {};
      target.innerHTML = `<div class="success-intro"><span class="success-symbol" aria-hidden="true">✓</span><p class="eyebrow">CẢM ƠN BẠN ĐÃ GHÉ NHÀ THỎ</p><h1>Đã ghi nhận đơn hàng mẫu!</h1><p>Một chút xinh xắn cho bé, một niềm vui nhỏ cho bạn.</p><div class="order-code">Mã đơn hàng <strong>${esc(order.id)}</strong></div></div><div class="demo-notice"><strong>Đây là đơn hàng mô phỏng, chưa thanh toán.</strong> Không có giao dịch, email xác nhận hay giao hàng thực tế.</div><div class="success-details"><section class="commerce-panel"><div class="panel-heading"><h2>Chi tiết đơn hàng</h2><span class="order-status">Đơn mẫu</span></div>${orderLines(order)}<div class="order-totals"><div><span>Tạm tính</span><span>${money(summary.subtotal || 0)}</span></div><div><span>Giảm giá${summary.coupon ? ` (${esc(summary.coupon)})` : ''}</span><span>−${money(summary.discount || 0)}</span></div><div><span>Phí vận chuyển mô phỏng</span><span>${summary.shipping ? money(summary.shipping) : 'Miễn phí'}</span></div><div class="grand-total"><strong>Tổng đơn hàng mẫu</strong><strong>${money(summary.total || 0)}</strong></div></div></section><section class="commerce-panel"><div class="panel-heading"><h2>Thông tin nhận hàng mẫu</h2></div><p><strong>${esc(customer.name || '')}</strong></p><p>${esc(customer.phone || '')}<br>${esc(customer.email || '')}</p><p>${esc(customer.address || '')}<br>${esc(customer.district || '')}, ${esc(customer.province || '')}</p>${customer.note ? `<p><strong>Lời nhắn:</strong> ${esc(customer.note)}</p>` : ''}<div class="payment-result"><strong>Phương thức thanh toán</strong><p>${paymentText(order)}</p>${order.payment === 'transfer' ? '<small>Không chuyển tiền thật. Không có cổng thanh toán được kết nối.</small>' : '<small>Không có đơn giao hàng thực tế trong bản mô phỏng.</small>'}</div></section></div><div class="success-actions"><a href="products.html" class="btn btn-primary">TIẾP TỤC MUA SẮM</a><a href="account.html" class="btn btn-outline">TÀI KHOẢN & ĐƠN HÀNG</a></div>`;
      return;
    }

    const content = document.getElementById('checkout-content');
    const form = document.getElementById('checkout-form');
    const alert = document.getElementById('checkout-error');
    let isSubmitting = false;

    function renderSummary() {
      const items = cart.items();
      const summaryPanel = content.querySelector('.checkout-summary');
      let empty = document.getElementById('checkout-empty-message');
      if (!items.length) {
        form.hidden = true;
        summaryPanel.hidden = true;
        if (!empty) {
          empty = document.createElement('div');
          empty.id = 'checkout-empty-message';
          empty.className = 'commerce-empty checkout-empty';
          empty.innerHTML = `<span class="empty-bag" aria-hidden="true">${app.icon('shopping-bag', 48)}</span><h2>Giỏ hàng đang chờ những điều xinh xắn</h2><p>Hãy chọn một vài món đồ cho bé trước khi thanh toán nhé.</p><a href="products.html" class="btn btn-primary">KHÁM PHÁ SẢN PHẨM</a>`;
          content.append(empty);
        }
        empty.hidden = false;
        return;
      }
      form.hidden = false;
      summaryPanel.hidden = false;
      if (empty) empty.remove();
      const totals = cart.totals();
      document.getElementById('checkout-items').innerHTML = items.map(item => {
        const product = app.getProduct(item.id);
        if (!product) return '';
        return `<div class="summary-product"><div class="summary-image"><img src="${esc(product.image)}" alt="${esc(product.name)}" width="64" height="80"><span>${Number(item.quantity)}</span></div><div><a href="product-detail.html?id=${encodeURIComponent(product.id)}">${esc(product.name)}</a><small>Size ${esc(item.size)} · ${esc(item.color)}</small></div><strong>${money(product.price * item.quantity)}</strong></div>`;
      }).join('');
      document.getElementById('checkout-coupon').innerHTML = `<div class="coupon-field"><label for="checkout-coupon-code">Mã ưu đãi</label><div><input id="checkout-coupon-code" name="coupon" placeholder="THONHO10 hoặc FREESHIP" value="${esc(cart.getCoupon() || '')}" maxlength="30"><button class="btn btn-outline" type="button" id="apply-checkout-coupon">Áp dụng</button></div><small>THONHO10: giảm 10% đơn từ 299.000đ, tối đa 100.000đ.</small><small>FREESHIP: miễn phí giao hàng cho đơn từ 199.000đ.</small><small id="checkout-coupon-feedback" role="status"></small></div>`;
      document.getElementById('checkout-totals').innerHTML = `<div class="order-totals"><div><span>Tạm tính (${totals.count} sản phẩm)</span><span>${money(totals.subtotal)}</span></div><div><span>Giảm giá</span><span class="discount-value">−${money(totals.discount)}</span></div><div><span>Phí vận chuyển mô phỏng</span><span>${totals.shipping ? money(totals.shipping) : 'Miễn phí'}</span></div><div class="grand-total"><strong>Tổng thanh toán</strong><strong>${money(totals.total)}</strong></div></div>`;
    }

    renderSummary();
    const session = app.storage.get('tnk.session', null);
    const profile = app.storage.get('tnk.profile', null);
    if (session && profile) {
      form.elements.name.value = profile.name || '';
      form.elements.email.value = profile.email || '';
      if (profile.phone) form.elements.phone.value = profile.phone;
    }

    content.addEventListener('click', event => {
      if (!event.target.closest('#apply-checkout-coupon')) return;
      const code = document.getElementById('checkout-coupon-code').value.trim().toUpperCase();
      const before = cart.totals();
      const isValid = !code || (code === 'THONHO10' && before.subtotal >= 299000) || (code === 'FREESHIP' && before.subtotal >= 199000);
      if (!isValid) {
        const message = code === 'THONHO10' ? 'Mã THONHO10 áp dụng cho đơn từ 299.000đ.' : code === 'FREESHIP' ? 'Mã FREESHIP áp dụng cho đơn từ 199.000đ.' : 'Mã chưa hợp lệ. Thử THONHO10 hoặc FREESHIP nhé.';
        document.getElementById('checkout-coupon-feedback').textContent = message;
        document.getElementById('checkout-coupon-feedback').className = 'coupon-feedback error';
        return;
      }
      if (cart.setCoupon(code) === false) {
        const feedback = document.getElementById('checkout-coupon-feedback');
        feedback.textContent = 'Chưa thể lưu mã ưu đãi. Kiểm tra quyền lưu trữ của trình duyệt rồi thử lại.';
        feedback.className = 'coupon-feedback error';
        return;
      }
      renderSummary();
      const feedback = document.getElementById('checkout-coupon-feedback');
      if (feedback) {
        feedback.textContent = code ? `Đã áp dụng mã ${code}.` : 'Đã bỏ mã ưu đãi.';
        feedback.className = 'coupon-feedback success';
      }
    });

    form.addEventListener('change', event => {
      if (event.target.name !== 'payment') return;
      document.querySelectorAll('.payment-option').forEach(option => option.classList.toggle('selected', option.querySelector('input').checked));
      document.getElementById('transfer-info').hidden = form.elements.payment.value !== 'transfer';
    });

    function validate(values) {
      const errors = {};
      if (values.name.length < 2) errors.name = 'Nhập họ tên từ 2 ký tự.';
      if (!/^0[35789]\d{8}$/.test(values.phone)) errors.phone = 'Nhập số di động Việt Nam gồm 10 số, bắt đầu bằng 03, 05, 07, 08 hoặc 09.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Nhập địa chỉ email hợp lệ.';
      if (!values.province) errors.province = 'Chọn tỉnh / thành phố.';
      if (values.district.length < 2) errors.district = 'Nhập khu vực nhận hàng.';
      if (values.address.length < 8) errors.address = 'Nhập địa chỉ chi tiết từ 8 ký tự.';
      ['name', 'phone', 'email', 'province', 'district', 'address'].forEach(name => {
        const field = form.elements[name];
        const errorElement = document.getElementById(`error-${name}`);
        errorElement.textContent = errors[name] || '';
        field.setAttribute('aria-invalid', errors[name] ? 'true' : 'false');
        field.setAttribute('aria-describedby', `error-${name}`);
      });
      if (Object.keys(errors).length) {
        form.elements[Object.keys(errors)[0]].focus();
        return false;
      }
      return true;
    }

    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (isSubmitting) return;
      alert.hidden = true;
      const data = new FormData(form);
      const customer = {};
      ['name', 'phone', 'email', 'province', 'district', 'address', 'note'].forEach(name => customer[name] = String(data.get(name) || '').trim());
      customer.phone = customer.phone.replace(/[\s.()-]/g, '');
      customer.email = customer.email.toLowerCase();
      if (!validate(customer)) return;
      const items = cart.items();
      if (!items.length) {
        renderSummary();
        return;
      }
      const snapshot = [];
      for (const item of items) {
        const product = app.getProduct(item.id);
        if (!product || !Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > product.stock || !product.sizes.includes(item.size) || !product.colors.some(color => color.name === item.color)) {
          alert.textContent = 'Một sản phẩm trong giỏ không còn hợp lệ hoặc vượt quá tồn kho mẫu. Hãy quay lại giỏ hàng để kiểm tra.';
          alert.hidden = false;
          alert.focus();
          return;
        }
        snapshot.push({...item, name: product.name, image: product.image, price: product.price});
      }
      const payment = data.get('payment');
      if (payment !== 'cod' && payment !== 'transfer') return;
      isSubmitting = true;
      const button = document.getElementById('place-order');
      button.disabled = true;
      button.textContent = 'ĐANG LƯU ĐƠN HÀNG MẪU…';
      await new Promise(resolve => requestAnimationFrame(resolve));
      const unique = window.crypto && typeof window.crypto.randomUUID === 'function' ? window.crypto.randomUUID().replace(/-/g, '').slice(0, 10) : Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
      const order = {id: `TNK-${unique.toUpperCase()}`, createdAt: new Date().toISOString(), email: customer.email, ownerId: session && session.id || null, customer, items: snapshot, summary: cart.totals(), payment, paymentStatus: payment === 'transfer' ? 'pending' : 'unpaid', status: 'Đã ghi nhận (mô phỏng)'};
      try {
        app.storage.set('tnk.orders', [order, ...getOrders()]);
        if (!getOrders().some(saved => saved.id === order.id)) throw new Error('Unable to persist order');
        cart.clear();
        location.href = `order-success.html?id=${encodeURIComponent(order.id)}`;
      } catch (_) {
        alert.textContent = 'Chưa thể lưu đơn trên trình duyệt. Kiểm tra dung lượng hoặc quyền lưu trữ rồi thử lại. Giỏ hàng của bạn vẫn được giữ nguyên.';
        alert.hidden = false;
        isSubmitting = false;
        button.disabled = false;
        button.textContent = 'THỬ LƯU ĐƠN HÀNG MẪU LẠI';
      }
    });

    ['cart:updated', 'cart-updated', 'tnk:cart-updated'].forEach(name => window.addEventListener(name, () => { if (!isSubmitting) renderSummary(); }));
    window.addEventListener('storage', event => { if (event.key === 'tnk.cart') renderSummary(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
}());
