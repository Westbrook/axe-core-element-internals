function testUserAgent(re: RegExp): boolean {
  return typeof window !== 'undefined' && window.navigator != null
    ? re.test(window.navigator.userAgent)
    : false;
}

function testPlatform(re: RegExp): boolean {
  return typeof window !== 'undefined' && window.navigator != null
    ? re.test(window.navigator.platform)
    : false;
}

export function isMac(): boolean {
  return testPlatform(/^Mac/);
}

export function isIPhone(): boolean {
  return testPlatform(/^iPhone/);
}

export function isIPad(): boolean {
  return (
    testPlatform(/^iPad/) ||
    // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    (isMac() && navigator.maxTouchPoints > 1)
  );
}

export function isIOS(): boolean {
  return isIPhone() || isIPad();
}

export function isAppleDevice(): boolean {
  return isMac() || isIOS();
}

export function isChrome(): boolean {
  return testUserAgent(/Chrome/);
}

export function isSeamonkey(): boolean {
  return testUserAgent(/Seamonkey/);
}

export function isWebKit(): boolean {
  return testUserAgent(/AppleWebKit/) && !isChrome();
}

export function isFirefox(): boolean {
  return testUserAgent(/Firefox/) && !isSeamonkey();
}

export function isAndroid(): boolean {
  return testUserAgent(/Android/);
}
