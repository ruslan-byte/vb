<template>
	<form class="search-place" :class="{ 'search-place--menu': isMenuSearch }">
		<div class="search-place__icon"><svg-icon name="red-arrow" /></div>
		<input class="search-place__field" type="text" placeholder="Укажите адрес доставки">
		<v-button class="search-place__button" isIcon>
			<svg-icon class="search-place__svg search-place__svg--arrow" name="arrow-2" />
			<svg-icon class="search-place__svg search-place__svg--loupe" name="loupe" />
		</v-button>
		<NuxtLink class="search-place__link" to="#">На карте</NuxtLink>
		<restaurant-select class="search-place__restaurant-select"></restaurant-select>
	</form>
</template>

<script>
	export default {
		props:{isMenuSearch:Boolean}
	}
</script>

<style lang="scss">
	.search-place
	{
		position: relative;
		height: 50px;
		box-shadow: 0 9px 16px 0 #E8E8E8;
		border-radius: 10px;
	}
	.search-place__link{display: none;}
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
			&~ .v-button .search-place__svg--loupe{display: none;}
			&~ .v-button .search-place__svg--arrow{display: inline-block;}
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
	.search-place__restaurant-select{display: none;}
	.search-place--menu .search-place__link
	{
		display: inline;
		text-decoration: none;
		color:$green;
		text-align: right;
		font-size: 12px;
		&:hover{color:$green-hover;}
		position: absolute;
		right: 0px;
		bottom:-17px;
	}
	.search-place__svg--arrow{display: none;}
	.search-place__button .search-place__svg
	{
		width: 18px;
		height: 18px;
	}
	@media (min-width: $desktop)
	{
		.search-place--menu
		{
			.search-place__restaurant-select
			{
				display: block;
				position: absolute;
				right: 12%;
				top: 33%;
			}
			.search-place__field
			{
				padding-right: 55%;
				width: calc(45% - 81px);
			}
			&:before
			{
				content:'';
				position: absolute;
				right: 45%;
				display: block;
				width: 1px;
				height: 100%;
				background:$borderWhite;
			}
			.search-place__link
			{
				display: inline;
			    right: 47%;
				bottom: 28px;
				font-weight: 500;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}
		}
		.search-place
		{
			height: 80px;
		}
		.search-place__field
		{
			padding-left: 78px;
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
	@media (min-width: $widescreen)
	{
		.search-place--menu
		{
			.search-place__restaurant-select
			{
				right: 255px;
				top: 28px;
			}
			.search-place__field
			{
				padding-right: 50%;
				width: calc(50% - 76px);
				color:$font-black;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}
			&:before{right: 613px;}
			.search-place__link
			{
				right: 643px;
				font-size: 16px;
			}
		}
	}
</style>