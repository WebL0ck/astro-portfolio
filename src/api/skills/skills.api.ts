export const SKILL_TYPES = {
  FRONT_END: "FRONT_END",
  BACK_END: "BACK_END",
  OTHER: "OTHER",
};

export const SKILL_CATEGORIES = {
  [SKILL_TYPES.FRONT_END]: {
    REACT: "REACT",
    VUE: "VUE",
    WEB3: "WEB3",
    OTHER: "OTHER",
  },
  [SKILL_TYPES.BACK_END]: {},
  [SKILL_TYPES.OTHER]: {},
};

export const FRONT_END_SKILLS = [
  {
    icon: "/icons/skills/front-end/js.svg",
    href: "https://en.wikipedia.org/wiki/JavaScript",
    title: "JavaScript",
    description:
      "Widely-used programming language that allows developers to create dynamic and interactive web applications. It is primarily used for front-end development and can also be used for server-side development using Node.js.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.OTHER,
  },
  {
    icon: "/icons/skills/front-end/ts.svg",
    href: "https://www.typescriptlang.org/",
    title: "TypeScript",
    description:
      "Superset of JavaScript that adds static typing to the language. It provides improved tooling, better code organization, and enhanced maintainability for large-scale projects. TypeScript code is transpiled into JavaScript, making it compatible with all JavaScript environments.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.OTHER,
  },
  {
    icon: "/icons/skills/front-end/react.svg",
    href: "https://react.dev/",
    title: "React",
    description:
      "Popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the interface when the underlying data changes. React follows a component-based architecture and uses a virtual DOM for optimal performance.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.REACT,
  },
  {
    icon: "/icons/skills/front-end/redux.svg",
    href: "https://redux.js.org/",
    title: "Redux",
    description:
      "State management library commonly used with React. It provides a predictable state container that enables developers to manage the application's state in a centralized manner. Redux follows a unidirectional data flow and makes it easier to track and debug changes in the application state.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.REACT,
  },
  {
    icon: "/icons/skills/front-end/nextjs.svg",
    href: "https://nextjs.org/",
    title: "NextJS",
    description:
      " Framework built on top of React that enables server-side rendering, static site generation, and other advanced features. It simplifies the development of complex React applications by providing built-in routing, data fetching, and server-side rendering capabilities.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.REACT,
  },
  {
    icon: "/icons/skills/front-end/react_router.svg",
    href: "https://reactrouter.com/en/main",
    title: "React router",
    description:
      "Popular library used for routing in React applications. It allows developers to define different routes and map them to specific components, enabling navigation between different views within a React application.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.REACT,
  },
  {
    icon: "/icons/skills/front-end/material_ui.svg",
    href: "https://mui.com/",
    title: "MaterialUI",
    description:
      "Popular React component library that implements the Material Design guidelines created by Google. It provides a set of pre-built, customizable UI components that developers can use to create visually appealing and consistent user interfaces.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.REACT,
  },
  {
    icon: "/icons/skills/front-end/antdesign.svg",
    href: "https://ant.design/",
    title: "AntDesign",
    description:
      "Widely-used React component library that offers a rich set of UI components following the principles of the Ant Design system. It provides ready-to-use components for building modern and responsive web applications.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.REACT,
  },
  {
    icon: "/icons/skills/front-end/react_query.svg",
    href: "https://tanstack.com/query/v3/",
    title: "React Query",
    description:
      " Library that simplifies data fetching and state management in React applications. It provides a declarative API for managing asynchronous data, caching, and synchronization with the server, making it easier to handle complex data requirements.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.REACT,
  },
  {
    icon: "/icons/skills/front-end/tailwind.svg",
    href: "https://tailwindcss.com/",
    title: "Tailwind",
    description:
      "Utility-first CSS framework that provides a set of pre-defined CSS classes. It allows developers to rapidly build custom user interfaces by composing these utility classes, eliminating the need for writing custom CSS styles from scratch.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.OTHER,
  },
  {
    icon: "/icons/skills/front-end/sass.svg",
    href: "https://sass-lang.com/",
    title: "Sass",
    description:
      "Preprocessor scripting language that extends CSS. It provides additional features such as variables, nesting, mixins, and functions, which enhance the maintainability and reusability of CSS code.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.OTHER,
  },
  {
    icon: "/icons/skills/front-end/vue.svg",
    href: "https://vuejs.org/",
    title: "Vue",
    description:
      "Progressive JavaScript framework for building user interfaces. It follows a component-based architecture similar to React and provides a reactive data binding system. Vue is known for its simplicity and ease of integration into existing projects.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.VUE,
  },
  {
    icon: "/icons/skills/front-end/nuxt.svg",
    href: "https://nuxtjs.org/",
    title: "Nuxt",
    description:
      "Framework built on top of Vue.js that simplifies the development of Vue applications. It provides features like server-side rendering, static site generation, and routing out of the box, enabling developers to create performant and SEO-friendly applications.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.VUE,
  },
  {
    icon: "/icons/skills/front-end/pinia.svg",
    href: "https://pinia.vuejs.org/",
    title: "Pinia",
    description:
      "State management library specifically designed for Vue applications. It follows a Vuex-like pattern and provides a centralized store to manage application state. Pinia emphasizes type safety and scalability, making it an efficient choice for large Vue projects.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.VUE,
  },
  {
    icon: "/icons/skills/front-end/eth.svg",
    href: "https://docs.ethers.org/v5/",
    title: "Ethers.js",
    description:
      "JavaScript library for interacting with the Ethereum blockchain. It provides a set of APIs that simplify tasks such as sending transactions, interacting with smart contracts, and working with blockchain data. Ethers.js is commonly used in Ethereum dApp development.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.WEB3,
  },
  {
    icon: "/icons/skills/front-end/wagmi.svg",
    href: "https://wagmi.sh/",
    title: "wagmi",
    description: "Collection of React Hooks containing everything you need to start working with Ethereum.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.WEB3,
  },
  {
    icon: "/icons/skills/front-end/rxjs.png",
    href: "https://rxjs.dev/",
    title: "rxjs",
    description:
      "Reactive programming library for JavaScript that enables developers to work with asynchronous and event-based data streams. It provides a wide range of operators and utilities for composing, transforming, and manipulating data streams, making it easier to handle complex asynchronous operations.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.OTHER,
  },
  {
    icon: "/icons/skills/front-end/astro.svg",
    href: "https://astro.build/",
    title: "Astro",
    description:
      "Modern static site generator that allows developers to build websites using a mix of static and dynamic components. It enables the creation of performant and optimized websites by generating static HTML, CSS, and JavaScript files, while also supporting dynamic functionality through server-rendered components. Astro simplifies the development process by providing a single codebase for both server and client rendering, and it offers flexibility in choosing different front-end frameworks or libraries for building components.",
    category: SKILL_TYPES.FRONT_END,
    subCategory: SKILL_CATEGORIES.FRONT_END.OTHER,
  },
];

export const BACK_END_SKILLS = [
  {
    icon: null,
    href: "",
    title: "NodeJS",
    description: "Library for building nice user interfaces",
    category: SKILL_TYPES.BACK_END,
    subCategory: null,
  },
  {
    icon: null,
    href: "",
    title: "NestJS",
    description: "Library for building nice user interfaces",
    category: SKILL_TYPES.BACK_END,
    subCategory: null,
  },
  {
    icon: null,
    href: "",
    title: "Firebase",
    description: "Library for building nice user interfaces",
    category: SKILL_TYPES.BACK_END,
    subCategory: null,
  },
  {
    icon: null,
    href: "",
    title: "MongoDB",
    description: "Library for building nice user interfaces",
    category: SKILL_TYPES.BACK_END,
    subCategory: null,
  },
];

export const OTHER_SKILLS = [
  {
    icon: "/icons/skills/other/git.svg",
    href: "https://git-scm.com/",
    title: "Git",
    description:
      "Version control system widely used for tracking changes in source code during software development. It enables collaboration among developers, allowing them to work on different branches, merge changes, and manage code history efficiently.",
    category: SKILL_TYPES.OTHER,
    subCategory: null,
  },
  {
    icon: "/icons/skills/other/figma.svg",
    href: "https://www.figma.com/",
    title: "Figma",
    description:
      "Cloud-based design and prototyping tool used by designers and developers to create user interfaces and interactive prototypes. It offers real-time collaboration, a powerful vector editing environment, and features for design handoff, making it popular for team-based design workflows.",
    category: SKILL_TYPES.OTHER,
    subCategory: null,
  },
  {
    icon: "/icons/skills/other/npm.svg",
    href: "https://www.npmjs.com/",
    title: "npm",
    description:
      "Package manager for JavaScript programming language. It is the default package manager for Node.js, and it allows developers to easily install, manage, and publish open-source packages and dependencies required for their projects.",
    category: SKILL_TYPES.OTHER,
    subCategory: null,
  },
  {
    icon: "/icons/skills/other/yarn.svg",
    href: "https://yarnpkg.com/",
    title: "yarn",
    description:
      "Package manager for JavaScript, designed as an alternative to npm. It offers faster and more reliable package installations by using a deterministic algorithm and a local cache. Yarn also provides features like parallel installations and workspaces for managing multiple packages within a single codebase.",
    category: SKILL_TYPES.OTHER,
    subCategory: null,
  },
  {
    icon: "/icons/skills/other/webpack.svg",
    href: "https://webpack.js.org/",
    title: "Webpack",
    description:
      "Module bundler for JavaScript applications. It takes modules with dependencies and generates static assets, such as JavaScript files and CSS stylesheets, which are optimized for deployment in a browser. Webpack simplifies the management of complex front-end projects by providing a configurable build pipeline.",
    category: SKILL_TYPES.OTHER,
    subCategory: null,
  },
  {
    icon: "/icons/skills/other/vite.svg",
    href: "https://vitejs.dev/",
    title: "vite",
    description:
      "Fast and opinionated build tool for modern web applications. It aims to provide instant server startup, fast hot module replacement, and efficient development experience by leveraging modern JavaScript features like ES modules. Vite is commonly used with frameworks like Vue.js and React.",
    category: SKILL_TYPES.OTHER,
    subCategory: null,
  },
  {
    icon: "/icons/skills/other/eslint.svg",
    href: "https://eslint.org/",
    title: "eslint",
    description:
      "Linting tool for JavaScript and TypeScript codebases. It helps identify and enforce coding conventions, detect potential errors, and maintain code quality through customizable rules. ESLint integrates with various editors and build systems, providing real-time feedback to developers.",
    category: SKILL_TYPES.OTHER,
    subCategory: null,
  },
  {
    icon: "/icons/skills/other/prettier.svg",
    href: "https://prettier.io/",
    title: "prettier",
    description:
      "Code formatter that automatically formats code to enforce consistent styling and improve readability. It supports multiple programming languages, including JavaScript, TypeScript, HTML, CSS, and more. Prettier simplifies the task of maintaining consistent code formatting across teams and projects.",
    category: SKILL_TYPES.OTHER,
    subCategory: null,
  },
  {
    icon: "/icons/skills/other/docker.svg",
    href: "https://www.docker.com/",
    title: "Docker",
    description:
      "Platform that allows developers to automate the deployment and scaling of applications using containerization. Containers provide an isolated and lightweight environment to run applications, ensuring consistent behavior across different computing environments. Docker simplifies the process of packaging applications and their dependencies, making them more portable and efficient to deploy.",
    category: SKILL_TYPES.OTHER,
    subCategory: null,
  },
  {
    icon: "/icons/skills/other/abc.png",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "English",
    description: "B2 - speak, read, write",
    category: SKILL_TYPES.OTHER,
    subCategory: null,
  },
];

export const SKILLS = {
  [SKILL_TYPES.FRONT_END]: FRONT_END_SKILLS,
  [SKILL_TYPES.BACK_END]: [],
  [SKILL_TYPES.OTHER]: OTHER_SKILLS,
};
