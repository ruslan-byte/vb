<template>
	<div class="product-card">
		<div class="product-card__top">
			<img class="product-card__img" src="~assets/img/products/product-1.png" alt="">
			<h6 class="product-card__title">
				Биточки из кролика
			</h6>
			<p class="product-card__text">
				Изысканный обед уже готов! Нежное мясо кролика, пикантная утка, восхитительное вино, натуральный мед.
			</p>
			<div class="product-card__mass">
				<div>
					550 гр.
				</div>
				<div>
					1200 Ккл
				</div>
			</div>
			<div class="product-card__bottom">
				<Price :bonuses="48" :oldPrice="330">378</Price>
				<v-button class="product-card__button" isRed>В корзину</v-button>
			</div>
		</div>
		<div class="product-card__buttons">
			<explanation-button
				class="product-card__info"
				title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
			>
			</explanation-button>
			<favorite-button class="product-card__favorite" :isBold="false"></favorite-button>
		</div>
		<product-tag class="product-card__tag" isSale />
	</div>
</template>

<script>
	export default {
		props:{
			productData: Object,
		},
	}
</script>

<style lang="scss">
	.product-card
	{
		background: $white;
		position: relative;
		padding: 0 15px;
		padding-bottom: 20px;
	    min-height: 189px;
	    overflow: hidden;
	}
	.product-card__top
	{
		padding-left: 90px;
		padding-top: 20px;
	}
	.product-card__img
	{
		position: absolute;
		top:0;
		left: -55.5px;
		width: 145px;
		height: 169px;
		object-fit: cover;
		clip-path:polygon(0px 0px, 100% 0px, 100% 95%, 0px 95%);
	}
	.product-card__title
	{
		color: $font-black;
		font-size: 16px;
		text-align: left;
		margin-bottom: 10px;
		line-height: 16px
	}
	.product-card__text
	{
		margin: 0;
		margin-bottom: 10px;
	}
	.product-card__mass
	{
		display: flex;
		align-items: center;
		height: 28px;
		width: 200px;
		box-sizing: border-box;
		position: relative;
		border-radius: 6px;
		background: #FAFAFA;
		border: 1px solid #E5E8EB;
		margin-bottom: 9px;
		div
		{
			height: min-content;
			width: 50%;
			line-height: 100%;
			text-align: center;
			font-size: 12px;
			font-weight: 400;
			line-height: 15px;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			&:first-of-type{padding-left: 4px;}
		}
		&:before
		{
			content:'';
			position: absolute;
			width: 1px;
			height: 100%;
			left:50%;
			background:#E5E8EB;
		}
	}
	.product-card__bottom
	{
		display: flex;
		align-items: center;
	}
	.product-card__info{margin-right: 9px;}
	.v-button.product-card__button
	{
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		font-weight: 600;
		line-height: 14px;
		padding: 0 20px;
	}
	.product-card__buttons
	{
		position: absolute;
		left:14px;
		bottom: 19px;
		display: flex;
		width: max-content;
	}
	.product-card__favorite
	{
		margin: 0;
		svg
		{
			width: 27px;
			height: 25px;
		}
	}
	@media (min-width: $tablet)
	{
		.product-card
		{
			max-width: 283px;
			padding: 15px 25px 23px 25px;
			box-sizing: border-box;
			border-radius:10px;
		}
		.product-card__img
		{
			display: block;
			margin:0 auto;
			width: 200px;
			height: 180px;
			position: static;
			margin-bottom: 3px;
		}
		.product-card__top{padding: 0;}
		.product-tag.product-card__tag{top:20px; left:25px;}
		.product-card__buttons
		{
			flex-direction: column-reverse;
			align-items:flex-end;
			position: absolute;
			top: 19px;
			right: 23px;
			height: 176px;
			left: unset;
			bottom: unset;
			justify-content: space-between;
		}
		.product-card__info{margin: 0;}
		.product-card__favorite
		{
			margin: 0;
			top:0;
			right: 3px;
			svg
			{
				width: 32px;
				height: 30px;
			}
		}
		.product-card__title
		{
			font-size: 18px;
			line-height: 18px;
			text-align: center;
			margin-bottom: 20px;
		}
		.product-card__text
		{
			font-size: 13px;
			line-height: 15px;
			text-align: center;
			max-width: 233px;
			margin-bottom: 29px;
		}
		.product-card__mass
		{
			width: 100%;
			margin-bottom: 7px;
			div
			{
				font-size: 13px;
				line-height:15,85px;
			}
		}
		.product-card__bottom{justify-content: space-between;}
		.product-card__button{margin-top: 11px;}

	}
	@media (min-width: $widescreen)
	{
		.product-card__bottom
		{
			justify-content: flex-start;
			.price
			{
				margin-right: 32px;
			}
		}
		.v-button.product-card__button{padding: 0 23px;}
	}
</style>