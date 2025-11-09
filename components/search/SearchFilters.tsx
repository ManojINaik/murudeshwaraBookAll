export function SearchFilters() {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Category
          </label>
          <select className="w-full p-2 border border-neutral-300 rounded-lg">
            <option>All Categories</option>
            <option>Hotels</option>
            <option>Restaurants</option>
            <option>Scuba Diving</option>
            <option>Boating</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Price Range
          </label>
          <input 
            type="range" 
            min="0" 
            max="20000" 
            className="w-full"
          />
          <div className="flex justify-between text-xs text-neutral-500 mt-1">
            <span>₹0</span>
            <span>₹20,000+</span>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Distance from Temple
          </label>
          <input 
            type="range" 
            min="0" 
            max="20" 
            className="w-full"
          />
          <div className="flex justify-between text-xs text-neutral-500 mt-1">
            <span>0km</span>
            <span>20km</span>
          </div>
        </div>
        
        <div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">Instant Confirmation</span>
          </label>
        </div>
      </div>
    </div>
  );
} 