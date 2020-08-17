import errorCodes from './errors';
import validations from './validations';

export default string = {
  common: {
    cancel: "Cancel",
    confirm: "Confirm",
    continue: "Continue",
    done: "Done",
    yes: "Yes",
    no: "No",
    delete: "Delete",
    name:"Name",
    hastags:"#hashtags",
    topics:"topics",
    create:"Create"
  },
  login: {
    title: 'Login',
    signupButton: 'Register an account?',
    loginButton: 'Login'
  },
  signup: {
    title: 'Sign Up',
    policyAgreement: 'By tapping Register, I agree to DOM\'s ',
    terms: 'Term of Service',
    and: ' and ',
    privacy: 'Privacy Statement',
    registerButton: 'Register',
    nextButton: 'Next',
    selectInterest: 'Select Interests',
    selectedInterest: 'Selected Interests',
    birthday: 'BirthDay',
    fullName: 'Full Name',
    invitePeople: 'Invite Friends',
    allowAddress: 'Allow Address Book',
    connectFb: 'Connect Facebook',
    share: 'Share',
    permission: 'Permissions',
  },
  work: {
    title: 'Work',
    welcome: 'Welcome, {{0}}'
  },
  calendar: {
    title: 'Calendar',
  },
  manage: {
    title: 'Manage',
  },
  message: {
    title: 'Message',
    deleteMessage: "Delete message?",
    confirmDeleteMessage: "Do you really want to delete this message?",
  },
  controls: {
    email: 'Email',
    phone: 'Phone',
    username: 'Username',
    password: 'Password',
    confirmPassword: 'Confirm password'
  },
  verifyCode: {
    title: 'Confirm Phone Number',
    fieldInput: "Verification code"
  },
  newgroup:{
   title:"New Group",
   description:"Description (max 300 characters)",
   uploadimage:"Upload Image",
   approval:"Approval Required"
  },
  editgroup:{
    join:"Join"
  },
  errorCodes,
  validations,
}