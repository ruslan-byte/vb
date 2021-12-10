<template>
	<div class="header-top">
		<div class="container">
			<div class="header-top__main" :class="{'header-top__main--open': isSpoilerOpen}">
				<div class="header-top__region">
					<span>Ваш регион доставки:</span>
					<button class="header-top__button" @click="toggleSpoiler">
						{{ getActiveRegionName}}
						<span class="header-top__arrow-down">
							<svg-icon name="arrow-down-green" />
						</span>
					</button>
				</div>
				<div class="header-top__delivery-time">
					<span class="header-top__watch">
						<svg-icon name="watch" />
					</span>
					{{ headerTopData.deliveryTime }}. Среднее время доставки
				</div>
				<NuxtLink :to="headerTopData.linkToCoverage" class="header-top__coverage" >
					География покрытия
				</NuxtLink>
			</div>
		</div>
		<transition name="header-top__spoiler-transition">
			<div class="header-top__spoiler" v-if="isSpoilerOpen" @click-outsite="toggleSpoiler">
				<div class="container">
					<button class="header-top__close" @click="toggleSpoiler">
						<svg-icon name="cross" />
					</button>
					<h4 class="header-top__title">Выберите свой город</h4>
					<ul class="header-top__select-list">
						<li v-for="region of headerTopData.allRegions" :key="region.id">
							<v-radio
								name="region"
								:checked="region.isActive"
								:id="region.id"
								@change="setActiveRegion"> {{region.title}}
							</v-radio>
						</li>
					</ul>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		data()
		{
			return {
				isSpoilerOpen: false,
			}
		},
		props: {
			headerTopData:
			{
				type: Object,
				default() {
					return {
						deliveryTime: "53 мин",
						linkToCoverage: "#",
						allRegions: [
							{
								id: 0,
								title: "Москва",
								isActive: true,
							},
							{
								id: 1,
								title: "Санкт-Петербург",
								isActive: false,
							},
							{
								id: 2,
								title: "Волгоград",
								isActive: false,
							},
							{
								id: 3,
								title: "Екатеринбург",
								isActive: false,
							},
							{
								id: 4,
								title: "Владивосток",
								isActive: false,
							},
							{
								id: 5,
								title: "Перьм",
								isActive: false,
							},
							{
								id: 6,
								title: "Нижний Новгород",
								isActive: false,
							},
						]
					}
				}
			},
		},
		computed:
		{
			getActiveRegionName() {
				return this.headerTopData.allRegions.find(region => {return region.isActive}).title;
			}
		},
		methods: {
			toggleSpoiler()
			{
				this.isSpoilerOpen = !this.isSpoilerOpen;
			},
			setActiveRegion(regionId)
			{
				this.headerTopData.allRegions.forEach(region => region.isActive = false);
				this.headerTopData.allRegions.find(region => region.id === regionId).isActive = true;
			}
		},
	}
</script>

<style lang="scss">
	.header-top
	{
		background-color:$font-black;
		font-size: 14px;
		line-height: 10px;
		padding-left: 23px;
		color:$white;
		font-family: Montserrat;
		font-weight: 400;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		.header-top__main
		{
			display: flex;
			height: 40px;
			align-items: center;
		}
	}
	.header-top__arrow-down svg
	{
		width: 11px;
		height: 8px;
		transition: transform .3s ease;
		.header-top__main--open &{transform: rotate(180deg)}
	}
	.header-top__watch
	{
		display: inline-block;
		vertical-align: middle;
		margin-right: 6px;
		svg
		{
			width: 22px;
			height: 22px;
		}
	}
	.header-top__button
	{
		background: none;
		border: none;
		color: $white;
		cursor: pointer;
		letter-spacing: .5px;
	}
	.header-top__region
	{
		font-size: 0;
		margin-right: 35px;
		span{font-size: 14px;}
	}
	.header-top__delivery-time{margin-right: 42px;}
	.header-top__coverage
	{
		color:$white;
		text-decoration: none;
		&:hover{text-decoration: underline;}
	}

	.header-top__spoiler
	{
		position: absolute;
		z-index: 10;
		background-color:$font-black;
		width: 100%;
		left:0;
		border-top:1px solid #484C52;
		padding-top: 28px;
		padding-bottom: 21px;
		overflow: hidden;
		.container
		{
			position: relative;
			padding-left: 21px;
		}
	}
	.header-top__title
	{
		margin: 0;
		margin-bottom: 40px;
		font-size: 18px;
		line-height: 22px;
	}
	.header-top__select-list
	{
		display: inline-flex;
		flex-direction: column;
		flex-wrap: wrap;
		min-width: 470px;
		gap: 0 88px;
		max-height: 180px;
		list-style: none;
		white-space: pre-wrap;
		padding: 0;
		margin: 0;
		li
		{
			margin-bottom: 20px;
			max-width: 300px;
		}
	}
	.header-top__spoiler-transition-enter{ max-height: 0; padding: 0;}
	.header-top__spoiler-transition-enter-active{transition: all .3s;}
	.header-top__spoiler-transition-enter-to
	{
		max-height: 220px;
		padding: 28px 0 21px 0;
	}

	.header-top__spoiler-transition-leave{ max-height: 220px; }
	.header-top__spoiler-transition-leave-active{transition: all .2s ease; }
	.header-top__spoiler-transition-leave-to{max-height: 0; padding: 0;}
	.header-top__close
	{
		position: absolute;
		right:0;
		background: none;
		border: none;
		cursor: pointer;
		svg
		{
			width: 20px;
			height: 20px;
		}
	}
</style>