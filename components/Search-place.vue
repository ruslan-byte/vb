<template>
	<form class="search-place">
		<div class="search-place__icon"><svg-icon name="red-arrow" /></div>
		<input class="search-place__field" type="text" placeholder="Укажите адрес доставки">
		<v-button class="search-place__button" isIcon><svg-icon name="arrow" /></v-button>
	</form>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
	.search-place
	{
		position: relative;
		height: 50px;
	}
	.search-place__field
	{
		height: 100%;
		width: calc(100% - 102px);
		border: unset;
		border-radius: 10px;
		padding: 0;
		padding-left: 51px;
		padding-right: 51px;
		font-family: Montserrat;
		font-size: 14px;
		font-weight: 500;
		box-shadow:inset 0 0 0 1px #E3E4E4;
		&:focus
		{
			outline: 2px solid $green;
			box-shadow: 0px 4px 30px rgba(64, 174, 73, 0.44);
		}
	}
	.search-place__icon
	{
		position: absolute;
		top:14px;
		left:13px;
		svg
		{
			width: 25px;
			height: 24px;
		}
	}
	.search-place__button
	{
		position: absolute;
		right: 6.5px;
		top: 6px;
	}
	@media (min-width: $desktop)
	{
		.search-place
		{
			height: 80px;
		}
		.search-place__field
		{
			padding-left: 81px;
			padding-right: 70px;
			width: calc(100% - 81px - 70px);
			font-size: 18px;
		}
		.search-place__icon
		{
			top: 30px;
			left: 27px;
			svg
			{
				width: 23px;
				height: 22px;
			}
		}
		.search-place__button.v-button
		{
			width: 60px;
			height: 60px;
			top:10px;
			right:8.5px;
		}
	}
</style>