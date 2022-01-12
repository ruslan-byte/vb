<template>
	<div class="lanch-card-empty">
		<div class="lanch-card-empty__top">
			<h6 class="lanch-card-empty__title">Собери свой ланч</h6>
			<img src="~assets/img/empty-container.png" alt="ланч">
			<p class="lanch-card-empty__name"><slot /></p>
		</div>
		<NuxtLink to="#" class="lanch-card-empty__link">Любые блюда на выбор</NuxtLink>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="scss">
	.lanch-card-empty
	{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: $white;
		padding-top: 35px;
		padding-bottom: 40px;
		border-radius: 10px;
		img
		{
			display: block;
			margin: 0 auto;
			margin-bottom: 20px;
		}
	}
	.lanch-card-empty__title
	{
		color:$font-black;
		font-size: 18px;
		line-height: 18px;
		margin-bottom: 27px;
	}
	.lanch-card-empty__name
	{
		width: max-content;
		font-size: 18px;
		font-weight: 700;
		line-height: 18px;
		color: $font-black;
		margin:0 auto;
	}
	.lanch-card-empty__link
	{
		display: block;
		width: max-content;
		margin:0 auto;
		color: $green;
		text-decoration: none;
		font-size: 13px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		&:hover
		{
			text-decoration: underline;
		}
	}
</style>