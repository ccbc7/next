import { FC } from "react";

type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
};

export const Todo: FC<TodoType> = (props) => {
  const {title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]"
  return <p>{`${completeMark} ${title}（ユーザー：${userId}）`}</p>;
}
