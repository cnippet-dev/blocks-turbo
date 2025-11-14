import { type Registry } from "shadcn/schema"

export const blocks: Registry["items"] = [
  {
    name: "banner-01",
    description: "A simple banner.",
    type: "registry:block",
    files: [
      {
        path: "blocks/banner-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["banner"],
  },
  {
    name: "banner-02",
    description: "A simple banner.",
    type: "registry:block",
    files: [
      {
        path: "blocks/banner-02.tsx",
        type: "registry:component",
      },
    ],
    categories: ["banner"],
  },
  {
    name: "banner-03",
    description: "A simple banner.",
    type: "registry:block",
    files: [
      {
        path: "blocks/banner-03.tsx",
        type: "registry:component",
      },
    ],
    categories: ["banner"],
  },
  {
    name: "banner-04",
    description: "A simple banner.",
    type: "registry:block",
    files: [
      {
        path: "blocks/banner-04.tsx",
        type: "registry:component",
      },
    ],
    categories: ["banner"],
  },
  {
    name: "banner-05",
    description: "A simple banner.",
    type: "registry:block",
    files: [
      {
        path: "blocks/banner-05.tsx",
        type: "registry:component",
      },
    ],
    categories: ["banner"],
  },
  {
    name: "blog-01",
    description: "A simple blog.",
    type: "registry:block",
    files: [
      {
        path: "blocks/blog-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["blog"],
  },
  {
    name: "blog-02",
    description: "A simple blog.",
    type: "registry:block",
    files: [
      {
        path: "blocks/blog-02.tsx",
        type: "registry:component",
      },
    ],
    categories: ["blog"],
  },
  {
    name: "blog-03",
    description: "A simple blog.",
    type: "registry:block",
    files: [
      {
        path: "blocks/blog-03.tsx",
        type: "registry:component",
      },
    ],
    categories: ["blog"],
  },
  {
    name: "blog-04",
    description: "A simple blog.",
    type: "registry:block",
    files: [
      {
        path: "blocks/blog-04.tsx",
        type: "registry:component",
      },
    ],
    categories: ["blog"],
  },
  {
    name: "blog-05",
    description: "A simple blog.",
    type: "registry:block",
    files: [
      {
        path: "blocks/blog-05.tsx",
        type: "registry:component",
      },
    ],
    categories: ["blog"],
  },
  {
    name: "blog-06",
    description: "A simple blog.",
    type: "registry:block",
    files: [
      {
        path: "blocks/blog-06.tsx",
        type: "registry:component",
      },
    ],
    categories: ["blog"],
  },

  {
    name: "dashboard-01",
    type: "registry:block",
    description: "A dashboard with sidebar, charts and data table.",
    dependencies: [
      "@dnd-kit/core",
      "@dnd-kit/modifiers",
      "@dnd-kit/sortable",
      "@dnd-kit/utilities",
      "@tanstack/react-table",
      "zod",
    ],
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "chart",
      "card",
      "select",
      "tabs",
      "table",
      "toggle-group",
      "badge",
      "button",
      "checkbox",
      "dropdown-menu",
      "drawer",
      "input",
      "avatar",
      "sheet",
      "sonner",
    ],
    files: [
      {
        path: "blocks/dashboard-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/dashboard-01/data.json",
        type: "registry:file",
        target: "app/dashboard/data.json",
      },
      {
        path: "blocks/dashboard-01/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/chart-area-interactive.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/data-table.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/nav-documents.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/section-cards.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/site-header.tsx",
        type: "registry:component",
      },
    ],
    categories: ["dashboard"],
    meta: {
      iframeHeight: "1000px",
    },
  },
  {
    name: "sidebar-01",
    type: "registry:block",
    description: "A simple sidebar with navigation grouped by section.",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "dropdown-menu",
    ],
    files: [
      {
        path: "blocks/sidebar-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-01/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-01/components/search-form.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-01/components/version-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "login-01",
    description: "A simple login form.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "field"],
    files: [
      {
        path: "blocks/login-01/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-01/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "login"],
  },
  {
    name: "calendar-01",
    description: "A simple calendar.",
    type: "registry:block",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "blocks/calendar-01.tsx",
        type: "registry:component",
      },
    ],
    categories: ["calendar", "date"],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-start md:py-20 justify-center min-w-0",
      mobile: "component",
    },
  },
  {
    name: "signup-01",
    description: "A simple signup form.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/signup-01/page.tsx",
        target: "app/signup/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/signup-01/components/signup-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "signup"],
  },
  {
    name: "otp-01",
    description: "A simple OTP verification form.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input-otp", "label", "field"],
    files: [
      {
        path: "blocks/otp-01/page.tsx",
        target: "app/otp/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/otp-01/components/otp-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "otp"],
  },
]
