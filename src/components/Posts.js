import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Posts = ({ posts }) => (
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
)

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      frontmatter: PropTypes.object,
    })
  ),
}

export default Posts
