import type { IGatsbyImageData } from "gatsby-plugin-image"
import { onlyProjects } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates"

interface IGridItem {
  slug: string
  title: string
  cover: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  __typename: "MdxProject" | "MdxPage"
}

const modifyGrid = (data: Array<IGridItem>): Array<IGridItem> => onlyProjects(data)

export default modifyGrid
