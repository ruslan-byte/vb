<template>
	<button
		class="favorite-button"
		:class="{'favorite-button--active': isFavorite}"
		@click="isFavorite = !isFavorite"
	>
		<svg-icon :name="getSvg" />
	</button>
</template>

<script>
	export default {
		data(){
			return{
				isFavorite: false,
			}
		},
		props:{
			isBold: {
				type:Boolean,
				default: true,
			},
		},
		computed:{
			getSvg() {
				return (this.isBold)? "heart-bold" : "heart";
			}
		}
	}
</script>

<style lang="scss">
	.favorite-button
	{
		background: transparent;
		border: none;
		cursor: pointer;
		height: min-content;
		padding: 0;
		margin-right: 30px;
		font-size: 0;
		svg
		{
			width: 26px;
			height: 24px;
			fill:transparent;
		}
		&--active svg
		{
			fill: $green;
		}
	}
	@media (min-width: $desktop)
	{
		.favorite-button{top:20px;}
		.favorite-button
		{
			position: absolute;
			right: 25px;
			margin: 0;
			height: 27px;
			width: 30px;
			svg
			{
				width: 33px;
				height: 31px;
			}
		}
	}
</style>