<template>
	<div class="header-top">
		<div class="container">
			<div class="header-top__region">
				<span>Ваш регион доставки:</span>
				<button class="header-top__button">
					Москва
					<span class="header-top__arrow-down">
						<svg-icon name="arrow-down-green" />
					</span>
				</button>
			</div>
			<div class="header-top__delivery-time">
				<span class="header-top__watch">
					<svg-icon name="watch" />
				</span>
				53 мин. Среднее время доставки
			</div>
			<div class="header-top__coverage">
				География покрытия
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="scss">
.header-top
{
	background-color:$font-black;
	font-size: 14px;
	line-height: 10px;
	padding-left: 23px;
	color:$white;
	font-family: Montserrat;
	font-weight: 400;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	.container
	{
		display: flex;
		height: 40px;
		align-items: center;
	}
}
.header-top__arrow-down svg
{
	width: 11px;
	height: 8px;
}
.header-top__watch
{
	display: inline-block;
	vertical-align: middle;
	margin-right: 6px;
	svg
	{
		width: 22px;
		height: 22px;
	}
}
.header-top__button
{
	background: none;
	border: none;
	color: $white;
	cursor: pointer;
	letter-spacing: .5px;
}
.header-top__region
{
	font-size: 0;
	margin-right: 35px;
	span{font-size: 14px;}
}
.header-top__delivery-time{margin-right: 42px;}
</style>