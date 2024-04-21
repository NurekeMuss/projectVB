import './style.scss'
export const Count=({count, increase,id,decrease,changeValue})=>{
    return(
        <>
         <div class="count">
                                <div class="count__box">
                                    <input type="number" onChange={(e)=> {changeValue(id,+e.target.value)}} class="count__input" min="1" max="100" value={count}/>
                                </div>
                                <div class="count__controls">
                                    <button onClick={()=> {increase(id)}}  type="button" class="count__up" >
                                        <img src="./img/icons/icon-up.svg" alt="Increase"/>
                                    </button>
                                    <button onClick={() =>{decrease(id)}} type="button" class="count__down">
                                        <img src="./img/icons/icon-down.svg" alt="Decrease"/>
                                    </button>
                                </div>
                            </div>
        </>
    )
}