import{a as f}from"./chunk-5TVJEQ7M.js";import{b,c as m}from"./chunk-MGOEUE2M.js";var p=b(f());import{h as o}from"atomico";import{c as h,css as u,useRef as c,useEffect as w}from"atomico";function a({dataPopperPlacement:r,targetHeight:i,targetWidth:l}){let d=c(),e=c(),s=i?Math.round(parseInt(i)):0,n=l?Math.round(parseInt(l)):0,t=r?r.split("-")[0]:"";return w(()=>{if(e.current)switch(t){case"right":e.current.style.bottom=(s-8)/2+"px";break;case"bottom":e.current.style.left=(n-8)/2+"px";break;case"top":e.current.style.right=(n-8)/2+"px";break;case"left":e.current.style.bottom=(s-8)/2+"px";break}}),o("host",{shadowDom:!0},o("div",{id:"tooltip",ref:d,class:(0,p.default)("inline-block","bg-blue-200","rounded","p-2","shadow-md","min-w-fit",{"ml-2":t=="right","mt-2":t=="bottom","mb-2":t=="top","mr-2":t=="left"}),"data-popper-placement":r},o("slot",null),o("div",{id:"arrow",class:(0,p.default)({"ml-2":t=="right","mt-2":t=="bottom","mb-2":t=="top","mr-2":t=="left"}),ref:e,"data-popper-arrow":!0})))}a.props={dataPopperPlacement:{type:String,value:""},targetHeight:{type:String,value:"0"},targetWidth:{type:String,value:"0"}};a.styles=[m,u`
    #arrow,
    #arrow::before {
      position: absolute;
      width: 8px;
      height: 8px;
      background: inherit;
    }

    #arrow {
      visibility: hidden;
    }

    #arrow::before {
      visibility: visible;
      content: "";
      transform: rotate(45deg);
    }

    #tooltip[data-popper-placement^="top"] > #arrow {
      bottom: -4px;
    }

    #tooltip[data-popper-placement^="bottom"] > #arrow {
      top: -4px;
    }

    #tooltip[data-popper-placement^="left"] > #arrow {
      right: -4px;
    }

    #tooltip[data-popper-placement^="right"] > #arrow {
      left: -4px;
    }
  `];var g=h(a);customElements.define("seam-tooltip-content",g);export{g as a};
