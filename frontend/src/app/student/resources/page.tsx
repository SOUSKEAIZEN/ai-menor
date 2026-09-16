import React from 'react';
import { Search, Filter, BookOpen, Video, FileText, Download, ExternalLink } from 'lucide-react';

export default function Resources() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[var(--main)]">Learning Resources</h1>
          <p className="text-[var(--muted)] mt-2">Curated materials to help you succeed.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
            <input type="text" placeholder="Search resources..." className="pl-9 pr-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--main)]" />
          </div>
          <button className="p-2 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-[var(--muted)] hover:text-[var(--main)] transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[
          { title: 'Advanced SQL Queries', sub: 'CS301', type: 'Video', icon: Video, color: 'text-blue-500' },
          { title: 'Deadlock Prevention Notes', sub: 'CS302', type: 'PDF', icon: FileText, color: 'text-red-500' },
          { title: 'OS concepts Textbook', sub: 'CS302', type: 'Book', icon: BookOpen, color: 'text-orange-500' },
          { title: 'Networking Subnetting', sub: 'CS303', type: 'Video', icon: Video, color: 'text-blue-500' }
        ].map((res, i) => (
          <div key={i} className="group p-5 border border-[var(--border)] rounded-2xl bg-[var(--surface)] hover:border-[var(--main)] transition-all">
            <div className="w-full h-32 bg-[var(--fade)] rounded-xl mb-4 flex items-center justify-center text-[var(--muted)] group-hover:bg-[var(--main)]/5 transition-colors">
              <res.icon className={`w-8 h-8 ${res.color}`} />
            </div>
            <h3 className="font-semibold text-[var(--contrast)] mb-1 truncate" title={res.title}>{res.title}</h3>
            <p className="text-xs text-[var(--muted)] mb-4">{res.sub} • {res.type}</p>
            <div className="flex gap-2">
              <button className="flex-1 py-1.5 bg-[var(--main)] text-white text-xs font-medium rounded-lg hover:opacity-90 flex items-center justify-center gap-1"><ExternalLink className="w-3 h-3"/> Open</button>
              <button className="px-3 py-1.5 border border-[var(--border)] text-[var(--muted)] hover:text-[var(--main)] rounded-lg transition-colors"><Download className="w-3 h-3"/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
