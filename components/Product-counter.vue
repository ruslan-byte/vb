<template>
	<div class="product-counter" :class="{ 'product-counter--small': isSmall }">
		<button
			class="product-counter__button product-counter__button--minus"
			@click="reduceCount()"
		>
			-
		</button>
		<div class="product-counter__count"> {{ count }} </div>
		<button
			class="product-counter__button product-counter__button--plus"
			@click="count++"
		>
			+
		</button>
	</div>
</template>

<script>
	export default {
		data(){

			return {
				count: 1,
			}
		},
		methods:{
			reduceCount()
			{
				if( this.count === 1 )
					this.$emit('hide');
				else
					this.count--
			}
		},
		props:{
			isSmall: {
				type:Boolean,
				default: false
			}
		}

	}
</script>

<style lang="scss">
	.product-counter
	{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 40px;
		background: $gray;
		width: 124px;
		border-radius: 60px;
		&--small{
			height: 25px;
			width: 78px;
			.product-counter__count
			{
				font-size: 12px;
				font-weight: 500;
				line-height: 12px;
			}
			.product-counter__button
			{
				height: 25px;
				width: 25px;
			}
		}
	}

	.product-counter__count
	{
		font-size: 14px;
		font-weight: 500;
		line-height: 14px;
	}
	.product-counter__button
	{
		border: 1px solid #40AE49;
		border-radius:50%;
		height: 40px;
		width: 40px;
		cursor:pointer;
	}
	.product-counter__button--minus
	{
		background:$white;
		color:$green;
	}
	.product-counter__button--plus
	{
		background:$green;
		color:$white;
	}
</style>
