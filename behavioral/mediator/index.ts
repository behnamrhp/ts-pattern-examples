import { IChatroom, IMember } from "./protocols";

class Member implements IMember {
  name: string;
  chatroom: IChatroom;
  
  constructor(name: string) {
    this.name = name
  }

  send(message: string, to: IMember){
    this.chatroom.send(message, this, to)
  };
  receive(message: string, from: IMember) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  };
}

class ChatroomMediator implements IChatroom {
  members: { [key: string]: IMember; } = {};

  addMember(member: IMember) {
    this.members[member.name] = member
    member.chatroom = this
  };

  send(message: string, from: IMember, to: IMember) {
    to.receive(message, from)
  };
}

const chatroom = new ChatroomMediator();

const john = new Member('John');
const mike = new Member('mike');

chatroom.addMember(john)
chatroom.addMember(mike)

mike.send('hi john', john)
john.send('what\'s up mike', mike)