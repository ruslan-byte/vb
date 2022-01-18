<template>
	<div class="price">
		<del class="price__old-price" v-if="oldPrice">{{ oldPrice }} ₽</del>
		<span class="price__number"><slot /></span>
		<span class="price__currency"> ₽ </span>
		<div class="price__bonus" v-if="bonuses" >+{{ bonuses }} баллов</div>
	</div>
</template>

<script>
	export default {
		props:{
			bonuses: Number,
			oldPrice: Number,
		},
	}
</script>

<style lang="scss">
	.price
	{
		font-size: 18px;
		font-weight: 700;
		line-height: 15px;
		margin-right: 14px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		white-space: nowrap;
	}
	.price__bonus
	{
		font-size: 11px;
		font-weight: 500;
		line-height: 13px;
		color:$green;
	}
	.price__currency
	{
		position: relative;
		font-size: 13px;
		top:-4px;
	}
	.price__old-price
	{
		text-decoration: line-through;
		display: block;
		color: #8B8E91;
		font-size: 12px;
		font-weight: 500;
	}
	@media (min-width: $desktop)
	{
		.price{margin-right: 35px;}

	}
	@media (min-width: $desktop)
	{
		.price__bonus
		{
			font-size: 13px;
			font-weight: 500;
			line-height: 16px;
		}
		.price__currency
		{
			font-size: 17px;
			left: -5px;
			top: -6px;
		}
		.price__number
		{
			font-size: 24px;
			font-weight: 700;
			line-height: 24px;
		}
		.price__old-price
		{
			text-decoration: line-through;
			font-size: 14px;
			font-weight: 500;
			line-height: 16px;
			position: relative;
			left: 2px;
		}
	}
</style>
