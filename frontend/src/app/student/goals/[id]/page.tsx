import React from 'react';

export default function GoalDetail({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <header>
        <h1 className="text-2xl font-bold">Goal Detail</h1>
      </header>
    </div>
  );
}
