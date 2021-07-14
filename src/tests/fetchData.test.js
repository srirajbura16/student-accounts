import fetchData from '../fetchData';

describe('fetches data from a server', () => {
  test('return an array length of 25', async () => {
    const data = await fetchData();
    expect(data[0]).toHaveLength(25);
  });

  test('the fetch fails with an error', async () => {
    try {
      await fetchData();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
});
