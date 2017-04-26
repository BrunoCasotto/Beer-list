<template>  
    <div class="product-single">
        <header-template></header-template>
        <div class=" container product-single__content">
            <breadcrumbs :config="BreadcrumbsConfig"></breadcrumbs>
			<product-box :productId="$route.params.id"></product-box>
        </div>
		<footer-template v-cloak></footer-template>

		<loader></loader>
    </div>
</template>  

<script>
	import HeaderTemplate from '_components/common/HeaderTemplate.vue'
	import FooterTemplate from '_components/common/FooterTemplate.vue'
	import ProductBox from '_components/includes/ProductBox.vue'
	import Breadcrumbs from '_components/includes/Breadcrumbs.vue'
	import Loader from '_components/common/Loader.vue'
	export default {
		name: 'App',
		data () {
			return {
				BreadcrumbsConfig: [
					{label: 'Home', url:'/'},
					{label: 'Product single', url:'/', active: true}
				]
			}
		},
		components: {
			HeaderTemplate,
			Breadcrumbs,
			ProductBox,
			FooterTemplate,
			Loader
		}
	}
</script>
<style lang="sass">
	@import "~_sass/_vars.scss";
	.product-single {
		background-color: $color-grey--base;

		&__content {
			min-height: calc( 95vh - #{$footer-height} - #{$header-height})
		}
	}
</style>
