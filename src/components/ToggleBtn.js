import React from 'react'
import '../style/ToggleBtn.scss'

function ToggleBtn(props) {
  const { toggle, setToggle } = props
  const handleUnfinished = () => setToggle('unfinished')
  const handleFinished = () => setToggle('finished')
  return (
    <div className="btn-group toggle-btn-group" role="group">
      <button
        type="button"
        className={`btn ${toggle === 'unfinished' && 'active'}`}
        onClick={handleUnfinished}
      >
        待完成
      </button>
      <button
        type="button"
        className={`btn ${toggle === 'finished' && 'active'}`}
        onClick={handleFinished}
      >
        已完成
      </button>
    </div>
  )
}

export default ToggleBtn
