import styles from './App.module.css'

const Counter = () => {
    const count = React.createRef()
    const onClick = () => count.current.innerText++

    return (
        <div>
            <h1>Counter</h1>
            <p ref={count}>0</p>
            <button onClick={onClick} type="button" class={styles.button}>
                Increment
            </button>
        </div>
    )
}

const App = () => {
    return (
        <div class={styles.App}>
            <header class={styles.header}>
                <Counter />
            </header>
        </div>
    )
}

export default App
