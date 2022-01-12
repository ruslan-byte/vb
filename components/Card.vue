<template>
	<div class="card">
		<div class="card__top">
			<span class="card__title card__title--desktop">Собери свой ланч</span>
			<picture class="card__picture">
				<source
					:srcset="require('assets/img/products/soupe.png')"
					media="(min-width: 1024px)"
				>
				<img class="card__img" :src="require('assets/img/products/soupe-mobile.png')" alt="1">
			</picture>
			<div class="card__content">
				<span class="card__title card__title--mobile">Собери свой ланч</span>
				<h3 class="card__subtitle">{{ title }}</h3>
				<p>Добавляйте любые блюда в ваш конструктор ланча</p>
			</div>
		</div>
		<div class="card__bottom">
			<favorite-button></favorite-button>
			<Price :bonuses="48">480</Price>
			<v-button class="card__button" isRed>Собрать</v-button>
			<v-button class="card__button card__button--inline" isRed isInline>Собрать</v-button>
		</div>
		<product-tag class="card__tag" isSale ></product-tag>
		<product-tag class="card__tag card__tag--desktop" ></product-tag>
		<!-- <div class="card__tag card__tag--top card__tag--desktop">
			<span class="card__tag-text">
				Хит
			</span>
			<svg-icon name="tag"></svg-icon>
		</div> -->
	</div>
</template>
<script>
	export default {
		props: {
			title: String
		}

	}
</script>
<style lang="scss">
	.card
	{
		position: relative;
		background: $white;
		padding-top: 9px;
		padding-right: 10px;
		padding-bottom: 20px;
		max-width: 600px;
	}
	.card__top{display: flex;}
	.card__content
	{
		padding-top: 17px;
		margin-bottom: 5px;
		p
		{
			position: relative;
			left:-8px;
			text-align: right;
		}
	}
	.card__title
	{
		position: relative;
		left: -8px;
		display: block;
		margin-bottom: 19px;
		font-size: 14px;
		font-weight: 900;
		line-height: 17px;
		text-transform: uppercase;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		white-space: nowrap;
	}
	.card__subtitle
	{
		position: relative;
		left:3px;
		text-transform: uppercase;
		font-size: 22px;
		font-weight: 900;
		line-height: 22px;
		margin: 0;
		margin-bottom: 26px;
	}
	.card__bottom
	{
		display: flex;
		align-items: center;
		padding-left: 50px;
	}
	.card__picture{height: 0;}
	.card__img{clip-path: polygon(0px 0px, 100% 0px, 97.99% 86%, 0px 86%);}
	.v-button.card__button
	{
		height: 40px;
		line-height: 40px;
		padding: 0 28px;
		font-size: 14px;
	}
	.card__title--desktop{display: none;}
	.card__button--inline{display: none;}
	.card__tag--desktop{ display: none; }
	@media (min-width: $tablet)
	{
		.card
		{
			min-width: 270px;
			border-radius:10px;
		}
		.card__bottom{padding-left: 5%;}
		.card__top{flex-direction: column;}
		.card__picture{height: 120px;}
		.card__title,
		.card__subtitle,
		.card__content p
		{
			position: static;
			text-align: left;
			margin-bottom: 5px;
		}
		.card__content{padding-left: 5%;}
		.card__title--mobile{display: none;}
		.card__title--desktop
		{
			display: block;
			padding-left: 5%;
		}
	}
	@media (min-width: $desktop)
	{
		.card
		{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			min-width: unset;
			padding: 0 25px;
			padding-top: 57px;
			padding-bottom: 25px;
		}
		.card__picture{height: unset;}
		.card__img{clip-path: unset;}
		.card__title
		{
			text-align: center;
			font-size: 16px;
			font-weight: 900;
			line-height: 20px;
			padding: 0;
			margin-bottom: 20px;
		}
		.card__picture{margin: 0 auto;}
		.card__content p
		{
			font-size: 12px;
			text-align: center;
			margin-bottom: 12px;
			line-height: 14px;
		}
		.card__subtitle
		{
			margin-bottom: 12px;
			text-align: center;
		}
		.card__content{padding: 0;}
		.card__bottom{padding: 0;}
		.card__button{display: none;}
		.card__button--inline
		{
			display: inline-block;
			font-weight: 500;
		}
		.card__tag{ display: none; }
		.card__tag--desktop{ display: block; }
	}
</style>