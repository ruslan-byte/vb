<template>
	<div class="menu-select">
		<span class="menu-select__title">Меню:</span>
		<div class="menu-select__selector">
			<button
				class="menu-select__button"
				:class="{'menu-select__button--active' : state === 'today'}"
				@click="setState('today')"
			>
				на сегодня
			</button>
			<button
				class="menu-select__button"
				:class="{'menu-select__button--active' : state === 'tomorrow'}"
				@click="setState('tomorrow')"
			>
				на завтра
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		props:{ state: String },
		methods:{
			setState(newState)
			{
				this.$emit('change', newState);
			},
		},
	}
</script>

<style lang="scss">
	.menu-select__title
	{
		font-family: Montserrat;
		font-size: 18px;
		font-weight: 600;
		line-height: 50px;
		vertical-align: bottom;
		margin-right:3px
	}
	.menu-select__selector
	{
		position: relative;
		display: inline-block;
		height: 36px;
		width: 220px;
		background: #F1F1F1;
		border-radius: 60px;
	}
	.menu-select__button
	{
		transition: all .3s ease;
		position: absolute;
		left: 0;
		z-index: 1;
		width: 120px;
		height: 100%;
		background: transparent;
		border: none;
		border-radius: 60px;
		cursor: pointer;
		text-transform: uppercase;
		font-size: 11px;
		font-weight: 600;
		text-align: left;
		padding-left: 19px;
		&:hover{ color: $green;}
		&:last-child
		{
			left:unset;
			right: 0;
			padding-left: 23px;
			width: 110px
		}
		&--active
		{
			color: $white;
			background: $green;
			z-index: 2;
			&:hover{ color: $white;}
			&::after
			{
				content:"";
				position:absolute;
				display: block;
				width: 9px;
				height: 9px;
				transform: rotate(45deg);
				background: inherit;
				left: calc(50% - 4.5px);
				bottom:-2px;
			}
		}
	}
	@media (min-width: $widescreen)
	{
		.menu-select__title{font-size: 24px;}
		.menu-select__selector
		{
			width: 340px;
			height: 45px;
		}
		.menu-select__button
		{
			width: 178px;
			font-size: 14px;
			padding-left: 37px;
			&:last-child
			{
				padding-left: 39px;
				width: 172px;
			}
			&--active::after
			{
				bottom: -4.5px;
			}
		}
	}
</style>