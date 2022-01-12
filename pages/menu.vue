<template>
	<div class="menu">
		<div class="menu__container container">
			<search-place class="menu__search-place" isMenuSearch ></search-place>
			<div class="menu__main-content">
				<section class="menu__section">
					<h3>Бизнес-ланчи</h3>
					<div class="menu__cards-list">
						<Card v-for="title of customLunchTitleList" :title="title"/>
						<lanch-card-empty v-for="title of emptyLunchTitleList">{{ title }}</lanch-card-empty>
					</div>
				</section>
				<section class="menu__section">
					<h3>Вторые блюда</h3>
				</section>
			</div>
			<div class="menu__sidebar"></div>
		</div>
	</div>
</template>
<script>
	export default
	{
		data()
		{
			return {
				customLunchTitleList:['Суп+Салат','Суп + второе  + салат'],
				emptyLunchTitleList:['Суп+Салат','Второе+Салат']
			}
		}
	}
</script>
<style lang="scss">
.menu
{
	background: $backgroundWhite;
}
.menu__search-place
{
	margin: 0 22px 0 16px;
	margin-bottom: 39px;
}
.menu__container
{
	display: grid;
	padding: 0;
	padding-top: 10px;
	padding-bottom: 20px;
}
.menu__section{margin-bottom: 30px;}
.menu__section > h3 {padding: 0 16px;}
@media (min-width: $tablet)
{
	.menu__container{padding: 0 16px;}
	.menu__main-content > h3 {padding: 0;}
	.menu__search-place
	{
		margin: 0;
		margin-bottom: 39px;
	}
	.menu__cards-list
	{
		display: grid;
		grid-template-columns: repeat(2, minmax(270px,1fr));
		gap: 15px;
	}
}
@media (min-width: $desktop)
{
	.menu__container{padding-top: 24px;}
	.menu__cards-list
	{
		grid-template-columns: repeat(auto-fit, minmax(200px,283px));
		gap: 25px;
	}
}
</style>