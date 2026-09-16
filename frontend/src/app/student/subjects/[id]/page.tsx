import React from 'react';

export default function SubjectDetail({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <header>
        <h1 className="text-2xl font-bold">Subject Detail: {params.id}</h1>
      </header>
      <div className="p-6 border border-[var(--border)] rounded-xl bg-[var(--surface)]">
        Content for {params.id}
      </div>
    </div>
  );
}
