/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shamurai-with-sword": "url(/assets/images/shamurari_with_sword.png)",
        "some-shamurai": "url(/assets/images/bg-with-2-4-ninja.png)",
        "tokenomic-bg": "url(/assets/images/bg-2.png)",
        "roadmap-bg": "url(/assets/images/roadmap-bg.png)",
      },
      fontFamily: {
        shojumaru: ["Shojumaru"],
        zcool: ["ZCOOL_KuaiLe"],
        "robo-mono": ["Roboto Mono"],
        inter: ["Inter"],
      },
      colors: {
        "samurai-red": "#ED0137",
        "smurai-grade-red": "#D51B46",
        "smurai-grade-orange": "#EE6910",
      },
      animation: {
        'zoom': 'zoom 5s infinite',
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1.3)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
