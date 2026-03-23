import { UserCardProps } from "@/types/props";

import "@/components/UserCard/UserCard.css";

const UserCard = ({ name, username, email, phone, website, company }: UserCardProps) => {
  return (
    <article className="user-card">
      <h3 className="user-card__name">${name}</h3>
      <p className="user-card__username">@${username}</p>
      <p className="user-card__info">📧 ${email}</p>
      <p className="user-card__info">📞 ${phone}</p>
      <p className="user-card__info">🌐 ${website}</p>
      <p className="user-card__company">🏢 ${company.name}</p>
    </article>
  );
};

export default UserCard;
