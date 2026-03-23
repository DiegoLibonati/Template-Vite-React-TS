import { useEffect, useState } from "react";

import { User } from "@/types/app";

import Link from "@/components/Link/Link";
import UserCard from "@/components/UserCard/UserCard";

import { userService } from "@/services/userService";

import "@/pages/UsersPage/UsersPage.css";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const loadUsers = async (): Promise<void> => {
    try {
      setLoading(true);
      const users = await userService.getAll();
      setUsers(users);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <main className="users-page">
      <h1 className="title">Users Page</h1>
      <div className="users-list">
        {loading ? (
          <p className="loading">Loading users...</p>
        ) : error ? (
          <p className="error">Error loading users. Please try again.</p>
        ) : (
          users.map((user) => {
            return (
              <UserCard
                key={user.id}
                name={user.name}
                company={user.company}
                email={user.email}
                phone={user.phone}
                username={user.username}
                website={user.website}
              ></UserCard>
            );
          })
        )}
      </div>
      <div className="links">
        <Link id="link-home" ariaLabel="link-home" href="/home" target="_self">
          Go to Home Page
        </Link>
      </div>
    </main>
  );
};

export default UsersPage;
