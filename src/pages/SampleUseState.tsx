import React, { useState } from 'react'

function SampleUseState() {
  const [count, setCount] = useState(0)
  const [obj, setObj] = useState({ name: 'Test User', address: 'nowhere' })

  return (
    <div>
      <div>
        <br />
        <br />
        <div>
          Current Count {count}
          <button onClick={() => setCount(count + 1)}> + </button>
          <button onClick={() => setCount(count - 1)}> - </button>
          <br />
          <br />
          <div>Name: {obj.name}</div>
          <br />
          <div>Address: {obj.address}</div>
          <br />
          <button onClick={() => setObj({ name: 'Someone else', address: 'somewhere' })}>
            Change
          </button>
        </div>
      </div>
    </div>
  )
}

export default SampleUseState
