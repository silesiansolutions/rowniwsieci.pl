/** @jsx jsx */
import { jsx, Link, useThemeUI, get } from "theme-ui"
import { readableColor } from "polished"
import useSiteMetadata from "@lekoarts/gatsby-theme-jodie/src/hooks/use-site-metadata"

const Footer = ({ bg }: { bg: string }) => {
  const { siteTitle, siteUrl, author } = useSiteMetadata()
  const {
    theme: { rawColors },
  } = useThemeUI()

  const text = readableColor(
    bg,
    rawColors!.textMuted as string | undefined,
    rawColors!.textMutedLight as string | undefined
  )

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `fixed`],
        width: (t) => [`100%`, `100%`, `100%`, get(t, `sidebar.normal`), get(t, `sidebar.wide`)],
        bottom: 0,
        color: text,
        fontSize: 0,
        p: [3, 3, 4],
        background: bg,
        a: {
          color: readableColor(bg),
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        variant: `footer`,
      }}
    >
      <div>
        Copyright &copy; {new Date().getFullYear()}
        {` `}
        <Link
          aria-label="Link to the site's homepage"
          href={siteUrl}
        >
          {siteTitle}
        </Link>.
      </div>
      <div>
        Created with ❤️ by
        {` `}
        <Link
          aria-label="Link to the author's website"
          href="https://silesiansolutions.com"
          target="_blank"
        >
          {author}
        </Link>.
      </div>
    </footer>
  )
}

export default Footer