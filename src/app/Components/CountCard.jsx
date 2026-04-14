const CountCard = async() => {

    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    const friends = data.friends;

    const onTrack = friends.filter(friend => friend.status === "on-track");


    return (
        <div className="max-w-277.5 p-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 ">
            <div className="rounded-lg shadow-xl border-2 border-gray-300 p-8">
                <h1 className="text-center text-[#244D3F] font-semibold">{friends.length}</h1>
                <h3 className="text-center text-[#64748B]">Total Friends</h3>
            </div>
            <div className="rounded-lg shadow-xl border-2 border-gray-300 p-8">
                <h1 className="text-center text-[#244D3F] font-semibold">{onTrack.length}</h1>
                <h3 className="text-center text-[#64748B]">On Track</h3>
            </div>
            <div className="rounded-lg shadow-xl border-2 border-gray-300 p-8">
                <h1 className="text-center text-[#244D3F] font-semibold">{6}</h1>
                <h3 className="text-center text-[#64748B]">Need Attention</h3>
            </div>
            <div className="rounded-lg shadow-xl border-2 border-gray-300 p-8">
                <h1 className="text-center text-[#244D3F] font-semibold">{12}</h1>
                <h3 className="text-center text-[#64748B]">Interactions This Month</h3>
            </div>
        </div>
    );
};

export default CountCard;