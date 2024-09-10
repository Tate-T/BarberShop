
import style from './Container.module.css'

export const Container = ({children, test = "apple"}) => {
    // console.log(test);
    // console.log(children);
    
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}



