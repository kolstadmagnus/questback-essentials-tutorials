import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

/* article components */
import Figure from "../components/article-components/Figure"
import YouTubeIframe from "../components/article-components/YouTubeIframe"
import HeavilyEmphasized from "./article-components/HeavilyEmphasized"
import UI from "./article-components/UI"
import Tutorial from "./article-components/Tutorial"
import MainArticle from "./article-components/MainArticle"
import SeeAlso from "./article-components/SeeAlso"
import RelatedArticle from "./article-components/RelatedArticle"

const shortcodes = {
  getImage,
  GatsbyImage,
  StaticImage,
  Link,
  Helmet,
  Figure,
  YouTubeIframe,
  HeavilyEmphasized,
  UI,
  Tutorial,
  MainArticle,
  SeeAlso,
  RelatedArticle
}

export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <main>
        <MDXProvider components={shortcodes}>
          {children}
        </MDXProvider>
      </main>
    </div>
  )
}