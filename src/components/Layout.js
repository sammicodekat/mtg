import React, { Component } from 'react'
import {Link} from 'react-router'
import classNames from 'classnames'

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    let path = this.props.location.pathname;
    return (
      <div className='center'>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="navbar-brand"><Link to ='/'>MTG</Link></div>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li role="presentation" className={classNames({active: path === '/search'})}><Link to ='/search'>Search</Link></li>
                <li role="presentation" className={classNames({active: path === '/deck'})}><Link to ='/deck'>Deck</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div><img src={"//dl.dropboxusercontent.com/s/od20e4ek1vgsywp/logo.png?dl=0"} /></div>
        {this.props.children}
      </div>
    )
  }
}
