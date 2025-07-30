import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-[#191919]">Oops!</h1>
      <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-sm text-[#191919]">
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="text-[#f5f5f5] bg-[#191919] p-3 rounded-lg mt-10">
        <Link to={"/"}>
            Back to Home
        </Link> 
      </button>
    </div>
  );
}
