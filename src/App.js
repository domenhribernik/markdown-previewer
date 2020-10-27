import { Component } from 'react'
import './css/app.css'
const marked = require('marked')

class App extends Component{

  constructor() {
    super()
    this.state = {
      preview: `# Welcome to my React Markdown Previewer!

      \r ## This is a sub-heading...
      \r ### And here's some other cool stuff:
      
      \r Heres some code, \`<div></div>\`, between 2 backticks.
      
      \r \`\`\`
      // this is multi-line code:
      
      function anotherExample(firstLine, lastLine) {
        if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
          return multiLineCode;
        }
      }
      \r \`\`\`
      
      \rYou can also make text **bold**... whoa!
      \rOr _italic_.
      \rOr... wait for it... **_both!_**
      \rAnd feel free to go crazy ~~crossing stuff out~~.
      
      \r There's also [links](https://www.freecodecamp.com), and
      \r > Block Quotes!
      
      \r And if you want to get really crazy, even tables:
      
      \rWild Header | Crazy Header | Another Header?\r------------ | ------------- | -------------\rYour content can | be here, and it | can be here....\rAnd here. | Okay. | I think we get it.
      
      \r- And of course there are lists.
          \r - Some are bulleted.
              \r   - With different indentation levels.
                \r     - That look like this.
      
      
      \r 1. And there are numbererd lists too.
      \r 1. Use just 1s if you want!
      \r 1. And last but not least, let's not forget embedded images:
      
      \r ![React Logo w/ Text](https://goo.gl/Umyytc)
      `
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      preview: e.target.value
    })
  }

  render() {

    return (
      <div id="content">
        <div class="text">
          <div class="title">Editor</div>
          <textarea className="scrollbar" id="editor" rows="50" cols="100" value={this.state.preview} onChange={this.handleChange}/>
        </div>
        <div class="text">
          <div class="title">Previewer</div>
          <div className="scrollbar" id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.preview)}}>
        </div>
        </div>
      </div>
    )
  }  
}

export default App
