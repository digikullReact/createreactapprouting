//modules -->
//Two important things in writing /building an application 
// obviously lnaguage basics /frameworks/library
// structuring your app -->
// So js structure its app in modules -->
// You created a file ,you wrote some code -->thta code can be a function ,a variable ,array 
// now you want to reuse it 

// es6 module system 
// commonjs module system -->which is used by node js 

const sum=(i,j)=>{

    return i+j;

}

// no default export 
export const subtract=(i,j)=>{

    return i+j;

}

// no default export 
export const multiply=(i,j)=>{

    return i+j;

}

export const data=88;  // non default export 

export  default sum;  //default export  // one default export is allowed per file
//export default data;