import './style.scss'
export const CountSandwich = ({count,increaseSandwich,decreaseSandwich,id,changeValue})=>{
    return(
        <>
         <div class="count">
                                <div class="count__box">
                                    <input type="number" onChange={(e)=> {changeValue(id,+e.target.value)}} class="count__input" min="1" max="100" value={count}/>
                                </div>
                                <div class="count__controls">
                                    <button onClick={()=> {increaseSandwich(id)}}  type="button" class="count__up" >
                                        <img src="./img/icons/icon-up.svg" alt="Increase"/>
                                    </button>
                                    <button onClick={() =>{decreaseSandwich(id)}} type="button" class="count__down">
                                        <img src="./img/icons/icon-down.svg" alt="Decrease"/>
                                    </button>
                                </div>
                            </div>
        </>
    )
}