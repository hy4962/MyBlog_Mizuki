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
	{
		id: 8,
		content:
			"组合是好东西...没太强求用什么思想写，顺其自然就用组合了...想买个华为cyber或者华为gt3pro，但是怕太装了，妈的质感太好了，怕被别人说有钱....实际上这玩意二手便宜...用来监测睡眠，偶尔的运动数据，还有最核心的看时间..",
		date: "2026-04-19T13:30:00Z",
	},
	{
		id: 9,
		content:
			"客户劣质品当良品流出了，直接开批斗大会...加了一天新检测，但是客户非得验证后才能走，搞到晚上12点..客户请了一瓶可乐还送我回去了...1点半还要远程一小会...那只好今早睡大觉了..下午再去把手尾收拾一下",
		date: "2026-04-21T11:30:00Z",
	},
	{
		id: 10,
		content:
			"卧槽，票已经买了，周一真的要去福建了吗，客户会放我走吗？？真的？验收肯定过不了的吧？想肯定是想学习的，但是那边也太辛苦了吧",
		date: "2026-04-25T09:30:00Z",
	},
	{
		id: 11,
		content:
			"果然没放走我，搞得大老板亲自打电话给我让我留下，emm，想换掉我，给我两份简历让我跳了个人，过两天过来，承诺在两三周内教会他，然后调走我，...我估计都离职了....",
		date: "2026-04-27T17:30:00Z",
	},


];

// 将UTC日期字符串转换为本地时间（+8小时）的显示格式
// 保持原date字段不变，此函数仅用于展示
export const getLocalTimeString = (utcDateString: string): string => {
	const utcDate = new Date(utcDateString);
	// 创建UTC+8时间的新日期对象（不修改原字符串）
	const localDate = new Date(utcDate.getTime() + 8 * 60 * 60 * 1000);
	
	// 格式化为本地日期时间字符串，可根据需求调整格式
	return localDate.toLocaleString('zh-CN', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
		timeZone: 'Asia/Shanghai' // 明确指定东八区
	});
};

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

// 辅助函数：获取带本地时间显示的日记列表（原UTC格式不变，附加显示字段）
export const getDiaryListWithLocalTime = (limit?: number) => {
	const diaryList = getDiaryList(limit);
	return diaryList.map(item => ({
		...item,
		// 添加一个用于展示的本地时间字段，原始date字段保持不变
		localTime: getLocalTimeString(item.date)
	}));
};