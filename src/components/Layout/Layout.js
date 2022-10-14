import './Layout.scss'
import Sidebar from '../sidebar/Sidebar'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Soundbar from '../Soundbar/Soundbar'

function Layout() {

  let snowflakes = []
  for (let i=0; i<50 ; i++) {
    snowflakes.push(<div className='snowflake'></div>)
  }



  return (
    <Fragment>
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        
        <span className="tags bottom-tags">
          
          &lt;/body&gt;
          <br />
          <span className='bottom-tag-html'>&lt;html&gt;</span>
        </span>
        {snowflakes}
      </div>
    </div>
    <Soundbar />
    </Fragment>
  )
}

export default Layout
