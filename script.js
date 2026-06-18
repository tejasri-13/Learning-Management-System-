/* =============================================
   EduFlow LMS — app.js
   ============================================= */

/* ---- DATA ---- */

const USERS = {
  'student@edu.com':  { pass: 'pass123', role: 'student',  name: 'Naru Tejasri'},
  'teacher@edu.com':  { pass: 'pass123', role: 'teacher',  name: 'Prof. Anjali Sen'},
};

let COURSES = [
  {id:1, emoji:'🐍', title:'Python Foundations', category:'Programming', level:'Beginner',
   color:'#1a2a18', lessons:8, desc:'Variables, loops, functions, OOP and project-based exercises.',
   videos:[
     {title:'Why Python?', dur:'10:20', done:true},
     {title:'Variables & Types', dur:'14:05', done:true},
     {title:'Control Flow', dur:'18:30', done:true},
     {title:'Functions & Scope', dur:'22:15', done:false},
     {title:'Lists, Dicts & Sets', dur:'25:40', done:false},
     {title:'File Handling', dur:'19:50', done:false},
     {title:'OOP in Python', dur:'30:10', done:false},
     {title:'Capstone Project', dur:'45:00', done:false},
   ]},
  {id:2, emoji:'⚙️', title:'C Programming', category:'Systems', level:'Beginner',
   color:'#1a1a28', lessons:10, desc:'Pointers, memory management, structs and systems programming.',
   videos:[
     {title:'Hello World in C', dur:'08:15', done:true},
     {title:'Variables & Operators', dur:'12:30', done:true},
     {title:'Loops & Conditions', dur:'16:45', done:false},
     {title:'Functions', dur:'20:10', done:false},
     {title:'Arrays & Strings', dur:'24:30', done:false},
     {title:'Pointers Deep Dive', dur:'32:00', done:false},
     {title:'Structs & Unions', dur:'28:15', done:false},
     {title:'File I/O', dur:'22:00', done:false},
     {title:'Dynamic Memory', dur:'35:00', done:false},
     {title:'Mini OS Simulation', dur:'50:00', done:false},
   ]},
  {id:3, emoji:'🔷', title:'C++ & Object-Oriented Design', category:'Programming', level:'Intermediate',
   color:'#14202a', lessons:12, desc:'OOP design patterns, STL, templates, and modern C++17 features.',
   videos:[
     {title:'From C to C++', dur:'12:00', done:true},
     {title:'Classes & Objects', dur:'18:20', done:true},
     {title:'Inheritance', dur:'22:30', done:false},
     {title:'Polymorphism', dur:'25:15', done:false},
     {title:'Templates', dur:'30:40', done:false},
     {title:'STL Containers', dur:'35:00', done:false},
   ]},
  {id:4, emoji:'🌐', title:'Full Stack Web Development', category:'Web', level:'Advanced',
   color:'#1a1420', lessons:20, desc:'HTML → CSS → JS → React → Node.js → MongoDB. Ship real products.',
   videos:[
     {title:'HTML5 & Semantics', dur:'15:00', done:true},
     {title:'CSS Grid & Flexbox', dur:'20:30', done:true},
     {title:'JavaScript ES6+', dur:'35:00', done:true},
     {title:'DOM Manipulation', dur:'25:00', done:false},
     {title:'React Fundamentals', dur:'40:00', done:false},
     {title:'State & Hooks', dur:'35:00', done:false},
     {title:'Node.js & Express', dur:'42:00', done:false},
     {title:'MongoDB & Mongoose', dur:'38:00', done:false},
     {title:'REST API Design', dur:'30:00', done:false},
     {title:'Auth & JWT', dur:'32:00', done:false},
   ]},
  {id:5, emoji:'🗂️', title:'Data Structures & Algorithms', category:'CS Core', level:'Intermediate',
   color:'#20141a', lessons:15, desc:'Arrays to graphs — solve real interview problems with proven techniques.',
   videos:[
     {title:'Big-O Notation', dur:'14:00', done:true},
     {title:'Arrays & Strings', dur:'20:00', done:true},
     {title:'Linked Lists', dur:'25:30', done:true},
     {title:'Stacks & Queues', dur:'22:00', done:false},
     {title:'Trees & BST', dur:'35:00', done:false},
     {title:'Graphs (BFS/DFS)', dur:'42:00', done:false},
     {title:'Dynamic Programming', dur:'50:00', done:false},
     {title:'Sorting Algorithms', dur:'30:00', done:false},
   ]},
  {id:6, emoji:'🗄️', title:'Database Design & SQL', category:'Database', level:'Beginner',
   color:'#1a201a', lessons:9, desc:'Design schemas, write efficient queries and optimise database performance.',
   videos:[
     {title:'What is a Database?', dur:'10:00', done:true},
     {title:'ER Diagrams', dur:'16:00', done:false},
     {title:'SQL Basics', dur:'22:00', done:false},
     {title:'Joins & Subqueries', dur:'28:00', done:false},
     {title:'Indexing & Performance', dur:'35:00', done:false},
   ]},
];

let ASSIGNMENTS = [
  {id:1, courseId:1, title:'Python Basics Quiz', type:'quiz', due:'2026-07-10', status:'completed', score:88,
   questions:[
     {q:'Which keyword defines a function in Python?', opts:['func','def','lambda','function'], ans:1},
     {q:'Output of: print(3**3)', opts:['6','9','27','18'], ans:2},
     {q:'Which is immutable?', opts:['list','dict','tuple','set'], ans:2},
     {q:'len("EduFlow") returns?', opts:['6','7','8','eduflow'], ans:1},
   ]},
  {id:2, courseId:4, title:'Build a Landing Page', type:'project', due:'2026-07-15', status:'pending',
   desc:'Design and build a fully responsive landing page using HTML + CSS. Must have nav, hero, features, footer sections. Submit your GitHub link.'},
  {id:3, courseId:2, title:'C Pointers Quiz', type:'quiz', due:'2026-07-20', status:'pending',
   questions:[
     {q:'Which operator gives address of a variable?', opts:['*','&','->','%%'], ans:1},
     {q:'malloc() returns which type?', opts:['int*','void*','char*','NULL'], ans:1},
     {q:'How to free dynamic memory?', opts:['delete()','remove()','free()','clear()'], ans:2},
     {q:'NULL pointer points to?', opts:['0','garbage','stack','itself'], ans:0},
   ]},
  {id:4, courseId:5, title:'DSA Sorting Quiz', type:'quiz', due:'2026-07-25', status:'completed', score:94,
   questions:[
     {q:'Worst case of QuickSort?', opts:['O(n)','O(n log n)','O(n²)','O(1)'], ans:2},
     {q:'Which is not a sorting algo?', opts:['MergeSort','BinarySort','HeapSort','ShellSort'], ans:1},
     {q:'Best for nearly sorted data?', opts:['QuickSort','BubbleSort','InsertionSort','SelectionSort'], ans:2},
   ]},
  {id:5, courseId:3, title:'OOP Concepts Quiz', type:'quiz', due:'2026-08-01', status:'pending',
   questions:[
     {q:'Which OOP pillar hides data?', opts:['Inheritance','Polymorphism','Encapsulation','Abstraction'], ans:2},
     {q:'A virtual function achieves?', opts:['Overloading','Overriding','Encapsulation','Inheritance'], ans:1},
   ]},
];

const STUDENTS = [
  {name:'Naru Tejasri',   email:'tejasri@edu.com', av:'NT', ac:'#1a2a18', tc:'#34d399', progress:{1:62,2:20,3:16,4:30,5:50,6:20}},
  {name:'Mokhamatam Niharika',  email:'harika@edu.com',   av:'MN', ac:'#14202a', tc:'#60a5fa', progress:{1:100,2:80,3:50,4:70,5:90,6:60}},
  {name:'Balu',   email:'balu@edu.com',   av:'B', ac:'#1a1420', tc:'#a78bfa', progress:{1:45,2:65,3:75,4:20,5:35,6:50}},
  {name:'Sai',  email:'Sai@edu.com',   av:'S', ac:'#201418', tc:'#f87171', progress:{1:90,2:55,3:90,4:55,5:70,6:85}},
  {name:'Kiran Nair',    email:'kiran@edu.com',   av:'KN', ac:'#1a201a', tc:'#34d399', progress:{1:30,2:10,3:5,4:85,5:40,6:30}},
];

/* ---- STATE ---- */
let currentUser = null, selectedRole = 'student';
let activePage = 'dashboard', selectedCourseId = null, quizState = {};

/* =============================================
   LOGIN
   ============================================= */
function pickRole(role) {
  selectedRole = role;
  document.getElementById('rtStudent').classList.toggle('active', role === 'student');
  document.getElementById('rtTeacher').classList.toggle('active', role === 'teacher');
  document.getElementById('lgEmail').value = role === 'student' ? 'student@edu.com' : 'teacher@edu.com';
  document.getElementById('lgPass').value = 'pass123';
}

function doLogin() {
  const em = document.getElementById('lgEmail').value.trim();
  const pw = document.getElementById('lgPass').value;
  const err = document.getElementById('lgErr');
  const u = USERS[em];
  if (!u || u.pass !== pw) { err.classList.remove('hidden'); return; }
  err.classList.add('hidden');
  currentUser = { ...u, email: em };
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('appScreen').classList.remove('hidden');
  const initials = u.name.split(' ').map(x => x[0]).join('');
  document.getElementById('tbAvatar').textContent = initials;
  document.getElementById('sbUser').innerHTML = `
    <div class="sb-user-name">${u.name}</div>
    <div class="sb-user-role">${u.role === 'teacher' ? '📋 Instructor' : '🎓 Student'}</div>`;
  buildSidebar();
  go('dashboard');
}

function doLogout() {
  currentUser = null;
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('appScreen').classList.add('hidden');
}

/* =============================================
   NAVIGATION
   ============================================= */
const studentNav = [
  {id:'dashboard', icon:'📊', label:'Dashboard'},
  {id:'courses',   icon:'📚', label:'My Courses'},
  {id:'videos',    icon:'▶️', label:'Video Lessons'},
  {id:'quizzes',   icon:'📝', label:'Assignments'},
  {id:'progress',  icon:'📈', label:'My Progress'},
];
const teacherNav = [
  {id:'dashboard',  icon:'📊', label:'Dashboard'},
  {id:'courses',    icon:'📚', label:'Courses'},
  {id:'students',   icon:'👥', label:'Students'},
  {id:'quizzes',    icon:'📝', label:'Assignments'},
  {id:'progress',   icon:'📈', label:'Student Progress'},
  {id:'addcourse',  icon:'➕', label:'Add Course'},
];

function buildSidebar() {
  const items = currentUser.role === 'teacher' ? teacherNav : studentNav;
  document.getElementById('sbNav').innerHTML = items.map(i =>
    `<div class="nav-item" id="ni-${i.id}" onclick="go('${i.id}')">
      <span class="ni">${i.icon}</span> ${i.label}
    </div>`).join('');
}

const pageTitles = {
  dashboard:'Dashboard', courses:'Courses', videos:'Video Lessons',
  quizzes:'Assignments', progress:'Progress', students:'Students', addcourse:'Add Course'
};

function go(page) {
  activePage = page;
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const ni = document.getElementById('ni-' + page);
  if (ni) ni.classList.add('active');
  document.getElementById('tbTitle').textContent = pageTitles[page] || page;
  const p = document.getElementById('mainPage');
  const r = currentUser.role;
  if (r === 'student') {
    if (page === 'dashboard') p.innerHTML = renderStudentDash();
    else if (page === 'courses')  p.innerHTML = renderCourseGrid(false);
    else if (page === 'videos')   p.innerHTML = renderVideoPage();
    else if (page === 'quizzes')  p.innerHTML = renderAssignments();
    else if (page === 'progress') p.innerHTML = renderStudentProgress();
  } else {
    if (page === 'dashboard')  p.innerHTML = renderTeacherDash();
    else if (page === 'courses')    p.innerHTML = renderCourseGrid(true);
    else if (page === 'students')   p.innerHTML = renderStudents();
    else if (page === 'quizzes')    p.innerHTML = renderTeacherAssignments();
    else if (page === 'progress')   p.innerHTML = renderTeacherProgress();
    else if (page === 'addcourse')  p.innerHTML = renderAddCourse();
  }
}

/* =============================================
   HELPERS
   ============================================= */
function myProg(cid) { return STUDENTS[0].progress[cid] || 0; }
function avgProg(st) {
  const v = Object.values(st.progress);
  return Math.round(v.reduce((a,b) => a+b, 0) / v.length);
}
function pbarColor(p) { return p >= 80 ? 'green' : p >= 45 ? 'amber' : 'red'; }
function levelTag(l) {
  return l === 'Beginner' ? 'tag-green' : l === 'Intermediate' ? 'tag-blue' : 'tag-red';
}
function openCourse(id) { selectedCourseId = id; go('videos'); }

/* =============================================
   STUDENT DASHBOARD
   ============================================= */
function renderStudentDash() {
  const st = STUDENTS[0];
  const avg = avgProg(st);
  const completed = ASSIGNMENTS.filter(a => a.status === 'completed').length;
  const pending = ASSIGNMENTS.filter(a => a.status === 'pending').length;
  const inProg = COURSES.filter(c => myProg(c.id) > 0 && myProg(c.id) < 100).slice(0,3);

  return `
  <div class="pg-header">
    <h1>Hey ${currentUser.name.split(' ')[0]}! 👋</h1>
    <p>Pick up where you left off today.</p>
  </div>

  <div class="stat-row s4">
    <div class="stat-pill sp-amber"><div class="sp-icon">📚</div><div class="sp-value">${COURSES.length}</div><div class="sp-label">Enrolled Courses</div></div>
    <div class="stat-pill sp-blue"><div class="sp-icon">📊</div><div class="sp-value">${avg}%</div><div class="sp-label">Avg Progress</div></div>
    <div class="stat-pill sp-green"><div class="sp-icon">✅</div><div class="sp-value">${completed}</div><div class="sp-label">Completed</div></div>
    <div class="stat-pill sp-red"><div class="sp-icon">⏳</div><div class="sp-value">${pending}</div><div class="sp-label">Pending Tasks</div></div>
  </div>

  <div class="g2">
    <div class="card">
      <div class="card-title">▶ Continue Learning</div>
      ${inProg.map(c => `
        <div style="margin-bottom:14px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
            <span style="font-size:13px">${c.emoji} ${c.title}</span>
            <b style="font-size:12px;color:#f5a623">${myProg(c.id)}%</b>
          </div>
          <div class="pbar"><div class="pbar-fill ${pbarColor(myProg(c.id))}" style="width:${myProg(c.id)}%"></div></div>
        </div>`).join('')}
      <button class="btn btn-primary btn-sm" onclick="go('courses')" style="margin-top:8px">All Courses →</button>
    </div>

    <div class="card">
      <div class="card-title">📝 Upcoming Assignments</div>
      ${ASSIGNMENTS.filter(a => a.status === 'pending').map(a => {
        const c = COURSES.find(x => x.id === a.courseId);
        return `<div class="row-item">
          <div style="flex:1">
            <div style="font-size:13px;font-weight:600;color:#e8eaf0">${a.title}</div>
            <div style="font-size:11px;color:#8891a4">${c?.title || ''} · Due ${a.due}</div>
          </div>
          <span class="tag ${a.type === 'quiz' ? 'tag-amber' : 'tag-blue'}">${a.type}</span>
        </div>`;
      }).join('')}
      <button class="btn btn-blue btn-sm" onclick="go('quizzes')" style="margin-top:12px">Start Tasks</button>
    </div>
  </div>

  <div class="card" style="margin-top:16px">
    <div class="card-title">🏆 Recent Scores</div>
    <div style="display:flex;gap:14px;flex-wrap:wrap">
      ${ASSIGNMENTS.filter(a => a.score).map(a => `
        <div style="background:#0d0f14;border:1px solid #1e2330;border-radius:10px;padding:14px 18px;text-align:center;min-width:120px">
          <div style="font-size:26px;font-weight:800;font-family:Syne,sans-serif;color:${a.score>=80?'#34d399':'#f5a623'}">${a.score}%</div>
          <div style="font-size:11px;color:#8891a4;margin-top:4px">${a.title}</div>
        </div>`).join('')}
    </div>
  </div>`;
}

/* =============================================
   COURSE GRID
   ============================================= */
function renderCourseGrid(isTeacher = false) {
  return `
  <div class="pg-header">
    <h1>${isTeacher ? 'All Courses' : 'My Courses'}</h1>
    <p>${isTeacher ? 'Manage course content and track enrollments.' : 'Browse, continue, and master your subjects.'}</p>
  </div>
  <div class="course-grid">
  ${COURSES.map(c => {
    const p = myProg(c.id);
    return `<div class="course-card" onclick="${!isTeacher ? `openCourse(${c.id})` : `alert('Editing: ${c.title}')`}">
      <div class="cc-thumb" style="background:${c.color}">
        ${c.emoji}
        <span class="cc-badge tag ${levelTag(c.level)}">${c.level}</span>
      </div>
      <div class="cc-body">
        <div class="cc-title">${c.title}</div>
        <div class="cc-meta">${c.category} · ${c.lessons} lessons</div>
        <div class="cc-meta" style="margin-bottom:10px">${c.desc.slice(0,60)}...</div>
        ${!isTeacher ? `
          <div class="cc-prog"><span>Progress</span><b>${p}%</b></div>
          <div class="pbar"><div class="pbar-fill ${pbarColor(p)}" style="width:${p}%"></div></div>
          <button class="btn btn-primary btn-sm btn-full" style="margin-top:12px" onclick="event.stopPropagation();openCourse(${c.id})">${p > 0 ? 'Continue' : 'Start'} →</button>
        ` : `
          <div style="display:flex;gap:8px;margin-top:10px">
            <button class="btn btn-sm" onclick="event.stopPropagation();alert('Edit coming soon')">✏️ Edit</button>
            <button class="btn btn-green btn-sm">👁 View</button>
          </div>`}
      </div>
    </div>`;
  }).join('')}
  </div>`;
}

/* =============================================
   VIDEO PAGE
   ============================================= */
function renderVideoPage() {
  const cid = selectedCourseId || 1;
  const course = COURSES.find(c => c.id === cid);
  const vids = course.videos;
  const done = vids.filter(v => v.done).length;
  const pct = Math.round(done / vids.length * 100);

  return `
  <div class="pg-header"><h1>Video Lessons</h1><p>Watch and learn at your own pace.</p></div>

  <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px">
    ${COURSES.map(c => `
      <button class="btn btn-sm ${c.id === cid ? 'btn-primary' : ''}"
        onclick="selectedCourseId=${c.id};go('videos')">${c.emoji} ${c.title.split(' ')[0]}</button>`).join('')}
  </div>

  <div class="g2" style="align-items:start">
    <div>
      <div class="video-player">
        <div class="vp-label">${course.emoji} ${course.title}</div>
        <div class="vp-play" onclick="alert('▶ Playing: ${vids[0].title}')">▶</div>
        <div class="vp-dur">${vids[0].dur}</div>
      </div>
      <div class="card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
          <div style="font-size:14px;font-weight:600;color:#fff">${vids[0].title}</div>
          <span class="tag tag-amber">${done}/${vids.length} done</span>
        </div>
        <div class="pbar" style="margin-bottom:10px"><div class="pbar-fill amber" style="width:${pct}%"></div></div>
        <div style="font-size:12px;color:#8891a4">${course.desc}</div>
      </div>
    </div>
    <div class="card" style="max-height:480px;overflow-y:auto">
      <div class="card-title">📋 Course Content</div>
      ${vids.map((v, i) => `
        <div class="vl-item" onclick="alert('Playing: ${v.title}')">
          <div class="vl-thumb" style="background:${v.done ? 'rgba(52,211,153,0.12)' : '#1e2330'}">
            ${v.done ? '✅' : '▶'}
          </div>
          <div style="flex:1">
            <div class="vl-title">${i+1}. ${v.title}</div>
            <div class="vl-sub">⏱ ${v.dur}</div>
          </div>
          ${v.done ? '<span class="tag tag-green" style="font-size:10px">Done</span>' : ''}
        </div>`).join('')}
    </div>
  </div>`;
}

/* =============================================
   ASSIGNMENTS (Student)
   ============================================= */
function renderAssignments() {
  const pending   = ASSIGNMENTS.filter(a => a.status === 'pending');
  const completed = ASSIGNMENTS.filter(a => a.status === 'completed');
  return `
  <div class="pg-header"><h1>Assignments</h1><p>Quizzes and projects to test your skills.</p></div>
  <div class="stat-row s2" style="margin-bottom:20px">
    <div class="stat-pill sp-red"><div class="sp-value">${pending.length}</div><div class="sp-label">Pending</div></div>
    <div class="stat-pill sp-green"><div class="sp-value">${completed.length}</div><div class="sp-label">Completed</div></div>
  </div>

  <div style="font-size:13px;font-weight:600;color:#8891a4;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:10px">Pending</div>
  ${pending.map(a => {
    const c = COURSES.find(x => x.id === a.courseId);
    return `<div class="assign-card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px">
        <div>
          <div class="assign-title">${a.title}</div>
          <div class="assign-meta">${c?.title || ''} · Due: ${a.due}</div>
        </div>
        <span class="tag ${a.type==='quiz'?'tag-amber':'tag-blue'}">${a.type}</span>
      </div>
      ${a.type === 'quiz'
        ? `<button class="btn btn-primary btn-sm" style="margin-top:12px" onclick="startQuiz(${a.id})">Start Quiz ▶</button>`
        : `<div style="font-size:12px;color:#8891a4;margin-top:10px;line-height:1.6">${a.desc}</div>
           <button class="btn btn-blue btn-sm" style="margin-top:10px" onclick="alert('Project submission coming soon!')">📤 Submit Project</button>`}
    </div>`;
  }).join('')}

  <div style="font-size:13px;font-weight:600;color:#8891a4;text-transform:uppercase;letter-spacing:0.6px;margin:20px 0 10px">Completed</div>
  ${completed.map(a => {
    const c = COURSES.find(x => x.id === a.courseId);
    return `<div class="assign-card" style="opacity:0.75">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <div>
          <div class="assign-title">${a.title}</div>
          <div class="assign-meta">${c?.title || ''}</div>
        </div>
        <div style="text-align:right">
          <div style="font-family:Syne,sans-serif;font-size:24px;font-weight:800;color:${a.score>=80?'#34d399':'#f5a623'}">${a.score}%</div>
          <span class="tag tag-green">Done ✓</span>
        </div>
      </div>
    </div>`;
  }).join('')}

  <div id="quizArea" style="margin-top:20px"></div>`;
}

/* =============================================
   QUIZ ENGINE
   ============================================= */
function startQuiz(aid) {
  const a = ASSIGNMENTS.find(x => x.id === aid);
  quizState = { aid, current: 0, answers: [], selected: undefined };
  renderQuizQ(a);
}
function renderQuizQ(a) {
  const area = document.getElementById('quizArea');
  area.scrollIntoView({ behavior: 'smooth' });
  const q = a.questions[quizState.current];
  area.innerHTML = `
  <div class="card" style="border:1px solid #f5a623">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div style="font-family:Syne,sans-serif;font-size:15px;font-weight:800;color:#f5a623">${a.title}</div>
      <span class="tag tag-amber">Q${quizState.current+1}/${a.questions.length}</span>
    </div>
    <div style="font-size:15px;font-weight:500;color:#fff;margin-bottom:16px;line-height:1.5">${q.q}</div>
    ${q.opts.map((opt,i) => `
      <div class="quiz-opt" id="qo${i}" onclick="selectOpt(${a.id},${i})">
        <div class="quiz-letter">${String.fromCharCode(65+i)}</div>
        <span>${opt}</span>
      </div>`).join('')}
    <div id="qfb" style="margin-top:12px;font-size:13px;font-weight:500;display:none"></div>
    <div style="display:flex;gap:10px;margin-top:14px">
      <button class="btn btn-primary" id="qSubmit" onclick="submitAns(${a.id})">Submit Answer</button>
      <button class="btn" onclick="document.getElementById('quizArea').innerHTML=''">✕ Close</button>
    </div>
  </div>`;
}
function selectOpt(aid, i) {
  document.querySelectorAll('.quiz-opt').forEach(el => el.classList.remove('selected'));
  document.getElementById('qo'+i).classList.add('selected');
  quizState.selected = i;
}
function submitAns(aid) {
  if (quizState.selected === undefined) { alert('Pick an answer first!'); return; }
  const a = ASSIGNMENTS.find(x => x.id === aid);
  const q = a.questions[quizState.current];
  const ok = quizState.selected === q.ans;
  quizState.answers.push({ ok });
  document.getElementById('qo'+q.ans).classList.add('correct');
  if (!ok) document.getElementById('qo'+quizState.selected).classList.add('wrong');
  const fb = document.getElementById('qfb');
  fb.style.display = 'block';
  fb.innerHTML = ok
    ? `<span style="color:#34d399">✅ Correct! Well done.</span>`
    : `<span style="color:#f87171">❌ Wrong. Correct: <b>${q.opts[q.ans]}</b></span>`;
  const btn = document.getElementById('qSubmit');
  btn.textContent = quizState.current < a.questions.length - 1 ? 'Next →' : 'See Results';
  btn.onclick = () => nextQ(aid);
  quizState.selected = undefined;
}
function nextQ(aid) {
  const a = ASSIGNMENTS.find(x => x.id === aid);
  quizState.current++;
  if (quizState.current >= a.questions.length) {
    const score = Math.round(quizState.answers.filter(x=>x.ok).length / a.questions.length * 100);
    document.getElementById('quizArea').innerHTML = `
    <div class="card" style="border:1px solid ${score>=80?'#34d399':'#f5a623'};text-align:center;padding:32px">
      <div style="font-size:48px;margin-bottom:12px">${score>=80?'🏆':'📚'}</div>
      <div style="font-family:Syne,sans-serif;font-size:48px;font-weight:800;color:${score>=80?'#34d399':'#f5a623'};margin-bottom:8px">${score}%</div>
      <div style="font-size:14px;color:#8891a4;margin-bottom:6px">${quizState.answers.filter(x=>x.ok).length}/${a.questions.length} correct</div>
      <div style="font-size:14px;color:#e8eaf0;margin-bottom:20px">${score>=80?'🎉 Excellent — you passed!':'Keep practising, you can do better!'}</div>
      <button class="btn btn-primary" onclick="go('quizzes')">← Back to Assignments</button>
    </div>`;
  } else {
    renderQuizQ(a);
  }
}

/* =============================================
   STUDENT PROGRESS
   ============================================= */
function renderStudentProgress() {
  const st = STUDENTS[0];
  const avg = avgProg(st);
  const scores = ASSIGNMENTS.filter(a => a.score);
  const avgScore = scores.length ? Math.round(scores.reduce((s,a)=>s+a.score,0)/scores.length) : 0;
  return `
  <div class="pg-header"><h1>My Progress</h1><p>Track your learning journey.</p></div>
  <div class="stat-row s4" style="margin-bottom:20px">
    <div class="stat-pill sp-blue"><div class="sp-value">${avg}%</div><div class="sp-label">Overall Avg</div></div>
    <div class="stat-pill sp-amber"><div class="sp-value">${COURSES.length}</div><div class="sp-label">Active Courses</div></div>
    <div class="stat-pill sp-green"><div class="sp-value">${scores.length}</div><div class="sp-label">Quizzes Done</div></div>
    <div class="stat-pill sp-purple"><div class="sp-value">${avgScore}%</div><div class="sp-label">Quiz Avg</div></div>
  </div>
  <div class="card" style="margin-bottom:16px">
    <div class="card-title">📊 Course-by-Course Breakdown</div>
    <div class="chart-bar-wrap">
      ${COURSES.map(c => `
        <div class="chart-bar-item">
          <div class="cb-header">
            <span class="cb-name">${c.emoji} ${c.title}</span>
            <span class="cb-val">${myProg(c.id)}%</span>
          </div>
          <div class="pbar"><div class="pbar-fill ${pbarColor(myProg(c.id))}" style="width:${myProg(c.id)}%"></div></div>
        </div>`).join('')}
    </div>
  </div>
  <div class="card">
    <div class="card-title">🏅 Quiz Scores</div>
    ${scores.map(a => {
      const c = COURSES.find(x => x.id === a.courseId);
      return `<div class="row-item">
        <div style="flex:1">
          <div style="font-size:13px;font-weight:600">${a.title}</div>
          <div style="font-size:11px;color:#8891a4">${c?.title || ''}</div>
        </div>
        <div style="font-family:Syne,sans-serif;font-size:20px;font-weight:800;color:${a.score>=80?'#34d399':'#f5a623'}">${a.score}%</div>
      </div>`;
    }).join('')}
  </div>`;
}

/* =============================================
   TEACHER DASHBOARD
   ============================================= */
function renderTeacherDash() {
  const classAvg = Math.round(STUDENTS.reduce((s,st)=>s+avgProg(st),0)/STUDENTS.length);
  return `
  <div class="pg-header"><h1>Instructor Dashboard</h1><p>Here's how your class is doing today.</p></div>
  <div class="stat-row s4">
    <div class="stat-pill sp-blue"><div class="sp-icon">👥</div><div class="sp-value">${STUDENTS.length}</div><div class="sp-label">Students</div></div>
    <div class="stat-pill sp-amber"><div class="sp-icon">📚</div><div class="sp-value">${COURSES.length}</div><div class="sp-label">Courses</div></div>
    <div class="stat-pill sp-green"><div class="sp-icon">📊</div><div class="sp-value">${classAvg}%</div><div class="sp-label">Class Avg</div></div>
    <div class="stat-pill sp-purple"><div class="sp-icon">📝</div><div class="sp-value">${ASSIGNMENTS.length}</div><div class="sp-label">Assignments</div></div>
  </div>
  <div class="g2">
    <div class="card">
      <div class="card-title">👥 Student Overview</div>
      ${STUDENTS.map(st => {
        const avg = avgProg(st);
        return `<div class="row-item">
          <div class="av" style="background:${st.ac};color:${st.tc}">${st.av}</div>
          <div style="flex:1">
            <div style="font-size:13px;font-weight:600;margin-bottom:5px">${st.name}</div>
            <div class="pbar"><div class="pbar-fill ${pbarColor(avg)}" style="width:${avg}%"></div></div>
          </div>
          <div style="font-family:Syne,sans-serif;font-size:16px;font-weight:800;color:${avg>=70?'#34d399':avg>=40?'#f5a623':'#f87171'};margin-left:10px">${avg}%</div>
        </div>`;
      }).join('')}
    </div>
    <div class="card">
      <div class="card-title">📚 Course Enrollments</div>
      ${COURSES.map(c => `
        <div style="margin-bottom:14px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px">
            <span style="font-size:13px">${c.emoji} ${c.title}</span>
            <span style="font-size:12px;color:#8891a4">${c.lessons} lessons</span>
          </div>
          <div class="pbar"><div class="pbar-fill blue" style="width:${Math.round(Math.random()*60+40)}%"></div></div>
        </div>`).join('')}
      <button class="btn btn-primary btn-sm" style="margin-top:8px" onclick="go('addcourse')">➕ Add New Course</button>
    </div>
  </div>`;
}

/* =============================================
   TEACHER: STUDENTS TABLE
   ============================================= */
function renderStudents() {
  return `
  <div class="pg-header"><h1>Students</h1><p>Monitor every student's performance across all courses.</p></div>
  <div class="card" style="overflow-x:auto">
    <table class="ef-table">
      <thead><tr>
        <th>Student</th>
        ${COURSES.slice(0,4).map(c=>`<th style="text-align:center">${c.emoji} ${c.title.split(' ')[0]}</th>`).join('')}
        <th style="text-align:center">Avg</th>
        <th>Action</th>
      </tr></thead>
      <tbody>
        ${STUDENTS.map(st => {
          const avg = avgProg(st);
          return `<tr>
            <td><div style="display:flex;align-items:center;gap:10px">
              <div class="av" style="background:${st.ac};color:${st.tc}">${st.av}</div>
              <div>
                <div style="font-weight:600">${st.name}</div>
                <div style="font-size:11px;color:#8891a4">${st.email}</div>
              </div>
            </div></td>
            ${COURSES.slice(0,4).map(c=>`
              <td style="text-align:center">
                <span style="font-weight:700;color:${(st.progress[c.id]||0)>=70?'#34d399':(st.progress[c.id]||0)>=40?'#f5a623':'#f87171'}">
                  ${st.progress[c.id]||0}%
                </span>
              </td>`).join('')}
            <td style="text-align:center">
              <span class="tag ${avg>=70?'tag-green':avg>=40?'tag-amber':'tag-red'}">${avg}%</span>
            </td>
            <td><button class="btn btn-sm" onclick="alert('Viewing ${st.name} details')">📋 Details</button></td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>`;
}

/* =============================================
   TEACHER: ASSIGNMENTS
   ============================================= */
function renderTeacherAssignments() {
  return `
  <div class="pg-header"><h1>Assignments</h1><p>Manage and review all assignments.</p></div>
  ${ASSIGNMENTS.map(a => {
    const c = COURSES.find(x => x.id === a.courseId);
    return `<div class="assign-card" style="margin-bottom:12px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:10px">
        <div>
          <div class="assign-title">${a.title}</div>
          <div class="assign-meta">${c?.title || ''} · Due: ${a.due}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
          <span class="tag ${a.type==='quiz'?'tag-amber':'tag-blue'}">${a.type}</span>
          <span class="tag ${a.status==='completed'?'tag-green':'tag-gray'}">${a.status}</span>
        </div>
      </div>
      <div class="pbar" style="margin-bottom:6px">
        <div class="pbar-fill ${a.status==='completed'?'green':'amber'}" style="width:${a.status==='completed'?100:40}%"></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span style="font-size:12px;color:#8891a4">${a.status==='completed'?'All students submitted':'Awaiting submissions'}</span>
        ${a.score ? `<span style="font-size:13px;font-weight:700;color:#34d399">Avg: ${a.score}%</span>` : ''}
      </div>
    </div>`;
  }).join('')}
  <button class="btn btn-primary" onclick="showAddAssignmentModal()" style="margin-top:8px">➕ Add Assignment</button>
  <div id="assignModalArea"></div>`;
}

function showAddAssignmentModal() {
  document.getElementById('assignModalArea').innerHTML = `
  <div class="modal-overlay" onclick="if(event.target===this)this.remove()">
    <div class="modal-box">
      <div class="modal-title">➕ New Assignment</div>
      <div class="inp-group"><label>Title</label><input id="naTitle" placeholder="e.g. Python Final Quiz"></div>
      <div class="inp-group"><label>Course</label>
        <select id="naCourse">${COURSES.map(c=>`<option value="${c.id}">${c.title}</option>`).join('')}</select>
      </div>
      <div class="inp-group"><label>Type</label>
        <select id="naType"><option value="quiz">Quiz</option><option value="project">Project</option></select>
      </div>
      <div class="inp-group"><label>Due Date</label><input id="naDue" type="date"></div>
      <div class="modal-footer">
        <button class="btn" onclick="document.querySelector('.modal-overlay').remove()">Cancel</button>
        <button class="btn btn-primary" onclick="saveAssignment()">Save</button>
      </div>
    </div>
  </div>`;
}

function saveAssignment() {
  const title = document.getElementById('naTitle').value.trim();
  const courseId = parseInt(document.getElementById('naCourse').value);
  const type = document.getElementById('naType').value;
  const due = document.getElementById('naDue').value;
  if (!title || !due) { alert('Fill all fields'); return; }
  ASSIGNMENTS.push({ id: Date.now(), courseId, title, type, due, status: 'pending', score: null });
  document.querySelector('.modal-overlay')?.remove();
  go('quizzes');
}

/* =============================================
   TEACHER: STUDENT PROGRESS
   ============================================= */
function renderTeacherProgress() {
  return `
  <div class="pg-header"><h1>Student Progress</h1><p>Detailed breakdown for every student.</p></div>
  ${STUDENTS.map(st => {
    const avg = avgProg(st);
    return `<div class="card" style="margin-bottom:14px">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">
        <div class="av" style="background:${st.ac};color:${st.tc};width:42px;height:42px;font-size:14px">${st.av}</div>
        <div style="flex:1">
          <div style="font-size:14px;font-weight:600;color:#fff">${st.name}</div>
          <div style="font-size:11px;color:#8891a4">${st.email}</div>
        </div>
        <div style="font-family:Syne,sans-serif;font-size:22px;font-weight:800;color:${avg>=70?'#34d399':avg>=40?'#f5a623':'#f87171'}">${avg}%</div>
      </div>
      <div class="g3">
        ${COURSES.map(c => `
          <div>
            <div style="font-size:11px;font-weight:600;color:#8891a4;margin-bottom:5px">${c.emoji} ${c.title.split(' ')[0]}</div>
            <div class="pbar"><div class="pbar-fill ${pbarColor(st.progress[c.id]||0)}" style="width:${st.progress[c.id]||0}%"></div></div>
            <div style="font-size:11px;color:#8891a4;margin-top:3px">${st.progress[c.id]||0}%</div>
          </div>`).join('')}
      </div>
    </div>`;
  }).join('')}`;
}

/* =============================================
   TEACHER: ADD COURSE
   ============================================= */
function renderAddCourse() {
  const emojis = ['🐍','⚙️','🔷','🌐','🗂️','🗄️','⚛️','🧠','🔐','📱','🎨','🤖'];
  return `
  <div class="pg-header"><h1>Add New Course</h1><p>Create a course and assign it to students.</p></div>
  <div class="card" style="max-width:580px">
    <div class="inp-group"><label>Course Title</label><input id="acTitle" placeholder="e.g. Machine Learning Basics"></div>
    <div class="inp-group"><label>Category</label>
      <select id="acCat">
        <option>Programming</option><option>Web</option><option>CS Core</option>
        <option>Database</option><option>Systems</option><option>AI/ML</option><option>Mobile</option>
      </select>
    </div>
    <div class="inp-group"><label>Level</label>
      <select id="acLvl"><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select>
    </div>
    <div class="inp-group"><label>Description</label><textarea id="acDesc" placeholder="What will students learn?"></textarea></div>
    <div class="inp-group"><label>Number of Lessons</label><input id="acLessons" type="number" placeholder="e.g. 10" min="1" max="50"></div>
    <div class="inp-group"><label>Pick an Emoji Icon</label>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
        ${emojis.map(e => `<span class="emoji-pick" onclick="pickEmoji(this,'${e}')"
          style="font-size:24px;cursor:pointer;padding:6px 10px;border-radius:8px;border:1px solid #1e2330;background:#0d0f14;transition:all 0.15s">${e}</span>`).join('')}
      </div>
      <input id="acEmoji" type="hidden" value="📚">
    </div>
    <div id="acErr" class="lg-err hidden">Please fill all required fields.</div>
    <button class="btn btn-primary" onclick="saveCourse()" style="width:100%;margin-top:8px">Create Course ✓</button>
  </div>`;
}

function pickEmoji(el, em) {
  document.querySelectorAll('.emoji-pick').forEach(e => e.style.borderColor = '#1e2330');
  el.style.borderColor = '#f5a623';
  document.getElementById('acEmoji').value = em;
}

function saveCourse() {
  const title   = document.getElementById('acTitle').value.trim();
  const cat     = document.getElementById('acCat').value;
  const lvl     = document.getElementById('acLvl').value;
  const desc    = document.getElementById('acDesc').value.trim();
  const lessons = parseInt(document.getElementById('acLessons').value) || 0;
  const emoji   = document.getElementById('acEmoji').value || '📚';
  const err     = document.getElementById('acErr');
  if (!title || !desc || !lessons) { err.classList.remove('hidden'); return; }
  err.classList.add('hidden');
  const id = COURSES.length + 1;
  const colors = ['#1a2a18','#14202a','#1a1420','#201418','#1a201a','#1e1a14'];
  COURSES.push({ id, emoji, title, category:cat, level:lvl, color:colors[id%colors.length],
                 lessons, desc, videos:Array.from({length:lessons},(_,i)=>({title:`Lesson ${i+1}`,dur:'20:00',done:false})) });
  STUDENTS.forEach(st => { st.progress[id] = 0; });
  alert(`✅ "${title}" created and added to all students!`);
  go('courses');
}

/* ---- INIT ---- */
window.addEventListener('load', () => {
  document.getElementById('lgEmail').value = 'student@edu.com';
  document.getElementById('lgPass').value  = 'pass123';
});
