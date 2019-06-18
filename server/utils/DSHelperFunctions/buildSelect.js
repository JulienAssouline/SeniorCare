
const buildSelect = (input) => {
  const validKeys = Object.keys(input).filter(
      key => input[key] != undefined
    );

  const finalString = validKeys
    .map((key, i) => `${key} = $${i + 1}`)
    .join(" AND ")


  const queryValues = validKeys.map(key => input[key]);

  if (Object.keys(input).length > 0) {
    return {
      text: `SELECT * FROM seniorcare.caregiver WHERE ${finalString}`,
      values: queryValues
    }
  }
  else {
    return {
      text: `SELECT * FROM seniorcare.caregiver`
    }
  }
}

module.exports = buildSelect;
