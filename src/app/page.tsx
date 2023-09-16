import ListItems from '@/components/listItems/listItems'
import NewItem from '@/components/newItem/newItem'
import style from './page.module.css'

export default function Home() {
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
