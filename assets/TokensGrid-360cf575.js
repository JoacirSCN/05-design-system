import{a as r,j as e}from"./jsx-runtime-c2efdcba.js";function i({tokens:n,hasRemValue:t=!1}){return r("table",{className:"tokens-grid",children:[e("thead",{children:r("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),t&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(n).map(([d,a])=>r("tr",{children:[e("td",{children:d}),e("td",{children:a}),t&&r("td",{children:[Number(a.replace("rem",""))*16,"px"]})]},d))})]})}try{i.displayName="TokensGrid",i.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"Boolean"}}}}}catch{}export{i as T};
//# sourceMappingURL=TokensGrid-360cf575.js.map
