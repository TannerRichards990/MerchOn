export default function FilterStorefronts({ location, setLocation }) {
  return (
    <>
      <p>Find a store near you</p>
      <select
        className="option"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}>
        <option value ="98686">98686</option>
        <option value ="97214">97214</option>   
        <option value ="98640">98640</option>     
      </select>
    </>
  );
}
