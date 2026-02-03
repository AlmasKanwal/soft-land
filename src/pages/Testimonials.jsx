import React, { useState, useEffect } from 'react'
import Pic1 from "../assets/testimonials-1.jpg"
import Pic2 from "../assets/testimonials-2.jpg"
import Pic3 from "../assets/testimonials-3.jpg"
import Pic4 from "../assets/testimonials-4.jpg"
import Pic5 from "../assets/testimonials-5.jpg"

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Saul Goodman",
      role: "Ceo & Founder",
      image: Pic1,
      text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      rating: 5
    },
    {
      id: 2,
      name: "Sara Wilsson",
      role: "Developer",
      image: Pic2,
      text: "iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      rating: 5
    },
    {
      id: 3,
      name: "Fatima Ali",
      role: "Product Manager",
      image: Pic3,
      text: "Consequat Proin iaculis purus sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      rating: 5
    },
    {
      id: 4,
      name: "Zain Abbas",
      role: "Entrepreneur",
      image: Pic4,
      text: "Consequat Proin suscipit rhoncus. iaculis purus sem cure digni ssim donec porttitora entum. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      rating: 5
    },
    {
      id: 5,
      name: "John Doe",
      role: "Marketing Head",
      image: Pic5,
      text: "Maecen aliquam, risus at semper. Consequat Proin iaculis purus sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. ",
      rating: 5
    }
  ];

  // Automatic slider - changes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5000ms = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <div className="testimonials-container">
      <div className="container-xxl">
        
        <div className="headings">
          <h3>Testimonials</h3>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        {/* Carousel Container */}
        <div className="carousel-container">
          
          {/* Main Card */}
          <div className="testimonial-card">
            
            {/* Content */}
            <div key={currentSlide} className="testimonial-content">
              
              {/* Profile Image */}
              <div className="profile-image-wrapper">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="profile-image"
                />
              </div>

              {/* Name */}
              <h3 className="testimonial-name">
                {currentTestimonial.name}
              </h3>

              {/* Role */}
              <p className="testimonial-role">
                {currentTestimonial.role}
              </p>

              {/* Star Rating */}
              <div className="star-rating">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>

              {/* Quote */}
              <div className="testimonial-quote-wrapper">
                <span className="quote-mark quote-left">"</span>
                <p className="testimonial-text">
                  {currentTestimonial.text}
                </p>
                <span className="quote-mark quote-right">"</span>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="dots-navigation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`dot ${index === currentSlide ? 'dot-active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials