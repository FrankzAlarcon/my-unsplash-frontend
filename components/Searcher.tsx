import { useUnsplash } from "../hooks/useUnsplash";

export default function Searcher() {
  const { searcher, updateSearcher } = useUnsplash();
  return (
    <div>
      <label htmlFor="searcher">
        <input
          className="border py-2 px-3 rounded-lg shadow-sm w-72"
          id="searcher "
          value={searcher}
          onChange={(e) => updateSearcher(e.target.value)}
          type="text" placeholder="Search by name" />
      </label>
    </div>
  )
}
