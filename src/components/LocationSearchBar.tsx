"use client";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Search, ChevronDown } from "lucide-react";
import type { StateEntry } from "@/data/indiaCities";

const genderOptions = ["Girls", "Trans", "Couples"];

const DropdownButton = ({
    name, value, placeholder, onChange, onToggle, openDropdown, options
}: {
    name: string;
    value: string;
    placeholder: string;
    onChange: (val: string) => void;
    onToggle: (name: string) => void;
    openDropdown: string | null;
    options: { label: string; value: string }[];
}) => (
    <div className="relative flex-1 group" onClick={e => e.stopPropagation()}>
        <button
            onClick={() => onToggle(name)}
            className="w-full flex items-center justify-between gap-2 bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-zinc-800 rounded-xl px-4 py-3.5 text-[14px] font-medium transition-all"
        >
            <span className={value ? "text-white" : "text-zinc-500 truncate"}>
                {value || placeholder}
            </span>
            <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform flex-shrink-0 ${openDropdown === name ? "rotate-180" : ""}`} />
        </button>

        {openDropdown === name && (
            <div className="absolute top-[calc(100%+6px)] left-0 w-full max-h-[250px] overflow-y-auto bg-[#1e1e1e] border border-zinc-700 rounded-xl shadow-2xl z-[200] scrollbar-thin scrollbar-thumb-zinc-600">
                {options.map(opt => (
                    <button
                        key={opt.value}
                        onClick={() => { onChange(opt.value); onToggle(name); }}
                        className={`w-full text-left px-4 py-2.5 text-[13px] hover:bg-[#D91E18] hover:text-white transition-colors ${value === opt.value ? "bg-[#D91E18]/20 text-white" : "text-zinc-300"}`}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
        )}
    </div>
);

const LocationSearchBar = () => {
    const router = useNavigate();
    const [gender, setGender] = useState("Girls");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedArea, setSelectedArea] = useState("");
    const [indiaStates, setIndiaStates] = useState<StateEntry[]>([]);

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // Asynchronously load states so it doesn't block critical Hero render
    const loadCitiesData = useCallback(() => {
        if (indiaStates.length === 0) {
            import("@/data/indiaCities").then(mod => {
                setIndiaStates(mod.indiaStates);
            });
        }
    }, [indiaStates.length]);

    useEffect(() => {
        const timer = setTimeout(loadCitiesData, 100);
        return () => clearTimeout(timer);
    }, [loadCitiesData]);

    const currentState = indiaStates.find(s => s.slug === selectedState);
    const currentCity = currentState?.cities.find(c => c.slug === selectedCity);

    const handleSearch = () => {
        if (selectedCity && selectedState) {
            router(`/call-girls/${selectedState}/${selectedCity}`);
        } else if (selectedState) {
            router(`/call-girls/${selectedState}`);
        } else {
            router("/search");
        }
    };

    const toggle = (name: string) => {
        loadCitiesData();
        setOpenDropdown(prev => (prev === name ? null : name));
    };

    return (
        <div
            className="w-full max-w-4xl mx-auto"
            onClick={() => setOpenDropdown(null)}
        >
            <div className="bg-[#111111]/90 border border-zinc-800 rounded-2xl p-3 flex flex-col sm:flex-row items-stretch gap-3 shadow-2xl backdrop-blur-md">

                {/* Gender */}
                <DropdownButton
                    name="gender" value={gender} placeholder="Select Type"
                    onChange={val => setGender(val)} onToggle={toggle} openDropdown={openDropdown}
                    options={genderOptions.map(g => ({ label: `${g} Escorts`, value: g }))}
                />

                {/* State */}
                <DropdownButton
                    name="state" value={currentState?.name || ""} placeholder="Select State"
                    onChange={val => { setSelectedState(val); setSelectedCity(""); setSelectedArea(""); toggle("state"); }}
                    onToggle={toggle} openDropdown={openDropdown}
                    options={indiaStates.map(s => ({ label: s.name, value: s.slug }))}
                />

                {/* City */}
                <DropdownButton
                    name="city" value={currentCity?.name || ""} placeholder="Select City"
                    onChange={val => { setSelectedCity(val); setSelectedArea(""); toggle("city"); }}
                    onToggle={toggle} openDropdown={openDropdown}
                    options={currentState ? currentState.cities.map(c => ({ label: c.name, value: c.slug })) : [{ label: "Select a state first", value: "" }]}
                />

                {/* Area */}
                <DropdownButton
                    name="area" value={selectedArea} placeholder="Select Area"
                    onChange={val => { setSelectedArea(val); toggle("area"); }}
                    onToggle={toggle} openDropdown={openDropdown}
                    options={currentCity?.areas ? currentCity.areas.map(a => ({ label: a, value: a })) : [{ label: "Select a city first", value: "" }]}
                />

                {/* Search button */}
                <button
                    onClick={handleSearch}
                    className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D91E18] hover:bg-red-700 text-white rounded-xl font-bold text-[14px] uppercase tracking-wider transition-all active:scale-95 shadow-[0_0_20px_rgba(217,30,24,0.4)] flex-shrink-0 whitespace-nowrap"
                >
                    <Search className="w-4 h-4" />
                    Search
                </button>
            </div>
        </div>
    );
};

export default LocationSearchBar;
