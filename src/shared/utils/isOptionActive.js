export const isOptionActive = (value) =>
  !(
    value === "0" ||
    value === "false" ||
    value === false ||
    value === 0 ||
    !value
  );
