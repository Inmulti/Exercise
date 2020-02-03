export default {
  name: 'Tree',
  children: [
    {
      name: 'Home',
      children: [],
    },
    {
      name: 'Furniture',
      children: [
        {
          name: 'Chair',
          children: [],
        },
        {
          name: 'Table',
          children: [
            {
              name: 'Leg',
              children: [
                {
                  name: 'Wood',
                  children: [],
                },
                {
                  name: 'Metal',
                  children: [],
                },
              ],
            },
            {
              name: 'Top',
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: 'It',
      children: [
        {
          name: 'Office',
          children: [],
        },
        {
          name: 'Outside',
          children: [
            {
              name: 'Park',
              children: [
                {
                  name: 'Lake',
                  children: [],
                },
                {
                  name: 'Stuff',
                  children: [],
                },
              ],
            },
            {
              name: 'Dog',
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
