import { UserList } from './components/userlist/UserList';
import { UserRegistrationForm } from './components/userregistrationform/UserRegistrationForm';

export default function App() {
  return (
    <main className="ml-3 mt-3 flex gap-20">
      <UserRegistrationForm />
      <div className="w-0 border-l-2 border-l-gray-700"></div>
      <UserList />
    </main>
  );
}
