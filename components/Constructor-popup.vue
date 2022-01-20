<template>
	<div class="constructor-popup" :class="{'constructor-popup--active': isOpen}">
		<transition name="constructor-popup__back-anim">
			<div
				class="constructor-popup__background"
				v-if="isOpen"
				@click="closePopup()"
			>
			</div>
		</transition>
		<div class="constructor-popup__main">
			<div class="constructor-popup__header" @click="openPopup">
				<v-button
					class="constructor-popup__button"
					isIcon
					isRed
				>
					<svg-icon name="basket"></svg-icon>
				</v-button>
				<svg width="320" height="50" viewBox="0 0 320 50" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M93 12C93 28.0163 80.0163 41 64 41C47.9837 41 35 28.0163 35 12C35 6.20807 31.0127 0 25.2207 0H10C4.47715 0 0 4.47715 0 10V50H320V10C320 4.47715 315.523 0 310 0H102.779C96.9873 0 93 6.20807 93 12Z" fill="white"/>
				</svg>
				<div class="constructor-popup__header-back"></div>
				<div class="constructor-popup__products-info" :class="{'constructor-popup__products-info--active': isOpen}">
					<span class="constructor-popup__product-count">12</span>
					<span class="constructor-popup__header-price">1840 ₽</span>
					<svg-icon name="arrow-down-gray"></svg-icon>
				</div>
				<div class="constructor-popup__hook"></div>
			</div>
			<transition name="constructor-popup__content-anim">
				<div class="constructor-popup__content" v-if="isOpen">
					<slot></slot>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				isOpen: false,
			}
		},
		methods:{
			openPopup(){
				this.isOpen=true;
				document.querySelector('body').classList.add('hidden');
			},
			closePopup(){
				this.isOpen=false;
				document.querySelector('body').classList.remove('hidden');
			}
		}
	}
</script>

<style lang="scss">
	.constructor-popup
	{
		position: fixed;
		bottom: 0;
		left:0;
		right:0;
		z-index: 1000;
	}
	.constructor-popup__main
	{
		width: 100%;
		position: absolute;
		bottom: 0;
		filter: drop-shadow(0px -2px 10px rgba(0, 0, 0, 0.25));
		padding-top: 15px;
		overflow: auto;
	}
	.constructor-popup--active
	{
		top:0;
		.constructor-popup__main{ max-height: 70%;}
	}
	.constructor-popup__header
	{
		cursor:pointer;
		position: relative;
		height: min-content;
		height: 50px;
	}
	.constructor-popup__header-back
	{
		background: $white;
		position: absolute;
		left: 36%;
		top: 0;
		bottom: 0;
		right: 0;
		border-radius: 0 11px 0 0;
	}
	.v-button.constructor-popup__button
	{
		position: absolute;
		left:39px;
		top:-13px;
		height: 50px;
		width: 50px;
		svg
		{
			position: relative;
			height: 24px;
			width: 24px;
			left: -2px;
			top: 1px;
		}
	}
	.constructor-popup__hook
	{
		position: absolute;
		height: 5px;
		width: 35px;
		border-radius: 10px;
		top: 8px;
		left: calc(50% - 20.5px);
		background:#C4C4C4;
	}
	.constructor-popup__products-info
	{
		white-space: nowrap;
		position: absolute;
		right: 14px;
		height: 25px;
		top: calc( 50% - 11.5px );
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		svg
		{
			width: 11px;
			height: 7px;
		}
		&--active svg
		{
			transform: rotate(180deg);
		}
	}
	.constructor-popup__product-count
	{
		display: inline-block;
		height: 25px;
		width: 25px;
		background: #FD470E;
		border-radius: 50%;
		color: $white;
		line-height: 25px;
		vertical-align: middle;
		text-align: center;
		font-size: 12px;
		font-weight: 700;
		margin-right: 3px;
	}
	.constructor-popup__header-price
	{
		font-size: 16px;
		font-weight: 700;
		line-height: 25px;
		vertical-align: middle;
		margin-right: 1px;
	}
	.constructor-popup__content
	{
		background: $white;
		overflow:hidden;
		padding: 0 15px 25px 15px;
		max-height: 250px;
		overflow: scroll;
	}
	.constructor-popup__background
	{
		cursor: pointer;
		position: absolute;
		left: 0;
		right: 0;
		top:0;
		bottom:0;
		background:rgba(61, 66, 72, 0.5);
	}

	.constructor-popup__content-anim-enter-active{
	  transition: all 0.4s ease;
	  max-height: 230px;
	}
	.constructor-popup__content-anim-enter{max-height: 0px;}
	.constructor-popup__back-anim-enter-active{transition: opacity 0.4s ease;}
	.constructor-popup__back-anim-enter{opacity: 0;}
	@media (min-width: $tablet)
	{
		.constructor-popup
		{
			position: static;
		}
		.constructor-popup__background{display: none;}
	}
</style>