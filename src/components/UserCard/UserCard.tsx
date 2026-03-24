import type { UserCardProps } from "@/types/props";

import "@/components/UserCard/UserCard.css";

const UserCard = ({ name, username, email, phone, website, company }: UserCardProps) => {
  return (
    <article className="user-card" aria-label={`Profile of ${name}`}>
      <header className="user-card__header">
        <h3 className="user-card__name">{name}</h3>
        <p className="user-card__username" aria-label={`Username: ${username}`}>
          @{username}
        </p>
      </header>

      <address className="user-card__contact">
        <p className="user-card__info">
          <span aria-hidden="true">📧 </span>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p className="user-card__info">
          <span aria-hidden="true">📞 </span>
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
        <p className="user-card__info">
          <span aria-hidden="true">🌐 </span>
          <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </p>
      </address>

      <footer className="user-card__footer">
        <p className="user-card__company">
          <span aria-hidden="true">🏢 </span>
          {company.name}
        </p>
      </footer>
    </article>
  );
};

export default UserCard;
