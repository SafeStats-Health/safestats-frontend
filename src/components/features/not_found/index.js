import doctor from '../../../assets/images/not_found_doctor.svg';
import ellipse from '../../../assets/images/ellipse.svg';
import './style.css'

export default function NotFound() {
  return (
    <div>
      <span className='error'>ERRO!</span>
      <div className='text'>
        <span>ah, não! parece que o doutor não conseguiu</span>
        <span>resolver seu problema!</span>
      </div>
      <div className='img-pos-row'>
        <div className='img-pos-col'>
          <img className='doctor' src={doctor} alt=""/>
          <img className='ellipse' src={ellipse} alt=""/>
        </div>
      </div>
    </div>
  )
}
