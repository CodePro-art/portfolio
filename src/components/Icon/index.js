import classNames from 'classnames';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right.svg';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { ReactComponent as Dribbble } from 'assets/icons/dribbble.svg';
import { ReactComponent as Email } from 'assets/icons/email.svg';
import { ReactComponent as Error } from 'assets/icons/error.svg';
import { ReactComponent as Figma } from 'assets/icons/figma.svg';
import { ReactComponent as Github } from 'assets/icons/github.svg';
import { ReactComponent as Linkedin } from 'assets/icons/linkedin.svg';
import { ReactComponent as Linkedinround } from 'assets/icons/linkedin-round.svg';
import { ReactComponent as Menu } from 'assets/icons/menu.svg';
import { ReactComponent as Pause } from 'assets/icons/pause.svg';
import { ReactComponent as Play } from 'assets/icons/play.svg';
import { ReactComponent as Send } from 'assets/icons/send.svg';
import { ReactComponent as Twitter } from 'assets/icons/twitter.svg';
import { ReactComponent as Facebook } from 'assets/icons/facebook.svg';
import { ReactComponent as Youtube } from 'assets/icons/youtube.svg';
import { ReactComponent as Code } from 'assets/icons/code.svg';
import { ReactComponent as Database } from 'assets/icons/database.svg';
import { ReactComponent as Settings } from 'assets/icons/settings.svg';
import { ReactComponent as Hardware } from 'assets/icons/microchip.svg';
import { ReactComponent as Network } from 'assets/icons/network-wired.svg';
import { ReactComponent as Server } from 'assets/icons/server.svg';
import { ReactComponent as Methodologies } from 'assets/icons/methodologies.svg';
import { ReactComponent as VersionControl } from 'assets/icons/version-control.svg';
import { ReactComponent as Ai } from 'assets/icons/ai.svg';
import { ReactComponent as Backend } from 'assets/icons/backend.svg';



import './index.css';

export const icons = {
  arrowRight: ArrowRight,
  chevronRight: ChevronRight,
  code: Code,
  database: Database,
  hardware: Hardware,
  network: Network,
  server: Server,
  settings: Settings,
  ai: Ai,
  backend: Backend,
  methodologies: Methodologies,
  versionControl: VersionControl,
  close: Close,
  dribbble: Dribbble,
  email: Email,
  error: Error,
  figma: Figma,
  github: Github,
  linkedin: Linkedin,
  linkedinround: Linkedinround,
  menu: Menu,
  pause: Pause,
  play: Play,
  send: Send,
  twitter: Twitter,
  facebook: Facebook,
  youtube: Youtube,
};

const Icon = ({ icon, style, className, ...rest }) => {
  const IconComponent = icons[icon];

  return (
    <IconComponent aria-hidden className={classNames('icon', className)} {...rest} />
  );
};

export default Icon;
