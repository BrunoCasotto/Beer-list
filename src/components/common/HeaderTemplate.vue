<template>  
	<div class="header">
		<h4 class="header__title">Fractal Beers Project</h4>
	</div>
</template>  

<script>
    export default {
        name: 'HeaderTemplate'
    }
</script>
<style lang="sass" scoped>
	@import "~_sass/_vars.scss";
	.header {
		height: $header-height;
		padding: 30px 30px;
		box-shadow: 0px 6px 4px 0px $color-grey--base;
		background-color: $color-black--base;
		margin: 0;

		&__title {
			margin: auto;
			font-size: 30px;
			text-align: center;
			color: white;
		}
	}
</style>
