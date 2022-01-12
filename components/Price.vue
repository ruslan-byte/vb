<template>
	<div class="price">
		<span class="price__number"><slot /></span>
		<span class="price__currency"> ₽ </span>
		<div class="price__bonus">+{{ bonuses }} баллов</div>
	</div>
</template>

<script>
	export default {
		props:{
			bonuses: Number,
		},
	}
</script>

<style lang="scss">
	.price
	{
		padding-top: 5px;
		font-size: 18px;
		font-weight: 700;
		line-height: 15px;
		margin-right: 14px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
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
	}
</style>
