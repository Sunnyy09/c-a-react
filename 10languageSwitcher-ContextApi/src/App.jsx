// import "./App.css";
import ContentDisplay, { LanguageSwitcher } from "./Components/ContentDisplay";
import { LanguageProvider } from "./Contexts/LanguageContext.jsx";

function App() {
  return (
    <LanguageProvider>
      <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="mb-8 text-2xl text-gray-700 font-semibold text-center w-auto">
          Language Switcher App
        </h1>
        <div className="flex min-h-[70vh] items-center flex-col justify-around border border-gray-200 rounded-md shadow-md lg:max-w-[40vw]">
          <div className="w-full flex justify-center  py-5">
            <LanguageSwitcher />
          </div>
          <div className="max-w-[450px] min-h-28">
            <ContentDisplay />
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
