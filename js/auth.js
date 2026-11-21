/* Demo accounts: passwords are deliberately never persisted or authenticated. */
(function () {
  'use strict';
  function init() {
    const page = document.body.dataset.page;
    if (!['login', 'register', 'forgot-password', 'account'].includes(page)) return;
    const app = window.TNK;
    const esc = app.escape;
    const getProfile = () => {
      const profile = app.storage.get('tnk.profile', null);
      return profile && typeof profile.name === 'string' && typeof profile.email === 'string' ? profile : null;
    };
    const getSession = () => {
      const session = app.storage.get('tnk.session', null);
      return session && typeof session.email === 'string' ? session : null;
    };
    const getOrders = () => {
      const orders = app.storage.get('tnk.orders', []);
      return Array.isArray(orders) ? orders.filter(order => order && typeof order.id === 'string' && Array.isArray(order.items) && order.items.every(item => item && typeof item.name === 'string' && typeof item.image === 'string' && Number.isFinite(item.price) && Number.isInteger(item.quantity) && item.quantity > 0)) : [];
    };
    const requestedNext = new URLSearchParams(location.search).get('next');
    const next = ['checkout.html', 'cart.html', 'account.html'].includes(requestedNext) ? requestedNext : 'account.html';

    document.querySelectorAll('[data-password-target]').forEach(button => button.addEventListener('click', () => {
      const input = document.getElementById(button.dataset.passwordTarget);
      const visible = input.type === 'password';
      input.type = visible ? 'text' : 'password';
      button.textContent = visible ? 'Ẩn' : 'Hiện';
      button.setAttribute('aria-label', visible ? 'Ẩn mật khẩu' : 'Hiện mật khẩu');
    }));
    document.querySelectorAll('[data-auth-link]').forEach(link => {
      if (requestedNext) link.href = `${link.dataset.authLink}?next=${encodeURIComponent(next)}`;
    });

    function showErrors(form, errors) {
      form.querySelectorAll('.field-error').forEach(element => { element.textContent = ''; });
      form.querySelectorAll('[aria-invalid]').forEach(element => element.removeAttribute('aria-invalid'));
      Object.keys(errors).forEach(name => {
        const element = document.getElementById(`error-${name}`);
        if (element) element.textContent = errors[name];
        if (form.elements[name]) {
          form.elements[name].setAttribute('aria-invalid', 'true');
          form.elements[name].setAttribute('aria-describedby', `error-${name}`);
        }
      });
      if (Object.keys(errors).length) {
        const field = form.elements[Object.keys(errors)[0]];
        if (field) field.focus();
        return false;
      }
      return true;
    }
    function alertMessage(message) {
      const target = document.getElementById('auth-error');
      target.textContent = message;
      target.hidden = !message;
    }
    const emailValid = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    function persistProfile(profile, session) {
      app.storage.set('tnk.profile', profile);
      if (getProfile()?.email !== profile.email) throw new Error('Profile not saved');
      if (session) {
        app.storage.set('tnk.session', profile);
        if (getSession()?.email !== profile.email) throw new Error('Session not saved');
      }
    }

    if (page === 'register') {
      const form = document.getElementById('register-form');
      form.addEventListener('submit', event => {
        event.preventDefault();
        alertMessage('');
        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim().toLowerCase();
        const password = form.elements.password.value;
        const errors = {};
        if (name.length < 2) errors.name = 'Nhập tên hiển thị từ 2 ký tự.';
        if (!emailValid(email)) errors.email = 'Nhập địa chỉ email mẫu hợp lệ.';
        if (password.length < 6) errors.password = 'Mật khẩu mẫu cần ít nhất 6 ký tự.';
        if (form.elements.confirm.value !== password) errors.confirm = 'Hai mật khẩu mẫu chưa trùng khớp.';
        if (!form.elements.consent.checked) errors.consent = 'Vui lòng xác nhận bạn hiểu đây là bản mô phỏng.';
        if (!showErrors(form, errors)) return;
        const previous = getProfile();
        if (previous && previous.email) {
          alertMessage('Thiết bị này đã có một hồ sơ mẫu. Hãy đăng nhập bằng email đã đăng ký; bạn có thể chỉnh sửa hồ sơ trong trang tài khoản.');
          return;
        }
        const profile = {id: `profile-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`, name, email, createdAt: new Date().toISOString()};
        try {
          persistProfile(profile, true);
          form.elements.password.value = '';
          form.elements.confirm.value = '';
          location.href = next;
        } catch (_) { alertMessage('Không thể lưu hồ sơ mẫu. Vui lòng cho phép lưu trữ cục bộ trong trình duyệt rồi thử lại.'); }
      });
      return;
    }

    if (page === 'login') {
      const form = document.getElementById('login-form');
      const profile = getProfile();
      if (profile?.email) form.elements.email.value = profile.email;
      form.addEventListener('submit', event => {
        event.preventDefault();
        alertMessage('');
        const email = form.elements.email.value.trim().toLowerCase();
        const errors = {};
        if (!emailValid(email)) errors.email = 'Nhập địa chỉ email mẫu hợp lệ.';
        if (form.elements.password.value.length < 6) errors.password = 'Nhập mật khẩu mẫu bất kỳ từ 6 ký tự. Không dùng mật khẩu thật.';
        if (!showErrors(form, errors)) return;
        const savedProfile = getProfile();
        if (!savedProfile || savedProfile.email !== email) {
          alertMessage('Không tìm thấy hồ sơ mẫu với email này trên thiết bị. Hãy đăng ký hồ sơ mẫu trước.');
          return;
        }
        try {
          persistProfile(savedProfile, true);
          form.elements.password.value = '';
          location.href = next;
        } catch (_) { alertMessage('Không thể lưu phiên đăng nhập mẫu. Kiểm tra quyền lưu trữ của trình duyệt.'); }
      });
      return;
    }

    if (page === 'forgot-password') {
      const form = document.getElementById('forgot-form');
      form.addEventListener('submit', event => {
        event.preventDefault();
        alertMessage('');
        const email = form.elements.email.value.trim().toLowerCase();
        const result = document.getElementById('forgot-result');
        result.hidden = true;
        if (!showErrors(form, emailValid(email) ? {} : {email: 'Nhập địa chỉ email mẫu hợp lệ.'})) return;
        const profile = getProfile();
        if (!profile || profile.email !== email) {
          alertMessage('Email này chưa có hồ sơ mẫu trên trình duyệt. Bạn có thể tạo tài khoản mẫu ở trang đăng ký.');
          return;
        }
        result.textContent = 'Đã tìm thấy hồ sơ mẫu. Hãy quay lại đăng nhập với email này và bất kỳ mật khẩu mẫu nào từ 6 ký tự. Không có email hoặc OTP nào được gửi.';
        result.hidden = false;
      });
      return;
    }

    const target = document.getElementById('account-content');
    let profile = getProfile();
    const session = getSession();
    if (!session || !profile || session.email !== profile.email) {
      target.innerHTML = `<div class="commerce-empty"><span class="account-avatar" aria-hidden="true">${app.icon('user', 38)}</span><p class="eyebrow">GÓC NHỎ CỦA BẠN</p><h1>Chào mừng đến nhà Thỏ</h1><p>Đăng nhập tài khoản mẫu để xem hồ sơ và đơn hàng trên trình duyệt này.</p><div class="success-actions"><a class="btn btn-primary" href="login.html">ĐĂNG NHẬP MẪU</a><a class="btn btn-outline" href="register.html">TẠO TÀI KHOẢN MẪU</a></div></div>`;
      return;
    }

    function userOrders() {
      return getOrders().filter(order => order && (order.ownerId ? order.ownerId === profile.id : String(order.email || order.customer?.email || '').toLowerCase() === profile.email));
    }

    function renderAccount() {
      const orders = userOrders();
      target.innerHTML = `<div class="commerce-heading account-heading"><p class="eyebrow">GÓC NHỎ CỦA BẠN</p><h1>Xin chào, ${esc(profile.name)}!</h1><p>Những điều dễ thương và đơn hàng của bạn đều ở đây.</p></div><div class="demo-notice">Hồ sơ và đơn hàng dưới đây là <strong>dữ liệu mô phỏng trên trình duyệt này</strong>. Không có xác thực hoặc thanh toán thật.</div><div class="account-layout"><aside class="account-navigation commerce-panel"><div class="account-identity"><span class="account-avatar" aria-hidden="true">${esc(profile.name.slice(0, 1).toUpperCase())}</span><strong>${esc(profile.name)}</strong><small>${esc(profile.email)}</small></div><a href="#profile-section">Thông tin cá nhân</a><a href="#orders-section">Đơn hàng của tôi <span>${orders.length}</span></a><a href="products.html">Tiếp tục mua sắm</a><button type="button" id="logout-button">Đăng xuất</button></aside><div class="account-main"><section id="profile-section" class="commerce-panel"><div class="panel-heading"><h2>Thông tin cá nhân</h2><span class="order-status">Hồ sơ mẫu</span></div><form id="profile-form" novalidate><div class="form-grid"><div class="form-field"><label for="profile-name">Tên hiển thị mẫu</label><input id="profile-name" name="name" value="${esc(profile.name)}" maxlength="80" required><small id="error-name" class="field-error"></small></div><div class="form-field"><label for="profile-email">Email mẫu</label><input id="profile-email" name="email" type="email" value="${esc(profile.email)}" maxlength="120" required><small id="error-email" class="field-error"></small></div></div><p id="profile-message" role="status" class="profile-message"></p><button type="submit" class="btn btn-primary">LƯU THÔNG TIN MẪU</button></form></section><section id="orders-section" class="commerce-panel"><div class="panel-heading"><h2>Đơn hàng của tôi</h2><span class="subtle-label">${orders.length} đơn hàng mẫu</span></div>${orders.length ? `<div class="account-orders">${orders.map(order => `<article class="account-order"><div class="account-order-heading"><div><strong>${esc(order.id)}</strong><small>${new Date(order.createdAt).toLocaleDateString('vi-VN')}</small></div><span class="order-status">Đơn mẫu · Chưa thanh toán</span></div><div class="account-order-preview"><img src="${esc(order.items[0]?.image || '')}" alt="${esc(order.items[0]?.name || 'Sản phẩm')}" width="64" height="80"><div><strong>${esc(order.items[0]?.name || 'Sản phẩm')}</strong><small>${order.items.reduce((total, item) => total + Number(item.quantity), 0)} sản phẩm · ${order.payment === 'transfer' ? 'Chuyển khoản mô phỏng' : 'COD'}</small></div><strong>${app.money(order.summary?.total || 0)}</strong></div><button type="button" class="btn btn-outline" data-order-detail="${esc(order.id)}">Xem chi tiết</button></article>`).join('')}</div>` : '<div class="orders-empty"><h3>Chưa có đơn hàng nào</h3><p>Khám phá những món đồ nhỏ xinh, rồi quay lại đây để xem đơn mẫu của bạn.</p><a href="products.html" class="btn btn-outline">KHÁM PHÁ NGAY</a></div>'}</section></div></div>`;
      document.getElementById('logout-button').addEventListener('click', () => {
        app.storage.set('tnk.session', null);
        if (getSession()) {
          app.toast('Chưa thể kết thúc phiên mẫu. Kiểm tra quyền lưu trữ của trình duyệt.', 'error');
          return;
        }
        location.href = 'login.html';
      });
      document.getElementById('profile-form').addEventListener('submit', event => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim().toLowerCase();
        const errors = {};
        if (name.length < 2) errors.name = 'Nhập tên từ 2 ký tự.';
        if (!emailValid(email)) errors.email = 'Nhập email mẫu hợp lệ.';
        if (!showErrors(form, errors)) return;
        try {
          const previousEmail = profile.email;
          const updated = {...profile, name, email};
          persistProfile(updated, true);
          if (previousEmail !== email) {
            const updatedOrders = getOrders().map(order => !order.ownerId && order.email === previousEmail ? {...order, ownerId: profile.id} : order);
            app.storage.set('tnk.orders', updatedOrders);
          }
          profile = updated;
          renderAccount();
          document.getElementById('profile-message').textContent = 'Đã lưu hồ sơ mẫu trên trình duyệt này.';
          app.toast('Đã cập nhật hồ sơ mẫu.', 'success');
        } catch (_) {
          document.getElementById('profile-message').textContent = 'Chưa thể lưu hồ sơ. Hãy kiểm tra quyền lưu trữ của trình duyệt.';
        }
      });
    }

    target.addEventListener('click', event => {
      const button = event.target.closest('[data-order-detail]');
      if (!button) return;
      const order = userOrders().find(item => item.id === button.dataset.orderDetail);
      if (!order) return;
      const customer = order.customer || {};
      const summary = order.summary || {};
      app.openModal(`Đơn hàng ${order.id}`, `<div class="order-detail-modal"><p class="demo-notice">Đơn mô phỏng, chưa thanh toán và không giao hàng thực tế.</p><p><strong>Ngày tạo:</strong> ${esc(new Date(order.createdAt).toLocaleString('vi-VN'))}</p><p><strong>Thanh toán:</strong> ${order.payment === 'transfer' ? 'Chuyển khoản mô phỏng · Chờ thanh toán' : 'COD · Chưa thanh toán'}</p><div>${order.items.map(item => `<div class="summary-product"><img src="${esc(item.image)}" alt="${esc(item.name)}" width="56" height="70"><div><strong>${esc(item.name)}</strong><small>Size ${esc(item.size)} · ${esc(item.color)} · SL ${Number(item.quantity)}</small></div><span>${app.money(item.price * item.quantity)}</span></div>`).join('')}</div><div class="order-totals"><div><span>Tạm tính</span><span>${app.money(summary.subtotal || 0)}</span></div><div><span>Giảm giá</span><span>−${app.money(summary.discount || 0)}</span></div><div><span>Phí vận chuyển mô phỏng</span><span>${summary.shipping ? app.money(summary.shipping) : 'Miễn phí'}</span></div><div class="grand-total"><strong>Tổng đơn mẫu</strong><strong>${app.money(summary.total || 0)}</strong></div></div><h3>Địa chỉ mẫu</h3><p>${esc(customer.name || '')} · ${esc(customer.phone || '')}<br>${esc(customer.address || '')}<br>${esc(customer.district || '')}, ${esc(customer.province || '')}</p>${customer.note ? `<p>Lời nhắn: ${esc(customer.note)}</p>` : ''}</div>`);
    });
    renderAccount();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
}());
