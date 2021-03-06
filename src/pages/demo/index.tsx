import React from 'react'

import { useRecoilState, useRecoilValue } from 'recoil'
import { countState, doubleCountState } from '../../store/demo'
import $http from '@/api/demo'

import styled from 'styled-components'
const Button = styled.button`
  background-color: aliceblue;
  font-size: 16px;
`

export function Demo() {
  const [count, setCount] = useRecoilState(countState)

  const doublecount = useRecoilValue(doubleCountState)

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleRequest = () => {}

  return (
    <div>
      <h3>demo页面</h3>

      <div>
        <Button onClick={handleClick}>点击体验Recoil状态管理{count}</Button>
      </div>

      <h3>数字翻倍：{doublecount}</h3>
      <div>
        <Button>styled-component使用示例</Button>
      </div>

      <div>
        <Button onClick={$http.musicRankingsDetails}>请求接口</Button>
      </div>
    </div>
  )
}
