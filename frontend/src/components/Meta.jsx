import { Helmet } from "react-helmet-async"

const Meta = ({title, description, keywords}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords}/>
    </Helmet>
  )
}

Meta.defaultProps = {
    title: "Welcome to this eclectic coder shop",
    description: "We sell products that coders, programmers, and nerdy tech people love",
    keywords: 'coder clothes, tech, desk setups, keyboards'
}

export default Meta