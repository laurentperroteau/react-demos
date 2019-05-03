// @ts-ignore
const coucouObject = {
  property: 'v1'
};

function ChildComponent(coucouObject: any) {
  console.log('Coucou child', coucouObject);

  setTimeout(() => {
    coucouObject.property = 'v2';
    console.log("Coucou modifier à l'intérieur du ChildComponent après 2s", coucouObject);
  }, 2000);
}

function ParentComponent(coucouObject: any) {
  ChildComponent(coucouObject);
}

ParentComponent(coucouObject);

setTimeout(() => {
  console.log("Coucou à l'extérieur des composants après 4s",coucouObject);
}, 4000);
