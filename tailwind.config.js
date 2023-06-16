import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".form-control": {
          // "&, & *": {
          //   border: "1px solid black",
          // },
          marginTop: 24,
          marginBottom: 40,
          width: "100%",
          position: "relative",
          "& input": {
            background: "transparent",
            borderBottom: `2px solid ${theme("colors.neutral.300")}`,
            fontSize: 18,
            transition: "border-color 0.25s ease-in-out",
            width: "100%",
          },
          "& label": {
            position: "absolute",
            top: 0,
            left: 0,
            lineHeight: 1,
          },
          "& label span": {
            fontSize: 18,
            transition:
              "color 0.25s ease-in-out, transform 0.25s cubic-bezier(.68,-0.55,.27,1.55)",
            display: "inline-block",
            minWidth: "5px",
          },
          "& input:is(:focus, :not(:placeholder-shown))": {
            outline: "none",
            borderBottomColor: theme("colors.indigo.500"),

            "& + label span": {
              color: theme("colors.indigo.500"),

              transform: "translateY(-135%)",
            },
          },
        },
      });
    }),
  ],
};
