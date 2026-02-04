import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-xxl">
          <h2>SoftLand</h2>
          <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>

          <div className="icons">
            <span className='iconCont'><i class="bi bi-twitter-x"></i></span>
            <span className='iconCont'><i class="bi bi-facebook"></i></span>
            <span className='iconCont'><i class="bi bi-instagram"></i></span>
            <span className='iconCont'><i class="bi bi-skype"></i></span>
            <span className='iconCont'><i class="bi bi-linkedin"></i></span>
          </div>

          <hr />

          <p>Copyright SoftLand All Rights Reserved</p>
          <p className='owner'>Designed by BootstrapMade <a href='#'>AlmasKanwal</a></p>
        </div>
      </footer>
    </>
  )
}

export default Footer