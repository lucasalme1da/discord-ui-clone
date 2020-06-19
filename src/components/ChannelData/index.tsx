import React, { useRef, useEffect, useState } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon, Mention } from './styles';
import ChannelMessage from '../ChannelMessage';


interface Message {
  key: number,
  author: string,
  date: string,
  content: string
}

const ChannelData: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    scrollToBottom()
  }, []);

  function scrollToBottom() {
    const div = document.getElementById('messageRef');
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }

  async function handleSubmit(e: React.KeyboardEvent<HTMLInputElement>) {
    const target = (e.target as HTMLTextAreaElement)
    if (e.key === 'Enter') {
      const data = {
        key: 100 + messages.length,
        author: "Sn0w",
        date: completeDate(),
        content: target.value
      }
      await setMessages([...messages, data])
      target.value = ''
      scrollToBottom()
    }
  }

  function completeDate() {
    const date = new Date();
    return (
      `${
      date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
      }/${
      date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
      }/${
      date.getFullYear()
      }`
    );
  }

  return (
    <Container>
      <Messages id="messageRef">

        {Array.from(Array(15).keys()).map(n => (
          <ChannelMessage
            key={n}
            author="Sn0w"
            date="29/12/1998"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nihil voluptatibus magni amet veritatis illo beatae, temporibus optio aperiam perferendis molestias quae, unde reprehenderit tenetur voluptatem sint delectus atque eligendi."
          />
        ))}

        <ChannelMessage
          isBot
          author="Holtz"
          date="29/12/1998"
          hasMention
          content={
            <>
              <Mention>@Sn0w</Mention>, did you git commit and git push already?
            </>
          }
        />

        {messages.map(message => (
          <ChannelMessage
            key={message.key}
            author={message.author}
            date={message.date}
            content={message.content}
          />
        ))}

      </Messages>
      <InputWrapper>
        <Input autoFocus type="text" placeholder="Conversar em #chat-livre" onKeyDown={handleSubmit} />
        {document.getElementById('inputMesssage')?.focus()}
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;