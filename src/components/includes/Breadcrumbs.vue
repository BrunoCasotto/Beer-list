<template>  
	<ol class="breadcrumb">
		<template v-for="breadcrumb in config">
			<li v-if="breadcrumb.active" class="active">{{ breadcrumb.label }}</li>
			<li v-else >
				<a :href="breadcrumb.url"> {{ breadcrumb.label }} </a>
			</li>
		</template>
	</ol>
</template>  

<script>
	export default {
		name: 'Breadcrumbs',
		props: {
			config: {
				type: Array,
				required: true
			}
		}
	}
</script>
<style lang="sass">
	@import "~_sass/_vars.scss";
	.breadcrumb {
		margin-top: 10px;
		font-weight: bold;
		font-size: 16px;
		background-image: linear-gradient(45deg, white, $color-black--base);
	}
</style>
