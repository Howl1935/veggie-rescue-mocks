function Home() {
  return (
    <div className="flex flex-col">
      <button className="w-96 h-36 bg-slate-300 rounded-xl shadow-2xl m-4">
        DELIVERIES
      </button>
      <button className="w-96 h-36 bg-slate-300 rounded-xl shadow-2xl m-4">
        TODAYS LOG
      </button>
      <button className="w-96 h-36 bg-slate-300 rounded-xl shadow-2xl m-4">
        PUNCH OUT
      </button>
    </div>
  );
}

export default Home;
