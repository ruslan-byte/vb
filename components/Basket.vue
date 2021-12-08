<template>
	<NuxtLink class="basket" :to="href" >
		<div class="basket__favorite">
			<svg-icon name="heart" />
			<span>{{favoriteCound}}</span>
		</div>
		<div class="basket__product-count">
			<span>{{ allCount }}</span>
		</div>
		<div class="basket__titile">
			<span>корзина</span>
			на {{ sumPrice }}₽
		</div>

	</NuxtLink>
</template>

<script>
	export default {
		props:
		{
			sumPrice:
			{
				type:Number,
				default:1840
			},
			allCount:{type: Number, default: 5},
			favoriteCound: {type: Number, default: 2},
			href:{type: String, default: "#"}
		},
	}
</script>

<style lang="scss">
	.basket
	{
		display: block;
		color:$font-black;
		text-decoration: none;
		white-space: nowrap;
		padding-top:4px
	}
	.basket__favorite
	{
		display: inline-block;
		position: relative;
		width: 37px;
		height: 32px;
		margin-right: 8px;
		svg
		{
			width: 40px;
			height: 34px;
		}
		span
		{
			position: absolute;
			left:0;
			width: 100%;
			height: 100%;
			vertical-align: middle;
			text-align: center;
			font-size: 15px;
			font-weight: 500;
			line-height: 32px;
		}
	}
	.basket__product-count
	{
		display: inline-block;
		position: relative;
		height: 35px;
		width: 35px;
		border-radius: 50%;
		background: $red;
		margin-right: 3px;
		&:hover{background: $red-hover;}
		span
		{
			position: absolute;
			display: inline-block;
			width: 100%;
			text-align: center;
			font-size: 15px;
			font-weight: 500;
			line-height: 35px;
			color:$white;
		}
	}
	.basket__titile
	{
		display: inline-block;
		font-size: 14px;
		font-weight: 400;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		span
		{
			display: block;
			font-size: 13px;
			font-weight: 700;
			text-transform: uppercase;
		}
	}
</style>