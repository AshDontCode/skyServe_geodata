const Toolbar = () => {
    return (
      <div className="p-4 bg-black text-white border-b flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-400">Geospatial Dashboard</h1>
        <div>
          <button className="bg-yellow-500 text-black p-2 rounded">Logout</button>
        </div>
      </div>
    );
  };
  
  export default Toolbar;
  