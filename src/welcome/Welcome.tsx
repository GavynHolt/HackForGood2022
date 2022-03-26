import SearchForm from "./SearchForm";

function Welcome() { 
  return (
    <div className="bg-welcome-background bg-cover min-h-screen">
      <div className="mx-auto w-11/12 max-w-5xl flex flex-col items-center">
        <h1 className="text-2xl bold my-4">Welcome to Mental Busters, Inc.</h1>
        <p>
          We're here to connect you to mental health service and related
          financial support.
        </p>

        <button
          type="button"
          className="py-2 px-4 my-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full self-end"
        >
          Help
        </button>

        <SearchForm />
      </div>
    </div>
  );
}

export default Welcome;
