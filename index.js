const Notification = props => {
  const {className} = props
  return <h1 className={className}>{className}</h1>
}

const element = (
  <div className='main-container'>
    <h1 classname='heading'>Notifications</h1>
    <div className='heading1'>
      <img src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png' />
      <p className='paragraph'>Information Message</p>
    </div>
    <div className='heading2'>
      <img src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png' />
      <p className='paragraph'>Success Message</p>
    </div>
    <div className='heading3'>
      <img src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png' />
      <p className='paragraph'>Warning Message</p>
    </div>
    <div className='heading4'>
      <img src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png' />
      <p className='paragraph'>Error Message</p>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
