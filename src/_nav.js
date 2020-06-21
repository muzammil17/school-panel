export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard2",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "NEW",
      },
    },
    {
      name: "Circular",
      icon: "icon-refresh",
      children: [
        {
          name: "Add New",
          url: "/addCircular",
        },
        {
          name: "List",
          url: "/listCircular",
        },
      ],
    },
    {
      name: "News",
      url: "/buttons",
      icon: "icon-list",
      children: [
        {
          name: "Add New",
          url: "/addNews",
        },
        {
          name: "List",
          url: "/listNews",
        },
      ],
    },
    {
      name: "Diary",
      url: "/charts",
      icon: "icon-book",
      children: [
        {
          name: "Add New",
          url: "/addDiary",
        },
        {
          name: "List",
          url: "/listDiary",
        },
      ],
    },
    {
      name: "Events",
      url: "/notifications",
      icon: "icon-calendar",
      children: [
        {
          name: "Add New",
          url: "/addEvent",
        },
        {
          name: "List",
          url: "/listEvent",
        },
      ],
    },
    {
      name: "Students",
      url: "/widgets",
      icon: "icon-user",
      children: [
        {
          name: "Add New",
          url: "/addStudent",
        },
        {
          name: "List",
          url: "/listStudent",
        },
      ],
    },
    {
      name: "Parents",
      icon: "icon-user",
      children: [
        {
          name: "Add New",
          url: "/addParent",
        },
        {
          name: "List",
          url: "/listParent",
        },
      ],
    },
    {
      name: "Teachers",
      icon: "icon-user",
      children: [
        {
          name: "Add New",
          url: "/addTeacher",
        },
        {
          name: "List",
          url: "/listTeacher",
        },
      ],
    },
    {
      name: "Employees",
      icon: "icon-user",
      children: [
        {
          name: "Add New",
          url: "/addEmployee",
        },
        {
          name: "List",
          url: "/listEmployees",
        },
      ],
    },
    {
      name: "Results",
      url: "/pages",
      icon: "icon-list",
      children: [
        {
          name: "Add New",
          url: "/addResult",
        },
        {
          name: "List",
          url: "/listResult",
        },
      ],
    },
    {
      name: "Feedbacks",
      url: "/pages",
      icon: "icon-comment",
      children: [
        {
          name: "List",
          url: "/listFeedback",
        },
      ],
    },
    {
      name: "Class",
      url: "/pages",
      icon: "icon-book",
      children: [
        {
          name: "Add New",
          url: "/addClass",
        },
        {
          name: "List",
          url: "/listClass",
        },
      ],
    },
    {
      name: "Subjects",
      url: "/pages",
      icon: "icon-book",
      children: [
        {
          name: "Add New",
          url: "/addSubject",
        },
        {
          name: "List",
          url: "/listSubject",
        },
      ],
    },

    {
      name: "Syllabus",
      url: "/pages",
      icon: "icon-list",
      children: [
        {
          name: "Add New",
          url: "/addSyllabus",
        },
        {
          name: "List",
          url: "/listSyllabus",
        },
      ],
    },
  ],
};
