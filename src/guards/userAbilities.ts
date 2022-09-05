import { ActionsSubjectAbility } from "./ability";

export type UserType = "Administrators" | "Normal" | string;

export const getAbilitiesByUser = () => {
  const valueUser: string = localStorage.getItem("group") || "Normal";
  const user: UserType = valueUser;

  const abilities: Record<UserType, ActionsSubjectAbility[]> = {
    Normal: [{ action: "read", subject: "User" }],
    Administrators: [
      { action: "create", subject: "User" },
      { action: "update", subject: "User" },
      { action: "delete", subject: "User" },
    ],
  };

  return abilities[user];
};
