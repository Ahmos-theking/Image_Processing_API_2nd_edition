import supertest from 'supertest';
import app from '../../index';
import imgResize from '../../routes/api/ImgResize';

const request = supertest(app);

describe('Testing the leads endpoint', () => {
    it('Using the endPoint without adding the cityName returns 404', async () => {
      await request.get('/city?name=undefined').expect(404);
    });
  
    it('Using the endPoint with falsy cityName returns 404', async () => {
      await request.get('/city?name=345').expect(404);
    });
  
    it('Using the endPoint with invalid cityName returns 404', async () => {
      await request.get('/city?name=cairo').expect(404);
    });
  
    it('Using the endpoint with a invalid height or width returns 404', async () => {
        await request.get('/city?name=santamonica&width=hu&height=hi').expect(404);
      });

    it('Using the endpoint with a valid city and valid height and width returns 200', async () => {
      await request.get('/city?name=santamonica&width=200&height=200').expect(200);
    });

    it('expect endpoint with a valid city and valid height and width returns name as name_width_height', async () => {
        const result = await request.get('/city?name=santamonica&width=200&height=200')
        expect(result).toBeTruthy();
      });

  });

  it('expect imgResize to return resized image', async()=>{
        const result= await imgResize('D:/Programming/Udacity_FWD/Projects/Image_Api/assets/full/santamonica.jpg',
        'santamonica',200,200,'D:/Programming/Udacity_FWD/Projects/Image_Api/assets/thumbnail');
        expect(result).toBeTruthy()
  });

