<template>
	<div class="index">
		<div class="container">
			<p class="index__subtitle">
				Время заказывать еду
			</p>
			<h1>Доставка вкусных обедов, с плиты за 30 минут!</h1>
			<search-place />
		</div>
	</div>
</template>

<script>
export default {}
</script>
<style lang="scss">
	.index
	{
		position: relative;
		padding-top: 10px;
		padding-bottom: 40px;
		background: url("assets/img/index-page-background.png") no-repeat;
		background-position: 92% 0;
		background-size: 1175px;
	}
	.index__subtitle
	{
		font-size: 16px;
		line-height: 16px;
		color: $gray;
	}
</style>