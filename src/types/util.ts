import type { Component, ComponentProps, JSX } from "solid-js";

export type WithChildren<T = {}> = T & {
  children?: JSX.Element;
};

export type WithClassName<T = {}> = T & {
  className?: string;
};

export type WithProps<T extends keyof JSX.IntrinsicElements | Component<U>, U = any> =
  ComponentProps<T>;
