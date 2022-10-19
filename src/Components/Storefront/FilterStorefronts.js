export default function FilterStorefronts({ search, setSearch }) {
  return (
    <div>
      <p>Search:</p>
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
    </div>
  );
}