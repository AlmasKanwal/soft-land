const AboutButton = ({text, icon}) => {
  return (
    <>
        <button className="bg-trans bg-about" >{text} <i className={icon || "fa-brands fa-google-play"}></i></button>
    </>
  )
}

export default AboutButton