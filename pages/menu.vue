<template>
	<div class="menu">
		<div class="menu__container container">
			<search-place class="menu__search-place" isMenuSearch ></search-place>
			<div class="menu__main-content">
				<div class="menu__product-list">
					<section class="menu__section">
						<h3>Бизнес-Ланчи</h3>
						<div class="menu__cards-list">
							<Card
								class="menu__cards-item"
								v-for="(title, index) of customLunchTitleList"
								:key="'lanch:' + index"
								:title="title"
							/>
							<lanch-card-empty
								class="menu__cards-item menu__cards-item--empty"
								v-for="(title, index) of emptyLunchTitleList"
								:key="'lanch-empty:'+index"
							>
								{{ title }}
							</lanch-card-empty>
						</div>
					</section>
					<section class="menu__section">
						<h3>Вторые блюда</h3>
						<div class="menu__cards-list">
							<product-card
								v-for="productData of productListSecond"
								:productData="productData"
								:key="'Second:'+productData.index"
							/>
						</div>
					</section>
					<section class="menu__section">
						<h3>Гарниры</h3>
						<div class="menu__cards-list">
							<product-card
								v-for="productData of productListSideDishes"
								:productData="productData"
								:key="'SideDishes:'+productData.index"
							/>
						</div>
					</section>
					<section class="menu__section">
						<h3>Супы</h3>
						<div class="menu__cards-list">
							<product-card
								v-for="productData of productListSoups"
								:productData="productData"
								:key="'Soups:'+productData.index"
							/>
						</div>
					</section>
				</div>
				<div class="menu__sidebar">
					<constructor-popup class="menu__sidebar-body menu__sidebar-body--mobile">
						<div class="menu__popup-content">
							<div class="menu__popup-content-top">
								<h6 class="menu__popup-title">Корзина</h6>
								<button>Очистить</button>
							</div>
							<div class="menu__popup-product-list">
								<product-card-mini
									class="menu__product-card-mini"
									v-for="productData of productListBasket"
									:key="productData.index"
									:productData="productData"
								>
								</product-card-mini>
							</div>
							<div class="menu__popup-result">
								<div class="menu__popup-section menu__popup-section--left">
									<h6 class="menu__popup-title menu__popup-title--result">Итого:</h6>
									<p>Вам начислится:</p>
								</div>
								<Price :bonuses="456">1840</Price>
							</div>
							<v-button class="menu__popup-button" isRed>Оформить</v-button>
						</div>
					</constructor-popup>
					<div class="menu__sidebar-body menu__sidebar-body--desktop">
						<div class="menu__sidebar-header">
							<div class="menu__sidebar-body-back">
								<svg-icon name="recess"></svg-icon>
							</div>
							<v-button
								class="menu__sidebar-button"
								isIcon
								isRed
							>
								<svg-icon name="basket"></svg-icon>
							</v-button>
						</div>
						<div class="menu__popup-content">
							<div class="menu__popup-content-top">
								<h6 class="menu__popup-title">Корзина</h6>
								<button>Очистить</button>
							</div>
							<div class="menu__popup-product-list">
								<product-card-mini
									class="menu__product-card-mini"
									v-for="productData of productListBasket"
									:key="productData.index"
									:productData="productData"
								>
								</product-card-mini>
							</div>
							<div class="menu__popup-result">
								<div class="menu__popup-section menu__popup-section--left">
									<h6 class="menu__popup-title menu__popup-title--result">Итого:</h6>
									<p>Вам начислится:</p>
								</div>
								<Price class="menu__popup-price" :bonuses="456">1840</Price>
							</div>
							<v-button class="menu__popup-button" isRed>Оформить</v-button>
						</div>
					</div>
				</div>
			</div>
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
				emptyLunchTitleList:['Суп+Салат','Второе+Салат'],
				productListSecond:[
					{
						index:1,
						img: require('assets/img/products/product-1.png'),
						title: 'Биточки из кролика',
						text: 'Изысканный обед уже готов! Нежное мясо кролика, пикантная утка, восхитительное вино, натуральный мед.',
						mass:['550 гр.','1200 Ккл'],
						price:"330",
						oldPrice:378,
						bonuses:48,
						isTagExist:true,
						isSale:true,
					},
					{
						index:2,
						img: require('assets/img/products/product-16.png'),
						title: 'Котлеты домашние',
						text: 'Пышные, сочные и ароматные котлеты по домашнему рецепту из отборного охлажденного мяса - говядины и свинины!',
						mass:['550 гр.','1200 Ккл'],
						price:"358",
						oldPrice:418,
						bonuses:48,
						isTagExist:true,
						isSale:true,
					},
					{
						index:3,
						img: require('assets/img/products/product-15.png'),
						title: 'Мясо по-французски',
						text: 'Сочная говяжья вырезка запекается под сырной шапкой из нежной гауды и пряного грана падано с аппетитной начинкой.',
						mass:['550 гр.','1200 Ккл'],
						price:"369",
						bonuses:48,
						isTagExist:false,
					},
					{
						index:4,
						img: require('assets/img/products/product-2.png'),
						title: 'Печень с грибами',
						text: 'Пышные, сочные и ароматные котлеты по домашнему рецепту из отборного охлажденного мяса - говядины и свинины!',
						mass:['550 гр.','1200 Ккл'],
						price:"480",
						bonuses:48,
						isTagExist:true,
						isSale:false,
					},
					{
						index:5,
						img: require('assets/img/products/product-3.png'),
						title: 'Жаркое с телятиной',
						text: 'Пышные, сочные и ароматные котлеты по домашнему рецепту из отборного охлажденного мяса - говядины и свинины!',
						mass:['550 гр.','1200 Ккл'],
						price:"296",
						bonuses:48,
						isTagExist:true,
						isSale:false,
					},
					{
						index:6,
						img: require('assets/img/products/product-6.png'),
						title: 'Шницель по-венски',
						text: 'Сочная свиная корейка в панировке из яиц, молока и пшеничных сухарей, обжаривается во фритюре до золотистого цвета.',
						mass:['550 гр.','1200 Ккл'],
						price:"392",
						bonuses:48,
						isTagExist:true,
						isSale:false,
					},
					{
						index:7,
						img: require('assets/img/products/product-5.png'),
						title: 'Котлеты на пару',
						text: 'Аккуратные котлетки из отборной телятины с добавлением щепотки соли, пикантного чеснока и душистого черного перца, приготовленые на пару.',
						mass:['550 гр.','1200 Ккл'],
						price:"234",
						bonuses:48,
						isTagExist:false,
					},
					{
						index:8,
						img: require('assets/img/products/product-4.png'),
						title: 'Свинина по-китайски',
						text: 'Сочная свинина, обжаренна в маринаде из специй, кислых соусов, сока вишни, яблока, ананаса и нектарина, с овощами, зеленью и кунжутом.',
						mass:['550 гр.','1200 Ккл'],
						price:"379",
						oldPrice:398,
						bonuses:48,
						isTagExist:true,
						isSale:true,
					}
				],
				productListSideDishes: [
					{
						index:9,
						img: require('assets/img/products/product-7.png'),
						title: 'Пюре картофельное',
						text: 'Нежное воздушное пюре, приготовленное из отборного картофеля, взбивается с молоком и сливочным маслом',
						mass:['550 гр.','1200 Ккл'],
						price:"10378",
						oldPrice: 11730,
						bonuses:48,
						isTagExist:true,
						isSale:true,
					},
					{
						index:10,
						img: require('assets/img/products/product-8.png'),
						title: 'Гречка с грибами',
						text: 'Крупа гречневая, грибы шампиньоны, лук репчатый, масло подсолнечное рафинированное, петрушка, соль.',
						mass:['550 гр.','1200 Ккл'],
						price:"10378",
						oldPrice:11730,
						bonuses:48,
						isTagExist:true,
						isSale:true,
					},
					{
						index:11,
						img: require('assets/img/products/product-9.png'),
						title: 'Брокколи',
						text: 'Аккуратные ярко-зеленые освежающие соцветия сочной капусты брокколи деликатно приготовлены на пару.',
						mass:['550 гр.','1200 Ккл'],
						price:"10378",
						bonuses:48,
						isTagExist:false,
					},
					{
						index:12,
						img: require('assets/img/products/product-10.png'),
						title: 'Картофель отварной',
						text: 'Рассыпчатый отварной картофель приправлен мелко нарезанным ароматным и свежим укропом, присыпан щепоткой соли.',
						mass:['550 гр.','1200 Ккл'],
						price:"10378",
						oldPrice:11730,
						bonuses:48,
						isTagExist:true,
						isSale:false,
					}
				],
				productListSoups:[
					{
						index:13,
						img: require('assets/img/products/product-13.png'),
						title: 'Борщ Украинский',
						text: 'Аппетитный густой борщ, по традиционному рецепту на основе свеклы, говядины, капусты и моркови с добавлением специй.',
						mass:['550 гр.','1200 Ккл'],
						price:"304",
						bonuses:48,
						isTagExist:true,
						isSale:false,
					},
					{
						index:14,
						img: require('assets/img/products/product-14.png'),
						title: 'Суп-пюре из тыквы',
						text: 'Ароматный и густой суп-пюре, приготовленный из спелой тыквы с добавлением оливкового масла. Отличается деликатным вкусом.',
						mass:['550 гр.','1200 Ккл'],
						price:"206",
						oldPrice:330,
						bonuses:48,
						isTagExist:true,
						isSale:true,
					},
					{
						index:15,
						img: require('assets/img/products/product-11.png'),
						title: 'Суп из щавеля',
						text: 'Попробуйте освежающий суп из щавеля — он сварен на ароматном курином бульоне с добавлением овощей и украшен половинкой яйца.',
						mass:['550 гр.','1200 Ккл'],
						price:"228",
						bonuses:48,
						isTagExist:true,
						isSale:false
					},
					{
						index:16,
						img: require('assets/img/products/product-12.png'),
						title: 'Суп Харчо',
						text: 'Наваристый харчо приготовлен на мясном бульоне с телятиной, томатами, рисом и свежей зеленью. Согревает и наполняет энергией!',
						mass:['550 гр.','1200 Ккл'],
						price:"296",
						oldPrice:324,
						bonuses:48,
						isTagExist:true,
						isSale:true,
					},
				],
				productListBasket:[
					{
						index:1,
						img: require('assets/img/products/product-20.png'),
						title: 'Борщ Украинский',
						group: 'Супы'
					},
					{
						index:2,
						img: require('assets/img/products/product-19.png'),
						title: 'Салат Оливье',
						group: 'Салаты'
					},
					{
						index:3,
						img: require('assets/img/products/product-18.png'),
						title: 'Плов Узбецкий',
						group: 'Вторые блюда'
					},
					{
						index:4,
						img: require('assets/img/products/product-17.png'),
						title: 'Рис с Телятиной',
						group: 'Гарниры'
					},
				]
			};
		},
	}
</script>
<style lang="scss">
	.menu{background: $backgroundWhite;}
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
	.menu__section > h3{padding: 0 16px;}
	.menu__cards-list .menu__cards-item
	{
		display: none;
		&:first-child{display: block;}
	}
	.menu__popup-title
	{
		font-size: 18px;
		font-weight: 700;
		line-height: 18px;
		color: $font-black;
		text-align: left;
		&--result{margin-bottom: 4px;}
	}
	.menu__popup-content-top
	{
		display: flex;
		justify-content: space-between;
		margin-bottom: 32px;
		button
		{
			border:none;
			background:none;
			font-size: 12px;
			font-weight: 400;
			line-height: 15px;
			color:$gray6;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			cursor: pointer;
			&:hover{ text-decoration: underline; }
			padding: 0;
			padding-top: 4px;
		}
	}
	.menu__popup-content{padding-top: 4px;}
	.menu__popup-result
	{
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
		p
		{
			margin: 0;
			font-size: 12px;
			font-weight: 500;
			line-height: 15px;
		}
		.price{font-size: 24px; margin: 0;}
		.price__bonus
		{
			position: relative;
			top: 3px;
			font-size: 12px;
			font-weight: 500;
			line-height: 15px;
		}
	}
	.menu__popup-button
	{
		width: 100%;
		height: 50px;
		font-weight:700;
	}
	.menu__product-card-mini:last-of-type{margin-bottom: 0;}
	.menu__popup-product-list{margin-bottom: 31px;}
	.menu__sidebar-body--desktop{display: none;}
	@media (min-width: $tablet)
	{
		.menu__container{padding: 0 16px;}
		.menu__main-content{display: flex;}
		.menu__main-content > h3 {padding: 0;}
		.menu__search-place
		{
			margin: 0;
			margin-bottom: 39px;
		}
		.menu__cards-list
		{
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(280px,1fr));
			gap: 15px;
			.menu__cards-item{display: block;}
			.menu__cards-item--empty{display: flex;}
		}
		.menu__section
		{
			margin-bottom: 59px;
			& > h3
			{
				margin-bottom: 40px;
				padding: 0;
			}
		}
		.menu__sidebar
		{
			width: 283px;
			margin-top: 30px;
		}

		.menu__product-list{width: 100%; margin-right: 25px;}
		.menu__sidebar-body
		{
			display: block;
			border-radius: 10px;
		}
		.menu__popup-content
		{
			background: $white;
			padding: 0 25px;
			padding-top: 40px;
			padding-bottom: 30px;
		}
		.menu__sidebar-body-back
		{
			display: flex;
			svg
			{
				width: 100%;
				height: 40px;
			}
			path{height: 50px;}
		}
		.menu__sidebar-body{width: 283px;}
		.menu__sidebar-header{position: relative; top:1px;}
		.menu__sidebar-button{
			position: absolute;
			left: 188px;
			top: -29px;
			height: 60px;
			width: 60px;
			svg
			{
				position: relative;
				height: 28px;
				width: 28px;
				left: -2px;
				top: 1px;
			}
		}
		.menu__sidebar-body--mobile{display: none;}
		.menu__sidebar-body--desktop{display: block;}
	}
	@media (min-width: $desktop)
	{
		.menu__container
		{
			padding-top: 24px;
			padding-bottom: 62px;
		}
		.menu__search-place
		{
			margin-bottom: 75px;
		}
		.menu__popup-content{padding-top: 1px;}
		.menu__popup-content-top{margin-bottom: 40px;}
	}
	@media (min-width: $widescreen)
	{
		.menu__cards-list
		{
			grid-template-columns: repeat(4, minmax(200px,283px));
			gap: 25px;
		}
		.menu__popup-product-list{margin-bottom: 22px;}
		.menu__popup-title--result
		{
			margin-bottom: 6px;
			margin-top: 3px;
		}
		.menu__popup-button
		{
			width: unset;
			padding: 0 54px;
			display: block;
			margin: 0 auto;
		}
		.menu__popup-price
		{
			text-align: right;
			.price__currency{left:0;}
		}
	}
</style>