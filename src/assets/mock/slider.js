/**
 * Created by Administrator on 2019/3/10.
 */
import Mock from 'mockjs';
export function SliderImg(width,height){
  var Random=Mock.Random;
  var width =width||"400";
  var height= height || "150";
 var imgSrc=Random.image(`${width}x${height}`,'#eee');
  return imgSrc;
}
