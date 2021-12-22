import { of } from 'rxjs';
interface User {
  uid: string;
}

const FireAuthStub = (user: User | null = null) => {
  return {
    authState: of(user),
  };
};

export { FireAuthStub };
