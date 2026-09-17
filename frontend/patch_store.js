const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/store/demo-state.ts');
let content = fs.readFileSync(file, 'utf8');

const newInterfaces = `
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

`;

content = content.replace("interface DemoState {", newInterfaces + "interface DemoState {\n  mentees: Mentee[];\n  mentoringPriorities: MentoringPriority[];\n  mentorMeetings: MentorMeeting[];\n  mentorFollowUps: FollowUp[];\n  interventionOutcomes: InterventionOutcome[];\n");
content = content.replace("// Actions", "// Actions\n  dismissPriority: (id: string) => void;\n  actionPriority: (id: string, action: string) => void;\n  completeFollowUp: (id: string) => void;");

const newData = `
  mentees: [
    { id: 'm1', name: 'ABC', gpa: '3.8', attendance: 92, trend: 'stable', status: 'On Track', aiBrief: 'Consistent performer. Ready for advanced topic introduction.' },
    { id: 'm2', name: 'John Doe', gpa: '2.4', attendance: 65, trend: 'down', status: 'At Risk', aiBrief: 'Significant drop in OS & DBMS attendance. Missed last 2 assignments.' },
    { id: 'm3', name: 'Sarah Smith', gpa: '3.1', attendance: 88, trend: 'up', status: 'Needs Attention', aiBrief: 'Improving in attendance, but struggling with Data Structures graphs.' },
    { id: 'm4', name: 'Michael Chen', gpa: '3.9', attendance: 98, trend: 'stable', status: 'Excelling', aiBrief: 'Exceeding expectations. Recommended for TA role next semester.' }
  ],
  mentoringPriorities: [
    { id: 'p1', menteeId: 'm2', menteeName: 'John Doe', type: 'Attendance', suggestion: 'Schedule a 1:1 review & Follow up on attendance', evidence: 'Attendance dropped below 70% threshold. Missed 4 consecutive OS lectures.', status: 'Pending' },
    { id: 'p2', menteeId: 'm3', menteeName: 'Sarah Smith', type: 'Academic', suggestion: 'Consider tutoring support', evidence: 'Failed last Data Structures quiz on Graphs (45%).', status: 'Pending' },
    { id: 'p3', menteeId: 'm4', menteeName: 'Michael Chen', type: 'General', suggestion: 'Student has improved—continue current plan', evidence: 'Scored 98% on DBMS midterm.', status: 'Pending' },
  ],
  mentorMeetings: [
    { id: 'mtg1', menteeName: 'Sarah Smith', date: 'Today', time: '2:30 PM', type: 'Online', location: 'Zoom Room A', purpose: 'Data Structures review', status: 'Scheduled' },
    { id: 'mtg2', menteeName: 'John Doe', date: 'Tomorrow', time: '10:00 AM', type: 'Campus', location: 'Mentoring Office 3B', purpose: 'Attendance Intervention', status: 'Scheduled' },
    { id: 'mtg3', menteeName: 'ABC', date: 'Tomorrow', time: '2:00 PM', type: 'Online', location: 'Google Meet', purpose: 'Career Planning', status: 'Scheduled' }
  ],
  mentorFollowUps: [
    { id: 'f1', menteeName: 'John Doe', task: 'Send academic warning email', dueDate: 'Yesterday', status: 'Overdue' },
    { id: 'f2', menteeName: 'Sarah Smith', task: 'Check if tutoring was attended', dueDate: 'Today, 5:00 PM', status: 'Pending' },
  ],
  interventionOutcomes: [
    { id: 'o1', menteeName: 'Jane Wilson', intervention: 'Assigned Peer Tutor for OS', date: 'Last Week', outcome: 'Passed OS Midterm (+15% improvement)', status: 'Positive' },
    { id: 'o2', menteeName: 'Alex Brown', intervention: 'Time Management Workshop', date: '2 Weeks Ago', outcome: 'No change in missed assignments yet', status: 'Neutral' },
  ],
`;

content = content.replace("export const useDemoStore = create<DemoState>((set) => ({", "export const useDemoStore = create<DemoState>((set) => ({\n" + newData);

const newActions = `
  dismissPriority: (id) => set((state) => ({
    mentoringPriorities: state.mentoringPriorities.map(p => p.id === id ? { ...p, status: 'Dismissed' } : p)
  })),
  actionPriority: (id, action) => set((state) => ({
    mentoringPriorities: state.mentoringPriorities.map(p => p.id === id ? { ...p, status: 'Actioned' } : p),
    mentorFollowUps: [{ id: Date.now().toString(), menteeName: state.mentoringPriorities.find(p => p.id === id)?.menteeName || 'Student', task: \`Follow up on: \${action}\`, dueDate: 'Tomorrow', status: 'Pending' }, ...state.mentorFollowUps]
  })),
  completeFollowUp: (id) => set((state) => ({
    mentorFollowUps: state.mentorFollowUps.map(f => f.id === id ? { ...f, status: 'Completed' } : f)
  })),
`;

content = content.replace("completeTask: (taskId)", newActions + "\n  completeTask: (taskId)");

fs.writeFileSync(file, content, 'utf8');
console.log("Patched demo-state.ts");
