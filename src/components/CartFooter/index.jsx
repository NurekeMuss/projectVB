import './style.scss'
import priceFormatter from '../../utils/priceFormatter'

export const CartFooter=({total,totalSandwinch})=>{
    const {count, price} = total;
    const {countSandwich, priceSandwich} = totalSandwinch;
    return(
        <>
        <footer class="cart-footer">
            <div class="cart-footer__count">{count} шт</div>
            <div class="cart-footer__price">
            {priceFormatter.format(price)} ₸
            </div>
        </footer>
        </>
    )
}