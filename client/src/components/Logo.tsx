import { contact } from '../data/siteContent';

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <a className="logo" href="#home" aria-label={`${contact.name} home`}>
      <span className="logoMark" aria-hidden="true">
        {contact.initials}
      </span>

      {!compact && (
        <span className="logoText">
          <strong>{contact.name}</strong>
        </span>
      )}
    </a>
  );
}