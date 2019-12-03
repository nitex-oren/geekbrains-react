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




// ReactDom.render(
//     <MessageField messages={ messages} />,
    
//     document.getElementById('root'),
// )