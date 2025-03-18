import classNames from 'classnames';
// import circle from 'assets/imgs/logo/circle.png';
import './index.css';

function Monogram({ highlight, className, ...props }) {
  
  const enlarge = () => {
    const monogram = document.querySelector('.monogram__text');
    monogram.classList.remove('monogram--animate');
    setTimeout(() => {
      monogram.classList.add('monogram--animate');
    }, 30);
  };

  return (
      <svg className={classNames('monogram', className)} width={40} height={40} viewBox="0 0 15 15" overflow="visible" onClick={enlarge} {...props}>
        {/* <image href={circle} x="-8" y="-8" width="27" height="27" className='logo-ink'/>   */}
        <text x="50%" y="50%" dy=".35em" textAnchor="middle" className='monogram__text monogram--animate'>
          {/*ネ*/}N
        </text>
      </svg>
  );
}

export default Monogram;