
import sharp from 'sharp'


async function imgResize  (sourceImg:string, name:String, width:number , height:number, newLocation:string){

   return sharp(sourceImg)
    .resize(width,height)
    .toFormat('png')
    .toFile(`${newLocation}/${name}_${width}_${height}.png`)

   
}
  


export default imgResize;