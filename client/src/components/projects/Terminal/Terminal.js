import './terminal.scss';


const Terminal = () => {
  return (
    <div className="terminal-container">
      <div className="terminal-chat-container">
        <div className="terminal-chat-top-bar">
          <span className="terminal-chat-top-bar-dot-1"></span>
          <span className="terminal-chat-top-bar-dot-2"></span>
          <span className="terminal-chat-top-bar-dot-3"></span>
          <span className="terminal-chat-top-bar-title">Terminal</span>
        </div>
        <input className="terminal-chat-input"></input>
      </div>
    </div>
  );
};

export default Terminal;