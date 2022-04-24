import doctor from '../../assets/images/not_found_doctor.svg';
import ellipse from '../../assets/images/ellipse.svg';
import './style.css'

export default function NotFound() {
  return (
    <div>
      <h1 className='error'>ERRO!</h1>
      <div className='test'>
        <p className='text'>ah, não! parece que o doutor não conseguiu resolver seu problema!</p>
      </div>
      <img className='doctor' src={doctor} alt=""/>
      <img className='ellipse' src={ellipse} alt=""/>
    </div>
  )
}
