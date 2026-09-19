import { cities } from "@/data/listings";
import { MapPin } from "lucide-react";

const CityFilter = () => {
  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="rounded-lg border border-border bg-card p-4">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-4 w-4 text-primary" />
          <h3 className="font-display text-sm font-semibold text-foreground">French Cities</h3>
        </div>
        <p className="text-xs text-muted-foreground mb-3">Surf safely</p>
        <div className="space-y-1">
          {cities.map((city) => (
            <button
              key={city.name}
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors group"
            >
              <span className="text-foreground/80 group-hover:text-foreground">{city.name}</span>
              <span className="text-xs text-muted-foreground">{city.count}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default CityFilter;
