'use client'
import { ModeContext } from '@/context/index';
import { ListItems } from '@/data/types/List';
import { useContext, useState } from 'react';
import style from './listItems.module.scss'

export default function ListItems(){
    const {white,setWhite}=useContext(ModeContext);
    const [green,setGreen]=useState(false);
    let ListCopy:ListItems[]=[];
    for( let i=0;i<localStorage.length;i++ ){
        ListCopy.push(JSON.parse(localStorage.getItem(`user${i}`)));
    }
    
    return(
    <div className={`${style.wrapper} ${white ? style.wrapper_white : ''}`}>
        <div className={style.content}>
            <div className={style.title}>
                <div>Name</div>
                <div>Age</div>
                <div>Subscribiyion</div>
                <div>Employment</div>
            </div>
            <div className={style.list_area}>
                {ListCopy.map((item:any,index:number)=>(
                    <div className={`${style.item} ${green ? style.item_active : ''}`}
                     key={index} onClick={()=>setGreen(true)}>
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