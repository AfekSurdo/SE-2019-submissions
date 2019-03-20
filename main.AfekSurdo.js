

function union (x, y) {
    if (Array.isArray(x) && Array.isArray(y))
        return union_arrays(x,y);
    
    if (typeof x == 'object' && typeof y == 'object')
        return union_obj(x,y);
   
   return;
}


function union_obj(obj1,obj2){
    var obj = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    var res = [];
    
    for (var k in obj) {
        if (obj.hasOwnProperty(k))  // <-- optional
          res.push(obj[k]);
    }

    return res;
}

function same (obj1, obj2) {
    JSON.stringify(obj1) === JSON.stringify(obj2)
}


function union_arrays (x,y) {
 
    var obj = {};
    for (var i = 0; i<x.length; i++)
       obj[i] = x[i];
    for (var j = 0; j<y.length; j++,i++)
       obj[i] = y[j];
    
    var res = arr.filter((el, _, arr) => {
        return arr.filter(el2 => el2 === el).length === 1
    });
  
   
    return res;
}