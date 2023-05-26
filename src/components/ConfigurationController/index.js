// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => {
  console.log('confi')
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent,
          onToggleShowLeftNavbar,
          onToggleShowRightNavbar,
        } = value

        return (
          <div className="confi-cont">
            <h1 className="layout">Layout</h1>
            <input
              type="checkbox"
              id="content"
              className="check-box"
              checked={showContent}
              onClick={onToggleShowContent}
            />
            <label htmlFor="content" className="label-style">
              Content
            </label>
            <br />
            <input
              type="checkbox"
              id="leftNavbar"
              className="check-box"
              checked={showLeftNavbar}
              onClick={onToggleShowLeftNavbar}
            />
            <label htmlFor="leftNavbar" className="label-style">
              Left Navbar
            </label>
            <br />
            <input
              type="checkbox"
              id="rightNavbar"
              className="check-box"
              checked={showRightNavbar}
              onClick={onToggleShowRightNavbar}
            />
            <label htmlFor="rightNavbar" className="label-style">
              Right Navbar
            </label>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default ConfigurationController
