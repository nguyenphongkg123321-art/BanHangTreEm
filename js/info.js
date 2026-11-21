(function () {
  'use strict';

  const sections = {
    about: {
      label: 'Câu chuyện nhà Thỏ',
      eyebrow: 'NHỎ XINH TỪNG KHOẢNH KHẮC',
      content: `<h1>Tuổi thơ lớn lên từ những điều nhỏ.</h1>
        <p>Một chiếc áo mềm để bé thoải mái chạy nhảy. Một chiếc váy xinh cho buổi sinh nhật đầu tiên. Một bộ đồ quen thuộc được bé chọn mặc thêm lần nữa. Với Thỏ Nhỏ Kids, đó đều là những mảnh ghép đáng yêu của hành trình lớn khôn.</p>
        <p>Nhà Thỏ lấy cảm hứng từ những ngày thật bình thường: bé đến lớp, cùng ba mẹ đi dạo, chơi đùa trong sân hay kể câu chuyện mới trước giờ ngủ. Tủ đồ của bé vì thế nên vừa thoải mái, dễ phối, vừa có những màu sắc riêng để bé tự tin là chính mình.</p>
        <h2>Mềm mại cho những ngày dài vui chơi</h2>
        <p>Tinh thần thiết kế của nhà Thỏ hướng đến phom dáng dễ mặc, chi tiết nhỏ xinh và bảng màu tươi sáng. Từ đầm váy, áo thun, đồ bộ đến những đôi giày nhỏ, mỗi lựa chọn đều góp thêm một niềm vui trong tủ đồ của bé.</p>
        <h2>Một góc nhỏ để ba mẹ khám phá</h2>
        <p>Ba mẹ có thể tìm trang phục theo danh mục, chọn màu và size, lưu món yêu thích, rồi trải nghiệm toàn bộ hành trình đặt hàng trên website.</p>
        <p class="notice">Thỏ Nhỏ Kids là thương hiệu mẫu trong dự án frontend. Sản phẩm, ưu đãi, tồn kho và đơn hàng đều là dữ liệu minh họa; website chưa vận hành cửa hàng hoặc tiếp nhận giao dịch thực tế.</p>
        <a class="btn btn-primary" href="products.html">KHÁM PHÁ TỦ ĐỒ CỦA BÉ</a>`
    },
    size: {
      label: 'Hướng dẫn chọn size',
      eyebrow: 'VỪA VẶN ĐỂ BÉ THOẢI MÁI',
      content: `<h1>Chọn một chiếc size thật vừa.</h1>
        <p>Ba mẹ hãy đo chiều cao và cân nặng hiện tại của bé, sau đó đối chiếu bảng tham khảo bên dưới. Độ tuổi chỉ giúp hình dung; số đo thực tế và phom trang phục mới là căn cứ chính khi chọn size.</p>
        <h2>Bảng size quần áo mẫu</h2>
        <div class="table-scroll"><table><caption>Size quần áo trẻ em trong catalog minh họa</caption><thead><tr><th scope="col">Size</th><th scope="col">Chiều cao (cm)</th><th scope="col">Cân nặng (kg)</th><th scope="col">Tuổi tham khảo</th></tr></thead><tbody>
          <tr><th scope="row">100</th><td>95–105</td><td>14–17</td><td>3–4 tuổi</td></tr>
          <tr><th scope="row">110</th><td>105–115</td><td>17–20</td><td>4–5 tuổi</td></tr>
          <tr><th scope="row">120</th><td>115–125</td><td>20–25</td><td>5–6 tuổi</td></tr>
          <tr><th scope="row">130</th><td>125–135</td><td>25–30</td><td>7–8 tuổi</td></tr>
          <tr><th scope="row">140</th><td>135–145</td><td>30–36</td><td>9–10 tuổi</td></tr>
          <tr><th scope="row">150</th><td>145–155</td><td>36–43</td><td>11–12 tuổi</td></tr>
        </tbody></table></div>
        <h2>Bảng size giày dép mẫu</h2>
        <p>Để bé đứng trên giấy, đánh dấu từ gót chân đến ngón dài nhất rồi đo khoảng cách. Đo cả hai bàn chân và dùng số đo lớn hơn.</p>
        <div class="table-scroll"><table><caption>Đối chiếu chiều dài bàn chân trong bản mẫu</caption><thead><tr><th scope="col">Size</th><th scope="col">Chiều dài chân (cm)</th></tr></thead><tbody>
          <tr><th scope="row">26</th><td>15,5–16</td></tr><tr><th scope="row">27</th><td>16–16,5</td></tr><tr><th scope="row">28</th><td>16,5–17</td></tr><tr><th scope="row">29</th><td>17–17,5</td></tr><tr><th scope="row">30</th><td>17,5–18</td></tr><tr><th scope="row">31</th><td>18–18,5</td></tr><tr><th scope="row">32</th><td>18,5–19</td></tr>
        </tbody></table></div>
        <h2>Một vài gợi ý nhỏ</h2>
        <ul><li>Nếu bé nằm giữa hai size, cân nhắc size lớn hơn cho trang phục mặc rộng.</li><li>Với áo khoác, tính thêm lớp áo bé thường mặc bên trong.</li><li>Xem mô tả riêng của từng sản phẩm và kiểm tra size đang có trước khi thêm vào giỏ.</li></ul>
        <p class="notice">Bảng số đo này chỉ minh họa cho catalog mẫu, không thay thế bảng size chính thức của nhà sản xuất. Khi mua sản phẩm thật, cần đối chiếu số đo và hướng dẫn của chính sản phẩm đó.</p>
        <a class="btn btn-primary" href="products.html">CHỌN ĐỒ XINH CHO BÉ</a>`
    },
    shipping: {
      label: 'Giao hàng & thanh toán',
      eyebrow: 'GỬI MỘT CHÚT XINH ĐẾN NHÀ',
      content: `<h1>Giao hàng và thanh toán.</h1>
        <p class="notice">Thông tin trên trang này là quy tắc mô phỏng để ba mẹ trải nghiệm mua sắm. Website chưa kết nối đơn vị giao hàng, ngân hàng hoặc cổng thanh toán và không tạo đơn giao thực tế.</p>
        <h2>Phí vận chuyển mẫu</h2>
        <ul><li>Miễn phí vận chuyển khi tổng tiền sản phẩm trước giảm giá từ <strong>499.000đ</strong>.</li><li>Phí cố định <strong>30.000đ</strong> cho đơn có sản phẩm và chưa đạt mức miễn phí.</li><li>Giỏ hàng trống không tính phí vận chuyển.</li></ul>
        <h2>Mã ưu đãi để ba mẹ thử</h2>
        <div class="table-scroll"><table><thead><tr><th scope="col">Mã</th><th scope="col">Điều kiện</th><th scope="col">Ưu đãi mẫu</th></tr></thead><tbody><tr><th scope="row">THONHO10</th><td>Tổng sản phẩm từ 299.000đ</td><td>Giảm 10%, tối đa 100.000đ</td></tr><tr><th scope="row">FREESHIP</th><td>Tổng sản phẩm từ 199.000đ</td><td>Miễn phí vận chuyển</td></tr></tbody></table></div>
        <p>Mỗi lần chỉ áp dụng một mã. Điều kiện được tính trên tổng tiền sản phẩm trước giảm giá; khi thay đổi số lượng trong giỏ, hệ thống tính lại ưu đãi theo tổng mới.</p>
        <h2>Hai phương thức thanh toán mô phỏng</h2>
        <p><strong>COD:</strong> đơn mẫu được ghi nhận ở trạng thái chưa thanh toán. Không có người giao hàng hoặc yêu cầu thu tiền thực tế.</p>
        <p><strong>Chuyển khoản:</strong> đơn mẫu được ghi nhận ở trạng thái chờ thanh toán. Website không cung cấp tài khoản nhận tiền thật, không kiểm tra giao dịch và không xác nhận đã nhận tiền.</p>
        <h2>Sau khi đặt hàng</h2>
        <p>Website tự tạo mã đơn, lưu thông tin mẫu trên trình duyệt hiện tại và mở trang xác nhận. Không có email xác nhận hay tin nhắn được gửi. Ba mẹ có thể xem lại đơn của hồ sơ mẫu trong trang tài khoản.</p>
        <a class="btn btn-primary" href="cart.html">XEM GIỎ HÀNG</a>`
    },
    returns: {
      label: 'Chính sách đổi trả',
      eyebrow: 'BA MẸ CHỌN XINH, BÉ MẶC VUI',
      content: `<h1>Đổi trả cho một lựa chọn vừa hơn.</h1>
        <p class="notice">Đây là nội dung chính sách mẫu cho giao diện cửa hàng, chưa áp dụng cho giao dịch thực tế. Website không tiếp nhận, xử lý hoặc cam kết hoàn tiền, đổi hàng.</p>
        <h2>Thời hạn minh họa: 30 ngày</h2>
        <p>Thông điệp “30 ngày đổi trả” trên website mô phỏng khoảng thời gian tính từ ngày nhận hàng. Trong một cửa hàng vận hành thật, thời hạn và điều kiện cần được công bố theo từng sản phẩm và giao dịch.</p>
        <h2>Điều kiện đổi trả mẫu</h2>
        <ul><li>Sản phẩm chưa sử dụng, chưa giặt, còn nhãn và phụ kiện đi kèm.</li><li>Có mã đơn hoặc thông tin chứng minh mua hàng.</li><li>Giày dép chưa đi ngoài trời, còn hộp và không có dấu hiệu sử dụng.</li><li>Đồ lót và sản phẩm có yêu cầu vệ sinh riêng cần được xem xét theo điều kiện riêng của cửa hàng thật.</li></ul>
        <h2>Quy trình tham khảo</h2>
        <p>Ba mẹ chuẩn bị mã đơn, ảnh sản phẩm và lý do cần hỗ trợ; cửa hàng kiểm tra tình trạng rồi thống nhất phương án đổi size, đổi mẫu hoặc xử lý phù hợp. Chi phí vận chuyển và cách hoàn tiền phải được xác nhận trước khi gửi hàng.</p>
        <h2>Thử trải nghiệm trên website</h2>
        <p>Ba mẹ có thể xem mã và chi tiết đơn đã tạo trong tài khoản mẫu. Tính năng gửi yêu cầu đổi trả chưa được triển khai trong bản frontend này.</p>
        <a class="btn btn-primary" href="account.html">XEM ĐƠN HÀNG MẪU</a>`
    },
    privacy: {
      label: 'Thông tin lưu trữ',
      eyebrow: 'HIỂU RÕ DỮ LIỆU CỦA BA MẸ',
      content: `<h1>Thông tin được lưu như thế nào?</h1>
        <p>Thỏ Nhỏ Kids là bản frontend chạy trong trình duyệt. Các thao tác tìm kiếm, chọn sản phẩm, tạo hồ sơ và đặt hàng mẫu không gửi thông tin đến hệ thống cửa hàng.</p>
        <h2>Dữ liệu nằm trên trình duyệt hiện tại</h2>
        <ul><li>Giỏ hàng, màu, size, số lượng và mã ưu đãi.</li><li>Danh sách sản phẩm yêu thích và sản phẩm đã xem.</li><li>Tên hiển thị, email mẫu và trạng thái đăng nhập mô phỏng.</li><li>Đơn mẫu, gồm danh sách sản phẩm và thông tin nhận hàng do người dùng nhập.</li><li>Email đăng ký nhận tin mẫu và thời điểm kết thúc đếm ngược Flash Sale.</li></ul>
        <p>Những dữ liệu này được lưu bằng LocalStorage của website, với các khóa bắt đầu bằng <strong>tnk.</strong>. Dữ liệu không tự đồng bộ sang thiết bị, trình duyệt hay địa chỉ website khác.</p>
        <h2>Mật khẩu và thanh toán</h2>
        <p>Mật khẩu nhập ở các biểu mẫu mẫu không được lưu hoặc dùng để xác thực thật. Đăng nhập mô phỏng chỉ kiểm tra email hồ sơ trên thiết bị và định dạng mật khẩu mẫu. Website không thu thập số thẻ, mã bảo mật thẻ hoặc thông tin đăng nhập ngân hàng.</p>
        <h2>Quản lý dữ liệu mẫu</h2>
        <p>Ba mẹ có thể xóa từng món trong giỏ và bỏ yêu thích bằng các nút trên giao diện. Để đặt lại toàn bộ trải nghiệm, mở công cụ dành cho nhà phát triển của trình duyệt, tìm LocalStorage của đúng địa chỉ website và chỉ xóa các khóa bắt đầu bằng <strong>tnk.</strong>, sau đó tải lại trang.</p>
        <p class="notice">Chỉ dùng tên, email, số điện thoại và địa chỉ giả khi thử biểu mẫu. LocalStorage không phải nơi bảo vệ dữ liệu bí mật; người dùng khác có quyền truy cập trình duyệt này có thể xem hoặc chỉnh sửa dữ liệu mẫu. Đây là mô tả kỹ thuật của bản demo, chưa phải chính sách bảo mật cho một cửa hàng đang kinh doanh.</p>
        <a class="btn btn-primary" href="account.html">MỞ TÀI KHOẢN MẪU</a>`
    },
    contact: {
      label: 'Liên hệ nhà Thỏ',
      eyebrow: 'NHÀ THỎ LUÔN LẮNG NGHE',
      content: `<h1>Một lời nhắn đến nhà Thỏ.</h1>
        <p>Một chiếc size chưa rõ, một màu sắc bé yêu thích hay một ý tưởng nhỏ cho tủ đồ mới — nhà Thỏ mong những cuộc trò chuyện luôn bắt đầu thật dễ dàng.</p>
        <h2>Thông tin liên hệ trong bản mẫu</h2>
        <p>Email hiển thị: <strong>hello@thonhokids.example</strong></p>
        <p>Khung giờ hiển thị trong thiết kế: <strong>8:00 – 21:00 mỗi ngày</strong>.</p>
        <p class="notice">Địa chỉ email có đuôi .example là dữ liệu minh họa, không phải hộp thư hỗ trợ hoạt động. Website chưa có cửa hàng, hotline, kênh mạng xã hội hoặc đội ngũ chăm sóc khách hàng thật; các biểu tượng kết nối dẫn đến trang thông tin này.</p>
        <h2>Ba mẹ muốn tìm thông tin gì?</h2>
        <ul><li><a href="info.html?section=size">Đối chiếu bảng size quần áo và giày dép.</a></li><li><a href="info.html?section=shipping">Xem phí vận chuyển, mã ưu đãi và thanh toán mẫu.</a></li><li><a href="info.html?section=returns">Đọc nội dung đổi trả minh họa.</a></li><li><a href="account.html">Xem hồ sơ và đơn hàng trên trình duyệt này.</a></li></ul>
        <h2>Gửi góp ý cho dự án</h2>
        <p>Nếu đang dùng bản website để học tập hoặc giới thiệu thiết kế, hãy gửi góp ý trực tiếp cho người quản lý dự án. Chức năng gửi tin nhắn và email chưa được kết nối trong phiên bản này.</p>
        <a class="btn btn-primary" href="products.html">TIẾP TỤC KHÁM PHÁ</a>`
    },
    care: {
      label: 'Chăm sóc quần áo',
      eyebrow: 'GIỮ ĐỒ XINH CHO NHỮNG NGÀY TIẾP THEO',
      content: `<h1>Một chút chăm chút, đồ xinh bền hơn.</h1>
        <p>Trang phục của bé đồng hành qua thật nhiều cuộc vui. Một vài thói quen giặt và bảo quản nhẹ nhàng sẽ giúp giữ phom dáng, màu sắc và cảm giác dễ chịu khi mặc.</p>
        <h2>Trước khi giặt</h2>
        <ul><li>Đọc nhãn chăm sóc riêng của sản phẩm; hướng dẫn trên nhãn được ưu tiên.</li><li>Phân loại đồ sáng màu, tối màu và đồ dễ ra màu.</li><li>Kiểm tra túi, kéo khóa và lộn trái những món có hình in hoặc chi tiết trang trí.</li></ul>
        <h2>Giặt nhẹ nhàng</h2>
        <p>Với sản phẩm cho phép giặt nước, chọn chế độ nhẹ, lượng chất giặt phù hợp và nước mát theo nhãn. Có thể dùng túi giặt cho đồ nhỏ. Tránh ngâm lâu hoặc chà mạnh lên hình in, ren và voan.</p>
        <h2>Phơi và cất giữ</h2>
        <ul><li>Phơi ở nơi thông thoáng; tránh nắng gắt chiếu trực tiếp lâu lên mặt vải.</li><li>Chỉnh phom trước khi phơi. Đồ len nên đặt phẳng khi hướng dẫn của nhà sản xuất yêu cầu.</li><li>Đợi trang phục khô hẳn rồi cất vào nơi sạch, khô và thoáng.</li><li>Ủi theo mức nhiệt trên nhãn; tránh ủi trực tiếp lên hình in hoặc chi tiết nhựa.</li></ul>
        <h2>Với giày dép</h2>
        <p>Vệ sinh bằng cách phù hợp với vật liệu của đôi giày, lau sạch bụi sau khi sử dụng và để khô tự nhiên. Chỉ giặt máy hoặc dùng chất tẩy khi hướng dẫn của sản phẩm cho phép.</p>
        <p class="notice">Đây là gợi ý chung cho nội dung cửa hàng mẫu. Ảnh và thông tin catalog chỉ minh họa; khi chăm sóc sản phẩm thật, luôn kiểm tra nhãn và hướng dẫn của nhà sản xuất.</p>
        <a class="btn btn-primary" href="products.html">THÊM NIỀM VUI VÀO TỦ ĐỒ</a>`
    }
  };

  function init() {
    if (document.body.dataset.page !== 'info') return;
    const requested = new URLSearchParams(location.search).get('section');
    const id = Object.prototype.hasOwnProperty.call(sections, requested) ? requested : 'about';
    const section = sections[id];
    document.title = section.label + ' | Thỏ Nhỏ Kids';
    document.getElementById('info-breadcrumb').textContent = section.label;
    document.getElementById('info-sidebar').innerHTML = Object.entries(sections).map(([key, value]) => `<a href="info.html?section=${key}"${key === id ? ' class="active" aria-current="page"' : ''}>${value.label}</a>`).join('');
    document.getElementById('info-content').innerHTML = `<p class="eyebrow">${section.eyebrow}</p>${section.content}`;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
}());
