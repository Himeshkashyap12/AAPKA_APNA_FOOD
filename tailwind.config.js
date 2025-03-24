import { theme } from 'antd'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7043",
        secondary:" #333333 ",
        white:"#fff",
        red:"#FF0000",
        green:"#008000",
        backgrondColor:"#FFF2F2",
        acceptColor:"#5CE65C",
        reject:"#E65C5C"
       },
    },
   
      
    
  },
  plugins: [],
}

