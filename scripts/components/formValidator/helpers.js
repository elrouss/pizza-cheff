export const format = (input) => {
  const { name, value } = input;

  switch (name) {
    case "name":
      input.value = value.replace(/\./, "");
    default:
      break;
  }
};
