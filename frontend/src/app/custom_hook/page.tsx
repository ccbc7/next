"use client";

import axios from "axios";
import { UserCard } from "../../components/UserCard";
import { User } from "../types/api/user";
import { useState } from "react";
import { UserProfile } from "../types/userProfile";
import styles from "./page.module.css"

export default function CustomHook() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClickFetchUser = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user: User) => ({
          id: user.id,
          name: `${user.name}${user.username}`,
          email: user.email,
          address: `${user.address.city}, ${user.address.suite}, ${user.address.street}`,
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className={styles.custom_hook}>
        <button onClick={onClickFetchUser}>データ取得</button>
        <br />
        {error ? (
          <p>データの取得に失敗しました</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))
        )}
      </div>
    </>
  );
}
