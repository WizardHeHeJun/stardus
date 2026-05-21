// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = '星屑 Stardust';
export const SITE_DESCRIPTION = '一个使用 Astro 搭建的个人博客——笔记、项目，以及一些值得保留的想法。';

// giscus 评论配置 —— 4 个 ID 来自 https://giscus.app 配置器
// 一次性步骤：仓库开 Discussions → 装 https://github.com/apps/giscus → 在 giscus.app 拿 ID 填回这里
// 任一字段留空则全站评论功能关闭（页面会显示一张占位卡，不会报错）。
export const GISCUS = {
	repo: '',
	repoId: '',
	category: '',
	categoryId: '',
} as const;
