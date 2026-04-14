const Banner = () => {
  return (
    <div className="max-w-277.5 mx-auto mt-20 space-y-4">
      <h1 className="text-center font-bold text-[#1F2937] text-5xl">Friends to keep close in your life</h1>
      <p className="text-center text-[#64748B]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships <br /> that matter most.
      </p>
      <div className="text-center">
        <button className="btn btn-ghost text-white bg-[#244D3F]">+ Add a Friend</button>
      </div>
    </div>
  );
};

export default Banner;
