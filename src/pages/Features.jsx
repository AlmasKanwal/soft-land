import React from 'react'
import Pic1 from "../assets/features-1.png"

const Features = () => {
  return (
    <>
      <div className="features-section">
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
              <p><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
              <p><i class="bi bi-check"></i> Ullam est qui quos consequatur eos accusamus.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features