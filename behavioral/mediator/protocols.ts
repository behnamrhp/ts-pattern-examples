export interface IMember {
  name: string;
  chatroom: IChatroom;
  send: (message: string, to: IMember) => void;
  receive: (message: string, from: IMember) => void;
}

export interface IChatroom {
  send: (message:string, from:IMember, to:IMember) => void;
  members: {[key: string]: IMember};
  addMember: (member: IMember) => void
}
