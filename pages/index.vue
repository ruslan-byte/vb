<template>
	<div class="index">
		<div class="container">
			<div class="index__title">
				<div class="index__left">
					<p class="index__subtitle">Время заказывать еду</p>
					<h1>Доставка вкусных обедов, с плиты за 30 минут!</h1>
				</div>
				<div class="index__right">
					<p class="index__subtitle index__subtitle--little">
						Всего два слова: вкусно и быстро.
					</p>
					<p class="index__subtitle index__subtitle--little">
						Каждую неделю с 12:00 до 16:00 вас ждёт новое вкусное меню!
					</p>
				</div>
			</div>
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
		&--little{display: none;}
	}
	@media (min-width: $desktop)
	{
		.index
		{
			padding-top: 38px;
			background-size: cover;
		}
		.index__subtitle
		{
			font-size: 24px;
			line-height: 24px;
			margin: 0;
			margin-bottom: 35px;
		}
		.index__title{max-width: 40%;}
	}
	@media (min-width: $widescreen)
	{
		.index__title
		{
			display: flex;
			max-width: unset;
			gap:308px;
		}
		.index__subtitle--little
		{
			display: block;
			font-size: 16px;
			line-height: 22px;
			margin-bottom: 18px;
			max-width: 290px
		}
		.index__left{max-width: 612px;}
		.index__right{padding-top: 13px;}
	}
</style>