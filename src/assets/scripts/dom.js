/**
 * Created by Administrator on 2019/3/9.
 */
export function hasClass(el,className){
  var Reg=new  RegExp('(^|\\s)' + className + '(\\s|$)')
  return Reg.test(el.className)
}

export function addClass(el,className){
  if(hasClass(el,className)){
    return
  }else{
    var newClassNmae =el.className.split(' ');
    //将所有的className进行切割
    newClassNmae.push(className);
    //将切割出来的数组，推入新class，进行拼接
    el.className = newClassNmae.join(' ');
    //重新组成新的数组className；
  }
}

