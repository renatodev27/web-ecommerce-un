const sideNavbar = Vue.component('sideNavbar', {
    template: '#side-navbar-template',
    data() {
        return {}
    }
})

const mRightContent = Vue.component('mRightContent', {
    template: '#mright-content-template',
    data() {
        return {
            products: [
                { id: 1, product_name: 'HP Laptop HP Pavilion 14-dv0007la', product_descrip: '', frs_price: 3950, sec_price: 2999,  principal_dir: '../src/products/laptops/hp/hp_pavilion1.png'}
            ]
        }
    }
})


const app = new Vue({
    el: '#app',
    data: {}
})