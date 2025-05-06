import styles from './App.module.css'

const Counter = () => {
    const countRef = React.createRef<HTMLParagraphElement>()

    const onClick = () => {
        const currentValue = Number.parseInt(countRef.current!.innerText) || 0
        countRef.current!.innerText = (currentValue + 1).toString()
    }

    return (
        <div>
            <h1>Counter</h1>
            <p ref={countRef}>0</p>
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
