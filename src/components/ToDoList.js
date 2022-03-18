import React, { useEffect, useState } from 'react'
import Modal from './ConfirmModal'
import '../style/ToDoList.scss'

function ToDoList(props) {
  const { todoItem } = props
  const [listItem, setListItem] = useState([])
  const [show, setShow] = useState(false)
  const [modalContent, setModalContent] = useState({
    type: '',
    content: '',
  })

  // 取得 localstorage 的內容
  useEffect(() => {
    const currentListItem = JSON.parse(localStorage.getItem('todo')) || []
    setListItem(currentListItem)
  }, [todoItem, show])

  return (
    <div className="todo-list">
      <Modal show={show} setShow={setShow} modalContent={modalContent} />
      {listItem.map((item, i) => {
        return (
          <div key={item.time} className="d-flex todo-item">
            <div>{item.item}</div>
            <div>
              <button
                type="button"
                className="btn submit-btn"
                onClick={() => {
                  setShow(true)
                  setModalContent({
                    ...modalContent,
                    type: 'remove',
                    content: item.item,
                  })
                }}
              >
                移除
              </button>
              <button
                type="button"
                className="btn submit-btn"
                onClick={() => {
                  setShow(true)
                  setModalContent({
                    ...modalContent,
                    type: 'finished',
                    content: item.item,
                  })
                }}
              >
                完成
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ToDoList
