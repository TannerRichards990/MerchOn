import { signOut } from '../../services/auth';



export default function Storefront() {
  return (
    <>
      <h1>congrats you made it here!</h1>
      <div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </>
  );
}