import Icon from 'components/Icon';
import './index.css';

const Tab = ({ icon, text, active, onClick }) => {
    return (
        <div className={`navigation-tab-item ${active ? 'active' : ''}`} onClick={onClick}>
            <span className="navigation-tab__icon">
                <Icon icon={icon} />
            </span>
            <span className="navigation-tab__txt">
                {text}
            </span>
        </div>
    );
};

export default Tab;