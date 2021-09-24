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
                { id: 1, product_name: 'HP Laptop HP Pavilion 14-dv0007la', product_brand: 'HP', product_descrip: '', frs_price: 320, sec_price: 269.99,  principal_dir: 'src/products/laptops/hp/hp_pavilion1.png'},
                { id: 2, product_name: 'ASUS Zenbook 13 Ultra ', product_brand: 'ASUS', product_descrip: '', frs_price: 899, sec_price: 785,  principal_dir: 'src/products/laptops/asus/asus_zenbook1.jpg'},
                { id: 3, product_name: 'ASUS Zenbook 13 Ultra ', product_brad: 'LG', product_descrip: '', frs_price: 480.50, sec_price: '',  principal_dir: 'src/products/monitors/lg/monitor_lg1.jpg'},
            ]
        }
    }
})


const app = new Vue({
    el: '#app',
    data: {}
})