const routes = [
  {
    id: 1,
    // 简略卡片用
    name: "林间小径",
    start: "南山入口",
    end: "北溪营地",
    intro: "轻松森林穿越，适合家庭。",
    thumbnail: "images/route1-thumb.jpg",   // 缩略图路径
    // 标签（用于筛选）
    tags: ["路程短", "耗时短", "难度低", "家庭友好"],
    // 详情页用
    detail: {
      fullDescription: "这是一条全长3.2公里的环形步道，沿途有高大的松树和清澈的小溪...",
      mapImage: "images/route1-map.jpg",     // 详细地图图片
      distance: "3.2 km",
      duration: "1.5小时",
      difficulty: "低",
      bestSeason: "春、秋",
      tips: "建议穿防滑鞋，带上野餐垫。",
      images: ["images/route1-1.jpg", "images/route1-2.jpg"]  // 详情页轮播图
    }
  },
  {
    id: 2,
    name: "山脊挑战",
    start: "西峰停车场",
    end: "东峰观景台",
    intro: "陡峭山脊，视野极佳。",
    thumbnail: "images/route2-thumb.jpg",
    tags: ["路程长", "耗时长", "难度高", "风景壮丽"],
    detail: {
      fullDescription: "全程7.8公里，累计爬升600米，部分路段需要手脚并用...",
      mapImage: "images/route2-map.jpg",
      distance: "7.8 km",
      duration: "4小时",
      difficulty: "高",
      bestSeason: "秋",
      tips: "携带至少2升水，建议有登山经验。",
      images: ["images/route2-1.jpg"]
    }
  }
  // ...继续添加更多路线
];