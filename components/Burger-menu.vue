<template>
	<div class="burger-menu">
		<region-select />
		<NuxtLink :to="$store.state.routes.map" class="burger-menu__coverage">
			География покрытия
		</NuxtLink>
		<v-button class="burger-menu__button"> Войти </v-button>
		<ul class="burger-menu__links">
			<li v-for="link of this.$store.state.header.linksBurgerMenu" :key="link.id">
				<NuxtLink class="burger-menu__link" :to="link.url"> {{link.linkTitle}} </NuxtLink>
			</li>
		</ul>
		<numbers class="burger-menu__numbers" />
		<v-button class="burger-menu__order-call">Заказать звонок</v-button>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="scss">
	.burger-menu__link
	{

		display: block;
		color: $font-black;
		font-weight: 700;
		font-family: Montserrat;
		font-size: 12px;
		line-height: 12px;
		letter-spacing: 1px;
		text-transform: uppercase;
		padding-top: 16px;
		padding-bottom: 16px;
		border-bottom: 1px solid #E3E4E4;
		text-decoration: none;
		text-align: center;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		&.nuxt-link-active,
		&:hover{ color: $green; }
	}
	.burger-menu__links
	{
		padding: 0;
		margin: 0;
		text-decoration: none;
		margin-bottom: 16px;
		list-style: none;
	}
	.burger-menu__button.v-button
	{
		font-size: 13px;
		border-radius: unset;
		width: 100%;
		text-transform: uppercase;
		font-weight: 700;
	}
	.burger-menu__coverage
	{
		display: block;
		width: max-content;
		margin: 0 auto;
		padding-top: 16px;
		padding-bottom: 16px;
		color: $green;
		text-decoration: none;
		font-family: Montserrat;
		font-size: 14px;
		font-weight: 400;
		text-align: center;
		&:hover{text-decoration: underline;}
	}
	.burger-menu__numbers
	{
		width: max-content;
		margin: 0 auto;
		margin-bottom: 16px;
		.numbers__number a
		{
			font-size: 16px;
			font-weight: 700;
			line-height: 20px;
		}

	}
	.burger-menu__order-call.v-button
	{
		display: block;
		background-color: $green-white;
		color:#40AE49;
		height: 40px;
		line-height: 40px;
		width: 100%;
		max-width: 235px;
		font-size: 14px;
		font-weight: 500;
		line-height: 14px;
		text-transform: none;
		margin:0 auto;
		white-space: nowrap;
		&:hover{color:$green-white;}
	}
</style>