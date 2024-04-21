import { ButtonDelete } from '../ButtonDelete'
import { Count } from '../Count'
import priceFormatter from '../../utils/priceFormatter'
import './style.scss'
export const Product = ({product, deleteProduct,increase,decrease,changeValue}) =>{
   /*  console.log(product) */
    const {img, titlle,count,priceTotal, id,decs} = product
    return (
        <>
                    <section class="product">
                        <div class="product__img"><img src={`./img/products/${img}`} alt={titlle}/></div>
                        
                        <div class="product__title">
                            {titlle}
                            <p className='decs'>{decs}</p>
                        </div>
                        
                        <div class="product__count">
                           <Count count={count} increase={increase} decrease={decrease} id={id} changeValue={changeValue}/>
                        </div>
                        
                        <div class="product__price">
                            {priceFormatter.format(priceTotal)} ₸.
                            {/* {priceTotal} KZT. */}</div>
                        
                        <div class="product__controls">
                            <ButtonDelete deleteProduct= {deleteProduct} id={id}/>
                        </div>
                    
                    </section>
        </>
    )
}