<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/MessageField';

ReactDOM.render(
    <App />,
    document.getElementById('root')
 );
 

// let messages = ['Привет', 'Как дела?']
// let buttonText = 'Новое сообщение'
// const handleClick = () => {
//     messages.push(buttonText)

//     ReactDom.render(
//         <MessageField messages={ messages} />,
        
//         document.getElementById('root'),
//     )

// }
// const MessageComponent = (props) => <div>{props.text}</div>
// const MessageButton = (props) => <button onClick={handleClick}>{props.buttonText}</button>
// const MessageField = (props) => {
//     const messageElements = props.messages.map (message => <MessageComponent text={message} />)
//     return (
//         <div className="">
//             <h1>React Chat</h1>
//             {messageElements}
//             <MessageButton buttonText={buttonText}/>
//         </div>
//     )
// }
=======
import React from 'react'
import ReactDom from 'react-dom'

let messages = ['Привет', 'Как дела?']
let buttonText = 'Новое сообщение'
const handleClick = () => {
    messages.push(buttonText)

    ReactDom.render(
        <MessageField messages={ messages} />,
        
        document.getElementById('root'),
    )

}
const MessageComponent = (props) => <div>{props.text}</div>
const MessageButton = (props) => <button onClick={handleClick}>{props.buttonText}</button>
const MessageField = (props) => {
    const messageElements = props.messages.map (message => <MessageComponent text={message} />)
    return (
        <div className="">
            <h1>React Chat</h1>
            {messageElements}
            <MessageButton buttonText={buttonText}/>
        </div>
    )
}
>>>>>>> 3d1e054a0d3f9016bee31c803744b98a0e9058ef




<<<<<<< HEAD
// ReactDom.render(
//     <MessageField messages={ messages} />,
    
//     document.getElementById('root'),
// )
=======
ReactDom.render(
    <MessageField messages={ messages} />,
    
    document.getElementById('root'),
)
>>>>>>> 3d1e054a0d3f9016bee31c803744b98a0e9058ef
