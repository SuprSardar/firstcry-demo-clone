import { lazy } from "react";

export const $ = (path, el = document) => el.querySelector(path);

export const $$ = (path, el = document) => el.querySelectorAll(path);

export const AE = (event, fn, el = document, capture = false) => el.addEventListener(event, fn, capture);

export const RE = (event, fn, el = document, capture = false) => el.removeEventListener(event, fn, capture);

export const CE = (tag, attr = {}) => Object.assign(document.createElement(tag), attr);

export const CN = (...classes) => classes.filter(Boolean).join(" ");

export const Wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const Lazy = (module, delay = 350) => lazy(async () => (await Promise.all([module, Wait(delay)]))[0]);

export const FormatTimeAgo = (date) => {
  let duration = (+new Date(date) - +new Date()) / 1000;

  const UNITS = [
    ["seconds", 60],
    ["minutes", 60],
    ["hours", 24],
    ["days", 7],
    ["weeks", 4.34524],
    ["months", 12],
    ["years", Infinity],
  ];

  for (const [unit, amount] of UNITS) {
    if (Math.abs(duration) < amount)
      return new Intl.RelativeTimeFormat("en-GB", { numeric: "auto", style: "short" }).format(Math.round(duration), unit);
    duration /= amount;
  }

  return date;
};

export const FormatDate = (date, options = {}) => new Date(date).toLocaleDateString("en-GB", options);
