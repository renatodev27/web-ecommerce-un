const sideNavbar = Vue.component('sideNavbar', {
    template: '#side-navbar-template',
    data() {
        return {
            gadgetList: [
                { id: 1, description: 'Hard Drives', qty: 26 },
                { id: 2, description: 'Keyboards', qty: 128 },
                { id: 3, description: 'Laptops', qty: 105 },
                { id: 4, description: 'Monitors', qty: 47 },
                { id: 5, description: 'Mouses', qty: 82 },
                { id: 6, description: 'Phones', qty: 25 },
                { id: 7, description: 'USB', qty: 12 },
            ],
            brandList: [
                { id: 1, descr: 'Asus'},
                { id: 2, descr: 'HP'},
                { id: 3, descr: 'Lenovo'},
                { id: 4, descr: 'LG'},
                { id: 5, descr: 'Nokia'},
                { id: 6, descr: 'Samsung'},
                { id: 7, descr: 'Toshiba'},
            ]
        }
    }
})

const mRightContent = Vue.component('mRightContent', {
    template: '#mright-content-template',
    data() {
        return {
            products: [
                { id: 1, product_name: 'HP Laptop HP Pavilion 14-dv0007la', product_brand: 'HP', product_type: 'Laptops', product_descrip: '', frs_price: 320, sec_price: 269.99,  principal_dir: 'src/products/laptops/hp/hp_pavilion1.png'},
                { id: 2, product_name: 'ASUS Zenbook 13 Ultra ', product_brand: 'ASUS', product_type: 'Laptops', product_descrip: '', frs_price: 899, sec_price: 785,  principal_dir: 'src/products/laptops/asus/asus_zenbook1.jpg'},
                { id: 3, product_name: 'Monitor LED TN FullHD 19.5"', product_brad: 'LG', product_type: 'Monitors', product_descrip: '', frs_price: 480.50, sec_price: '',  principal_dir: 'src/products/monitors/lg/monitor_lg1.jpg'},
                { id: 4, product_name: 'Monitor Samsung 22" Full HD', product_brad: 'LG', product_type: 'Monitors', product_descrip: '', frs_price: 969.99, sec_price: 599.99,  principal_dir: 'src/products/monitors/samsung/monitor_samsung1.jpg'},
                { id: 5, product_name: 'Apex M750 TKL SteelSeries', product_brad: 'SteelSeries', product_type: 'Keyboards', product_descrip: '', frs_price: 45.00, sec_price: '',  principal_dir: 'src/products/keyboards/steelseries/kb_steels1.jpg'},
                { id: 6, product_name: 'Pink Mechanical Gaming Keyboard', product_brad: 'Bastc', product_type: 'Keyboards', product_descrip: '', frs_price: 79.99, sec_price: 59.99,  principal_dir: 'src/products/keyboards/bastc/kb_bastc1.jpg'},
                { id: 7, product_name: 'Logitech Wireless Mouse M280', product_brad: 'Logitech', product_type: 'Mouses', product_descrip: '', frs_price: 49.99, sec_price: 29.99,  principal_dir: 'src/products/mouses/logitech/mouse_logitech1.jpg'},
                { id: 8, product_name: 'Mouse Genius DX-110 Black', product_brad: 'Genius', product_type: 'Mouses', product_descrip: '', frs_price: 19.99, sec_price: '',  principal_dir: 'src/products/mouses/genius/mouse_genius1.jpg'},
                { id: 9, product_name: 'Nokia Lumia 720', product_brad: 'Nokia', product_type: 'Phones', product_descrip: '', frs_price: 1499.99, sec_price: 1199,  principal_dir: 'src/products/mobiles/nokia/nokia_lumia1.png'},
                { id: 10, product_name: 'USB Memory Sandisk Cruzer 16GB', product_brad: 'Sandisk', product_type: 'Phones', product_descrip: '', frs_price: 24.99, sec_price: 14.99,  principal_dir: 'src/products/usb/sandisk/usb1.jpg'},
                { id: 10, product_name: 'Toshiba USB 3.0 Hard Drive 1TB', product_brad: 'Toshiba', product_type: 'Hard Drives', product_descrip: '', frs_price: 128, sec_price: 100,  principal_dir: 'src/products/hardrives/toshiba/hd_toshiba1.jpg'},
            ]
        }
    },
    mounted() {

    }
})


const app = new Vue({
    el: '#app',
    data: {}
})