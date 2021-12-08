<template>
	<button
		class="v-button"
		:class="{'v-button--inline' : isInline,'v-button--red': isRed, 'v-button--icon': isIcon}"
	>
		<slot></slot>
	</button>
</template>

<script>
	export default {
		props:{
			isInline: Boolean,
			isRed: Boolean,
			isIcon: Boolean,
		}
	}
</script>

<style lang="scss">
	.v-button
	{
		height: 50px;
		line-height: 50px;
		background: $green;
		cursor: pointer;
		color:$white;
		border: none;
		border-radius: 60px;
		padding: 0 34px;
		font-size: 16px;
		font-weight: 500;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		&:hover{background: $green-hover;}
	}
	.v-button--red
	{
		background: #FD470E;
		&:hover{background: #FF6A3A;}
	}
	.v-button--inline
	{
		box-shadow: inset 0 0 0 1px #FD470E;
		background: transparent;
		color:#FD470E;
		&:hover{
			color: $white;
			background: #FD470E;
		}
	}
	.v-button--icon
	{
		padding: 0;
		width: 40px;
		height: 40px;
	}
</style>