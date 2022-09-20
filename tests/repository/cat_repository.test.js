import { CatRepository } from '../../src/repository/cat_repository';


describe('Get Random Cat From Repository', () => {
    it('', async () => {
      let repo = new CatRepository();

      let resp = await repo.getRandomCat();

      console.log(resp);
      
      expect(resp.hasError()).toBe(false);
    });
  });

