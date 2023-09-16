import style from './newItem.module.scss'

export default function NewItem(){
    return(
        <div className={style.wrapper}>
            <div className={style.content}>
                <form className={style.form}>
                    <input type='text' defaultValue='Name'/>
                    <input type ='number' placeholder='Age' min='18'/>
                    <select //onChange={(e)=>{setSelectedGenre(e.target.value)}}
                    defaultValue={'Subscribed'}>
                        <option value="Subscribed">Subscribed</option>
                        <option value='Not Subscribed'>Not Subscribed</option>
                        <option value='Other'>Other</option>
                    </select>
                    <div className={style.checkbox}>
                        <input type='checkbox' value='Employed' color='red'/>
                        <div>Employed</div>
                   </div>
                    <button>Insert</button>
                </form>
                <div className={style.buttons_wrapper}>
                    <div className={style.button_mode}>
                        <div className={style.button_mode_anim}><div className={style.button_mode_cyrcle}></div></div>
                        <div className={style.button_mode_text}>Mode</div>
                    </div>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}