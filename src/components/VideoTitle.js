

const VideoTitle = ({ title , overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[12%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-4 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black p-3 px-12 text-xl rounded-lg hover:bg-opacity-50">
            ▶ Play</button>
        <button className="mx-2 bg-white text-black p-3 px-12 text-xl rounded-lg hover:bg-opacity-50">
            More Info</button>
      </div>
    </div>
  )
};

export default VideoTitle;
