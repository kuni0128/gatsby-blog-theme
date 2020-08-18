import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const PeriodSummaryPage = ({
  data: {
    allMarkdownRemark: { totalCount, edges: posts },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="columns is-multiline">
                <div className="column is-8">

                  <div className="columns is-multiline">
                    {posts &&
                      posts.map(({ node: post }) => (
                        <div className="is-parent column is-12" key={post.id}>
                          <article
                            className={`blog-list-item tile is-child box notification ${
                              post.frontmatter.featuredpost ? 'is-featured' : ''
                            }`}
                          >
                            <header>
                              <p className="post-meta">
                                <span className="subtitle is-size-12 is-block">
                                  {post.frontmatter.date}
                                </span>
                                <Link
                                  className="title has-text-primary is-size-4"
                                  to={post.fields.slug}
                                >
                                  {post.frontmatter.title}
                                </Link>
                              </p>
                              <div className="featured-thumbnail">
                                <PreviewCompatibleImage
                                  imageInfo={{
                                    image: post.frontmatter.featuredimage,
                                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                  }}
                                />
                              </div>
                            </header>
                            <p className="has-text-centered">
                              {post.excerpt}
                              <br />
                              <br />
                              <Link className="button" to={post.fields.slug}>
                                READ MORE
                              </Link>
                            </p>
                          </article>
                        </div>
                      ))}
                  </div>

                </div>
                <div className="column is-4">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default PeriodSummaryPage

// PeriodSummaryPageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   subheading: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array,
//   }),
// }

// const PeriodSummaryPage = ({ data }) => {
//   const { allMarkdownRemark, site } = data

//   return (
//     <Layout>
//       <PeriodSummaryPageTemplate
//         title={}
//       />
//     </Layout>
//   )
// }

// PeriodSummaryPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

// export default PeriodSummaryPage

export const periodSummaryPageQuery = graphql`
  query ($periodStartDate: Date, $periodEndDate: Date) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 200
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { date: { gte: $periodStartDate, lt: $periodEndDate } }
      }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "YYYY/MM/DD")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
