import fetchData from '../fetchData';

describe('fetches data from a server', () => {
  it('returns an array length of 25', async () => {
    const data = await fetchData();
    expect(data[0]).toHaveLength(25);
  });

  it('the fetch fails with an error', async () => {
    try {
      await fetchData();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
});
