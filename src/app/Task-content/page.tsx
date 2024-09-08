import React from "react";
import Link from "next/link";

const TaskPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black p-8  flex justify-center">
      <div className="w-full max-w-4xl flex flex-col bg-gray-900  overflow-hidden">
        {/* header Section */}
        <div className="p-6 border-b border-white">
            <h1 className="text-xl font-semibold text-orange-400 mb-6">3. Datatypes in Javascript</h1>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
