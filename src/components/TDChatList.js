import React from 'react'

function TDChatList() {
  return (
    <li className='hover:bg-slate-300 hover:cursor-pointer'>

       <div className="flex items-center p-3 justify-start space-y-1 space-x-2  ">
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
                      </div>
    </li>
  )
}

export default TDChatList
