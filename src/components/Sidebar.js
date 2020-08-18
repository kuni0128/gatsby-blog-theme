import React from 'react'
import logo from '../img/social/facebook.svg'

const Sidebar = class extends React.Component {
  render() {
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
        </div>
      </div>
    )
  }
}

export default Sidebar
