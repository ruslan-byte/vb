<template>
	<label class="v-radio">
		<input type="radio" :name="name" :checked="checked" @change="change">
		<span class="v-radio__check"></span>
		<span class="v-radio__title"><slot /></span>
	</label>
</template>

<script>
	export default {
		props:{
			name:String,
			checked:Boolean,
			id:Number,
		},
		methods: {
			change(){
				this.$emit('change', this.id)
			}
		}
	}
</script>

<style lang="scss">
	.v-radio
	{
		display: inline-flex;
		cursor: pointer;
		max-width: 280px;
		input{ display: none;}
	}
	.v-radio__title
	{
		display: inline-block;
		line-height: 20px;
		height: 20px;
		font-size: 16px;
	}
	.v-radio__check
	{
		position: relative;
		display: inline-block;
		width: 18px;
		height: 18px;
		border: 1px solid $white;
		border-radius: 50%;
		margin-right: 13px;
		input:checked ~ &:after
		{
			content:"";
			display: block;
			background: $red;
			width: 18px;
			height: 18px;
			border-radius:50%;
			transform: scale(0.7);
		}
	}
</style>