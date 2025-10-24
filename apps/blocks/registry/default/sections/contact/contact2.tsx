import { RiCheckFill, RiDropboxFill, RiRssFill } from "@remixicon/react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function ContactSection() {
    return (
        <section className="relative bg-gray-50 p-10">
            <div className="mx-auto max-w-full">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-8 rounded-3xl bg-white px-8 py-28 shadow-sm">
                        <div className="mx-auto max-w-md">
                            <h2 className="font-funn mb-8 px-4 text-3xl font-medium text-gray-900">
                                Talk to our Sales team.
                            </h2>

                            <div className="space-y-6 px-4">
                                <div className="flex items-start gap-3 text-sm">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-7"
                                    >
                                        <path
                                            d="M6.46189 7.68148C7.08035 8.90556 7.90089 10.0537 8.92349 11.0763C9.94609 12.0989 11.0942 12.9194 12.3183 13.5379L13.5811 12.2751C13.8509 12.0053 14.2696 11.9532 14.5973 12.1487L16.7891 13.4563C17.2555 13.7345 17.3354 14.3772 16.9514 14.7612L14.6841 17.0286C14.2634 17.4493 13.6482 17.6201 13.0833 17.4335C11.9773 17.068 10.9021 16.5829 9.87814 15.9781C8.70133 15.2831 7.59203 14.43 6.58091 13.4189C5.5698 12.4078 4.71674 11.2985 4.02171 10.1217C3.41692 9.09765 2.9318 8.02253 2.56634 6.91652C2.37968 6.35162 2.55053 5.73642 2.97121 5.31573L5.2386 3.04835C5.62256 2.66438 6.26531 2.74433 6.54351 3.21067L7.85108 5.4025C8.04658 5.73022 7.99451 6.14886 7.72467 6.4187L6.46189 7.68148Z"
                                            stroke="#1A1925"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                    <div>
                                        <span className="font-semibold text-gray-900">
                                            Get a tailored demo.
                                        </span>
                                        <span className="text-gray-600">
                                            {" "}
                                            Discover how Beam fits your business
                                            and explore custom plans.
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 text-sm">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-7"
                                    >
                                        <path
                                            d="M9.99984 6.45832V9.99999L12.2915 12.2917M17.7082 9.99999C17.7082 14.2572 14.257 17.7083 9.99984 17.7083C5.74264 17.7083 2.2915 14.2572 2.2915 9.99999C2.2915 5.74279 5.74264 2.29166 9.99984 2.29166C14.257 2.29166 17.7082 5.74279 17.7082 9.99999Z"
                                            stroke="#1A1925"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                    <div>
                                        <span className="font-semibold text-gray-900">
                                            Start your Enterprise trial.
                                        </span>
                                        <span className="text-gray-600">
                                            {" "}
                                            Experience how Beam boosts your
                                            workflow and impact.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 grid grid-cols-2 gap-4">
                                <div className="rounded-lg bg-gray-100 p-6">
                                    <div className="font-funn mb-1 font-medium text-gray-900">
                                        3x faster{" "}
                                        <span className="text-gray-600">
                                            to build and deploy.
                                        </span>
                                        <RiDropboxFill className="mt-20 size-8 text-blue-600" />
                                    </div>
                                </div>
                                <div className="rounded-lg bg-gray-100 p-6">
                                    <div className="font-funn mb-1 font-medium text-gray-900">
                                        98% faster{" "}
                                        <span className="text-gray-600">
                                            time to market.
                                        </span>
                                        <RiRssFill className="mt-20 size-8 text-red-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 space-y-4 px-4 text-sm">
                                <div className="flex items-start gap-2">
                                    <div className="mt-0.5 flex size-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                                        <RiCheckFill className="size-3 text-white" />
                                    </div>
                                    <span className="text-gray-700">
                                        Connect Beam with your favorite apps
                                        effortlessly.
                                    </span>
                                </div>

                                <div className="flex items-start gap-2">
                                    <div className="mt-0.5 flex size-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                                        <RiCheckFill className="size-3 text-white" />
                                    </div>
                                    <span className="text-gray-700">
                                        Optimize workflows and save time with
                                        Beam.
                                    </span>
                                </div>

                                <div className="flex items-start gap-2">
                                    <div className="mt-0.5 flex size-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                                        <RiCheckFill className="size-3 text-white" />
                                    </div>
                                    <span className="text-gray-700">
                                        Adaptable features to match your
                                        business needs.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-8 py-28">
                        <form className="mx-auto max-w-md space-y-6">
                            <div className="grid gap-2">
                                <Label htmlFor="company-email">
                                    Company Email{" "}
                                    <span className="text-blue-600">*</span>
                                </Label>
                                <Input
                                    id="company-email"
                                    type="email"
                                    placeholder="beam@connect.com"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="your-name">
                                        Your Name{" "}
                                        <span className="text-blue-600">*</span>
                                    </Label>
                                    <Input
                                        id="your-name"
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="phone-number">
                                        Phone Number{" "}
                                        <span className="text-blue-600">*</span>
                                    </Label>
                                    <Input
                                        id="phone-number"
                                        type="tel"
                                        placeholder="(555) 000-0000"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="company-website">
                                        Company Website{" "}
                                        <span className="text-blue-600">*</span>
                                    </Label>
                                    <Input
                                        id="company-website"
                                        type="url"
                                        placeholder="cnippet.dev"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="company-size">
                                        Company Size{" "}
                                        <span className="text-blue-600">*</span>
                                    </Label>
                                    <Select required>
                                        <SelectTrigger className="bg-white">
                                            <SelectValue placeholder="50-200" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1-10">
                                                1-10
                                            </SelectItem>
                                            <SelectItem value="11-50">
                                                11-50
                                            </SelectItem>
                                            <SelectItem value="50-200">
                                                50-200
                                            </SelectItem>
                                            <SelectItem value="201-500">
                                                201-500
                                            </SelectItem>
                                            <SelectItem value="500+">
                                                500+
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="message">
                                    How can we help?{" "}
                                    <span className="text-blue-600">*</span>
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="Write your message here..."
                                    className="min-h-40 resize-none bg-white"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-4 pt-4 md:flex-row md:items-center md:justify-between">
                                <p className="w-1/2 text-sm text-gray-600">
                                    By submitting, I acknowledge that I have
                                    read and agree to the{" "}
                                    <a
                                        href="#"
                                        className="text-gray-900 underline hover:no-underline"
                                    >
                                        Privacy Policy.
                                    </a>
                                </p>

                                <Button
                                    type="submit"
                                    className="shadow-8 bg-violet-600 hover:bg-violet-700"
                                >
                                    Submit Form
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="z-[2] mx-auto w-full">
                <div className="absolute top-0 right-0">
                    <div className="icon w-embed">
                        <svg
                            width="259"
                            height="149"
                            viewBox="0 0 259 149"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_450_3432)">
                                <path
                                    d="M-302.316 -438C-345.03 -335.213 -349.374 -223.272 -302.316 -158.312C-247.534 -82.6905 -123.092 -70.7382 91.5694 -211.017C-164.578 460.946 374.375 -176.105 204.032 128"
                                    stroke="#EEEEF0"
                                    strokeWidth="40"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_450_3432">
                                    <rect
                                        width="259"
                                        height="149"
                                        fill="white"
                                    ></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="absolute right-0 bottom-0">
                    <div className="icon w-embed">
                        <svg
                            width="311"
                            height="139"
                            viewBox="0 0 311 139"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_465_30889)">
                                <path
                                    d="M-300.282 416.905C-212.053 484.767 -105.05 517.935 -30.1242 489.294C57.0991 455.951 100.852 338.843 20.912 95.1887C603.682 516.525 127.829 -168.945 377.485 74.3019"
                                    stroke="#EEEEF0"
                                    strokeWidth="40"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_465_30889">
                                    <rect
                                        width="311"
                                        height="139"
                                        fill="white"
                                    ></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
