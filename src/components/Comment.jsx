import styles from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/helofpizarro.png'/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
           <header>
            <div className={styles.authorAndTime}>
              <strong>Maria Heloisa</strong>
              <time title='11 de Maio as 8h13' dateTime='2023-05-11 08:13:00'>Publicado há 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
           </header>

           <p>Muito bom Devon, parabéns!! 👏👏</p> 
        </div> 
        <footer>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </footer>       
      </div>
    </div>
  )
}