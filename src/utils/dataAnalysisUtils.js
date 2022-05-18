/**
 * Finds the distinct values of a given field in a data set
 * @param {string} field The field name to retrieve values from data objects
 * @param {[{}]} data The array of objects to be parsed through
 * @returns Array of distinct values in the given attribute of the data set
 */
export function getDistinctFieldValues(field, data) {
  const fieldValues = data.map((x) => x[field]);
  return [...new Set(fieldValues)];
}

/**
 * Finds the sum of the values of a given field in a data set
 * @param {string} field The field name to retrieve values from data objects
 * @param {[{}]} data The array of objects to be parsed through
 * @returns {number} Sum of field values
 */
export function sumFieldValues(field, data) {
  const fieldValues = data.map((x) => x[field]);
  return fieldValues.reduce((prev, curr) => prev + curr, 0);
}

/**
 *
 * @param {string} field The field name used to filter data by
 * @param {*} data The array of objects to be parsed through
 * @returns
 */
export function groupByField(field, data) {
  const distinctFieldValues = getDistinctFieldValues(field, data);
  const dataGroupedByField = distinctFieldValues.map((value) => {
    return data.filter((d) => d[field] === value);
  });
  return dataGroupedByField;
}

export function haveIdenticalFieldValues(field, data) {
  return data.every((v) => v[field] === data[0][field]);
}
