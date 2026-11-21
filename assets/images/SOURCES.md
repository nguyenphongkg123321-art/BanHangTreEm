# Nguồn ảnh minh họa — Thỏ Nhỏ Kids

Ảnh được tải về thư mục này để bản frontend chạy cục bộ, không cần gọi CDN khi mở trang. Tên sản phẩm tiếng Việt, giá, số lượng, mô tả, bộ sưu tập và mã sản phẩm trong `js/data.js` là dữ liệu minh họa do dự án tạo; không phải catalog bán hàng của các bên cung cấp ảnh.

## Ảnh stock cho banner và bộ sưu tập

Các ảnh lifestyle sau được cung cấp trên Pexels, theo [Pexels License](https://www.pexels.com/license/). Nguồn ảnh và nhiếp ảnh gia:

| File cục bộ | Nguồn | Tác giả |
| --- | --- | --- |
| `hero-1.jpg` | [Group of Fashionable Kids](https://www.pexels.com/photo/group-of-fashionable-kids-6261877/) | Antoni Shkraba |
| `hero-2.jpg`, `collection-4.jpg` | [Boy and Girl Playing on Grass Field](https://www.pexels.com/photo/boy-and-girl-playing-on-grass-field-8922539/) | Mikhail Nilov |
| `hero-3.jpg` | [Boy Wearing a Brown Bucket Hat](https://www.pexels.com/photo/boy-wearing-a-brown-bucket-hat-6261880/) | Antoni Shkraba |
| `girl-banner.jpg`, `collection-3.jpg` | [Girl Wearing Dress](https://www.pexels.com/photo/girl-wearing-dress-7673812/) | Anastasia Shuraeva |
| `boy-banner.jpg` | [Boy in White Shirt and Faded Blue Jeans Sitting on Ground](https://www.pexels.com/photo/boy-in-white-shirt-and-faded-blue-jeans-sitting-on-ground-1280725/) | Austin J. Best |
| `collection-1.jpg` | [Fashionable Kids Dancing](https://www.pexels.com/photo/fashionable-kids-dancing-6261902/) | Antoni Shkraba |
| `collection-2.jpg` | [Boy in a Jacket Sitting on the Floor](https://www.pexels.com/photo/boy-in-a-jacket-sitting-on-the-floor-6261901/) | Antoni Shkraba |

Ảnh của trẻ em chỉ minh họa bối cảnh thời trang; không thể hiện người trong ảnh xác nhận hay quảng cáo cho thương hiệu Thỏ Nhỏ Kids.

## Ảnh sản phẩm của bên thứ ba

191 ảnh catalog (`tn001-*` đến `tn064-*`) là ảnh minh họa từ các trang sản phẩm công khai của:

- [Jamie Kay](https://jamiekay.com/): đầm váy, chân váy, áo và cardigan.
- [Little Bipsy](https://littlebipsy.com/): áo, quần, áo khoác, đồ liền thân và đồ lót.
- [Lola + The Boys](https://www.lolaandtheboys.com/): đồ bộ họa tiết.
- [Little Love Bug](https://www.littlelovebugcompany.com/): giày và sandal trẻ em.

Quyền đối với các ảnh catalog thuộc chủ sở hữu tương ứng. Việc ảnh có URL công khai không đồng nghĩa với giấy phép tái sử dụng thương mại. Các ảnh này phục vụ bản minh họa frontend cục bộ; dự án không tuyên bố sở hữu, được cấp phép thương mại hoặc được các thương hiệu trên bảo trợ. Trước khi xuất bản hay sử dụng kinh doanh, cần thay bằng ảnh tự chụp/được cấp phép, hoặc có sự cho phép của chủ sở hữu.

File [catalog-sources.json](catalog-sources.json) đối chiếu từng mã sản phẩm với tên ảnh gốc, trang sản phẩm nguồn và URL của từng ảnh. Không dùng ảnh, logo hoặc mô tả độc quyền của Rabity. Một vài ảnh có thể chứa nhãn hàng nhỏ trên trang phục gốc.

## Thay ảnh

Thay ảnh cục bộ và cập nhật `image`/`images` trong `js/data.js`; mỗi sản phẩm có một ảnh chính cùng tối đa hai góc nhìn khác nhau. Giữ tỷ lệ dọc khoảng 4:5 cho ảnh sản phẩm và đặt đối tượng ở giữa khung hình. Cập nhật lại nguồn và quyền sử dụng tương ứng trong file này.
