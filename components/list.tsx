import { gql, useQuery } from "@apollo/client";
import { omit, keyBy } from "lodash";
import { useMemo } from "react";
import type {
  LanguageTreeNode,
  Language as LanguageType,
  Project,
} from "types";

import Language from "components/Language";

const GET_REPARCAR_PROJECT = gql`
  query reparcarProject {
    reparcarProject {
      languages {
        id
        name
        yearCreation
        category
        typing
        parentLanguage {
          id
        }
      }
    }
  }
`;

/*
  Mentionner les différents moyens de passer la donnée d'un composant à l'autre :
    - Du parent vers l'enfant :
      - via les props
      - via les contextes
    - De l'enfant vers le parent :
      - via des callbacks passés par props
      - via des stores (eg: redux, etc...) passés par contexte
  */

export const List = () => {
  const { data, loading } = useQuery<{ reparcarProject: Project }>(
    GET_REPARCAR_PROJECT
  );

  const languages = useMemo(() => {
    if (!data) {
      return [];
    }

    const languagesById = keyBy<
      LanguageTreeNode & { relatedLanguages?: LanguageType[] }
    >(data.reparcarProject.languages, "id");

    data.reparcarProject.languages.forEach(
      ({ parentLanguage: { id }, ...language }) => {
        if (languagesById[id].relatedLanguages) {
          languagesById[id].relatedLanguages.push(language);
        } else {
          languagesById[id].relatedLanguages = [language];
        }
      }
    );

    return Object.values(languagesById).map((language) =>
      omit(language, "parentLanguage")
    );
  }, [data]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        languages.map((language) => (
          <Language key={language.id} {...language} />
        ))
      )}
    </div>
  );
};
