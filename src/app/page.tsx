'use client'
import ListItems from '@/components/listItems/listItems'
import NewItem from '@/components/newItem/newItem'
import { Context } from '@/context/index';
import { List } from '@/data/List';
import { useContext, useEffect } from 'react';
import style from './page.module.css'

export default function Home() {
  const {setUsers}=useContext(Context);

  useEffect(()=>{
    for(let i=0;i<List.length;i++){
      localStorage.setItem(`user${i}`,JSON.stringify(List[i]));
    }
    setUsers(List)
  },[]) 

  return (
    <main className={style.main}>
     <div className={style.wrapper}>
      <div>
        <NewItem/>
      </div>
      <div>
        <ListItems/>
      </div>
     </div>
    </main>
  )
}
