import './Message.css';


function Message(props) {
  return (
    <div className="message">Текст сообщения:  { props.mes }</div>
  );
};



export default Message;
