<template>
	<header class="header">
		<div class="container">
			<div class="header__top">
			</div>
			<div class="header__main">
				<div class="header__mobile-top">
					<div class="header__logo">
						<svg-icon name="logo" />
					</div>
					<button class="header__burger">
						<svg-icon name="burger" />
					</button>
				</div>
				<menu-select :state="menuSelectData.state" @change="changeMenuSelectState"/>
			</div>
			<div class="header__bottom">
				<nav-list :links="navListData.links"></nav-list>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		data()
		{
			return {
				navListData:
				{
					links: [
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
					]
				},
				menuSelectData: {
					state:"today",
				}
			};
		},
		methods:{
			changeMenuSelectState(newState)
			{
				this.menuSelectData.state = newState;
			}
		}
	}
</script>

<style lang="scss">
	.header__logo
	{
		font-size: 0;
		svg
		{
			height: 44px;
			width: 136px;
		}
	}
	.header__burger
	{
		border:none;
		background: none;
		cursor: pointer;
		padding: 0;
		font-size: 0;
		svg
		{
			height: 18px;
			width: 28px;
		}
	}
	.header__mobile-top
	{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 8px;
		margin-bottom: 2px;
	}
	.header__main{margin-bottom: 2px;}
	.header__bottom
	{
		position:relative;
		&::after
		{
			content:"";
			position: absolute;
			right:-15px;
			top:0;
			height: 100%;
			width: 36px;
			background: linear-gradient(270deg, #FFFFFF 48.15%, rgba(255, 255, 255, 0) 175.93%);;
		}
	}
</style>