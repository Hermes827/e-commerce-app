import expressLoader from './express';
// import dependencyInjectorLoader from './dependencyInjector';
import mongooseLoader from './mongoose';
// import jobsLoader from './jobs';
// import Logger from './logger';
//We have to import at least all the events once so they can be triggered
// import './events';
  export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  console.log('MongoDB Initialized');
  await expressLoader({ app: expressApp });
  console.log('Express Initialized');

};
