<template>  
	<div class="container product">
		<div class="product__content">
			<div class="content__image">
				<img :src="product.image_url"></img>
			</div>
			<div class="content__description">
				<h4 class="content__description__title">{{ product.name }}</h4>
				<p class="content__description__tagline">{{ product.tagline }}</p>
				<p class="content__description__description">{{ product.description }}</p>
			</div>
		</div>
	</div>
</template>  

<script>
import BeerService from '_services/BeerService.js'

	export default {
		name: 'ProductBox',
		data () {
			return {
				product: {
					image_url: '',
					name: '',
					tagline: '',
					description: ''
				}
			}
		},
		mounted() {
			this.fetchProduct()
		},
		props: {
			productId: {
				type: String,
				required: true
			}
		},
		methods: {
			fetchProduct() {
				this.$store.dispatch('toggleLoader', true)
				BeerService
				.getSingle( this.productId )
				.then(response => {
					if(response.status == 200) {
						this.product = response.data[0]
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

	.product {

		&__content {
			background-image: linear-gradient(45deg, white, $color-black--base);
			max-width: 700px;
			display: flex;
			margin: 0 auto;
			box-shadow: 0 0 4px 2px $color-grey--dark;
			padding: 40px;
			border-radius: 10px;
			color: white;
			@media screen and(max-width: $screen-sm) {
				display: block;
				background-image: linear-gradient(140deg, white, $color-black--base);
			}

			.content__image {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;

				img {
					width: 80px;
					height: 360px;
					cursor: pointer;
					transform: scale(1);
					transition: all 0.5s ease;
					@media screen and(min-width: $screen-sm) {
						&:hover {
							transform: scale(1.2);
						}
					}
				}
			}

			.content__description {
				flex: 2;

				&__title {
					font-size: 36px;
				}

				&__tagline {
					font-size: 18px;
					font-weight: 300;
				}

				&__description {
					margin-top: 40px;
					font-size: 14px;
					text-align: justify;
				}
			}

		}
	}
</style>
