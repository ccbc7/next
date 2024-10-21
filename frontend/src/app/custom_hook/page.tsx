"use client";

import { UserCard } from "../../components/UserCard";
import styles from "./page.module.css";
import { useAllUsers } from "../../hooks/useAllUsers";

export default function CustomHook() {
  // useAllUsersと言うカスタムフックを呼び出し, 戻り値を分割代入で取得
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchUser = () => {
    getUsers();
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
          userProfiles.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </>
  );
}
