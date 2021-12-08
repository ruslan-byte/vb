<template>
	<header class="header">
		<header-top class="header__top"/>
		<div class="header__main">
			<div class="container">
				<div class="header__main-top">
					<div class="header__section header__section-left">
						<div class="header__logo">
							<svg-icon name="logo" />
						</div>
						<menu-select class="header__menu-select header__menu-select--desktop" :state="menuSelectData.state" @change="changeMenuSelectState"/>
					</div>
					<div class="header__section header__section-rigth">
						<numbers class="header__number"/>
						<v-button class="header__button header__button--phone">Заказать звонок</v-button>
						<v-button class="header__button">Войти</v-button>
						<button class="header__burger header__burger--mobile">
							<svg-icon name="burger" />
						</button>
					</div>
				</div>
				<menu-select class="header__menu-select header__menu-select--mobile" :state="menuSelectData.state" @change="changeMenuSelectState"/>
			</div>
		</div>
		<div class="container">
			<div class="header__bottom">
				<div class="header__section header__section-left">
					<button class="header__burger header__burger--desktop">
						<svg-icon name="burger" />
					</button>
					<nav-list class="header__nav-list" :links="navListData.links"></nav-list>
				</div>
				<div class="header__section header__section-right">
					<basket class="header__basket"/>
				</div>
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
					links:
					[
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
	.header{background: $white;}
	.header__logo
	{
		font-size: 0;
		padding-bottom: 6px;
		svg
		{
			height: 44px;
			width: 136px;
		}
	}
	.header__burger
	{
		border: none;
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
	.header__main-top
	{
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		margin-bottom: 2px;
		padding-top: 13px;
		height:40px;

	}
	.header__main{margin-bottom: 2px;}
	.header__bottom
	{
		display: flex;
		justify-content: space-between;
		align-items: center;
		position:relative;
		padding-top: 1px solid #E3E4E4;
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
		.header__burger{margin-right: 40px;}
	}
	.header__menu-select--desktop{display: none;}
	.header__burger--desktop{display: none;}
	.header__number.numbers{display: none;}
	.header__button{display: none;}
	.header__basket{display: none;}
	.header__section-right{display: none;}
	.header__section-left{width: 100%;}
	.header__top{display: none;}
	@media (min-width: $tablet)
	{
		.header__main-top
		{
			display: flex;
			margin-bottom: 10px;
		}
		.header__menu-select--mobile{display: none;}
		.header__menu-select--desktop{display: block;}
		.header__logo{margin-right: 69px;}
		.header__section
		{
			display: flex;
			align-items: center;
		}
	}
	@media (min-width: $desktop)
	{
		.header__button{display: block;}
		.header__basket{display: block;}
		.header__top{display: block;}
		.header__burger--desktop{display: block;}
		.header__burger--mobile{display: none;}
		.header__button.v-button
		{
			height: 45px;
			text-transform: uppercase;
			line-height: 45px;
			font-weight: 700;
		}
		.header__number.numbers
		{
			display: block;
			margin-right: 40px;
			.numbers__number{display: none;}
		}
		.header__bottom::after{display: none;}
		.header__nav-list{margin-right: 69px;}
		.header__bottom .header__section-left{max-width: 70%;}
		.header__button--phone.v-button
		{
			display: block;
			background-color: $green-white;
			color:#40AE49;
			height: 36px;
			line-height: 40px;
			max-width: 180px;
			font-size: 14px;
			font-weight: 500;
			line-height: 14px;
			padding:0 29px;
			text-transform: none;
			margin-right: 30px;
			white-space: nowrap;
			&:hover{color:$green-white;}
		}

	}
	@media (min-width: $widescreen)
	{
		.header__number.numbers
		{
			margin-right: 21px;
			.numbers__number{display: inline-block;}
		}
		.header__menu-select{margin-right: 240px;}
		.header__button--phone.v-button{margin-right: 57px; height: 40px;}
		.header__logo
		{
			margin-right: 70px;
			svg
			{
				width: 170px;
				height: 55px;
			}
		}
		.header__main{border-bottom: 1px solid #E3E4E4;}
		.header__main-top
		{
			height: 89px;
			padding: 0;
			margin: 0;
		}
		.header__section-left{padding-top: 5px; width: unset;}
		.header__section-rigth{padding-left: 8px;}
		.header__bottom
		{
			height: 63px;
			.header__section-left
			{
				padding: 0;
				margin: 0;
				max-width: unset;
			}
			.header__burger{margin-right: 38px;}
		}
	}
</style>