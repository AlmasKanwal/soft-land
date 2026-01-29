import HeroButton from "../components/buttons/HeroButton"
import "../styles/style.css"
import Mobile1 from "../assets/mobile-1.png"
import Mobile2 from "../assets/mobile-2.png"

const Home = () => {
  return (
    <>
      <div className="home-section" id="home">
        <div className="container-xxl">

          <div className="hero-container">
            <div className="left-container">
              <h2>Promote Your App with SoftLand</h2>
              <p>We are team of talented designers making websites with Bootstrap</p>

              <div className="hero-btns">
                <HeroButton text="Google Play" icon="fa-brands fa-google-play" />
                <HeroButton text="App Store" icon="fa-brands fa-apple" />
              </div>
            </div>

            <div className="right-container">
              <img className="image-back" src={Mobile1} alt="Mobile" />
              <img className="image-front"  src={Mobile2} alt="Mobile" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home