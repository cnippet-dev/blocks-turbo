import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                    "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                animated:
                    "group relative inline-flex items-center justify-center overflow-hidden rounded-none border border-neutral-900 bg-white shadow-none hover:bg-transparent dark:bg-black",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                xl: "h-12 px-6",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    slideColor?: string;
    hoverTextColor?: string;
    defaultTextColor?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            asChild = false,
            slideColor,
            hoverTextColor,
            defaultTextColor,
            children,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : "button";

        const defaultSlideColor = slideColor || "bg-black dark:bg-white";
        const defaultHoverText = hoverTextColor || "text-white dark:text-black";
        const defaultText =
            defaultTextColor || "text-slate-950 dark:text-white";

        if (variant === "animated") {
            return (
                <Comp
                    className={cn(buttonVariants({ variant, size, className }))}
                    ref={ref}
                    {...props}
                >
                    <div
                        className={cn(
                            "absolute inset-0 w-full -translate-x-full transition-transform duration-300 group-hover:translate-x-[0%]",
                            defaultSlideColor
                        )}
                    />
                    <span
                        className={cn(
                            "relative z-10 inline-flex items-center justify-center gap-2 duration-300",
                            defaultText,
                            `group-hover:${defaultHoverText}`
                        )}
                    >
                        {children}
                    </span>
                </Comp>
            );
        }

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {children}
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
