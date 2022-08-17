
const renderer = new marked.Renderer;
const defaultMarkdown = `
# This is how we write heading element
## This is how we write sub - heading...
There's also [links](https://nirajanmalla.com.np), click to visit my portfolio   
\`writing inline code\`

            <html>
                <head>
                    <title>Code Block</title>
                </head>
            </html>
1. This is first item of list.
2. This is the second.
3.This is third item.

> this is a Blockquote
![The lorem picsum](https://picsum.photos/200/200)

**A bold text**
`;
marked.setOptions({
    breaks: true
});
function App() {
    const [text, setText] = React.useState(defaultMarkdown);
    function handleChange(e) {
        const value = e.target.value;
        setText(value);
    }

    return (
        <>
            <h1>Markdown Previewer</h1>
            <textarea
                id="editor"
                value={text}
                onChange={handleChange}
                rows="10"
                placeholder="write markdown text here..."
            >

            </textarea>
            <h1>Output:</h1>
            <Preview markdown={text} />
        </>
    )
}

function Preview({ markdown }) {
    return (
        <>
            <div
                id="preview"
                dangerouslySetInnerHTML={{
                    __html: marked.parse(markdown, { renderer: renderer }),
                }}
            >
            </div>
            <footer>created with ♥ by Nirajan</footer>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));