import {store} from "./app/store"
import { Provider, useDispatch } from "react-redux";
import PostsList from "./features/posts/PostsList";
import AddPost from "./features/posts/AddPost";
import { selectAllUsers } from "./features/users/userSlice";
import { fetchUsers } from "./features/users/userSlice";

function App() {
  const dispatch = useDispatch();
  store.dispatch(fetchUsers())
  return (
    <Provider store={store}>
    <main className="App">
      <AddPost/>
      <PostsList/>
    </main>
    </Provider>
  );
}

export default App;
