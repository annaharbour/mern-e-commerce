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
    title: "Welcome to the shop",
    description: "We sell products",
    keywords: 'shopping, e-commerce, money, buy'
}

export default Meta