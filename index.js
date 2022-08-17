marked.setOptions({
    break: true
})
const renderer = new marked.Renderer;

function App() {
    const [text, setText] = React.useState("");
    function handleChange(e) {
        const value = e.target.value;
        setText(value);
    }
    return (
        <>
            <h1>Markdown Previewer</h1>
            <textarea id="editor" value={text} onChange={handleChange} placeholder="write markdown text here..."></textarea>
            <h1>Output:</h1>
            <div id="preview" dangerouslySet></div>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));