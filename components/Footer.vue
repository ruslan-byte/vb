<template>
	<footer class="footer ">
		<div class="container footer__container">
			<div class="footer__top">
				<nav class="footer__nav">
					<h6>Вкусно и Быстро</h6>
					<ul class="footer__links">
						<li v-for="link of $store.state.footer.links" :key="link.id">
							<NuxtLink class="footer__link" :to="link.url">{{ link.linkTitle }}</NuxtLink>
						</li>
					</ul>
				</nav>
				<div class="footer__section">
					<div class="footer__social">
						<h6>Онлайн сервисы</h6>
						<social-links />
						<NuxtLink class="footer__link" to="#">Написать нам</NuxtLink>
					</div>
					<div class="footer__contact">
						<h6>Мы на связи</h6>
						<numbers buttonIconName="phone-2"/>
						<v-button class="footer__feedback">Заказать звонок</v-button>
					</div>
				</div>
			</div>
			<div class="footer__bottom">
				<svg-icon class="footer__logo" name="logo" />
				<div class="footer__column">
					<div class="footer__company-data">
						<div class="footer__codyright">
							© АО «Вкусно и Быстро», 2010-2019
						</div>
						<div class="footer__subtitle">
							Любое использование материалов сайта без разрешения запрещено.
						</div>
					</div>
					<NuxtLink to="#" class="footer__user-agreement">Пользовательское соглашение</NuxtLink>
				</div>
				<div class="footer__signature">Сделано - АО «Вкусно и Быстро»</div>
			</div>
		</div>
	</footer >
</template>

<script>
	export default {
	}
</script>

<style lang="scss">
	.footer
	{
		background: $font-black;
		padding-top: 25px;
		padding-bottom: 40px;
	}
	.footer__social ul{margin: 0 auto;}
	.footer__nav h6{margin-bottom: 29px;}
	.footer__links
	{
		list-style: none;
		margin: 0;
		padding: 0;
		margin-bottom: 48px;
		li
		{
			width: max-content;
			margin:0 auto;
			margin-bottom: 11px;
		}
	}
	.footer__link
	{

		display: inline;
		color: $white;
		font-family: Montserrat;
		font-size: 16px;
		line-height: 16px;
		text-decoration: none;
		text-align: center;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		&:hover{text-decoration: underline;}
	}
	.footer__social
	{
		margin-bottom: 49px;
		h6{margin-bottom: 30px;}
		.social-links{margin-bottom: 21px;}
		.footer__link
		{
			display: block;
			width: max-content;
			margin: 0 auto;
		}
	}
	.footer__contact
	{
		display: block;
		width: max-content;
		margin: 0 auto;
		h6{ margin-bottom: 30px; }
		.numbers__number span
		{
			font-family: Lato;
			font-size: 14px;
			line-height: 17px;
			color: $white;
		}
		.numbers__number a {margin-bottom: 6px;color: $white;}
		.numbers {margin-bottom: 17px;}
		.numbers__icon
		{
			margin-right: 10px;
			svg
			{
			    width: 25px;
			    height: 26px;
			}
		}
		.footer__feedback.v-button
		{
			margin-left: 12px;
			padding-left: 30px;
			padding-right: 30px;
			height: 40px;
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: 17px;
			background: transparent;
			border:1px solid $gray4;
			color: $gray5;
		}
	}
	.footer__top
	{
		border-bottom: 1px solid $gray;
		padding-bottom: 50px;
	}
	.footer__bottom{padding-top: 8px;}
	.footer__logo
	{
		display: block;
		width: 170px;
		height: 100px;
		margin: 0 auto;
		margin-bottom: 4px;
	}
	.footer__codyright
	{
		margin: 0 auto;
		color: $white;
		font-size: 14px;
		font-weight: 400;
		line-height: 17px;
		margin-bottom: 18px;
	}
	.footer__subtitle
	{
		margin-bottom: 30px;
		font-size: 12px;
		line-height: 15px;
		color: $gray2;
	}
	.footer__user-agreement
	{
		display: block;
		width: min-content;
		color:$white;
		text-decoration: none;
		margin: 0 auto;
		margin-bottom: 38px;
		&:hover{text-decoration: underline;}
	}
	.footer__signature{color: $gray3;}
	.footer__user-agreement,
	.footer__signature,
	.footer__codyright,
	.footer__subtitle
	{
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}
	@media (min-width: $tablet)
	{
		.footer h6{text-align: left;}
		.footer__social .social-links,
		.footer__social .footer__link,
		.footer__contact,
		.footer__logo,
		.footer__user-agreement,
		.footer__links li
		{
			margin-right: 0;
			margin-left: 0;
			text-align: left;
		}
		.footer__section{columns: 2;}
		.footer__links
		{
			max-height: 123px;
			columns: 2;
		}
		.footer__codyright{text-align: left;}
		.footer__subtitle{text-align: left;}
		.footer__signature{text-align: left;}
		.footer__subtitle,
		.footer__user-agreement{margin: 0;}
		.footer__subtitle, .footer__user-agreement{margin-bottom: 10px;}
	}
	@media (min-width: $desktop)
	{
		.footer
		{
			padding-bottom: 0;
			padding-top: 64px;
			h6{margin-bottom: 39px;}
		}
		.footer__container
		{
			padding: 0 32px;
			max-width: 1515px;
		}
		.footer__top
		{
			display: flex;
			padding-bottom: 29px;
		}
		.footer__links
		{
			max-height: unset;
			columns: unset;
			margin: 0;
			li { margin-bottom: 20px; }
			li:last-child { margin-bottom: 0; }
		}
		.footer__nav{margin-right: 114px;}
		.footer__social
		{
			margin-right: 73px;
			.social-links{margin-bottom: 37px;}
		}
		.footer__contact .numbers{margin-bottom: 38px;}
		.footer__contact .numbers__number span{letter-spacing: -0.1px}
		.footer__bottom
		{
			display: flex;
			padding-top: 32px;
			padding-bottom: 39px;
		}
		.footer__column
		{
			max-width: 282px;
			margin-right:39px;
		}
		.footer__logo
		{
			margin-right: 160px;
			height: 54px
		}
		.footer__subtitle
		{
			font-size: 14px;
			margin-bottom: 19px;
		}
		.footer__codyright{ margin-bottom: 11px; }
		.footer__signature{ color: $white; }
		.footer__contact .footer__feedback.v-button
		{
			margin: 0;
		}
	}
	@media (min-width: $widescreen)
	{
		.footer{padding-top: 60px;}
		.footer__top{padding-bottom: 48px;}
		.footer__links
		{
			columns: 2;
			li{margin-bottom: 21px;}
		}
		.footer__nav
		{
			width: 601px;
			margin-right: 173px;
		}
		.footer__section
		{
			display: flex;
			columns: unset;
		}
		.footer__social
		{
			margin: 0;
			margin-right: 226px;
			.social-links{margin-bottom: 40px;}
		}
		.footer__contact .numbers{ margin-bottom: 19px; }
		.footer__column
		{
			display: flex;
			max-width: unset;
			margin-right: 149px;
		}
		.footer__company-data{margin-right: 84px;}
		.footer__signature{color:$gray3}
		.footer__bottom{padding-bottom: 66px;padding-top: 35px;}
		.footer__logo
		{
			height: 56px;
			margin-right: 143px;
		}
		.footer__codyright
		{
			font-size: 16px;
			margin-bottom: 5px;
		}
		.footer__company-data
		{
			padding-top: 7px;
			margin-right: 97px;
		}
		.footer__user-agreement{padding-top: 4px;}
		.footer__signature{padding-top: 16px;}
		.footer__column{margin-right: 150px;}
	}
</style>
