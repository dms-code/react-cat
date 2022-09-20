import { CatController } from '../../src/controller/cat_controller';


describe('Get Random Cat From Controller', () => {
    it('', async () => {
      let ctr = new CatController();

      let url = await ctr.getRandomCat();

      expect(url!=null).toBe(true);
    
    });
  });

