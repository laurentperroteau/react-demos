// @ts-ignore
const coucouObject = {
  property: 'v1'
};

function superCoucou(coucuoObject: any) {
  coucou(coucuoObject);
}

function coucou(coucuoObject: any) {
  console.log(coucuoObject);

  setTimeout(() => {
    coucuoObject.property = 'v2';
    console.log(coucuoObject);
  }, 2000);
}

superCoucou(coucouObject);

setTimeout(() => {
  console.log(coucouObject);
}, 4000);
