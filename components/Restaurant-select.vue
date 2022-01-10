<template>
	<div class="restaurant-select">
		<div class="restaurant-select__main" @click="isOptionShow =! isOptionShow">
			<svg-icon class="restaurant-select__icon restaurant-select__icon--tray" name="tray"></svg-icon>
			<span
				class="restaurant-select__name"
			>
				«{{ activeName }}»
			</span>
			<svg-icon class="restaurant-select__icon restaurant-select__icon--info" name="info"></svg-icon>
			<svg-icon
				class="restaurant-select__icon restaurant-select__icon--arrow"
				name="arrow-down-green"
				:class="{'restaurant-select__icon--active':isOptionShow}"
			/>
		</div>
		<ul class="restaurant-select__options-list" v-if="isOptionShow">
			<li class="restaurant-select__option" v-for="number of 10" :key="number">
				<span class="restaurant-select__title" @click="activeName = `Pесторан ${number}`,isOptionShow = false">
					Pесторан {{number}}
				</span>
				<span class="restaurant-select__subtitle">
					у.Ленина {{number}}
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data()
		{
			return {
				isOptionShow: false,
				activeName: 'Название ресторана',
			}
		},
	}
</script>

<style lang="scss">
	.restaurant-select{position: relative;}
	.restaurant-select__icon
	{
		width: 29px;
		height: 25px;
		transition: transform .3s;
		&--tray,
		&--info{margin-right: 11px;}
		&--arrow{width: 11px;}
		&--active{transform: rotate(180deg);}
	}
	.restaurant-select__main
	{
		height: 25px;
		line-height: 25px;
		cursor: pointer;
		user-select: none;
	}
	.restaurant-select__name
	{
		line-height: 25px;
		vertical-align: top;
		font-size: 18px;
		font-weight: 500;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.restaurant-select__options-list
	{
		list-style:none;
		padding: 0;
		margin: 0;
		background: $white;
		border-radius: 10px;
		position: absolute;
		z-index: 10;
		width: 100%;
		min-height: 62px;
		max-height: 248px;
		overflow: auto;
		top:56px;
	}
	.restaurant-select__option
	{
		min-height: 32px;
		padding-top: 20px;
		padding-bottom: 10px;
		padding-left: 40px;
		vertical-align: middle;
		cursor: pointer;
		&:hover{ background: $green-white2;}
	}
	.restaurant-select__title
	{
		display: block;
		font-size: 18px;
		font-weight: 500;
		line-height: 22px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.restaurant-select__subtitle
	{
		font-size: 16px;
		font-weight: 500;
		line-height: 22px;
		color: $gray;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>