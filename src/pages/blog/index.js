import React from 'react'

import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns is-multiline">
                    <div className="column is-8">
                      <BlogRoll />
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
  }
}
