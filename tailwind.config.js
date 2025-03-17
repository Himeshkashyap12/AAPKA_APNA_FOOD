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
        primary: "#D98324",
        secondary:"#443627",
        white:"#fff",
        red:"#FF0000",
        green:"#008000"
         
       },
    },
   
      
    
  },
  plugins: [],
}

