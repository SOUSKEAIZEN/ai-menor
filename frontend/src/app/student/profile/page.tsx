'use client';
import React from 'react';
import { User, Mail, Book, Award, MapPin, Target } from 'lucide-react';
import { useDemoStore } from '../../../store/demo-state';

export default function Profile() {
  const { user } = useDemoStore();

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <header>
        <h1 className="text-3xl font-bold text-[var(--main)]">Profile</h1>
      </header>

      <div className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--surface)] shadow-sm flex flex-col md:flex-row items-center gap-8">
         <div className="w-32 h-32 rounded-full bg-[var(--main)] text-white flex items-center justify-center font-bold text-4xl shadow-lg ring-4 ring-[var(--main)]/20">
           {user.name.charAt(0)}
         </div>
         <div className="text-center md:text-left">
           <h2 className="text-2xl font-bold text-[var(--contrast)]">{user.name}</h2>
           <p className="text-[var(--muted)] mt-1">Computer Science Student</p>
           <p className="text-sm font-medium text-[var(--main)] mt-2">Overall Attendance: {user.overallAttendance}%</p>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)]">
           <h3 className="text-lg font-semibold text-[var(--contrast)] mb-4">Personal Info</h3>
           <div className="space-y-4">
             <div className="flex items-center gap-3 text-sm text-[var(--muted)]"><Mail className="w-4 h-4 text-[var(--main)]"/> {user.email}</div>
             <div className="flex items-center gap-3 text-sm text-[var(--muted)]"><MapPin className="w-4 h-4 text-[var(--main)]"/> Hostel A, Room 302</div>
           </div>
         </div>
         <div className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--surface)]">
           <h3 className="text-lg font-semibold text-[var(--contrast)] mb-4">Academic Info</h3>
           <div className="space-y-4">
             <div className="flex items-center gap-3 text-sm text-[var(--muted)]"><Award className="w-4 h-4 text-[var(--main)]"/> CGPA: {user.gpa}</div>
             <div className="flex items-center gap-3 text-sm text-[var(--muted)]"><Book className="w-4 h-4 text-[var(--main)]"/> Subjects Passed: {user.subjectsPassed}</div>
             <div className="flex items-center gap-3 text-sm text-[var(--muted)]"><Target className="w-4 h-4 text-[var(--main)]"/> Goals Achieved: {user.goalsAchieved}</div>
           </div>
         </div>
      </div>
    </div>
  );
}
