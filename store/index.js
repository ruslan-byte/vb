export const state = () => ({
	header: {
		allRegions: [
			{
				id: 0,
				title: "Москва",
				isActive: true,
				deliveryTime: "53 мин",
			},
			{
				id: 1,
				title: "Санкт-Петербург",
				isActive: false,
				deliveryTime: "42 мин",
			},
			{
				id: 2,
				title: "Волгоград",
				isActive: false,
				deliveryTime: "30 мин",
			},
			{
				id: 3,
				title: "Екатеринбург",
				isActive: false,
				deliveryTime: "1 час",
			},
			{
				id: 4,
				title: "Владивосток",
				isActive: false,
				deliveryTime: "15 мин",
			},
			{
				id: 5,
				title: "Перьм",
				isActive: false,
				deliveryTime: "14 мин",
			},
			{
				id: 6,
				title: "Нижний Новгород",
				isActive: false,
				deliveryTime: "19 мин",
			},
		],
		contact:{
			number: 88001230456,
			subscription: "Обеды с 12:00 до 16:30"
		},
		linksMainMenu: [
			{
				id: 0,
				linkTitle: "Бизнес-ланчи",
				url: "#0"
			},
			{
				id: 1,
				linkTitle: "Вторые блюда",
				url: "#1"
			},
			{
				id: 2,
				linkTitle: "Гарниры",
				url: "#2"
			},
			{
				id: 3,
				linkTitle: "Супы",
				url: "#3"
			},
			{
				id: 4,
				linkTitle: "Салаты",
				url: "#4"
			},
			{
				id: 5,
				linkTitle: "Десерты",
				url: "#5"
			},
			{
				id: 6,
				linkTitle: "Выпечка",
				url: "#6"
			},
			{
				id: 7,
				linkTitle: "Напитки",
				url: "#7"
			},
		],
		linksBurgerMenu:[
			{
				id: 0,
				linkTitle: "О компании",
				url: "#8"
			},
			{
				id: 1,
				linkTitle: "Доставка и оплата",
				url: "#9"
			},
			{
				id: 2,
				linkTitle: "Скидки и баллы",
				url: "#10"
			},
			{
				id: 3,
				linkTitle: "Как сделать заказ",
				url: "#11"
			},
			{
				id: 4,
				linkTitle: "Отзывы клиентов",
				url: "#12"
			},
		]
	},
	routes:
	{
		map: "#",
	}
});
export const mutations = {
	setActiveRegion(state, regionId)
	{
		state.header.allRegions.forEach(region => region.isActive = false);
		state.header.allRegions.find(region => region.id === regionId).isActive = true;
	},
};