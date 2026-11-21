# Thỏ Nhỏ Kids

Website thời trang trẻ em nhiều trang, viết bằng HTML5, CSS3 và JavaScript thuần. Giao diện tham khảo cấu trúc mua sắm của [Rabity.vn](https://rabity.vn/) và dùng thương hiệu, tên sản phẩm, nội dung riêng cho Thỏ Nhỏ Kids. Không cần cài Node.js, PHP, SQL hay chạy lệnh build để sử dụng.

Đây là **bản frontend mô phỏng**. Giỏ hàng, hồ sơ, yêu thích và đơn mẫu lưu trong trình duyệt; không có thanh toán, gửi email, vận chuyển hoặc xác thực tài khoản thật.

## Chạy trong VS Code

1. Chọn **File → Open Folder**, mở `D:\BanHangTreEm` hoặc thư mục chứa `index.html`.
2. Cài tiện ích [Live Server của Ritwick Dey](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) nếu chưa có.
3. Nhấn phải `index.html` trong Explorer, chọn **Open with Live Server**, hoặc bấm **Go Live** ở thanh trạng thái.
4. Mở địa chỉ Live Server cung cấp, thường là `http://127.0.0.1:5500/index.html`. Nếu cổng khác, dùng đúng cổng hiển thị.
5. Lưu file để trình duyệt tải lại thay đổi. Bật JavaScript và cho phép LocalStorage.

Các file có đường dẫn tương đối nên có thể đặt dự án trong thư mục con. Giữ nguyên quan hệ giữa các file HTML với `css/`, `js/` và `assets/`.

## Mở bằng Adobe Dreamweaver

1. Chọn **Site → New Site**; nhập tên `Tho Nho Kids` và đặt **Local Site Folder** là thư mục dự án, rồi lưu. Không cần cấu hình PHP, máy chủ dữ liệu hay remote server. Xem [hướng dẫn tạo site cục bộ của Adobe](https://helpx.adobe.com/dreamweaver/desktop/set-up-sites/set-local-version-site.html).
2. Mở `index.html` trong bảng Files. Chỉnh HTML/CSS/JavaScript ở Code hoặc Split và lưu bằng UTF-8.
3. Dùng **Open in Browser** hoặc **Real-time Preview** để xem bằng Chrome/Edge/Firefox. Trên Windows, F12 mở trình duyệt chính đã cấu hình; tên menu có thể khác theo phiên bản. Xem [hướng dẫn preview của Adobe](https://helpx.adobe.com/dreamweaver/desktop/test-preview-and-publish-websites/previewing-pages.html).
4. Header, footer và sản phẩm được JavaScript tạo khi trang chạy. Design View tĩnh có thể chưa hiển thị đầy đủ; dùng trình duyệt thật để kiểm tra tương tác.
5. Để thử luồng giỏ hàng qua nhiều trang ổn định, có thể chỉnh file bằng Dreamweaver đồng thời mở dự án bằng Live Server từ VS Code. Luôn dùng cùng một địa chỉ HTTP/cổng khi kiểm tra dữ liệu đã lưu.

Mở trực tiếp file HTML có thể hiển thị giao diện, nhưng hành vi LocalStorage với `file://` phụ thuộc trình duyệt. Nên dùng preview HTTP để kiểm thử toàn bộ luồng mua sắm.

## Cấu trúc dự án

```text
BanHangTreEm/
├── index.html                 Trang chủ
├── products.html              Danh mục, tìm kiếm, bộ sưu tập, yêu thích
├── product-detail.html        Chi tiết sản phẩm
├── cart.html                  Giỏ hàng riêng
├── checkout.html              Thanh toán mô phỏng
├── order-success.html         Kết quả lưu đơn mẫu
├── login.html                 Đăng nhập mẫu
├── register.html              Đăng ký hồ sơ mẫu
├── forgot-password.html       Trợ giúp đăng nhập mẫu
├── account.html               Hồ sơ và đơn hàng
├── info.html                  Giới thiệu và hướng dẫn mua sắm
├── css/
│   ├── style.css              Giao diện chung, trang chủ, giỏ hàng
│   ├── responsive.css         Bố cục màn hình nhỏ
│   ├── catalog.css            Danh mục và chi tiết
│   └── commerce.css           Thanh toán và tài khoản
├── js/
│   ├── data.js                64 sản phẩm, 8 danh mục, 4 bộ sưu tập
│   ├── main.js                Header/footer, tìm kiếm, trang chủ, tiện ích
│   ├── products.js            Bộ lọc, sắp xếp, gallery, lựa chọn sản phẩm
│   ├── cart.js                Giỏ hàng drawer/trang riêng, mã giảm giá
│   ├── checkout.js            Kiểm tra biểu mẫu và lưu đơn
│   ├── auth.js                Hồ sơ và phiên đăng nhập mẫu
│   └── info.js                Nội dung trang thông tin
├── assets/
│   ├── favicon.svg
│   ├── LUCIDE-LICENSE.txt     Giấy phép icon Lucide
│   ├── fonts/                Font Lora thường/nghiêng và giấy phép OFL
│   └── images/               Ảnh cục bộ và tài liệu nguồn ảnh
└── tests/
    └── browser-smoke.cjs     Kiểm thử Chrome tùy chọn cho lập trình viên
```

## Các luồng có thể sử dụng

- **Trang chủ:** 3 banner tự chuyển có nút điều khiển/tạm dừng, danh mục ảnh, Orange Friday, Flash Sale đếm ngược, tab bé gái/bé trai, bộ sưu tập và slider sản phẩm.
- **Điều hướng:** header cố định, Mega Menu, menu di động, breadcrumb, footer dùng chung, nút về đầu trang.
- **Tìm kiếm:** gợi ý có ảnh/giá, tìm tên có hoặc không dấu, Enter mở kết quả, có trạng thái không tìm thấy.
- **Catalog:** lọc loại, giá, size, màu; sắp xếp mới nhất/giá tăng/giá giảm; xem thêm, danh sách yêu thích và bộ sưu tập.
- **Chi tiết:** gallery nhiều ảnh, chọn màu/size/số lượng, hướng dẫn size, mô tả, sản phẩm liên quan, thêm giỏ hoặc mua ngay. Chưa chọn size thì không thêm được.
- **Giỏ hàng:** drawer trượt bên phải và trang riêng; sửa số lượng, xóa món/xóa giỏ, tính tổng và mã ưu đãi, giữ dữ liệu khi tải lại.
- **Thanh toán:** kiểm tra trường bắt buộc và định dạng dữ liệu, COD/chuyển khoản mẫu, mã đơn tự sinh, trang kết quả. Đơn chuyển khoản ở trạng thái chờ thanh toán, COD chưa thanh toán.
- **Tài khoản:** đăng ký một hồ sơ mẫu trên thiết bị, đăng nhập/đăng xuất, sửa hồ sơ, xem danh sách và chi tiết đơn của hồ sơ. Quên mật khẩu giải thích cách vào lại bản mẫu, không gửi email/OTP.
- **Trang thông tin:** câu chuyện thương hiệu, size, vận chuyển/thanh toán, nội dung đổi trả mẫu, lưu trữ dữ liệu, liên hệ và chăm sóc trang phục.

## Đường dẫn minh họa

Các nhóm dùng chung trang `products.html` với tham số riêng, nên có thể liên kết trực tiếp và tải lại:

| Mục | URL tương đối |
| --- | --- |
| Bé gái / bé trai | `products.html?gender=girl` / `products.html?gender=boy` |
| Đầm váy bé gái | `products.html?gender=girl&category=dress` |
| Giày dép | `products.html?category=shoes` |
| Sale / hàng mới | `products.html?sale=1` / `products.html?new=1` |
| Bộ sưu tập | `products.html?collection=little-joy` |
| Yêu thích | `products.html?wishlist=1` |
| Tìm kiếm | `products.html?q=ao%20thun` |
| Giá tăng dần | `products.html?sort=price-asc` |
| Lọc size | `products.html?size=110` |
| Chi tiết | `product-detail.html?id=tn001` |
| Hướng dẫn size | `info.html?section=size` |

Mã danh mục: `dress`, `top`, `set`, `underwear`, `pants`, `skirt`, `shoes`, `jacket`. Bộ sưu tập: `little-joy`, `autumn-tales`, `mini-explorers`, `little-sunshine`. Trang thông tin nhận `section=about/size/shipping/returns/privacy/contact/care`; giá trị không hợp lệ trở về giới thiệu. Chi tiết sản phẩm/đơn không hợp lệ có thông báo phù hợp.

## Phí vận chuyển và ưu đãi mẫu

Phí tính trên tổng tiền sản phẩm trước giảm giá: **miễn phí từ 499.000đ**, các đơn còn lại có sản phẩm tính **30.000đ**. Giỏ trống không có phí.

| Mã | Điều kiện | Hiệu lực mẫu |
| --- | --- | --- |
| `THONHO10` | Tổng sản phẩm từ 299.000đ | Giảm 10%, tối đa 100.000đ |
| `FREESHIP` | Tổng sản phẩm từ 199.000đ | Phí giao hàng bằng 0 |

Mỗi giỏ dùng một mã. Đổi số lượng sẽ tính lại điều kiện. Tổng thanh toán = tạm tính − giảm giá + phí vận chuyển. Tồn kho và số đã bán là dữ liệu giả lập, không liên hệ hệ thống kho thật.

## Dùng tài khoản và đơn mẫu

Đăng ký bằng một tên/email giả, ví dụ `ba.me@example.com`, và mật khẩu mẫu bất kỳ từ 6 ký tự. Sau khi đăng xuất, đăng nhập lại bằng đúng email hồ sơ đã tạo cùng **bất kỳ mật khẩu mẫu nào từ 6 ký tự**. Mật khẩu không được lưu, so khớp hoặc xác thực thật; đây không phải cơ chế đăng nhập dùng cho sản phẩm thương mại. Chỉ có một hồ sơ mẫu trên mỗi vùng lưu trữ trình duyệt.

Đơn hàng và thông tin biểu mẫu mẫu lưu bằng LocalStorage, không gửi lên máy chủ. Chỉ dùng tên, email, số điện thoại và địa chỉ giả khi thử checkout. Không nhập mật khẩu thật, thông tin thẻ hoặc thông tin ngân hàng. Không chuyển tiền: không có cổng thanh toán hay tài khoản nhận tiền thật. Newsletter chỉ lưu email mẫu trên thiết bị, không đăng ký một dịch vụ gửi thư.

Đổi trình duyệt, chuyển từ `localhost` sang `127.0.0.1`, đổi cổng hoặc xóa dữ liệu website sẽ tạo vùng lưu trữ khác/mất dữ liệu mẫu. LocalStorage có thể bị người dùng thiết bị xem hoặc chỉnh sửa; không cung cấp cách ly tài khoản hay bảo mật máy chủ.

## Đặt lại dữ liệu demo

Mở DevTools của đúng trang website → Application/Storage → Local Storage, rồi xóa **chỉ các khóa bắt đầu bằng `tnk.`** và tải lại. Hoặc chạy đoạn sau trong Console của chính trang demo:

```js
Object.keys(localStorage)
  .filter(key => key.startsWith('tnk.'))
  .forEach(key => localStorage.removeItem(key));
location.reload();
```

Thao tác này xóa giỏ, hồ sơ, phiên mẫu, đơn, yêu thích và đăng ký nhận tin của dự án ở địa chỉ hiện tại. Không dùng `localStorage.clear()` nếu địa chỉ đó còn lưu dữ liệu của ứng dụng khác.

## Chỉnh sửa nội dung và ảnh

Chỉnh sản phẩm trong `js/data.js`; mỗi sản phẩm gồm ID, tên, nhóm, giới tính, giá, giá gốc, size, màu, ảnh chính/gallery, mô tả, tồn kho, trạng thái mới/sale và bộ sưu tập. Giá dùng số nguyên VND. Thêm ảnh vào `assets/images/`, cập nhật đường dẫn tương đối và giữ ID duy nhất để không ảnh hưởng giỏ đã lưu.

Ảnh banner/lifestyle đến từ Pexels; ảnh catalog của bên thứ ba chỉ dùng minh họa cục bộ. **Cần thay bằng ảnh sở hữu/được cấp phép hoặc xin phép chủ sở hữu trước khi xuất bản, sử dụng kinh doanh.** Nguồn và giới hạn sử dụng được ghi ở [SOURCES.md](assets/images/SOURCES.md); [catalog-sources.json](assets/images/catalog-sources.json) đối chiếu từng ảnh sản phẩm. Dự án không tuyên bố được các thương hiệu trong ảnh bảo trợ.

Font Lora được lưu cục bộ, hỗ trợ đầy đủ tiếng Việt; giấy phép nằm tại [LORA-OFL.txt](assets/fonts/LORA-OFL.txt). Các SVG icon được trích từ Lucide 0.468.0 với [giấy phép đi kèm](assets/LUCIDE-LICENSE.txt). Website không cần truy cập CDN để tải font, icon, ảnh hay JavaScript khi chạy.

## Kiểm tra nhanh sau khi chỉnh sửa

1. Mở trang chủ, thử menu desktop/mobile, banner, các tab và tìm kiếm.
2. Lọc catalog; thử một truy vấn không có kết quả; mở sản phẩm rồi kiểm tra gallery/size.
3. Thêm sản phẩm, sửa số lượng, tải lại; thử cả hai mã ở dưới/trên ngưỡng.
4. Điền dữ liệu giả vào checkout, thử gửi khi thiếu trường rồi tạo một đơn hợp lệ.
5. Đăng ký hồ sơ mẫu, xem đơn bằng đúng email, đăng xuất và đăng nhập lại.
6. Dùng chế độ Responsive của trình duyệt ở điện thoại/tablet/desktop; kiểm tra Console và ảnh không tải được.

Nếu header hoặc catalog trống, kiểm tra JavaScript, đường dẫn `js/` và lỗi Console. Nếu không giữ được giỏ, kiểm tra quyền LocalStorage và đang dùng cùng host/cổng. Nếu chữ tiếng Việt sai, lưu file bằng UTF-8. Nếu ảnh không hiện, giữ nguyên thư mục `assets/images/` và kiểm tra đúng chữ hoa/thường trong đường dẫn.

## Kiểm thử tự động tùy chọn

Website chạy bằng Live Server hoặc preview HTTP mà không cần Node.js. Riêng lập trình viên muốn chạy lại bài kiểm thử có thể dùng **Node.js 22 trở lên** và Chrome đã cài:

```powershell
node tests/browser-smoke.cjs
```

Không cần `npm install`. Script dùng Chrome headless trong một hồ sơ thử nghiệm riêng, kiểm tra dữ liệu/đường dẫn ảnh, banner, tìm kiếm, bắt buộc chọn size, giỏ hàng, mã giảm giá, menu mobile, liên kết và kích thước 360/390/768/1024/1440px. Nó tự đóng trình duyệt thử và HTTP server khi xong; ảnh chụp được lưu trong thư mục tạm `tnk-storefront-qa` của Windows. Nếu Chrome ở vị trí khác, đặt biến `CHROME_PATH` thành đường dẫn tới trình duyệt Chromium. Hai cổng 8885 và 9235 cần đang trống.
