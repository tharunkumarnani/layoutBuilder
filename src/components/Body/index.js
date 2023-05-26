// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const leftNavbar = () => (
    <div className="left-nav">
      <h1 className="nav-heading">Left Navbar Menu</h1>
      <ul className="items">
        <li className="list-item">Item 1</li>
        <li className="list-item">Item 2</li>
        <li className="list-item">Item 3</li>
        <li className="list-item">Item 4</li>
      </ul>
    </div>
  )
  const rightNavbar = () => (
    <div className="right-nav">
      <h1 className="nav-heading">Right Navbar</h1>
      <ul className="ads">
        <li className="ads-style">Ad 1</li>
        <li className="ads-style">Ad 2</li>
      </ul>
    </div>
  )
  const content = () => (
    <div className="content-cont">
      <h1 className="nav-heading">Content</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et Ut enim ad minim veniam.
      </p>
    </div>
  )
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="body-cont">
            {showLeftNavbar && leftNavbar()}
            {showContent && content()}
            {showRightNavbar && rightNavbar()}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
