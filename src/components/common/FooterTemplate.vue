<template>  
	<div class="footer">
		<h4 class="footer__text">Designed by Bruno Casotto</h4>
	</div>
</template>  

<script>
    export default {
        name: 'FooterTemplate'
    }
</script>
<style lang="sass" scoped>
	@import "~_sass/_vars.scss";
	.footer {
		box-shadow: -1px 5px 11px -7px $color-grey--base;
		background-color: $color-black--base;
		margin-top: 30px;
		padding: 20px 0;
		height: $footer-height;

		&__text {
			margin: auto;
			text-align: center;
			color: white;
			font-weight: 300;
		}
	}
</style>
