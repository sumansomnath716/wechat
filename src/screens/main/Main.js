import React from "react";
// import IMG from './chat.png'
import IMG from "../../assets/Images/chat.png";
import TDChatList from "../../components/TDChatList";

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
                    <div className="flex sm:items-center justify-between py-3 border-b border-b-gray-200 px-2">
                      <div className="flex items-center justify-between space-x-2">
                        <div className="relative inline-flex 
                            items-center justify-center
                            overflow-hidden bg-neutral-200 rounded-full dark:bg-gray-600
                            w-8 sm:w-8 h-8 sm:h-8 rounded-full
                            py-3">
                          <span className="font-medium text-green-900 dark:text-green-800 text-xs">SS</span>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-xs font-medium overflow-hidden truncate w-28">Somnath Suman</p>
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
                    <ul className="font-medium divide-y">
                      {/* <li> */}
                        {/* <a
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
                        </a> */}
                         {/* <div className="flex items-center p-5 justify-start space-x-2 hover:bg-slate-300 cursor-pointer">
                        <div className="relative inline-flex 
                            items-center justify-center
                            overflow-hidden bg-neutral-200 dark:bg-gray-600
                            w-12 sm:w-12 h-12 sm:h-12 rounded-full
                            py-3">
                          <span className="font-medium text-green-900 text-xs">SS</span>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[14px] font-medium overflow-hidden w-full">Somnath Suman</p>
                          <span className="text-[11px] font-medium truncate w-40">Arey ami to bhulei gechhi je kalke sombar bhai, ami to jantam e na je</span>

                        </div>
                      </div> */}
                      <TDChatList name={'Susan'} chat={'Arey ami to bhulei gechhi kalke sombar ami to jantam na '}/>
                      {/* </li> */}
                      <TDChatList name={'Susan'} chat={'Arey ami to bhulei gechhi kalke sombar ami to jantam na '}/>
                      <TDChatList name={'Susan'} chat={'Arey ami to bhulei gechhi kalke sombar ami to jantam na '}/>
                      <TDChatList name={'Susan'} chat={'Arey ami to bhulei gechhi kalke sombar ami to jantam na '}/>
                      <TDChatList name={'Susan'} chat={'Arey ami to bhulei gechhi kalke sombar ami to jantam na '}/>
                      <TDChatList name={'Susan'} chat={'Arey ami to bhulei gechhi kalke sombar ami to jantam na '}/>
                      <TDChatList name={'Susan'} chat={'Arey ami to bhulei gechhi kalke sombar ami to jantam na '}/>
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
                       
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-md h-12 w-12 transition duration-500 ease-in-out text-green-900 font-bold focus:outline-none"
                        >
                        
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
