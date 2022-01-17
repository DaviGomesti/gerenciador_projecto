import loading from '../../img/loading.svg'

import styles from './Loading.module.css'

function Loading(){

    return(
        <div className={styles.loading_container}>

            <img src={loading} alt="Loading"/>

        </div>
    )
    

}

export default Loading