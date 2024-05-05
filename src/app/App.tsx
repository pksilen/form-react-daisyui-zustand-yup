import { UserList } from './components/userlist/UserList';
import { UserRegistration } from './components/userregistration/UserRegistration';

export default function App() {
  return (
    <main className="flex gap-20 ml-3 mt-3">
      <UserRegistration />
      <div className="border-l-2 border-l-gray-700 w-0"></div>
      <UserList />
    </main>
  );
}
