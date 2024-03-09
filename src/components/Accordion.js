const Accordion = ({ onSignOut }) => {
  return (
    <div className="flex absolute flex-col gap-2 bg-black/95 z-50 min-w-[170px] pt-2 border border-gray-500 rounded-md  right-[10px]">
      <a
        href=""
        className="flex items-center px-4 py-2 gap-3 text-xs text-slate-500 hover:text-white"
      >
        <div class="w-5 h-5 bg-green-500"></div>
        <div>Children</div>
      </a>
      <a
        href=""
        className="flex items-center px-4 py-2 gap-3 text-xs text-slate-500 hover:text-white"
      >
        <div class="w-5 h-5 bg-red-500"></div>
        <div>Abhitachi</div>
      </a>
      <a
        href=""
        className="flex items-center px-4 py-2 gap-3 text-xs text-slate-500 hover:text-white"
      >
        <div class="w-5 h-5 bg-gray-700"></div>
        <div>Manage Profile</div>
      </a>
      <div className="px-2 gap-3 text-xs text-slate-300 flex justify-center items-center border-t border-gray-700 mt-4 hover:text-white">
        <button className="p-3" onClick={onSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Accordion;
