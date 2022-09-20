import { CaasAPI } from '../../../src/datasource/remote/caasapi/caasapi';


describe('Get Random Cat From API', () => {
    it('', async () => {
      let api = new CaasAPI();

      let resp = await api.getRandomCat();

      console.log(resp);
      
      expect(resp.hasError()).toBe(false);
    });
  });

