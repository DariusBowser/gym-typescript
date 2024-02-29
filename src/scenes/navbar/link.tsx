import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  page: string;
  selectedPaged:string;
  setSelectedPage: (value: string) => void;
}

function link({
  page,
  selectedPage,
  setSelectedPage,
}: Props) {
  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "")

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
      transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >

      {page}
    </AnchorLink>
  )
}

export default link