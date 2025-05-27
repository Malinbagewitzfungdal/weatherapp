export function getLocalTimeFromOffset(timezoneOffsetInSeconds) {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const local = new Date(utc + timezoneOffsetInSeconds * 1000);
    return local.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  