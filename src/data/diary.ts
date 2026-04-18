// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

// 示例日记数据
const diaryData: DiaryItem[] = [
	{
		id: 1,
		content:
			"The falling speed of cherry blossoms is five centimeters per second!",
		date: "2025-01-15T10:30:00Z",
		images: ["/images/diary/sakura.jpg", "/images/diary/1.webp"],
	},
	{
		id: 2,
		content:
			"面向对象吗，传参有点乱啊，感觉不习惯面向对象之前还是觉得函数式方便...",
		date: "2026-04-07T16:30:00Z",
	},
	{
		id: 3,
		content:
			"好想下班啊",
		date: "2026-04-08T16:30:00Z",
	},
	{
		id: 3,
		content:
			"面向对象，面向对象，面向对象，还有就是公司要破产咯",
		date: "2026-04-10T20:30:00Z",
	},
	{
		id: 4,
		content:
			"面向对象是对的，太优雅了，感觉自己之前的代码都是垃圾，妈的公司不会真不发补贴和工资吧",
		date: "2026-04-11T20:30:00Z",
	},
	{
		id: 5,
		content:
			"OPP太有意思了",
		date: "2026-04-14T22:30:00Z",
	},
	{
		id: 6,
		content:
			"这两天待在车间有点闷，有点久没休息想着休息一天，但是居然这么巧出问题了，唉，明天过去要被客户吊死呀，有没有一种可能，某种意义上我也是受害者。。。妈的使用OPP写的贪吃蛇没怎么完美的用上抽象和多态呀....唉，多态估计是用不上了，但是抽象类肯定要用的呀。。。但是还没想出来。。唉，差好远啊...",
		date: "2026-04-15T23:30:00Z",
	},
	{
		id: 7,
		content:
			"离职后能去哪里呀，过年也留下来加班了，清明也没回去，有点想离职回家一小段时间，最近待在车间感觉有点闷，回去后认真练练C#，跑跑步，折腾部署一下家里的小主机，给我爸换台手机，陪他随便玩玩...再考个摩托证吧，也许方便以后上班。。但是傻逼学校真傻逼，一堆资料卡手，烦",
		date: "2026-04-18T19:30:00Z",
	},
];

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = [...diaryData].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	diaryData.forEach((item) => {
		if (item.tags) {
			item.tags.forEach((tag) => tags.add(tag));
		}
	});
	return Array.from(tags).sort();
};
