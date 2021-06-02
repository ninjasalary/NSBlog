import { graphql, useStaticQuery } from "gatsby"

export default function useTagsData() {
  const data = useStaticQuery(graphql`
  query allTags {
    allDataYaml {
      nodes {
        tags
      }
    }
  }  
  `)
  return data.allDataYaml
}