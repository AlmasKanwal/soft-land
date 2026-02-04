import React from 'react'

const Contact = () => {
  const address = [
    {
      icon: "bi bi-geo-alt",
      head: "Address",
      p: "A108 Adam Street, New York, NY 535022"
    },
    {
      icon: "bi bi-telephone",
      head: "Call Us",
      p: "+1 5589 55488 55"
    },
    {
      icon: "bi bi-envelope",
      head: "Email Us",
      p: "info@example.com"
    }

  ]
  return (
    <>
      <div className="contact-section" id='contact'>
        <div className="container-xxl">
          <div className="headings">
            <h3>Contact</h3>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="contact-container">
            <div className="contact-data mt-2">
              {
                address?.map((ad, i) => (
                  <div className="contact-icon">
                    <span className='iconCont'><i className={ad.icon}></i></span>
                    <div className="adress">
                      <h3>{ad.head}</h3>
                      <p>{ad.p}</p>
                    </div>
                  </div>
                ))
              }
            </div>

            <form>
              <div className="form-data">
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Your Email' />
              </div>

              <input type="text" placeholder='Subject' />
              <textarea name="msg" id="msg" placeholder='Message'></textarea>

              <div className="btns">
                <button>Send Message</button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </>
  )
}

export default Contact