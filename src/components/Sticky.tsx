import React from "react";

function Sticky() {
  return (
    <div className="w-full h-auto bg-red-500 py-10 relative space-y-10">
      {/* card 1 */}
      <div className="max-w-[700px] shadow-lg bg-white p-5 sticky top-0 z-10 mx-auto">
        <div className="w-full h-[500px] bg-gray-500"></div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800">Card 1</h2>
          <p className="text-gray-600 text-sm mt-2">
            This is card 1 content.
          </p>
        </div>
      </div>

      {/* card 2 */}
      <div className="max-w-[700px] shadow-lg bg-white p-5 sticky top-0 z-20 mx-auto">
        <div className="w-full h-[500px] bg-gray-500"></div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800">Card 2</h2>
          <p className="text-gray-600 text-sm mt-2">
            This is card 2 content.
          </p>
        </div>
      </div>

      {/* card 3 */}
      <div className="max-w-[700px] shadow-lg bg-white p-5 sticky top-0 z-30 mx-auto">
        <div className="w-full h-[500px] bg-gray-500"></div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800">Card 3</h2>
          <p className="text-gray-600 text-sm mt-2">
            This is card 3 content.
          </p>
        </div>
      </div>

      {/* card 4 */}
      <div className="max-w-[700px] shadow-lg bg-white p-5 sticky top-0 z-40 mx-auto">
        <div className="w-full h-[500px] bg-gray-500"></div>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800">Card 4</h2>
          <p className="text-gray-600 text-sm mt-2">
            This is card 4 content.
          </p>
        </div>
      </div>

      {/* Additional content to push the last card */}
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-[700px] mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-4">End of Cards</h2>
          <p className="text-lg">
            This additional content ensures that Card 4 can scroll completely.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sticky;