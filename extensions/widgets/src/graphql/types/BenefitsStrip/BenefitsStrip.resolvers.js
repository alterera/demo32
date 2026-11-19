export default {
  Query: {
    benefitsStripWidget: (_, { items }) => ({
      items: Array.isArray(items) ? items : []
    })
  }
};
