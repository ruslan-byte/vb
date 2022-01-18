<template>
	<div class="product-card-mini">
		<div class="product-card-mini__section">
			<img src="~assets/img/products/product-20.png" alt="Борщ">
			<div class="product-card-mini__name">
				<h6 class="product-card-mini__title">Борщ Украинский</h6>
				<div class="product-card-mini__type">Супы</div>
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
		&:first-of-type{margin-bottom: 12px;}
		img
		{
			width: 51px;
			height: 47px;
			object-fit: cover;
			margin-right: 23px;
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
		margin-bottom: 5px;
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
	.product-card-mini__price
	{
		margin: 0;
	}
</style>