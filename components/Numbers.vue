<template>
	<div class="numbers">
		<a class="numbers__icon" :href="`tel:${$store.state.header.contact.number}`">
			<v-button isIcon>
				<svg-icon :name="buttonIconName"/>
			</v-button>
		</a>
		<div class="numbers__number">
			<a :href="`tel:${$store.state.header.contact.number}`">{{ getNumberInTextForm }}</a>
			<span>{{ $store.state.header.contact.subscription }}</span>
		</div>
	</div>
</template>

<script>
	export default
	{
		props: {
			buttonIconName: {type: String, default: "phone"},
		},
		computed: {
			getNumberInTextForm()
			{
				let chars = '' + this.$store.state.header.contact.number;
				return `${chars[0]} ${chars.slice(1,4)} ${chars.slice(4,7)}-${chars[7]}-${chars.slice(8,11)}`
			}
		}
	}
</script>

<style lang="scss">
	.numbers{display: flex; white-space: nowrap;}
	.numbers__icon
	{
		display: inline-block;
		margin-right: 13px;
		vertical-align: top;
		svg
		{
			width: 20px;
			height: 20px;
		}
	}
	.numbers__number
	{
		display: inline-block;
		vertical-align: bottom;
		a
		{
			display: block;
			height: 17px;
			font-size: 18px;
			font-weight: 700;
			color: $font-black;
			text-decoration: none;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			&:hover{text-decoration: underline;}
		}
		span
		{
			color: $gray;
			font-size: 13px;
			font-weight: 400;
			line-height: 16px;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}
	}
	@media (min-width: $widescreen)
	{
		.numbers__icon{ margin-right: 9px;}
	}
</style>