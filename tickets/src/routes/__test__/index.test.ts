import request from 'supertest';
import { app } from '../../app';


const creatTicket = async () => {
  return request(app)
    .post('/api/tickets')
    .set('Cookie', await global.signin())
    .send({
      title: 'asdsa',
      price: 20
    })
};
it('can feth a list of tickets', async () => {

  await creatTicket();
  await creatTicket();
  await creatTicket();

  const response = await request(app)
    .get('/api/tickets')
    .send()
    .expect(200);

  expect(response.body.length).toEqual(3);

  // await request(app)
  //   .post('/api/ticets')
  //   .set('Cookie', await global.signin())
  //   .send({
  //     title: 'asdsa',
  //     price: 20
  //   })

});
