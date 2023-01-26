import type { Language as LanguageType } from "types";

interface Props extends LanguageType {
  readonly relatedLanguages?: LanguageType[];
}

const Language = ({ id, name, category, typing, relatedLanguages }: Props) => {
  return (
    <div>
      <p>
        #{id}
        Language name: {name}
        Is good: {category === "good" ? "yes" : "no"}
        Typing:{" "}
        {typing === "none"
          ? "no-typing"
          : typing === "weak"
          ? "quite low"
          : "TypeScript :cool:"}
      </p>

      <p>Relates to:</p>

      {relatedLanguages?.map((language) => (
        <Language key={language.id} {...language} />
      ))}
    </div>
  );
};

export default Language;
