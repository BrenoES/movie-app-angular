import { BehaviorSubject } from 'rxjs';

const FirestoreStub = {
  collection: (name: string) => ({
    doc: (_id: string) => ({
      valueChanges: () => new BehaviorSubject(name),
      set: (_d: unknown) => new Promise((resolve) => resolve(_d)),
    }),
  }),
};

export { FirestoreStub };
