import React from "react";
// import IMG from './chat.png'
import IMG from "../../assets/Images/chat.png";

const Main = () => {
  return (
    <>
      <div className="min-h-screen min-w-screen relative">
        {/* Background Portion */}
        <div
          className="bg-gradient-to-r
        from-green-700 absolute top-0
        to-green-900
          w-full h-52"
        ></div>
        
        {/* End */}

        {/* Chat Window */}
        <div className="h-[calc(100%_-_0.75rem)] p-5 w-full absolute top-3 bg-transparent">
          <div className="bg-white h-full w-full shadow-xl ">
            <div className="grid grid-cols-4 gap-0 h-full w-full">
              {/* Left side begins */}
              <div className="col-span-1 w-full min-h-full overflow-y-auto">
                <aside
                  id="logo-sidebar"
                  className="h-full transition-transform border-0 border-r border-r-gray-200"
                  aria-label="Sidebar"
                >
                  <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    {/* <a
                      href="https://flowbite.com/"
                      className="flex items-center ps-2.5 mb-5"
                    >
                      <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg
                          className="absolute w-7 h-7 text-gray-400 left-1 top-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>

                      <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800 pl-2 dark:text-white">
                        Somnath
                      </span>
                      <span className="material-symbols-outlined text-3xl pl-32 text-gray-400">
                        more_vert
                      </span>
                    </a> */}

                    <div className="flex sm:items-center justify-between py-3 border-b border-b-gray-200 px-2">
                      <div className="flex items-center justify-between space-x-2">
                        <div className="relative inline-flex 
                            items-center justify-center
                            overflow-hidden bg-neutral-200 rounded-full dark:bg-gray-600
                            w-8 sm:w-8 h-8 sm:h-8 rounded-full
                            py-3">
                          <span className="font-bold text-gray-600 dark:text-gray-300 text-xs">SSM</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-medium">Suman Somnath Mitra</span>
                          <span className="text-[10px] font-medium">01:30 PM</span>

                        </div>
                      </div>
                    

                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full h-8 w-8 
                        transition duration-500 ease-in-out text-green-900
                        font-bold
                        bg-gray-100
                        hover:text-white
                        hover:bg-green-900 focus:outline-none"
                      >
                       <span className="material-symbols-outlined text-[20px]">more_vert</span>
                  
                      </button>

                    </div>

                    {/* Below Portion of Side Bar */}
                    <ul className="space-y-2 font-medium">
                      <li>
                        <a
                          href="#"
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <svg
                            className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 21"
                          >
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                          </svg>
                          <span className="ms-3">Dashaboard</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 18"
                          >
                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                          </svg>
                          <span className="flex-1 ms-3 whitespace-nowrap">
                            Kanban
                          </span>
                          <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                            Pro
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                          </svg>
                          <span className="flex-1 ms-3 whitespace-nowrap">
                            Inbox
                          </span>
                          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                            3
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 18"
                          >
                            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                          </svg>
                          <span className="flex-1 ms-3 whitespace-nowrap">
                            Users
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 20"
                          >
                            <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                          </svg>
                          <span className="flex-1 ms-3 whitespace-nowrap">
                            Products
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                            />
                          </svg>
                          <span className="flex-1 ms-3 whitespace-nowrap">
                            Sign In
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                            <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                            <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                          </svg>
                          <span className="flex-1 ms-3 whitespace-nowrap">
                            Sign Up
                          </span>
                        </a>
                      </li>
                    </ul>
                    {/* End */}
                  </div>
                </aside>
              </div>
              {/* left side ends */}
              {/* Right side begins */}
              <div
                className="col-span-3
                          overflow-y-auto"
              >
                <div className="flex-1 justify-between flex flex-col h-full ">
                  <div className="flex sm:items-center justify-between py-3 border-b border-b-gray-200">
                    <div className="relative flex items-center space-x-4">
                      <div className="relative pl-2">
                        <span className="absolute text-green-500 right-0 bottom-0">
                          <svg width="8" height="8">
                            <circle
                              cx="4"
                              cy="4"
                              r="4"
                              fill="green"
                            ></circle>
                          </svg>
                        </span>
                        <img
                          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                          alt=""
                          className="w-8 sm:w-8 h-8 sm:h-8 rounded-full"
                        />
                      </div>
                      <div className="flex flex-col leading-tight">
                        <div className="text-xs mt-1 flex items-center font-medium">
                          <span className="text-gray-700 mr-3">
                            Suman Somnath Da
                          </span>
                        </div>
                        <span className="text-[10px] text-green-900 font-bold">
                          Online
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 pr-3">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full h-8 w-8 
                        transition duration-500 ease-in-out text-green-900
                        bg-gray-100
                        hover:text-white
                        font-bold
                        hover:bg-green-900 focus:outline-none
                        "
                      >
                        <span className="material-symbols-outlined text-[20px]">light_mode</span>
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full h-8 w-8 
                        transition duration-500 ease-in-out text-green-900
                        bg-gray-100
                        hover:text-white
                        font-bold
                        hover:bg-green-900 focus:outline-none
                        "
                      >
                        <span className="material-symbols-outlined text-[20px]">search</span>
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full h-8 w-8 
                        transition duration-500 ease-in-out text-green-900
                        font-bold
                        bg-gray-100
                        hover:text-white
                        hover:bg-green-900 focus:outline-none">
                        <span className="material-symbols-outlined text-[20px]">videocam</span>
                      </button>
                    </div>
                  </div>
                  <div
                    id="messages"
                    style={{ backgroundImage: `url(${IMG})` }}
                    className={`flex flex-col space-y-4 p-3 bg-no-repeat bg-center bg-cover bg-opacity-75 bg-green-100 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch
                      `}
                  >
                    <div className="chat-message">
                      <div className="flex items-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-white text-green-900 font-bold ">
                              Can be verified on any platform using docker
                            </span>
                          </div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                          alt="My profile"
                          className="w-6 h-6 rounded-full order-1"
                        />
                      </div>
                    </div>
                    <div className="chat-message">
                      <div className="flex items-end justify-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-green-900 shadow-md text-white ">
                              Your error message says permission denied, npm
                              global installs must be given root privileges.
                            </span>
                          </div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                          alt="My profile"
                          className="w-6 h-6 rounded-full order-2"
                        />
                      </div>
                    </div>
                    <div className="chat-message">
                      <div className="flex items-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block bg-white text-green-900 font-bold ">
                              Command was run with root privileges. I'm sure
                              about that.
                            </span>
                          </div>
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block bg-white text-green-900 font-bold ">
                              I've update the description so it's more obviously
                              now
                            </span>
                          </div>
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block bg-white text-green-900 font-bold ">
                              FYI https://askubuntu.com/a/700266/510172
                            </span>
                          </div>
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-white text-green-900 font-bold ">
                              Check the line above (it ends with a # so, I'm
                              running it as root )
                              <pre># npm install -g @vue/devtools</pre>
                            </span>
                          </div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                          alt="My profile"
                          className="w-6 h-6 rounded-full order-1"
                        />
                      </div>
                    </div>
                    <div className="chat-message">
                      <div className="flex items-end justify-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-green-900 shadow-md text-white ">
                              Any updates on this issue? I'm getting the same
                              error when trying to install devtools. Thanks
                            </span>
                          </div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                          alt="My profile"
                          className="w-6 h-6 rounded-full order-2"
                        />
                      </div>
                    </div>
                    <div className="chat-message">
                      <div className="flex items-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-white text-green-900 font-bold ">
                              Thanks for your message David. I thought I'm alone
                              with this issue. Please, ? the issue to support it
                              :)
                            </span>
                          </div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                          alt="My profile"
                          className="w-6 h-6 rounded-full order-1"
                        />
                      </div>
                    </div>
                    <div className="chat-message">
                      <div className="flex items-end justify-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block bg-green-900 shadow-md text-white ">
                              Are you using sudo?
                            </span>
                          </div>
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-green-900 shadow-md text-white ">
                              Run this command sudo chown -R `whoami`
                              /Users/.npm-global/ then install the package
                              globally without using sudo
                            </span>
                          </div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                          alt="My profile"
                          className="w-6 h-6 rounded-full order-2"
                        />
                      </div>
                    </div>
                    <div className="chat-message">
                      <div className="flex items-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block bg-white text-green-900 font-bold ">
                              It seems like you are from Mac OS world. There is
                              no /Users/ folder on linux ?
                            </span>
                          </div>
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-white text-green-900 font-bold ">
                              I have no issue with any other packages installed
                              with root permission globally.
                            </span>
                          </div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                          alt="My profile"
                          className="w-6 h-6 rounded-full order-1"
                        />
                      </div>
                    </div>
                    <div className="chat-message">
                      <div className="flex items-end justify-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-green-900 shadow-md text-white ">
                              yes, I have a mac. I never had issues with root
                              permission as well, but this helped me to solve
                              the problem
                            </span>
                          </div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                          alt="My profile"
                          className="w-6 h-6 rounded-full order-2"
                        />
                      </div>
                    </div>
                    <div className="chat-message">
                      <div className="flex items-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block bg-white text-green-900 font-bold ">
                              I get the same error on Arch Linux (also with
                              sudo)
                            </span>
                          </div>
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block bg-white text-green-900 font-bold ">
                              I also have this issue, Here is what I was doing
                              until now: #1076
                            </span>
                          </div>
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-white text-green-900 font-bold ">
                              even i am facing
                            </span>
                          </div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                          alt="My profile"
                          className="w-6 h-6 rounded-full order-1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-200 px-4 py-4 sm:mb-0">
                    <div className="relative flex">
                      {/* <span className="absolute inset-y-0 flex items-center">
                          <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-white focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="h-6 w-6 text-green-900 font-bold "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                              ></path>
                            </svg>
                          </button>
                        </span> */}
                      <input
                        type="text"
                        placeholder="write your message....."
                        className="w-full focus:outline-none border border-gray-400 focus:placeholder-gray-400 text-green-900 font-medium 
                         placeholder-gray-600 bg-white focus:border-green-900 focus:ring-green-900 rounded-md text-sm
                          py-2 pr-10 pl-3"
                      />
                      <div className="absolute right-0  items-center inset-y-0 hidden sm:flex">
                        {/* <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-white focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="h-6 w-6 text-green-900 font-bold "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              ></path>
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-white focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="h-6 w-6 text-green-900 font-bold "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                              ></path>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                            </svg>
                          </button> */}
                        {/* <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-white focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="h-6 w-6 text-green-900 font-bold "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                          </button> */}
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-md h-12 w-12 transition duration-500 ease-in-out text-green-900 font-bold focus:outline-none"
                        >
                          {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="h-6 w-6 ml-2 transform rotate-90"
                            >
                              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                            </svg> */}
                          <span className="material-symbols-outlined text-3xl">
                            send
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right side ends */}
            </div>
          </div>
          {/* End */}
        </div>
      </div>
    </>
  );
};

export default Main;
