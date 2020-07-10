import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })

        this.setState(() => {
            return { products: tempProducts };
        })
    }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })
    }

    /* fitur untuk menambahkan produk yang dipilih masuk ke cart */

    addtoCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {
                products: tempProducts, cart: [...this.state.cart,
                    product]
            };
        }, () => {
            this.addTotal()
        }
        )
    }

    /* increment dan decrement akan berfungsi sebagai counter jumlah barang yang diinginkan */

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotal()
        })
    }

    /* decrement sudah diantisipasi agar jumlah barang tidak minus, saat bernilai 0, dianggap 'remove item' */

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.count * product.price;

            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addTotal()
            })
        }
    }

    /* Remove item akan menghapus produk dari daftar Cart Page dan mereset produk yang ditampilkan agar dapat ditambahkan kembali ke Cart */

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removeProduct = tempProducts[index];
        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            };
        }, () => {
            this.addTotal();
        })
    }

    /* fitur ini digunakan di button untuk menghapus seluruh produk yang telah dipilih di Cart Page */

    clearCart = () => {
        this.setState(() => {
            return { cart: [] }
        }, () => {
            this.setProducts();
            this.addTotal();
        });
    }

    /* bagian ini akan menambahkan seluruh harga dan tax dari produk yang dipilih */

    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{   //Provider in index.js
                ...this.state,
                handleDetail: this.handleDetail,
                addtoCart: this.addtoCart,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer; //Consumer in ProductList.js

export { ProductProvider, ProductConsumer };
