import { Ability } from "@casl/ability";

export type Action = "read" | "create" | "update" | "delete";
export type Subject = "User";

export type ActionsSubjectAbility = {
  action: Action;
  subject: Subject;
};

export const buildAbility = (abilities: ActionsSubjectAbility[]) => {
  const ability = new Ability<[Action, Subject]>();
  ability.update(abilities);
  return ability;
};
