import "./button.css"

const HeroButton = ({text, icon}) => {
  return (
    <>
        <button className='bg-trans'><i className={icon || "fa-brands fa-google-play"}></i> {text}</button>
    </>
  )
}

export default HeroButton