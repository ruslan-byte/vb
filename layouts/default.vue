<template>
	<div class="layout layout--default" :class="{'layout--is-burger-open':$store.state.header.isBurgerMenuShow}">
		<div class="layout__main" :class="{'layout__main--menu-open' : $store.state.header.isBurgerMenuShow}">
			<Header />
			<Nuxt />
			<Footer />
		</div>
		<div class="burger-menu" v-if="$store.state.header.isBurgerMenuShow">
			<burger-menu />
		</div>
	</div>
</template>
<style lang="scss">
	.layout--is-burger-open{ display: flex; }

	.layout__main
	{
		transition: left .3s;
		left: 0;
		background: $white;
	}
	.layout__main--menu-open
	{
		width: 100vw;
		position: fixed;
		left: -267px;
		box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.15);
		min-height: 100vh;
		z-index: 5;
	}
	.burger-menu
	{
		position:absolute;
		width: 100%;
		max-width: 267px;
		right: 0;
		z-index: 4;
	}
</style>
