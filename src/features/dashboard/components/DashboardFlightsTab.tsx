interface DashboardFlightsTabProps {
  tabName: string;
  activeTab: string;
  setActiveTab: (text: string) => void;
  text: string;
}

function DashboardFlightsTab({
  tabName,
  activeTab,
  setActiveTab,
  text,
}: DashboardFlightsTabProps) {
  return (
    <button
      role="tab"
      aria-selected={activeTab === tabName}
      onClick={() => setActiveTab(tabName)}
      className={`mx-2 overflow-x-hidden border-solid border-b-[rgb(127,135,144)] bg-transparent text-sm text-ellipsis whitespace-nowrap text-[rgb(127,135,144)] lg:border-b lg:text-base px-4 pb-1 ${
        activeTab === tabName
          ? "bg-custom-border text-white lg:border-b-white lg:bg-transparent"
          : "lg:border-b-0 hover:text-white"
      }`}
    >
      {text}
    </button>
  );
}

export default DashboardFlightsTab;
