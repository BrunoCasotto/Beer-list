<template>  
	<div class="page-not-found ">
		<header-template></header-template>
			<div class=" container page-not-found__content">
				<a href="/">Back to beer</a>
				<h4>404 - Not found</h4>
			</div>
		<footer-template v-cloak></footer-template>

		<loader></loader>
	</div>
</template>  

<script>
	import HeaderTemplate from '_components/common/HeaderTemplate.vue'
	import FooterTemplate from '_components/common/FooterTemplate.vue'
	export default {
		name: 'not-found',
		components: {
			HeaderTemplate,
			FooterTemplate,
		}
	}
</script>
<style lang="sass">
	@import "~_sass/_vars.scss";
	.page-not-found {
		background-color: $color-grey--base;

		&__content {
			min-height: calc( 95vh - #{$footer-height} - #{$header-height});

			h4 {
				font-size: 90px;
				color: white;
				text-align: center;
				margin-top: 150px;
			}

			a {
				color: black;
				font-size: 30px;
				margin: 0 auto;
				text-decoration: none;
				font-weight: bold;
			}
		}
	}
</style>
