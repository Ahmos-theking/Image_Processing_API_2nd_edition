import { Router, Request, Response } from 'express';
import citiesNames from '../../Utility/dataBase'
import path from 'path'
import { existsSync } from 'fs'
import { promises as fs } from 'fs'
import sharp from 'sharp'
import imgResize from './ImgResize';

const city = Router()

city.get('/', async (req:Request, res:Response) => {
  // get the height , width and name from the quarey data
  const name = req.query.name
  const widthString = req.query.width
  const heightString = req.query.height
  let width, height

  //check if the width and height not a Number and parse them to valid numbers
  if (widthString) {
    width = parseInt(widthString as string)
  }
  if (heightString) {
    height = parseInt(heightString as string)
  }

  //check if the city name is valid in the database or not
  const cityName = citiesNames.includes(name as string)

  // resolve the path to get the exact image by name you want to resize
  const imageLoc = path.resolve('./') + `/assets/full/${name}.jpg`
  
  //  find if the user enter a valid data or not like ( valid city name , city are avialble in the database and check the exact location)
  if (cityName === undefined) {
    return res
      .status(404)
      .send('Not Found!! we can not found the city you have entered')
  } else if (cityName === false) {
    return res
      .status(404)
      .send('sorry, The city name you have enterd not found')
  } else if (existsSync(imageLoc) === false) {
    return res.status(404).send('Sorry, this city doese not have photo')
  } else {
    // check that the user enter a valid height and width then resize the image to the thumbnail folder and the send it back to the user
    if (!height || !width) {
      return res.status(404).send('Please enter a valid height and width')
    } else {
      const newLocation = path.resolve('./') + `/assets/thumbnail`
      if (!existsSync(newLocation)) {
        fs.mkdir(path.resolve('./') + `/assets/thumbnail`);
      }
     await imgResize(imageLoc, name as string, width, height, newLocation);

       
     res.sendFile(`${newLocation}/${name}_${width}_${height}.png`);
     
    
    };
    
  };
  
  
});



export default city;
