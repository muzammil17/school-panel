import React from "react";

// const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
// const Cards = React.lazy(() => import('./views/Base/Cards'));
// const Carousels = React.lazy(() => import('./views/Base/Carousels'));
// const Collapses = React.lazy(() => import('./views/Base/Collapses'));
// const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
// const Forms = React.lazy(() => import('./views/Base/Forms'));
// const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
// const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
// const Navbars = React.lazy(() => import('./views/Base/Navbars'));
// const Navs = React.lazy(() => import('./views/Base/Navs'));
// const Paginations = React.lazy(() => import('./views/Base/Paginations'));
// const Popovers = React.lazy(() => import('./views/Base/Popovers'));
// const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
// const Switches = React.lazy(() => import('./views/Base/Switches'));
// const Tables = React.lazy(() => import('./views/Base/Tables'));
// const Tabs = React.lazy(() => import('./views/Base/Tabs'));
// const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
// const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
// const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
// const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
// const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
// const Charts = React.lazy(() => import("./views/Charts"));
// const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
// const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
// const Flags = React.lazy(() => import('./views/Icons/Flags'));
// const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
// const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
// const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
// const Badges = React.lazy(() => import('./views/Notifications/Badges'));
// const Modals = React.lazy(() => import('./views/Notifications/Modals'));
// const Colors = React.lazy(() => import('./views/Theme/Colors'));
// const Typography = React.lazy(() => import('./views/Theme/Typography'));
// const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
// const Users = React.lazy(() => import('./views/Users/Users'));
// const User = React.lazy(() => import('./views/Users/User'));

// main Components

const Dashboard2 = React.lazy(() =>
  import("./views/mainData/Dashboard/Dashboard2")
);
const Employee = React.lazy(() =>
  import("./views/mainData/addForms/addEmployee")
);
const Diary = React.lazy(() => import("./views/mainData/addForms/addDiary"));
const Event = React.lazy(() => import("./views/mainData/addForms/addEvent"));
const News = React.lazy(() => import("./views/mainData/addForms/addNews"));
const Parent = React.lazy(() => import("./views/mainData/addForms/addParent"));
const Result = React.lazy(() => import("./views/mainData/addForms/addResult"));
const Teacher = React.lazy(() =>
  import("./views/mainData/addForms/addTeacher")
);
const Circular = React.lazy(() =>
  import("./views/mainData/addForms/addCircular")
);
const Class = React.lazy(() => import("./views/mainData/addForms/addClass"));
const Subject = React.lazy(() =>
  import("./views/mainData/addForms/addSubject")
);
const Syllabus = React.lazy(() =>
  import("./views/mainData/addForms/addSyllabus")
);
const Student = React.lazy(() =>
  import("./views/mainData/addForms/addStudent")
);
const StudentForm = React.lazy(() =>
  import("./views/mainData/addForms/addStudentForm")
);
// importing tables
const TeacherList = React.lazy(() =>
  import("./views/mainData/addTables/teacherList")
);
const AttendanceList = React.lazy(() =>
  import("./views/mainData/addTables/attendanceList")
);
const CircularList = React.lazy(() =>
  import("./views/mainData/addTables/circularList")
);
const ClassList = React.lazy(() =>
  import("./views/mainData/addTables/classList")
);
const DiaryList = React.lazy(() =>
  import("./views/mainData/addTables/diaryList")
);
const EmployeesList = React.lazy(() =>
  import("./views/mainData/addTables/employeesList")
);
const EventList = React.lazy(() =>
  import("./views/mainData/addTables/eventList")
);
const FeedbackList = React.lazy(() =>
  import("./views/mainData/addTables/feedbackList")
);
const FinanceList = React.lazy(() =>
  import("./views/mainData/addTables/financeList")
);
const NewsList = React.lazy(() =>
  import("./views/mainData/addTables/newsList")
);
const NoticeList = React.lazy(() =>
  import("./views/mainData/addTables/noticeList")
);
const ParentList = React.lazy(() =>
  import("./views/mainData/addTables/parentList")
);
const ReportList = React.lazy(() =>
  import("./views/mainData/addTables/reportList")
);
const ResultList = React.lazy(() =>
  import("./views/mainData/addTables/resultList")
);
const StudentList = React.lazy(() =>
  import("./views/mainData/addTables/studentList")
);
const SubjectList = React.lazy(() =>
  import("./views/mainData/addTables/subjectList")
);
const SyllabusList = React.lazy(() =>
  import("./views/mainData/addTables/syllabusList")
);
const VoucherList = React.lazy(() =>
  import("./views/mainData/addTables/voucherList")
);

// view pages
const ViewCircular = React.lazy(() =>
  import("./views/mainData/viewPages/viewCircular")
);
const ViewClass = React.lazy(() =>
  import("./views/mainData/viewPages/viewClass")
);
const ViewDiary = React.lazy(() =>
  import("./views/mainData/viewPages/viewDiary")
);
const ViewEmployee = React.lazy(() =>
  import("./views/mainData/viewPages/viewEmployee")
);
const ViewEvent = React.lazy(() =>
  import("./views/mainData/viewPages/viewEvent")
);
const viewNews = React.lazy(() =>
  import("./views/mainData/viewPages/viewNews")
);
const ViewParent = React.lazy(() =>
  import("./views/mainData/viewPages/viewParent")
);
const ViewResult = React.lazy(() =>
  import("./views/mainData/viewPages/viewResult")
);
const ViewSubject = React.lazy(() =>
  import("./views/mainData/viewPages/viewSubject")
);
const ViewSyllabus = React.lazy(() =>
  import("./views/mainData/viewPages/viewSyllabus")
);
const ViewTeacher = React.lazy(() =>
  import("./views/mainData/viewPages/viewTeacher")
);
const ViewStudent = React.lazy(() =>
  import("./views/mainData/viewPages/viewStudent")
);

// editForm pages

const EditCircular = React.lazy(() =>
  import("./views/mainData/editForms/editCircular")
);
const EditClass = React.lazy(() =>
  import("./views/mainData/editForms/editClass")
);
const EditDiary = React.lazy(() =>
  import("./views/mainData/editForms/editDiary")
);
const EditEmployee = React.lazy(() =>
  import("./views/mainData/editForms/editEmployee")
);
const EditEvent = React.lazy(() =>
  import("./views/mainData/editForms/editEvent")
);
const EditNews = React.lazy(() =>
  import("./views/mainData/editForms/editNews")
);
const EditParent = React.lazy(() =>
  import("./views/mainData/editForms/editParent")
);
const EditResult = React.lazy(() =>
  import("./views/mainData/editForms/editResult")
);
const EditStudent = React.lazy(() =>
  import("./views/mainData/editForms/editStudent")
);
const EditSubject = React.lazy(() =>
  import("./views/mainData/editForms/editSubject")
);
const EditSyllabus = React.lazy(() =>
  import("./views/mainData/editForms/editSyllabus")
);
const EditTeacher = React.lazy(() =>
  import("./views/mainData/editForms/editTeacher")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  // add forms
  { path: "/addCircular", name: "Circular / Add", component: Circular },
  { path: "/addStudent", name: "Student / Add", component: Student },
  { path: "/addStudentForm", name: "Student / Add", component: StudentForm },
  { path: "/addSyllabus", name: "Syllabus / Add", component: Syllabus },
  { path: "/addClass", name: "Class / Add", component: Class },
  { path: "/addSubject", name: "Subject / Add", component: Subject },
  { path: "/addDiary", name: "Diary / Add", component: Diary },
  { path: "/addEvent", name: "Event / Add", component: Event },
  { path: "/addEmployee", name: "Employee / Add", component: Employee },
  { path: "/addNews", name: "News / Add", component: News },
  { path: "/addParent", name: "Parent / Add", component: Parent },
  { path: "/addResult", name: "Result / Add", component: Result },
  { path: "/addTeacher", name: "Teacher / Add", component: Teacher },
  { path: "/dashboard", name: "Dashboard", component: Dashboard2 },
  // add tables
  { path: "/listTeacher", name: "Teacher / Show", component: TeacherList },
  {
    path: "/listAttendance",
    name: "Attendance / Show",
    component: AttendanceList,
  },
  { path: "/listCircular", name: "Circular / Show", component: CircularList },
  { path: "/listDiary", name: "Diary / Show", component: DiaryList },
  {
    path: "/listEmployees",
    name: "Employees / Show",
    component: EmployeesList,
  },
  { path: "/listEvent", name: "Event / Show", component: EventList },
  { path: "/listClass", name: "Class / Show", component: ClassList },
  { path: "/listFeedback", name: "Feedback / Show", component: FeedbackList },
  { path: "/listFinance", name: "Finance / Show", component: FinanceList },
  { path: "/listNews", name: "News / Show", component: NewsList },
  { path: "/listNotice", name: "Notice / Show", component: NoticeList },
  { path: "/listParent", name: "Parent / Show", component: ParentList },
  { path: "/listReport", name: "Report / Show", component: ReportList },
  { path: "/listResult", name: "Result / Show", component: ResultList },
  { path: "/listStudent", name: "Student / Show", component: StudentList },
  { path: "/listSyllabus", name: "Syllabus / Show", component: SyllabusList },
  { path: "/listSubject", name: "Subject / Show", component: SubjectList },
  { path: "/listVoucher", name: "Voucher / Show", component: VoucherList },

  // view pages

  {
    path: "/viewCircular/:circularId",
    name: "View / Circular",
    component: ViewCircular,
  },
  { path: "/viewClass", name: "View / Class", component: ViewClass },
  { path: "/viewDiary/:diaryId", name: "View / Diary", component: ViewDiary },
  { path: "/viewEmployee", name: "View / Employee", component: ViewEmployee },
  { path: "/viewEvent/:eventId", name: "View / Event", component: ViewEvent },
  { path: "/viewNews/:newsId", name: "View / News", component: viewNews },
  {
    path: "/viewParent/:parentId",
    name: "View / Parent",
    component: ViewParent,
  },
  { path: "/viewResult", name: "View / Result", component: ViewResult },
  { path: "/viewSubject", name: "View / Subject", component: ViewSubject },
  { path: "/viewSyllabus", name: "View / Syllabus", component: ViewSyllabus },
  { path: "/viewTeacher", name: "View / Teacher", component: ViewTeacher },
  { path: "/viewStudent", name: "View / Student", component: ViewStudent },

  // editform pages

  {
    path: "/editCircular/:circularId",
    name: "Edit / Circular",
    component: EditCircular,
  },
  { path: "/editClass", name: "Edit / Class", component: EditClass },
  { path: "/editDiary/:diaryId", name: "Edit / Diary", component: EditDiary },
  { path: "/editEmployee", name: "Edit / Employee", component: EditEmployee },
  { path: "/editEvent/:eventId", name: "Edit / Event", component: EditEvent },
  { path: "/editNews/:newsId", name: "Edit / News", component: EditNews },
  {
    path: "/editParent/:parentId",
    name: "Edit / Parent",
    component: EditParent,
  },
  { path: "/editResult", name: "Edit / Result", component: EditResult },
  { path: "/editSubject", name: "Edit / Subject", component: EditSubject },
  { path: "/editSyllabus", name: "Edit / Syllabus", component: EditSyllabus },
  { path: "/editTeacher", name: "Edit / Teacher", component: EditTeacher },
  { path: "/editStudent", name: "Edit / Student", component: EditStudent },
];

export default routes;
