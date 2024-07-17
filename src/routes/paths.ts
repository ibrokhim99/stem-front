// ----------------------------------------------------------------------

const ROOTS = {
  HOME: '/landing',
  STUDENTS: '/students',
  AUTH: '/auth',
  TEACHERS: '/teachers',
  DESCRIPTION: '/description',
};

// ----------------------------------------------------------------------

export const paths = {
  faqs: '/faqs',
  minimalStore: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUpTeacher: `${ROOTS.AUTH}/jwt/sign-up-teacher`,
      signUpStudent: `${ROOTS.AUTH}/jwt/sign-up-student`,
      signOTP: `${ROOTS.AUTH}/jwt/sign-otp`,
      signRole: `${ROOTS.AUTH}/jwt/sign-role`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.HOME,
    one: `${ROOTS.TEACHERS}/one`,
    two: `${ROOTS.TEACHERS}/test`,
    question: `${ROOTS.TEACHERS}/test/create`,
    edit: (id: string) => `${ROOTS.TEACHERS}/test/${id}`,
    three: `${ROOTS.TEACHERS}/three`,
    five: `${ROOTS.TEACHERS}/five`,
  },
  // HOME
  home: {
    landing: ROOTS.HOME,
  },
  // Students Page
  students: {
    root: ROOTS.STUDENTS,
  },
  description: {
    root: ROOTS.DESCRIPTION,
  },
};
