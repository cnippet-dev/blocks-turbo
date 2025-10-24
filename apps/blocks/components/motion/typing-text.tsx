"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    motion,
    MotionProps,
    useInView,
    UseInViewOptions,
    Variants,
} from "motion/react";
import { cn } from "@/lib/utils";

// ... (Type definitions remain the same)
interface TypingTextProps extends Omit<MotionProps, "children"> {
    children?: React.ReactNode;
    text?: string;
    texts?: string[];
    speed?: number;
    delay?: number;
    showCursor?: boolean;
    cursor?: string;
    cursorClassName?: string;
    loop?: boolean;
    pauseDuration?: number;
    className?: string;
    onComplete?: () => void;
    startOnView?: boolean;
    once?: boolean;
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    animation?: any;
    inViewMargin?: UseInViewOptions["margin"];
}

// ... (Helper functions `textFromChildren` and `renderTypedChildren` remain the same)
const textFromChildren = (children: React.ReactNode): string => {
    return React.Children.toArray(children)
        .map((child) => {
            if (typeof child === "string" || typeof child === "number") {
                return child.toString();
            }
            if (React.isValidElement(child)) {
                const props = child.props as { children?: React.ReactNode };
                if (props.children) {
                    return textFromChildren(props.children);
                }
            }
            return "";
        })
        .join("");
};

const renderTypedChildren = (
    children: React.ReactNode,
    typedLength: number,
): React.ReactNode => {
    let charIndex = 0;

    const mapChildren = (nodes: React.ReactNode): React.ReactNode[] => {
        return React.Children.toArray(nodes).map((node) => {
            if (charIndex >= typedLength) {
                return null;
            }

            if (typeof node === "string" || typeof node === "number") {
                const text = node.toString();
                const remainingChars = typedLength - charIndex;
                if (remainingChars >= text.length) {
                    charIndex += text.length;
                    return text;
                } else {
                    const partialText = text.slice(0, remainingChars);
                    charIndex = typedLength;
                    return partialText;
                }
            }

            if (React.isValidElement(node)) {
                const props = node.props as {
                    children?: React.ReactNode;
                    [key: string]: unknown;
                };
                if (!props.children) {
                    return node;
                }
                return React.cloneElement(
                    node,
                    { ...props },
                    mapChildren(props.children),
                );
            }
            return null;
        });
    };

    return mapChildren(children);
};

const cursorVariants: Variants = {
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1],
        },
    },
};

export function TypingText({
    children,
    text,
    texts,
    speed = 100,
    delay = 0,
    showCursor = true,
    cursorClassName = "",
    cursor = "|",
    loop = false,
    pauseDuration = 2000,
    className,
    onComplete,
    startOnView = true,
    once = false,
    inViewMargin,
    ...props
}: TypingTextProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, {
        once,
        margin: inViewMargin as UseInViewOptions["margin"],
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const shouldStart = !startOnView || isInView;

    const textToType = useMemo(() => {
        if (children) {
            return textFromChildren(children);
        }
        const textArray = texts && texts.length > 0 ? texts : [text];
        return textArray[currentTextIndex] ?? "";
    }, [children, text, texts, currentTextIndex]);

    // --- BUG FIX ---
    // This new useEffect resets the animation state when the component leaves
    // the viewport, but only if `once` is false.
    useEffect(() => {
        if (!isInView && !once) {
            setCurrentIndex(0);
            setIsTyping(false);
        }
    }, [isInView, once]);

    useEffect(() => {
        if (!shouldStart || isTyping) return;

        const timeout = setTimeout(() => {
            setIsTyping(true);
        }, delay);

        return () => clearTimeout(timeout);
    }, [delay, shouldStart, isTyping]);

    useEffect(() => {
        if (!isTyping) return;

        if (currentIndex < textToType.length) {
            const timeout = setTimeout(() => {
                setCurrentIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else {
            onComplete?.();

            if (loop) {
                const timeout = setTimeout(() => {
                    setCurrentIndex(0);
                    if (texts && texts.length > 1) {
                        setCurrentTextIndex(
                            (prev) => (prev + 1) % texts.length,
                        );
                    }
                }, pauseDuration);

                return () => clearTimeout(timeout);
            }
        }
    }, [
        currentIndex,
        textToType,
        isTyping,
        speed,
        loop,
        texts,
        pauseDuration,
        onComplete,
    ]);

    const finalVariants = {
        container: {
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.02 } },
            exit: { opacity: 0 },
        },
    };
    const MotionComponent = motion.span;

    return (
        <MotionComponent
            ref={ref}
            variants={finalVariants.container as Variants}
            initial="hidden"
            animate={shouldStart ? "show" : "hidden"}
            exit="exit"
            className={cn("whitespace-pre-wrap", className)}
            {...props}
        >
            <span>
                {children
                    ? renderTypedChildren(children, currentIndex)
                    : textToType.slice(0, currentIndex)}
                {showCursor && (
                    <motion.span
                        variants={cursorVariants}
                        animate="blinking"
                        className={cn(
                            "text-foreground ms-1 inline-block w-px font-normal select-none",
                            cursorClassName,
                        )}
                    >
                        {cursor}
                    </motion.span>
                )}
            </span>
        </MotionComponent>
    );
}
