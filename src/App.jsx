import { Header } from "./components/Header"
import './global.css'
import styles from './App.module.css'
import {Post} from './components/Post'
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/helofpizarro.png',
      name: 'Maria Heloisa',
      role: 'Web Developer',
    },
    content: [
        {type: 'paragraph', content:  'Fala galeraa 👋'},
        {type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: '<a>👉jane.design/doctorcare</a>'}
    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayke Brito',
      role: 'Educator',
    },
    content: [
        {type: 'paragraph', content:  'Fala galeraa 👋'},
        {type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: '<a>👉jane.design/doctorcare</a>'}
    ],
    publishedAt: new Date('2023-05-10 20:00:00')
  },

]

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map(posts => (
              <Post
                key={posts.author}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}

export default App
