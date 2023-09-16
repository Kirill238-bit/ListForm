import style from './listItems.module.scss'

export default function ListItems(){
    let ListCopy=[];
    for( let i=0;i<localStorage.length;i++ ){
        ListCopy.push(JSON.parse(localStorage.getItem(`user${i}`)));
    }
    console.log(ListCopy);
    //JSON.parse(ListCopy)
    return(
    <div className={style.wrapper}>
        <div className={style.content}>
            <div className={style.title}>
                <div>Name</div>
                <div>Age</div>
                <div>Subscribiyion</div>
                <div>Employment</div>
            </div>
            <div className={style.list_area}>
                {ListCopy.map((item:any,index)=>(
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