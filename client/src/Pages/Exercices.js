import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Thread from '../components/Context/Thread'
import NewPostForm from '../components/Post/NewPostForm'
import { useContext } from 'react'
import { UidContext } from '../components/Context/AppContext'

const Exercices = () => {

  const uid = useContext(UidContext)

  return (
    <>
      <Header/>
      <div>
        {uid ? <NewPostForm/> : ""}
      </div>
      <Thread/>      
      <Footer/>
    </>
  )
}

export default Exercices