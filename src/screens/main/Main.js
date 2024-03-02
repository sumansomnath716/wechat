import React from "react";
// import Chat from '../../../src/assets/images/chat.png';
const Main = () => {
  return (
    <>
      <div className="min-h-screen min-w-screen relative">
        {/* Background Portion */}
        <div
        className="bg-gradient-to-r
        from-green-700 absolute top-0
        to-green-900
          w-full h-52"></div>
        {/* End */}

        {/* Chat Window */}
        <div className="h-[calc(100%_-_0.75rem)] p-5 w-full absolute top-3 bg-transparent">
              <div className="bg-white h-full w-full shadow-xl border-slate-500">
                      <div className="grid grid-cols-3 gap-0 h-full w-full">
                          <div className="col-span-1 w-full min-h-full overflow-y-auto">01</div>
                          <div className={`col-span-2 overflow-y-auto`}>

                              
                          </div>
                      </div>
              </div>
        </div>
        {/* End */}
      </div>
    </>
  );
};

export default Main;
