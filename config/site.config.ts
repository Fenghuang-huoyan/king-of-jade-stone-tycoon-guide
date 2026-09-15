/**
 * 配置层 —— 换一个游戏，只改这个文件。
 * 字段结构对齐 game-wiki-template 的原始约定，见该仓库 CLAUDE.md。
 */
export type NavCategory = { slug: string; label: string; image?: string; imageFit?: "cover" | "contain" };

// ---- 图片（官方 Steam header/截图，均已自托管到 public/，不热链）----
const IMG = {
  header: "/images/official/steam/header.jpg",
  background: "/images/official/steam/background.jpg",
  ss1: "/images/screenshots/ss-1.jpg",
  ss2: "/images/screenshots/ss-2.jpg",
  ss3: "/images/screenshots/ss-3.jpg",
  ss4: "/images/screenshots/ss-4.jpg",
  ss5: "/images/screenshots/ss-5.jpg",
  ss6: "/images/screenshots/ss-6.jpg",
};

export const site = {
  // ---- 基本信息 ----
  gameName: "King of Jade: Stone Tycoon",
  // 隐私政策/条款页的免责声明用；这是 Steam PC 游戏，没有平台方公司（不像 Roblox），
  // 用开发商名字，换游戏时必改，否则免责声明会指名一个跟这个游戏无关的主体
  platformOwner: "909Game",
  siteName: "King of Jade: Stone Tycoon Guide",
  logo: "/images/logo.jpg",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "https://kingofjadeguide.wiki",
  contactEmail: "asgharrulislam401@gmail.com",

  // ---- SEO 元数据 ----
  meta: {
    title: "King of Jade: Stone Tycoon Guide — Achievements, Tips, Endings",
    description:
      "Independent King of Jade: Stone Tycoon guide: beginner tips, the full achievement list, jade appraisal basics, crafting, endings and Endless Mode, sourced from Steam and cross-checked where possible.",
    keywords: "King of Jade Stone Tycoon, jade tycoon guide, achievements, endings, endless mode, tips",
  },

  // ---- 官方链接 ----
  links: {
    platform: "https://store.steampowered.com/app/4821420/King_of_Jade_Stone_Tycoon/",
    official: "https://store.steampowered.com/app/4821420/King_of_Jade_Stone_Tycoon/",
    discord: "",
    youtube: "",
    reddit: "",
  },

  // ---- 主题色（HSL，亮暗两套）----
  // 取自游戏主题：翡翠绿（玉石鉴定）+ 琥珀金（财富/铜钱）+ 米白（店铺纸质感）
  theme: {
    light: {
      theme: "158 55% 28%", themeLight: "158 45% 40%", themeShadow: "158 60% 16%",
      accent: "42 90% 50%", accentFg: "30 60% 16%", accentShadow: "36 85% 38%",
      bg: "40 30% 97%", fg: "30 25% 14%", muted: "30 12% 38%", card: "0 0% 100%", border: "40 25% 85%",
    },
    dark: {
      theme: "158 48% 34%", themeLight: "158 42% 52%", themeShadow: "158 55% 18%",
      accent: "42 90% 52%", accentFg: "30 60% 12%", accentShadow: "36 80% 34%",
      bg: "160 20% 8%", fg: "42 25% 92%", muted: "160 10% 65%", card: "160 18% 13%", border: "160 15% 20%",
    },
  },

  i18n: { locales: ["en"] as const, defaultLocale: "en" as const },

  // ---- 导航分类（对应 content/<locale>/<category>/ 目录）----
  // 游戏 2026-09-11 才上线，没有第三方 wiki/攻略可引用，分类数量比第一个站少，
  // 只做现在能用官方来源核实的内容；深度玩法数据留待社区跑出来后再补
  categories: [
    { slug: "guide", label: "Beginner Guide", image: IMG.ss1 },
    { slug: "achievements", label: "Achievements", image: IMG.ss2, imageFit: "cover" },
    { slug: "appraisal", label: "Stone Appraisal", image: IMG.ss3 },
    { slug: "crafting", label: "Crafting", image: IMG.ss4 },
    { slug: "customers", label: "Customers & Relationships", image: IMG.ss5 },
    { slug: "endings", label: "Endings", image: IMG.ss6 },
    { slug: "endless", label: "Endless Mode", image: IMG.header, imageFit: "cover" },
    { slug: "tips", label: "Tips & Strategy", image: IMG.background, imageFit: "cover" },
  ] satisfies NavCategory[],

  // ---- 首页各区块 ----
  hero: {
    eyebrow: "Independent Community Guide",
    title: "King of Jade: Stone Tycoon",
    image: { src: IMG.header, alt: "King of Jade: Stone Tycoon official Steam header art" },
    description:
      "Judge raw stones, craft jadeite into jewelry, and build a business empire one cut at a time. Every guide here is checked against the game's official Steam page and updated as the community verifies more.",
    stats: ["44 Steam Achievements", "Released Sep 11, 2026", "909Game / lvlv", "Steam Management Sim"],
    primaryCta: { label: "Start Beginner Guide", href: "/guide/king-of-jade-stone-tycoon-beginner-guide" },
    secondaryCta: { label: "See All Achievements", href: "/achievements" },
    tertiaryCta: { label: "Endless Mode Tips", href: "/endless" },
  },

  start: {
    eyebrow: "Start Here",
    title: "Your Jade Stall Journey",
    cards: [
      { number: "1", title: "Beginner Guide", description: "Your first stall, first stones, first sale.", href: "/guide/king-of-jade-stone-tycoon-beginner-guide", image: IMG.ss1 },
      { number: "2", title: "Achievements", description: "The full official achievement list.", href: "/achievements", image: IMG.ss2 },
      { number: "3", title: "Stone Appraisal", description: "How judging raw stones actually works.", href: "/appraisal", image: IMG.ss3 },
      { number: "4", title: "Endings", description: "What determines which ending you get.", href: "/endings", image: IMG.ss6 },
    ],
  },

  aboutGame: {
    title: "What is King of Jade: Stone Tycoon?",
    paragraphs: [
      "King of Jade: Stone Tycoon is a management sim by 909Game (published by lvlv) that blends jade stone gambling, jewelry crafting and market-stall trading. You start from a small stall on Old Street, source raw stones, judge the jade hidden inside, craft it into jewelry, and sell to a cast of recurring customers.",
      "Beyond the main markets, the game offers an Endless Mode where rent keeps climbing and the market keeps shifting, testing how long a stall built from your earlier choices can survive.",
      "A note on the screenshots across this site: they're taken from the game's official Steam page, which currently only has Chinese-locale UI screenshots available (909Game is a Chinese developer). The game itself officially supports English — Steam's own language list confirms it — there just aren't English-UI screenshots published yet. We'll swap these in once official English screenshots exist.",
    ],
    stats: [
      { label: "Developer", value: "909Game" },
      { label: "Publisher", value: "lvlv" },
      { label: "Genre", value: "Casual / Simulation / Strategy" },
    ],
    cta: { label: "Explore All Guides", href: "/guide" },
  },

  finalCta: {
    title: "Ready to Run Your Jade Stall?",
    description: "From your first cut to Endless Mode, every page here cites where its claims came from.",
    primary: { label: "Read the Beginner Guide", href: "/guide/king-of-jade-stone-tycoon-beginner-guide" },
    secondary: { label: "View on Steam", href: "https://store.steampowered.com/app/4821420/King_of_Jade_Stone_Tycoon/" },
  },

  footer: {
    aboutTitle: "King of Jade: Stone Tycoon Guide",
    about:
      "An independent, fan-made King of Jade: Stone Tycoon reference. Not affiliated with 909Game or lvlv.",
    description: "Steam management sim. Judge jade, craft jewelry, build a business empire.",
  },
} as const;

export type Site = typeof site;
