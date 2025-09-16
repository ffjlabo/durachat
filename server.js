const path = require("path");
const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
const port = 8080;

server.listen(port, function(){
  console.log(`listening on ${port}`);
});

io.on("connection", (socket) => {
  socket.on("loginUser", (name) => {
    socket.name = name;
    socket.emit("receiveMessage", `ーー${socket.name}が入室しました`);
  });

  socket.on("disconnect", () => {
    if (!socket.name) return;
    socket.broadcast.emit("receiveMessage", `ーー${socket.name}が退室しました`);
  });

  socket.on("addPost", async (post) => {
    io.emit("receivePost", post);
    
    // AIモードの場合はOpenAI APIで推論
    if (post.aiMode) {
      io.emit("receivePost", {
        avator: {
          name: 'No Name',
          icon: 'http://localhost:3000/556eec2dbf7aa69a206b68fd994b0b75.jpg'
        },
        text: '自動応答でっせ',
        aiMode: true,
        aiModel: post.aiModel,
      });
      // OpenAI SDKの読み込み
      // const { Configuration, OpenAIApi } = require("openai");
      // const configuration = new Configuration({
      //   apiKey: process.env.OPENAI_API_KEY,
      // });
      // const openai = new OpenAIApi(configuration);

      // try {
      //   const completion = await openai.createChatCompletion({
      //     model: post.aiModel || "gpt-3.5-turbo",
      //     messages: [
      //       { role: "system", content: "あなたは親切なAIです。" },
      //       { role: "user", content: post.text }
      //     ],
      //   });
      //   const aiText = completion.data.choices[0].message.content;
      //   // AIの返答をクライアントに送信
      //   io.emit("receivePost", {
      //     avator: {
      //       name: 'AI',
      //       icon: post.aiModel === 'gpt-4' ? '/images/durachat-icon-02.jpg' : '/images/durachat-icon-01.jpg',
      //     },
      //     text: aiText,
      //     aiMode: true,
      //     aiModel: post.aiModel,
      //   });
      // } catch (err) {
      //   console.error("OpenAI API error:", err);
      // }
    }
  });
});
