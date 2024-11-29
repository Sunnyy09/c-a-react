import React from "react";
import { useLanguage } from "../Contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="w-full ">
      <div className="flex justify-center space-x-8 p-5">
        <button
          className="bg-gray-100 px-4 py-2 text-lg text-gray-700 font-semibold rounded border border-gray-200 active:bg-slate-200 outline-none hover:ring-1 hover:ring-gray-400"
          onClick={() => setLanguage("en")}
        >
          English
        </button>
        <button
          className="bg-gray-100 px-4 py-2 text-lg text-gray-700 font-semibold rounded border border-gray-200 active:bg-slate-200 outline-none hover:ring-1 hover:ring-gray-400"
          onClick={() => setLanguage("es")}
        >
          Spanish
        </button>
        <button
          className="bg-gray-100 px-4 py-2 text-lg text-gray-700 font-semibold rounded border border-gray-200 active:bg-slate-200 outline-none hover:ring-1 hover:ring-gray-400"
          onClick={() => setLanguage("fr")}
        >
          French
        </button>
      </div>
      <div className="text-center p-5">
        <p className="text-gray-700 text-lg ">
          <i>Current Language:</i>{" "}
          <span className="underline font-semibold">
            {language.toUpperCase()}
          </span>
        </p>
      </div>
    </div>
  );
};

function ContentDisplay() {
  const { language } = useLanguage();

  const content = {
    en: "Hello, welcome to the Language Switcher App!",
    es: "¡Hola, bienvenido a la aplicación de cambio de idioma!",
    fr: "Bonjour, bienvenue dans l'application de changement de langue!",
  };

  return (
    <div className="h-40 bg-slate-50 mx-8 p-4 mb-5 rounded">
      <h1 className="text-center text-gray-700 font-semibold text-xl">
        {content[language]}
      </h1>
    </div>
  );
}

export default ContentDisplay;
