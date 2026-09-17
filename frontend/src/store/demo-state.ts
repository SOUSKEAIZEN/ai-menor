import { create } from 'zustand';

export type TaskStatus = 'Pending' | 'In Progress' | 'Completed' | 'Overdue';
export type Priority = 'High' | 'Medium' | 'Low';

export interface Task {
  id: number;
  title: string;
  subjectId: string;
  subjectName: string;
  due: string;
  priority: Priority;
  status: TaskStatus;
  progress: number;
  effort: string;
}

export interface Milestone {
  id: number;
  title: string;
  completed: boolean;
}

export interface Goal {
  id: number;
  title: string;
  description: string;
  progress: number;
  deadline: string;
  status: 'Active' | 'Completed';
  milestones: Milestone[];
  skill: string;
  relatedTasks: number[];
}

export interface StudySession {
  id: number;
  time: string;
  subjectId: string;
  subjectName: string;
  activity: string;
  duration: string;
  reason: string;
  status: 'Scheduled' | 'Completed' | 'Missed';
  date: 'Today' | 'This Week' | 'Upcoming';
}

export interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'Alert' | 'Message' | 'Reminder';
  time: string;
  read: boolean;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  credits: number;
  progress: number;
  attendance: number;
  status: 'Strong' | 'Average' | 'Needs Attention';
  topics: { name: string; progress: number }[];
}

export interface Resource {
  id: number;
  title: string;
  subjectId: string;
  subjectName: string;
  type: string;
  difficulty: string;
  duration: string;
  why: string;
  saved: boolean;
}


export interface Mentee {
  id: string;
  name: string;
  gpa: string;
  attendance: number;
  trend: 'up' | 'down' | 'stable';
  status: 'At Risk' | 'Needs Attention' | 'On Track' | 'Excelling';
  aiBrief: string;
}

export interface MentoringPriority {
  id: string;
  menteeId: string;
  menteeName: string;
  type: 'Academic' | 'Attendance' | 'Wellbeing' | 'General';
  suggestion: string;
  evidence: string;
  status: 'Pending' | 'Actioned' | 'Dismissed';
}

export interface MentorMeeting {
  id: string;
  menteeName: string;
  date: string;
  time: string;
  type: 'Online' | 'Physical' | 'Campus';
  location: string;
  purpose: string;
  status: 'Scheduled' | 'Completed';
}

export interface FollowUp {
  id: string;
  menteeName: string;
  task: string;
  dueDate: string;
  status: 'Pending' | 'Completed' | 'Overdue';
}

export interface InterventionOutcome {
  id: string;
  menteeName: string;
  intervention: string;
  date: string;
  outcome: string;
  status: 'Positive' | 'Neutral' | 'Negative';
}

interface DemoState {
  mentees: Mentee[];
  mentoringPriorities: MentoringPriority[];
  mentorMeetings: MentorMeeting[];
  mentorFollowUps: FollowUp[];
  interventionOutcomes: InterventionOutcome[];

  user: {
    name: string;
    email: string;
    gpa: string;
    overallAttendance: number;
    subjectsPassed: number;
    goalsAchieved: number;
  };
  subjects: Subject[];
  tasks: Task[];
  goals: Goal[];
  studySessions: StudySession[];
  resources: Resource[];
  notifications: Notification[];
  mentor: {
    name: string;
    role: string;
    department: string;
    expertise: string[];
    availability: string;
    nextMeeting: string;
  };
  
  // Actions
  dismissPriority: (id: string) => void;
  actionPriority: (id: string, action: string) => void;
  completeFollowUp: (id: string) => void;
  completeTask: (taskId: number) => void;
  updateTaskProgress: (taskId: number, progress: number) => void;
  toggleGoalMilestone: (goalId: number, milestoneId: number) => void;
  completeStudySession: (sessionId: number) => void;
  markNotificationRead: (notificationId: number) => void;
  markAllNotificationsRead: () => void;
  toggleResourceSaved: (resourceId: number) => void;
  requestMentorMeeting: (date: string, time: string, purpose: string) => void;
}

export const useDemoStore = create<DemoState>((set) => ({

  mentees: [
    { id: 'm1', name: 'ABC 1', gpa: '3.8', attendance: 92, trend: 'stable', status: 'On Track', aiBrief: 'Consistent performer. Ready for advanced topic introduction.' },
    { id: 'm2', name: 'ABC 2', gpa: '2.4', attendance: 65, trend: 'down', status: 'At Risk', aiBrief: 'Significant drop in OS & DBMS attendance. Missed last 2 assignments.' },
    { id: 'm3', name: 'ABC 3', gpa: '3.1', attendance: 88, trend: 'up', status: 'Needs Attention', aiBrief: 'Improving in attendance, but struggling with Data Structures graphs.' },
    { id: 'm4', name: 'ABC 4', gpa: '3.9', attendance: 98, trend: 'stable', status: 'Excelling', aiBrief: 'Exceeding expectations. Recommended for TA role next semester.' }
  ],
  mentoringPriorities: [
    { id: 'p1', menteeId: 'm2', menteeName: 'ABC 2', type: 'Attendance', suggestion: 'Schedule a 1:1 review & Follow up on attendance', evidence: 'Attendance dropped below 70% threshold. Missed 4 consecutive OS lectures.', status: 'Pending' },
    { id: 'p2', menteeId: 'm3', menteeName: 'ABC 3', type: 'Academic', suggestion: 'Consider tutoring support', evidence: 'Failed last Data Structures quiz on Graphs (45%).', status: 'Pending' },
    { id: 'p3', menteeId: 'm4', menteeName: 'ABC 4', type: 'General', suggestion: 'Student has improved—continue current plan', evidence: 'Scored 98% on DBMS midterm.', status: 'Pending' },
  ],
  mentorMeetings: [
    { id: 'mtg1', menteeName: 'ABC 3', date: 'Today', time: '2:30 PM', type: 'Online', location: 'Zoom Room A', purpose: 'Data Structures review', status: 'Scheduled' },
    { id: 'mtg2', menteeName: 'ABC 2', date: 'Tomorrow', time: '10:00 AM', type: 'Campus', location: 'Mentoring Office 3B', purpose: 'Attendance Intervention', status: 'Scheduled' },
    { id: 'mtg3', menteeName: 'ABC 1', date: 'Tomorrow', time: '2:00 PM', type: 'Online', location: 'Google Meet', purpose: 'Career Planning', status: 'Scheduled' }
  ],
  mentorFollowUps: [
    { id: 'f1', menteeName: 'ABC 2', task: 'Send academic warning email', dueDate: 'Yesterday', status: 'Overdue' },
    { id: 'f2', menteeName: 'ABC 3', task: 'Check if tutoring was attended', dueDate: 'Today, 5:00 PM', status: 'Pending' },
  ],
  interventionOutcomes: [
    { id: 'o1', menteeName: 'ABC 5', intervention: 'Assigned Peer Tutor for OS', date: 'Last Week', outcome: 'Passed OS Midterm (+15% improvement)', status: 'Positive' },
    { id: 'o2', menteeName: 'ABC 6', intervention: 'Time Management Workshop', date: '2 Weeks Ago', outcome: 'No change in missed assignments yet', status: 'Neutral' },
  ],

  user: {
    name: 'ABC 1',
    email: 'abc@university.edu',
    gpa: '3.8',
    overallAttendance: 92,
    subjectsPassed: 14,
    goalsAchieved: 5,
  },
  mentor: {
    name: 'ESHA KHANNA',
    role: 'Senior Academic Advisor',
    department: 'Computer Science',
    expertise: ['System Design', 'Career Planning', 'Backend Development'],
    availability: 'Mon, Wed, Fri (2PM - 5PM)',
    nextMeeting: 'Tomorrow, 2:00 PM',
  },
  subjects: [
    { id: 'cs301', name: 'DBMS', code: 'CS301', credits: 4, progress: 85, attendance: 90, status: 'Strong', topics: [{name: 'Normalization', progress: 100}, {name: 'Transactions', progress: 60}] },
    { id: 'cs302', name: 'Operating Systems', code: 'CS302', credits: 4, progress: 65, attendance: 85, status: 'Needs Attention', topics: [{name: 'Deadlocks', progress: 40}, {name: 'Memory Management', progress: 75}] },
    { id: 'cs303', name: 'Computer Networks', code: 'CS303', credits: 3, progress: 90, attendance: 95, status: 'Strong', topics: [{name: 'TCP/IP', progress: 95}, {name: 'Routing', progress: 80}] },
    { id: 'cs304', name: 'Data Structures', code: 'CS304', credits: 4, progress: 75, attendance: 88, status: 'Average', topics: [{name: 'Trees', progress: 80}, {name: 'Graphs', progress: 60}] },
  ],
  tasks: [
    { id: 1, title: 'Complete DBMS Assignment 4', subjectId: 'cs301', subjectName: 'DBMS', due: 'Today, 11:59 PM', priority: 'High', status: 'Pending', progress: 20, effort: '2 hours' },
    { id: 2, title: 'Read OS Chapter 5', subjectId: 'cs302', subjectName: 'Operating Systems', due: 'Tomorrow, 9:00 AM', priority: 'Medium', status: 'In Progress', progress: 50, effort: '1.5 hours' },
    { id: 3, title: 'Network Topology Quiz', subjectId: 'cs303', subjectName: 'Computer Networks', due: 'Oct 20, 10:00 AM', priority: 'High', status: 'Pending', progress: 0, effort: '45 mins' },
    { id: 4, title: 'Implement B-Tree', subjectId: 'cs304', subjectName: 'Data Structures', due: 'Oct 22, 11:59 PM', priority: 'Medium', status: 'Completed', progress: 100, effort: '3 hours' },
    { id: 5, title: 'OS Process Sync Lab', subjectId: 'cs302', subjectName: 'Operating Systems', due: 'Yesterday', priority: 'High', status: 'Overdue', progress: 80, effort: '1 hour' },
  ],
  goals: [
    { id: 1, title: 'Master OS Memory Management', description: 'Understand paging and segmentation thoroughly.', progress: 40, deadline: 'End of month', status: 'Active', skill: 'Systems Programming', relatedTasks: [2, 5], milestones: [
      { id: 1, title: 'Read textbook chapters 8 & 9', completed: true },
      { id: 2, title: 'Complete virtual memory lab', completed: false },
      { id: 3, title: 'Pass practice quiz', completed: false }
    ]},
    { id: 2, title: 'Achieve 95% in DBMS', description: 'Maintain top grades for database course.', progress: 85, deadline: 'End of semester', status: 'Active', skill: 'Database Design', relatedTasks: [1], milestones: [
      { id: 1, title: 'Score A in Midterm', completed: true },
      { id: 2, title: 'Complete all assignments', completed: false }
    ]},
  ],
  studySessions: [
    { id: 1, time: '2:00 PM - 4:00 PM', subjectId: 'cs302', subjectName: 'Operating Systems', activity: 'Review Deadlocks', duration: '2 hours', reason: 'Scheduled because this subject currently needs more attention.', status: 'Scheduled', date: 'Today' },
    { id: 2, time: '5:00 PM - 6:00 PM', subjectId: 'cs301', subjectName: 'DBMS', activity: 'Assignment 4', duration: '1 hour', reason: 'Deadline approaching.', status: 'Scheduled', date: 'Today' },
    { id: 3, time: '10:00 AM - 11:30 AM', subjectId: 'cs304', subjectName: 'Data Structures', activity: 'Graph Algorithms', duration: '1.5 hours', reason: 'Weekly review.', status: 'Scheduled', date: 'This Week' },
  ],
  resources: [
    { id: 1, title: 'Advanced SQL Queries', subjectId: 'cs301', subjectName: 'DBMS', type: 'Video', difficulty: 'Intermediate', duration: '45 mins', why: 'Recommended because you need more practice with complex joins.', saved: false },
    { id: 2, title: 'OS Deadlock Avoidance', subjectId: 'cs302', subjectName: 'Operating Systems', type: 'Article', difficulty: 'Advanced', duration: '20 mins', why: 'Recommended to address your current weak topic.', saved: true },
    { id: 3, title: 'Graph Traversal Simulator', subjectId: 'cs304', subjectName: 'Data Structures', type: 'Interactive', difficulty: 'Beginner', duration: '30 mins', why: 'Visual learning aids for Trees and Graphs.', saved: false },
  ],
  notifications: [
    { id: 1, title: 'Assignment Due Soon', message: 'DBMS Assignment 4 is due today at 11:59 PM.', type: 'Alert', time: '2 hours ago', read: false },
    { id: 2, title: 'Meeting Reminder', message: 'Meeting with ESHA KHANNA tomorrow at 2:00 PM.', type: 'Reminder', time: '5 hours ago', read: false },
    { id: 3, title: 'AI Recommendation', message: 'Based on your recent quiz, reviewing OS Deadlocks is recommended.', type: 'Message', time: '1 day ago', read: true },
  ],

  
  dismissPriority: (id) => set((state) => ({
    mentoringPriorities: state.mentoringPriorities.map(p => p.id === id ? { ...p, status: 'Dismissed' } : p)
  })),
  actionPriority: (id, action) => set((state) => ({
    mentoringPriorities: state.mentoringPriorities.map(p => p.id === id ? { ...p, status: 'Actioned' } : p),
    mentorFollowUps: [{ id: Date.now().toString(), menteeName: state.mentoringPriorities.find(p => p.id === id)?.menteeName || 'Student', task: `Follow up on: ${action}`, dueDate: 'Tomorrow', status: 'Pending' }, ...state.mentorFollowUps]
  })),
  completeFollowUp: (id) => set((state) => ({
    mentorFollowUps: state.mentorFollowUps.map(f => f.id === id ? { ...f, status: 'Completed' } : f)
  })),

  completeTask: (taskId) => set((state) => ({
    tasks: state.tasks.map(t => t.id === taskId ? { ...t, status: 'Completed', progress: 100 } : t)
  })),
  updateTaskProgress: (taskId, progress) => set((state) => ({
    tasks: state.tasks.map(t => t.id === taskId ? { ...t, progress, status: progress === 100 ? 'Completed' : 'In Progress' } : t)
  })),
  toggleGoalMilestone: (goalId, milestoneId) => set((state) => {
    const goals = state.goals.map(g => {
      if (g.id !== goalId) return g;
      const milestones = g.milestones.map(m => m.id === milestoneId ? { ...m, completed: !m.completed } : m);
      const progress = Math.round((milestones.filter(m => m.completed).length / milestones.length) * 100);
      return { ...g, milestones, progress };
    });
    return { goals };
  }),
  completeStudySession: (sessionId) => set((state) => ({
    studySessions: state.studySessions.map(s => s.id === sessionId ? { ...s, status: 'Completed' } : s)
  })),
  markNotificationRead: (notificationId) => set((state) => ({
    notifications: state.notifications.map(n => n.id === notificationId ? { ...n, read: true } : n)
  })),
  markAllNotificationsRead: () => set((state) => ({
    notifications: state.notifications.map(n => ({ ...n, read: true }))
  })),
  toggleResourceSaved: (resourceId) => set((state) => ({
    resources: state.resources.map(r => r.id === resourceId ? { ...r, saved: !r.saved } : r)
  })),
  requestMentorMeeting: (date, time, purpose) => set((state) => ({
    notifications: [{ id: Date.now(), title: 'Meeting Requested', message: `Requested meeting on ${date} at ${time} for ${purpose}.`, type: 'Message', time: 'Just now', read: false }, ...state.notifications]
  })),
}));
