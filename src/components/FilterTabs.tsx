const FilterTabs = () => {
  const tabs = ["All Listings", "Diamond", "Gold", "Silver", "Online Now", "New", "With Video"];
  
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
            i === 0
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-accent"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
