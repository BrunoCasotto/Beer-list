<template>  
	<div class="container product-list">
		<h4 class="product-list__title">Beer list</h4>
		<div class="list-group product-list__content">
			<a 
				v-for="product in productList" 
				:href="'/beer/'+ product.id" 
				class="list-group-item product-list__content__item"
			>
				<p class="title">{{ product.name }}</p>
				<p class="tagline">{{ product.tagline }}</p>
			</a>
		</div>
		<loader></loader>
	</div>
</template>

<script>
import BeerService from '_services/BeerService.js'
import Loader from '_components/common/Loader.vue'

	export default {
		name: 'ProductList',
		data() {
			return {
				productList: []
			}
		},
		components: {
			Loader
		},
		mounted() {
			this.fetchProducts()
		},
		methods: {
			fetchProducts() {
				this.$store.dispatch('toggleLoader', true)
				BeerService
				.getAll()
				.then(response => {
					if(response.status == 200) {
						this.productList = response.data
					}

					this.$store.dispatch('toggleLoader', false)
				})
				.catch(error => {
					this.$store.dispatch('toggleLoader', false)
				})
			}
		}
	}
</script>
<style lang="sass" scoped>
	@import "~_sass/_vars.scss";

	.product-list {
		&__title {
			font-size: 40px;
			max-width: 700px;
			margin: 0 auto;

			@media screen and(max-width: $screen-sm) {
				text-align: center;
			}
		}

		&__content {
			margin: 20px auto;
			max-width: 700px;
			box-shadow: 0 0 4px 2px $color-grey--dark;
			border-radius: 10px;
			@media screen and(max-width: $screen-sm) {
				text-align: center;
			}

			&__item {
				min-height: 50px;
				display: flex;
				align-items: center;
				padding: 0 15px;
				color: $color-black--base;

				@media screen and(max-width: $screen-sm) {
					display: block;
					padding: 15px;
				}

				p {
					margin: 0;
				}

				.title {
					font-size: 18px;
					margin-right: 10px;
					font-weight: bold;

					@media screen and(min-width: $screen-sm) {
						&:after {
							content: '-';
							margin-left: 10px;
						}
					}
				}

				.tagline {
					font-weight: 400;
					font-size: 14px;
					color: $color-grey--dark;
				}
			}
		}
	}
</style>
