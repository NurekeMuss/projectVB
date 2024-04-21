import { CartFooter } from '../CartFooter'
import { Product } from '../Product'
import './style.scss'
import foodData from './../../food'
import data from './../../data'
import snak from './../../snaks'
import sanwich from './../../sandwich'
import { useEffect, useState } from 'react'
import { Snak } from '../Product/SnakProduct'
import { Food } from '../Product/Food'
import { Sandwich } from '../Product/Sandwich'

export const Cart=()=>{
    const [cartFood,setCartFood] = useState(foodData) 
    const [cart,setCart] = useState(data)
    const [cartSnak,setCartSnal] = useState(snak)
    const [cartSandwich,setCartSandwich] = useState(sanwich)
   
    /* ========================== Total ======================= */
    
    /* For Drink */
    const [total,setTotal] = useState({
        price:cart.reduce((prev,curr)=> prev + curr.priceTotal,0),
        count:cart.reduce((prev,curr)=> prev + curr.count,0)
    })
  
    const [totalSandwinch,setTotalSandwinch] = useState({
        price:cartSandwich.reduce((prev,curr)=> prev + curr.priceTotal,0),
        count:cartSandwich.reduce((prev,curr)=> prev + curr.count,0)
    })


    /* ===================== UseEffect ========================== */
    /* For Drinks */
    useEffect(()=>{
        setTotal({
            price:cart.reduce((prev,curr)=>prev + curr.priceTotal,0),
            count:cart.reduce((prev,curr)=>prev + curr.count,0)
        })
    },[cart])
    
    /* For snaks */
    useEffect(()=>{
        setTotal({
            price:cart.reduce((prev,curr)=>prev + curr.priceTotal,0),
            count:cart.reduce((prev,curr)=>prev + curr.count,0)
        })
    },[cartSnak])
    
    /* For sandwich */
    useEffect(()=>{
        setTotalSandwinch({
            price:cart.reduce((prev,curr)=>prev + curr.priceTotal,0),
            count:cart.reduce((prev,curr)=>prev + curr.count,0)
        })
    },[cartSandwich])
    
    /* For food */
    useEffect(()=>{
        setTotal({
            price:cart.reduce((prev,curr)=>prev + curr.priceTotal,0),
            count:cart.reduce((prev,curr)=>prev + curr.count,0)
        })
    },[cartFood])


/* =======================Counting===================== */
    
/* For drinks */
    const increase = (id) =>{
        console.log('increasing product', id)
        setCart((cart) =>{
            return cart.map((product) =>{
                if (product.id === id) {
                    return{
                        ...product,
                        count: ++product.count,
                        priceTotal: ++product.count * product.price
                    }
                }
                return product
            })
        })
    }
    
    const decrease = (id) =>{
        console.log('Decrease product', id)
        setCart((cart) =>{
            return cart.map((product) =>{
                if (product.id === id) {
                    const newCount = product.count - 1 > 1 ? product.count - 1 : 1 

                    return{
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price
                    }
                }
                return product
            })
        })
    }

    /* For snaks */
    const increaseSnaks = (id) =>{
        console.log('increasing product', id)
        setCartSnal((cart) =>{
            return cart.map((product) =>{
                if (product.id === id) {
                    return{
                        ...product,
                        count: ++product.count,
                        priceTotal: ++product.count * product.price
                    }
                }
                return product
            })
        })
    }
    
    const decreaseSnaks = (id) =>{
        console.log('Decrease product', id)
        setCartSnal((cart) =>{
            return cart.map((product) =>{
                if (product.id === id) {
                    const newCount = product.count - 1 > 1 ? product.count - 1 : 1 

                    return{
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price
                    }
                }
                return product
            })
        })
    }

    /* for sandwich */
    const increaseSandwich = (id) =>{
        console.log('increasing product', id)
        setCartSandwich((cart) =>{
            return cart.map((product) =>{
                if (product.id === id) {
                    return{
                        ...product,
                        count: ++product.count,
                        priceTotal: ++product.count * product.price
                    }
                }
                return product
            })
        })
    }
    
    const decreaseSandwich = (id) =>{
        console.log('Decrease product', id)
        setCartSandwich((cart) =>{
            return cart.map((product) =>{
                if (product.id === id) {
                    const newCount = product.count - 1 > 1 ? product.count - 1 : 1 

                    return{
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price
                    }
                }
                return product
            })
        })
    }

    /* for food */
    const increaseFood = (id) =>{
        console.log('increasing product', id)
        setCartFood((cart) =>{
            return cart.map((product) =>{
                if (product.id === id) {
                    return{
                        ...product,
                        count: ++product.count,
                        priceTotal: ++product.count * product.price
                    }
                }
                return product
            })
        })
    }
    
    const decreaseFood = (id) =>{
        console.log('Decrease product', id)
        setCartFood((cart) =>{
            return cart.map((product) =>{
                if (product.id === id) {
                    const newCount = product.count - 1 > 1 ? product.count - 1 : 1 

                    return{
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price
                    }
                }
                return product
            })
        })
    }
    

    /* ======================= Total Price ==================  */
    const changeValue = (id,value) => {
        setCart((cart) => {
            return cart.map((product) =>{
                if(product.id === id){
                    return {
                        ...product,
                        count: value,
                        priceTotal: value * product.price
                    }
                }
                return product;
            })
        })
    }

    /* ================= Delete ============= */
    const deleteProduct = (id) =>{
        /* console.log('deltering product', id) */
        setCart((cart) => cart.filter((product)=>id!== product.id))
    }

    const product = cart.map((product) => {
        return <Product 
        key={product.id} 
        product={product} 
        deleteProduct = {deleteProduct} 
        increase={increase} 
        decrease ={decrease}
        changeValue={changeValue}/>;
    })
 



    const snakProduct = cartSnak.map((product) =>{
        return <Snak
        key={product.id} 
        product={product} 
        deleteProduct = {deleteProduct} 
        increase={increaseSnaks} 
        decrease ={decreaseSnaks}
        changeValue={changeValue}
        />
    })
    const sandwichProduct = cartSandwich.map((product) =>{
        return <Sandwich
        key={product.id} 
        product={product} 
        deleteProduct = {deleteProduct} 
        increase={increaseSandwich} 
        decrease ={decreaseSandwich}
        changeValue={changeValue}
        />
    })
    const food = cartFood.map((product) =>{
        return <Food
        key={product.id} 
        product={product} 
        deleteProduct = {deleteProduct} 
        increase={increaseFood} 
        decrease ={decreaseFood}
        changeValue={changeValue}
        />
    })
    /* console.log(data) */
    return(
        <>
        <section class="cart">
            
            {/* Напитки */}
            <header class="cart-header">
                <div class="cart-header__title">Напитки</div>
            </header>
            {product}          

            {/* снеки */}
            <header class="cart-header">
                <div class="cart-header__title">Cнеки</div>
            </header>
            {snakProduct}

            {/* Сэндвич */}
            <header class="cart-header">
                <div class="cart-header__title">Сэндвич</div>
            </header>
            {sandwichProduct}

            {/* Второе Блюда */}
            <header class="cart-header">
                <div class="cart-header__title">Второе блюда</div>
            </header>
            {food}

            <CartFooter total={total} totalSandwinch = {totalSandwinch}/>
                </section>
        </>
    )
}