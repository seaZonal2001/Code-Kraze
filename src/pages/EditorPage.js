import React, { useState } from "react";
import Client from "../components/Client";
import Editor from "../components/Editor";

const EditorPage = () => {
  const [clients, setClients] = useState([
    { socketId: 1, username: "SURJIT" },
    { socketId: 2, username: "TIJRUS" },
  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img
              src="/code-sync.png"
              className="logoImg"
              alt="code-sync-logo"
            />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {
                clients.map(client => (
                    <Client key={client.socketId} username={client.username} />
                ))
            }
          </div>
        </div>
        <button className="btn cpoyBtn">Copy ROOM ID</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap">
        <Editor/>
      </div>
    </div>
  );
};

export default EditorPage;
