<template>
	<div class="region-select">
		<div class="region-select__main" @click="toggleSpoilerState">
			<span class="region-select__city">Город: <span>{{ getActiveRegionName }}</span></span>
			<svg-icon class="region-select__arrow" name="arrow-down-green" :class="{'region-select__arrow--active' : isSpoilerShow}"></svg-icon>
		</div>
		<transition name="spoiler-transition">
			<ul class="region-select__list" v-if="isSpoilerShow">
				<li v-for="region of $store.state.header.allRegions" :key="region.id">
					<v-radio
						name="region"
						:checked="region.isActive"
						:id="region.id"
						@change="setActiveRegion"
					>
				 		{{region.title}}
					</v-radio>
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isSpoilerShow: false,
			}
		},
		computed: {
			getActiveRegionName() {
				return this.$store.state.header.allRegions.find(region => {return region.isActive}).title;
			},
		},
		methods: {
			toggleSpoilerState()
			{
				this.isSpoilerShow = !this.isSpoilerShow;
			},
			setActiveRegion(regionId)
			{
				this.$store.commit("setActiveRegion",regionId);
			}
		}
	}
</script>

<style lang="scss">
	.region-select
	{
		padding: 15px 20px;
		border-bottom: 1px solid #E3E4E4;
		cursor: pointer;
		position: relative;
		.region-select__arrow
		{
			width: 11px;
			height: 7px;
			transition: transform .3s;
			&--active{transform: rotate(180deg);}
		}
		.region-select__city
		{
			font-family: Montserrat;
			font-size: 14px;
			line-height: 17px;
			color: $gray2;
			span{color:$font-black;}
		}
	}
	.region-select__main
	{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.region-select__list
	{
		list-style: none;
		margin: 0;
		padding: 0;
		background: $white;
		position: absolute;
		left:0;
		top:100%;
		width: 100%;
		padding: 0 16px;
		.v-radio__check
		{
			border:1px solid $font-black;
		}
		overflow:hidden;
	}
</style>