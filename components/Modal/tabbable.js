const tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  const zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  // Otherwise we need to check some styles
  const style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue('overflow') !== 'visible' : style.getPropertyValue('display') === 'none';
}

function visible(element) {
  let parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  const nodeName = element.nodeName.toLowerCase();
  const res = (tabbableNode.test(nodeName) && !element.disabled) || (nodeName === 'a' ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  return focusable(element, false);
}

export function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll('*'), 0).filter(tabbable);
}
