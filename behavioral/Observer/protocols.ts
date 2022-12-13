
export interface ISubject {
  observers: counterObserver[];
  subscribe: (observer: counterObserver) => void;
  unsubscribe: (observer: counterObserver) => void;
}

export type counterObserver = {
  run: () => void
}