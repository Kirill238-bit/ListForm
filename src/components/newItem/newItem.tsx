import { Context, ModeContext } from '@/context/index'
import { ListItems } from '@/data/types/List'
import { useContext, useState } from 'react'
import style from './newItem.module.scss'

export default function NewItem(){
    const [name, setName]=useState('')
    const [age,setAge]=useState('')
    const [select,setSelector]=useState('')
    const [chek,setChek]=useState('Unemployed')
    const [number,setNumber]=useState(13);
    const {users,setUsers}=useContext(Context);
    const {white,setWhite}=useContext(ModeContext);
    const [position,setPosition]=useState(0);

    function addItem(e:any){
        e.preventDefault()
        setNumber(number+1);

        if(name===''){
           return alert("Fill the name");
        }
        if(age===''){
            return alert("Fill the age");
        }

        const newUser:ListItems={
            name:name,
            Age:+age,
            subscribition:select,
            employment: chek,
        }

        setUsers([...users,newUser])
    }

    function deleteItem(){
        let numb=prompt('write the name');
        setUsers(users.filter((item:ListItems)=> item.name!=numb));
    }

    function changeMode(){//для анимации
        setWhite(!white);
        setPosition(position+1);
        if(position===1){
            setPosition(0);
        }
    }
    return(
        <div className={`${style.wrapper} ${white ? style.wrapper_white : ''}`}>
            <div className={style.content}>
                <form className={style.form}>
                    <input type='text' placeholder='Name' value={name} onChange={e=>setName(e.target.value)}/>
                    <input type ='number' placeholder='Age' min='18' value={age} onChange={e=>setAge(e.target.value)}/>
                    <select onChange={(e)=>{setSelector(e.target.value)}}
                    defaultValue={'Subscribed'}>
                        <option value="Subscribed">Subscribed</option>
                        <option value='Not Subscribed'>Not Subscribed</option>
                        <option value='Other'>Other</option>
                    </select>
                    <div className={style.checkbox}>
                        <input type='checkbox' value={chek} onChange={(e)=>{setChek('Employed')}}/>
                        <div>Employed</div>
                   </div>
                    <button onClick={addItem}>Insert</button>
                </form>
                <div className={style.buttons_wrapper}>
                    <div className={style.button_mode}>
                        <div className={style.button_mode_anim} onClick={()=>changeMode()}>
                            <div className={style.button_mode_cyrcle} style={{ transform: `translateX(${(position* 100)}%)`}}></div>
                        </div>
                        <div className={style.button_mode_text}>Mode</div>
                    </div>
                    <button onClick={()=>deleteItem()}>Delete</button>
                </div>
            </div>
        </div>
    )
}