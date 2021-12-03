<template>
	<nav class="nav-list">
		<ul>
			<li v-for="link of links" :key="link.id">
				<NuxtLink class="nav-list__link" :to="link.url">{{ link.linkTitle }}</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		props:{ links:Array, }
	}
</script>

<style lang="scss">
	.nav-list
	{
		height: 31px;
		overflow-x: auto;
		overflow-y:hidden;
		-ms-overflow-style: none;
		overflow: -moz-scrollbars-none;
		&::-webkit-scrollbar { width: 0; }
		scrollbar-width: none;
		ul
		{
			list-style: none;
			white-space: nowrap;
			padding: 0;
			margin: 0;
			height: inherit;
		}
		li
		{
			display: inline-block;
			height: inherit;
			margin-right: 20px;
		}
	}
	.nav-list__link
	{
		display: block;
		height: inherit;
		color:$font-black;
		text-decoration: none;
		text-transform: uppercase;
		font-weight: 600;
		font-size: 11px;
		line-height: 11px;
		letter-spacing: 1px;
		&.nuxt-link-active,
		&:hover
		{
			color:$green;
		}
	}
</style>