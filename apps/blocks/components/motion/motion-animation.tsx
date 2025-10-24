import { Variants } from "motion/react";

export type AnimationDirection = "up" | "down" | "left" | "right";

interface AnimationOptions {
    delay?: number;
    duration?: number;
    distance?: number;
    includeBlur?: boolean;
}

const createVariants = (
    direction: AnimationDirection,
    options: AnimationOptions = {},
): Variants => {
    const {
        delay = 0,
        duration = 0.4,
        distance = 10,
        includeBlur = false,
    } = options;

    const axis = direction === "up" || direction === "down" ? "y" : "x";
    const directionValue =
        direction === "up" || direction === "left" ? distance : -distance;

    return {
        hidden: {
            [axis]: directionValue,
            opacity: 0,
            filter: includeBlur ? "blur(10px)" : "none",
        },
        visible: {
            // [axis]: 0,
            x: 0,
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration,
                delay,
                ease: "easeInOut",
            },
        },
    };
};

// Fade animations
export const fadeAnimations = {
    up: (options?: AnimationOptions) => createVariants("up", options),
    down: (options?: AnimationOptions) => createVariants("down", options),
    left: (options?: AnimationOptions) => createVariants("left", options),
    right: (options?: AnimationOptions) => createVariants("right", options),
    in: (options?: AnimationOptions): Variants => ({
        hidden: {
            opacity: 0,
            filter: options?.includeBlur ? "blur(10px)" : "none",
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: options?.duration || 0.4,
                delay: options?.delay || 0,
                ease: "easeInOut",
            },
        },
    }),
};

// Slide animations (alias for fade animations with more distance)
export const slideAnimations = {
    up: (options?: AnimationOptions) =>
        fadeAnimations.up({ ...options, distance: options?.distance || 20 }),
    down: (options?: AnimationOptions) =>
        fadeAnimations.down({ ...options, distance: options?.distance || 20 }),
    left: (options?: AnimationOptions) =>
        fadeAnimations.left({ ...options, distance: options?.distance || 20 }),
    right: (options?: AnimationOptions) =>
        fadeAnimations.right({ ...options, distance: options?.distance || 20 }),
};

// Scale animations
export const scaleAnimations = {
    in: (options?: AnimationOptions): Variants => ({
        hidden: {
            scale: 0.95,
            opacity: 0,
            filter: options?.includeBlur ? "blur(5px)" : "none",
        },
        visible: {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: options?.duration || 0.3,
                delay: options?.delay || 0,
                ease: "easeInOut",
            },
        },
    }),
    out: (options?: AnimationOptions): Variants => ({
        hidden: {
            scale: 1.05,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: options?.duration || 0.3,
                delay: options?.delay || 0,
                ease: "easeInOut",
            },
        },
    }),
};

// Viewport configuration
export const viewportConfig = {
    once: { once: true },
    always: { once: false, margin: "-100px" },
};
