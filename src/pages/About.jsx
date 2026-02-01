import Cards1 from '../components/aboutCard1/Cards1'
import AboutButton from '../components/buttons/AboutButton'
import About2 from './About2'
import About3 from './About3'


const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="container-xxl">
          <div className="about-container">
            <div className="left-container">
              <button className='about-btn'>About Us</button>
              <h3>Ducimus rerum libero reprehenderit cumque</h3>
              <p>Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.</p>
              <AboutButton text="Read More" icon="fa-solid fa-arrow-right"  />
            </div>

            <div className="right-container">
              <Cards1 />
            </div>
          </div>
        </div>
      </div>
      <About2 />
      <About3 />
    </>
  )
}

export default About

