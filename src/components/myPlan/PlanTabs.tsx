"use client";

interface PlanTabsProps {
  activeTab: "today" | "saved";
  onTabChange: (tab: "today" | "saved") => void;
  planCount: number;
  savedCount: number;
}

const PlanTabs = ({
  activeTab,
  onTabChange,
  planCount,
  savedCount,
}: PlanTabsProps) => {
  return (
    <div className="w-full">
      <div className="flex w-full rounded-lg border border-[#292c32] bg-[#111315] p-1">
        <button
          type="button"
          onClick={() => onTabChange("today")}
          className={`flex h-9 flex-1 items-center justify-center rounded-md text-[11px] font-semibold transition ${
            activeTab === "today"
              ? "bg-[#181b1e] text-white"
              : "text-gray-500 hover:text-white"
          }`}
        >
          Today's Plan
          <span
            className={`ml-2 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[9px] ${
              activeTab === "today"
                ? "bg-[#b8ff00] font-bold text-black"
                : "bg-[#292c32] text-gray-400"
            }`}
          >
            {planCount}
          </span>
        </button>

        <button
          type="button"
          onClick={() => onTabChange("saved")}
          className={`flex h-9 flex-1 items-center justify-center rounded-md text-[11px] font-semibold transition ${
            activeTab === "saved"
              ? "bg-[#181b1e] text-white"
              : "text-gray-500 hover:text-white"
          }`}
        >
          Saved
          <span
            className={`ml-2 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[9px] ${
              activeTab === "saved"
                ? "bg-[#b8ff00] font-bold text-black"
                : "bg-[#292c32] text-gray-400"
            }`}
          >
            {savedCount}
          </span>
        </button>
      </div>
    </div>
  );
};

export default PlanTabs;
