import withAuth from "../utils/protectRoute/withAuth";

const Home = () => {
  return (
    <div className="Home h-[80%] flex-col flex justify-center items-center">
      <button className="px-4 py-3 bg-blue-700 hover:bg-blue-800 rounded text-gray-200">
        Make a Video Call
      </button>
    </div>
  )
}

export default withAuth(Home);