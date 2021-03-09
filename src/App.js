import React, {useState, useEffect, useRef, useCallback, useMemo} from 'react'
import useLocalStorage from './useLocalStorage'
import useUpdateLogger from './useUpdateLogger'
import List from './List.js'

// Custom Hooks
/* export default function App() {
  const [name, setName] = useLocalStorage('name', '')
  useUpdateLogger(name)
  return (
    <input
      type="text"
      value={name}
      onChange={e => setName(e.target.value)}
    />
  )
} */

// useRef
/* export default function App() {
  const [name, setName] = useState('')
  const prevName = useRef('')

  useEffect(() => {
    prevName.current = name
  }, [name])

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>
    </>
  )
} */

// useCallback
/* export default function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const getItems = useCallback(incrementor => {
    return [number, number + 1 + incrementor, number + 3 + incrementor]
  }, [number])

  const value = useMemo(() => {
    console.log({number})
    return number + 1
  }, [number])
  console.log({value})

  const theme = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333'
  }

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  )
} */

// Closure
/* export default function App() {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  countRef.current = count

  useEffect(() => {
    setTimeout(() => {
      alert('You clicked on: ' + countRef.current)
    }, 3000)
  }, [])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
} */