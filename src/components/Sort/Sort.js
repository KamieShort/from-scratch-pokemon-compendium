export default function Sort({ setSort }) {
  return (
    <div>
      <label>
        A-Z
        <input name="select" type="radio" value="asc" onChange={(e) => setSort(e.target.value)} />
      </label>
      <label>
        Z-A
        <input name="select" type="radio" value="desc" onChange={(e) => setSort(e.target.value)} />
      </label>
    </div>
  );
}
