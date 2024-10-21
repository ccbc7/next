// 全ユーザー一覧を取得するカスタムフック
import { User } from "../app/types/api/user";
import { UserProfile } from "../app/types/userProfile";
import axios from "axios";
import { useState } from "react";

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
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

  // 今回はオブジェクトだが、配列で返す場合もある
  return { getUsers, userProfiles, loading, error };
};
