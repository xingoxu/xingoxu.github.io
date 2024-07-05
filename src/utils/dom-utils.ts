import type {
  HookHandler,
  HookName,
  HookUnregister,
} from 'swup';

export function addSwupHook<T extends HookName>(
  event: T,
  handler: HookHandler<T>,
) {
  const returnObj: {
    unregister: HookUnregister | undefined;
  } = { unregister: undefined };
  if (window.swup.hooks) {
    returnObj.unregister = window.swup.hooks.on(
      event,
      handler,
    );
  } else {
    document.addEventListener(
      'swup:enable',
      () => {
        returnObj.unregister =
          window.swup.hooks.on(event, handler);
      },
    );
  }
  return returnObj;
}
