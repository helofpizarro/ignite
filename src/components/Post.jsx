import { useState } from 'react';
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css';
import {Comment} from './Comment'
import { Avatar } from './Avatar';

export function Post({author, publishedAt, content}) {
    const [comment, setComment] = useState()

    const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'ás' HH:mm'h'", {
      locale: ptBR
    } )
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true,
    })

    function handleCreateNewComment(){
      event.preventDefault()

      setComment([...comment, comment.lenght + 1])
    }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar  src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time 
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
        </time>

      </header>
      <div className={styles.content}>
        {
          content.map(line => {
            if(line.type === 'paragraph'){
              return <p>{line.content}</p>
            } else if(line.type === 'link'){
              return <p><a href='#'>{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea
          placeholder='Deixe seu comentário'

        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
       <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
       </div>

    </article>
  )
}