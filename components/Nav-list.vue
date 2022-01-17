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
		position:relative;
		height: 24px;
		overflow: hidden;
		width: 100%;
		max-width: 1100px;
		ul
		{
			list-style: none;
			white-space: nowrap;
			padding: 0;
			margin: 0;
			height: inherit;
			overflow-x: auto;
			overflow-y:hidden;
			-ms-overflow-style: none;
			overflow: -moz-scrollbars-none;
			&::-webkit-scrollbar { width: 0; }
			scrollbar-width: none;
		}
		li
		{
			display: inline-block;
			height: inherit;
			margin-right: 20px;
		}
		li:last-child{margin-right: 0;}
		&::after
		{
			content:"";
			position: absolute;
			right:-15px;
			top:0;
			height: 100%;
			width: 36px;
			background: linear-gradient(270deg, #FFFFFF 48.15%, rgba(255, 255, 255, 0) 175.93%);;
		}
	}
	.nav-list__link
	{
		display: inline-block;
		height: 100%;
		color:$font-black;
		text-decoration: none;
		text-transform: uppercase;
		font-weight: 600;
		font-size: 11px;
		line-height: 20px;
		letter-spacing: 1px;
		vertical-align: top;
		&.nuxt-link-active,
		&:hover
		{
			color:$green;
		}
	}
	@media (min-width: $desktop)
	{
		.nav-list{height: 70px;}
		.nav-list__link
		{
			line-height: 70px;
			font-size: 14px;
			font-weight: 700;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			&.nuxt-link-active::after
			{
				content:"";
				display: block;
				position: relative;
				top:-5px;
				height: 5px;
				background: $green;
				width: 100%;
			}
		}
	}
	@media (min-width: $widescreen)
	{
		.nav-list li {margin-right: 39.5px;}
	}
</style>