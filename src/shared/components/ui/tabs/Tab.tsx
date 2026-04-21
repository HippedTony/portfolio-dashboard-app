interface TabProps {
  tabName: string;
  activeTab: string;
  setActiveTab: (text: string) => void;
  text: string;
}

function Tab({ tabName, activeTab, setActiveTab, text }: TabProps) {
  return (
    <button
      role="tab"
      aria-selected={activeTab === tabName}
      onClick={() => setActiveTab(tabName)}
      className={`xs:mx-2 xs:px-4 overflow-x-hidden rounded-t-xl border-solid border-b-[rgb(127,135,144)] px-3 py-2 text-sm text-ellipsis whitespace-nowrap text-[rgb(127,135,144)] lg:border-b lg:bg-transparent lg:pt-0 lg:pb-1 lg:text-base ${
        activeTab === tabName
          ? "bg-custom-border text-white lg:border-b-white lg:bg-transparent"
          : "hover:text-white lg:border-b-0"
      }`}
    >
      {text}
    </button>
  );
}

export default Tab;
