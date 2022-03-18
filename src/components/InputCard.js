import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import '../style/InputCard.scss'

function InputCard(props) {
  const { todoItem, setTodoItem } = props
  const [disabled, setDisabled] = useState(false)
  const [errMsg, setErrMsg] = useState('')

  // onChange input
  const handleChange = (e) => {
    setTodoItem(e.target.value)
    setErrMsg('')
  }
  // for onClick submit
  const handleSubmit = async (e) => {
    if (disabled) {
      return
    } else if (!todoItem) {
      setErrMsg('不得為空值')
      return
    }
    e.preventDefault()
    setDisabled(true)
    // 模擬 call API
    const doAPI = function (timer) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          setDisabled(false)
          resolve('finished!')
        }, timer)
      })
    }
    await doAPI(1300)

    // 取得目前 localstorage 中的 todo list
    if (!disabled) {
      let currentListItem = JSON.parse(localStorage.getItem('todo')) || []
      const time = new Date().getTime()
      currentListItem.push({ item: todoItem, time: time })
      console.log('currentListItem2', currentListItem)
      // 將新待辦事項存入 localstorage 中
      localStorage.setItem('todo', JSON.stringify(currentListItem))
      // 將 input 清空
      setTodoItem('')
    }
  }
  // for keyUp(Enter) submit
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }
  // input 驗證
  const handleInvalid = (e) => {
    if (!e.target.value) {
      setErrMsg('不得為空值')
    }
  }

  return (
    <div className="input-card">
      <h2>待辦事項</h2>
      <p className="required">項目</p>
      <div className="row gx-2 pb-2">
        <div className="col-lg-9">
          <input
            type="text"
            className={`form-control ${errMsg && 'invalid'}`}
            placeholder="請輸入待辦事項"
            value={todoItem}
            onChange={(e) => {
              handleChange(e)
              handleInvalid(e)
            }}
            onKeyUp={handleKeyUp}
            disabled={disabled}
          />
        </div>
        <div className="col-lg-3 text-center">
          <button
            type="button"
            className="btn w-100 submit-btn"
            onClick={handleSubmit}
            disabled={disabled}
          >
            {!disabled ? '送出' : <Spinner />}
          </button>
        </div>
      </div>
      <div className="errMsg">{errMsg ? <div>{errMsg}</div> : ''}</div>
    </div>
  )
}

export default InputCard
