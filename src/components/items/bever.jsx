import { Title } from "../Title"
import { Cart } from "../Cart"
import '../App/_section-cart.scss'
export const Bever = () => {
    return (
        <>
        <section class="section-cart">
        <header class="section-cart__header">
            <div class="container">
               <Title/>
            </div>
        </header>
        <div class="section-cart__body">
            <div class="container">
                <Cart/>
            </div>
        </div>
    </section>
        </>
    )
}