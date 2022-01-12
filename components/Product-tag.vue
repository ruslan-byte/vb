<template>
	<div class="product-tag__tag" :class="{'product-tag__tag--sale': isSale, 'product-tag__tag--top': !isSale }">
		<span class="product-tag__tag-text">
			{{ getTagText }}
		</span>
		<svg-icon name="tag"></svg-icon>
	</div>
</template>

<script>
	export default {
		props:{isSale:Boolean},
		computed:{
			getTagText(){
				return (this.isSale)? 'Sale' : 'Хит'
			}
		}
	}
</script>

<style lang="scss">
	.product-tag__tag
	{
		width: 47px;
		height: 20px;
		border-radius: 3px;
		text-transform: uppercase;
		position: absolute;
		top:20px;
		left:35px;
		svg
		{
			position: absolute;
			width: 100%;
			height: 100%;
		}
		&--sale svg{fill:$red;}
		&--top svg{fill:$green;}
	}
	.product-tag__tag-text
	{
		position: absolute;
		left:7px;
		right: 7px;
		top:4px;
		bottom:4px;
		z-index: 2;
		color: $white;
		font-size: 12px;
		font-weight: 700;
		line-height: 12px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}
	@media (min-width: $tablet)
	{
		.product-tag__tag{top: 30px;}
	}
	@media (min-width: $desktop)
	{
		.product-tag__tag{top:20px;}
		.product-tag__tag
		{
			left:25px;
		}
	}
</style>