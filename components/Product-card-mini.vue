<template>
	<div class="product-card-mini">
		<div class="product-card-mini__section">
			<img :src="productData.img" alt="Борщ">
			<div class="product-card-mini__name">
				<h6 class="product-card-mini__title">{{ productData.title }}</h6>
				<div class="product-card-mini__type">{{ productData.group }}</div>
			</div>
			<svg-icon class="product-card-mini__cross" name="cross"></svg-icon>
		</div>
		<div class="product-card-mini__section product-card-mini__section--bottom">
			<div class="product-card-mini__section-left">
				<product-counter isSmall class="product-card-mini__counter"></product-counter>
				<span class="product-card-mini__bonus">+48 баллов</span>
			</div>
			<Price class="product-card-mini__price">378</Price>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			productData:{
				type:Object,
				default: {
					img: require('assets/img/products/product-20.png'),
					title: 'Борщ Украинский',
					group: 'Супы'
				}
			}
		}
	}
</script>

<style lang="scss">
	.product-card-mini
	{
		position: relative;
		padding-bottom: 25px;
		margin-bottom: 25px;
		border-bottom: 1px dashed #3D4248;
	}
	.product-card-mini__section
	{
		display: flex;
		&:first-of-type{margin-bottom: 9px;}
		img
		{
			width: 62px;
			height: 50px;
			object-fit: contain;
			margin-right: 19px;
		}
		svg
		{
			height: 12px;
			width: 12px;
		}
	}
	.product-card-mini__cross
	{
		position: absolute;
		right:0;
		top:0;
		cursor:pointer;
	}
	.product-card-mini__title
	{
		font-size: 13px;
		font-weight: 700;
		line-height: 13px;
		color: $font-black;
		text-align: left;
		margin-bottom: 4px;
	}
	.product-card-mini__type
	{
		color:$gray6;
		font-size: 12px;
		font-weight: 400;
		line-height: 15px;
	}
	.product-card-mini__bonus
	{
		color: $green;
		font-family: Montserrat;
		font-size: 12px;
		font-weight: 500;
		line-height: 25px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.product-card-mini__counter{margin-right: 20px;}
	.product-card-mini__section--bottom
	{
		justify-content: space-between;
		align-items: center;
	}
	.product-card-mini__section-left{display: flex;}
	.product-card-mini__price{margin: 0;}
	@media (min-width: $tablet)
	{
		.product-card-mini__price
		{
			width: 44px;
			.price__currency
			{
				font-size: 13px;
				line-height: 16px;
				top: -3px;
			}
			.price__number
			{
				font-size: 18px;
				line-height: 22px;
				margin-right: 4px;
			}
		}
		.product-card-mini__section img{margin-right: 16px;}
		.product-card-mini__section--bottom{padding-right: 4px;}
		.product-card-mini__bonus{line-height: 28px;}
		.product-card-mini__counter{margin-right: 17px;}
		.product-card-mini{padding-bottom: 22px;}
	}
</style>