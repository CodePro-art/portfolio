import classNames from 'classnames';
import './index.css';

function Monogram({ highlight, className, ...props }) {
  return (
    <svg className={classNames('monogram', className)} width={40} height={40} viewBox="0 0 15 15" {...props}>
      <text x="50%" y="50%" dy=".35em" textAnchor="middle" className='monogram__text'>
        ネ
      </text>
    </svg>
  );
}

export default Monogram;