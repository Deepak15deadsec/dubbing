import { action, Action, createStore, persist } from "easy-peasy";
import { User} from "../type";

export interface EasyPeasyStore {
  authenticate: Boolean;
  user: User,
  token: String,
  addToken: Action<this, String>,
  addUser: Action<this, User>,
  removeUser : Action<this, User>
}

const initialState = {
  authenticate: false,
  user: { name: '', id: '', token: '', email: '' },
  token: ""
};

export const store = createStore<EasyPeasyStore>(
  persist({
    ...initialState,
    addToken: action((state: any, token: string) => {
      state.token = token;
    }),
    addUser: action((state: any, user: User) => {
      state.user = user
      state.authenticate = true
    }),
    removeUser: action((state: any, user: User) => {
      state.user =  {name: '', id: '', token: '', email: '' }
      state.authenticate = false
    })
  },
    {
      storage: 'localStorage'
      
    }),
  {
    name: 'advertiser'
  }
);