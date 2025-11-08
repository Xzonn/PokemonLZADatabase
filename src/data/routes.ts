import * as pages from "@/pages";
import { NavigationItem } from "@/types";

type IHomepageNavigation = {
  title: string;
  contents: {
    title: string;
    contents: NavigationItem[];
  }[];
}[];

export const GLOBAL_ROUTES: Record<string, keyof typeof pages> = {
  "/": "HomePage",
  "/宝可梦一览": "PokemonListPage",
  "/招式一览": "MoveListPage",
  "/道具一览": "ItemListPage",
  "/招式学习器一览": "TMListPage",
  "/训练家一览": "TrainerListPage",
  "/ＺＡ登峰战": "RoyalePage",
  "/对战特区": "BattleZonePage",
  "/茉蜜姬调查": "ResearchListPage",
  "/副任务一览": "SideMissionListPage",
  "/密阿雷地图": "AreaListPage",
  "/宝可梦分布": "SpawnListPage",
  "/联网活动": "ActivityPage",
  "/更新日志": "ChangelogPage",
  "/p/:name": "PokemonDetailPage",
  "/m/:name": "MoveDetailPage",
  "/i/:name": "ItemDetailPage",
  "/t/:name": "TypeDetailPage",
  "/tr/:name": "TrainerDetailPage",
  "/area/:name": "AreaDetailPage",
  "/side/:id": "SideMissionDetailPage",
  /** @deprecated */
  "/野生特区一览": "WildZoneListPage",
  /** @deprecated */
  "/z/:id": "WildZoneDetailPage",
  "*": "NotFoundPage",
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { path: "/", label: "首页", icon: "pokedex" },
  { path: "/宝可梦一览", label: "宝可梦一览", icon: "bag-精灵球" },
  { path: "/密阿雷地图", label: "密阿雷地图", icon: "map" },
  { path: "/宝可梦分布", label: "宝可梦分布", icon: "alpha" },
  { path: "/招式一览", label: "招式一览", icon: "plus" },
  { path: "/道具一览", label: "道具一览", icon: "bag" },
  { path: "/招式学习器一览", label: "招式学习器一览", icon: "bag-招式学习器" },
  { path: "/训练家一览", label: "训练家一览", icon: "battle" },
  { path: "/ＺＡ登峰战", label: "ＺＡ登峰战", icon: "royale" },
  { path: "/茉蜜姬调查", label: "茉蜜姬调查", icon: "research" },
  { path: "/副任务一览", label: "副任务一览", icon: "side-plain" },
  { path: "/i/彩色螺丝", label: "彩色螺丝", icon: "bag-重要物品" },
  { path: "/联网活动", label: "联网活动", icon: "internet" },
  { path: "/更新日志", label: "更新日志", icon: "passage" },
];

export const HOME_NAVIGATIONS: IHomepageNavigation = [
  {
    title: "站内导航",
    contents: [
      {
        title: "常用列表",
        contents: [
          { path: "/宝可梦一览", label: "宝可梦", icon: "pokeball" },
          { path: "/招式一览", label: "招式", icon: "plus-black" },
          { path: "/道具一览", label: "道具", icon: "passage" },
          { path: "/招式学习器一览", label: "招式学习器", icon: "tm-妖精" },
        ],
      },
      {
        title: "对战相关",
        contents: [
          { path: "/训练家一览", label: "全部训练家", icon: "money" },
          { path: "/ＺＡ登峰战", label: "ＺＡ登峰战", icon: "prize-medal" },
          // { path: "/对战特区", label: "对战特区", icon: "battle-zone" },
          { path: "/联网活动", label: "联网活动", icon: "internet-black" },
        ],
      },
      {
        title: "收集相关",
        contents: [
          { path: "/宝可梦分布", label: "宝可梦分布", icon: "zone" },
          { path: "/茉蜜姬调查", label: "茉蜜姬调查", icon: "茉蜜姬" },
          { path: "/副任务一览", label: "副任务", icon: "side-mission" },
          { path: "/i/彩色螺丝", label: "彩色螺丝", icon: "colorful-screw" },
        ],
      },
    ],
  },
  {
    title: "站外导航",
    contents: [
      {
        title: "官方网站",
        contents: [
          {
            path: "https://www.pokemon.co.jp/ex/legends_z-a/sc/",
            label: "简体中文",
            icon: "website-zh-hans",
            language: "zh-hans",
          },
          {
            path: "https://www.pokemon.co.jp/ex/legends_z-a/tc/",
            label: "繁体中文",
            icon: "website-zh-hant",
            language: "zh-hant",
          },
          {
            path: "https://www.pokemon.co.jp/ex/legends_z-a/ja/",
            label: "日文",
            icon: "website-ja",
            language: "ja",
          },
          {
            path: "https://legends.pokemon.com/en-us/",
            label: "英文",
            icon: "website-en",
            language: "en",
          },
        ],
      },
      {
        title: "实用网站",
        contents: [
          {
            path: "https://wiki.52poke.com/wiki/%E9%99%84%E5%BD%95:%E5%AE%9D%E5%8F%AF%E6%A2%A6%E4%BC%A0%E8%AF%B4_Z-A%E4%B8%BB%E9%A2%98%E5%AF%BC%E8%88%AA",
            label: "神奇宝贝百科",
            icon: "52poke",
            language: "zh",
          },
          { path: "https://www.serebii.net/legendsz-a/", label: "Serebii.net", icon: "serebii", language: "en" },
          { path: "https://gamewith.jp/pokemon-za/", label: "GameWith", icon: "gamewith", language: "ja" },
          {
            path: "https://mapgenie.io/pokemon-legends-z-a/maps/lumiose-city",
            label: "Map Genie",
            icon: "mapgenie",
            language: "en",
          },
        ],
      },
      {
        title: "联系作者",
        contents: [
          { path: "https://space.bilibili.com/16114399", label: "Bilibili", icon: "bilibili" },
          { path: "https://afdian.com/a/xzonn", label: "爱发电", icon: "afdian" },
          { path: "https://github.com/Xzonn/PokemonLZADatabase", label: "GitHub", icon: "github" },
          { path: "https://sv.xzonn.top/wiki/%E9%A6%96%E9%A1%B5", label: "朱·紫数据库", icon: "sv-wiki" },
        ],
      },
    ],
  },
];
