import React from 'react'
import Pic1 from "../assets/features-1.png"
import Pic2 from "../assets/features-2.png"
import Pic3 from "../assets/features-3.png"
import Pic4 from "../assets/features-4.png"

const Features = () => {
  return (
    <>
      <div className="features-section" id='features'>
        <div className="container-xxl">
          <div className="headings">
            <h3>Features</h3>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="features-container">
            <div className="features-img">
              <img src={Pic1} alt="Pic" />
            </div>

            <div className="right-features">
              <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
              <em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em>
              <p className="mt-2"><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
              <p><i class="bi bi-check"></i> Ullam est qui quos consequatur eos accusamus.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Sec 2 */}
      <div className="features-section">
        <div className="container-xxl">
          <div className="features-container">

            <div className="right-features">
              <h3>Corporis temporibus maiores provident</h3>
              <em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em>
              <p className="mt-2"> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>

            <div className="features-img">
              <img src={Pic2} alt="Pic" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Sec 3 */}
      <div className="features-section">
        <div className="container-xxl">
          <div className="features-container">
            <div className="features-img">
              <img src={Pic3} alt="Pic" />
            </div>

            <div className="right-features">
              <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas.</h3>
              <em>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</em>
              <p className="mt-2"><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
              <p><i class="bi bi-check"></i> Ullam est qui quos consequatur eos accusamus.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Sec 4 */}
      <div className="features-section">
        <div className="container-xxl">
          <div className="features-container">

            <div className="right-features">
              <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
              <em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em>
              <p className="mt-2"> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>

            <div className="features-img">
              <img src={Pic4} alt="Pic" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Features