/* Variant-aware, browser-local cart. All amounts are integer Vietnamese đồng. */
(() => {
  'use strict';
  const app=window.TNK;if(!app)return;
  const {storage,getProduct,money,escape:esc,icon,toast}=app;
  const KEY='tnk.cart',COUPON_KEY='tnk.coupon';
  let drawerFocus;
  const lineKey=(id,size,color)=>[id,size,color].map(encodeURIComponent).join('|');
  function read(){
    const raw=storage.get(KEY,[]);if(!Array.isArray(raw))return [];
    const merged=new Map(),used=new Map();
    for(const line of raw){
      if(!line||typeof line!=='object')continue;
      const p=getProduct(line.id),qty=Number(line.quantity),size=String(line.size||''),color=String(line.color||'');
      if(!p||!Number.isInteger(qty)||qty<1||!p.sizes.includes(size)||!p.colors.some(c=>c.name===color))continue;
      const available=Math.max(0,p.stock-(used.get(p.id)||0));const quantity=Math.min(qty,available);if(!quantity)continue;
      const key=lineKey(p.id,size,color),previous=merged.get(key);merged.set(key,{key,id:p.id,size,color,quantity:quantity+(previous?.quantity||0)});used.set(p.id,(used.get(p.id)||0)+quantity);
    }return [...merged.values()];
  }
  function items(){return read();}
  function getCoupon(){const val=storage.get(COUPON_KEY,'');return typeof val==='string'?val.trim().toUpperCase():'';}
  function totals(code=getCoupon()){
    const list=read(),subtotal=list.reduce((sum,l)=>sum+(getProduct(l.id)?.price||0)*l.quantity,0),count=list.reduce((n,l)=>n+l.quantity,0);
    const requested=String(code||'').trim().toUpperCase();let coupon='',discount=0,shipping=count?(subtotal>=499000?0:30000):0;
    if(requested==='THONHO10'&&subtotal>=299000){coupon=requested;discount=Math.min(100000,Math.round(subtotal*.1));}
    if(requested==='FREESHIP'&&subtotal>=199000){coupon=requested;shipping=0;}
    return {subtotal,count,discount,shipping,total:subtotal-discount+shipping,coupon};
  }
  function dispatch(){renderCounts();renderDrawer();renderPage();window.dispatchEvent(new CustomEvent('tnk:cart-updated',{detail:{items:items(),totals:totals()}}));}
  function save(list){if(!storage.set(KEY,list))return false;dispatch();return true;}
  function add(id,size,color,quantity=1){
    const p=getProduct(id);quantity=Number(quantity);size=String(size||'');color=typeof color==='object'?color?.name:String(color||'');
    if(!p){toast('Sản phẩm này chưa có trong tủ đồ nhà Thỏ.','error');return false;}
    if(!p.sizes.includes(size)){toast('Ba mẹ hãy chọn size phù hợp cho bé.','error');return false;}
    if(!p.colors.some(c=>c.name===color)){toast('Ba mẹ hãy chọn màu cho bé nhé.','error');return false;}
    if(!Number.isInteger(quantity)||quantity<1){toast('Số lượng cần là số nguyên lớn hơn 0.','error');return false;}
    const list=read(),used=list.filter(l=>l.id===p.id).reduce((n,l)=>n+l.quantity,0);
    if(used+quantity>p.stock){toast(`Nhà Thỏ còn ${p.stock} sản phẩm mẫu này. Ba mẹ kiểm tra lại số lượng nhé.`,'error');return false;}
    const key=lineKey(p.id,size,color),existing=list.find(l=>l.key===key);if(existing)existing.quantity+=quantity;else list.push({key,id:p.id,size,color,quantity});
    if(!save(list))return false;toast('Đã thêm một chút xinh vào giỏ hàng của bé!');return true;
  }
  function update(key,quantity){
    const list=read(),line=list.find(l=>l.key===key);quantity=Number(quantity);if(!line)return false;if(!Number.isInteger(quantity)||quantity<1)return false;
    const p=getProduct(line.id),other=list.filter(l=>l.id===line.id&&l.key!==key).reduce((n,l)=>n+l.quantity,0);
    if(quantity+other>p.stock){toast(`Tối đa ${p.stock} sản phẩm mẫu này trong giỏ.`, 'error');return false;}line.quantity=quantity;return save(list);
  }
  function remove(key){const list=read();if(!list.some(l=>l.key===key))return false;return save(list.filter(l=>l.key!==key));}
  function clear(){if(!storage.set(KEY,[]))return false;storage.set(COUPON_KEY,'');dispatch();return true;}
  function setCoupon(code){
    code=String(code||'').trim().toUpperCase();const t=totals(code);
    if(code&&!t.coupon){toast(code==='THONHO10'?'Mã THONHO10 áp dụng cho đơn từ 299.000đ.':code==='FREESHIP'?'Mã FREESHIP áp dụng cho đơn từ 199.000đ.':'Mã ưu đãi chưa hợp lệ. Thử THONHO10 hoặc FREESHIP.','error');return false;}
    if(!storage.set(COUPON_KEY,code))return false;dispatch();return true;
  }
  function open(){const d=document.getElementById('cart-drawer');if(!d)return;drawerFocus=document.activeElement;renderDrawer();d.classList.add('is-open');document.getElementById('cart-backdrop').classList.add('is-open');d.setAttribute('aria-hidden','false');d.inert=false;document.body.classList.add('cart-open');d.querySelector('[data-close-cart]').focus();}
  function close(){const d=document.getElementById('cart-drawer');if(!d||!d.classList.contains('is-open'))return;d.classList.remove('is-open');document.getElementById('cart-backdrop').classList.remove('is-open');d.setAttribute('aria-hidden','true');d.inert=true;document.body.classList.remove('cart-open');drawerFocus?.focus();}
  window.Cart={items,totals,add,update,remove,clear,setCoupon,getCoupon,open,close};
  function renderCounts(){const count=totals().count;document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=count>99?'99+':count);document.querySelectorAll('[data-open-cart]').forEach(el=>el.setAttribute('aria-label',`Mở giỏ hàng, ${count} sản phẩm`));}
  function qtyHTML(l){return `<div class="qty-control" aria-label="Số lượng"><button data-cart-qty="${esc(l.key)}" data-qty="${l.quantity-1}" ${l.quantity<=1?'disabled':''} aria-label="Giảm số lượng">${icon('minus',13)}</button><span aria-live="polite">${l.quantity}</span><button data-cart-qty="${esc(l.key)}" data-qty="${l.quantity+1}" aria-label="Tăng số lượng">${icon('plus',13)}</button></div>`;}
  function renderDrawer(){
    const target=document.getElementById('cart-drawer-content');if(!target)return;const list=read(),t=totals();document.getElementById('drawer-count').textContent=`(${t.count} sản phẩm)`;
    if(!list.length){target.innerHTML=`<div class="drawer-empty">${icon('bag',54)}<h3>Giỏ nhỏ đang chờ yêu thương</h3><p>Chọn vài món thật xinh để cùng bé viết nên những ngày vui nhé.</p><a class="btn btn-primary" href="products.html">KHÁM PHÁ TỦ ĐỒ CỦA BÉ</a></div>`;return;}
    target.innerHTML=`<div class="cart-drawer-items">${list.map(l=>{const p=getProduct(l.id);return `<article class="cart-drawer-item"><a href="product-detail.html?id=${encodeURIComponent(p.id)}"><img src="${esc(p.image)}" alt="${esc(p.name)}" width="78" height="99"></a><div class="cart-item-content"><h3><a href="product-detail.html?id=${encodeURIComponent(p.id)}">${esc(p.name)}</a></h3><p class="cart-item-meta">${esc(l.color)} / Size ${esc(l.size)}</p><div class="cart-item-bottom">${qtyHTML(l)}<strong>${money(p.price*l.quantity)}</strong></div></div><button class="cart-item-remove" data-cart-remove="${esc(l.key)}" aria-label="Xóa ${esc(p.name)}">${icon('close',15)}</button></article>`;}).join('')}</div><div class="cart-drawer-footer"><div class="shipping-progress"><p>${t.subtotal>=499000?'Ba mẹ được <b>miễn phí vận chuyển</b>!':`Thêm <b>${money(499000-t.subtotal)}</b> để được freeship.`}</p><div class="shipping-meter"><span style="width:${Math.min(100,t.subtotal/499000*100)}%"></span></div></div><div class="drawer-total"><span>Tạm tính</span><strong>${money(t.subtotal)}</strong></div><p class="drawer-shipping-note">Ưu đãi và phí vận chuyển được tính ở bước thanh toán.</p><a class="btn btn-primary" href="checkout.html">THANH TOÁN ${icon('lock',16)}</a><a class="drawer-view-cart" href="cart.html">Xem giỏ hàng của ba mẹ</a></div>`;
  }
  function couponHTML(){return `<form class="coupon-form" id="cart-coupon-form"><label for="cart-coupon">Mã ưu đãi dành cho ba mẹ</label><div class="coupon-input"><input id="cart-coupon" name="coupon" placeholder="Nhập mã ưu đãi" value="${esc(getCoupon())}" maxlength="30" aria-describedby="coupon-hint"><button type="submit">Áp dụng</button></div><p class="coupon-hint" id="coupon-hint">THONHO10: giảm 10% từ 299K (tối đa 100K).<br>FREESHIP: miễn phí giao hàng từ 199K.</p>${getCoupon()?`<p class="coupon-status ${totals().coupon?'':'error'}">${totals().coupon?`Đã áp dụng ${esc(totals().coupon)}.`:'Giỏ hàng chưa đủ điều kiện dùng mã đã chọn.'} <button type="button" data-remove-coupon aria-label="Bỏ mã giảm giá">${icon('close',13)}</button></p>`:''}</form>`;}
  function renderPage(){
    if(document.body.dataset.page!=='cart')return;const target=document.getElementById('cart-page-content');if(!target)return;const list=read(),t=totals();
    if(!list.length){target.innerHTML=`<div class="empty-state">${icon('bag',62)}<p class="eyebrow">MỘT CHÚT XINH ĐANG CHỜ BÉ</p><h1>Giỏ hàng chưa có sản phẩm</h1><p>Dạo một vòng nhà Thỏ và chọn những món đồ bé yêu thích nhé.</p><a class="btn btn-primary" href="products.html">BẮT ĐẦU MUA SẮM</a></div>`;return;}
    target.innerHTML=`<h1 class="page-title">Giỏ hàng của ba mẹ <small>(${t.count} sản phẩm)</small></h1><div class="cart-layout"><section aria-label="Sản phẩm trong giỏ"><div class="cart-table-header"><span>Sản phẩm</span><span>Đơn giá</span><span>Số lượng</span><span>Thành tiền</span><span></span></div>${list.map(l=>{const p=getProduct(l.id);return `<article class="cart-row"><div class="cart-row-product"><a href="product-detail.html?id=${encodeURIComponent(p.id)}"><img src="${esc(p.image)}" alt="${esc(p.name)}" width="88" height="110"></a><div><h2><a href="product-detail.html?id=${encodeURIComponent(p.id)}">${esc(p.name)}</a></h2><p class="cart-item-meta">Màu ${esc(l.color)} · Size ${esc(l.size)}</p></div></div><span class="cart-row-price">${money(p.price)}</span>${qtyHTML(l)}<strong class="cart-row-total">${money(p.price*l.quantity)}</strong><button class="cart-row-remove" data-cart-remove="${esc(l.key)}" aria-label="Xóa ${esc(p.name)}">${icon('trash',17)}</button></article>`;}).join('')}<div class="cart-table-actions"><a class="cart-continue" href="products.html">${icon('chevron-left',17)} Tiếp tục khám phá tủ đồ</a><button class="clear-cart" data-clear-cart>Xóa giỏ hàng</button></div></section><aside class="order-summary"><h2>Tóm tắt đơn hàng</h2><div class="summary-row"><span>Tạm tính</span><strong>${money(t.subtotal)}</strong></div><div class="summary-row"><span>Ưu đãi</span><strong>−${money(t.discount)}</strong></div><div class="summary-row"><span>Phí vận chuyển mẫu</span><strong>${t.shipping?money(t.shipping):'Miễn phí'}</strong></div>${couponHTML()}<div class="summary-row total"><span>Tổng cộng</span><strong>${money(t.total)}</strong></div><a href="checkout.html" class="btn btn-primary full-width">TIẾN HÀNH THANH TOÁN</a><p class="checkout-security">${icon('lock',13)} Thao tác mua hàng mô phỏng trên trình duyệt</p><p class="summary-note">Freeship cho đơn từ 499.000đ trước giảm giá. Phí giao hàng mẫu 30.000đ cho các đơn còn lại.</p></aside></div>`;
    document.getElementById('cart-coupon-form')?.addEventListener('submit',e=>{e.preventDefault();const code=e.currentTarget.elements.coupon.value;if(setCoupon(code))toast(code.trim()?'Đã áp dụng mã ưu đãi cho ba mẹ.':'Đã bỏ mã ưu đãi.');});
  }
  function init(){
    const backdrop=document.createElement('div');backdrop.id='cart-backdrop';backdrop.className='cart-backdrop';backdrop.setAttribute('aria-hidden','true');backdrop.setAttribute('data-close-cart','');document.body.append(backdrop);
    const drawer=document.createElement('aside');drawer.id='cart-drawer';drawer.className='cart-drawer';drawer.setAttribute('role','dialog');drawer.setAttribute('aria-modal','true');drawer.setAttribute('aria-label','Giỏ hàng của ba mẹ');drawer.setAttribute('aria-hidden','true');drawer.inert=true;drawer.innerHTML=`<div class="cart-drawer-heading"><h2>Giỏ hàng <small id="drawer-count"></small></h2><button class="icon-btn" data-close-cart aria-label="Đóng giỏ hàng">${icon('close')}</button></div><div id="cart-drawer-content" class="cart-drawer-body"></div>`;document.body.append(drawer);
    renderCounts();renderDrawer();renderPage();
  }
  document.addEventListener('click',e=>{
    if(e.target.closest('[data-open-cart]')){open();return;}
    if(e.target.closest('[data-close-cart]')){close();return;}
    const q=e.target.closest('[data-cart-qty]');if(q){const key=q.dataset.cartQty,qty=Number(q.dataset.qty);if(update(key,qty)){const container=document.querySelector('.cart-drawer.is-open')||document.getElementById('cart-page-content');const buttons=container?.querySelectorAll('[data-cart-qty]');[...(buttons||[])].find(b=>b.dataset.cartQty===key&&Number(b.dataset.qty)===qty+1)?.focus();}return;}
    const removeButton=e.target.closest('[data-cart-remove]');if(removeButton){if(remove(removeButton.dataset.cartRemove))toast('Đã xóa sản phẩm khỏi giỏ hàng.');return;}
    if(e.target.closest('[data-remove-coupon]')){setCoupon('');return;}
    if(e.target.closest('[data-clear-cart]')){app.openModal('Xóa giỏ hàng?',`<p>Ba mẹ muốn bỏ tất cả sản phẩm trong giỏ hiện tại?</p><div class="confirm-actions"><button class="btn btn-outline" data-close-modal>Giữ lại giỏ hàng</button><button class="btn btn-primary" id="confirm-clear-cart">Xóa giỏ hàng</button></div>`);document.getElementById('confirm-clear-cart').addEventListener('click',()=>{if(clear()){app.closeModal();toast('Đã xóa giỏ hàng.');}});}
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  window.addEventListener('storage',e=>{if([KEY,COUPON_KEY].includes(e.key)||e.key===null)dispatch();});
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
