<template>  
    <div class="home">
        <header-template></header-template>
        <div class=" container home__content">
            <breadcrumbs :config="BreadcrumbsConfig"></breadcrumbs>
            <product-list></product-list>
        </div>
        <footer-template></footer-template>
    </div>
</template>  

<script>
    import HeaderTemplate from '_components/common/HeaderTemplate.vue'
    import ProductList from '_components/includes/ProductList.vue'
    import Breadcrumbs from '_components/includes/Breadcrumbs.vue'
    import FooterTemplate from '_components/common/FooterTemplate.vue'
    

    export default {
        name: 'App',
        data () {
            return {
                BreadcrumbsConfig: [
                    {label: 'home', url:'/', active: true}
                ]
            }
        },
        components: {
            HeaderTemplate,
            ProductList,
            Breadcrumbs,
            FooterTemplate
        }
    }
</script>
<style lang="sass">
    @import "~_sass/_vars.scss";
    .home {
        background-color: $color-grey--base;
    }
</style>
