import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import soroush from './assets/AvatarMaker.png/'
import barsam from './assets/barsam.png/'
import someyeh from './assets/someyeh.png/'
import Counter from './Counter.jsx'


function App() {

  return(

    <>
      <Header/>
      <Counter/>
      <div className='middle'>
        <Card 
          ProfilePic={soroush}
          name="Soroush"
          lastname="Keyana"
          desc="A creative prgrammer 🦁"
          status={true}
          isLoggedIn={true}
        />
        <Card 
          ProfilePic={barsam}
          name="Barsam"
          lastname="Keyana"
          desc="Will be a prgrammer 👶"
          status={false}
          isLoggedIn={false}
        />
        <Card 
          ProfilePic={someyeh}
          name="Someyeh"
          lastname="Faizi"
          desc="I am a Manager 🤵‍♀️"
          status={false}
          isLoggedIn={false}
        />
      </div>
      <Footer/>
    </>
  );

}

export default App
