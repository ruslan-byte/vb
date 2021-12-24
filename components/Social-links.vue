<template>
	<ul class="social-links">
		<li v-for="link of $store.state.footer.socialLinks" :key="link.id">
			<a class = "social-links__link" :href="link.url"> <svg-icon :name="link.svgName"></svg-icon></a>
		</li>
	</ul>
</template>

<script>
	export default {
	}
</script>

<style lang="scss">
	.social-links
	{
		list-style: none;
		padding: 0;
		margin: 0;
		width: max-content;
		li
		{
			display: inline-block;
			margin-right: 8px;
			&:last-child{margin-right: unset;}
		}
	}
	.social-links__link
	{
		position: relative;
		display: inline-block;
		width: 40px;
		height: 40px;
		box-shadow: inset 0 0 0 1px $gray2;
		border-radius: 50%;
		svg
		{
			position: absolute;
			top: calc(50% - 10px);
			left: calc(50% - 10px);
			width: 20px;
			height: 20px;
			fill: $gray3;
		}
		&:hover{filter: brightness(1.4);}
	}
</style>