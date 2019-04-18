// @ts-ignore
const coucouObject = {
  property: 'v1'
};

function coucou(coucuoObject: any) {
  console.log(coucuoObject);

  setTimeout(() => {
    coucuoObject.property = 'v2';
    console.log(coucuoObject);
  }, 2000);
}

function superCoucou(coucuoObject: any) {
  coucou(coucuoObject);
}

superCoucou(coucouObject);

setTimeout(() => {
  console.log(coucouObject);
}, 4000);
