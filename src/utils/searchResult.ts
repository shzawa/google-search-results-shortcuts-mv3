const ignoreWrapperList = [
  "table",
  "g-inner-card",
  "g-expandable-container",
  "g-accordion-expander",
  "g-scrolling-carousel",
  "[jsslot]",
];

let focusedIndex = 0;
let focusTargetList: HTMLAnchorElement[] = [];

export const setupFocusTarget = () => {
  const style = document.createElement("style");
  document.body.appendChild(style);

  focusTargetList = getLinks();
  focusTargetList.forEach((el) => {
    el.setAttribute("data-gsrks-anchor", "");
  });
};

const getLinks = (): HTMLAnchorElement[] => {
  const selectorList = ["g-link > a:first-of-type", "a > h3"];

  // get elements both of g-link and h3 for keep order
  const gLinkAndH3List = Array.from(
    document.querySelectorAll(
      selectorList.map((selector) => `#search ${selector}`).join(`,`)
    )
  );

  const ignoreElementList = Array.from(
    document.querySelectorAll(
      ignoreWrapperList
        .map((wrapper) =>
          selectorList
            .map((selector) => `#search ${wrapper} ${selector}`)
            .join(`,`)
        )
        .join(`,`)
    )
  );

  const filteredElementList = gLinkAndH3List.filter(
    (el) => !ignoreElementList.includes(el)
  );

  // extract anchor elements
  const anchorList = filteredElementList.reduce(
    (acc: HTMLAnchorElement[], el) => {
      if (el.tagName === "H3") {
        // a > h3 -> a
        acc.push(el.parentElement as HTMLAnchorElement);
      } else {
        // g-link > a
        if (el.children.length === 0) {
          acc.push(el as HTMLAnchorElement);
        }
      }
      return acc;
    },
    []
  );

  return anchorList as HTMLAnchorElement[];
};

const getNextPageLink = (): HTMLAnchorElement | null => {
  return document.querySelector("#pnnext");
};

const getPrevPageLink = (): HTMLAnchorElement | null => {
  return document.querySelector("#pnprev");
};

const focusItem = (index: number) => {
  const inRange = index >= 0 && index < focusTargetList.length;
  if (!inRange) return false;

  focusedIndex = index;
  const target = focusTargetList[focusedIndex];
  target.focus();

  return true;
};

export const focusNext = () => {
  return focusItem(focusedIndex + 1);
};

export const focusPrev = () => {
  return focusItem(focusedIndex - 1);
};

export const moveToNextPage = () => {
  const link = getNextPageLink();
  if (!link) return false;

  link.click();
  return true;
};

export const moveToPrevPage = () => {
  const link = getPrevPageLink();
  if (!link) return false;

  link.click();
  return true;
};

export const resetFocus = () => {
  return focusItem(0);
};
