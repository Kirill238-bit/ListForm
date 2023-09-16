'use client'
import { Context, ModeContext } from '@/context/index';
import { ListItems } from '@/data/types/List';
import { useContext } from 'react';
import style from './listItems.module.scss'

export default function ListItems(){
    const {white}=useContext(ModeContext);
    const {users}=useContext(Context);
    
    return(
    <div className={`${style.wrapper} ${white ? style.wrapper_white : ''}`}>
        <div className={style.content}>
            <div className={style.title}>
                <div>Name</div>
                <div>Age</div>
                <div>Subscribiyion</div>
                <div>Employment</div>
            </div>
            <div className={style.list_area} >
                {users.map((item:ListItems,index:number)=>(
                    <div className={style.item} key={index}>
                        <div className={style.item_atr}>{item.name}</div>
                        <div className={style.item_age}>{item.Age}</div>
                        <div className={style.item_atr}>{item.subscribition}</div>
                        <div className={style.item_atr}>{item.employment}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}