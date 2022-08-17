marked.setOptions({
    break: true
})
const renderer = new marked.Renderer;
const defaultMarkdown = `
Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~.

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

\`\`\`
Hey, look, a code block!
\`\`\`

 *[Helder S Ribeiro](https://freecodecamp.com/hsribei)*
`;

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
        <div
            id="preview"
            dangerouslySetInnerHTML={{
                __html: marked.parse(markdown, { renderer: renderer }),
            }}
        >
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));