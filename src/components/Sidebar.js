import React from 'react'
import PropTypes from 'prop-types'
import logo from '../img/social/facebook.svg'
import { Link, graphql, StaticQuery } from 'gatsby'

class Sidebar extends React.Component {
  render() {
    const { data } = this.props
    const { edges } = data.allMarkdownRemark
    const periods = edges.map((edge) => {
      return edge.node.frontmatter.period
    })
    const periodSummary = periods.reduce((allPeriods, period) => {
      period in allPeriods ? allPeriods[period]++ : allPeriods[period] = 1
      return allPeriods
    }, {})
    const archives = Object.keys(periodSummary).map((key) => (
      <p>
        <Link to={`/${key}/`}>{key} ({periodSummary[key]})</Link>
      </p>
    ))
    return (
      <div className="columns is-multiline">
        <div className="column is-12 has-text-centered">
          <article className="is-child box">
            <img
              src={logo}
              alt="Kaldi"
              style={{ width: '6em', height: '6em', borderRadius: '4em' }}
            />
            <h3>Author Name</h3>
            <p>
              hogehogehogehogehoge
              hogehogehogehogehoge
              hogehogehogehogehoge
              hogehogehogehogehoge
            </p>
          </article>
          <article className="is-child box">
            <h3>Archive</h3>
            {archives}
          </article>
        </div>
      </div>
    )
  }
}

Sidebar.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export default () => (
  <StaticQuery
    query={graphql`
      query ArchiveQuery {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]},
          filter: {frontmatter: {templateKey: {eq: "blog-post"}}},
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                period: date(formatString: "YYYY/MM")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Sidebar data={data} count={count} />}
  />
)
