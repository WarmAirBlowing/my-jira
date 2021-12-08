import React, { useState, useEffect } from 'react'
import qs from 'qs'
import List from './List'
import SearchPanel from './SearchPanel'
import { cleanObject } from 'utils'

// 本地开发会默认使用.env.development中的变量 npm run build时才会使用.env中的变量
const apiUrl = process.env.REACT_APP_API_URL

const ProjectlistScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async res => {
      if(res.ok) {
        setUsers(await res.json())
      }
    })
  }, [])

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res => {
      if(res.ok) {
        setList(await res.json())
      }
    })
  }, [param])
 
  return <div>
    <SearchPanel users={users} param={param} setParam={setParam}/>
    <List users={users} list={list}/>
  </div>
}

export default ProjectlistScreen