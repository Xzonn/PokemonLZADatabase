参考我给出的示例 json，根据我提供的网页，将赛季奖励信息转换为相同格式的 json 数据。你可以使用 Python 将网页下载为 html 文件，然后直接对 html 进行解析。如果页面中没有提及某个道具的数量（quantity），则默认为 1。请确保所有日期均采用“YYYY 年 MM 月 DD 日”的格式表示，月份和日期前不要补 0。

注意：你的输出结果应仅包含 json 数据，不应包含任何解释文字或其他内容。

示例：

```json
{
  "season": 10,
  "url": "https://za.xzonn.top/",
  "startDate": "2024 年 8 月 12 日",
  "endDate": "2025 年 10 月 31 日",
  "promotionRewards": [
    {
      "levels": "Ｄ",
      "items": [
        {
          "item": "喷火龙进化石",
          "quantity": 1
        }
      ]
    },
    {
      "levels": "Ｚ",
      "items": [
        {
          "item": "水晶灯火灵进化石",
          "quantity": 1
        }
      ]
    }
  ],
  "seasonRewards": [
    {
      "levels": "Ａ",
      "items": [
        {
          "item": "超级球",
          "quantity": 3
        },
        {
          "item": "金色王冠",
          "quantity": 1
        }
      ]
    },
    {
      "levels": "Ｆ〜Ｂ",
      "items": [
        {
          "item": "珍珠",
          "quantity": 2
        },
        {
          "item": "金珠",
          "quantity": 2
        }
      ]
    }
  ]
}
```

网页：https://plza-news.pokemon-home.com/sc/page/5.html
