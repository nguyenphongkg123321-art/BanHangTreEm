/* Thỏ Nhỏ Kids — dữ liệu minh họa tĩnh. Giá, tồn kho, tên và mô tả do dự án tạo. Nguồn ảnh: assets/images/SOURCES.md. */
window.CATEGORIES = [
  {
    "id": "dress",
    "name": "Đầm váy",
    "image": "assets/images/tn001-1.png"
  },
  {
    "id": "top",
    "name": "Áo",
    "image": "assets/images/tn002-1.jpg"
  },
  {
    "id": "set",
    "name": "Đồ bộ",
    "image": "assets/images/tn003-1.jpg"
  },
  {
    "id": "underwear",
    "name": "Đồ lót",
    "image": "assets/images/tn013-1.jpg"
  },
  {
    "id": "pants",
    "name": "Quần",
    "image": "assets/images/tn006-1.jpg"
  },
  {
    "id": "skirt",
    "name": "Chân váy",
    "image": "assets/images/tn012-1.png"
  },
  {
    "id": "shoes",
    "name": "Giày dép",
    "image": "assets/images/tn008-1.png"
  },
  {
    "id": "jacket",
    "name": "Áo khoác",
    "image": "assets/images/tn004-1.jpg"
  }
];

window.COLLECTIONS = [
  {
    "id": "little-joy",
    "name": "Little Joy",
    "subtitle": "Niềm vui nhỏ, tuổi thơ lớn",
    "image": "assets/images/collection-1.jpg"
  },
  {
    "id": "autumn-tales",
    "name": "Autumn Tales",
    "subtitle": "Mùa thu trong từng câu chuyện",
    "image": "assets/images/collection-2.jpg"
  },
  {
    "id": "mini-explorers",
    "name": "Mini Explorers",
    "subtitle": "Cùng bé khám phá thế giới",
    "image": "assets/images/collection-4.jpg"
  },
  {
    "id": "little-sunshine",
    "name": "Little Sunshine",
    "subtitle": "Mang nắng đến mỗi ngày",
    "image": "assets/images/collection-3.jpg"
  }
];

window.PRODUCTS = [
  {
    "id": "tn001",
    "name": "Đầm hoa nhí tay bèo Little Bloom",
    "gender": "girl",
    "category": "dress",
    "price": 249000,
    "originalPrice": 399000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Hồng",
        "hex": "#eab5b4"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn001-1.png",
    "images": [
      "assets/images/tn001-1.png",
      "assets/images/tn001-2.jpg",
      "assets/images/tn001-3.jpg"
    ],
    "description": "Dáng váy xinh xắn, đường may gọn gàng và lớp vải mềm nhẹ, cho bé tự do xoay tròn, vui chơi và khám phá. Dễ phối cùng sandal hoặc giày búp bê trong những ngày đi học, dạo phố và gặp gỡ gia đình.",
    "stock": 16,
    "isNew": true,
    "sale": true,
    "sold": 19,
    "createdAt": "2026-11-20T00:00:00.000Z",
    "collection": "little-joy",
    "material": "Vải mềm nhẹ, lớp lót cotton",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn002",
    "name": "Áo thun xanh cotton Everyday",
    "gender": "boy",
    "category": "top",
    "price": 129000,
    "originalPrice": 229000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Xanh dương",
        "hex": "#9dbacb"
      },
      {
        "name": "Be",
        "hex": "#ddcbb0"
      }
    ],
    "image": "assets/images/tn002-1.jpg",
    "images": [
      "assets/images/tn002-1.jpg",
      "assets/images/tn002-2.jpg",
      "assets/images/tn002-3.jpg"
    ],
    "description": "Thiết kế dễ mặc với phom thoải mái, chất vải mềm và đường may êm ái. Một lựa chọn đơn giản cho những ngày đi học, đi chơi và mọi hoạt động thường ngày của bé.",
    "stock": 23,
    "isNew": false,
    "sale": true,
    "sold": 32,
    "createdAt": "2026-11-19T00:00:00.000Z",
    "collection": "autumn-tales",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn003",
    "name": "Bộ đồ họa tiết khu vườn vui nhộn",
    "gender": "unisex",
    "category": "set",
    "price": 299000,
    "originalPrice": 419000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Trắng",
        "hex": "#f5f4ec"
      },
      {
        "name": "Hồng",
        "hex": "#e3b4c3"
      }
    ],
    "image": "assets/images/tn003-1.jpg",
    "images": [
      "assets/images/tn003-1.jpg",
      "assets/images/tn003-2.jpg",
      "assets/images/tn003-3.jpg"
    ],
    "description": "Bộ trang phục đồng điệu dành cho những giờ vui chơi thoải mái. Chất vải nhẹ, phom rộng vừa phải và chi tiết dễ thương giúp bé luôn tự tin vận động.",
    "stock": 30,
    "isNew": true,
    "sale": true,
    "sold": 45,
    "createdAt": "2026-11-18T00:00:00.000Z",
    "collection": "mini-explorers",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn004",
    "name": "Áo khoác denim có mũ Mini Explorer",
    "gender": "boy",
    "category": "jacket",
    "price": 329000,
    "originalPrice": 409000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Xanh dương",
        "hex": "#8299b3"
      },
      {
        "name": "Be",
        "hex": "#ddcbb0"
      },
      {
        "name": "Đen",
        "hex": "#353638"
      }
    ],
    "image": "assets/images/tn004-1.jpg",
    "images": [
      "assets/images/tn004-1.jpg",
      "assets/images/tn004-2.jpg",
      "assets/images/tn004-3.jpg"
    ],
    "description": "Lớp khoác ngoài nhẹ nhàng, phom thoải mái và chi tiết dễ phối. Giữ ấm vừa đủ trong những ngày chuyển mùa, cùng bé vui chơi và khám phá ngoài trời.",
    "stock": 37,
    "isNew": true,
    "sale": true,
    "sold": 58,
    "createdAt": "2026-11-17T00:00:00.000Z",
    "collection": "little-sunshine",
    "material": "Vải dệt mềm, lớp lót thoáng",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn005",
    "name": "Đầm hai dây hoa pastel Summer Days",
    "gender": "girl",
    "category": "dress",
    "price": 229000,
    "originalPrice": 379000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Hồng",
        "hex": "#dfb5b8"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn005-1.png",
    "images": [
      "assets/images/tn005-1.png",
      "assets/images/tn005-2.jpg",
      "assets/images/tn005-3.jpg"
    ],
    "description": "Dáng váy xinh xắn, đường may gọn gàng và lớp vải mềm nhẹ, cho bé tự do xoay tròn, vui chơi và khám phá. Dễ phối cùng sandal hoặc giày búp bê trong những ngày đi học, dạo phố và gặp gỡ gia đình.",
    "stock": 44,
    "isNew": false,
    "sale": true,
    "sold": 71,
    "createdAt": "2026-11-16T00:00:00.000Z",
    "collection": "little-joy",
    "material": "Vải mềm nhẹ, lớp lót cotton",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn006",
    "name": "Quần jogger hồng kẹo ngọt",
    "gender": "girl",
    "category": "pants",
    "price": 159000,
    "originalPrice": 259000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Hồng",
        "hex": "#e7b6b5"
      },
      {
        "name": "Be",
        "hex": "#ddcbb0"
      }
    ],
    "image": "assets/images/tn006-1.jpg",
    "images": [
      "assets/images/tn006-1.jpg",
      "assets/images/tn006-2.jpg",
      "assets/images/tn006-3.jpg"
    ],
    "description": "Phom quần thoải mái, cạp co giãn dễ mặc và đường may chắc chắn. Dễ phối cùng áo thun, sơ mi hoặc áo khoác để bé tự do vận động suốt ngày dài.",
    "stock": 51,
    "isNew": true,
    "sale": true,
    "sold": 84,
    "createdAt": "2026-11-15T00:00:00.000Z",
    "collection": "autumn-tales",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn007",
    "name": "Áo thun trắng dáng rộng cho bé",
    "gender": "unisex",
    "category": "top",
    "price": 99000,
    "originalPrice": 219000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Trắng",
        "hex": "#faf9f4"
      },
      {
        "name": "Hồng",
        "hex": "#e3b4c3"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn007-1.jpg",
    "images": [
      "assets/images/tn007-1.jpg",
      "assets/images/tn007-2.jpg",
      "assets/images/tn007-3.jpg"
    ],
    "description": "Thiết kế dễ mặc với phom thoải mái, chất vải mềm và đường may êm ái. Một lựa chọn đơn giản cho những ngày đi học, đi chơi và mọi hoạt động thường ngày của bé.",
    "stock": 58,
    "isNew": true,
    "sale": true,
    "sold": 97,
    "createdAt": "2026-11-14T00:00:00.000Z",
    "collection": "mini-explorers",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn008",
    "name": "Sandal da quai ngang bước chân xinh",
    "gender": "girl",
    "category": "shoes",
    "price": 269000,
    "originalPrice": 349000,
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32"
    ],
    "colors": [
      {
        "name": "Be",
        "hex": "#c2a184"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn008-1.png",
    "images": [
      "assets/images/tn008-1.png",
      "assets/images/tn008-2.png",
      "assets/images/tn008-3.png"
    ],
    "description": "Thiết kế giày dép dành cho những bước chân nhỏ, đế nhẹ và quai cài thuận tiện. Chọn đúng chiều dài bàn chân theo bảng size để bé đi lại thoải mái.",
    "stock": 22,
    "isNew": false,
    "sale": true,
    "sold": 31,
    "createdAt": "2026-11-13T00:00:00.000Z",
    "collection": "little-sunshine",
    "material": "Thân mềm, đế cao su nhẹ",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn009",
    "name": "Đầm voan xanh hoa cỏ Little Fairy",
    "gender": "girl",
    "category": "dress",
    "price": 319000,
    "originalPrice": 469000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Xanh lá",
        "hex": "#a5ad97"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn009-1.jpg",
    "images": [
      "assets/images/tn009-1.jpg",
      "assets/images/tn009-2.jpg",
      "assets/images/tn009-3.jpg"
    ],
    "description": "Dáng váy xinh xắn, đường may gọn gàng và lớp vải mềm nhẹ, cho bé tự do xoay tròn, vui chơi và khám phá. Dễ phối cùng sandal hoặc giày búp bê trong những ngày đi học, dạo phố và gặp gỡ gia đình.",
    "stock": 29,
    "isNew": true,
    "sale": true,
    "sold": 44,
    "createdAt": "2026-11-12T00:00:00.000Z",
    "collection": "little-joy",
    "material": "Vải mềm nhẹ, lớp lót cotton",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn010",
    "name": "Áo polo xanh navy bé trai",
    "gender": "boy",
    "category": "top",
    "price": 169000,
    "originalPrice": 269000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Xanh dương",
        "hex": "#283f58"
      },
      {
        "name": "Be",
        "hex": "#ddcbb0"
      },
      {
        "name": "Đen",
        "hex": "#353638"
      }
    ],
    "image": "assets/images/tn010-1.jpg",
    "images": [
      "assets/images/tn010-1.jpg",
      "assets/images/tn010-2.jpg",
      "assets/images/tn010-3.jpg"
    ],
    "description": "Thiết kế dễ mặc với phom thoải mái, chất vải mềm và đường may êm ái. Một lựa chọn đơn giản cho những ngày đi học, đi chơi và mọi hoạt động thường ngày của bé.",
    "stock": 36,
    "isNew": true,
    "sale": true,
    "sold": 57,
    "createdAt": "2026-11-11T00:00:00.000Z",
    "collection": "autumn-tales",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn011",
    "name": "Bộ thể thao khủng long sắc màu",
    "gender": "boy",
    "category": "set",
    "price": 279000,
    "originalPrice": 399000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Xanh lá",
        "hex": "#b7c44b"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn011-1.jpg",
    "images": [
      "assets/images/tn011-1.jpg",
      "assets/images/tn011-2.jpg"
    ],
    "description": "Bộ trang phục đồng điệu dành cho những giờ vui chơi thoải mái. Chất vải nhẹ, phom rộng vừa phải và chi tiết dễ thương giúp bé luôn tự tin vận động.",
    "stock": 43,
    "isNew": false,
    "sale": true,
    "sold": 70,
    "createdAt": "2026-11-10T00:00:00.000Z",
    "collection": "mini-explorers",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn012",
    "name": "Chân váy xếp tầng màu kem",
    "gender": "girl",
    "category": "skirt",
    "price": 179000,
    "originalPrice": 259000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Be",
        "hex": "#e7ddc9"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn012-1.png",
    "images": [
      "assets/images/tn012-1.png",
      "assets/images/tn012-2.jpg",
      "assets/images/tn012-3.jpg"
    ],
    "description": "Chân váy có phom dễ phối đồ, phần lưng thoải mái và chất vải mềm. Một chút điệu đà cho những ngày đến lớp, dạo phố hoặc tham gia buổi tiệc nhỏ cùng gia đình.",
    "stock": 50,
    "isNew": true,
    "sale": true,
    "sold": 83,
    "createdAt": "2026-11-09T00:00:00.000Z",
    "collection": "little-sunshine",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn013",
    "name": "Set quần lót cotton hoa nhí bé gái",
    "gender": "girl",
    "category": "underwear",
    "price": 199000,
    "originalPrice": 349000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Hồng",
        "hex": "#d9acac"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn013-1.jpg",
    "images": [
      "assets/images/tn013-1.jpg",
      "assets/images/tn013-2.jpg",
      "assets/images/tn013-3.jpg"
    ],
    "description": "Đồ lót thiết kế dành riêng cho trẻ em với phần cạp mềm, đường viền êm và chất vải thoáng. Set nhiều chiếc thuận tiện để thay mới mỗi ngày. Màu sắc thực tế trong set có thể phối ngẫu nhiên.",
    "stock": 57,
    "isNew": true,
    "sale": true,
    "sold": 96,
    "createdAt": "2026-11-08T00:00:00.000Z",
    "collection": "little-joy",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn014",
    "name": "Áo khoác kaki xanh rêu bé trai",
    "gender": "boy",
    "category": "jacket",
    "price": 299000,
    "originalPrice": 399000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Xanh lá",
        "hex": "#89947c"
      },
      {
        "name": "Be",
        "hex": "#ddcbb0"
      }
    ],
    "image": "assets/images/tn014-1.jpg",
    "images": [
      "assets/images/tn014-1.jpg",
      "assets/images/tn014-2.jpg",
      "assets/images/tn014-3.jpg"
    ],
    "description": "Lớp khoác ngoài nhẹ nhàng, phom thoải mái và chi tiết dễ phối. Giữ ấm vừa đủ trong những ngày chuyển mùa, cùng bé vui chơi và khám phá ngoài trời.",
    "stock": 21,
    "isNew": false,
    "sale": true,
    "sold": 30,
    "createdAt": "2026-11-07T00:00:00.000Z",
    "collection": "autumn-tales",
    "material": "Vải dệt mềm, lớp lót thoáng",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn015",
    "name": "Quần jogger xanh biển năng động",
    "gender": "boy",
    "category": "pants",
    "price": 159000,
    "originalPrice": 279000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Xanh dương",
        "hex": "#8fa8be"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn015-1.jpg",
    "images": [
      "assets/images/tn015-1.jpg",
      "assets/images/tn015-2.jpg",
      "assets/images/tn015-3.jpg"
    ],
    "description": "Phom quần thoải mái, cạp co giãn dễ mặc và đường may chắc chắn. Dễ phối cùng áo thun, sơ mi hoặc áo khoác để bé tự do vận động suốt ngày dài.",
    "stock": 28,
    "isNew": true,
    "sale": true,
    "sold": 43,
    "createdAt": "2026-11-06T00:00:00.000Z",
    "collection": "mini-explorers",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn016",
    "name": "Giày thể thao cổ thấp Daily Walk",
    "gender": "unisex",
    "category": "shoes",
    "price": 299000,
    "originalPrice": 379000,
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32"
    ],
    "colors": [
      {
        "name": "Be",
        "hex": "#d9cbb6"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      },
      {
        "name": "Đen",
        "hex": "#353638"
      }
    ],
    "image": "assets/images/tn016-1.png",
    "images": [
      "assets/images/tn016-1.png",
      "assets/images/tn016-2.jpg",
      "assets/images/tn016-3.jpg"
    ],
    "description": "Thiết kế giày dép dành cho những bước chân nhỏ, đế nhẹ và quai cài thuận tiện. Chọn đúng chiều dài bàn chân theo bảng size để bé đi lại thoải mái.",
    "stock": 35,
    "isNew": true,
    "sale": true,
    "sold": 56,
    "createdAt": "2026-11-05T00:00:00.000Z",
    "collection": "little-sunshine",
    "material": "Thân mềm, đế cao su nhẹ",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn017",
    "name": "Đầm cotton họa tiết dâu ngọt",
    "gender": "girl",
    "category": "dress",
    "price": 269000,
    "originalPrice": 419000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Trắng",
        "hex": "#f6f0e1"
      },
      {
        "name": "Hồng",
        "hex": "#e3b4c3"
      }
    ],
    "image": "assets/images/tn017-1.jpg",
    "images": [
      "assets/images/tn017-1.jpg",
      "assets/images/tn017-2.jpg",
      "assets/images/tn017-3.jpg"
    ],
    "description": "Dáng váy xinh xắn, đường may gọn gàng và lớp vải mềm nhẹ, cho bé tự do xoay tròn, vui chơi và khám phá. Dễ phối cùng sandal hoặc giày búp bê trong những ngày đi học, dạo phố và gặp gỡ gia đình.",
    "stock": 42,
    "isNew": false,
    "sale": true,
    "sold": 69,
    "createdAt": "2026-11-04T00:00:00.000Z",
    "collection": "little-joy",
    "material": "Vải mềm nhẹ, lớp lót cotton",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn018",
    "name": "Áo tay bèo hoa nhí bé gái",
    "gender": "girl",
    "category": "top",
    "price": 149000,
    "originalPrice": 249000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Hồng",
        "hex": "#e8c4b8"
      },
      {
        "name": "Be",
        "hex": "#ddcbb0"
      }
    ],
    "image": "assets/images/tn018-1.jpg",
    "images": [
      "assets/images/tn018-1.jpg",
      "assets/images/tn018-2.jpg",
      "assets/images/tn018-3.jpg"
    ],
    "description": "Thiết kế dễ mặc với phom thoải mái, chất vải mềm và đường may êm ái. Một lựa chọn đơn giản cho những ngày đi học, đi chơi và mọi hoạt động thường ngày của bé.",
    "stock": 49,
    "isNew": true,
    "sale": true,
    "sold": 82,
    "createdAt": "2026-11-03T00:00:00.000Z",
    "collection": "autumn-tales",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn019",
    "name": "Bộ dài tay kỳ lân cầu vồng",
    "gender": "girl",
    "category": "set",
    "price": 289000,
    "originalPrice": 409000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Hồng",
        "hex": "#e5bad7"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn019-1.jpg",
    "images": [
      "assets/images/tn019-1.jpg",
      "assets/images/tn019-2.jpg",
      "assets/images/tn019-3.jpg"
    ],
    "description": "Bộ trang phục đồng điệu dành cho những giờ vui chơi thoải mái. Chất vải nhẹ, phom rộng vừa phải và chi tiết dễ thương giúp bé luôn tự tin vận động.",
    "stock": 56,
    "isNew": true,
    "sale": true,
    "sold": 95,
    "createdAt": "2026-11-02T00:00:00.000Z",
    "collection": "mini-explorers",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn020",
    "name": "Chân váy hoa nhí Vanilla Sky",
    "gender": "girl",
    "category": "skirt",
    "price": 179000,
    "originalPrice": 259000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Be",
        "hex": "#e8dcc5"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn020-1.png",
    "images": [
      "assets/images/tn020-1.png",
      "assets/images/tn020-2.jpg",
      "assets/images/tn020-3.jpg"
    ],
    "description": "Chân váy có phom dễ phối đồ, phần lưng thoải mái và chất vải mềm. Một chút điệu đà cho những ngày đến lớp, dạo phố hoặc tham gia buổi tiệc nhỏ cùng gia đình.",
    "stock": 20,
    "isNew": false,
    "sale": true,
    "sold": 29,
    "createdAt": "2026-11-01T00:00:00.000Z",
    "collection": "little-sunshine",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn021",
    "name": "Set quần lót cotton Autumn bé trai",
    "gender": "boy",
    "category": "underwear",
    "price": 199000,
    "originalPrice": 349000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Nâu",
        "hex": "#b4977e"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn021-1.jpg",
    "images": [
      "assets/images/tn021-1.jpg",
      "assets/images/tn021-2.jpg",
      "assets/images/tn021-3.jpg"
    ],
    "description": "Đồ lót thiết kế dành riêng cho trẻ em với phần cạp mềm, đường viền êm và chất vải thoáng. Set nhiều chiếc thuận tiện để thay mới mỗi ngày. Màu sắc thực tế trong set có thể phối ngẫu nhiên.",
    "stock": 27,
    "isNew": true,
    "sale": true,
    "sold": 42,
    "createdAt": "2026-10-31T00:00:00.000Z",
    "collection": "little-joy",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn022",
    "name": "Áo khoác lông mềm màu nâu ấm",
    "gender": "unisex",
    "category": "jacket",
    "price": 349000,
    "originalPrice": 449000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Nâu",
        "hex": "#a3856b"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      },
      {
        "name": "Đen",
        "hex": "#353638"
      }
    ],
    "image": "assets/images/tn022-1.jpg",
    "images": [
      "assets/images/tn022-1.jpg",
      "assets/images/tn022-2.jpg",
      "assets/images/tn022-3.jpg"
    ],
    "description": "Lớp khoác ngoài nhẹ nhàng, phom thoải mái và chi tiết dễ phối. Giữ ấm vừa đủ trong những ngày chuyển mùa, cùng bé vui chơi và khám phá ngoài trời.",
    "stock": 34,
    "isNew": true,
    "sale": true,
    "sold": 55,
    "createdAt": "2026-10-30T00:00:00.000Z",
    "collection": "autumn-tales",
    "material": "Vải dệt mềm, lớp lót thoáng",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn023",
    "name": "Quần dài cotton màu kem mềm mại",
    "gender": "unisex",
    "category": "pants",
    "price": 159000,
    "originalPrice": 279000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Be",
        "hex": "#e9ddc8"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn023-1.jpg",
    "images": [
      "assets/images/tn023-1.jpg",
      "assets/images/tn023-2.jpg",
      "assets/images/tn023-3.jpg"
    ],
    "description": "Phom quần thoải mái, cạp co giãn dễ mặc và đường may chắc chắn. Dễ phối cùng áo thun, sơ mi hoặc áo khoác để bé tự do vận động suốt ngày dài.",
    "stock": 41,
    "isNew": false,
    "sale": true,
    "sold": 68,
    "createdAt": "2026-10-29T00:00:00.000Z",
    "collection": "mini-explorers",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn024",
    "name": "Giày sneaker đế mềm Little Steps",
    "gender": "boy",
    "category": "shoes",
    "price": 299000,
    "originalPrice": 379000,
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32"
    ],
    "colors": [
      {
        "name": "Trắng",
        "hex": "#f5f2e9"
      },
      {
        "name": "Be",
        "hex": "#ddcbb0"
      }
    ],
    "image": "assets/images/tn024-1.png",
    "images": [
      "assets/images/tn024-1.png",
      "assets/images/tn024-2.jpg",
      "assets/images/tn024-3.png"
    ],
    "description": "Thiết kế giày dép dành cho những bước chân nhỏ, đế nhẹ và quai cài thuận tiện. Chọn đúng chiều dài bàn chân theo bảng size để bé đi lại thoải mái.",
    "stock": 48,
    "isNew": true,
    "sale": true,
    "sold": 81,
    "createdAt": "2026-10-28T00:00:00.000Z",
    "collection": "little-sunshine",
    "material": "Thân mềm, đế cao su nhẹ",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn025",
    "name": "Đầm công chúa xanh vườn cổ tích",
    "gender": "girl",
    "category": "dress",
    "price": 329000,
    "originalPrice": 479000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Xanh lá",
        "hex": "#b5b99b"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      },
      {
        "name": "Xanh dương",
        "hex": "#8ca8bf"
      }
    ],
    "image": "assets/images/tn025-1.jpg",
    "images": [
      "assets/images/tn025-1.jpg",
      "assets/images/tn025-2.jpg",
      "assets/images/tn025-3.jpg"
    ],
    "description": "Dáng váy xinh xắn, đường may gọn gàng và lớp vải mềm nhẹ, cho bé tự do xoay tròn, vui chơi và khám phá. Dễ phối cùng sandal hoặc giày búp bê trong những ngày đi học, dạo phố và gặp gỡ gia đình.",
    "stock": 55,
    "isNew": true,
    "sale": true,
    "sold": 94,
    "createdAt": "2026-10-27T00:00:00.000Z",
    "collection": "little-joy",
    "material": "Vải mềm nhẹ, lớp lót cotton",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn026",
    "name": "Áo gân tay dài viền bèo màu hồng",
    "gender": "girl",
    "category": "top",
    "price": 149000,
    "originalPrice": 249000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Hồng",
        "hex": "#deb1ba"
      },
      {
        "name": "Be",
        "hex": "#ddcbb0"
      }
    ],
    "image": "assets/images/tn026-1.jpg",
    "images": [
      "assets/images/tn026-1.jpg",
      "assets/images/tn026-2.jpg",
      "assets/images/tn026-3.jpg"
    ],
    "description": "Thiết kế dễ mặc với phom thoải mái, chất vải mềm và đường may êm ái. Một lựa chọn đơn giản cho những ngày đi học, đi chơi và mọi hoạt động thường ngày của bé.",
    "stock": 19,
    "isNew": false,
    "sale": true,
    "sold": 28,
    "createdAt": "2026-10-26T00:00:00.000Z",
    "collection": "autumn-tales",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn027",
    "name": "Bộ nỉ mềm họa tiết nơ xinh",
    "gender": "girl",
    "category": "set",
    "price": 299000,
    "originalPrice": 419000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Hồng",
        "hex": "#e2b7c1"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn027-1.png",
    "images": [
      "assets/images/tn027-1.png",
      "assets/images/tn027-2.png",
      "assets/images/tn027-3.png"
    ],
    "description": "Bộ trang phục đồng điệu dành cho những giờ vui chơi thoải mái. Chất vải nhẹ, phom rộng vừa phải và chi tiết dễ thương giúp bé luôn tự tin vận động.",
    "stock": 26,
    "isNew": true,
    "sale": true,
    "sold": 41,
    "createdAt": "2026-10-25T00:00:00.000Z",
    "collection": "mini-explorers",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn028",
    "name": "Chân váy denim xanh phối túi",
    "gender": "girl",
    "category": "skirt",
    "price": 199000,
    "originalPrice": 279000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Xanh dương",
        "hex": "#8da7bc"
      },
      {
        "name": "Be",
        "hex": "#ddcbb0"
      },
      {
        "name": "Đen",
        "hex": "#353638"
      }
    ],
    "image": "assets/images/tn028-1.png",
    "images": [
      "assets/images/tn028-1.png",
      "assets/images/tn028-2.jpg",
      "assets/images/tn028-3.jpg"
    ],
    "description": "Chân váy có phom dễ phối đồ, phần lưng thoải mái và chất vải mềm. Một chút điệu đà cho những ngày đến lớp, dạo phố hoặc tham gia buổi tiệc nhỏ cùng gia đình.",
    "stock": 33,
    "isNew": true,
    "sale": true,
    "sold": 54,
    "createdAt": "2026-10-24T00:00:00.000Z",
    "collection": "little-sunshine",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn029",
    "name": "Set ba quần lót cotton gân bé trai",
    "gender": "boy",
    "category": "underwear",
    "price": 129000,
    "originalPrice": 279000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Be",
        "hex": "#d6c8b1"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn029-1.jpg",
    "images": [
      "assets/images/tn029-1.jpg",
      "assets/images/tn029-2.jpg",
      "assets/images/tn029-3.jpg"
    ],
    "description": "Đồ lót thiết kế dành riêng cho trẻ em với phần cạp mềm, đường viền êm và chất vải thoáng. Set nhiều chiếc thuận tiện để thay mới mỗi ngày. Màu sắc thực tế trong set có thể phối ngẫu nhiên.",
    "stock": 40,
    "isNew": false,
    "sale": true,
    "sold": 67,
    "createdAt": "2026-10-23T00:00:00.000Z",
    "collection": "little-joy",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn030",
    "name": "Áo khoác jeans cổ bẻ Little Denim",
    "gender": "unisex",
    "category": "jacket",
    "price": 299000,
    "originalPrice": 399000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Xanh dương",
        "hex": "#859eb6"
      },
      {
        "name": "Be",
        "hex": "#ddcbb0"
      }
    ],
    "image": "assets/images/tn030-1.jpg",
    "images": [
      "assets/images/tn030-1.jpg",
      "assets/images/tn030-2.jpg",
      "assets/images/tn030-3.jpg"
    ],
    "description": "Lớp khoác ngoài nhẹ nhàng, phom thoải mái và chi tiết dễ phối. Giữ ấm vừa đủ trong những ngày chuyển mùa, cùng bé vui chơi và khám phá ngoài trời.",
    "stock": 47,
    "isNew": true,
    "sale": true,
    "sold": 80,
    "createdAt": "2026-10-22T00:00:00.000Z",
    "collection": "autumn-tales",
    "material": "Vải dệt mềm, lớp lót thoáng",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn031",
    "name": "Quần jogger túi hộp màu nâu nhạt",
    "gender": "boy",
    "category": "pants",
    "price": 169000,
    "originalPrice": 289000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Nâu",
        "hex": "#b99878"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      },
      {
        "name": "Xanh dương",
        "hex": "#8ca8bf"
      }
    ],
    "image": "assets/images/tn031-1.jpg",
    "images": [
      "assets/images/tn031-1.jpg",
      "assets/images/tn031-2.jpg",
      "assets/images/tn031-3.jpg"
    ],
    "description": "Phom quần thoải mái, cạp co giãn dễ mặc và đường may chắc chắn. Dễ phối cùng áo thun, sơ mi hoặc áo khoác để bé tự do vận động suốt ngày dài.",
    "stock": 54,
    "isNew": true,
    "sale": true,
    "sold": 93,
    "createdAt": "2026-10-21T00:00:00.000Z",
    "collection": "mini-explorers",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn032",
    "name": "Sandal bít mũi thoáng nhẹ cho bé",
    "gender": "unisex",
    "category": "shoes",
    "price": 249000,
    "originalPrice": 329000,
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32"
    ],
    "colors": [
      {
        "name": "Nâu",
        "hex": "#ba9275"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn032-1.png",
    "images": [
      "assets/images/tn032-1.png",
      "assets/images/tn032-2.jpg",
      "assets/images/tn032-3.png"
    ],
    "description": "Thiết kế giày dép dành cho những bước chân nhỏ, đế nhẹ và quai cài thuận tiện. Chọn đúng chiều dài bàn chân theo bảng size để bé đi lại thoải mái.",
    "stock": 18,
    "isNew": false,
    "sale": true,
    "sold": 27,
    "createdAt": "2026-10-20T00:00:00.000Z",
    "collection": "little-sunshine",
    "material": "Thân mềm, đế cao su nhẹ",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn033",
    "name": "Đầm xô cotton hồng Cotton Candy",
    "gender": "girl",
    "category": "dress",
    "price": 239000,
    "originalPrice": 389000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Hồng",
        "hex": "#e6b2bd"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn033-1.jpg",
    "images": [
      "assets/images/tn033-1.jpg",
      "assets/images/tn033-2.jpg",
      "assets/images/tn033-3.jpg"
    ],
    "description": "Dáng váy xinh xắn, đường may gọn gàng và lớp vải mềm nhẹ, cho bé tự do xoay tròn, vui chơi và khám phá. Dễ phối cùng sandal hoặc giày búp bê trong những ngày đi học, dạo phố và gặp gỡ gia đình.",
    "stock": 25,
    "isNew": true,
    "sale": true,
    "sold": 40,
    "createdAt": "2026-10-19T00:00:00.000Z",
    "collection": "little-joy",
    "material": "Vải mềm nhẹ, lớp lót cotton",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn034",
    "name": "Áo sơ mi caro kem dạo phố",
    "gender": "boy",
    "category": "top",
    "price": 179000,
    "originalPrice": 279000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Be",
        "hex": "#e5d9c5"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      },
      {
        "name": "Đen",
        "hex": "#353638"
      }
    ],
    "image": "assets/images/tn034-1.jpg",
    "images": [
      "assets/images/tn034-1.jpg",
      "assets/images/tn034-2.jpg",
      "assets/images/tn034-3.jpg"
    ],
    "description": "Thiết kế dễ mặc với phom thoải mái, chất vải mềm và đường may êm ái. Một lựa chọn đơn giản cho những ngày đi học, đi chơi và mọi hoạt động thường ngày của bé.",
    "stock": 32,
    "isNew": true,
    "sale": true,
    "sold": 53,
    "createdAt": "2026-10-18T00:00:00.000Z",
    "collection": "autumn-tales",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn035",
    "name": "Bộ cầu vồng lấp lánh Dreamy Day",
    "gender": "girl",
    "category": "set",
    "price": 299000,
    "originalPrice": 419000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Hồng",
        "hex": "#c6b7d8"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn035-1.png",
    "images": [
      "assets/images/tn035-1.png",
      "assets/images/tn035-2.png",
      "assets/images/tn035-3.png"
    ],
    "description": "Bộ trang phục đồng điệu dành cho những giờ vui chơi thoải mái. Chất vải nhẹ, phom rộng vừa phải và chi tiết dễ thương giúp bé luôn tự tin vận động.",
    "stock": 39,
    "isNew": false,
    "sale": true,
    "sold": 66,
    "createdAt": "2026-10-17T00:00:00.000Z",
    "collection": "mini-explorers",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn036",
    "name": "Chân váy jeans họa tiết nơ nhỏ",
    "gender": "girl",
    "category": "skirt",
    "price": 209000,
    "originalPrice": 289000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Xanh dương",
        "hex": "#8b9eb5"
      },
      {
        "name": "Be",
        "hex": "#ddcbb0"
      }
    ],
    "image": "assets/images/tn036-1.jpg",
    "images": [
      "assets/images/tn036-1.jpg",
      "assets/images/tn036-2.png",
      "assets/images/tn036-3.jpg"
    ],
    "description": "Chân váy có phom dễ phối đồ, phần lưng thoải mái và chất vải mềm. Một chút điệu đà cho những ngày đến lớp, dạo phố hoặc tham gia buổi tiệc nhỏ cùng gia đình.",
    "stock": 46,
    "isNew": true,
    "sale": true,
    "sold": 79,
    "createdAt": "2026-10-16T00:00:00.000Z",
    "collection": "little-sunshine",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn037",
    "name": "Set ba quần lót caro bé gái",
    "gender": "girl",
    "category": "underwear",
    "price": 129000,
    "originalPrice": 279000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Hồng",
        "hex": "#d0a39d"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn037-1.jpg",
    "images": [
      "assets/images/tn037-1.jpg",
      "assets/images/tn037-2.jpg",
      "assets/images/tn037-3.jpg"
    ],
    "description": "Đồ lót thiết kế dành riêng cho trẻ em với phần cạp mềm, đường viền êm và chất vải thoáng. Set nhiều chiếc thuận tiện để thay mới mỗi ngày. Màu sắc thực tế trong set có thể phối ngẫu nhiên.",
    "stock": 53,
    "isNew": true,
    "sale": true,
    "sold": 92,
    "createdAt": "2026-10-15T00:00:00.000Z",
    "collection": "little-joy",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn038",
    "name": "Áo khoác denim đen có mũ",
    "gender": "boy",
    "category": "jacket",
    "price": 319000,
    "originalPrice": 419000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Đen",
        "hex": "#39393b"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn038-1.jpg",
    "images": [
      "assets/images/tn038-1.jpg",
      "assets/images/tn038-2.jpg",
      "assets/images/tn038-3.jpg"
    ],
    "description": "Lớp khoác ngoài nhẹ nhàng, phom thoải mái và chi tiết dễ phối. Giữ ấm vừa đủ trong những ngày chuyển mùa, cùng bé vui chơi và khám phá ngoài trời.",
    "stock": 17,
    "isNew": false,
    "sale": true,
    "sold": 26,
    "createdAt": "2026-10-14T00:00:00.000Z",
    "collection": "autumn-tales",
    "material": "Vải dệt mềm, lớp lót thoáng",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn039",
    "name": "Quần ống loe gân hồng bé gái",
    "gender": "girl",
    "category": "pants",
    "price": 169000,
    "originalPrice": 289000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Hồng",
        "hex": "#e5b5c0"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn039-1.jpg",
    "images": [
      "assets/images/tn039-1.jpg",
      "assets/images/tn039-2.jpg",
      "assets/images/tn039-3.jpg"
    ],
    "description": "Phom quần thoải mái, cạp co giãn dễ mặc và đường may chắc chắn. Dễ phối cùng áo thun, sơ mi hoặc áo khoác để bé tự do vận động suốt ngày dài.",
    "stock": 24,
    "isNew": true,
    "sale": true,
    "sold": 39,
    "createdAt": "2026-10-13T00:00:00.000Z",
    "collection": "mini-explorers",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn040",
    "name": "Giày thể thao quai dán Mini Move",
    "gender": "boy",
    "category": "shoes",
    "price": 289000,
    "originalPrice": 369000,
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32"
    ],
    "colors": [
      {
        "name": "Be",
        "hex": "#c5aa86"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      },
      {
        "name": "Đen",
        "hex": "#353638"
      }
    ],
    "image": "assets/images/tn040-1.png",
    "images": [
      "assets/images/tn040-1.png",
      "assets/images/tn040-2.jpg",
      "assets/images/tn040-3.png"
    ],
    "description": "Thiết kế giày dép dành cho những bước chân nhỏ, đế nhẹ và quai cài thuận tiện. Chọn đúng chiều dài bàn chân theo bảng size để bé đi lại thoải mái.",
    "stock": 31,
    "isNew": true,
    "sale": true,
    "sold": 52,
    "createdAt": "2026-10-12T00:00:00.000Z",
    "collection": "little-sunshine",
    "material": "Thân mềm, đế cao su nhẹ",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn041",
    "name": "Đầm hoa vanilla cổ vuông bé gái",
    "gender": "girl",
    "category": "dress",
    "price": 259000,
    "originalPrice": 409000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Be",
        "hex": "#e8dfcb"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn041-1.jpg",
    "images": [
      "assets/images/tn041-1.jpg",
      "assets/images/tn041-2.jpg",
      "assets/images/tn041-3.jpg"
    ],
    "description": "Dáng váy xinh xắn, đường may gọn gàng và lớp vải mềm nhẹ, cho bé tự do xoay tròn, vui chơi và khám phá. Dễ phối cùng sandal hoặc giày búp bê trong những ngày đi học, dạo phố và gặp gỡ gia đình.",
    "stock": 38,
    "isNew": false,
    "sale": true,
    "sold": 65,
    "createdAt": "2026-10-11T00:00:00.000Z",
    "collection": "little-joy",
    "material": "Vải mềm nhẹ, lớp lót cotton",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn042",
    "name": "Áo len sọc ngang nâu ấm áp",
    "gender": "unisex",
    "category": "top",
    "price": 229000,
    "originalPrice": 329000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Nâu",
        "hex": "#b19076"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn042-1.jpg",
    "images": [
      "assets/images/tn042-1.jpg",
      "assets/images/tn042-2.jpg",
      "assets/images/tn042-3.jpg"
    ],
    "description": "Thiết kế dễ mặc với phom thoải mái, chất vải mềm và đường may êm ái. Một lựa chọn đơn giản cho những ngày đi học, đi chơi và mọi hoạt động thường ngày của bé.",
    "stock": 45,
    "isNew": true,
    "sale": true,
    "sold": 78,
    "createdAt": "2026-10-10T00:00:00.000Z",
    "collection": "autumn-tales",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn043",
    "name": "Bộ đồ mềm họa tiết mùa lễ hội",
    "gender": "unisex",
    "category": "set",
    "price": 279000,
    "originalPrice": 399000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Trắng",
        "hex": "#f6ece4"
      },
      {
        "name": "Hồng",
        "hex": "#e3b4c3"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn043-1.png",
    "images": [
      "assets/images/tn043-1.png",
      "assets/images/tn043-2.png",
      "assets/images/tn043-3.png"
    ],
    "description": "Bộ trang phục đồng điệu dành cho những giờ vui chơi thoải mái. Chất vải nhẹ, phom rộng vừa phải và chi tiết dễ thương giúp bé luôn tự tin vận động.",
    "stock": 52,
    "isNew": true,
    "sale": true,
    "sold": 91,
    "createdAt": "2026-10-09T00:00:00.000Z",
    "collection": "mini-explorers",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn044",
    "name": "Chân váy kaki chữ A màu camel",
    "gender": "girl",
    "category": "skirt",
    "price": 169000,
    "originalPrice": 249000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Nâu",
        "hex": "#ba9677"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn044-1.jpg",
    "images": [
      "assets/images/tn044-1.jpg",
      "assets/images/tn044-2.jpg",
      "assets/images/tn044-3.jpg"
    ],
    "description": "Chân váy có phom dễ phối đồ, phần lưng thoải mái và chất vải mềm. Một chút điệu đà cho những ngày đến lớp, dạo phố hoặc tham gia buổi tiệc nhỏ cùng gia đình.",
    "stock": 16,
    "isNew": false,
    "sale": true,
    "sold": 25,
    "createdAt": "2026-10-08T00:00:00.000Z",
    "collection": "little-sunshine",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn045",
    "name": "Set quần lót bảy ngày bé gái",
    "gender": "girl",
    "category": "underwear",
    "price": 199000,
    "originalPrice": 349000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Hồng",
        "hex": "#d9b0ad"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn045-1.jpg",
    "images": [
      "assets/images/tn045-1.jpg",
      "assets/images/tn045-2.jpg",
      "assets/images/tn045-3.jpg"
    ],
    "description": "Đồ lót thiết kế dành riêng cho trẻ em với phần cạp mềm, đường viền êm và chất vải thoáng. Set nhiều chiếc thuận tiện để thay mới mỗi ngày. Màu sắc thực tế trong set có thể phối ngẫu nhiên.",
    "stock": 23,
    "isNew": true,
    "sale": true,
    "sold": 38,
    "createdAt": "2026-10-07T00:00:00.000Z",
    "collection": "little-joy",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn046",
    "name": "Áo khoác gió trắng nhẹ cho bé",
    "gender": "unisex",
    "category": "jacket",
    "price": 269000,
    "originalPrice": 369000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      },
      {
        "name": "Be",
        "hex": "#ddcbb0"
      },
      {
        "name": "Đen",
        "hex": "#353638"
      }
    ],
    "image": "assets/images/tn046-1.jpg",
    "images": [
      "assets/images/tn046-1.jpg",
      "assets/images/tn046-2.jpg",
      "assets/images/tn046-3.jpg"
    ],
    "description": "Lớp khoác ngoài nhẹ nhàng, phom thoải mái và chi tiết dễ phối. Giữ ấm vừa đủ trong những ngày chuyển mùa, cùng bé vui chơi và khám phá ngoài trời.",
    "stock": 30,
    "isNew": true,
    "sale": true,
    "sold": 51,
    "createdAt": "2026-10-06T00:00:00.000Z",
    "collection": "autumn-tales",
    "material": "Vải dệt mềm, lớp lót thoáng",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn047",
    "name": "Quần jeans ống rộng màu ghi",
    "gender": "boy",
    "category": "pants",
    "price": 219000,
    "originalPrice": 339000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Đen",
        "hex": "#8a8b8b"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn047-1.jpg",
    "images": [
      "assets/images/tn047-1.jpg",
      "assets/images/tn047-2.jpg",
      "assets/images/tn047-3.jpg"
    ],
    "description": "Phom quần thoải mái, cạp co giãn dễ mặc và đường may chắc chắn. Dễ phối cùng áo thun, sơ mi hoặc áo khoác để bé tự do vận động suốt ngày dài.",
    "stock": 37,
    "isNew": false,
    "sale": true,
    "sold": 64,
    "createdAt": "2026-10-05T00:00:00.000Z",
    "collection": "mini-explorers",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn048",
    "name": "Sandal quai mảnh Little Daisy",
    "gender": "girl",
    "category": "shoes",
    "price": 249000,
    "originalPrice": 329000,
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32"
    ],
    "colors": [
      {
        "name": "Hồng",
        "hex": "#d8b2a7"
      },
      {
        "name": "Be",
        "hex": "#ddcbb0"
      }
    ],
    "image": "assets/images/tn048-1.png",
    "images": [
      "assets/images/tn048-1.png",
      "assets/images/tn048-2.jpg",
      "assets/images/tn048-3.jpg"
    ],
    "description": "Thiết kế giày dép dành cho những bước chân nhỏ, đế nhẹ và quai cài thuận tiện. Chọn đúng chiều dài bàn chân theo bảng size để bé đi lại thoải mái.",
    "stock": 44,
    "isNew": true,
    "sale": true,
    "sold": 77,
    "createdAt": "2026-10-04T00:00:00.000Z",
    "collection": "little-sunshine",
    "material": "Thân mềm, đế cao su nhẹ",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn049",
    "name": "Đầm hoa xanh navy cổ bèo",
    "gender": "girl",
    "category": "dress",
    "price": 269000,
    "originalPrice": 419000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Xanh dương",
        "hex": "#304658"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn049-1.jpg",
    "images": [
      "assets/images/tn049-1.jpg",
      "assets/images/tn049-2.jpg",
      "assets/images/tn049-3.jpg"
    ],
    "description": "Dáng váy xinh xắn, đường may gọn gàng và lớp vải mềm nhẹ, cho bé tự do xoay tròn, vui chơi và khám phá. Dễ phối cùng sandal hoặc giày búp bê trong những ngày đi học, dạo phố và gặp gỡ gia đình.",
    "stock": 51,
    "isNew": true,
    "sale": true,
    "sold": 90,
    "createdAt": "2026-10-03T00:00:00.000Z",
    "collection": "little-joy",
    "material": "Vải mềm nhẹ, lớp lót cotton",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn050",
    "name": "Áo thun sọc dáng rộng bé trai",
    "gender": "boy",
    "category": "top",
    "price": 139000,
    "originalPrice": 239000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Trắng",
        "hex": "#e9e5d9"
      },
      {
        "name": "Be",
        "hex": "#ddcbb0"
      }
    ],
    "image": "assets/images/tn050-1.jpg",
    "images": [
      "assets/images/tn050-1.jpg",
      "assets/images/tn050-2.jpg",
      "assets/images/tn050-3.jpg"
    ],
    "description": "Thiết kế dễ mặc với phom thoải mái, chất vải mềm và đường may êm ái. Một lựa chọn đơn giản cho những ngày đi học, đi chơi và mọi hoạt động thường ngày của bé.",
    "stock": 58,
    "isNew": false,
    "sale": true,
    "sold": 24,
    "createdAt": "2026-10-02T00:00:00.000Z",
    "collection": "autumn-tales",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn051",
    "name": "Đồ liền thân cotton khóa kéo màu ghi",
    "gender": "unisex",
    "category": "set",
    "price": 199000,
    "originalPrice": 319000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Be",
        "hex": "#aaa8a0"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn051-1.jpg",
    "images": [
      "assets/images/tn051-1.jpg",
      "assets/images/tn051-2.jpg",
      "assets/images/tn051-3.jpg"
    ],
    "description": "Bộ trang phục đồng điệu dành cho những giờ vui chơi thoải mái. Chất vải nhẹ, phom rộng vừa phải và chi tiết dễ thương giúp bé luôn tự tin vận động.",
    "stock": 22,
    "isNew": true,
    "sale": true,
    "sold": 37,
    "createdAt": "2026-10-01T00:00:00.000Z",
    "collection": "mini-explorers",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn052",
    "name": "Chân váy quần kaki năng động",
    "gender": "girl",
    "category": "skirt",
    "price": 179000,
    "originalPrice": 259000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Nâu",
        "hex": "#c2a181"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      },
      {
        "name": "Đen",
        "hex": "#353638"
      }
    ],
    "image": "assets/images/tn052-1.jpg",
    "images": [
      "assets/images/tn052-1.jpg",
      "assets/images/tn052-2.jpg",
      "assets/images/tn052-3.jpg"
    ],
    "description": "Chân váy có phom dễ phối đồ, phần lưng thoải mái và chất vải mềm. Một chút điệu đà cho những ngày đến lớp, dạo phố hoặc tham gia buổi tiệc nhỏ cùng gia đình.",
    "stock": 29,
    "isNew": true,
    "sale": true,
    "sold": 50,
    "createdAt": "2026-09-30T00:00:00.000Z",
    "collection": "little-sunshine",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn053",
    "name": "Set quần lót bảy ngày bé trai",
    "gender": "boy",
    "category": "underwear",
    "price": 199000,
    "originalPrice": 349000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Xanh dương",
        "hex": "#7c93a2"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn053-1.jpg",
    "images": [
      "assets/images/tn053-1.jpg",
      "assets/images/tn053-2.jpg",
      "assets/images/tn053-3.jpg"
    ],
    "description": "Đồ lót thiết kế dành riêng cho trẻ em với phần cạp mềm, đường viền êm và chất vải thoáng. Set nhiều chiếc thuận tiện để thay mới mỗi ngày. Màu sắc thực tế trong set có thể phối ngẫu nhiên.",
    "stock": 36,
    "isNew": false,
    "sale": true,
    "sold": 63,
    "createdAt": "2026-09-29T00:00:00.000Z",
    "collection": "little-joy",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn054",
    "name": "Áo gile phao nâu nhẹ ấm",
    "gender": "boy",
    "category": "jacket",
    "price": 279000,
    "originalPrice": 379000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Nâu",
        "hex": "#8c735b"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn054-1.jpg",
    "images": [
      "assets/images/tn054-1.jpg",
      "assets/images/tn054-2.jpg",
      "assets/images/tn054-3.jpg"
    ],
    "description": "Lớp khoác ngoài nhẹ nhàng, phom thoải mái và chi tiết dễ phối. Giữ ấm vừa đủ trong những ngày chuyển mùa, cùng bé vui chơi và khám phá ngoài trời.",
    "stock": 43,
    "isNew": true,
    "sale": true,
    "sold": 76,
    "createdAt": "2026-09-28T00:00:00.000Z",
    "collection": "autumn-tales",
    "material": "Vải dệt mềm, lớp lót thoáng",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn055",
    "name": "Quần jeans ống đứng xanh cơ bản",
    "gender": "unisex",
    "category": "pants",
    "price": 209000,
    "originalPrice": 329000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Xanh dương",
        "hex": "#7f97ad"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn055-1.jpg",
    "images": [
      "assets/images/tn055-1.jpg",
      "assets/images/tn055-2.jpg",
      "assets/images/tn055-3.jpg"
    ],
    "description": "Phom quần thoải mái, cạp co giãn dễ mặc và đường may chắc chắn. Dễ phối cùng áo thun, sơ mi hoặc áo khoác để bé tự do vận động suốt ngày dài.",
    "stock": 50,
    "isNew": true,
    "sale": true,
    "sold": 89,
    "createdAt": "2026-09-27T00:00:00.000Z",
    "collection": "mini-explorers",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn056",
    "name": "Giày sneaker đế êm Mini Runner",
    "gender": "unisex",
    "category": "shoes",
    "price": 299000,
    "originalPrice": 379000,
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32"
    ],
    "colors": [
      {
        "name": "Trắng",
        "hex": "#e9e5dc"
      },
      {
        "name": "Be",
        "hex": "#ddcbb0"
      }
    ],
    "image": "assets/images/tn056-1.png",
    "images": [
      "assets/images/tn056-1.png",
      "assets/images/tn056-2.png",
      "assets/images/tn056-3.png"
    ],
    "description": "Thiết kế giày dép dành cho những bước chân nhỏ, đế nhẹ và quai cài thuận tiện. Chọn đúng chiều dài bàn chân theo bảng size để bé đi lại thoải mái.",
    "stock": 57,
    "isNew": false,
    "sale": true,
    "sold": 23,
    "createdAt": "2026-09-26T00:00:00.000Z",
    "collection": "little-sunshine",
    "material": "Thân mềm, đế cao su nhẹ",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn057",
    "name": "Áo cotton hoa nhí tay ngắn bé gái",
    "gender": "girl",
    "category": "top",
    "price": 149000,
    "originalPrice": 299000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Hồng",
        "hex": "#e4bfc1"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn057-1.png",
    "images": [
      "assets/images/tn057-1.png",
      "assets/images/tn057-2.jpg",
      "assets/images/tn057-3.jpg"
    ],
    "description": "Thiết kế dễ mặc với phom thoải mái, chất vải mềm và đường may êm ái. Một lựa chọn đơn giản cho những ngày đi học, đi chơi và mọi hoạt động thường ngày của bé.",
    "stock": 21,
    "isNew": true,
    "sale": true,
    "sold": 36,
    "createdAt": "2026-09-25T00:00:00.000Z",
    "collection": "little-joy",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn058",
    "name": "Đồ liền thân cotton khóa kéo nâu",
    "gender": "unisex",
    "category": "set",
    "price": 199000,
    "originalPrice": 299000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Nâu",
        "hex": "#ae8f78"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      },
      {
        "name": "Đen",
        "hex": "#353638"
      }
    ],
    "image": "assets/images/tn058-1.jpg",
    "images": [
      "assets/images/tn058-1.jpg",
      "assets/images/tn058-2.png",
      "assets/images/tn058-3.jpg"
    ],
    "description": "Bộ trang phục đồng điệu dành cho những giờ vui chơi thoải mái. Chất vải nhẹ, phom rộng vừa phải và chi tiết dễ thương giúp bé luôn tự tin vận động.",
    "stock": 28,
    "isNew": true,
    "sale": true,
    "sold": 49,
    "createdAt": "2026-09-24T00:00:00.000Z",
    "collection": "autumn-tales",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn059",
    "name": "Áo cardigan hồng Pixie cho bé gái",
    "gender": "girl",
    "category": "jacket",
    "price": 279000,
    "originalPrice": 399000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Hồng",
        "hex": "#d9a5bd"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn059-1.jpg",
    "images": [
      "assets/images/tn059-1.jpg",
      "assets/images/tn059-2.jpg",
      "assets/images/tn059-3.jpg"
    ],
    "description": "Lớp khoác ngoài nhẹ nhàng, phom thoải mái và chi tiết dễ phối. Giữ ấm vừa đủ trong những ngày chuyển mùa, cùng bé vui chơi và khám phá ngoài trời.",
    "stock": 35,
    "isNew": false,
    "sale": true,
    "sold": 62,
    "createdAt": "2026-09-23T00:00:00.000Z",
    "collection": "mini-explorers",
    "material": "Vải dệt mềm, lớp lót thoáng",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn060",
    "name": "Quần short thể thao đen bé trai",
    "gender": "boy",
    "category": "pants",
    "price": 129000,
    "originalPrice": 209000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Đen",
        "hex": "#343537"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn060-1.jpg",
    "images": [
      "assets/images/tn060-1.jpg",
      "assets/images/tn060-2.jpg",
      "assets/images/tn060-3.jpg"
    ],
    "description": "Phom quần thoải mái, cạp co giãn dễ mặc và đường may chắc chắn. Dễ phối cùng áo thun, sơ mi hoặc áo khoác để bé tự do vận động suốt ngày dài.",
    "stock": 42,
    "isNew": true,
    "sale": true,
    "sold": 75,
    "createdAt": "2026-09-22T00:00:00.000Z",
    "collection": "little-sunshine",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn061",
    "name": "Giày búp bê quai ngang Little Belle",
    "gender": "girl",
    "category": "shoes",
    "price": 279000,
    "originalPrice": 429000,
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32"
    ],
    "colors": [
      {
        "name": "Be",
        "hex": "#d7c3aa"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      },
      {
        "name": "Xanh dương",
        "hex": "#8ca8bf"
      }
    ],
    "image": "assets/images/tn061-1.png",
    "images": [
      "assets/images/tn061-1.png",
      "assets/images/tn061-2.jpg",
      "assets/images/tn061-3.png"
    ],
    "description": "Thiết kế giày dép dành cho những bước chân nhỏ, đế nhẹ và quai cài thuận tiện. Chọn đúng chiều dài bàn chân theo bảng size để bé đi lại thoải mái.",
    "stock": 49,
    "isNew": true,
    "sale": true,
    "sold": 88,
    "createdAt": "2026-09-21T00:00:00.000Z",
    "collection": "little-joy",
    "material": "Thân mềm, đế cao su nhẹ",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn062",
    "name": "Quần short cotton ghi Everyday",
    "gender": "boy",
    "category": "pants",
    "price": 119000,
    "originalPrice": 219000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Be",
        "hex": "#a6a5a1"
      },
      {
        "name": "Xanh lá",
        "hex": "#8e9f7f"
      }
    ],
    "image": "assets/images/tn062-1.jpg",
    "images": [
      "assets/images/tn062-1.jpg",
      "assets/images/tn062-2.jpg",
      "assets/images/tn062-3.jpg"
    ],
    "description": "Phom quần thoải mái, cạp co giãn dễ mặc và đường may chắc chắn. Dễ phối cùng áo thun, sơ mi hoặc áo khoác để bé tự do vận động suốt ngày dài.",
    "stock": 56,
    "isNew": false,
    "sale": true,
    "sold": 22,
    "createdAt": "2026-09-20T00:00:00.000Z",
    "collection": "autumn-tales",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn063",
    "name": "Quần jogger gân xanh lá cho bé",
    "gender": "unisex",
    "category": "pants",
    "price": 169000,
    "originalPrice": 289000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Xanh lá",
        "hex": "#8a9b7b"
      },
      {
        "name": "Trắng",
        "hex": "#f5f3ed"
      }
    ],
    "image": "assets/images/tn063-1.jpg",
    "images": [
      "assets/images/tn063-1.jpg",
      "assets/images/tn063-2.jpg",
      "assets/images/tn063-3.jpg"
    ],
    "description": "Phom quần thoải mái, cạp co giãn dễ mặc và đường may chắc chắn. Dễ phối cùng áo thun, sơ mi hoặc áo khoác để bé tự do vận động suốt ngày dài.",
    "stock": 20,
    "isNew": true,
    "sale": true,
    "sold": 35,
    "createdAt": "2026-09-19T00:00:00.000Z",
    "collection": "mini-explorers",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  },
  {
    "id": "tn064",
    "name": "Áo thun cherry nhỏ bé gái",
    "gender": "girl",
    "category": "top",
    "price": 139000,
    "originalPrice": 219000,
    "sizes": [
      "100",
      "110",
      "120",
      "130",
      "140",
      "150"
    ],
    "colors": [
      {
        "name": "Trắng",
        "hex": "#f2ede4"
      },
      {
        "name": "Be",
        "hex": "#ddcbb0"
      },
      {
        "name": "Đen",
        "hex": "#353638"
      }
    ],
    "image": "assets/images/tn064-1.jpg",
    "images": [
      "assets/images/tn064-1.jpg",
      "assets/images/tn064-2.jpg",
      "assets/images/tn064-3.jpg"
    ],
    "description": "Thiết kế dễ mặc với phom thoải mái, chất vải mềm và đường may êm ái. Một lựa chọn đơn giản cho những ngày đi học, đi chơi và mọi hoạt động thường ngày của bé.",
    "stock": 27,
    "isNew": true,
    "sale": true,
    "sold": 48,
    "createdAt": "2026-09-18T00:00:00.000Z",
    "collection": "little-sunshine",
    "material": "Cotton pha mềm mại",
    "care": "Giặt nhẹ với nước mát dưới 30°C. Giặt riêng màu đậm. Phơi nơi thoáng mát, tránh ánh nắng trực tiếp."
  }
];
