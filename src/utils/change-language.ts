export function getNewProps<T>(
  moduleName: string,
  replaceProps: (parsedProps: T) => void,
) {
  const replacedHTML = window.swup.cache.get(
    location.pathname,
  )?.html;
  if (replacedHTML === undefined) {
    return;
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(
    replacedHTML,
    'text/html',
  );
  const newComponentPropText = doc
    .querySelector(
      `astro-island[component-url*="/${moduleName}."]`,
    )
    ?.getAttribute('props');
  if (typeof newComponentPropText !== 'string') {
    return;
  }

  const propObject = parseAstroProps<T>(
    newComponentPropText,
  );
  replaceProps(propObject);
}

type BasicType = string | number | boolean;

type AstroComponentPropValue =
  | BasicType
  | [
      0,
      (
        | BasicType
        | Record<string, AstroComponentPropValue>
      ),
    ]
  | [1, BasicType[]];

function parseAstroProps<T>(jsonText: string): T {
  const propObject = JSON.parse(jsonText);
  type Obj = { [key: string]: BasicType | Obj };
  const travelProperty = (
    array: AstroComponentPropValue,
  ): BasicType | Obj | (BasicType | Obj)[] => {
    if (!Array.isArray(array)) {
      return array;
    }
    if (array[0] === 0) {
      if (typeof array[1] !== 'object') {
        return array[1];
      }
      const result: Obj = {};
      for (const key in array[1]) {
        result[key] = travelProperty(
          array[1][
            key
          ] as AstroComponentPropValue,
        );
      }
      return result;
    }

    return array[1].map(
      value => travelProperty(value) as Obj,
    );
  };
  for (const key in propObject) {
    propObject[key] = travelProperty(
      propObject[key],
    );
  }
  return propObject;
}
