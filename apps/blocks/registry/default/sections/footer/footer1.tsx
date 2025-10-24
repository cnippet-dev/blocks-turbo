import Link from "next/link";
import Image from "next/image";
import { RiArtboard2Fill } from "@remixicon/react";
import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Component() {
    const footerLinks = [
        {
            title: "Explore",
            links: [
                {
                    title: "Curated Classes",
                    href: "#",
                },
                {
                    title: "Retreats Locations",
                    href: "#",
                },
                {
                    title: "Training",
                    href: "#",
                },
                {
                    title: "Wellness blog",
                    href: "#",
                },
            ],
        },
        {
            title: "Guidance",
            links: [
                {
                    title: "Book a free call",
                    href: "#",
                },
                {
                    title: "FAQs & Supports",
                    href: "#",
                },
                {
                    title: "Workplace Policy",
                },
            ],
        },
        {
            title: "Support",
            links: [
                {
                    title: "Articles",
                    href: "#",
                },
                {
                    title: "Documentation",
                    href: "#",
                },
                {
                    title: "Tutorials",
                    href: "#",
                },
                {
                    title: "Help Center",
                },
            ],
        },
        {
            title: "Connect",
            links: [
                {
                    title: "Community Forum",
                    href: "#",
                },
                {
                    title: "Instagram",
                    href: "#",
                },
                {
                    title: "YouTube",
                    href: "#",
                },
            ],
        },
    ];

    return (
        <footer className="w-full bg-stone-100 px-10 pt-20">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-2xl bg-stone-700 px-6 py-6 text-white">
                    <div className="mx-auto flex flex-col items-center justify-between gap-6 lg:flex-row">
                        <div className="flex w-full items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white p-2">
                                <RiArtboard2Fill className="size-10 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-light">
                                    Your mindset shapes{" "}
                                    <span className="text-yellow-400 italic">
                                        everything.
                                    </span>
                                </h2>
                                <p className="text-sm text-stone-300">
                                    Inhale the future, exhale the past.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full gap-3">
                            <Input
                                placeholder="Enter Your Email"
                                className="flex-1 rounded-full bg-white px-4 py-6 text-stone-900 placeholder:text-base placeholder:text-stone-700"
                            />
                            <Button className="rounded-full bg-yellow-300 px-6 py-6 text-base font-medium text-stone-900 hover:bg-yellow-600">
                                Join Sana—today
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto py-12">
                    <div className="grid justify-between gap-8 lg:grid-cols-12">
                        <div className="col-span-3">
                            <Card className="border-stone-200 bg-white shadow-sm">
                                <CardContent className="relative p-0">
                                    <div className="relative h-80 overflow-hidden rounded-lg">
                                        <Image
                                            src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1741613286/h6.jpg"
                                            alt="Maya Patel"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-2 w-full px-2">
                                        <div className="rounded-md bg-white px-2 py-1">
                                            <div className="mb-1 flex items-center gap-2">
                                                <h3 className="font-medium text-stone-900">
                                                    Maya Patel
                                                </h3>
                                                <CheckCircle className="h-4 w-4 text-blue-500" />
                                            </div>
                                            <p className="text-sm text-stone-600">
                                                Meditation Mentor
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="col-span-1" />
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-8">
                            {footerLinks.map((link) => (
                                <div key={link.title}>
                                    <h4 className="mb-4 font-medium text-stone-900">
                                        {link.title}
                                    </h4>
                                    <ul className="space-y-5">
                                        {link.links.map((link) => (
                                            <li key={link.title}>
                                                <Link
                                                    href={link.href || "#"}
                                                    className="text-stone-600 hover:text-stone-900"
                                                >
                                                    {link.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Separator className="my-8 bg-stone-400" />

                    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                        <div className="text-sm text-stone-600">
                            <p>
                                We honor the land we practice on.{" "}
                                <span className="font-medium text-orange-500">
                                    2%
                                </span>{" "}
                                of profits support Indigenous-led wellness
                                initiatives.
                            </p>
                        </div>

                        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                            <div className="flex gap-4">
                                <Link
                                    href="#"
                                    className="text-sm text-stone-600 hover:text-stone-900"
                                >
                                    Terms
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-stone-600 hover:text-stone-900"
                                >
                                    Code of Ethics
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-stone-600 hover:text-stone-900"
                                >
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 text-sm text-stone-500">
                        ©2025, Sana.co
                    </div>
                </div>
            </div>
        </footer>
    );
}


// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Separator } from "@/components/ui/separator";
// import Image from "next/image";
// import {
//     RiFacebookFill,
//     RiLinkedinFill,
//     RiNewspaperFill,
// } from "@remixicon/react";
// import { Label } from "@/components/ui/label";

// const footerLinks = [
//     {
//         title: "Sections",
//         links: [
//             { title: "Hero", href: "#" },
//             { title: "Navbar", href: "#" },
//             { title: "Pricing", href: "#" },
//             { title: "Footer", href: "#" },
//         ],
//     },
//     {
//         title: "Pages",
//         links: [
//             { title: "Landing page", href: "#" },
//             { title: "About page", href: "#" },
//             { title: "Contact page", href: "#" },
//             { title: "Pricing page", href: "#" },
//         ],
//     },
//     {
//         title: "Company",
//         links: [
//             { title: "About us", href: "#" },
//             { title: "Contact us", href: "#" },
//             { title: "Profile", href: "#" },
//             { title: "Changelog", href: "#" },
//             { title: "Blogs", href: "#" },
//         ],
//     },
// ];

// export default function EchoFooter() {
//     return (
//         <footer className="font-kumb mx-auto w-full max-w-full border-t-0 border-b px-4 md:px-10 xl:px-20 2xl:px-30 dark:border-neutral-800 dark:bg-black">
//             <div className="border border-t-0 border-b-0 dark:border-neutral-800">
//                 <div className="grid grid-cols-1 gap-0 lg:grid-cols-6">
//                     <div className="grid grid-cols-2 divide-x md:grid-cols-4 lg:col-span-4">
//                         <div className="col-span-4 flex items-center gap-6 border-b px-4 py-3">
//                             <div className="flex items-center">
//                                 <Image
//                                     src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1753948225/logo-light.png"
//                                     alt=""
//                                     className="size-12"
//                                     width={1080}
//                                     height={1080}
//                                     suppressHydrationWarning
//                                 />
//                                 <span className="font-mono text-2xl font-medium tracking-wider text-stone-800">
//                                     CNIPPET
//                                 </span>
//                             </div>
//                             <Separator
//                                 orientation="vertical"
//                                 className="h-7 bg-neutral-400"
//                             />
//                             <div className="mr-auto flex items-center gap-4 [&_a]:text-gray-600 [&_a]:hover:text-gray-900">
//                                 <Link href="#">
//                                     <RiLinkedinFill className="h-5 w-5" />
//                                 </Link>
//                                 <Link href="#">
//                                     <RiFacebookFill className="h-5 w-5" />
//                                 </Link>
//                             </div>
//                         </div>
//                         {footerLinks.map((section, index) => (
//                             <div
//                                 key={`${section.title}-${index}`}
//                                 className="px-6 py-10"
//                             >
//                                 <h3 className="mb-6 font-medium text-gray-900">
//                                     {section.title}
//                                 </h3>
//                                 <ul className="space-y-6">
//                                     {section.links.map((link) => (
//                                         <li key={link.title}>
//                                             <Link
//                                                 href={link.href}
//                                                 className="text-[15px] text-neutral-700 underline-offset-1 hover:text-black hover:underline"
//                                             >
//                                                 {link.title}
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                         <div className="col-span-4 border-t pt-8">
//                             <div className="mb-8 flex w-full justify-between px-4 text-xs">
//                                 <div className="flex items-center gap-4 text-gray-600 underline-offset-2 [&_a]:hover:text-gray-900 [&_a]:hover:underline">
//                                     <Link href="#">Terms</Link>
//                                     <Link href="#">Privacy</Link>
//                                     <Link href="#">Cancellation</Link>
//                                 </div>
//                                 <div className="text-sm text-gray-700">
//                                     ©2025 All Rights Reserved - cnippet.dev
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex flex-col gap-3 space-y-6 border border-t-0 border-r-0 bg-gray-100 p-4 lg:col-span-2">
//                         <div className="mb-3">
//                             <div className="mb-6 flex items-center gap-2">
//                                 <RiNewspaperFill />
//                                 <h3 className="font-semibold text-gray-900">
//                                     Newsletter
//                                 </h3>
//                             </div>
//                             <div className="space-y-4 rounded-lg bg-white p-4 shadow-sm">
//                                 <div>
//                                     <Label
//                                         htmlFor="email"
//                                         className="mb-2 block text-sm text-gray-600"
//                                     >
//                                         Email address
//                                     </Label>
//                                     <Input
//                                         id="email"
//                                         type="email"
//                                         placeholder="jonathan@cnippet.co"
//                                         className="w-full"
//                                     />
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <Checkbox id="terms" />
//                                     <Label
//                                         htmlFor="terms"
//                                         className="text-xs text-gray-600"
//                                     >
//                                         I agree with the{" "}
//                                         <Link
//                                             href="#"
//                                             className="text-blue-600 hover:underline"
//                                         >
//                                             Term and Conditions
//                                         </Link>
//                                     </Label>
//                                 </div>
//                                 <Button
//                                     type="submit"
//                                     className="shadow-8 w-full bg-violet-600 hover:bg-violet-700"
//                                 >
//                                     Register
//                                 </Button>
//                             </div>
//                         </div>
//                         <div className="mt-auto mb-4 text-center">
//                             <div className="flex">
//                                 <svg
//                                     className="w-20 shrink-0 text-black *:data-lift:transition-transform *:data-lift:duration-300 group-hover:*:data-lift:-translate-y-0.5 group-data-selected:*:data-lift:translate-y-0 sm:w-30"
//                                     aria-hidden="true"
//                                     fill="none"
//                                     viewBox="0 0 120 72"
//                                 >
//                                     <path
//                                         className="fill-white"
//                                         d="M56.095 6 8.464 33.5c-.957.553-1.435 1.276-1.435 2v3c0 .724.478 1.448 1.435 2L56.095 68c1.913 1.105 5.015 1.105 6.928 0l47.632-27.5c.956-.552 1.435-1.276 1.435-2v-3c-.001-.724-.479-1.447-1.435-2L63.023 6c-1.913-1.104-5.015-1.104-6.928 0"
//                                     ></path>
//                                     <g stroke="currentColor" opacity="0.1">
//                                         <path
//                                             fill="currentColor"
//                                             d="M60.425 52.5c-.478-.276-.478-.724 0-1L87.272 36c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L63.89 53.5c-.478.276-1.253.276-1.732 0zM54.363 49c-.956-.552-.956-1.448 0-2l3.464-2c.957-.552 2.508-.552 3.464 0 .957.552.957 1.448 0 2l-3.464 2c-.956.552-2.507.552-3.464 0Z"
//                                         ></path>
//                                         <path
//                                             strokeLinecap="round"
//                                             d="m63.89 43.5 12.124-7"
//                                         ></path>
//                                         <path
//                                             fill="currentColor"
//                                             d="M46.57 44.5c-.48-.276-.48-.724 0-1L73.415 28c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L50.033 45.5c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             strokeLinecap="round"
//                                             d="m43.105 42.5 10.392-6"
//                                         ></path>
//                                         <path
//                                             fill="currentColor"
//                                             d="M37.043 39c-.478-.276-.478-.724 0-1L63.89 22.5c.478-.276 1.253-.276 1.732 0l1.732 1c.478.276.478.724 0 1L40.507 40c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             strokeLinecap="round"
//                                             d="m33.579 37 10.392-6"
//                                         ></path>
//                                     </g>
//                                     <path
//                                         stroke="currentColor"
//                                         strokeOpacity="0.4"
//                                         d="M112.09 35.5c-.001-.724-.479-1.447-1.435-2L63.023 6c-1.913-1.104-5.015-1.104-6.928 0L8.464 33.5c-.957.553-1.435 1.276-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2L63.023 65c-1.913 1.105-5.015 1.105-6.928 0L8.464 37.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2L63.023 68c-1.913 1.105-5.015 1.105-6.928 0L8.464 40.5c-.957-.552-1.435-1.276-1.435-2v-3"
//                                     ></path>
//                                     <path
//                                         stroke="currentColor"
//                                         strokeOpacity="0.4"
//                                         d="M17.99 40c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0L108.057 35c.478.276.478.724 0 1L60.426 63.5c-.479.276-1.254.276-1.732 0z"
//                                     ></path>
//                                     <path
//                                         fill="currentColor"
//                                         stroke="currentColor"
//                                         d="M11.062 36c-.478-.276-.478-.724 0-1L58.694 7.5c.478-.276 1.253-.276 1.732 0L63.024 9c.478.276.478.724 0 1L15.392 37.5c-.478.276-1.253.276-1.732 0z"
//                                         opacity="0.1"
//                                     ></path>
//                                     <g data-lift="true">
//                                         <path
//                                             className="fill-current"
//                                             fillOpacity="0.3"
//                                             stroke="currentColor"
//                                             d="M60.425 47.5c-.478-.276-.478-.724 0-1L87.272 31c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L63.89 48.5c-.478.276-1.253.276-1.732 0zM54.363 44c-.956-.552-.956-1.448 0-2l3.464-2c.957-.552 2.508-.552 3.464 0 .957.552.957 1.448 0 2l-3.464 2c-.956.552-2.507.552-3.464 0Z"
//                                         ></path>
//                                         <circle
//                                             cx="2"
//                                             cy="2"
//                                             r="2"
//                                             className="fill-white"
//                                             stroke="currentColor"
//                                             transform="matrix(.86603 -.5 .86603 .5 56.095 41)"
//                                         ></circle>
//                                         <path
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             d="m63.89 38.5 12.124-7"
//                                         ></path>
//                                         <path
//                                             className="fill-white"
//                                             stroke="currentColor"
//                                             d="M46.57 39.5c-.48-.276-.48-.724 0-1L73.415 23c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L50.033 40.5c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             d="m43.105 37.5 10.392-6"
//                                         ></path>
//                                         <path
//                                             className="fill-white"
//                                             stroke="currentColor"
//                                             d="M37.043 34c-.478-.276-.478-.724 0-1L63.89 17.5c.478-.276 1.253-.276 1.732 0l1.732 1c.478.276.478.724 0 1L40.507 35c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             d="m33.579 32 10.392-6"
//                                         ></path>
//                                         <path
//                                             className="fill-white"
//                                             stroke="currentColor"
//                                             d="M11.062 31c-.478-.276-.478-.724 0-1L58.694 2.5c.478-.276 1.253-.276 1.732 0L63.024 4c.478.276.478.724 0 1L15.392 32.5c-.478.276-1.253.276-1.732 0z"
//                                         ></path>
//                                     </g>
//                                 </svg>
//                                 <svg
//                                     className="w-20 shrink-0 text-indigo-700 *:data-lift:transition-transform *:data-lift:duration-300 group-hover:*:data-lift:-translate-y-0.5 group-data-selected:*:data-lift:translate-y-0 sm:w-30"
//                                     aria-hidden="true"
//                                     fill="none"
//                                     viewBox="0 0 120 72"
//                                 >
//                                     <path
//                                         className="fill-white"
//                                         d="M56.095 7 8.464 34.5c-.957.553-1.435 1.276-1.435 2v3c0 .724.478 1.448 1.435 2L56.095 69c1.913 1.105 5.015 1.105 6.928 0l47.632-27.5c.956-.552 1.435-1.276 1.435-2v-3c-.001-.724-.479-1.447-1.435-2L63.023 7c-1.913-1.104-5.015-1.104-6.928 0"
//                                     ></path>
//                                     <path
//                                         stroke="currentColor"
//                                         strokeOpacity="0.4"
//                                         d="M112.09 36.5c-.001-.724-.479-1.447-1.435-2L63.023 7c-1.913-1.104-5.015-1.104-6.928 0L8.464 34.5c-.957.553-1.435 1.276-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2L63.023 66c-1.913 1.105-5.015 1.105-6.928 0L8.464 38.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2L63.023 69c-1.913 1.105-5.015 1.105-6.928 0L8.464 41.5c-.957-.552-1.435-1.276-1.435-2v-3"
//                                     ></path>
//                                     <path
//                                         fill="currentColor"
//                                         stroke="currentColor"
//                                         d="M11.062 37c-.478-.276-.478-.724 0-1L58.694 8.5c.478-.276 1.253-.276 1.732 0l2.598 1.5c.478.276.478.724 0 1L15.392 38.5c-.478.276-1.253.276-1.732 0z"
//                                         opacity="0.1"
//                                     ></path>
//                                     <g
//                                         fill="currentColor"
//                                         stroke="currentColor"
//                                         opacity="0.1"
//                                     >
//                                         <path d="M19.723 42c-.479-.276-.479-.724 0-1l47.63-27.5c.48-.276 1.255-.276 1.733 0L89.004 25c.479.276.479.724 0 1l-47.63 27.5c-.48.276-1.255.276-1.733 0z"></path>
//                                         <path d="M34.445 31.5c-.479-.276-.479-.724 0-1L49.167 22c.478-.276 1.254-.276 1.732 0l23.383 13.5c.478.276.478.724 0 1L59.559 45c-.478.276-1.253.276-1.732 0z"></path>
//                                     </g>
//                                     <path
//                                         fill="currentColor"
//                                         stroke="currentColor"
//                                         d="M45.703 57c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1L60.426 64.5c-.478.276-1.254.276-1.732 0z"
//                                         opacity="0.1"
//                                     ></path>
//                                     <g data-lift="true">
//                                         <path
//                                             className="fill-white"
//                                             stroke="currentColor"
//                                             d="M11.062 32c-.478-.276-.478-.724 0-1L58.694 3.5c.478-.276 1.253-.276 1.732 0L63.024 5c.478.276.478.724 0 1L15.392 33.5c-.478.276-1.253.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             className="fill-white"
//                                             stroke="currentColor"
//                                             d="M19.723 37c-.479-.276-.479-.724 0-1l47.63-27.5c.48-.276 1.255-.276 1.733 0L89.004 20c.479.276.479.724 0 1l-47.63 27.5c-.48.276-1.255.276-1.733 0z"
//                                         ></path>
//                                         <path
//                                             stroke="currentColor"
//                                             strokeOpacity="0.3"
//                                             d="M37.909 44.5c-.478-.276-.478-.724 0-1l9.526-5.5c.479-.276 1.254-.276 1.732 0l1.732 1c.479.276.479.724 0 1l-9.526 5.5c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             className="fill-white"
//                                             stroke="currentColor"
//                                             d="M34.445 26.5c-.479-.276-.479-.724 0-1L49.167 17c.478-.276 1.254-.276 1.732 0l23.383 13.5c.478.276.478.724 0 1L59.559 40c-.478.276-1.253.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             stroke="currentColor"
//                                             strokeOpacity="0.3"
//                                             d="M56.096 36c-.479-.276-.479-.724 0-1l9.526-5.5c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1L59.56 37c-.479.276-1.254.276-1.732 0zM70.818 25.5c-.478-.276-.478-.724 0-1l9.526-5.5c.479-.276 1.254-.276 1.733 0l1.732 1c.478.276.478.724 0 1l-9.527 5.5c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             className="fill-white"
//                                             stroke="currentColor"
//                                             d="M45.703 52c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1L60.426 59.5c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                         <path
//                                             stroke="currentColor"
//                                             strokeOpacity="0.3"
//                                             d="M93.335 34.5c-.478-.276-.478-.724 0-1l6.062-3.5c.478-.276 1.254-.276 1.732 0l1.732 1c.478.276.478.724 0 1l-6.062 3.5c-.478.276-1.254.276-1.732 0zM77.746 43.5c-.478-.276-.478-.724 0-1L89.004 36c.478-.276 1.254-.276 1.732 0l1.732 1c.479.276.479.724 0 1L81.21 44.5c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                     </g>
//                                 </svg>
//                                 <svg
//                                     className="w-20 shrink-0 text-black *:data-lift:transition-transform *:data-lift:duration-300 group-hover:*:data-lift:-translate-y-0.5 group-data-selected:*:data-lift:translate-y-0 sm:w-30"
//                                     aria-hidden="true"
//                                     fill="none"
//                                     viewBox="0 0 120 72"
//                                 >
//                                     <g data-lift="true">
//                                         <path
//                                             shapeRendering="geometricPrecision"
//                                             fill="white"
//                                             d="M56.066 6 8.435 33.5C7.478 34.053 7 34.776 7 35.5v3c0 .724.478 1.448 1.435 2L56.066 68c1.913 1.105 5.015 1.105 6.929 0l47.631-27.5c.957-.552 1.435-1.276 1.435-2v-3c0-.724-.479-1.447-1.435-2L62.995 6c-1.914-1.104-5.015-1.104-6.929 0"
//                                         ></path>
//                                         <path
//                                             shapeRendering="geometricPrecision"
//                                             stroke="currentColor"
//                                             d="M112.09 35.496c-.001-.723-.479-1.447-1.435-2l-47.632-27.5c-1.913-1.104-5.015-1.104-6.928 0l-47.631 27.5c-.957.553-1.435 1.277-1.435 2m105.061 0c0 .724-.479 1.448-1.435 2l-47.632 27.5c-1.913 1.105-5.015 1.105-6.928 0l-47.631-27.5c-.957-.552-1.435-1.276-1.435-2m105.061 0v3c0 .724-.479 1.448-1.435 2l-47.632 27.5c-1.913 1.105-5.015 1.105-6.928 0l-47.631-27.5c-.957-.552-1.435-1.276-1.435-2v-3"
//                                         ></path>
//                                         <path
//                                             shapeRendering="geometricPrecision"
//                                             stroke="currentColor"
//                                             strokeOpacity="0.3"
//                                             d="M11.062 35.996c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.253-.276 1.732 0l30.31 17.5c.479.277.479.724 0 1l-47.63 27.5c-.479.276-1.255.276-1.733 0zM45.703 55.996c-.478-.276-.478-.724 0-1l47.632-27.5c.478-.276 1.254-.276 1.732 0l12.99 7.5c.479.276.479.724 0 1l-47.631 27.5c-.478.276-1.254.276-1.732 0z"
//                                         ></path>
//                                         <circle
//                                             shapeRendering="geometricPrecision"
//                                             cx="1.5"
//                                             cy="1.5"
//                                             r="1.5"
//                                             fill="currentColor"
//                                             transform="matrix(.86603 -.5 .86603 .5 16.258 35.496)"
//                                         ></circle>
//                                         <path
//                                             shapeRendering="geometricPrecision"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             d="m22.32 33.496 3.464-2M56.961 13.496l3.465-2M49.168 17.996l4.33-2.5M42.24 21.996l3.463-2"
//                                         ></path>
//                                         <path
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeOpacity="0.3"
//                                             d="m41.373 38.496 23.383-13.5"
//                                         ></path>
//                                         <path
//                                             shapeRendering="geometricPrecision"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             d="m53.498 55.496 6.928-4M69.086 46.496l6.928-4M84.674 37.496l6.929-4"
//                                         ></path>
//                                         <path
//                                             shapeRendering="geometricPrecision"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeOpacity="0.3"
//                                             d="m56.096 56.996 9.526-5.5M71.684 47.996l9.526-5.5M87.273 38.996l9.526-5.5M58.693 58.496l8.66-5M74.282 49.496l8.66-5M89.87 40.496l8.66-5M46.57 38.496l18.186-10.5"
//                                         ></path>
//                                         <rect
//                                             shapeRendering="geometricPrecision"
//                                             width="28"
//                                             height="2"
//                                             fill="currentColor"
//                                             rx="0.5"
//                                             transform="matrix(.86603 -.5 .86603 .5 33.579 34.496)"
//                                         ></rect>
//                                         <rect
//                                             shapeRendering="geometricPrecision"
//                                             width="32"
//                                             height="2"
//                                             fill="currentColor"
//                                             rx="0.5"
//                                             transform="matrix(.86603 -.5 .86603 .5 35.311 37.496)"
//                                         ></rect>
//                                         <rect
//                                             shapeRendering="geometricPrecision"
//                                             width="10"
//                                             height="3"
//                                             fill="currentColor"
//                                             rx="1.5"
//                                             transform="matrix(.86603 -.5 .86603 .5 48.301 39.996)"
//                                         ></rect>
//                                         <rect
//                                             shapeRendering="geometricPrecision"
//                                             width="10"
//                                             height="3"
//                                             fill="currentColor"
//                                             fillOpacity="0.3"
//                                             rx="1.5"
//                                             transform="matrix(.86603 -.5 .86603 .5 58.693 33.996)"
//                                         ></rect>
//                                     </g>
//                                 </svg>
//                             </div>
//                             <div className="mt-auto rounded-lg border bg-white p-4 shadow-sm">
//                                 <h4 className="mb-2 font-semibold text-gray-900">
//                                     Get the latest newsletter
//                                 </h4>
//                                 <p className="text-sm text-gray-600">
//                                     Cnippet become a tech-driven legal solutions
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }
