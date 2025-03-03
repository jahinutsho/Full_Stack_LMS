/** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize:{
        'course-details-heading-small': ['26px','36px'],
        'course-details-heading-large': ['36px', '44px'],
        'home-heading-large': ['48px', '56px'],
        'home-heading-small': ['28px', '34px'],
        'defalut':['15px','21px'],

      }
    },
  },
  plugins: [],
}